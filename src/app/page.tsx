import { Button } from '@/shared/Button'
import TeamCard from '@/shared/TeamCard'
import ToggleThemeButton from '@/shared/ToggleThemeButton'
import { Question } from '@/shared/UI/Question'
import SearchCourse from '@/shared/UI/SearchCourse'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center gap-[20px] ">
      <ToggleThemeButton />
      <Question question="weweaefqwfqefqwff" answer="cqewfwefwef" />
      <SearchCourse />
    </main>
  )
}
