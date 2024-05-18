const Benefit = () => {
  const data = [
    {
      figure: '1000+',
      who: 'студентов',
      description:
        'Обучается на нашей платформе,и более 400 выпускников ежегодно',
    },
    {
      figure: '50',
      who: 'преподавателей',
      description: 'Помогают нашим студентам освоить все необходимые материалы',
    },
    {
      figure: '22',
      who: 'страны',
      description: 'Гражданами стольких стран являются наши студенты',
    },
  ]
  return (
    <section className="flex items-center justify-center ">
      <ul className="my-3 flex flex-wrap items-center justify-center gap-[30px] p-1  md:my-[94px]  md:gap-[85px]">
        {data.map((obj, key) => (
          <li key={key} className="flex flex-col items-center justify-center">
            <h2 className="text-[28px] font-bold leading-7 text-benefit md:text-[70px] md:leading-normal  lg:text-[96px]">
              {obj.figure}
            </h2>
            <p className="mb-[15px]  text-[16px] font-medium text-foreground md:mb-[44px] md:text-[24px] lg:text-[32px]">
              {obj.who}
            </p>
            <p className="w-[140px] text-center text-[10px] text-xl font-medium leading-3 text-muted-foreground md:w-[270px] md:text-[20px] md:leading-normal lg:w-[376px]">
              {obj.description}
            </p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Benefit
