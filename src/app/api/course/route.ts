import { NextRequest } from 'next/server'
import data from '../_JSON/courses.json'

export type ICourse = (typeof data)[number]

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams
  const courseId = searchParams.get('course_id')
  const course = data.find((course) => course.id === Number(courseId))
  return Response.json(course)
}
