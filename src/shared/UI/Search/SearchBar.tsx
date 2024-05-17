'use client'
import React, { useRef } from 'react'
import SearchPopover from './SearchPopover'
import { useSearch } from '@/features/useSearch'
import { AnimatePresence } from 'framer-motion'
import { Input } from '@/shared/Input'

const SearchBar = () => {
  const { value, setValue } = useSearch()
  const [active, setActive] = React.useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const popoverRef = useRef<HTMLDivElement>(null)

  const handleInputFocus = () => {
    setActive(true)
  }

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target as Node) &&
        popoverRef.current &&
        !popoverRef.current.contains(event.target as Node)
      ) {
        setActive(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [inputRef, popoverRef])
  return (
    <div className="relative w-full min-w-[300px] max-w-[900px]">
      <Input
        name="search"
        className="w-full"
        ref={inputRef}
        onFocus={handleInputFocus}
        placeholder="Найти курс..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
      />
      <AnimatePresence>
        {active && <SearchPopover ref={popoverRef} />}
      </AnimatePresence>
    </div>
  )
}

export default SearchBar
