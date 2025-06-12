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
  const [currentStep, setCurrentStep] = useState<"input" | "review" | "quiz" | "results">("input")
  const [inputText, setInputText] = useState("")
  const [questions, setQuestions] = useState<Question[]>([])
  const [isProcessing, setIsProcessing] = useState(false)
  const { toast } = useToast()
  const [quizMode, setQuizMode] = useState<"exam" | "practice" | null>(null)

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file && file.type === "text/plain") {
      const reader = new FileReader()
      reader.onload = (e) => {
        const content = e.target?.result as string
        setInputText(content)
      }
      reader.readAsText(file)
    } else {
      toast({
        title: "Lỗi",
        description: "Vui lòng chọn file .txt",
        variant: "destructive",
      })
    }
  }

  const processQuestions = async () => {
    if (!inputText.trim()) {
      toast({
        title: "Lỗi",
        description: "Vui lòng nhập văn bản chứa câu hỏi",
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
        throw new Error("Lỗi xử lý câu hỏi")
      }

      const data = await response.json()
      setQuestions(data.questions)
      setCurrentStep("review")

      toast({
        title: "Thành công",
        description: `Đã phân tích ${data.questions.length} câu hỏi`,
      })
    } catch (error) {
      toast({
        title: "Lỗi",
        description: "Không thể xử lý câu hỏi. Vui lòng thử lại.",
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
              Tạo <span className="text-blue-600">Trắc Nghiệm Thông Minh</span> với AI
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Chuyển đổi văn bản thành bài kiểm tra trắc nghiệm chỉ trong vài giây với công nghệ AI tiên tiến. Tiết kiệm
              thời gian và nâng cao hiệu quả học tập.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Miễn phí 100%</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-amber-500" />
                <span>Phân tích tức thì</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-blue-500" />
                <span>Học hiệu quả</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-purple-500" />
                <span>10,000+ người dùng</span>
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
                <Brain className="h-6 w-6 text-blue-600" />
                Tạo Trắc Nghiệm Thông Minh
              </CardTitle>
              <CardDescription className="text-base">
                Dán văn bản chứa câu hỏi trắc nghiệm hoặc tải lên file .txt. Hệ thống sẽ tự động phân tích và bổ sung
                thông tin thiếu.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Nhập văn bản chứa câu hỏi trắc nghiệm:</label>
                <Textarea
                  placeholder="Ví dụ:
Câu 1: Thủ đô của Nhật Bản là gì?
A. Seoul
B. Tokyo  
C. Bắc Kinh
D. Bangkok
Đáp án đúng: B

Câu 2: 2 + 2 bằng mấy?
A. 3
B. 4
C. 5
D. 6
Đáp án đúng: B"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  className="min-h-[200px]"
                />
              </div>

              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <label className="text-sm font-medium">Hoặc tải lên file .txt:</label>
                  <div className="mt-1">
                    <input type="file" accept=".txt" onChange={handleFileUpload} className="hidden" id="file-upload" />
                    <label
                      htmlFor="file-upload"
                      className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 cursor-pointer"
                    >
                      <Upload className="h-4 w-4" />
                      Chọn file
                    </label>
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
                    Đang xử lý...
                  </>
                ) : (
                  <>
                    <FileText className="h-4 w-4 mr-2" />
                    Phân tích câu hỏi
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          <Card className="mb-12 shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="h-5 w-5 text-amber-500" />
                Hướng dẫn sử dụng
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-lg">Định dạng văn bản:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Mỗi câu hỏi bắt đầu bằng "Câu [số]:"</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Các lựa chọn: A. B. C. D.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Đáp án đúng: "Đáp án đúng: [A/B/C/D]"</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Nếu thiếu đáp án, AI sẽ tự động bổ sung</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-lg">Tính năng:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Tự động phát hiện câu hỏi trắc nghiệm</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Bổ sung đáp án thiếu bằng AI thông minh</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Xem trước và chỉnh sửa câu hỏi</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Làm bài và xem kết quả chi tiết</span>
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
