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
      <div className="max-w-[70%] px-[60px] max-[880px]:mb-[20px] max-[880px]:max-w-full max-[768px]:px-[20px]">
        <LessonTitle id={lesson_id} />
        <iframe
          width="914"
          height="514"
          src="https://www.youtube.com/embed/6oIPqqOs4J0"
          title="Что в итоге выбрать: REACT, VUE или ANGULAR?"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
        <LessonMain />
        <Answer />
      </div>
    </main>
  )
}

export default Lesson
