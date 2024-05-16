'use client'

import CourseDetails from '@/widgets/CourseDetails'
import CourseOverview from '@/widgets/CourseOverview'
import CourseProgram from '@/widgets/CourseProgram'
import Progress from '@/widgets/Progress'
import SwiperBlock from '@/widgets/SwiperBlock'
import { useSearchParams } from 'next/navigation'

const Course = () => {
  const search = useSearchParams()
  return (
    <main className="min-h-screen w-screen ">
      <CourseOverview
        title={search.get('title')}
        description={search.get('description')}
      />
      <Progress />
      <CourseProgram />
      <SwiperBlock />
      <CourseDetails />
    </main>
  )
}
export default Course
