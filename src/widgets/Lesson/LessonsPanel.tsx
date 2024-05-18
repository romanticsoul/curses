import { ExerciseLesson } from '@/shared/UI/Exercise'

const LessonsPanel = () => {
  const data = new Array(7).fill({
    id: '1',
    title: 'Задание 1. Очень длинное название задания аж на 2 строчки',
    time: 15,
    type: 'video',
    completed: false,
  })

  return (
    <section className="w-[95%] overflow-y-auto  p-0 lg:w-[30%]">
      <ul className=" flex flex-col gap-[10px]  lg:gap-0">
        {data.map((d, key) => (
          <ExerciseLesson {...d} key={key} className="border-none" />
        ))}
      </ul>
    </section>
  )
}

export default LessonsPanel
