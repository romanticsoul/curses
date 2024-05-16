import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

interface Props {
  direction?: string
  imgURL?: string | StaticImageData
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
    <div className="flex h-[600px] w-full max-w-[440px] flex-col bg-transparent  max-[767px]:max-h-[200px] max-[767px]:min-w-[140px]">
      <div className=" overflow-hidden max-[767px]:mb-[6px]">
        <div
          className={`relative aspect-square w-full overflow-hidden rounded-[32px] max-[767px]:rounded-[8px]`}
        >
          {imgURL ? (
            <Image src={imgURL} alt="team" layout="fill" objectFit="cover" />
          ) : (
            <div className=" bg-muted flex size-full items-center justify-center  ">
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
          <button className="absolute right-[20px] top-[20px] flex h-[32px] w-max items-center justify-center rounded-[8px] bg-white px-[16px] py-[10px] text-[14px] dark:bg-[#333333] dark:text-white max-[767px]:right-[6px] max-[767px]:top-[6px] max-[767px]:h-auto max-[767px]:px-[4px] max-[767px]:py-[2px] max-[767px]:text-[8px] max-[767px]:leading-[10px]">
            {direction}
          </button>
        </div>
        <h3 className="mt-[20px] text-[20px] text-secondary-foreground max-[767px]:mt-[4px] max-[767px]:text-[10px]">
          {name}
        </h3>
        <p className=" mt-[12px] w-full text-[16px] max-[767px]:mt-[3px] max-[767px]:text-[10px]">
          {description}
        </p>
      </div>
      <Link
        className=" flex items-center gap-2 text-muted-foreground max-[767px]:text-[8px]"
        href={link}
      >
        <p className="">Подробнее </p>
        <svg
          className="max-[767px]:h-[7px] max-[767px]:w-[4px]"
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
