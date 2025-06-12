"use client"

import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { CheckCircle, XCircle, RotateCcw, Eye, Award, BarChart, Clock } from "lucide-react"
import type { Question } from "@/app/page"
import { useState } from "react"

interface QuizResultsProps {
  questions: Question[]
  onRestart: () => void
  onReview: () => void
}

export default function QuizResults({ questions, onRestart, onReview }: QuizResultsProps) {
  const [showAllQuestions, setShowAllQuestions] = useState(false)

  const totalQuestions = questions.length
  const answeredQuestions = questions.filter((q) => q.userAnswer).length
  const correctAnswers = questions.filter((q) => q.userAnswer === q.correctAnswer).length
  const score = totalQuestions > 0 ? (correctAnswers / totalQuestions) * 100 : 0

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-600"
    if (score >= 60) return "text-yellow-600"
    return "text-red-600"
  }

  const getScoreMessage = (score: number) => {
    if (score >= 90) return "Xuất sắc! 🎉"
    if (score >= 80) return "Tốt lắm! 👏"
    if (score >= 70) return "Khá tốt! 👍"
    if (score >= 60) return "Đạt yêu cầu 📚"
    return "Cần cố gắng thêm 💪"
  }

  const getScoreEmoji = (score: number) => {
    if (score >= 90) return "🏆"
    if (score >= 80) return "🥇"
    if (score >= 70) return "🥈"
    if (score >= 60) return "🥉"
    return "📝"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Kết quả bài kiểm tra</h1>
          <p className="text-lg text-gray-600">{getScoreMessage(score)}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="shadow-lg border-t-4 border-t-blue-500">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <Award className="h-5 w-5 text-blue-500" />
                Điểm số
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center py-6">
              <div className={`text-6xl font-bold mb-2 ${getScoreColor(score)}`}>{score.toFixed(1)}%</div>
              <div className="text-lg text-gray-600 flex items-center justify-center gap-2">
                <span>{getScoreEmoji(score)}</span>
                <span>{getScoreMessage(score)}</span>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-t-4 border-t-green-500">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <BarChart className="h-5 w-5 text-green-500" />
                Thống kê
              </CardTitle>
            </CardHeader>
            <CardContent className="py-4">
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Câu đúng</span>
                    <span className="font-medium">
                      {correctAnswers}/{totalQuestions}
                    </span>
                  </div>
                  <Progress value={(correctAnswers / totalQuestions) * 100} className="h-2 bg-gray-200" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Câu sai</span>
                    <span className="font-medium">
                      {answeredQuestions - correctAnswers}/{totalQuestions}
                    </span>
                  </div>
                  <Progress
                    value={((answeredQuestions - correctAnswers) / totalQuestions) * 100}
                    className="h-2 bg-gray-200"
                  />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Chưa trả lời</span>
                    <span className="font-medium">
                      {totalQuestions - answeredQuestions}/{totalQuestions}
                    </span>
                  </div>
                  <Progress
                    value={((totalQuestions - answeredQuestions) / totalQuestions) * 100}
                    className="h-2 bg-gray-200"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-t-4 border-t-purple-500">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <Clock className="h-5 w-5 text-purple-500" />
                Tổng kết
              </CardTitle>
            </CardHeader>
            <CardContent className="py-4">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">{totalQuestions}</div>
                  <div className="text-xs text-gray-600">Tổng câu hỏi</div>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">{correctAnswers}</div>
                  <div className="text-xs text-gray-600">Câu đúng</div>
                </div>
                <div className="bg-red-50 p-3 rounded-lg">
                  <div className="text-2xl font-bold text-red-600">{answeredQuestions - correctAnswers}</div>
                  <div className="text-xs text-gray-600">Câu sai</div>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="text-2xl font-bold text-gray-600">{totalQuestions - answeredQuestions}</div>
                  <div className="text-xs text-gray-600">Chưa trả lời</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-6 shadow-lg">
          <CardHeader className="border-b bg-gray-50">
            <div className="flex items-center justify-between">
              <CardTitle>Chi tiết câu trả lời</CardTitle>
              <Button variant="outline" size="sm" onClick={() => setShowAllQuestions(!showAllQuestions)}>
                {showAllQuestions ? "Ẩn bớt" : "Xem tất cả"}
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-0 divide-y">
            {questions.slice(0, showAllQuestions ? questions.length : 5).map((question, index) => {
              const isCorrect = question.userAnswer === question.correctAnswer
              const isAnswered = question.userAnswer !== undefined

              return (
                <div key={question.id} className="p-4">
                  <div className="flex items-start gap-3">
                    <div
                      className={`rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 ${
                        !isAnswered
                          ? "bg-gray-200"
                          : isCorrect
                            ? "bg-green-100 text-green-600"
                            : "bg-red-100 text-red-600"
                      }`}
                    >
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium mb-2">{question.question}</p>
                      <div className="grid grid-cols-1 gap-2 mb-2">
                        {Object.entries(question.options).map(([key, value]) => {
                          const isUserAnswer = question.userAnswer === key
                          const isCorrectAnswer = question.correctAnswer === key

                          let className = "p-3 rounded border text-sm "
                          if (isCorrectAnswer) {
                            className += "bg-green-100 border-green-300 text-green-800"
                          } else if (isUserAnswer && !isCorrectAnswer) {
                            className += "bg-red-100 border-red-300 text-red-800"
                          } else {
                            className += "bg-gray-50 border-gray-200"
                          }

                          return (
                            <div key={key} className={className}>
                              <span className="font-medium">{key}.</span> {value}
                              {isCorrectAnswer && (
                                <span className="ml-2 text-green-600 font-medium">(Đáp án đúng)</span>
                              )}
                              {isUserAnswer && !isCorrectAnswer && (
                                <span className="ml-2 text-red-600 font-medium">(Bạn chọn)</span>
                              )}
                            </div>
                          )
                        })}
                      </div>
                      {!isAnswered && <p className="text-gray-500 text-sm italic">Bạn chưa trả lời câu này</p>}
                    </div>
                    <div className="flex-shrink-0">
                      {!isAnswered ? (
                        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                          <span className="text-gray-500 text-xs">?</span>
                        </div>
                      ) : isCorrect ? (
                        <CheckCircle className="h-8 w-8 text-green-600" />
                      ) : (
                        <XCircle className="h-8 w-8 text-red-600" />
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </CardContent>
          {!showAllQuestions && questions.length > 5 && (
            <CardFooter className="border-t bg-gray-50 flex justify-center p-3">
              <Button variant="ghost" onClick={() => setShowAllQuestions(true)}>
                Xem tất cả {questions.length} câu hỏi
              </Button>
            </CardFooter>
          )}
        </Card>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button onClick={onReview} variant="outline" size="lg" className="flex-1 sm:flex-initial">
            <Eye className="h-4 w-4 mr-2" />
            Xem lại câu hỏi
          </Button>
          <Button onClick={onRestart} size="lg" className="flex-1 sm:flex-initial">
            <RotateCcw className="h-4 w-4 mr-2" />
            Làm bài mới
          </Button>
        </div>
      </div>
    </div>
  )
}
