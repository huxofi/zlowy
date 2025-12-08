import { motion } from 'framer-motion'
import { ArrowUpRight, Globe2, ShieldCheck, Sparkles } from 'lucide-react'
import { FlipCard } from '../components/ui/FlipCard'
import { Button } from '../components/ui/Button'
import DestinationsGrid from '../components/sections/DestinationsGrid'

const heroStats = [
  { label: 'Students placed', value: '4,800+' },
  { label: 'Partner universities', value: '320+' },
  { label: 'Visa success', value: '98%' },
]

const flipCards = [
  {
    title: 'University Shortlisting',
    icon: Globe2,
    detail: 'Hyper-curated lists matched to your profile, portfolio, and dream cities.',
  },
  {
    title: 'Visa Hacks',
    icon: ShieldCheck,
    detail: 'Mock interviews, document drills, and white-glove prep to ace every checkpoint.',
  },
  {
    title: 'Scholarships',
    icon: Sparkles,
    detail: 'Exclusive funding alerts and negotiation playbooks to keep tuition light.',
  },
]

const marqueeLogos = ['Harvard', 'Oxford', 'UCLA', 'LSE', 'Toronto', 'NUS']

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

const Home = () => {
  return (
    <div className="space-y-16">
      <section className="relative overflow-hidden rounded-[32px] border-3 border-black bg-white px-8 py-14 shadow-brutal">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
          className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_320px]"
        >
          <div>
            <motion.p variants={fadeInUp} className="font-mono text-xs uppercase tracking-[0.6em] text-neutral-500">
              ZLOWY: STUDY ABROAD 3.0
            </motion.p>
            <motion.h1
              variants={fadeInUp}
              className="mt-5 font-display text-4xl uppercase leading-tight tracking-tight text-black md:text-6xl"
            >
              ZLOWY: <br className="hidden md:block" /> GO GLOBAL.
            </motion.h1>
            <motion.p variants={fadeInUp} className="mt-4 max-w-2xl text-lg text-neutral-600">
              The new standard for international education. We blend brutalist aesthetics with white-glove guidance so you
              land offers faster, smarter, and with more funding.
            </motion.p>
            <motion.div variants={fadeInUp} className="mt-8 flex flex-wrap gap-4">
              <Button>Apply Now</Button>
              <Button variant="outline" className="bg-white">
                Download Deck
              </Button>
            </motion.div>
            <motion.div variants={fadeInUp} className="mt-10 grid gap-6 sm:grid-cols-3">
              {heroStats.map((stat) => (
                <div key={stat.label} className="border-t-2 border-black pt-4">
                  <p className="font-display text-3xl tracking-tight">{stat.value}</p>
                  <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            variants={fadeInUp}
            className="relative rounded-3xl border-2 border-black bg-gradient-to-b from-zlowy-accent to-white p-6 text-black"
          >
            <div className="absolute inset-x-6 top-6 flex items-center justify-between text-xs uppercase">
              <span>Next cohort</span>
              <span>JAN · 2026</span>
            </div>
            <div className="mt-10 space-y-6">
              <p className="font-display text-5xl">GO BEYOND.</p>
              <p className="text-sm text-neutral-700">
                1:1 mentorship • Visa control room • Scholarships radar • City acclimation labs.
              </p>
              <div className="flex items-center gap-3 text-sm font-semibold uppercase">
                <ArrowUpRight className="h-5 w-5" />
                Swipe through destinations
              </div>
            </div>
            <motion.div
              className="absolute -right-10 bottom-6 h-32 w-32 rounded-full border-2 border-black bg-white"
              animate={{ rotate: [0, 360] }}
              transition={{ repeat: Infinity, duration: 12, ease: 'linear' }}
            >
              <div className="flex h-full items-center justify-center text-center text-xs font-semibold uppercase">
                Visa <br /> taskforce
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div
          className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full border-2 border-black bg-zlowy-accent/70"
          animate={{ y: [0, 18, 0] }}
          transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
        />
      </section>

      <DestinationsGrid />

      <section>
        <div className="flex items-center justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.6em] text-neutral-500">Why Zlowy</p>
            <h2 className="mt-2 font-display text-3xl uppercase">The Zlowy Flip</h2>
          </div>
          <p className="hidden max-w-sm text-sm text-neutral-600 md:block">
            Borrowing from Grin.co, these cards flip in 3D to reveal the intel students actually need when shopping global
            options.
          </p>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {flipCards.map(({ title, icon: Icon, detail }) => (
            <FlipCard
              key={title}
              frontContent={
                <div className="flex h-full flex-col justify-between">
                  <Icon className="h-10 w-10" />
                  <p className="font-display text-2xl uppercase">{title}</p>
                </div>
              }
              backContent={
                <div className="flex h-full flex-col justify-between">
                  <p className="text-sm leading-relaxed text-white/90">{detail}</p>
                  <span className="mt-4 text-xs uppercase tracking-[0.4em] text-white/70">Swipe →</span>
                </div>
              }
            />
          ))}
        </div>
      </section>

      <section className="overflow-hidden border-y-2 border-black bg-black py-5 text-white">
        <div className="relative flex gap-12 whitespace-nowrap">
          {[0, 1].map((pass) => (
            <div key={pass} className="flex animate-marquee items-center gap-12">
              {marqueeLogos.map((logo) => (
                <span key={`${logo}-${pass}`} className="font-display text-2xl uppercase tracking-[0.3em] text-white/70">
                  {logo}
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home
