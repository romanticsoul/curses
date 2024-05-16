'use client'
import TeamCard from '@/shared/UI/TeamCard'
import { useEffect, useRef, useState } from 'react'
import { Button } from '@/shared/Button'
import 'swiper/css'
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { cn } from '@/lib/utils'

type Teacher = {
  id: number
  name: string
  direction: string
  description: string
  imgUrl: string
}

const getTeachers = async () => {
  const res = await fetch('http://localhost:3000/api/teachers')
  return (await res.json()) as Teacher[]
}

const SwiperBlock = () => {
  const prevButtonRef = useRef(null)
  const nextButtonRef = useRef(null)
  const [_, setInit] = useState(false)
  const [teachers, setTeachers] = useState<Teacher[]>([])

  useEffect(() => {
    getTeachers().then((data) => {
      setTeachers(data)
    })
  }, [])

  return (
    <section className="relative px-[202px] pt-[44px] max-[1219px]:px-[120px] max-[1019px]:px-[100px] max-[767px]:px-[15px]">
      <h2 className="mb-[48px] text-center text-[64px] font-medium text-benefit max-[1150px]:text-[70px] max-[767px]:text-[28px] max-[767px]:leading-7">
        Преподаватели
      </h2>
      <div
        className={cn(teachers.length < 3 ? 'hidden' : 'max-[767px]:hidden')}
      >
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          initialSlide={0}
          spaceBetween={20}
          slidesPerView={3}
          // centeredSlides={true}
          allowTouchMove={false}
          breakpoints={{
            1023: { slidesPerView: 2 },
            1441: { slidesPerView: 2.7 },
          }}
          navigation={{
            prevEl: prevButtonRef.current,
            nextEl: nextButtonRef.current,
          }}
          onInit={() => setInit(true)}
          className="container"
        >
          {teachers.map((d, key) => (
            <SwiperSlide key={key} className="overflow-hidden">
              <TeamCard
                name={d.name}
                description={d.description}
                direction={d.direction}
                imgURL={d.imgUrl}
              />
            </SwiperSlide>
          ))}
          <Button
            ref={prevButtonRef}
            aspect={'square'}
            className="absolute left-5 top-1/2 z-20 border-none bg-secondary text-primary hover:bg-secondary dark:bg-primary dark:text-foreground"
          >
            <span className="material-symbols-outlined rotate-180">
              arrow_forward_ios
            </span>
          </Button>
          <Button
            ref={nextButtonRef}
            aspect={'square'}
            className="absolute right-5 top-1/2  z-20 border-none bg-secondary text-primary hover:bg-secondary dark:bg-primary dark:text-foreground"
          >
            <span className="material-symbols-outlined">arrow_forward_ios</span>
          </Button>
        </Swiper>
      </div>
      <ul
        className={
          teachers.length < 3
            ? 'flex flex-wrap items-center justify-center gap-[20px] max-[767px]:flex max-[767px]:gap-[10px]'
            : 'hidden flex-wrap items-center justify-center max-[767px]:flex max-[767px]:gap-[10px]'
        }
      >
        {teachers.map((d, key) => (
          <li key={key}>
            <TeamCard
              name={d.name}
              description={d.description}
              direction={d.direction}
              imgURL={d.imgUrl}
            />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default SwiperBlock
