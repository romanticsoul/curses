import { ExerciseLesson } from '@/shared/UI/Exercise'

const LessonsPanel = () => {
  const data = new Array(7).fill({
    id: 1,
    title: 'Задание 1. Очень длинное название задания аж на 2 строчки',
    time: 15,
    type: 'video',
    completed: false,
  })

  return (
    <section className="h-screen w-[30%] overflow-y-scroll p-0">
      <div className=" block ">
        {data.map((d, key) => (
          <ExerciseLesson {...d} key={key} />
        ))}
      </div>
    </section>
  )
}

export default LessonsPanel
