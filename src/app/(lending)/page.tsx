import Benefit from '@/widgets/Benefit'
import Courses from '@/widgets/Courses'
import MainOverview from '@/widgets/MainOverview'
import Questions from '@/widgets/Questions'
import SwiperBlock from '@/widgets/SwiperBlock'

export default function Home() {
  return (
    <main className="min-h-screen w-screen ">
      <MainOverview />
      <Benefit />
      <Courses />
      <SwiperBlock />
      <Questions />
    </main>
  )
}
