import React from 'react'

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
    <section className="m-auto max-w-[1516px] px-[15px] pb-[64px] pt-[62px]">
      <h2 className="mb-[44px] text-center text-[64px] font-medium leading-[64px] max-[736px]:text-[48px] max-[736px]:leading-[48px] max-[528px]:text-[32px] max-[528px]:leading-[32px]">
        Программа курса
      </h2>
      <ul className="flex flex-col gap-[24px]">
        {testThemes.map((theme, index) => (
          <li key={theme.id}>
            <h3 className="mb-[18px] ml-[64px]  text-[32px] font-medium leading-[32px] max-[736px]:text-[24px] max-[736px]:leading-[24px]">
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
