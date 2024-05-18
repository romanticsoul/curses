import Answer from '@/widgets/Lesson/Answer'
import LessonMain from '@/widgets/Lesson/LessonMain'
import LessonTitle from '@/widgets/Lesson/LessonTitle'
import LessonsPanel from '@/widgets/Lesson/LessonsPanel'

const Page = ({ params: { lesson_id } }: { params: { lesson_id: string } }) => {
  return (
    <main className="mb-[125px] mt-[36px] flex min-h-screen w-screen flex-col-reverse items-center justify-between gap-[20px] px-6 sm:px-12 lg:flex-row lg:items-start">
      <LessonsPanel />

      <section className="mb-[20px]   w-full lg:mb-0 ">
        <LessonTitle id={lesson_id} />
        <LessonMain />
        <Answer />
      </section>
    </main>
  )
}

export default Page
