'use client'
import Tags from '@/widgets/Tags'
import courses from '@/lib/courses.json'
import CourseCard from '@/shared/UI/CourseCard'
import { useSearch } from '@/features/useSearch'
import { tags } from '@/features/useSearch'

const Catalog = () => {
  const { tag } = useSearch()
  const filteredCourses =
    tag === tags.all
      ? courses
      : courses.filter((course) => course.categories.includes(tag))
  return (
    <div className="mx-[50px] grid grid-cols-1 lg:grid-cols-[300px_1fr]">
      <div className=""></div>
      <div className="flex flex-col gap-[30px]">
        <Tags />
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
