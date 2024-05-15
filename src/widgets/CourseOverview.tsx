import React from 'react'

import { Button } from '@/shared/Button'

const CourseOverview = () => {
  return (
    <section className="bg-[url('/assets/course-overview.png')] bg-cover bg-center bg-no-repeat">
      <div className="m-auto max-w-[1516px] px-[15px] pb-[197px] pt-[102px]">
        <div className="max-w-[748px]">
          <span className=" text-[16px] font-medium leading-[16px]">
            Даты проведения
          </span>
          <h3 className="mb-[44px] mt-[22px] text-[96px] font-medium leading-[96px]">
            Название курса
          </h3>
          <p className="mb-[84px] text-[36px] leading-[47px]">
            Краткое описание того, что изучается на курсе и какие компетенции
            получит слушатель в процессе
          </p>
          <Button size={'xl'}>Продолжить курс</Button>
        </div>
      </div>
    </section>
  )
}

export default CourseOverview
