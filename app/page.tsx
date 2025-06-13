"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Upload, FileText, Brain, Star, CheckCircle, Zap, BookOpen, Users } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import QuestionReview from "@/components/question-review"
import QuizInterface from "@/components/quiz-interface"
import QuizResults from "@/components/quiz-results"
import SEOFooter from "@/components/seo-footer"
import Testimonials from "@/components/testimonials"
import Features from "@/components/features"
import { useLanguage } from "@/lib/i18n/language-context"
import * as mammoth from "mammoth"

export interface Question {
  id: number
  question: string
  options: {
    A: string
    B: string
    C: string
    D: string
  }
  correctAnswer: "A" | "B" | "C" | "D"
  userAnswer?: "A" | "B" | "C" | "D"
}

export default function HomePage() {
  const { t } = useLanguage()
  const [currentStep, setCurrentStep] = useState<"input" | "review" | "quiz" | "results">("input")
  const [inputText, setInputText] = useState("")
  const [questions, setQuestions] = useState<Question[]>([])
  const [isProcessing, setIsProcessing] = useState(false)
  const { toast } = useToast()
  const [quizMode, setQuizMode] = useState<"exam" | "practice" | null>(null)

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    try {
      let content = ""

      // Xử lý file dựa trên loại
      if (file.type === "text/plain") {
        // Xử lý file .txt
        const reader = new FileReader()
        content = await new Promise((resolve) => {
          reader.onload = (e) => resolve((e.target?.result as string) || "")
          reader.readAsText(file)
        })
      } else if (
        file.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ||
        file.name.endsWith(".docx")
      ) {
        // Xử lý file .docx
        const arrayBuffer = await file.arrayBuffer()
        const result = await mammoth.extractRawText({ arrayBuffer })
        content = result.value
      } else if (file.type === "application/msword" || file.name.endsWith(".doc")) {
        // Xử lý file .doc - cần chuyển đổi trên server
        const formData = new FormData()
        formData.append("file", file)

        const response = await fetch("/api/convert-doc", {
          method: "POST",
          body: formData,
        })

        if (!response.ok) {
          throw new Error("Không thể chuyển đổi file .doc")
        }

        const data = await response.json()
        content = data.text || ""
      } else {
        toast({
          title: t("fileTypeError"),
          description: t("supportedFormats"),
          variant: "destructive",
        })
        return
      }

      setInputText(content)
    } catch (error) {
      console.error("Lỗi khi đọc file:", error)
      toast({
        title: t("fileReadError"),
        description: t("tryAgain"),
        variant: "destructive",
      })
    }
  }

  const processQuestions = async () => {
    if (!inputText.trim()) {
      toast({
        title: t("inputError"),
        variant: "destructive",
      })
      return
    }

    setIsProcessing(true)
    try {
      const response = await fetch("/api/process-questions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: inputText }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || t("processingError"))
      }

      const data = await response.json()
      if (!data.questions || data.questions.length === 0) {
        throw new Error(t("noQuestionsFound"))
      }

      setQuestions(data.questions)
      setCurrentStep("review")

      toast({
        title: t("analysisSuccess", { count: data.questions.length }),
      })
    } catch (error) {
      console.error("Lỗi xử lý câu hỏi:", error)
      toast({
        title: error instanceof Error ? error.message : t("processingError"),
        variant: "destructive",
      })
    } finally {
      setIsProcessing(false)
    }
  }

  const startQuiz = (mode: "exam" | "practice") => {
    setQuizMode(mode)
    setCurrentStep("quiz")
  }

  const finishQuiz = (answeredQuestions: Question[]) => {
    setQuestions(answeredQuestions)
    setCurrentStep("results")
  }

  const resetQuiz = () => {
    setCurrentStep("input")
    setInputText("")
    setQuestions([])
    setQuizMode(null)
  }

  if (currentStep === "review") {
    return (
      <QuestionReview
        questions={questions}
        onQuestionsUpdate={setQuestions}
        onStartQuiz={startQuiz}
        onBack={() => setCurrentStep("input")}
      />
    )
  }

  if (currentStep === "quiz") {
    return (
      <QuizInterface
        questions={questions}
        mode={quizMode!}
        onFinish={finishQuiz}
        onBack={() => setCurrentStep("review")}
      />
    )
  }

  if (currentStep === "results") {
    return <QuizResults questions={questions} onRestart={resetQuiz} onReview={() => setCurrentStep("review")} />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              <span className="text-primary">{t("heroTitle")}</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">{t("heroDescription")}</p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>{t("freeBadge")}</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-amber-500" />
                <span>{t("instantBadge")}</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-blue-500" />
                <span>{t("effectiveBadge")}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-purple-500" />
                <span>{t("usersBadge")}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <Card className="mb-8 shadow-lg border-t-4 border-t-blue-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Brain className="h-6 w-6 text-primary" />
                {t("createQuizTitle")}
              </CardTitle>
              <CardDescription className="text-base">{t("createQuizDescription")}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">{t("inputLabel")}</label>
               <Textarea
  placeholder={`Ví dụ:\nCâu 1: Thủ đô của Nhật Bản là gì?\nA. Seoul\nB. Tokyo\nC. Bắc Kinh\nD. Bangkok\nĐáp án đúng: B\n\nCâu 2: 2 + 2 bằng mấy?\nA. 3\nB. 4\nC. 5\nD. 6\nĐáp án đúng: B`}
  value={inputText}
  onChange={(e) => setInputText(e.target.value)}
  className="min-h-[200px] whitespace-pre-wrap"
/>

              </div>

              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <label className="text-sm font-medium">{t("uploadLabel")}</label>
                  <div className="mt-1">
                    <input
                      type="file"
                      accept=".txt,.docx,.doc"
                      onChange={handleFileUpload}
                      className="hidden"
                      id="file-upload"
                    />
                    <label
                      htmlFor="file-upload"
                      className="inline-flex items-center gap-2 px-4 py-2 border border-input rounded-md shadow-sm text-sm font-medium bg-background hover:bg-accent hover:text-accent-foreground cursor-pointer"
                    >
                      <Upload className="h-4 w-4" />
                      {t("chooseFile")}
                    </label>
                    <span className="ml-2 text-xs text-gray-500">(.txt, .docx, .doc)</span>
                  </div>
                </div>
              </div>

              <Button
                onClick={processQuestions}
                disabled={isProcessing || !inputText.trim()}
                className="w-full"
                size="lg"
              >
                {isProcessing ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    {t("processing")}
                  </>
                ) : (
                  <>
                    <FileText className="h-4 w-4 mr-2" />
                    {t("analyzeButton")}
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          <Card className="mb-12 shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="h-5 w-5 text-amber-500" />
                {t("guideTitle")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-lg">{t("formatTitle")}</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>{t("formatItem1")}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>{t("formatItem2")}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>{t("formatItem3")}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>{t("formatItem4")}</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-lg">{t("featuresTitle")}</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>{t("featuresItem1")}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>{t("featuresItem2")}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>{t("featuresItem3")}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>{t("featuresItem4")}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features Section */}
      <Features />

      {/* Testimonials */}
      <Testimonials />

      {/* SEO Footer */}
      <SEOFooter />
    </div>
  )
}
