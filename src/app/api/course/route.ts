import data from '../courses.json'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const courseId = searchParams.get('course_id')
  const course = data.find((course) => course.id === Number(courseId))
  return Response.json(course)
}
