'use client'

import clsx from 'clsx'
import { MouseEventHandler, useRef, useState } from 'react'
import { Checkbox } from '../Checkbox'

type ExerciseProps = {
  id: number
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

export const ExerciseLesson: React.FC<ExerciseProps> = ({
  className,
  id,
  title,
  type,
  time,
  //   completed,
  //   changeCompleted
  //   active,
  //   changeActive
}) => {
  // Временно создал сосотояния, позже через пропсы
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

  const handleChange: MouseEventHandler<HTMLDivElement> = (e) => {
    if (checkbox.current && e.target == checkbox.current) {
      changeCompleted()
    } else {
      changeActive()
    }
  }

  return (
    <div
      className={clsx(
        'relative flex h-11 items-center justify-between  gap-5 rounded border-2 pl-8 pr-2'
        // active &&
        // ' before:absolute before:left-0 before:top-0 before:block before:h-full before:w-[16px] before:bg-[#E3E6FF] hover:before:bg-[#BCC3FF] dark:before:bg-[#E3E6FF] dark:hover:before:bg-[#BCC3FF]',
        // className
      )}
      onClick={(e) => handleChange(e)}
    >
      <div>
        {
          <span className="material-symbols-outlined text-2xl text-muted-foreground">
            {setIcon(type)}
          </span>
        }
      </div>
      <div className="flex grow flex-col justify-center">
        <div className="leading-5">{`Задание ${id}. ${title}`}</div>
        {time && (
          <div className="mt-2 text-muted-foreground">{`${time} мин`}</div>
        )}
      </div>
      <Checkbox ref={checkbox} checked={completed} disabled />
    </div>
  )
}
