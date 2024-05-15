import ToggleThemeButton from '@/shared/ToggleThemeButton'
import CourseOverview from '@/widgets/CourseOverview'
import MainOverview from '@/widgets/MainOverview'

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <CourseOverview />
      <MainOverview />
    </main>
  )
}
