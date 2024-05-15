import React from 'react'

import { Question } from '@/shared/UI/Question'

const Questions = () => {
  const testArr = new Array(5).fill({
    question: 'Какие могут быть вопросы?',
    answer: 'Каким бы не был ответ, он остается быть ответом',
  })

  return (
    <section className="m-auto max-w-[1516px] px-[15px] pb-[100px] pt-[44px]">
      <h2 className="mb-[48px] text-center text-[64px] font-medium leading-[64px]">
        Частые вопросы
      </h2>
      <ul className="flex flex-col gap-[24px]">
        {testArr.map((item, index) => (
          <Question key={index} question={item.question} answer={item.answer} />
        ))}
      </ul>
    </section>
  )
}

export default Questions
