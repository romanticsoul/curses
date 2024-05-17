import { Button } from '@/shared/Button'
import CourseCard from '@/shared/UI/CourseCard'
import Link from 'next/link'
import { ICourse } from './CourseOverview'

const Courses = async () => {
  const testArr = new Array(10).fill({
    title: 'Название направления',
    description: 'Краткое описание того, чем занимаются на направлении',
  })
  const response = await fetch('http://localhost:3000/api/courses').catch((e) =>
    console.log(e)
  )
  const courses: ICourse[] | undefined = await response?.json()

  return (
    <section className="bg-secondary">
      <div className="m-auto max-w-[1516px] px-[15px] pb-[113px] pt-[44px] ">
        <h2 className="section-title pb-[48px] text-secondary-foreground">
          Направления обучения
        </h2>
        <ul className="mb-[48px] grid grid-cols-5 gap-[20px] max-[1168px]:grid-cols-4 max-[938px]:grid-cols-3 max-[712px]:grid-cols-2 max-[478px]:grid-cols-1">
          {courses
            ?.slice(0, 10)
            .map((item, index) => (
              <CourseCard
                key={index}
                id={item.id}
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
