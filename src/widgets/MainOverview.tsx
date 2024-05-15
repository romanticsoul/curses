import { Button } from '@/shared/Button'
import React from 'react'

const MainOverview = () => {
  return (
    <section className="bg-[url('/assets/main-overview.png')] bg-cover bg-center bg-no-repeat">
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
