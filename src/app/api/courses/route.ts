import { NextRequest } from 'next/server'
import data from '../_JSON/courses.json'

export type Courses = typeof data
type Course = Courses[0]

const filterCourses = (
  data: Course[],
  searchParams: URLSearchParams
): Course[] => {
  const category = searchParams
    .getAll('category')
    .map((v) => v.toLowerCase())[0]
  const cost = searchParams.getAll('cost').map((v) => v.toLowerCase())
  const level = searchParams.getAll('level').map((v) => v.toLowerCase())
  const during = searchParams.getAll('during').map((v) => v.toLowerCase())
  const format = searchParams.getAll('format').map((v) => v.toLowerCase())
  const status = searchParams.getAll('status').map((v) => v.toLowerCase())

  const filteredCourses = data.filter((course) => {
    const courseCost = course.cost.toLowerCase()
    const courseLevel = course.level.toLowerCase()
    const courseFormat = course.format.toLowerCase()
    const courseStatus = course.status.toLowerCase()
    const courseCategories = course.categories.map((c) => c.toLowerCase())

    const matchCategory = category ? courseCategories.includes(category) : true
    const matchCost = cost.length === 0 || cost.includes(courseCost)
    const matchLevel = level.length === 0 || level.includes(courseLevel)
    const matchFormat = format.length === 0 || format.includes(courseFormat)
    const matchStatus = status.length === 0 || status.includes(courseStatus)
    const matchDuring =
      during.length === 0 ||
      during.some((d) => {
        switch (d) {
          case 'до 2 месяцев':
            return course.duration_months <= 2
          case 'до полугода':
            return course.duration_months <= 6
          case 'до года':
            return course.duration_months <= 12
          case 'больше года':
            return course.duration_months > 12
          default:
            return false
        }
      })

    return (
      matchCost &&
      matchLevel &&
      matchFormat &&
      matchStatus &&
      matchDuring &&
      matchCategory
    )
  })

  return filteredCourses
}

export async function GET(req: NextRequest) {
  const courses: Course[] = filterCourses(data, req.nextUrl.searchParams)
  return Response.json(courses)
}
