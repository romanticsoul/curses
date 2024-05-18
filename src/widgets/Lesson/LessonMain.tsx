import TeacherCard from '@/shared/UI/TeacherCard'

const LessonMain = () => {
  return (
    <div className="mt-[40px] flex flex-col justify-between 2xl:flex-row">
      <div className="mr-[25px] flex flex-col justify-between gap-5">
        <p className="box-border w-full text-[16px] font-normal text-foreground  2xl:w-[420px]">
          Есть над чем задуматься: сторонники тоталитаризма в науке набирают
          популярность среди определенных слоев населения, а значит, должны быть
          преданы социально-демократической анафеме. И нет сомнений, что
          действия представителей оппозиции превращены в посмешище, хотя само их
          существование приносит несомненную пользу обществу. Вот вам яркий
          пример современных тенденций — курс на социально-ориентированный
          национальный проект требует анализа поставленных обществом задач.
        </p>
        <TeacherCard />
      </div>
      <iframe
        className=" mt-[20px] h-[300px]  w-full sm:h-[400px] xl:h-[514px] 2xl:mt-0"
        src="https://www.youtube.com/embed/6oIPqqOs4J0"
        title="Что в итоге выбрать: REACT, VUE или ANGULAR?"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  )
}

export default LessonMain
