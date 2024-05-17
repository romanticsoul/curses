import Link from 'next/link'

interface BreadCrumbProps {
  items: {
    name: string
    href: string
  }[]
}

const BreadCrumb: React.FC<BreadCrumbProps> = ({ items }) => {
  return (
    <ul className="flex items-center gap-2 text-[16px] text-muted-foreground">
      <li>
        <Link href="/">
          <svg
            width="16"
            height="18"
            viewBox="0 0 16 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 16H5V10H11V16H14V7L8 2.5L2 7V16ZM0 18V6L8 0L16 6V18H9V12H7V18H0Z"
              fill="#C9C9C9"
            />
          </svg>
        </Link>
      </li>
      {' / '}
      {items.map((item, index) => {
        if (index === items.length - 1) {
          return (
            <li className="text-foreground" key={index}>
              <Link href={item.href}>{item.name}</Link>
            </li>
          )
        }
        return (
          <li key={index} className="flex gap-2">
            <Link href={item.href} className="text-muted-foreground">
              {item.name}
            </Link>
            <p>/</p>
          </li>
        )
      })}
    </ul>
  )
}

export default BreadCrumb
