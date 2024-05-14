import { Button } from '@/shared/Button'
import React from 'react'

import mainOverview from '../../public/assets/main-overview.png'

const MainOverview = () => {
  return (
    <section
      className="course-overview bg-main-overview bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url({${mainOverview}})` }}
    >
      <div className="m-auto max-w-[1516px] px-[15px] pb-[116px] pt-[140px]">
        <div className="max-w-[748px]">
          <h2 className="mb-[44px] text-[96px] font-medium leading-[96px]">
            Бесконечные возможности учиться онлайн
          </h2>
          <p className="mb-[84px] text-[36px] leading-[47px]">
            С нами можно учиться дистанционно топовым профессиям
          </p>
          <Button size={'xl'}>Продолжить курс</Button>
        </div>
      </div>
    </section>
  )
}

export default MainOverview
