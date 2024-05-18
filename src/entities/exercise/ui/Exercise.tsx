'use client'
import { MouseEventHandler, useRef, useState } from 'react'
import clsx from 'clsx'
import Link from 'next/link'

import { Checkbox } from '@/shared/UI/checkbox'

type ExerciseProps = {
  lessonId: number
  courseId: number
  title: string
  time?: number
  type: 'video' | 'article' | 'practice'
  completed: boolean
  changeCompleted?: () => void
  className?: string
  active?: boolean
  changeActive?: () => void
}

const setIcon = (type: ExerciseProps['type']) => {
  let icon: string
  switch (type) {
    case 'video':
      icon = 'play_circle'
      break
    case 'article':
      icon = 'article'
      break
    case 'practice':
      icon = 'draw'
      break
  }
  return icon
}

const ExerciseLesson: React.FC<ExerciseProps> = ({
  className,
  lessonId,
  courseId,
  title,
  type,
  time,
}) => {
  const [active, setActive] = useState<boolean>(false)
  const [completed, setCompleted] = useState<boolean>(false)

  const checkbox = useRef<HTMLInputElement>(null)

  const changeCompleted = () => {
    setCompleted(!completed)
    if (checkbox.current) {
      checkbox.current.checked = completed
    }
  }

  const changeActive = () => {
    setActive(!active)
  }

  const handleChange: MouseEventHandler<HTMLAnchorElement> = (e) => {
    if (checkbox.current && e.target == checkbox.current) {
      changeCompleted()
    } else {
      changeActive()
    }
  }

  return (
    <Link
      href={`/course/${courseId}/${lessonId}`}
      className={clsx(
        'relative flex justify-between  gap-5 rounded border-2 py-2 pl-8 pr-2',
        active &&
          ' before:absolute before:left-0 before:top-0 before:block before:h-full before:w-[16px] before:bg-[#E3E6FF] hover:before:bg-[#BCC3FF] dark:before:bg-[#E3E6FF] dark:hover:before:bg-[#BCC3FF]',
        className
      )}
      onClick={(e) => handleChange(e)}
    >
      <div className="mt-1">
        {
          <span className="material-symbols-outlined text-2xl leading-6 text-muted-foreground">
            {setIcon(type)}
          </span>
        }
      </div>

      <div className="flex grow flex-col justify-center">
        <div className="leading-5">{`Задание ${lessonId}. ${title}`}</div>
        {time && (
          <div className="mt-2 text-muted-foreground">{`${time} мин`}</div>
        )}
      </div>
      <Checkbox
        ref={checkbox}
        checked={completed}
        className="mt-1 shrink-0"
        disabled
      />
    </Link>
  )
}

export default ExerciseLesson
