import { StaticImageData } from 'next/image'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
  direction?: string
  imgURL?: string
  name?: string
  description?: string
  link?: string
}

const TeamCard: React.FC<Props> = ({
  direction = 'None',
  imgURL,
  name,
  description,
  link = '#',
}) => {
  return (
    <div className=" flex h-[600px] max-w-[440px] flex-col bg-transparent  ">
      <div className=" size-full overflow-hidden ">
        <div
          className={`relative aspect-square w-full overflow-hidden rounded-[32px] `}
        >
          {imgURL ? (
            <Image src={imgURL} alt="team" layout="fill" objectFit="cover" />
          ) : (
            <div className="flex size-full items-center justify-center bg-[#EAEAEA] dark:bg-[#797979] ">
              <svg
                width="96"
                height="96"
                viewBox="0 0 96 96"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M48.0206 46.9147C56.6589 46.9147 64.0921 39.2005 64.0921 29.1547C64.0921 19.2325 56.6178 11.8799 48.0206 11.8799C39.4218 11.8799 31.9492 19.3936 31.9492 29.237C31.9492 39.2005 39.4235 46.9147 48.0206 46.9147ZM22.7881 84.1199H73.2532C79.5618 84.1199 81.8109 82.313 81.8109 78.7765C81.8109 68.4102 68.8338 54.1079 48.0206 54.1079C27.1681 54.1079 14.1892 68.4102 14.1892 78.7765C14.1892 82.313 16.4401 84.1199 22.7881 84.1199Z"
                  fill="#C9C9C9"
                />
              </svg>
            </div>
          )}
          <button className="absolute right-[20px] top-[20px] flex h-[32px] w-max items-center justify-center rounded-[8px] bg-white px-[16px] py-[10px] text-[14px] dark:bg-[#333333] dark:text-white">
            {direction}
          </button>
        </div>
        <h1 className="mt-[20px] text-[20px] text-primary dark:text-[#E3E6FF]  ">
          {name}
        </h1>
        <p className=" mt-[12px] w-full text-[16px] ">{description}</p>
      </div>
      <Link
        className=" flex items-center gap-2 text-[#797979] dark:text-[#9D9D9D]"
        href={link}
      >
        <p>Подробнее </p>
        <svg
          width="9"
          height="15"
          viewBox="0 0 9 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1 1L7.5 7.5L1 14" stroke="#797979" stroke-width="1.5" />
        </svg>
      </Link>
    </div>
  )
}

export default TeamCard
