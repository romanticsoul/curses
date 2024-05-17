import Answer from '@/widgets/Lesson/Answer'
import LessonMain from '@/widgets/Lesson/LessonMain'
import LessonTitle from '@/widgets/Lesson/LessonTitle'
import LessonsPanel from '@/widgets/Lesson/LessonsPanel'
const Lesson = ({
  params: { lesson_id },
}: {
  params: { lesson_id: string }
}) => {
  return (
    <main className="mb-[125px] flex min-h-screen w-screen ">
      <LessonsPanel />
      <div className="max-w-[70%]  px-[60px]">
        <LessonTitle id={lesson_id} />
        <LessonMain />
        <Answer />
      </div>
    </main>
  )
}

export default Lesson
