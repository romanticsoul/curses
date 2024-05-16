'use client'
import TeamCard from '@/shared/UI/TeamCard'
import { useRef, useState } from 'react'

import { Button } from '@/shared/Button'
import 'swiper/css'
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import photo from '../../public/teachers/photo.png'

const SwiperBlock = () => {
  const [_, setInit] = useState(false)

  const prevRef = useRef(null)
  const nextRef = useRef(null)
  const data = [
    {
      title: 'имя',
      description: 'описание',
      img: photo,
    },
    {
      title: 'имя',
      description: 'описание',
      img: photo,
    },
    {
      title: 'имя',
      description: 'описание',
      img: photo,
    },
    {
      title: 'имя',
      description: 'описание',
      img: photo,
    },
  ]

  return (
    <section className="relative px-[202px] pt-[44px] max-[1219px]:px-[120px] max-[1019px]:px-[100px] max-[767px]:px-[15px]">
      <h2 className="mb-[48px] text-center text-[64px] font-medium text-benefit max-[1150px]:text-[70px] max-[767px]:text-[28px] max-[767px]:leading-7">
        Преподаватели
      </h2>
      <div className={data.length < 3 ? 'hidden' : 'max-[767px]:hidden'}>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          initialSlide={2}
          spaceBetween={20}
          slidesPerView={3}
          centeredSlides={true}
          allowTouchMove={false}
          breakpoints={{
            1023: { slidesPerView: 2 },
            1441: { slidesPerView: 2.7 },
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onInit={() => setInit(true)}
        >
          {data.map((d, key) => (
            <SwiperSlide key={key} className="overflow-hidden">
              <TeamCard
                name={d.title}
                description={d.description}
                imgURL={d.img}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <Button
          ref={prevRef}
          aspect={'square'}
          variant={'outlined'}
          className="absolute left-[207px] top-[50%] z-20 border-none bg-[#e3e6ff] max-[1219px]:left-[125px]"
        >
          <span className="material-symbols-outlined text-[#2C41FF] ">
            arrow_back_ios
          </span>
        </Button>
        <Button
          ref={nextRef}
          aspect={'square'}
          variant={'outlined'}
          className="absolute right-[207px] top-[50%] z-20 border-none bg-[#e3e6ff]  max-[1219px]:right-[125px]"
        >
          <span className="material-symbols-outlined text-[#2C41FF]">
            arrow_forward_ios
          </span>
        </Button>
      </div>
      <ul
        className={
          data.length < 3
            ? 'flex flex-wrap items-center justify-center gap-[20px] max-[767px]:flex max-[767px]:gap-[10px]'
            : 'hidden flex-wrap items-center justify-center max-[767px]:flex max-[767px]:gap-[10px]'
        }
      >
        {data.map((d, key) => (
          <li key={key}>
            <TeamCard
              name={d.title}
              description={d.description}
              imgURL={d.img}
            />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default SwiperBlock
