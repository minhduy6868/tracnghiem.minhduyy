"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import { type Locale, translations, type TranslationKey } from "./translations"

type LanguageContextType = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: TranslationKey, params?: Record<string, string | number>) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>("vi")

  // Load saved language preference from localStorage on mount
  useEffect(() => {
    const savedLocale = localStorage.getItem("language") as Locale | null
    if (savedLocale && (savedLocale === "vi" || savedLocale === "en")) {
      setLocale(savedLocale)
    }
  }, [])

  // Save language preference to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("language", locale)
  }, [locale])

  const t = (key: TranslationKey, params?: Record<string, string | number>) => {
    let text = translations[locale][key] || key

    if (params) {
      Object.entries(params).forEach(([paramKey, paramValue]) => {
        text = text.replace(new RegExp(`{${paramKey}}`, "g"), String(paramValue))
      })
    }

    return text
  }

  return <LanguageContext.Provider value={{ locale, setLocale, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
