import { Question } from '@/shared/UI/question'

const Questions = () => {
  const testArr = new Array(5).fill({
    question: 'Какие могут быть вопросы?',
    answer: 'Каким бы не был ответ, он остается быть ответом',
  })

  return (
    <section className="container m-auto pb-[100px] pt-[44px]">
      <h2 className="mb-[48px] text-benefit section-title">Частые вопросы</h2>
      <ul className="flex flex-col gap-[24px]">
        {testArr.map((item, index) => (
          <Question key={index} question={item.question} answer={item.answer} />
        ))}
      </ul>
    </section>
  )
}

export default Questions
