import { motion } from 'framer-motion'

const destinations = [
  { country: 'USA', tagline: 'The HQ. Ivy Leagues & Tech Giants.' },
  { country: 'UK', tagline: 'The Crown. One Year Masters & Heritage.' },
  { country: 'Canada', tagline: 'The North. PR Pathways & Quality of Life.' },
  { country: 'Germany', tagline: 'The Engine. Tuition-Free & Engineering.' },
  { country: 'Ireland', tagline: 'The Hub. Silicon Docks of Europe.' },
  { country: 'UAE', tagline: 'The Future. Tax-Free & Global Business.' },
  { country: 'Australia', tagline: 'The Coast. Post-Study Work & Lifestyle.' },
  { country: 'Japan', tagline: 'The Origin. Robotics & Innovation.' },
  { country: 'Korea', tagline: 'The Wave. Digital Media & Tech.' },
]

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
}

const card = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

const DestinationsGrid = () => {
  return (
    <section className="space-y-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.6em] text-neutral-500">Global Coordinates</p>
          <h2 className="font-display text-3xl uppercase">Destinations</h2>
        </div>
        <p className="max-w-md text-sm text-neutral-600">
          Each city becomes a base of operations. Hover to decode the vibe and see where your mission should launch.
        </p>
      </div>

      <motion.div
        className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {destinations.map(({ country, tagline }) => (
          <motion.div key={country} variants={card}>
            <div className="group h-full border-2 border-black bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:bg-black">
              <p className="font-display text-3xl uppercase tracking-tight text-black transition-colors duration-300 group-hover:text-white">
                {country}
              </p>
              <p className="mt-4 text-sm text-neutral-600 transition-all duration-300 group-hover:text-zlowy-accent group-hover:opacity-100 group-hover:translate-y-0 opacity-0 translate-y-3">
                {tagline}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default DestinationsGrid
