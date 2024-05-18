'use client'
import { useState } from 'react'
import SideMenu from './Header/SideMenu'
import { Button } from '@/shared/Button'

export default function SideMenuButton() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button
        variant="transparent"
        aspect="square"
        onClick={() => setIsOpen(true)}
        className="lg:hidden"
      >
        <span className="material-symbols-outlined">Menu</span>
      </Button>
      <SideMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  )
}
