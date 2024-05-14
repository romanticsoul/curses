import TeamCard from '@/shared/UI/TeamCard'
import ToggleThemeButton from '@/shared/ToggleThemeButton'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex size-full items-center justify-center  ">
      <ToggleThemeButton />
    </main>
  )
}
