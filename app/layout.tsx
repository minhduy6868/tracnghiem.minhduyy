import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Minh Duyy - Hệ thống tạo trắc nghiệm thông minh với AI",
  description:
    "Tạo trắc nghiệm online miễn phí với AI thông minh. Phân tích văn bản tự động, tạo đề thi, ôn tập kiến thức dễ dàng. Công cụ trắc nghiệm số 1 Việt Nam.",
  keywords:
    "trắc nghiệm, tạo trắc nghiệm online, Minh Duyy, trắc nghiệm thông minh, AI trắc nghiệm, tạo đề thi, ôn tập trắc nghiệm, công cụ giáo dục, học online",
  authors: [{ name: "Minh Duyy", url: "https://minhduyy.id.vn" }],
  creator: "Minh Duyy",
  publisher: "Minh Duyy",
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "https://tracnghiem-minhduyy.netlify.app",
    title: "Minh Duyy - Hệ thống tạo trắc nghiệm thông minh với AI",
    description:
      "Tạo trắc nghiệm online miễn phí với AI thông minh. Phân tích văn bản tự động, tạo đề thi, ôn tập kiến thức dễ dàng.",
    siteName: "Minh Duyy Trắc Nghiệm",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Minh Duyy Trắc Nghiệm",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Minh Duyy - Hệ thống tạo trắc nghiệm thông minh với AI",
    description:
      "Tạo trắc nghiệm online miễn phí với AI thông minh. Phân tích văn bản tự động, tạo đề thi, ôn tập kiến thức dễ dàng.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://tracnghiem-minhduyy.netlify.app",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  metadataBase: new URL("https://tracnghiem-minhduyy.netlify.app"),
    generator: 'v0.dev'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <head>
        {/* Preconnect to important domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Structured data for rich snippets */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "Minh Duyy - Hệ thống tạo trắc nghiệm thông minh với AI",
              url: "https://tracnghiem-minhduyy.netlify.app",
              description:
                "Tạo trắc nghiệm online miễn phí với AI thông minh. Phân tích văn bản tự động, tạo đề thi, ôn tập kiến thức dễ dàng.",
              applicationCategory: "EducationalApplication",
              operatingSystem: "All",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "VND",
              },
              author: {
                "@type": "Person",
                name: "Minh Duyy",
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
