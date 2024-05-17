import LessonsPanel from '@/widgets/LessonsPanel'

const Lesson = ({
  params: { course_id },
}: {
  params: { course_id: string }
}) => {
  return (
    <main className="mb-[125px] min-h-screen w-screen">
      <LessonsPanel />
    </main>
  )
}

export default Lesson
