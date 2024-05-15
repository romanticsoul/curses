'use client'
import ToggleThemeButton from '@/shared/ToggleThemeButton'
import MyEducationButton from '@/shared/UI/MyEducationButton'
import SearchBar from '@/shared/UI/Search/SearchBar'
import Link from 'next/link'
import React from 'react'
import SideMenu from './SideMenu'

export const links = [
  {
    name: 'Каталог',
    href: '/catalog',
  },
  {
    name: 'О проекте',
    href: '/about',
  },
  {
    name: 'Контакты',
    href: '/contacts',
  },
]

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <header className="z-20 my-6 w-full space-y-4 bg-transparent  px-12">
      <div className="flex h-full items-center justify-between  gap-12">
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center min-[1150px]:hidden"
        >
          <svg
            className="fill-foreground"
            width="26"
            height="16"
            viewBox="0 0 26 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 1C0 0.447715 0.447715 0 1 0H25C25.5523 0 26 0.447715 26 1C26 1.55228 25.5523 2 25 2H1C0.447716 2 0 1.55228 0 1ZM0 8C0 7.44772 0.447715 7 1 7H25C25.5523 7 26 7.44772 26 8C26 8.55229 25.5523 9 25 9H1C0.447716 9 0 8.55229 0 8ZM1 14C0.447715 14 0 14.4477 0 15C0 15.5523 0.447716 16 1 16H25C25.5523 16 26 15.5523 26 15C26 14.4477 25.5523 14 25 14H1Z"
            />
          </svg>
        </button>
        <div className="hidden gap-8 min-[1150px]:flex">
          <Link href="/" className="text-[16px] font-[500] text-foreground ">
            logo
          </Link>
          {links.map((link) => (
            <Link
              className="min-w-max text-[16px] font-[500] text-muted-foreground"
              href={link.href}
              key={link.name}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="flex items-center md:hidden">
          <MyEducationButton />
        </div>
        <div className="hidden items-center md:flex">
          <SearchBar />
        </div>
        <div className="flex gap-7">
          <div className="hidden items-center min-[1150px]:flex">
            <ToggleThemeButton />
          </div>
          <div className="hidden items-center md:flex">
            <MyEducationButton />
          </div>
          <div className="flex items-center text-foreground ">
            <svg
              className="fill-foreground"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 21H14C14 22.1 13.1 23 12 23C10.9 23 10 22.1 10 21ZM21 19V20H3V19L5 17V11C5 7.9 7 5.2 10 4.3V4C10 2.9 10.9 2 12 2C13.1 2 14 2.9 14 4V4.3C17 5.2 19 7.9 19 11V17L21 19ZM17 11C17 8.2 14.8 6 12 6C9.2 6 7 8.2 7 11V18H17V11Z" />
            </svg>
          </div>
          <div className="hidden items-center md:flex  ">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="20" cy="20" r="20" fill="#E3E6FF" />
              <path
                d="M21.9766 17.4205C21.916 16.8826 21.666 16.4659 21.2266 16.1705C20.7872 15.8712 20.2341 15.7216 19.5675 15.7216C19.0902 15.7216 18.6773 15.7973 18.3288 15.9489C17.9804 16.0966 17.7095 16.3011 17.5163 16.5625C17.3269 16.8201 17.2322 17.1136 17.2322 17.4432C17.2322 17.7197 17.2966 17.9583 17.4254 18.1591C17.558 18.3598 17.7304 18.5284 17.9425 18.6648C18.1584 18.7973 18.3894 18.9091 18.6357 19C18.8819 19.0871 19.1186 19.1591 19.3459 19.2159L20.4822 19.5114C20.8535 19.6023 21.2341 19.7254 21.6243 19.8807C22.0144 20.036 22.3762 20.2405 22.7095 20.4943C23.0429 20.7481 23.3118 21.0625 23.5163 21.4375C23.7247 21.8125 23.8288 22.2614 23.8288 22.7841C23.8288 23.4432 23.6584 24.0284 23.3175 24.5398C22.9804 25.0511 22.4898 25.4545 21.8459 25.75C21.2057 26.0455 20.4311 26.1932 19.522 26.1932C18.6508 26.1932 17.897 26.0549 17.2607 25.7784C16.6243 25.5019 16.1262 25.1098 15.7663 24.6023C15.4065 24.0909 15.2076 23.4848 15.1697 22.7841H16.9311C16.9652 23.2045 17.1016 23.5549 17.3402 23.8352C17.5826 24.1117 17.8913 24.3182 18.2663 24.4545C18.6451 24.5871 19.0599 24.6534 19.5107 24.6534C20.0069 24.6534 20.4482 24.5758 20.8345 24.4205C21.2247 24.2614 21.5315 24.0417 21.755 23.7614C21.9785 23.4773 22.0902 23.1458 22.0902 22.767C22.0902 22.4223 21.9917 22.1402 21.7947 21.9205C21.6016 21.7008 21.3383 21.5189 21.005 21.375C20.6754 21.2311 20.3023 21.1042 19.8857 20.9943L18.5107 20.6193C17.5788 20.3655 16.8402 19.9924 16.2947 19.5C15.7531 19.0076 15.4822 18.3561 15.4822 17.5455C15.4822 16.875 15.6641 16.2898 16.0277 15.7898C16.3913 15.2898 16.8838 14.9015 17.505 14.625C18.1262 14.3447 18.8269 14.2045 19.6072 14.2045C20.3951 14.2045 21.0902 14.3428 21.6925 14.6193C22.2985 14.8958 22.7758 15.2765 23.1243 15.7614C23.4728 16.2424 23.6546 16.7955 23.6697 17.4205H21.9766Z"
                fill="#333333"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className=" block md:hidden">
        <SearchBar />
      </div>
      <SideMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  )
}

export default Header
