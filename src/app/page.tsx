import TeamCard from '@/shared/TeamCard'
import ToggleThemeButton from '@/shared/toggle-theme-button'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex h-screen w-screen items-center justify-center ">
      <ToggleThemeButton />
    </main>
  )
}
