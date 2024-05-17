'use client'
import FilterItem from '@/shared/FilterItem'
import { useSearchParams, useRouter, usePathname } from 'next/navigation'

const filters = [
  {
    id: 1,
    name: 'cost',
    label: 'Стоимость',
    variants: ['Бесплатно', 'Платно'],
  },
  {
    id: 2,
    name: 'level',
    label: 'Уровень',
    variants: ['Новичкам', 'Специалистам'],
  },
  {
    id: 3,
    name: 'during',
    label: 'Продолжительность',
    variants: ['до 2 месяцев', 'до полугода', 'до года', 'больше года'],
  },
  {
    id: 4,
    name: 'format',
    label: 'Формат обучения',
    variants: ['Самообучение', 'С наставником'],
  },
  {
    id: 5,
    name: 'status',
    label: 'Статус',
    variants: ['Пройден', 'В процессе', 'Новый', 'В избранном'],
  },
]

const useQueryParams = (searchParams: URLSearchParams) => {
  const paramsObject: { [key: string]: string[] } = {}
  searchParams.forEach((value, key) => {
    if (paramsObject[key]) {
      paramsObject[key].push(value)
    } else {
      paramsObject[key] = [value]
    }
  })
  return paramsObject
}

const Filter = () => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const queryParams: { [key: string]: string[] } = useQueryParams(searchParams)

  const formAction = function (formData: FormData) {
    const newSearchParams = new URLSearchParams(searchParams.toString())

    filters.forEach(({ name }) => {
      newSearchParams.delete(name)
    })

    for (const [key, value] of formData.entries()) {
      newSearchParams.append(key, value as string)
    }

    const queryString = newSearchParams.toString()
    router.push(pathname + '?' + queryString, {
      scroll: false,
    })
  }

  return (
    <form
      className="mx-auto flex flex-col items-start gap-8"
      action={formAction}
    >
      <h2 className="mx-auto text-[20px] font-medium text-benefit lg:mx-0">
        Фильтры
      </h2>
      <div className="flex flex-row flex-wrap gap-8 lg:flex-col">
        {filters.map((item) => (
          <FilterItem
            key={item.id}
            name={item.name}
            label={item.label}
            selected={queryParams[item.name] || []}
            variants={item.variants}
            onChange={(e) => {
              e.currentTarget.form?.requestSubmit()
            }}
          />
        ))}
      </div>
    </form>
  )
}

export default Filter
