import { Question } from '@/shared/UI/Question'

export const mockQuestion = {
  question: 'Как дела?',
  answer:
    'У меня всё нормально, у меня всё нихуёво, ееее... У меня всё нормально, у меня всё нихуёво, ееее... У меня всё нормально, у меня всё нихуёво, ееее... У меня всё нормально, у меня всё нихуёво, ееее...',
}

export default function Home() {
  return (
    <main className="min-h-screen  p-24">
      <Question question={mockQuestion.question} answer={mockQuestion.answer} />
      <Question question={mockQuestion.question} answer={mockQuestion.answer} />
      <Question question={mockQuestion.question} answer={mockQuestion.answer} />
    </main>
  )
}
