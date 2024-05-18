'use client'
import { useState } from 'react'

import { Button } from '@/shared/UI/button'
import SideMenu from './SideMenu'

const SideMenuButton = () => {
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

export default SideMenuButton
