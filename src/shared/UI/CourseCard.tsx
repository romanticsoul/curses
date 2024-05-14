interface ICourseCard {
  title: string
  description: string
}

const CourseCard: React.FC<ICourseCard> = ({ title, description }) => {
  return (
    <li className=" before:contents-['']  relative h-[287px] max-w-[287px] list-none  rounded-2xl border-[2px] border-[#E3E6FF] duration-[0.7s] before:absolute before:block before:h-full before:w-full before:bg-[url('../../src/public/background/cardLine.png')] before:bg-center before:bg-no-repeat hover:bg-[#F5F5F5]">
      <div className="items-left box-border flex  h-full w-full flex-col justify-start p-[20px]">
        <h3 className="  mb-[12px]  box-border text-xl font-semibold leading-[20px] text-[#161F69]">
          {title}
        </h3>
        <p className=" mb-auto text-base font-normal leading-5">
          {description}
        </p>
        <div className=" flex flex-row gap-[16px] ">
          <button className="border px-[63px] py-[15px] text-sm" type="button">
            Выбрать
          </button>
          <button className="border p-[10px]" type="button">
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
            />
          </button>
        </div>
      </div>
    </li>
  )
}

export default CourseCard
