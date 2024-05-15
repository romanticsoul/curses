import Benefit from '@/widgets/Benefit'
import MainOverview from '@/widgets/MainOverview'
import SwiperBlock from '@/widgets/SwiperBlock'

export default function Home() {
  return (
    <main className="min-h-screen w-screen ">
      <MainOverview />
      <Benefit />
      <SwiperBlock />
    </main>
  )
}
