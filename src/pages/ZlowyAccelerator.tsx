import { Button } from '../components/ui/Button'
import { FlipCard } from '../components/ui/FlipCard'
import { HighlightSpan } from '../components/ui/HighlightSpan'

const arsenalCards = [
  { front: 'AI COMMAND', back: 'Build autonomous agents, master LLMs, and automate 80% of your workflow.' },
  { front: 'FINANCIAL IQ', back: 'Valuation, Venture Capital, and Corporate Finance. Speak the language of money.' },
  { front: 'GROWTH HACKING', back: 'Viral mechanics, SEO, and Performance Marketing to scale anything to millions.' },
  { front: 'THE NETWORK', back: 'Weekly guest lectures from Founders, VCs, and FAANG Product Managers.' },
  { front: 'LIVE OPS', back: "Don't just learn. Manage real ad budgets and build live SaaS products." },
  { front: 'GLOBAL ACCESS', back: 'Placement support in US, UK, and Dubai markets.' },
]

const timeline = [
  {
    year: 'YEAR 1 · THE FOUNDATION',
    items: ['Python for Finance & Data.', 'Digital Marketing Psychology.', 'Excel & Balance Sheet Basics.'],
  },
  {
    year: 'YEAR 2 · THE BUILDER',
    items: [
      'Building AI Wrappers (OpenAI API).',
      'Running Facebook/Google Ads (Live Budget).',
      'Financial Modeling & Forecasting.',
    ],
  },
  {
    year: 'YEAR 3 · THE STRATEGIST',
    items: ['Product Management & UX.', 'Brand Strategy & Content Empires.', 'Investment Banking & M&A Simulation.'],
  },
  {
    year: 'YEAR 4 · THE LAUNCH',
    items: ['Capstone: Build a Startup or Crack a Tier-1 Placement.', 'Defense: Pitch to real investors/recruiters.'],
  },
]

const projects = [
  'Algorithmic Trading Bot (Finance + AI).',
  'SaaS Marketing Funnel (Marketing + Automation).',
  'Startup Valuation Deck (Finance).',
  'AI Customer Support Agent (AI Engineering).',
]

const credentials = [
  'Certified AI Prompt Engineer.',
  'Google Ads & Analytics Master.',
  'Financial Modeling & Valuation Analyst (FMVA).',
  'Zlowy 4-Year Fellowship Diploma.',
]

const faqs = [
  {
    q: 'Do I need coding experience?',
    a: 'No. We start from zero. By Year 2, you will be coding AI agents.',
  },
  {
    q: 'Can I do this alongside my degree?',
    a: 'Yes. The cadence is 5-7 hours a week designed to sit next to your college program.',
  },
  {
    q: 'Is the price really one-time?',
    a: 'Yes. $199 covers the full 4-year access for early believers.',
  },
]

const logos = ['OpenAI', 'Goldman Sachs', 'Google', 'Sequoia', 'HubSpot', 'Y Combinator']

