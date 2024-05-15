'use client'

import { useTheme } from 'next-themes'
import { Button } from './Button'

export default function ToggleThemeButton() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      aspect={'square'}
      variant={'transparent'}
      className="bg-transparent text-foreground"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      <span className="material-symbols-outlined">Contrast</span>
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
