import { useMemo, useState } from 'react'
import { courses, domains } from '../data/courses'
import { CourseCard } from '../components/cards/CourseCard'
import { HighlightSpan } from '../components/ui/HighlightSpan'
import type { CourseDomain } from '../data/courses'
import { motion } from 'framer-motion'
import { Marquee } from '../components/ui/Marquee'

const Courses = () => {
  const [activeDomain, setActiveDomain] = useState<CourseDomain>('Computer Science')

  const grouped = useMemo(() => {
    return domains.reduce(
      (acc, domain) => {
        acc[domain] = courses.filter((course) => course.domain === domain)
        return acc
      },
      {} as Record<CourseDomain, typeof courses>,
    )
  }, [])

  const handleDomainClick = (domain: CourseDomain) => {
    setActiveDomain(domain)
  }

  const activeCourses = grouped[activeDomain] ?? []

  return (
    <div className="space-y-16">
      <section className="relative overflow-hidden rounded-[36px] border-3 border-black bg-white px-8 py-14 shadow-brutal">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="space-y-6"
        >
          <p className="font-mono text-xs uppercase tracking-[0.6em] text-neutral-500">Zlowy Courses</p>
          <h1 className="font-display text-4xl uppercase leading-tight md:text-6xl">
            Build <HighlightSpan color="cyan">career-grade</HighlightSpan> skills.
          </h1>
          <p className="max-w-2xl text-lg text-neutral-700">
            Pick a domain, unlock blueprints, and stack credentials faster than the market shifts.
          </p>
        </motion.div>
        <motion.span
          className="pointer-events-none absolute left-6 top-6 text-4xl"
          animate={{ y: [0, -12, 0], rotate: [0, -8, 4, 0] }}
          transition={{ repeat: Infinity, duration: 7, ease: 'easeInOut' }}
        >
          ✶
        </motion.span>
        <motion.span
          className="pointer-events-none absolute right-10 bottom-6 text-5xl"
          animate={{ y: [0, 10, 0], rotate: [0, 6, -3, 0] }}
          transition={{ repeat: Infinity, duration: 9, ease: 'easeInOut' }}
        >
          ⬈
        </motion.span>
        <motion.span
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 text-6xl text-neutral-900/10"
          animate={{ rotate: [0, 360] }}
          transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
        >
          ⚙️
        </motion.span>
      </section>

      <Marquee items={['/// SHIP FAST ///', '/// LEARN FASTER ///', '/// GO GLOBAL ///']} />

      <div className="grid gap-8 md:grid-cols-[280px_minmax(0,1fr)]">
        <aside className="space-y-4 md:sticky md:top-24">
          <div className="rounded-3xl border-2 border-black bg-white p-5 shadow-brutal">
            <p className="font-mono text-xs uppercase tracking-[0.5em] text-neutral-500">Explore Domains</p>
            <div className="mt-4 space-y-3">
              {domains.map((domain) => {
                const isActive = activeDomain === domain
                return (
                  <button
                    key={domain}
                    type="button"
                    onClick={() => handleDomainClick(domain)}
                    className={`w-full rounded-2xl border-2 border-black px-4 py-3 text-left font-display text-sm uppercase tracking-[0.2em] transition-colors ${
                      isActive ? 'bg-black text-white' : 'bg-white text-black hover:bg-black hover:text-white'
                    }`}
                  >
                    {domain}
                  </button>
                )
              })}
            </div>
          </div>
        </aside>
        <div className="space-y-6">
          <motion.section
            key={activeDomain}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="space-y-4"
          >
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <p className="font-mono text-xs uppercase tracking-[0.5em] text-neutral-500">Domain</p>
              <p className="font-display text-xl uppercase">
                <HighlightSpan color="lime">{activeDomain}</HighlightSpan>
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {activeCourses.map((course) => (
                <CourseCard key={course.title} course={course} to={`/courses/${course.slug}`} />
              ))}
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  )
}

export default Courses
