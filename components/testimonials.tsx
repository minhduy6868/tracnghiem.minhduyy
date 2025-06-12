import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export default function Testimonials() {
  return (
    <section className="py-12 bg-gray-50" id="danh-gia">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Người dùng nói gì về chúng tôi</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hàng nghìn giáo viên và học sinh đã sử dụng hệ thống trắc nghiệm thông minh Minh Duyy để nâng cao hiệu quả
            dạy và học.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Công cụ tuyệt vời giúp tôi tiết kiệm rất nhiều thời gian chuẩn bị bài kiểm tra cho học sinh. Chỉ cần
                dán văn bản vào, hệ thống tự động tạo ra bài trắc nghiệm hoàn chỉnh."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold mr-3">
                  NT
                </div>
                <div>
                  <h4 className="font-semibold">Nguyễn Thị Thanh</h4>
                  <p className="text-sm text-gray-500">Giáo viên THPT</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Chế độ ôn tập với giải thích chi tiết giúp tôi hiểu rõ từng câu hỏi. Đây là công cụ không thể thiếu
                trong quá trình ôn thi đại học của tôi."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold mr-3">
                  TM
                </div>
                <div>
                  <h4 className="font-semibold">Trần Minh</h4>
                  <p className="text-sm text-gray-500">Học sinh lớp 12</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Tôi sử dụng Minh Duyy để tạo các bài kiểm tra trực tuyến cho sinh viên. Hệ thống phân tích kết quả chi
                tiết giúp tôi nắm bắt được điểm yếu của từng em."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold mr-3">
                  LH
                </div>
                <div>
                  <h4 className="font-semibold">TS. Lê Hoàng</h4>
                  <p className="text-sm text-gray-500">Giảng viên Đại học</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
