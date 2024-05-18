import Tags from '@/widgets/Tags'
import CourseCard from '@/shared/UI/CourseCard'
import Filter from '@/widgets/Filter'
import type { Courses } from '../../api/courses/route'

const CatalogPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) => {
  const newSearchParams = new URLSearchParams()

  for (const [key, value] of Object.entries(searchParams)) {
    if (Array.isArray(value)) {
      value.forEach((item) => {
        if (item) {
          newSearchParams.append(key, item as string)
        }
      })
    } else if (value) {
      newSearchParams.append(key, value as string)
    }
  }

  const queryString = newSearchParams.toString()
  const response = await fetch(
    `http://localhost:3000/api/courses?${queryString}`,
    {
      cache: 'no-cache',
    }
  )
  const courses: Courses = await response.json()

  return (
    <div className="mx-[50px] grid grid-cols-1 lg:grid-cols-[300px_1fr]">
      <div className=""></div>
      <div className="col-start-2 lg:col-start-2 ">
        <Tags />
      </div>
      <div className="col-start-2 my-[30px] lg:col-start-1">
        <Filter />
      </div>
      <div className="col-start-2 my-[30px] space-y-8 ">
        {courses.length !== 0 ? (
          <span className="text-[16px] leading-[16px]">
            Найдено по запросу «{courses[0].categories}»: {courses.length}
          </span>
        ) : (
          <></>
        )}
        <div className="flex flex-wrap gap-5">
          {courses.length !== 0 ? (
            courses.map((item) => <CourseCard key={item.title} {...item} />)
          ) : (
            <span className="text-[16px] leading-[16px]">
              Ничего не найдено, попробуйте поменять теги или фильтры
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

export default CatalogPage
