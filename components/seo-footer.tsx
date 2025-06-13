"use client"

import Link from "next/link"
import { Facebook, Twitter, Instagram, Mail, Github } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"

export default function SEOFooter() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">{t("appName")}</h3>
            <p className="text-gray-400 mb-4">{t("footerDescription")}</p>
            <div className="flex space-x-4">
              <Link href="https://www.facebook.com/profile.php?id=100069117791920" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://instagram.com/duy.nhobe/" className="text-gray-400 hover:text-white">
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
            <h3 className="text-lg font-semibold mb-4">{t("featuresMenuTitle")}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#tinh-nang" className="text-gray-400 hover:text-white">
                  {t("createQuizOnline")}
                </Link>
              </li>
              <li>
                <Link href="#tinh-nang" className="text-gray-400 hover:text-white">
                  {t("smartAIAnalysis")}
                </Link>
              </li>
              <li>
                <Link href="#tinh-nang" className="text-gray-400 hover:text-white">
                  {t("examMode")}
                </Link>
              </li>
              <li>
                <Link href="#tinh-nang" className="text-gray-400 hover:text-white">
                  {t("practiceMode")}
                </Link>
              </li>
              <li>
                <Link href="#tinh-nang" className="text-gray-400 hover:text-white">
                  {t("resultAnalysis")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t("supportMenuTitle")}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/huong-dan" className="text-gray-400 hover:text-white">
                  {t("userGuide")}
                </Link>
              </li>
              <li>
                <Link href="/cau-hoi-thuong-gap" className="text-gray-400 hover:text-white">
                  {t("faq")}
                </Link>
              </li>
              <li>
                <Link href="/lien-he" className="text-gray-400 hover:text-white">
                  {t("contactSupport")}
                </Link>
              </li>
              <li>
                <Link href="/bao-cao-loi" className="text-gray-400 hover:text-white">
                  {t("reportBug")}
                </Link>
              </li>
              <li>
                <Link href="/gop-y" className="text-gray-400 hover:text-white">
                  {t("feedback")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t("contactMenuTitle")}</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-gray-400" />
                <a href="mailto:duynm.23it@vku.udn.vn" className="text-gray-400 hover:text-white">
                  duynm.23it@vku.udn.vn
                </a>
              </li>
              <li>
                <p className="text-gray-400">{t("location")}</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 mt-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="text-sm text-gray-400">{t("copyright", { year: currentYear, appName: t("appName") })}</div>
            <div className="text-sm text-gray-400 md:text-right">
              <Link href="/dieu-khoan-su-dung" className="hover:text-white mr-4">
                {t("termsOfService")}
              </Link>
              <Link href="/chinh-sach-bao-mat" className="hover:text-white">
                {t("privacyPolicy")}
              </Link>
            </div>
          </div>
        </div>

        {/* SEO Footer Links */}
        <div className="mt-8 text-xs text-gray-600 grid grid-cols-2 md:grid-cols-4 gap-2">
          <Link href="/trac-nghiem-online" className="hover:text-gray-400">
            {t("onlineQuiz")}
          </Link>
          <Link href="/tao-trac-nghiem" className="hover:text-gray-400">
            {t("createQuiz")}
          </Link>
          <Link href="/trac-nghiem-thong-minh" className="hover:text-gray-400">
            {t("smartQuiz")}
          </Link>
          <Link href="/ai-trac-nghiem" className="hover:text-gray-400">
            {t("aiQuiz")}
          </Link>
          <Link href="/phan-mem-trac-nghiem" className="hover:text-gray-400">
            {t("quizSoftware")}
          </Link>
          <Link href="/tao-de-thi-trac-nghiem" className="hover:text-gray-400">
            {t("createExam")}
          </Link>
          <Link href="/trac-nghiem-tu-dong" className="hover:text-gray-400">
            {t("autoQuiz")}
          </Link>
          <Link href="/cong-cu-tao-trac-nghiem" className="hover:text-gray-400">
            {t("quizTool")}
          </Link>
          <Link href="/trac-nghiem-minhduyy" className="hover:text-gray-400">
            {t("minhduyQuiz")}
          </Link>
          <Link href="/trac-nghiem-mien-phi" className="hover:text-gray-400">
            {t("freeQuiz")}
          </Link>
          <Link href="/trac-nghiem-ai" className="hover:text-gray-400">
            {t("aiQuizTool")}
          </Link>
          <Link href="/tao-trac-nghiem-online" className="hover:text-gray-400">
            {t("createOnlineQuiz")}
          </Link>
        </div>
      </div>
    </footer>
  )
}
