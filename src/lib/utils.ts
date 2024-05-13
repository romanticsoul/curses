import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 ** Эту утилиту рекомендуется использовать для объявления классов
 ** Например: const className = `cn('text-red-500', 'border-red-500', { 'text-blue-500': true })`
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
