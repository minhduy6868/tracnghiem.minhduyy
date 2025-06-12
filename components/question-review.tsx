"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Play, Edit, Save, X } from "lucide-react"
import type { Question } from "@/app/page"

// Import component mới
import QuizModeSelector from "@/components/quiz-mode-selector"

export default function QuestionReview({ questions, onQuestionsUpdate, onStartQuiz, onBack }: QuestionReviewProps) {
  const [showModeSelector, setShowModeSelector] = useState(false)
  const [editingId, setEditingId] = useState<number | null>(null)
  const [editingQuestion, setEditingQuestion] = useState<Question | null>(null)

  const startEdit = (question: Question) => {
    setEditingId(question.id)
    setEditingQuestion({ ...question })
  }

  const cancelEdit = () => {
    setEditingId(null)
    setEditingQuestion(null)
  }

  const saveEdit = () => {
    if (editingQuestion) {
      const updatedQuestions = questions.map((q) => (q.id === editingQuestion.id ? editingQuestion : q))
      onQuestionsUpdate(updatedQuestions)
      setEditingId(null)
      setEditingQuestion(null)
    }
  }

  const deleteQuestion = (id: number) => {
    const updatedQuestions = questions.filter((q) => q.id !== id)
    onQuestionsUpdate(updatedQuestions)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <Button variant="outline" onClick={onBack}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Quay lại
          </Button>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Xem trước câu hỏi</h1>
            <p className="text-gray-600">Kiểm tra và chỉnh sửa {questions.length} câu hỏi đã phân tích</p>
          </div>
        </div>

        <div className="space-y-4 mb-6">
          {questions.map((question, index) => (
            <Card key={question.id}>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Câu {index + 1}</CardTitle>
                  <div className="flex gap-2">
                    {editingId === question.id ? (
                      <>
                        <Button size="sm" onClick={saveEdit}>
                          <Save className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline" onClick={cancelEdit}>
                          <X className="h-4 w-4" />
                        </Button>
                      </>
                    ) : (
                      <>
                        <Button size="sm" variant="outline" onClick={() => startEdit(question)}>
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="destructive" onClick={() => deleteQuestion(question.id)}>
                          <X className="h-4 w-4" />
                        </Button>
                      </>
                    )}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {editingId === question.id && editingQuestion ? (
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium">Câu hỏi:</label>
                      <Textarea
                        value={editingQuestion.question}
                        onChange={(e) =>
                          setEditingQuestion({
                            ...editingQuestion,
                            question: e.target.value,
                          })
                        }
                        className="mt-1"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      {Object.entries(editingQuestion.options).map(([key, value]) => (
                        <div key={key}>
                          <label className="text-sm font-medium">Lựa chọn {key}:</label>
                          <Input
                            value={value}
                            onChange={(e) =>
                              setEditingQuestion({
                                ...editingQuestion,
                                options: {
                                  ...editingQuestion.options,
                                  [key]: e.target.value,
                                },
                              })
                            }
                            className="mt-1"
                          />
                        </div>
                      ))}
                    </div>

                    <div>
                      <label className="text-sm font-medium">Đáp án đúng:</label>
                      <Select
                        value={editingQuestion.correctAnswer}
                        onValueChange={(value: "A" | "B" | "C" | "D") =>
                          setEditingQuestion({
                            ...editingQuestion,
                            correctAnswer: value,
                          })
                        }
                      >
                        <SelectTrigger className="mt-1">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="A">A</SelectItem>
                          <SelectItem value="B">B</SelectItem>
                          <SelectItem value="C">C</SelectItem>
                          <SelectItem value="D">D</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <p className="font-medium">{question.question}</p>
                    <div className="grid grid-cols-2 gap-2">
                      {Object.entries(question.options).map(([key, value]) => (
                        <div
                          key={key}
                          className={`p-2 rounded border ${
                            key === question.correctAnswer
                              ? "bg-green-50 border-green-200"
                              : "bg-gray-50 border-gray-200"
                          }`}
                        >
                          <span className="font-medium">{key}.</span> {value}
                        </div>
                      ))}
                    </div>
                    <p className="text-sm text-green-600 font-medium">Đáp án đúng: {question.correctAnswer}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {showModeSelector ? (
          <QuizModeSelector
            questionCount={questions.length}
            onModeSelect={onStartQuiz}
            onBack={() => setShowModeSelector(false)}
          />
        ) : (
          <>
            {/* Existing question cards */}
            {questions.length > 0 && (
              <div className="text-center">
                <Button onClick={() => setShowModeSelector(true)} size="lg" className="px-8">
                  <Play className="h-4 w-4 mr-2" />
                  Bắt đầu làm bài ({questions.length} câu)
                </Button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}

interface QuestionReviewProps {
  questions: Question[]
  onQuestionsUpdate: (questions: Question[]) => void
  onStartQuiz: (mode: "exam" | "practice") => void
  onBack: () => void
}
