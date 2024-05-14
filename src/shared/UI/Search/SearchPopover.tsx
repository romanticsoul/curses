'use client'
import { useSearch } from '@/features/useSearch'
import { tags } from '@/features/useSearch'
import { AnimatePresence, motion } from 'framer-motion'

interface Props {
  forwardRef: any
}

const SearchPopover: React.FC<Props> = ({ forwardRef }) => {
  const { value, setTag } = useSearch()
  const tagsArray = Object.values(tags)

  return (
    <motion.div
      onClick={(e) => e.stopPropagation()}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      ref={forwardRef}
      className="absolute top-[calc(100%+20px)] z-10 flex w-full flex-wrap gap-[8px] rounded-[8px] border-2 border-border bg-background p-10 px-[20px]"
    >
      <AnimatePresence>
        {tagsArray.map((tag, index) => (
          <motion.button
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
            key={tag}
            onClick={() => setTag(tag)}
            className={`w-max rounded-[8px] border-2 border-primary px-[10px] py-[5px] text-[16px] text-secondary-foreground ${
              value.toLowerCase() === tag.toLowerCase()
                ? 'bg-primary text-white'
                : ''
            }`}
          >
            {tag}
          </motion.button>
        ))}
      </AnimatePresence>
    </motion.div>
  )
}

export default SearchPopover
