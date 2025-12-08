import type { ReactNode } from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'

interface FlipCardProps {
  frontContent: ReactNode
  backContent: ReactNode
}

export const FlipCard = ({ frontContent, backContent }: FlipCardProps) => {
  const rotateY = useMotionValue(0)
  const shadow = useTransform(rotateY, [-180, 0, 180], ['-16px 12px 0 rgba(0,0,0,0.25)', '12px 12px 0 rgba(0,0,0,0.25)', '-16px 12px 0 rgba(0,0,0,0.25)'])

  return (
    <div className="relative h-full w-full [perspective:1400px]">
      <motion.div
        className="relative h-full w-full"
        style={{ rotateY, transformStyle: 'preserve-3d', boxShadow: shadow as unknown as string }}
        whileHover={{ rotateY: 180 }}
        transition={{ duration: 0.7, ease: [0.6, 0.01, 0.05, 0.95] }}
      >
        <div
          className="absolute inset-0 border-2 border-black bg-white p-6 font-body"
          style={{ backfaceVisibility: 'hidden' }}
        >
          {frontContent}
        </div>

        <div
          className="absolute inset-0 border-2 border-black bg-black p-6 text-white font-body"
          style={{ transform: 'rotateY(180deg)', backfaceVisibility: 'hidden' }}
        >
          {backContent}
        </div>
      </motion.div>
    </div>
  )
}
