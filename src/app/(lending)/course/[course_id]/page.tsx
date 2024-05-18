import { CourseDetails } from '@/widgets/course-details'
import { CourseOverview } from '@/widgets/course-overview'
import { CourseProgram } from '@/widgets/course-program'
import { Progress } from '@/widgets/progress'
import { SwiperBlock } from '@/widgets/swiper-block'

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
