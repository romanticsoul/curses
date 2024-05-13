'use client'

import clsx from 'clsx'
import { useEffect, useRef, useState } from 'react'

type QuestionProps = {
  question: string
  answer: string
  className?: string
}

export const Question: React.FC<QuestionProps> = (props) => {
  const { question, answer, className } = props
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const accordion = useRef<HTMLDivElement>(null)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    if (accordion.current) {
      const height = accordion.current.scrollHeight
      accordion.current.style.maxHeight = isOpen ? `${height}px` : ''
    }
  }, [isOpen])

  return (
    <li
      className={clsx('bg-accordion list-none rounded-lg px-4 py-2', className)}
    >
      <button
        onClick={handleClick}
        className="flex w-full justify-between text-3xl"
      >
        <span>{question}</span>
        {isOpen ? (
          // Иконка, которую сделает Юля
          <span className="inline-block size-8 bg-black "></span>
        ) : (
          // Иконка, которую сделает Юля
          <span className="inline-block size-8 bg-white "></span>
        )}
      </button>
      <div
        className={clsx(
          'box-content max-h-0 overflow-hidden p-0 opacity-0 transition-all',
          isOpen && 'pt-4 opacity-100'
        )}
        ref={accordion}
      >
        {answer}
      </div>
    </li>
  )
}
