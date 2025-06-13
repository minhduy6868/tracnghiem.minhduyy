"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Brain, Zap, BarChart, Clock, BookOpen, Sparkles } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"

export default function Features() {
  const { t } = useLanguage()

  return (
    <section className="py-12 bg-background" id="tinh-nang">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{t("featuresSection")}</h2>
          <p className="text-lg max-w-2xl mx-auto">{t("featuresSectionDescription")}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="border-t-4 border-t-blue-500 shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="bg-blue-100 dark:bg-blue-900/30 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Brain className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t("feature1Title")}</h3>
              <p>{t("feature1Description")}</p>
            </CardContent>
          </Card>

          <Card className="border-t-4 border-t-green-500 shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="bg-green-100 dark:bg-green-900/30 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t("feature2Title")}</h3>
              <p>{t("feature2Description")}</p>
            </CardContent>
          </Card>

          <Card className="border-t-4 border-t-purple-500 shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="bg-purple-100 dark:bg-purple-900/30 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t("feature3Title")}</h3>
              <p>{t("feature3Description")}</p>
            </CardContent>
          </Card>

          <Card className="border-t-4 border-t-amber-500 shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="bg-amber-100 dark:bg-amber-900/30 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <BarChart className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t("feature4Title")}</h3>
              <p>{t("feature4Description")}</p>
            </CardContent>
          </Card>

          <Card className="border-t-4 border-t-red-500 shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="bg-red-100 dark:bg-red-900/30 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-red-600 dark:text-red-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t("feature5Title")}</h3>
              <p>{t("feature5Description")}</p>
            </CardContent>
          </Card>

          <Card className="border-t-4 border-t-cyan-500 shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="bg-cyan-100 dark:bg-cyan-900/30 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Sparkles className="h-6 w-6 text-cyan-600 dark:text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t("feature6Title")}</h3>
              <p>{t("feature6Description")}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
