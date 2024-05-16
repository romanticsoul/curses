import React from 'react'

import { Button } from '@/shared/Button'

const CourseOverview = () => {
  return (
    <section className="bg-[url('/assets/course-overview.png')] bg-cover bg-center bg-no-repeat text-white">
      <div className="m-auto max-w-[1516px] px-[15px] pb-[197px] pt-[102px]">
        <div className="max-w-[748px]">
          <span className=" text-[16px] font-medium leading-[16px]">
            Даты проведения
          </span>
          <h2 className="mb-[44px] mt-[22px] text-[96px] font-medium leading-[96px] max-[736px]:text-[72px] max-[736px]:leading-[72px] max-[528px]:text-[48px] max-[528px]:leading-[48px]">
            Название курса
          </h2>
          <p className="mb-[84px] text-[36px] leading-[47px] max-[736px]:text-[27px] max-[736px]:leading-[27px] max-[528px]:text-[18px]">
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
