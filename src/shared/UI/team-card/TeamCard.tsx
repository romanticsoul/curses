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
  direction = 'Направление',
  imgURL,
  name,
  description,
  link = '#',
}) => {
  return (
    <div className="flex  h-auto w-full max-w-[140px]  flex-col bg-transparent md:max-w-[440px]">
      <div className=" mb-[6px] overflow-hidden md:mb-0">
        <div
          className={`relative aspect-square w-full overflow-hidden rounded-[8px]  md:rounded-[32px]`}
        >
          {imgURL ? (
            <Image
              src={imgURL}
              alt="team"
              fill
              priority
              sizes="(100vw, 100vh)"
            />
          ) : (
            <div className="flex size-full items-center justify-center bg-muted">
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
          <button className="absolute right-[6px] top-[6px] flex h-auto w-max items-center justify-center rounded-[8px] bg-background px-[4px] py-[2px] text-[8px] leading-[10px] lg:right-[20px] lg:top-[20px] lg:h-[32px] lg:px-[16px]  lg:py-[10px] lg:text-[14px]">
            {direction}
          </button>
        </div>
        <h3 className="mt-[4px] text-[10px] font-semibold text-secondary-foreground md:mt-[20px] md:text-[20px]">
          {name}
        </h3>
        <p className=" mt-[3px] w-full text-[8px] md:mt-[10px] md:text-[14px]">
          {description}
        </p>
      </div>
      <Link
        className="flex items-center gap-2 text-[8px] text-muted-foreground md:text-[12px]"
        href={link}
      >
        <p>Подробнее</p>
        <span className="material-symbols-outlined text-sm">
          arrow_forward_ios
        </span>
      </Link>
    </div>
  )
}

export default TeamCard
