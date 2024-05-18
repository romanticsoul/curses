'use client'
import { useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useSearchParams, usePathname, useRouter } from 'next/navigation'

import { tags } from '@/features/Search/zustand/useSearch'
import { useSearch } from '@/features/Search/zustand/useSearch'

const Tags = () => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const { tag, setTag, value, setValue } = useSearch()
  const tagsArray = Object.values(tags)

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)
      return params.toString()
    },
    [searchParams]
  )

  const handleClick = (item: tags[number]) => {
    setTag(item)
    setValue(item)
    if (item === 'Все курсы') {
      const newSearchParams = new URLSearchParams(searchParams.toString())
      newSearchParams.delete('category')
      router.push(pathname + '?' + newSearchParams.toString(), {
        scroll: false,
      })
    } else {
      router.push(pathname + '?' + createQueryString('category', item), {
        scroll: false,
      })
    }
  }

  return (
    <div className="space-y-[50px] rounded-[16px] bg-background-tags p-[60px] ">
      <h1 className="truncate text-[36px] font-[500] text-benefit md:text-[64px]">
        {tag}
      </h1>
      <div className="flex w-full max-w-[800px] flex-wrap gap-[15px] ">
        <AnimatePresence>
          {tagsArray.map((item, index) => (
            <motion.button
              className={`rounded-[8px] border-2 ${item === tag ? 'border-primary-active bg-primary-active ' : ''} border-primary bg-background px-[15px] py-[10px] text-[14px] font-[600] text-secondary-foreground`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              whileFocus={{ scale: 1.05 }}
              transition={{
                duration: 0.2,
                ease: 'easeInOut',
                delay: 0.2 + index * 0.1,
              }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              key={item}
              onClick={() => handleClick(item)}
            >
              {item}
            </motion.button>
          ))}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default Tags
