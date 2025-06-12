import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, CheckCircle } from "lucide-react"
import Features from "@/components/features"
import SEOFooter from "@/components/seo-footer"

export const metadata: Metadata = {
  title: "Trắc nghiệm Online Miễn Phí | Minh Duyy",
  description:
    "Tạo và làm trắc nghiệm online miễn phí với Minh Duyy. Hệ thống trắc nghiệm thông minh với AI giúp học tập hiệu quả.",
  keywords:
    "trắc nghiệm online, trắc nghiệm miễn phí, làm trắc nghiệm, thi trắc nghiệm, Minh Duyy, trắc nghiệm thông minh",
}

export default function TracNghiemOnlinePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Trắc Nghiệm Online <span className="text-blue-600">Miễn Phí</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Hệ thống trắc nghiệm thông minh với AI giúp bạn tạo, làm và quản lý bài kiểm tra trắc nghiệm một cách hiệu
              quả.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Link href="/">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Tạo trắc nghiệm ngay
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="#tinh-nang">
                <Button variant="outline" size="lg">
                  Tìm hiểu thêm
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
            <h2 className="text-3xl font-bold text-center mb-8">Trắc nghiệm online là gì?</h2>
            <p className="text-lg text-gray-700 mb-6">
              Trắc nghiệm online là hình thức kiểm tra, đánh giá kiến thức thông qua các câu hỏi trắc nghiệm được thực
              hiện trên nền tảng internet. Người dùng có thể làm bài trắc nghiệm mọi lúc, mọi nơi thông qua các thiết bị
              điện tử như máy tính, điện thoại, máy tính bảng.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Với hệ thống trắc nghiệm online Minh Duyy, việc tạo và làm bài trắc nghiệm trở nên đơn giản và hiệu quả hơn
              bao giờ hết. Chúng tôi cung cấp công cụ tạo trắc nghiệm thông minh với AI, giúp chuyển đổi văn bản thành
              bài kiểm tra trắc nghiệm chỉ trong vài giây.
            </p>

            <div className="my-10">
              <h3 className="text-2xl font-bold mb-6">Lợi ích của trắc nghiệm online</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      Tiết kiệm thời gian
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Tạo và chấm bài tự động, giúp giáo viên tiết kiệm thời gian chuẩn bị và đánh giá.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      Kết quả tức thì
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Học sinh nhận được kết quả và phân tích ngay sau khi hoàn thành bài kiểm tra.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      Học tập hiệu quả
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Chế độ ôn tập với giải thích chi tiết giúp học sinh hiểu rõ từng câu hỏi.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      Linh hoạt và tiện lợi
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Làm bài mọi lúc, mọi nơi trên mọi thiết bị có kết nối internet.</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="my-10">
              <h3 className="text-2xl font-bold mb-6">Tại sao chọn Minh Duyy Trắc Nghiệm?</h3>
              <p className="text-lg text-gray-700 mb-6">
                Minh Duyy Trắc Nghiệm là hệ thống trắc nghiệm thông minh được phát triển bởi đội ngũ chuyên gia giáo dục
                và công nghệ hàng đầu Việt Nam. Chúng tôi cung cấp giải pháp toàn diện cho việc tạo, quản lý và thực
                hiện bài kiểm tra trắc nghiệm online.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Với công nghệ AI tiên tiến, hệ thống có thể tự động phân tích văn bản, trích xuất câu hỏi trắc nghiệm và
                bổ sung thông tin thiếu. Điều này giúp giáo viên tiết kiệm thời gian chuẩn bị bài kiểm tra và tập trung
                vào việc giảng dạy.
              </p>
              <p className="text-lg text-gray-700">
                Đặc biệt, Minh Duyy Trắc Nghiệm hoàn toàn miễn phí và không giới hạn số lượng câu hỏi, bài kiểm tra. Đây
                là công cụ lý tưởng cho giáo viên, học sinh và sinh viên muốn nâng cao hiệu quả dạy và học.
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
