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
    <section className=" w-[22%] overflow-y-auto p-0 max-[1550px]:w-[30%] max-[880px]:w-[95%]">
      <div className=" flex flex-col max-[880px]:gap-[10px]">
        {data.map((d, key) => (
          <ExerciseLesson {...d} key={key} />
        ))}
      </div>
    </section>
  )
}

export default LessonsPanel
