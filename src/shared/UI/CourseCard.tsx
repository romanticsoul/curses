'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Button } from '../Button'

interface ICourseCard {
  id: number
  title: string
  description: string
}

const CourseCard: React.FC<ICourseCard> = ({ id, title, description }) => {
  const [ButtonProp, setButtonProp] = useState('Выбрать')

  return (
    <li className="relative h-[287px] max-w-[287px] list-none rounded-2xl border-2 border-secondary bg-card duration-500 before:absolute before:block before:size-full before:bg-[url('/background/cardLine.png')] before:bg-center before:bg-no-repeat hover:bg-card-hover">
      <Link href={{ pathname: `/course/${id}` }}>
        <div className="relative box-border flex size-full flex-col justify-start p-[20px]">
          <h3 className="mb-[12px] box-border text-xl font-semibold leading-[20px] text-secondary-foreground">
            {title}
          </h3>
          <p className=" mb-auto text-[13px] font-normal leading-5">
            {description}
          </p>
          <div className=" flex flex-row gap-[16px] ">
            <Button
              variant={'outlined'}
              className="min-w-0 shrink grow bg-card "
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
              }}
            >
              {ButtonProp}
            </Button>
            <Button
              aspect={'square'}
              variant={'outlined'}
              className="shrink-0  border-secondary bg-white dark:border-primary"
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
              }}
            >
              <span className="material-symbols-outlined text-[#2C41FF]">
                favorite
              </span>
            </Button>
          </div>
        </div>
      </Link>
    </li>
  )
}

export default CourseCard
