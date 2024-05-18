import Footer from '@/widgets/Footer'
import LessonHeader from '@/widgets/Header/LessonHeader'

export default function LessonLayout({
  children,
  params: { course_id, lesson_id },
}: Readonly<{
  children: React.ReactNode
  params: { course_id: string; lesson_id: string }
}>) {
  return (
    <div>
      <LessonHeader courseId={Number(course_id)} lessonId={Number(lesson_id)} />
      {children}
      <Footer />
    </div>
  )
}
