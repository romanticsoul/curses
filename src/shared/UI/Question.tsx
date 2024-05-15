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
  const accordion = useRef<HTMLParagraphElement>(null)

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
    <li className={clsx('list-none', className)}>
      <button
        onClick={handleClick}
        className=" flex w-full items-center justify-between gap-2 rounded-lg bg-secondary px-4 py-2 text-3xl leading-8"
      >
        <span>{question}</span>
        {isOpen ? (
          <span className="material-symbols-outlined text-3xl">
            keyboard_control_key
          </span>
        ) : (
          <span className="material-symbols-outlined text-3xl">add</span>
        )}
      </button>
      <p
        className={clsx(
          'box-content max-h-0 overflow-hidden p-0 text-2xl opacity-0 transition-all',
          isOpen && 'px-4 py-2 text-textGray opacity-100'
        )}
        ref={accordion}
      >
        {answer}
      </p>
    </li>
  )
}
