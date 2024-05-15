import Link from 'next/link'

const MyEducationButton = () => {
  return (
    <Link
      className="w-max rounded-[8px] border-2 border-primary px-[16px] py-[8px] text-[14px] text-foreground  "
      href="#"
    >
      <p>Мое обучение</p>
    </Link>
  )
}

export default MyEducationButton
