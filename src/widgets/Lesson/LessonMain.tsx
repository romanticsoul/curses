import TeacherCard from '@/shared/UI/TeacherCard'

const LessonMain = () => {
  return (
    <section className=" mt-[40px]">
      <div className="flex justify-between max-[1550px]:flex-col">
        <div className="flex flex-col justify-between gap-5">
          <p className="box-border w-[420px] text-[16px] font-normal text-foreground max-[1550px]:w-full">
            Есть над чем задуматься: сторонники тоталитаризма в науке набирают
            популярность среди определенных слоев населения, а значит, должны
            быть преданы социально-демократической анафеме. И нет сомнений, что
            действия представителей оппозиции превращены в посмешище, хотя само
            их существование приносит несомненную пользу обществу. Вот вам яркий
            пример современных тенденций — курс на социально-ориентированный
            национальный проект требует анализа поставленных обществом задач.
          </p>
          <TeacherCard />
        </div>
        <div className="h-[507px]"></div>
      </div>
    </section>
  )
}

export default LessonMain
