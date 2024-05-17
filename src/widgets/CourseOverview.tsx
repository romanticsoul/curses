import React from 'react'

import { Button } from '@/shared/Button'

export interface ICourse {
  id: number
  title: string
  description: string
  link: string
  favorite: boolean
  cost: string
  level: string
  duration_months: number
  format: string
  status: string
  categories: string[]
}

type CourseOverviewProps = {
  courseId: ICourse['id']
}

const CourseOverview: React.FC<CourseOverviewProps> = async ({ courseId }) => {
  const response = await fetch(
    `http://localhost:3000/api/course?course_id=${courseId}`
  )
  const course: ICourse | undefined = await response.json()

  return (
    <section className="bg-[url('/assets/course-overview.png')] bg-cover bg-center bg-no-repeat text-white">
      <div className="container m-auto pb-[197px] pt-[102px]">
        <div className="max-w-[748px]">
          <span className=" text-[16px] font-medium leading-[16px]">
            Даты проведения
          </span>
          <h2 className="mb-[44px] mt-[22px] main-title">{course?.title}</h2>
          <p className="mb-[84px] text-[36px] leading-[47px] max-[736px]:text-[27px] max-[736px]:leading-[27px] max-[528px]:text-[18px]">
            {course?.description}
          </p>
          <Button size={'xl'}>Продолжить курс</Button>
        </div>
      </div>
    </section>
  )
}

export default CourseOverview
