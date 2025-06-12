import Link from "next/link"
import { Facebook, Twitter, Instagram, Mail, Github } from "lucide-react"

export default function SEOFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Minh Duyy Trắc Nghiệm</h3>
            <p className="text-gray-400 mb-4">
              Hệ thống tạo trắc nghiệm thông minh với AI. Công cụ giáo dục hiện đại giúp giáo viên và học sinh tạo, quản
              lý và thực hiện bài kiểm tra trắc nghiệm một cách hiệu quả.
            </p>
            <div className="flex space-x-4">
              <Link href="https://www.facebook.com/duy.nguyenminh.56679/" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://www.instagram.com/duy.nhobe/" className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://github.com/minhduy6868" className="text-gray-400 hover:text-white">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Tính năng</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#tinh-nang" className="text-gray-400 hover:text-white">
                  Tạo trắc nghiệm online
                </Link>
              </li>
              <li>
                <Link href="#tinh-nang" className="text-gray-400 hover:text-white">
                  Phân tích AI thông minh
                </Link>
              </li>
              <li>
                <Link href="#tinh-nang" className="text-gray-400 hover:text-white">
                  Chế độ kiểm tra
                </Link>
              </li>
              <li>
                <Link href="#tinh-nang" className="text-gray-400 hover:text-white">
                  Chế độ ôn tập
                </Link>
              </li>
              <li>
                <Link href="#tinh-nang" className="text-gray-400 hover:text-white">
                  Phân tích kết quả
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Hỗ trợ</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/huong-dan" className="text-gray-400 hover:text-white">
                  Hướng dẫn sử dụng
                </Link>
              </li>
              <li>
                <Link href="/cau-hoi-thuong-gap" className="text-gray-400 hover:text-white">
                  Câu hỏi thường gặp
                </Link>
              </li>
              <li>
                <Link href="/lien-he" className="text-gray-400 hover:text-white">
                  Liên hệ hỗ trợ
                </Link>
              </li>
              <li>
                <Link href="/bao-cao-loi" className="text-gray-400 hover:text-white">
                  Báo cáo lỗi
                </Link>
              </li>
              <li>
                <Link href="/gop-y" className="text-gray-400 hover:text-white">
                  Góp ý cải thiện
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Liên hệ</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-gray-400" />
                <a href="mailto:duynm.23it@vku.udn.vn" className="text-gray-400 hover:text-white">
                 duynm.23it@vku.udn.vn
                </a>
              </li>
              <li>
                <p className="text-gray-400">Đà Nẵng, Việt Nam</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 mt-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="text-sm text-gray-400">
              © {currentYear} Minh Duyy Trắc Nghiệm. Tất cả quyền được bảo lưu.
            </div>
            <div className="text-sm text-gray-400 md:text-right">
              <Link href="/dieu-khoan-su-dung" className="hover:text-white mr-4">
                Điều khoản sử dụng
              </Link>
              <Link href="/chinh-sach-bao-mat" className="hover:text-white">
                Chính sách bảo mật
              </Link>
            </div>
          </div>
        </div>

        {/* SEO Footer Links */}
        <div className="mt-8 text-xs text-gray-600 grid grid-cols-2 md:grid-cols-4 gap-2">
          <Link href="/trac-nghiem-online" className="hover:text-gray-400">
            Trắc nghiệm online
          </Link>
          <Link href="/tao-trac-nghiem" className="hover:text-gray-400">
            Tạo trắc nghiệm
          </Link>
          <Link href="/trac-nghiem-thong-minh" className="hover:text-gray-400">
            Trắc nghiệm thông minh
          </Link>
          <Link href="/ai-trac-nghiem" className="hover:text-gray-400">
            AI trắc nghiệm
          </Link>
          <Link href="/phan-mem-trac-nghiem" className="hover:text-gray-400">
            Phần mềm trắc nghiệm
          </Link>
          <Link href="/tao-de-thi-trac-nghiem" className="hover:text-gray-400">
            Tạo đề thi trắc nghiệm
          </Link>
          <Link href="/trac-nghiem-tu-dong" className="hover:text-gray-400">
            Trắc nghiệm tự động
          </Link>
          <Link href="/cong-cu-tao-trac-nghiem" className="hover:text-gray-400">
            Công cụ tạo trắc nghiệm
          </Link>
          <Link href="/trac-nghiem-Minh Duyy" className="hover:text-gray-400">
            Trắc nghiệm Minh Duyy
          </Link>
          <Link href="/trac-nghiem-mien-phi" className="hover:text-gray-400">
            Trắc nghiệm miễn phí
          </Link>
          <Link href="/trac-nghiem-ai" className="hover:text-gray-400">
            Trắc nghiệm AI
          </Link>
          <Link href="/tao-trac-nghiem-online" className="hover:text-gray-400">
            Tạo trắc nghiệm online
          </Link>
        </div>
      </div>
    </footer>
  )
}
