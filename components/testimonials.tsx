"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"

export default function Testimonials() {
  const { t } = useLanguage()

  return (
    <section className="py-12 bg-muted" id="danh-gia">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{t("testimonialsTitle")}</h2>
          <p className="text-lg max-w-2xl mx-auto">{t("testimonialsDescription")}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="mb-4">"{t("testimonial1Text")}"</p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold mr-3">
                  NT
                </div>
                <div>
                  <h4 className="font-semibold">{t("testimonial1Name")}</h4>
                  <p className="text-sm text-muted-foreground">{t("testimonial1Role")}</p>
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
              <p className="mb-4">"{t("testimonial2Text")}"</p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 font-bold mr-3">
                  TM
                </div>
                <div>
                  <h4 className="font-semibold">{t("testimonial2Name")}</h4>
                  <p className="text-sm text-muted-foreground">{t("testimonial2Role")}</p>
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
              <p className="mb-4">"{t("testimonial3Text")}"</p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 font-bold mr-3">
                  LH
                </div>
                <div>
                  <h4 className="font-semibold">{t("testimonial3Name")}</h4>
                  <p className="text-sm text-muted-foreground">{t("testimonial3Role")}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
