"use client"

import { Brain } from "lucide-react"
import { useTheme } from "next-themes"
import { useLanguage } from "@/lib/i18n/language-context"
import { Button } from "@/components/ui/button"
import { Globe, Moon, Sun } from "lucide-react"

export default function SimpleHeader() {
  const { t, locale, setLocale } = useLanguage()
  const { theme, setTheme } = useTheme()

  // Chuyển đổi ngôn ngữ trực tiếp
  const toggleLanguage = () => {
    setLocale(locale === "vi" ? "en" : "vi")
  }

  // Chuyển đổi theme trực tiếp
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <div className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <div className="flex items-center gap-2">
          <Brain className="h-6 w-6 text-primary" />
          <span className="font-bold text-lg">{t("appName")}</span>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" onClick={toggleLanguage} className="flex items-center gap-2">
            <Globe className="h-4 w-4" />
            {locale === "vi" ? "VI" : "EN"}
          </Button>
          <Button variant="outline" size="sm" onClick={toggleTheme} className="flex items-center gap-2">
            {theme === "dark" ? (
              <>
                <Sun className="h-4 w-4" />
                {t("darkMode")}
              </>
            ) : (
              <>
                <Moon className="h-4 w-4" />
                {t("lightMode")}
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  )
}
