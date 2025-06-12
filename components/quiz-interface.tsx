"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, ArrowRight, CheckCircle, XCircle, HelpCircle, AlertCircle, Clock } from "lucide-react"
import type { Question } from "@/app/page"
import { cn } from "@/lib/utils"

interface QuizInterfaceProps {
  questions: Question[]
  mode: "exam" | "practice"
  onFinish: (questions: Question[]) => void
  onBack: () => void
}

export default function QuizInterface({ questions, mode, onFinish, onBack }: QuizInterfaceProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState<Question[]>(questions.map((q) => ({ ...q, userAnswer: undefined })))
  const [showAnswer, setShowAnswer] = useState(false)
  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([])
  const [selectedOption, setSelectedOption] = useState<"A" | "B" | "C" | "D" | null>(null)
  const [timeSpent, setTimeSpent] = useState(0)

  // Shuffle câu hỏi khi component mount
  useEffect(() => {
    const shuffled = [...questions].sort(() => Math.random() - 0.5)
    setShuffledQuestions(shuffled)
  }, [questions])

  // Timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeSpent((prev) => prev + 1)
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const currentQuestion = shuffledQuestions[currentQuestionIndex] || questions[currentQuestionIndex]
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100

  const handleAnswerSelect = (answer: "A" | "B" | "C" | "D") => {
    setSelectedOption(answer)

    const updatedAnswers = [...answers]
    const questionIndex = questions.findIndex((q) => q.id === currentQuestion.id)
    updatedAnswers[questionIndex] = {
      ...updatedAnswers[questionIndex],
      userAnswer: answer,
    }
    setAnswers(updatedAnswers)

    if (mode === "practice") {
      setShowAnswer(true)
    }
  }

  const goToNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
      setSelectedOption(null)
      setShowAnswer(false)
    }
  }

  const goToPrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1)
      setSelectedOption(null)
      setShowAnswer(false)
    }
  }

  const finishQuiz = () => {
    onFinish(answers)
  }

  const answeredCount = answers.filter((q) => q.userAnswer).length
  const currentQuestionAnswer = answers[questions.findIndex((q) => q.id === currentQuestion.id)]?.userAnswer

  // Format time
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
          <Button variant="outline" onClick={onBack} className="w-full md:w-auto">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Quay lại
          </Button>
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-gray-900">
              {mode === "exam" ? "Kiểm tra kiến thức" : "Ôn tập kiến thức"}
            </h1>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-gray-600 text-sm">
              <div className="flex items-center">
                <HelpCircle className="h-4 w-4 mr-1" />
                <span>
                  Câu {currentQuestionIndex + 1}/{questions.length}
                </span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-1 text-green-500" />
                <span>
                  Đã trả lời: {answeredCount}/{questions.length}
                </span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1 text-blue-500" />
                <span>Thời gian: {formatTime(timeSpent)}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="mb-6">
          <Progress value={progress} className="h-2" />
        </div>

        {/* Question card */}
        <Card className="mb-6 shadow-lg border-t-4 border-t-blue-500">
          <CardHeader className="bg-gray-50 border-b">
            <div className="flex items-center gap-2">
              <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                {currentQuestionIndex + 1}
              </div>
              <CardTitle className="text-xl">{currentQuestion.question}</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid gap-3">
              {Object.entries(currentQuestion.options).map(([key, value]) => {
                const isSelected = selectedOption === key
                const isCorrect = key === currentQuestion.correctAnswer
                const isIncorrect = isSelected && !isCorrect && showAnswer

                return (
                  <button
                    key={key}
                    onClick={() => !showAnswer && handleAnswerSelect(key as "A" | "B" | "C" | "D")}
                    disabled={showAnswer}
                    className={cn(
                      "w-full p-4 text-left rounded-lg border-2 transition-all flex items-center",
                      isSelected && !showAnswer && "border-blue-500 bg-blue-50",
                      showAnswer && isCorrect && "border-green-500 bg-green-50",
                      isIncorrect && "border-red-500 bg-red-50",
                      !isSelected && !showAnswer && "border-gray-200 hover:border-gray-300 hover:bg-gray-50",
                    )}
                  >
                    <div
                      className={cn(
                        "w-8 h-8 rounded-full flex items-center justify-center font-medium mr-3 flex-shrink-0",
                        isSelected && !showAnswer && "bg-blue-500 text-white",
                        showAnswer && isCorrect && "bg-green-500 text-white",
                        isIncorrect && "bg-red-500 text-white",
                        !isSelected && !showAnswer && "bg-gray-100 text-gray-700",
                      )}
                    >
                      {key}
                    </div>
                    <span className="text-gray-800">{value}</span>
                    {showAnswer && isCorrect && <CheckCircle className="h-5 w-5 text-green-600 ml-auto" />}
                    {isIncorrect && <XCircle className="h-5 w-5 text-red-600 ml-auto" />}
                  </button>
                )
              })}
            </div>
          </CardContent>
          {mode === "practice" && showAnswer && (
            <CardFooter className="bg-gray-50 border-t flex flex-col items-start p-4">
              <div className="flex items-center gap-2 mb-2 w-full">
                {currentQuestionAnswer === currentQuestion.correctAnswer ? (
                  <div className="flex items-center gap-2 text-green-600 font-medium">
                    <CheckCircle className="h-5 w-5" />
                    <span>Chính xác!</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2 text-red-600 font-medium">
                    <XCircle className="h-5 w-5" />
                    <span>Chưa đúng!</span>
                  </div>
                )}
              </div>
              <div className="p-3 bg-white rounded-lg border border-gray-200 w-full">
                <div className="flex items-center gap-2 mb-2">
                  <AlertCircle className="h-5 w-5 text-blue-600" />
                  <span className="font-medium text-blue-600">Giải thích</span>
                </div>
                <p className="text-sm text-gray-700">
                  <strong>Đáp án đúng:</strong> {currentQuestion.correctAnswer}.{" "}
                  {currentQuestion.options[currentQuestion.correctAnswer]}
                </p>
                {currentQuestionAnswer !== currentQuestion.correctAnswer && (
                  <p className="text-sm text-red-600 mt-2">
                    <strong>Bạn đã chọn:</strong> {currentQuestionAnswer}.{" "}
                    {currentQuestion.options[currentQuestionAnswer || "A"]}
                  </p>
                )}
              </div>
            </CardFooter>
          )}
        </Card>

        {/* Navigation */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <Button
            variant="outline"
            onClick={goToPrevious}
            disabled={currentQuestionIndex === 0}
            className="w-full md:w-auto"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Câu trước
          </Button>

          <div className="flex flex-wrap justify-center gap-2 max-w-full overflow-x-auto py-2">
            {questions.map((_, index) => {
              const q = answers[index]
              const isAnswered = !!q?.userAnswer
              const isCorrect = mode === "practice" && q?.userAnswer === q?.correctAnswer
              const isIncorrect = mode === "practice" && isAnswered && q?.userAnswer !== q?.correctAnswer

              return (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentQuestionIndex(index)
                    setSelectedOption(q?.userAnswer || null)
                    setShowAnswer(!!q?.userAnswer && mode === "practice")
                  }}
                  className={cn(
                    "w-8 h-8 rounded-full text-sm font-medium flex items-center justify-center",
                    index === currentQuestionIndex && "ring-2 ring-offset-2 ring-blue-500",
                    isCorrect
                      ? "bg-green-500 text-white"
                      : isIncorrect
                        ? "bg-red-500 text-white"
                        : isAnswered
                          ? "bg-blue-500 text-white"
                          : "bg-gray-200 text-gray-600",
                  )}
                >
                  {index + 1}
                </button>
              )
            })}
          </div>

          {mode === "practice" && showAnswer ? (
            currentQuestionIndex === questions.length - 1 ? (
              <Button onClick={finishQuiz} className="bg-green-600 hover:bg-green-700 w-full md:w-auto">
                <CheckCircle className="h-4 w-4 mr-2" />
                Hoàn thành ôn tập
              </Button>
            ) : (
              <Button onClick={goToNext} className="w-full md:w-auto">
                Câu tiếp theo
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            )
          ) : currentQuestionIndex === questions.length - 1 ? (
            <Button onClick={finishQuiz} className="bg-green-600 hover:bg-green-700 w-full md:w-auto">
              <CheckCircle className="h-4 w-4 mr-2" />
              Nộp bài
            </Button>
          ) : (
            <Button onClick={goToNext} className="w-full md:w-auto">
              Câu tiếp
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
