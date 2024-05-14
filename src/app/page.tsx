import Image from 'next/image'

import CourseOverview from '@/widgets/CourseOverview'
import { Button } from '@/shared/Button'
import TeamCard from '@/shared/TeamCard'
import ToggleThemeButton from '@/shared/ToggleThemeButton'
import { Question } from '@/shared/UI/Question'
import SearchCourse from '@/shared/UI/SearchCourse'
import MainOverview from '@/widgets/MainOverview'

export default function Home() {
  return (
    <main className="min-h-screen w-screen">
      <CourseOverview />
      <MainOverview />
    </main>
  )
}
