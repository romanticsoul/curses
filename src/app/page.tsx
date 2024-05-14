import { Button } from '@/shared/Button'
import TeamCard from '@/shared/TeamCard'
import ToggleThemeButton from '@/shared/ToggleThemeButton'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex h-screen w-screen items-center justify-center ">
      <ToggleThemeButton />
    </main>
  )
}
