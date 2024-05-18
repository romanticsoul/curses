import React from 'react'

import { Question } from '@/shared/UI/question'

const CourseDetails = () => {
  const testArr = new Array(5).fill({
    question: 'О чём курс?',
    answer: 'Ну курс о том-то о том-то бла бла бла',
  })

  return (
    <section className="container m-auto pb-[100px] pt-[44px]">
      <h2 className="mb-[48px] text-benefit section-title">Подробности</h2>
      <ul className="flex flex-col gap-[24px]">
        {testArr.map((item, index) => (
          <Question key={index} question={item.question} answer={item.answer} />
        ))}
      </ul>
    </section>
  )
}

export default CourseDetails
