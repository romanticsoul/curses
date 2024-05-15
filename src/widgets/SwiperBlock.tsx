'use client'
import TeamCard from '@/shared/UI/TeamCard'
import { useRef, useState } from 'react'

import { Button } from '@/shared/Button'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const SwiperBlock = () => {
  const [_, setInit] = useState(false)

  const prevRef = useRef(null)
  const nextRef = useRef(null)
  const data = [
    {
      title: 'имя',
      description: 'описание',
    },
    {
      title: 'имя',
      description: 'описание',
    },
    {
      title: 'имя',
      description: 'описание',
    },
    {
      title: 'имя',
      description: 'описание',
    },
  ]

  return (
    <section className="relative px-[202px] pt-[44px]">
      <h2 className="mb-[48px] text-center text-[64px] font-medium text-benefit">
        Преподаватели
      </h2>

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        className=""
        spaceBetween={20}
        slidesPerView={2}
        allowTouchMove={false}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onInit={() => setInit(true)}
      >
        {data.map((d, key) => (
          <SwiperSlide key={key} className="overflow-hidden">
            <TeamCard name={d.title} description={d.description} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Button
        ref={prevRef}
        aspect={'square'}
        variant={'outlined'}
        className="absolute left-[202px] top-[50%] z-20 border-none bg-[#e3e6ff]"
      >
        <span className="material-symbols-outlined text-[#2C41FF] ">
          arrow_back_ios
        </span>
      </Button>
      <Button
        ref={nextRef}
        aspect={'square'}
        variant={'outlined'}
        className="absolute right-[202px] top-[50%] z-20 border-none bg-[#e3e6ff]"
      >
        <span className="material-symbols-outlined text-[#2C41FF]">
          arrow_forward_ios
        </span>
      </Button>
    </section>
  )
}

export default SwiperBlock
