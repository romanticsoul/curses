// 'use client'
import Tags from '@/widgets/Tags'
// import courses from '@/lib/courses.json'
import CourseCard from '@/shared/UI/CourseCard'
// import { useSearch } from '@/features/useSearch'
import { tags } from '@/features/useSearch'
import Filter from '@/widgets/Filter'
import type { Courses } from '../api/courses/route'

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

  // const { tag, value: searchValue } = useSearch()
  // const filteredCourses =
  //   tag === tags.all
  //     ? courses
  //     : courses.filter((course) => course.categories.includes(tag))

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
        {/* {tag !== tags.all && (
          <p>
            Найдено по запросу {'«'}
            {searchValue}
            {'»'}: {filteredCourses.length}
          </p>
        )} */}
        <div className="flex flex-wrap gap-5">
          {courses.map((item) => (
            <CourseCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default CatalogPage
