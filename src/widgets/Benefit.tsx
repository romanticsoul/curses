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
      <ul className="my-[94px] flex flex-wrap items-center justify-center gap-[85px]  p-1 max-[767px]:gap-[30px]">
        {data.map((obj, key) => (
          <li key={key} className="flex flex-col items-center justify-center">
            <h2 className="text-[96px] font-bold text-benefit max-[1150px]:text-[70px] max-[767px]:text-[28px] max-[767px]:leading-7">
              {obj.figure}
            </h2>
            <p className="mb-[44px]  text-[32px] font-medium text-foreground max-[1150px]:text-[24px] max-[767px]:mb-[15px] max-[767px]:text-[16px]">
              {obj.who}
            </p>
            <p className="w-[376px] text-center text-xl font-medium text-muted-foreground max-[1150px]:w-[270px] max-[1150px]:text-[20px] max-[767px]:w-[140px] max-[767px]:text-[10px] max-[767px]:leading-3">
              {obj.description}
            </p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Benefit
