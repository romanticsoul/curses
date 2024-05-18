import { Button } from '@/shared/Button'
import { Input } from '@/shared/Input'
const Answer = () => {
  return (
    <div className="mt-[58px]">
      <h3 className="mb-[14px] text-[16px] font-normal text-foreground">
        Ответ
      </h3>
      <div className="grid grid-rows-[1fr_auto] gap-[20px] sm:grid-cols-[1fr_auto]">
        <Input placeholder="Введите ваш ответ..." />
        <Button
          type={'button'}
          variant={'outlined'}
          className=" justify-center"
        >
          Отправить
        </Button>
      </div>
    </div>
  )
}

export default Answer
