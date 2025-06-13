import { type NextRequest, NextResponse } from "next/server"
import { Readable } from "stream"
import { exec } from "child_process"
import { writeFile, unlink } from "fs/promises"
import { join } from "path"
import { tmpdir } from "os"
import { v4 as uuidv4 } from "uuid"

// Hàm chuyển đổi Buffer thành Readable stream
function bufferToStream(buffer: Buffer) {
  const readable = new Readable()
  readable._read = () => {} // _read là bắt buộc nhưng không cần thực hiện gì
  readable.push(buffer)
  readable.push(null)
  return readable
}

// Hàm chuyển đổi file .doc sang text sử dụng antiword (cần cài đặt trên server)
async function convertDocToText(filePath: string): Promise<string> {
  return new Promise((resolve, reject) => {
    exec(`antiword ${filePath}`, (error, stdout, stderr) => {
      if (error) {
        console.error(`Lỗi khi chuyển đổi file .doc: ${error.message}`)
        reject(error)
        return
      }
      if (stderr) {
        console.error(`stderr: ${stderr}`)
      }
      resolve(stdout)
    })
  })
}

// Hàm thay thế sử dụng textract nếu không có antiword
async function extractTextFromDoc(filePath: string): Promise<string> {
  try {
    // Thử sử dụng antiword trước
    return await convertDocToText(filePath)
  } catch (error) {
    // Fallback: Trả về thông báo lỗi
    console.error("Không thể chuyển đổi file .doc:", error)
    return "Không thể chuyển đổi file .doc. Vui lòng sử dụng file .txt hoặc .docx."
  }
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get("file") as File

    if (!file) {
      return NextResponse.json({ error: "Không tìm thấy file" }, { status: 400 })
    }

    // Tạo tên file tạm thời
    const tempFilePath = join(tmpdir(), `${uuidv4()}.doc`)

    // Lưu file tạm thời
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)
    await writeFile(tempFilePath, buffer)

    try {
      // Chuyển đổi file .doc sang text
      const text = await extractTextFromDoc(tempFilePath)

      // Xóa file tạm thời
      await unlink(tempFilePath)

      return NextResponse.json({ text })
    } catch (error) {
      console.error("Lỗi khi xử lý file:", error)

      // Đảm bảo xóa file tạm thời ngay cả khi có lỗi
      try {
        await unlink(tempFilePath)
      } catch (unlinkError) {
        console.error("Không thể xóa file tạm thời:", unlinkError)
      }

      return NextResponse.json(
        { error: "Không thể chuyển đổi file .doc. Vui lòng sử dụng file .txt hoặc .docx." },
        { status: 500 },
      )
    }
  } catch (error) {
    console.error("Lỗi server:", error)
    return NextResponse.json({ error: "Lỗi server khi xử lý file" }, { status: 500 })
  }
}
