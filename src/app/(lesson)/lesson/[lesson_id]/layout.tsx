import Footer from '@/widgets/Footer'
import LessonHeader from '@/widgets/Header/LessonHeader'

export default function LessonLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div>
      <LessonHeader />
      {children}
      <Footer />
    </div>
  )
}
