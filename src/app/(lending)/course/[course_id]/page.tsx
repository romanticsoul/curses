import CourseDetails from '@/widgets/CourseDetails'
import CourseOverview from '@/widgets/CourseOverview'
import CourseProgram from '@/widgets/CourseProgram'
import Progress from '@/widgets/Progress'
import SwiperBlock from '@/widgets/SwiperBlock'

const CoursePage = ({
  params: { course_id },
}: {
  params: { course_id: string }
}) => {
  return (
    <main className="min-h-screen w-screen">
      <CourseOverview courseId={Number(course_id)} />
      <Progress />
      <CourseProgram />
      <SwiperBlock />
      <CourseDetails />
    </main>
  )
}
export default CoursePage
