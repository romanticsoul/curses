import { Button } from '@/shared/Button'

interface ILesson {
  id: string
}

const LessonTitle: React.FC<ILesson> = ({ id }) => {
  return (
    <div className="flex flex-row justify-between">
      <Button
        aspect={'square'}
        className="border-none bg-secondary text-primary hover:bg-secondary dark:bg-primary dark:text-foreground  "
      >
        <span className="material-symbols-outlined rotate-180">
          arrow_forward_ios
        </span>
      </Button>
      <h1 className="px-[10px] text-[24px] font-normal sm:px-[40px]  sm:text-[32px] lg:text-[20px] xl:px-[20px] xl:text-[24px]">
        Задание 1. Очень длинное название задания аж на 2 строчки
      </h1>
      <Button
        aspect={'square'}
        className="border-none bg-secondary text-primary hover:bg-secondary dark:bg-primary dark:text-foreground "
      >
        <span className="material-symbols-outlined">arrow_forward_ios</span>
      </Button>
    </div>
  )
}

export default LessonTitle
