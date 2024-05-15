'use client'
import { tags } from '@/features/useSearch'
import { useSearch } from '@/features/useSearch'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/shared/Button'

const MotionButton = motion(Button)

const Tags = () => {
  const { tag, setTag } = useSearch()
  const tagsArray = Object.values(tags)
  return (
    <div className="w-full  space-y-[50px] rounded-[16px] bg-background-tags p-[60px] ">
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
              onClick={() => setTag(item)}
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
