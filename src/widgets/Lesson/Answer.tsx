import { Button } from '@/shared/Button'
import { Input } from '@/shared/Input'
const Answer = () => {
  return (
    <section className="mt-[58px]">
      <h3 className="mb-[14px] text-[16px] font-normal text-foreground">
        Ответ
      </h3>
      <div className="grid grid-cols-[1fr_200px] gap-[20px] max-[440px]:grid-cols-none max-[440px]:grid-rows-[1fr_200px]">
        <Input placeholder="Введите ваш ответ..." />
        <Button
          type={'button'}
          variant={'outlined'}
          className=" justify-center"
        >
          Отправить
        </Button>
      </div>
    </section>
  )
}

export default Answer
