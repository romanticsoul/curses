'use client'
import { useSearch } from '@/features/useSearch'
import { tags } from '@/features/useSearch'
import { AnimatePresence, HTMLMotionProps, motion } from 'framer-motion'
import { forwardRef } from 'react'
import { Button } from '@/shared/Button'

const MotionButton = motion(Button)

type SearchPopoverProps = HTMLMotionProps<'div'>

const SearchPopover = forwardRef<HTMLDivElement, SearchPopoverProps>(
  (props, ref) => {
    const { value, setTag } = useSearch()
    const tagsArray = Object.values(tags)

    return (
      <motion.div
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        ref={ref}
        className="absolute top-[calc(100%+20px)] z-10 flex w-full flex-wrap gap-[8px] rounded-[8px] border-2 border-border bg-background p-10 px-[20px]"
        {...props}
      >
        <AnimatePresence>
          {tagsArray.map((tag, index) => (
            <MotionButton
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
              variant={
                value.toLowerCase() === tag.toLowerCase()
                  ? 'primary'
                  : 'outlined'
              }
            >
              {tag}
            </MotionButton>
          ))}
        </AnimatePresence>
      </motion.div>
    )
  }
)

SearchPopover.displayName = 'SearchPopover'

export default SearchPopover
