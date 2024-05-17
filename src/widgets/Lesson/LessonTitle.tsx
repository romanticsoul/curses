import { Button } from '@/shared/Button'

interface ILesson {
  id: string
}

const LessonTitle: React.FC<ILesson> = ({ id }) => {
  return (
    <section>
      <div className="flex flex-row ">
        <Button
          aspect={'square'}
          className=" border-none bg-secondary text-primary hover:bg-secondary dark:bg-primary dark:text-foreground"
        >
          <span className="material-symbols-outlined rotate-180">
            arrow_forward_ios
          </span>
        </Button>
        <h1 className="pl-[40px] text-[32px] font-normal">
          Задание 1. Очень длинное название задания аж на 2 строчки
        </h1>
        <Button
          aspect={'square'}
          className=" border-none bg-secondary text-primary hover:bg-secondary dark:bg-primary dark:text-foreground"
        >
          <span className="material-symbols-outlined">arrow_forward_ios</span>
        </Button>
      </div>
    </section>
  )
}

export default LessonTitle
