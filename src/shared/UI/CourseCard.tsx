'use client'

import { useState } from 'react'
import { Button } from '../Button'

interface ICourseCard {
  title: string
  description: string
}

const CourseCard: React.FC<ICourseCard> = ({ title, description }) => {
  const [ButtonProp, setButtonProp] = useState('Выбрать')

  // const Change = () => {
  //   console.log(123)
  //   setButtonProp('Вы участник')
  // }
  return (
    <li className="relative h-[287px] max-w-[287px] list-none rounded-2xl border-2 border-[#E3E6FF] duration-[0.7s] before:absolute before:block before:size-full before:bg-[url('/background/cardLine.png')] before:bg-center before:bg-no-repeat hover:bg-[#F5F5F5]">
      <div className="box-border flex size-full relative flex-col justify-start p-[20px]">
        <h3 className="  mb-[12px]  box-border text-xl font-semibold leading-[20px] text-[#161F69]">
          {title}
        </h3>
        <p className=" mb-auto text-base font-normal leading-5">
          {description}
        </p>
        <div className=" flex flex-row gap-[16px] ">
          <Button
            variant={'outlined'}
            className="bg-card px-[63px]"
            // onClick={Change}
          >
            {ButtonProp}
          </Button>
          <Button
            aspect={'square'}
            variant={'outlined'}
            className="border-[#E3E6FF]  bg-white"
          >
            <span className="material-symbols-outlined text-[#2C41FF]">
              favorite
            </span>
          </Button>
        </div>
      </div>
    </li>
  )
}

export default CourseCard
