import { cn } from '../../lib/utils'

interface MarqueeProps {
  items: string[]
  className?: string
}

export const Marquee = ({ items, className }: MarqueeProps) => {
  return (
    <div className={cn('overflow-hidden border-y-2 border-black bg-black py-4 text-white', className)}>
      <div className="flex gap-10 whitespace-nowrap">
        {[0, 1].map((pass) => (
          <div key={pass} className="flex animate-marquee items-center gap-10">
            {items.map((item, idx) => (
              <span key={`${item}-${idx}-${pass}`} className="font-display text-sm uppercase tracking-[0.4em]">
                {item}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
