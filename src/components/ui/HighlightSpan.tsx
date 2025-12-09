import type { ReactNode } from 'react'
import { cn } from '../../lib/utils'

type HighlightColor = 'lime' | 'pink' | 'cyan'

const colorClassMap: Record<HighlightColor, string> = {
  lime: 'bg-zlowy-accent',
  pink: 'bg-zlowy-pink',
  cyan: 'bg-zlowy-cyan',
}

interface HighlightSpanProps {
  children: ReactNode
  color?: HighlightColor
  className?: string
}

export const HighlightSpan = ({ children, color = 'lime', className }: HighlightSpanProps) => {
  return (
    <span className={cn('relative inline-block font-display uppercase tracking-tight', className)}>
      <span
        className={cn(
          'absolute inset-x-0 bottom-1 top-3 -z-10 opacity-70 blur-[1px]',
          'rounded-sm',
          colorClassMap[color],
        )}
        aria-hidden
      />
      <span className="relative">{children}</span>
    </span>
  )
}
