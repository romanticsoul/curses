import Benefit from '@/widgets/Benefit'
import Courses from '@/widgets/Courses'
import MainOverview from '@/widgets/MainOverview'

export default function Home() {
  return (
    <main className="min-h-screen w-screen ">
      <MainOverview />
      <Benefit />
      <Courses />
    </main>
  )
}
