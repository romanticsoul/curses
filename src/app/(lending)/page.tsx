import { Benefit } from '@/widgets/benefit'
import { Courses } from '@/widgets/courses'
import { MainOverview } from '@/widgets/main-overview'
import { Questions } from '@/widgets/questions'
import { SwiperBlock } from '@/widgets/swiper-block'

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
