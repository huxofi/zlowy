import type { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface FlipCardProps {
  frontContent: ReactNode
  backContent: ReactNode
}

export const FlipCard = ({ frontContent, backContent }: FlipCardProps) => {
  return (
    <div className="group relative h-full w-full [perspective:1400px]">
      <motion.div
        className="relative h-full w-full rounded-3xl border-2 border-black shadow-[10px_10px_0_rgba(0,0,0,0.85)] transition-all duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:shadow-[18px_18px_0_rgba(0,0,0,0.95)]"
        style={{ transformStyle: 'preserve-3d' }}
        whileHover={{ rotateY: 180 }}
        transition={{ duration: 0.7, ease: [0.6, 0.01, 0.05, 0.95] }}
      >
        <div
          className="absolute inset-0 rounded-3xl border-2 border-black bg-white p-6 font-body transition-colors duration-300 group-hover:bg-[#ccff00] group-hover:text-black"
          style={{ backfaceVisibility: 'hidden' }}
        >
          {frontContent}
        </div>

        <div
          className="absolute inset-0 rounded-3xl border-2 border-black bg-black p-6 text-white font-body transition-colors duration-300 group-hover:bg-[#ccff00] group-hover:text-black"
          style={{ transform: 'rotateY(180deg)', backfaceVisibility: 'hidden' }}
        >
          {backContent}
        </div>
      </motion.div>
    </div>
  )
}
