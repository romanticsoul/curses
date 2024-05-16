import { Button } from '@/shared/Button'
import CourseCard from '@/shared/UI/CourseCard'
import Link from 'next/link'

const Courses = () => {
  const testArr = new Array(10).fill({
    title: 'Название направления',
    description: 'Краткое описание того, чем занимаются на направлении',
  })

  return (
    <section className="bg-secondary">
      <div className="m-auto max-w-[1516px] px-[15px] pb-[113px] pt-[44px] ">
        <h2 className="pb-[48px] text-center text-[64px] font-medium leading-[64px] text-secondary-foreground max-[736px]:text-[48px] max-[736px]:leading-[48px] max-[528px]:text-[32px] max-[528px]:leading-[32px]">
          Направления обучения
        </h2>
        <ul className="mb-[48px] grid grid-cols-5 gap-[20px] max-[1168px]:grid-cols-4 max-[938px]:grid-cols-3 max-[712px]:grid-cols-2 max-[478px]:grid-cols-1">
          {testArr.map((item, index) => (
            <CourseCard
              key={index}
              title={item.title}
              description={item.description}
            />
          ))}
        </ul>
        <div className="flex justify-center">
          <Button size={'lg'} className="w-[374px]">
            <Link href={'/catalog'}>В каталог</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Courses
