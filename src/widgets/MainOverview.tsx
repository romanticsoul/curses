import Link from 'next/link'
import { Button } from '@/shared/Button'

const MainOverview = () => {
  return (
    <section className="bg-[url('/assets/main-overview.png')] bg-cover bg-center bg-no-repeat text-white">
      <div className="container m-auto pb-[23px] pt-[16px] md:pb-[116px] md:pt-[140px]">
        <div className="items-left flex max-w-[748px] flex-col md:block">
          <h2 className="mb-[12px] text-[28px] leading-[36px]  md:mb-[44px] md:text-[96px] md:main-title">
            Бесконечные возможности учиться онлайн
          </h2>
          <p className="mb-[40px] text-[36px] leading-[47px] max-[736px]:text-[27px]  max-[736px]:leading-[27px] max-[528px]:text-[18px] md:mb-[84px] ">
            С нами можно учиться дистанционно топовым профессиям
          </p>
          <Button
            size={'xl'}
            className="h-[31px] self-center rounded-sm bg-[#2C41FF] text-[12px] text-white md:h-[88px] md:rounded-lg md:px-[133px] md:text-[36px]"
          >
            <Link href={'/catalog'}>В каталог</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default MainOverview
