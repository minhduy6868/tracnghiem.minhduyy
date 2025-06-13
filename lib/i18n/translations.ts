export type Locale = "vi" | "en"

export const translations = {
  vi: {
    // Common
    appName: "Trắc nghiệm cùng Duy",
    language: "Ngôn ngữ",
    vietnamese: "Tiếng Anh",
    english: "Tiếng Việt",
    darkMode: "sáng",
    lightMode: "tối",
    systemMode: "Theo hệ thống",

    // Home page
    heroTitle: "Tạo Trắc Nghiệm Thông Minh với AI",
    heroDescription:
      "Chuyển đổi văn bản thành bài kiểm tra trắc nghiệm chỉ trong vài giây với công nghệ AI tiên tiến. Tiết kiệm thời gian và nâng cao hiệu quả học tập.",
    freeBadge: "Miễn phí 100%",
    instantBadge: "Phân tích tức thì",
    effectiveBadge: "Học hiệu quả",
    usersBadge: "10,000+ người dùng",

    // Input form
    createQuizTitle: "Tạo Trắc Nghiệm Thông Minh",
    createQuizDescription:
      "Dán văn bản chứa câu hỏi trắc nghiệm hoặc tải lên file. Hệ thống sẽ tự động phân tích và bổ sung thông tin thiếu.",
    inputLabel: "Nhập văn bản chứa câu hỏi trắc nghiệm:",
    uploadLabel: "Hoặc tải lên file:",
    chooseFile: "Chọn file",
    analyzeButton: "Phân tích câu hỏi",
    processing: "Đang xử lý...",

    // Guide
    guideTitle: "Hướng dẫn sử dụng",
    formatTitle: "Định dạng văn bản:",
    formatItem1: 'Mỗi câu hỏi bắt đầu bằng "Câu [số]:"',
    formatItem2: "Các lựa chọn: A. B. C. D.",
    formatItem3: 'Đáp án đúng: "Đáp án đúng: [A/B/C/D]"',
    formatItem4: "Nếu thiếu đáp án, AI sẽ tự động bổ sung",
    featuresTitle: "Tính năng:",
    featuresItem1: "Tự động phát hiện câu hỏi trắc nghiệm",
    featuresItem2: "Bổ sung đáp án thiếu bằng AI thông minh",
    featuresItem3: "Xem trước và chỉnh sửa câu hỏi",
    featuresItem4: "Làm bài và xem kết quả chi tiết",

    // Features section
    featuresSection: "Tính năng nổi bật",
    featuresSectionDescription:
      "Hệ thống trắc nghiệm thông minh cung cấp đầy đủ công cụ để tạo, quản lý và thực hiện bài kiểm tra trắc nghiệm một cách hiệu quả.",
    feature1Title: "Phân tích AI thông minh",
    feature1Description:
      "Tự động phát hiện câu hỏi trắc nghiệm từ văn bản thô và bổ sung thông tin thiếu bằng AI tiên tiến.",
    feature2Title: "Tạo trắc nghiệm nhanh chóng",
    feature2Description:
      "Chuyển đổi văn bản thành bài kiểm tra trắc nghiệm chỉ trong vài giây, tiết kiệm thời gian chuẩn bị.",
    feature3Title: "Hai chế độ học tập",
    feature3Description:
      "Chế độ kiểm tra để đánh giá kiến thức và chế độ ôn tập với giải thích chi tiết cho từng câu hỏi.",
    feature4Title: "Phân tích kết quả chi tiết",
    feature4Description: "Thống kê chi tiết về kết quả làm bài, giúp xác định điểm mạnh và điểm yếu cần cải thiện.",
    feature5Title: "Theo dõi thời gian",
    feature5Description:
      "Đồng hồ đếm thời gian làm bài giúp rèn luyện kỹ năng quản lý thời gian trong các kỳ thi thực tế.",
    feature6Title: "Giao diện thân thiện",
    feature6Description:
      "Thiết kế hiện đại, dễ sử dụng và hoàn toàn responsive trên mọi thiết bị từ điện thoại đến máy tính.",

    // Review page
    reviewTitle: "Xem trước câu hỏi",
    reviewDescription: "Kiểm tra và chỉnh sửa {count} câu hỏi đã phân tích",
    backButton: "Quay lại",
    questionLabel: "Câu",
    correctAnswer: "Đáp án đúng",
    startQuizButton: "Bắt đầu làm bài ({count} câu)",

    // Mode selector
    modeTitle: "Chọn chế độ làm bài",
    modeDescription: "Sẵn sàng với {count} câu hỏi",
    examMode: "Chế độ Kiểm tra",
    practiceMode: "Chế độ Ôn tập",
    examFeature1: "Làm tất cả câu hỏi",
    examFeature2: "Xem điểm sau khi hoàn thành",
    examFeature3: "Thứ tự câu hỏi được tráo",
    practiceFeature1: "Xem đáp án ngay lập tức",
    practiceFeature2: "Giải thích chi tiết",
    practiceFeature3: "Thứ tự câu hỏi được tráo",
    startExam: "Bắt đầu kiểm tra",
    startPractice: "Bắt đầu ôn tập",
    examSuitable: "Phù hợp để đánh giá kiến thức tổng thể",
    practiceSuitable: "Phù hợp để học và ghi nhớ kiến thức",

    // Quiz interface
    examTitle: "Kiểm tra kiến thức",
    practiceTitle: "Ôn tập kiến thức",
    questionCount: "Câu {current}/{total}",
    answeredCount: "Đã trả lời: {answered}/{total}",
    timeSpent: "Thời gian: {time}",
    previousButton: "Câu trước",
    nextButton: "Câu tiếp",
    nextQuestionButton: "Câu tiếp theo",
    finishExamButton: "Nộp bài",
    finishPracticeButton: "Hoàn thành ôn tập",
    correctFeedback: "Chính xác!",
    incorrectFeedback: "Chưa đúng!",
    explanation: "Giải thích",
    correctAnswerLabel: "Đáp án đúng:",
    yourChoiceLabel: "Bạn đã chọn:",

    // Results page
    resultsTitle: "Kết quả bài kiểm tra",
    scoreLabel: "Điểm số",
    statisticsLabel: "Thống kê",
    summaryLabel: "Tổng kết",
    correctAnswers: "Câu đúng",
    incorrectAnswers: "Câu sai",
    unanswered: "Chưa trả lời",
    totalQuestions: "Tổng câu hỏi",
    detailsTitle: "Chi tiết câu trả lời",
    showAll: "Xem tất cả",
    showLess: "Ẩn bớt",
    viewAllQuestions: "Xem tất cả {count} câu hỏi",
    notAnswered: "Bạn chưa trả lời câu này",
    reviewQuestionsButton: "Xem lại câu hỏi",
    newQuizButton: "Làm bài mới",

    // Score messages
    excellent: "Xuất sắc! 🎉",
    veryGood: "Tốt lắm! 👏",
    good: "Khá tốt! 👍",
    satisfactory: "Đạt yêu cầu 📚",
    needsImprovement: "Cần cố gắng thêm 💪",

    // Errors
    fileError: "Vui lòng chọn file .txt",
    fileTypeError: "Định dạng file không được hỗ trợ",
    supportedFormats: "Hỗ trợ các định dạng: .txt, .docx, .doc",
    fileReadError: "Không thể đọc file",
    tryAgain: "Vui lòng thử lại",
    inputError: "Vui lòng nhập văn bản chứa câu hỏi",
    processingError: "Không thể xử lý câu hỏi. Vui lòng thử lại.",
    noQuestionsFound: "Không tìm thấy câu hỏi trắc nghiệm trong văn bản",

    // Success
    analysisSuccess: "Đã phân tích {count} câu hỏi",

    // Testimonials
    testimonialsTitle: "Người dùng nói gì về chúng tôi",
    testimonialsDescription:
      "Hàng nghìn giáo viên và học sinh đã sử dụng hệ thống trắc nghiệm thông minh để nâng cao hiệu quả dạy và học.",
    testimonial1Text:
      "Công cụ tuyệt vời giúp tôi tiết kiệm rất nhiều thời gian chuẩn bị bài kiểm tra cho học sinh. Chỉ cần dán văn bản vào, hệ thống tự động tạo ra bài trắc nghiệm hoàn chỉnh.",
    testimonial1Name: "Nguyễn Thị Thanh",
    testimonial1Role: "Giáo viên THPT",
    testimonial2Text:
      "Chế độ ôn tập với giải thích chi tiết giúp tôi hiểu rõ từng câu hỏi. Đây là công cụ không thể thiếu trong quá trình ôn thi đại học của tôi.",
    testimonial2Name: "Trần Minh",
    testimonial2Role: "Học sinh lớp 12",
    testimonial3Text:
      "Tôi sử dụng để tạo các bài kiểm tra trực tuyến cho sinh viên. Hệ thống phân tích kết quả chi tiết giúp tôi nắm bắt được điểm yếu của từng em.",
    testimonial3Name: "TS. Lê Hoàng",
    testimonial3Role: "Giảng viên Đại học",

    // Footer
    footerDescription:
      "Hệ thống tạo trắc nghiệm thông minh với AI. Công cụ giáo dục hiện đại giúp giáo viên và học sinh tạo, quản lý và thực hiện bài kiểm tra trắc nghiệm một cách hiệu quả.",
    featuresMenuTitle: "Tính năng",
    createQuizOnline: "Tạo trắc nghiệm online",
    smartAIAnalysis: "Phân tích AI thông minh",
    examMode: "Chế độ kiểm tra",
    practiceMode: "Chế độ ôn tập",
    resultAnalysis: "Phân tích kết quả",
    supportMenuTitle: "Hỗ trợ",
    userGuide: "Hướng dẫn sử dụng",
    faq: "Câu hỏi thường gặp",
    contactSupport: "Liên hệ hỗ trợ",
    reportBug: "Báo cáo lỗi",
    feedback: "Góp ý cải thiện",
    contactMenuTitle: "Liên hệ",
    location: "Đà Nẵng, Việt Nam",
    copyright: "© {year} {appName}. Tất cả quyền được bảo lưu.",
    termsOfService: "Điều khoản sử dụng",
    privacyPolicy: "Chính sách bảo mật",

    // SEO Footer Links
    onlineQuiz: "Trắc nghiệm online",
    createQuiz: "Tạo trắc nghiệm",
    smartQuiz: "Trắc nghiệm thông minh",
    aiQuiz: "AI trắc nghiệm",
    quizSoftware: "Phần mềm trắc nghiệm",
    createExam: "Tạo đề thi trắc nghiệm",
    autoQuiz: "Trắc nghiệm tự động",
    quizTool: "Công cụ tạo trắc nghiệm",
    minhduyQuiz: "Trắc nghiệm MinhDuyy",
    freeQuiz: "Trắc nghiệm miễn phí",
    aiQuizTool: "Trắc nghiệm AI",
    createOnlineQuiz: "Tạo trắc nghiệm online",
  },
  en: {
    // Common
    appName: "Quiz with Duy",
    language: "Language",
    vietnamese: "Vietnamese",
    english: "English",
    darkMode: "Dark mode",
    lightMode: "Light mode",
    systemMode: "System mode",

    // Home page
    heroTitle: "Create Smart Quizzes with AI",
    heroDescription:
      "Convert text into multiple-choice quizzes in seconds with advanced AI technology. Save time and enhance learning efficiency.",
    freeBadge: "100% Free",
    instantBadge: "Instant Analysis",
    effectiveBadge: "Effective Learning",
    usersBadge: "10,000+ Users",

    // Input form
    createQuizTitle: "Create Smart Quiz",
    createQuizDescription:
      "Paste text containing multiple-choice questions or upload a file. The system will automatically analyze and fill in missing information.",
    inputLabel: "Enter text containing multiple-choice questions:",
    uploadLabel: "Or upload a file:",
    chooseFile: "Choose file",
    analyzeButton: "Analyze Questions",
    processing: "Processing...",

    // Guide
    guideTitle: "Usage Guide",
    formatTitle: "Text Format:",
    formatItem1: 'Each question starts with "Question [number]:"',
    formatItem2: "Options: A. B. C. D.",
    formatItem3: 'Correct answer: "Correct answer: [A/B/C/D]"',
    formatItem4: "If answer is missing, AI will automatically add it",
    featuresTitle: "Features:",
    featuresItem1: "Automatic multiple-choice question detection",
    featuresItem2: "Fill in missing answers with smart AI",
    featuresItem3: "Preview and edit questions",
    featuresItem4: "Take quizzes and view detailed results",

    // Features section
    featuresSection: "Key Features",
    featuresSectionDescription:
      "The smart quiz system provides all the tools to create, manage, and take multiple-choice quizzes efficiently.",
    feature1Title: "Smart AI Analysis",
    feature1Description:
      "Automatically detect multiple-choice questions from raw text and fill in missing information with advanced AI.",
    feature2Title: "Quick Quiz Creation",
    feature2Description: "Convert text into multiple-choice quizzes in seconds, saving preparation time.",
    feature3Title: "Two Learning Modes",
    feature3Description:
      "Exam mode to assess knowledge and practice mode with detailed explanations for each question.",
    feature4Title: "Detailed Result Analysis",
    feature4Description: "Detailed statistics on quiz results, helping identify strengths and weaknesses to improve.",
    feature5Title: "Time Tracking",
    feature5Description: "Quiz timer helps practice time management skills for real exams.",
    feature6Title: "User-Friendly Interface",
    feature6Description: "Modern design, easy to use, and fully responsive on all devices from phones to computers.",

    // Review page
    reviewTitle: "Preview Questions",
    reviewDescription: "Check and edit {count} analyzed questions",
    backButton: "Back",
    questionLabel: "Question",
    correctAnswer: "Correct Answer",
    startQuizButton: "Start Quiz ({count} questions)",

    // Mode selector
    modeTitle: "Select Quiz Mode",
    modeDescription: "Ready with {count} questions",
    examMode: "Exam Mode",
    practiceMode: "Practice Mode",
    examFeature1: "Answer all questions",
    examFeature2: "See score after completion",
    examFeature3: "Questions are shuffled",
    practiceFeature1: "See answers immediately",
    practiceFeature2: "Detailed explanations",
    practiceFeature3: "Questions are shuffled",
    startExam: "Start Exam",
    startPractice: "Start Practice",
    examSuitable: "Suitable for assessing overall knowledge",
    practiceSuitable: "Suitable for learning and memorizing",

    // Quiz interface
    examTitle: "Knowledge Test",
    practiceTitle: "Knowledge Practice",
    questionCount: "Question {current}/{total}",
    answeredCount: "Answered: {answered}/{total}",
    timeSpent: "Time: {time}",
    previousButton: "Previous",
    nextButton: "Next",
    nextQuestionButton: "Next Question",
    finishExamButton: "Submit",
    finishPracticeButton: "Finish Practice",
    correctFeedback: "Correct!",
    incorrectFeedback: "Incorrect!",
    explanation: "Explanation",
    correctAnswerLabel: "Correct answer:",
    yourChoiceLabel: "Your choice:",

    // Results page
    resultsTitle: "Quiz Results",
    scoreLabel: "Score",
    statisticsLabel: "Statistics",
    summaryLabel: "Summary",
    correctAnswers: "Correct",
    incorrectAnswers: "Incorrect",
    unanswered: "Unanswered",
    totalQuestions: "Total Questions",
    detailsTitle: "Answer Details",
    showAll: "Show All",
    showLess: "Show Less",
    viewAllQuestions: "View all {count} questions",
    notAnswered: "You didn't answer this question",
    reviewQuestionsButton: "Review Questions",
    newQuizButton: "New Quiz",

    // Score messages
    excellent: "Excellent! 🎉",
    veryGood: "Very Good! 👏",
    good: "Good! 👍",
    satisfactory: "Satisfactory 📚",
    needsImprovement: "Needs Improvement 💪",

    // Errors
    fileError: "Please select a .txt file",
    fileTypeError: "File format not supported",
    supportedFormats: "Supported formats: .txt, .docx, .doc",
    fileReadError: "Unable to read file",
    tryAgain: "Please try again",
    inputError: "Please enter text containing questions",
    processingError: "Unable to process questions. Please try again.",
    noQuestionsFound: "No multiple-choice questions found in the text",

    // Success
    analysisSuccess: "Analyzed {count} questions",

    // Testimonials
    testimonialsTitle: "What Our Users Say",
    testimonialsDescription:
      "Thousands of teachers and students have used our smart quiz system to enhance teaching and learning efficiency.",
    testimonial1Text:
      "A wonderful tool that saves me a lot of time preparing tests for my students. Just paste the text in, and the system automatically creates a complete multiple-choice quiz.",
    testimonial1Name: "Nguyen Thi Thanh",
    testimonial1Role: "High School Teacher",
    testimonial2Text:
      "The practice mode with detailed explanations helps me understand each question thoroughly. This is an essential tool in my university entrance exam preparation.",
    testimonial2Name: "Tran Minh",
    testimonial2Role: "12th Grade Student",
    testimonial3Text:
      "I use it to create online tests for my students. The detailed result analysis system helps me identify each student's weaknesses.",
    testimonial3Name: "Dr. Le Hoang",
    testimonial3Role: "University Lecturer",

    // Footer
    footerDescription:
      "Smart quiz creation system with AI. A modern educational tool that helps teachers and students create, manage, and take multiple-choice quizzes efficiently.",
    featuresMenuTitle: "Features",
    createQuizOnline: "Create online quiz",
    smartAIAnalysis: "Smart AI analysis",
    examMode: "Exam mode",
    practiceMode: "Practice mode",
    resultAnalysis: "Result analysis",
    supportMenuTitle: "Support",
    userGuide: "User guide",
    faq: "FAQ",
    contactSupport: "Contact support",
    reportBug: "Report bug",
    feedback: "Feedback",
    contactMenuTitle: "Contact",
    location: "DaNang, Vietnam",
    copyright: "© {year} {appName}. All rights reserved.",
    termsOfService: "Terms of Service",
    privacyPolicy: "Privacy Policy",

    // SEO Footer Links
    onlineQuiz: "Online Quiz",
    createQuiz: "Create Quiz",
    smartQuiz: "Smart Quiz",
    aiQuiz: "AI Quiz",
    quizSoftware: "Quiz Software",
    createExam: "Create Exam",
    autoQuiz: "Auto Quiz",
    quizTool: "Quiz Tool",
    minhduyQuiz: "MinhDuyy Quiz",
    freeQuiz: "Free Quiz",
    aiQuizTool: "AI Quiz Tool",
    createOnlineQuiz: "Create Online Quiz",
  },
}

export type TranslationKey = keyof typeof translations.en
