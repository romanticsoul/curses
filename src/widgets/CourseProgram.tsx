import { ExerciseLesson } from '@/shared/UI/Exercise'

const CourseProgram = () => {
  const testThemes = [
    {
      id: 1,
      title: 'Название темы 1',
    },
    {
      id: 2,
      title: 'Название темы 2',
    },
    {
      id: 3,
      title: 'Название темы 3',
    },
    {
      id: 4,
      title: 'Название темы 4',
    },
    {
      id: 5,
      title: 'Название темы 5',
    },
  ]

  const testLessons = [
    {
      id: 1,
      title: 'Очень длинное название задания аж на 2 строчки',
      type: 'video',
      completed: true,
    },
    {
      id: 2,
      title: 'Очень длинное название задания',
      type: 'article',
      completed: false,
    },
    {
      id: 3,
      title: 'Очень длинное название задания аж на 2 строчки аж на 2 строчки',
      type: 'practice',
      completed: false,
    },
    {
      id: 4,
      title: 'Очень длинное название задания',
      type: 'video',
      completed: false,
    },
    {
      id: 5,
      title: 'Очень длинное название задания',
      type: 'article',
      completed: false,
    },
    {
      id: 6,
      title:
        'Очень длинное название зададлинное название задлинное название задлинное название задлинное название задлинное название задлинное название задлинное название задлинное название задлинное название задлинное название задлинное название зания',
      type: 'practice',
      completed: false,
    },
    {
      id: 7,
      title:
        'Очее заданиязаданиязинное название задаинное название задзаданиязадания',
      type: 'article',
      completed: false,
    },
    {
      id: 8,
      title: 'Очень длинное название задания',
      type: 'article',
      completed: false,
    },
  ]

  return (
    <section className="container m-auto pb-[64px] pt-[62px]">
      <h2 className="mb-[44px] text-benefit section-title">Программа курса</h2>
      <ul className="flex flex-col gap-[24px]">
        {testThemes.map((theme, index) => (
          <li key={theme.id}>
            <h3 className="mb-[18px] ml-[64px]  text-[24px] font-medium leading-[24px] md:text-[32px] md:leading-[32px]">
              Тема №{theme.id}. {theme.title}
            </h3>
            <ul>
              {testLessons
                .filter((lesson) => lesson.id === theme.id)
                .map((lesson) => (
                  <li key={lesson.id}>
                    <ExerciseLesson
                      id={lesson.id}
                      title={lesson.title}
                      type={'video'}
                      completed={lesson.completed}
                      className="cursor-pointer"
                    />
                  </li>
                ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default CourseProgram
