import Benefit from '@/widgets/Benefit'
import CourseDetails from '@/widgets/CourseDetails'
import Courses from '@/widgets/Courses'
import MainOverview from '@/widgets/MainOverview'
import Questions from '@/widgets/Questions'

export default function Home() {
  return (
    <main className="min-h-screen w-screen ">
      <MainOverview />
      <Benefit />
      <Courses />
      <Questions />
      <CourseDetails />
    </main>
  )
}
