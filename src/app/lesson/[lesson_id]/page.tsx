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
    <main className="mb-[125px] mt-[36px] flex min-h-screen w-screen max-[880px]:flex-col-reverse max-[880px]:items-center">
      <LessonsPanel />
      <div className="max-w-[70%]  px-[60px] max-[880px]:mb-[20px] max-[880px]:max-w-[100%] max-[768px]:px-[20px]">
        <LessonTitle id={lesson_id} />
        <LessonMain />
        <Answer />
      </div>
    </main>
  )
}

export default Lesson
