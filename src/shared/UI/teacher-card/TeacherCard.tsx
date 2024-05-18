import Image from 'next/image'
import teacher from '@/public/icons/teacher3.png'

const TeacherCard = () => {
  return (
    <div className="flex items-center gap-[16px]">
      <Image
        className="rounded-[100px]"
        width={64}
        src={teacher}
        alt="teacher"
      />
      <div className="block text-[16px] font-normal">
        <h3 className="mt-[8px] text-foreground">Имя Фамилия</h3>
        <p className="text-muted-foreground">Преподаватель чего</p>
      </div>
    </div>
  )
}

export default TeacherCard
