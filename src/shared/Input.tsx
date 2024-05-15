'use client'

import { cn } from '@/lib/utils'
import { forwardRef, type InputHTMLAttributes } from 'react'

type InputProps = InputHTMLAttributes<HTMLInputElement>

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        className={cn(
          'h-11 w-auto min-w-0 rounded border-2 bg-transparent px-5 text-foreground outline-none transition-colors duration-300 hover:border-input-hover focus:border-input-focus',
          className
        )}
        {...props}
        ref={ref}
      />
    )
  }
)

Input.displayName = 'Input'
