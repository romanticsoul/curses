'use client'
import { forwardRef, type InputHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>

export const Checkbox = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        className={cn(
          'relative flex size-6 items-center justify-center rounded-sm border-2 bg-transparent transition-colors *:cursor-pointer has-[:checked]:border-secondary has-[:checked]:bg-secondary dark:has-[:checked]:border-primary dark:has-[:checked]:bg-primary',
          className
        )}
      >
        <input
          type="checkbox"
          className={cn(
            'peer absolute z-10 size-full appearance-none opacity-0'
          )}
          {...props}
          ref={ref}
        />

        <span
          className="material-symbols-outlined invisible absolute scale-50 transition-all peer-checked:visible peer-checked:scale-100 dark:text-background"
          style={{
            fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24",
          }}
        >
          check
        </span>
      </div>
    )
  }
)

Checkbox.displayName = 'Checkbox'

export default Checkbox
