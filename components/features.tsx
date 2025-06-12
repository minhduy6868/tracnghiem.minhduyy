import { Card, CardContent } from "@/components/ui/card"
import { Brain, Zap, BarChart, Clock, BookOpen, Sparkles } from "lucide-react"

export default function Features() {
  return (
    <section className="py-12 bg-white" id="tinh-nang">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Tính năng nổi bật</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hệ thống trắc nghiệm thông minh Minh Duyy cung cấp đầy đủ công cụ để tạo, quản lý và thực hiện bài kiểm tra
            trắc nghiệm một cách hiệu quả.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="border-t-4 border-t-blue-500 shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Brain className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Phân tích AI thông minh</h3>
              <p className="text-gray-600">
                Tự động phát hiện câu hỏi trắc nghiệm từ văn bản thô và bổ sung thông tin thiếu bằng AI tiên tiến.
              </p>
            </CardContent>
          </Card>

          <Card className="border-t-4 border-t-green-500 shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Tạo trắc nghiệm nhanh chóng</h3>
              <p className="text-gray-600">
                Chuyển đổi văn bản thành bài kiểm tra trắc nghiệm chỉ trong vài giây, tiết kiệm thời gian chuẩn bị.
              </p>
            </CardContent>
          </Card>

          <Card className="border-t-4 border-t-purple-500 shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Hai chế độ học tập</h3>
              <p className="text-gray-600">
                Chế độ kiểm tra để đánh giá kiến thức và chế độ ôn tập với giải thích chi tiết cho từng câu hỏi.
              </p>
            </CardContent>
          </Card>

          <Card className="border-t-4 border-t-amber-500 shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="bg-amber-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <BarChart className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Phân tích kết quả chi tiết</h3>
              <p className="text-gray-600">
                Thống kê chi tiết về kết quả làm bài, giúp xác định điểm mạnh và điểm yếu cần cải thiện.
              </p>
            </CardContent>
          </Card>

          <Card className="border-t-4 border-t-red-500 shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Theo dõi thời gian</h3>
              <p className="text-gray-600">
                Đồng hồ đếm thời gian làm bài giúp rèn luyện kỹ năng quản lý thời gian trong các kỳ thi thực tế.
              </p>
            </CardContent>
          </Card>

          <Card className="border-t-4 border-t-cyan-500 shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="bg-cyan-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Sparkles className="h-6 w-6 text-cyan-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Giao diện thân thiện</h3>
              <p className="text-gray-600">
                Thiết kế hiện đại, dễ sử dụng và hoàn toàn responsive trên mọi thiết bị từ điện thoại đến máy tính.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
