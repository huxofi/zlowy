import { cloneElement, isValidElement } from 'react'
import type { ButtonHTMLAttributes, FC, ReactElement, ReactNode } from 'react'
import { cn } from '../../lib/utils'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline'
  asChild?: boolean
  children: ReactNode
}

const baseClasses =
  'px-5 py-2 text-sm font-semibold uppercase tracking-widest transition-transform duration-200 border-2 border-black shadow-brutal hover:-translate-y-0.5 hover:shadow-none'

export const Button: FC<ButtonProps> = ({
  variant = 'default',
  asChild = false,
  className,
  children,
  type = 'button',
  ...props
}) => {
  const variantClasses = cn(
    'text-black',
    variant === 'default' && 'bg-black text-white',
    variant === 'outline' && 'bg-transparent text-black',
  )

  if (asChild && isValidElement(children)) {
    const child = children as ReactElement<{ className?: string }>
    return cloneElement(child, {
      ...props,
      className: cn(baseClasses, variantClasses, className, child.props.className),
    })
  }

  return (
    <button type={type} className={cn(baseClasses, variantClasses, className)} {...props}>
      {children}
    </button>
  )
}
