import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { Brain } from "lucide-react"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Brain className="h-6 w-6 text-primary" />
            <span className="hidden font-sans">Trắc Nghiệm cùng Duy</span>
          </Link>
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/trac-nghiem-online" className="transition-colors hover:text-foreground/80 text-foreground/60">
              Trắc nghiệm
            </Link>
            <Link href="/tao-trac-nghiem" className="transition-colors hover:text-foreground/80 text-foreground/60">
              Tạo đề thi
            </Link>
            <Link href="#tinh-nang" className="transition-colors hover:text-foreground/80 text-foreground/60">
              Tính năng
            </Link>
            <Link href="#danh-gia" className="transition-colors hover:text-foreground/80 text-foreground/60">
              Đánh giá
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="flex items-center">
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}
