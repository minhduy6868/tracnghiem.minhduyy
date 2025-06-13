import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, CheckCircle, FileText, Upload, Brain } from "lucide-react"
import Features from "@/components/features"
import SEOFooter from "@/components/seo-footer"

export const metadata: Metadata = {
  title: "Tạo Trắc Nghiệm Online Thông Minh | MinhDuyy",
  description:
    "Công cụ tạo trắc nghiệm online thông minh với AI. Chuyển đổi văn bản thành bài kiểm tra trắc nghiệm chỉ trong vài giây.",
  keywords:
    "tạo trắc nghiệm, tạo trắc nghiệm online, công cụ tạo trắc nghiệm, tạo đề thi trắc nghiệm, minhduyy, trắc nghiệm thông minh",
}

export default function TaoTracNghiemPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Tạo Trắc Nghiệm <span className="text-blue-600">Thông Minh</span> với AI
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Chuyển đổi văn bản thành bài kiểm tra trắc nghiệm chỉ trong vài giây với công nghệ AI tiên tiến.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Link href="/">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Tạo trắc nghiệm ngay
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="#huong-dan">
                <Button variant="outline" size="lg">
                  Hướng dẫn sử dụng
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Cách tạo trắc nghiệm online</h2>
            <p className="text-lg text-gray-700 mb-6">
              Tạo trắc nghiệm online với MinhDuyy vô cùng đơn giản và nhanh chóng. Chỉ với vài bước đơn giản, bạn đã có
              thể tạo ra một bài kiểm tra trắc nghiệm chuyên nghiệp.
              Nhớ XUỐNG DÒNG NHA CÁC FEN!!!
            </p>

            <div className="my-10" id="huong-dan">
              <h3 className="text-2xl font-bold mb-6">Hướng dẫn tạo trắc nghiệm</h3>
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <div className="bg-blue-100 w-8 h-8 rounded-full flex items-center justify-center text-blue-600 font-bold">
                        1
                      </div>
                      Nhập văn bản chứa câu hỏi
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Dán văn bản chứa câu hỏi trắc nghiệm vào ô nhập liệu. Hệ thống hỗ trợ nhiều định dạng văn bản khác
                      nhau.
                    </p>
                    <div className="flex items-center gap-2 text-blue-600">
                      <FileText className="h-5 w-5" />
                      <span className="text-sm">Hỗ trợ nhiều định dạng văn bản</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <div className="bg-blue-100 w-8 h-8 rounded-full flex items-center justify-center text-blue-600 font-bold">
                        2
                      </div>
                      Hoặc tải lên file .txt
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Nếu bạn có sẵn file văn bản chứa câu hỏi, bạn có thể tải lên file .txt để hệ thống phân tích.
                    </p>
                    <div className="flex items-center gap-2 text-blue-600">
                      <Upload className="h-5 w-5" />
                      <span className="text-sm">Tải lên file .txt chứa câu hỏi</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <div className="bg-blue-100 w-8 h-8 rounded-full flex items-center justify-center text-blue-600 font-bold">
                        3
                      </div>
                      Phân tích câu hỏi với AI
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Nhấn nút "Phân tích câu hỏi" để hệ thống AI tự động phân tích văn bản, trích xuất câu hỏi, lựa
                      chọn và đáp án.
                    </p>
                    <div className="flex items-center gap-2 text-blue-600">
                      <Brain className="h-5 w-5" />
                      <span className="text-sm">AI tự động bổ sung thông tin thiếu</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <div className="bg-blue-100 w-8 h-8 rounded-full flex items-center justify-center text-blue-600 font-bold">
                        4
                      </div>
                      Xem trước và chỉnh sửa
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Kiểm tra và chỉnh sửa câu hỏi, lựa chọn và đáp án nếu cần. Bạn có thể thêm, sửa hoặc xóa câu hỏi.
                    </p>
                    <div className="flex items-center gap-2 text-blue-600">
                      <CheckCircle className="h-5 w-5" />
                      <span className="text-sm">Chỉnh sửa dễ dàng trước khi bắt đầu</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <div className="bg-blue-100 w-8 h-8 rounded-full flex items-center justify-center text-blue-600 font-bold">
                        5
                      </div>
                      Bắt đầu làm bài
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Chọn chế độ làm bài (Kiểm tra hoặc Ôn tập) và bắt đầu làm bài trắc nghiệm.
                    </p>
                    <div className="flex items-center gap-2 text-blue-600">
                      <CheckCircle className="h-5 w-5" />
                      <span className="text-sm">Hai chế độ: Kiểm tra và Ôn tập</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="my-10">
              <h3 className="text-2xl font-bold mb-6">Định dạng văn bản được hỗ trợ</h3>
              <p className="text-lg text-gray-700 mb-6">
                Hệ thống MinhDuyy Trắc Nghiệm hỗ trợ nhiều định dạng văn bản khác nhau để tạo trắc nghiệm:
              </p>
              <div className="bg-gray-100 p-6 rounded-lg">
                <h4 className="font-semibold mb-4">Ví dụ định dạng văn bản:</h4>
                <pre className="text-sm text-gray-700 whitespace-pre-wrap">
                  {`Câu 1: Thủ đô của Nhật Bản là gì?
A. Seoul
B. Tokyo
C. Bắc Kinh
D. Bangkok
Đáp án đúng: B

Câu 2: 2 + 2 bằng mấy?
A. 3
B. 4
C. 5
D. 6
Đáp án đúng: B`}
                </pre>
              </div>
              <p className="text-sm text-gray-600 mt-4">
                Nếu thiếu đáp án đúng, hệ thống AI sẽ tự động suy đoán và bổ sung đáp án hợp lý nhất.
              </p>
            </div>

            <div className="text-center mt-12">
              <Link href="/">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Bắt đầu tạo trắc nghiệm
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <Features />

      {/* SEO Footer */}
      <SEOFooter />
    </div>
  )
}
