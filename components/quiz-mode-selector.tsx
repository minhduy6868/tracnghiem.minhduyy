"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Clock, Eye, Shuffle, Target } from "lucide-react"

interface QuizModeSelectorProps {
  questionCount: number
  onModeSelect: (mode: "exam" | "practice") => void
  onBack: () => void
}

export default function QuizModeSelector({ questionCount, onModeSelect, onBack }: QuizModeSelectorProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <Button variant="outline" onClick={onBack}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Quay lại
          </Button>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Chọn chế độ làm bài</h1>
            <p className="text-gray-600">Sẵn sàng với {questionCount} câu hỏi</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer border-2 hover:border-blue-300">
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <CardTitle className="text-xl text-blue-600">Chế độ Kiểm tra</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-gray-500" />
                  <span className="text-sm">Làm tất cả câu hỏi</span>
                </div>
                <div className="flex items-center gap-3">
                  <Target className="h-5 w-5 text-gray-500" />
                  <span className="text-sm">Xem điểm sau khi hoàn thành</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shuffle className="h-5 w-5 text-gray-500" />
                  <span className="text-sm">Thứ tự câu hỏi được tráo</span>
                </div>
              </div>

              <div className="pt-4">
                <Button onClick={() => onModeSelect("exam")} className="w-full bg-blue-600 hover:bg-blue-700" size="lg">
                  Bắt đầu kiểm tra
                </Button>
              </div>

              <p className="text-xs text-gray-500 text-center">Phù hợp để đánh giá kiến thức tổng thể</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer border-2 hover:border-green-300">
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Eye className="h-8 w-8 text-green-600" />
              </div>
              <CardTitle className="text-xl text-green-600">Chế độ Ôn tập</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Eye className="h-5 w-5 text-gray-500" />
                  <span className="text-sm">Xem đáp án ngay lập tức</span>
                </div>
                <div className="flex items-center gap-3">
                  <Target className="h-5 w-5 text-gray-500" />
                  <span className="text-sm">Giải thích chi tiết</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shuffle className="h-5 w-5 text-gray-500" />
                  <span className="text-sm">Thứ tự câu hỏi được tráo</span>
                </div>
              </div>

              <div className="pt-4">
                <Button
                  onClick={() => onModeSelect("practice")}
                  className="w-full bg-green-600 hover:bg-green-700"
                  size="lg"
                >
                  Bắt đầu ôn tập
                </Button>
              </div>

              <p className="text-xs text-gray-500 text-center">Phù hợp để học và ghi nhớ kiến thức</p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 text-center">
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-2">💡 Gợi ý chọn chế độ</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
                <div>
                  <strong>Chế độ Kiểm tra</strong> khi bạn muốn:
                  <ul className="list-disc list-inside mt-1 space-y-1">
                    <li>Đánh giá trình độ hiện tại</li>
                    <li>Mô phỏng kỳ thi thật</li>
                    <li>Thử thách bản thân</li>
                  </ul>
                </div>
                <div>
                  <strong>Chế độ Ôn tập</strong> khi bạn muốn:
                  <ul className="list-disc list-inside mt-1 space-y-1">
                    <li>Học kiến thức mới</li>
                    <li>Ôn luyện trước khi thi</li>
                    <li>Hiểu rõ từng câu hỏi</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