const ZlowyAccelerator = () => {
  return (
    <div className="space-y-16">
      <section className="grid gap-10 rounded-[40px] border-3 border-black bg-white px-8 py-12 shadow-brutal lg:grid-cols-2">
        <div className="space-y-6">
          <p className="font-mono text-xs uppercase tracking-[0.6em] text-neutral-500">Future Founder / Leader</p>
          <h1 className="font-display text-4xl uppercase leading-tight md:text-6xl">
            THE TRIAD: <br />
            <HighlightSpan color="pink">AI.</HighlightSpan>{' '}
            <HighlightSpan color="lime" className="ml-2">
              CAPITAL.
            </HighlightSpan>{' '}
            <HighlightSpan color="cyan">SCALE.</HighlightSpan>
          </h1>
          <p className="text-lg text-neutral-700">
            The world&apos;s first 4-year career accelerator blending Generative AI, Wall Street Finance, and Growth
            Marketing.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-zlowy-accent text-black" asChild>
              <a href="#pricing">Secure Spot ($199)</a>
            </Button>
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-neutral-500">Next cohort drops in</p>
              <p className="font-display text-3xl">04 : 23 : 12</p>
            </div>
          </div>
          <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">Join 5,000+ students building the future.</p>
        </div>
        <div className="space-y-6 rounded-3xl border-2 border-black bg-zlowy-bg p-6">
          <div className="flex items-center justify-between border-b-2 border-dashed border-black pb-4">
            <span className="font-mono text-xs uppercase tracking-[0.4em] text-neutral-600">Program length</span>
            <span className="font-display text-3xl">4 Years</span>
          </div>
          <div>
            <p className="font-display text-2xl uppercase">Price · $199 USD</p>
            <p className="text-sm text-neutral-600">Founders-only early bird. Lifetime access.</p>
          </div>
          <div className="rounded-2xl border-2 border-black bg-white p-4 text-sm">
            <p className="font-semibold uppercase tracking-[0.3em]">Stack</p>
            <ul className="mt-3 space-y-2">
              <li>AI · Finance · Digital Marketing</li>
              <li>Live cohorts · Global mentors · Real capital</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <p className="font-mono text-xs uppercase tracking-[0.6em] text-neutral-500">OUR ALUMNI BUILD AT</p>
        </div>
        <div className="overflow-hidden border-y-2 border-black bg-black py-5 text-white">
          <div className="flex min-w-full animate-marquee gap-12 whitespace-nowrap">
            {[0, 1].map((pass) => (
              <div key={pass} className="flex items-center gap-12">
                {logos.map((logo) => (
                  <span key={`${logo}-${pass}`} className="font-display text-xl uppercase tracking-[0.4em] text-white/70">
                    {logo}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.6em] text-neutral-500">The Arsenal</p>
            <h2 className="font-display text-3xl uppercase">
              Skills <HighlightSpan color="cyan">for everything</HighlightSpan>
            </h2>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {arsenalCards.map(({ front, back }) => (
            <div key={front} className="h-32">
              <FlipCard
                frontContent={
                  <div className="flex h-full flex-col justify-center">
                    <p className="font-display text-2xl uppercase">{front}</p>
                  </div>
                }
                backContent={
                  <div className="flex h-full flex-col justify-center">
                    <p className="text-sm leading-relaxed text-white/90">{back}</p>
                  </div>
                }
              />
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.6em] text-neutral-500">Four-year Track</p>
          <h2 className="font-display text-3xl uppercase">
            The Timeline <HighlightSpan color="pink">Rail</HighlightSpan>
          </h2>
        </div>
        <div className="relative pl-8 md:pl-12">
          <div className="absolute left-3 top-0 h-full w-1 bg-black md:left-4" />
          <div className="space-y-8">
            {timeline.map(({ year, items }) => (
              <div key={year} className="relative">
                <div className="absolute -left-[1.45rem] top-1 h-5 w-5 rounded-full border-2 border-black bg-white md:-left-[1.7rem] md:h-6 md:w-6" />
                <div className="rounded-3xl border-2 border-black bg-white p-5 shadow-brutal md:p-6">
                  <p className="font-display text-lg uppercase md:text-xl">{year}</p>
                  <ul className="mt-3 list-disc space-y-1 pl-4 text-xs text-neutral-700 md:text-sm">
                    {items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="font-display text-3xl uppercase">
            Empire Building <HighlightSpan color="lime">Projects</HighlightSpan>
          </h2>
          <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">Build real assets. Not homework.</p>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-4">
          {projects.map((project) => (
            <div
              key={project}
              className="min-w-[260px] rounded-3xl border-2 border-black bg-gradient-to-br from-zlowy-accent via-white to-white p-6 shadow-brutal"
            >
              <p className="font-display text-xl uppercase">{project}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div>
          <h2 className="font-display text-3xl uppercase">
            Validated <HighlightSpan color="cyan">Proof</HighlightSpan>
          </h2>
          <p className="text-neutral-600">Stacked credentials that recruiters and investors respect.</p>
        </div>
        <div className="flex flex-wrap gap-4">
          {credentials.map((credential, index) => (
            <div
              key={credential}
              className="relative flex-1 min-w-[220px] rounded-2xl border-2 border-black bg-white p-4 shadow-brutal"
              style={{ transform: `rotate(${index % 2 === 0 ? -1 : 1}deg)` }}
            >
              <p className="font-display text-lg uppercase">{credential}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <h2 className="font-display text-3xl uppercase">
            They <HighlightSpan color="pink">took action</HighlightSpan>
          </h2>
          <p className="text-sm text-neutral-600">Testimonials from current year 3 & 4 operators.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border-2 border-black bg-white p-6 shadow-brutal">
            <p className="text-lg font-semibold">“I stopped applying for jobs. I built a marketing agency using the Zlowy AI modules and now I hire people.”</p>
            <p className="mt-4 text-sm uppercase tracking-[0.3em] text-neutral-500">— Alex K. (Year 3)</p>
          </div>
          <div className="rounded-3xl border-2 border-black bg-white p-6 shadow-brutal">
            <p className="text-lg font-semibold">“The Finance module helped me crack a JP Morgan internship in London.”</p>
            <p className="mt-4 text-sm uppercase tracking-[0.3em] text-neutral-500">— Sarah J. (Year 4)</p>
          </div>
        </div>
      </section>

      <section id="pricing" className="space-y-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <h2 className="font-display text-3xl uppercase">
            Early Bird <HighlightSpan color="lime">Ticket</HighlightSpan>
          </h2>
          <p className="text-sm text-neutral-600">Only 6 spots left at this price.</p>
        </div>
        <div className="rounded-[32px] border-2 border-dashed border-black bg-white p-8 shadow-brutal">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-dashed border-black pb-6">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.6em] text-neutral-500">Early bird access</p>
              <p className="font-display text-4xl">$199 USD</p>
              <p className="text-sm text-neutral-500 line-through">Was $999 USD</p>
            </div>
            <Button className="w-full bg-black text-white md:w-auto">Claim ticket now</Button>
          </div>
          <ul className="mt-6 grid gap-3 text-sm">
            {['4-Year Live Mentorship', '8+ Industry Certifications', 'Capstone Project Portfolio', 'Lifetime Community Access'].map(
              (item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="text-lg">[x]</span>
                  {item}
                </li>
              ),
            )}
          </ul>
          <p className="mt-4 text-xs uppercase tracking-[0.4em] text-neutral-500">Only 6 spots left at this price.</p>
        </div>
      </section>

      <section className="space-y-6">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.6em] text-neutral-500">INTEL</p>
          <h2 className="font-display text-3xl uppercase">
            Debrief <HighlightSpan color="cyan">(FAQ)</HighlightSpan>
          </h2>
        </div>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="rounded-2xl border-2 border-black bg-white p-4 shadow-brutal">
              <p className="font-display text-lg uppercase">{q}</p>
              <p className="mt-2 text-sm text-neutral-600">{a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default ZlowyAccelerator
