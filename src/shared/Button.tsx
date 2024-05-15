'use client'
import { forwardRef, type ButtonHTMLAttributes } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'flex items-center justify-center gap-2 font-semibold transition-colors',
  {
    variants: {
      variant: {
        primary:
          'bg-primary text-primary-foreground hover:bg-primary-hover active:bg-primary-active active:text-secondary-foreground',
        outlined:
          'border-2 border-primary bg-transparent text-secondary-foreground hover:bg-card-hover active:bg-primary-active active:text-secondary-foreground dark:active:bg-primary dark:active:text-primary-foreground',
        transparent: 'bg-transparent hover:bg-card-hover',
      },
      size: {
        sm: 'h-8 rounded px-4 text-sm',
        md: 'h-11 rounded px-5 text-sm',
        lg: 'h-[74px] rounded-lg px-6 text-2xl',
        xl: 'h-[88px] rounded-lg px-7 text-[32px]',
      },
      aspect: {
        square: 'aspect-square p-0',
        circle: 'aspect-square rounded-full p-0',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
)

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ size, variant, aspect, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size, aspect }), className)}
        {...props}
      >
        {props.children}
      </button>
    )
  }
)

Button.displayName = 'Button'
