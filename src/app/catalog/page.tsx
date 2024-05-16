'use client'
import Tags from '@/widgets/Tags'
import courses from '@/lib/courses.json'
import CourseCard from '@/shared/UI/CourseCard'
import { useSearch } from '@/features/useSearch'
import { tags } from '@/features/useSearch'
import Filter from '@/widgets/Filter'

const Catalog = () => {
  const { tag, value: searchValue } = useSearch()
  const filteredCourses =
    tag === tags.all
      ? courses
      : courses.filter((course) => course.categories.includes(tag))
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
        {tag !== tags.all && (
          <p>
            Найдено по запросу {'«'}
            {searchValue}
            {'»'}: {filteredCourses.length}
          </p>
        )}
        <div className="flex flex-wrap gap-5">
          {filteredCourses.map((item) => (
            <CourseCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Catalog
