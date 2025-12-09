import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { Button } from '../components/ui/Button'
import { FlipCard } from '../components/ui/FlipCard'
import { HighlightSpan } from '../components/ui/HighlightSpan'

const perks = [
  { front: 'BOUNTY', back: 'Earn up to $300/month in stipends and commissions.' },
  { front: 'ISSUED KIT', back: 'Exclusive Zlowy Merch: Hoodies, Bottles, and Stickers.' },
  { front: 'ALL ACCESS', back: 'Free entry to all premium Masterclasses and Networking events.' },
  { front: 'CREDENTIALS', back: 'Official Internship Certificate & Letter of Recommendation.' },
  { front: 'THE INNER CIRCLE', back: 'Direct access to Founders and Industry Mentors.' },
  { front: 'UPGRADE', back: 'Free Pro-Tier courses in AI and Marketing.' },
]

const missions = [
  { title: 'PROPAGANDA', detail: "Amplify Zlowy\'s voice on social media. Engineer viral reels." },
  { title: 'RECRUITMENT', detail: 'Spot top campus talent ready for global placements.' },
  { title: 'INTELLIGENCE', detail: 'Feed us raw intel. Trends, fears, ambitions — unfiltered.' },
  { title: 'EVENTS', detail: 'Host workshops, screenings, and launch parties.' },
]

const protocol = [
  { phase: 'APPLICATION', detail: 'Submit your dossier via the form below.' },
  { phase: 'VETTING', detail: '15-min screening with the Vanguard squad.' },
  { phase: 'ONBOARDING', detail: 'Receive your welcome kit + rapid fire training.' },
  { phase: 'DEPLOYMENT', detail: 'Launch Mission #1 within 7 days.' },
]

const faqs = [
  {
    question: 'WHO FITS THE PROFILE?',
    answer:
      "Any college student who refuses to be average. We don't care about your GPA; we care about your influence. If you can lead a crowd, you belong in the Vanguard.",
  },
  {
    question: 'IS THERE A PAYCHECK?',
    answer:
      "Absolutely. This isn't unpaid labor; it's a hustle. You can earn stipends up to $300/month plus performance bonuses and exclusive gear.",
  },
  {
    question: 'WHAT IS THE TIME COST?',
    answer:
      'Zero fixed hours. You operate on your own schedule. Whether you work 2 hours a week or 10, as long as you hit the mission targets, you’re good.',
  },
  {
    question: 'DO I GET CREDENTIALS?',
    answer:
      'Yes. You earn an official Internship Certificate and a Letter of Recommendation from the founders to bulletproof your resume.',
  },
  {
    question: 'HOW DO I ENLIST?',
    answer:
      "Fill out the 'Request Access' form below. If your profile flags our system, we'll schedule a 15-minute vibe check.",
  },
]

const CampusAmbassador = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="space-y-16">
      <section className="relative overflow-hidden rounded-[40px] border-3 border-black bg-white px-8 py-14 shadow-brutal">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <p className="font-mono text-xs uppercase tracking-[0.6em] text-neutral-500">Join the Vanguard</p>
            <h1 className="font-display text-4xl uppercase leading-tight md:text-6xl">
              YOU DON&apos;T FOLLOW TRENDS. <br />
              <HighlightSpan color="pink" className="text-5xl md:text-6xl">
                YOU SET THEM.
              </HighlightSpan>
            </h1>
            <p className="text-lg text-neutral-700">
              Join the Zlowy Vanguard. The elite student network reshaping global education through intelligence, hype,
              and execution.
            </p>
            <Button className="bg-zlowy-accent text-black" asChild>
              <a href="#form" className="flex items-center gap-2">
                INITIATE APPLICATION <ArrowUpRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
          <div className="relative rounded-[32px] border-2 border-black bg-gradient-to-br from-black via-neutral-900 to-black p-8 text-white">
            <div className="absolute inset-4 border-2 border-dashed border-white/40" />
            <div className="relative space-y-3">
              <p className="text-xs uppercase tracking-[0.4em] text-white/60">Operative Brief</p>
              <p className="font-mono text-sm text-white/80">
                Classified: Vanguard agents run campus ops, channel intel, and ignite movements. Expect merch drops, cash
                flow, and direct contact with HQ.
              </p>
              <p className="text-xs uppercase tracking-[0.4em] text-zlowy-accent">Code · VNGD // 2049</p>
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute -right-10 -bottom-10 h-48 w-48 rounded-full border-2 border-black bg-zlowy-accent/60 blur-2xl" />
      </section>

      <section className="space-y-6">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.6em] text-neutral-500">The Loot</p>
          <h2 className="font-display text-3xl uppercase">
            Operative <HighlightSpan color="cyan">benefits</HighlightSpan>
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {perks.map(({ front, back }) => (
            <div key={front} className="h-48">
              <FlipCard
                frontContent={
                  <div className="flex h-full flex-col justify-center">
                    <p className="font-display text-xl uppercase">{front}</p>
                  </div>
                }
                backContent={
                  <div className="flex h-full flex-col justify-center">
                    <p className="text-xs leading-relaxed text-white/90">{back}</p>
                  </div>
                }
              />
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="font-display text-3xl uppercase">
            Your <HighlightSpan color="lime">mission</HighlightSpan>
          </h2>
          <p className="text-sm text-neutral-600">Daily ops delivered via HQ broadcast.</p>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-4">
          {missions.map(({ title, detail }) => (
            <div
              key={title}
              className="min-w-[240px] rounded-3xl border-2 border-black bg-white p-6 shadow-brutal transition-transform duration-200 hover:-translate-y-1"
            >
              <p className="font-display text-xl uppercase">{title}</p>
              <p className="mt-2 text-sm text-neutral-600">{detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.6em] text-neutral-500">Induction Protocol</p>
          <h2 className="font-display text-3xl uppercase">
            Become <HighlightSpan color="pink">operational</HighlightSpan>
          </h2>
        </div>
        <div className="relative pl-10">
          <div className="absolute left-4 top-0 h-full w-1 bg-black" />
          <div className="space-y-10">
            {protocol.map(({ phase, detail }) => (
              <div key={phase} className="relative">
                <div className="absolute -left-[1.55rem] top-1 h-6 w-6 rounded-full border-2 border-black bg-white" />
                <div className="rounded-3xl border-2 border-black bg-white p-6 shadow-brutal">
                  <p className="font-display text-xl uppercase">{phase}</p>
                  <p className="mt-2 text-sm text-neutral-700">{detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.6em] text-neutral-500">Debrief / FAQ</p>
          <h2 className="font-display text-3xl uppercase">
            Clarity for <HighlightSpan color="cyan">operatives</HighlightSpan>
          </h2>
        </div>
        <div className="space-y-4">
          {faqs.map(({ question, answer }, index) => {
            const isOpen = openFaq === index
            return (
              <div key={question} className="rounded-2xl border-2 border-black bg-white shadow-brutal">
                <button
                  type="button"
                  className="flex w-full items-center justify-between px-6 py-4 text-left font-display text-lg uppercase"
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                >
                  {question}
                  <span className="text-xl">{isOpen ? '−' : '+'}</span>
                </button>
                <div
                  className={`overflow-hidden border-t-2 border-black transition-all duration-200 ${
                    isOpen ? 'max-h-60 px-6 py-4' : 'max-h-0 px-6'
                  }`}
                >
                  <p className="text-sm text-neutral-700">{answer}</p>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <section id="form" className="space-y-6">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.6em] text-neutral-500">Enlist Now</p>
          <h2 className="font-display text-3xl uppercase">
            Request <HighlightSpan color="cyan">access</HighlightSpan>
          </h2>
        </div>
        <form className="space-y-6 rounded-[32px] border-2 border-black bg-white p-8 shadow-brutal">
          <div className="grid gap-6 md:grid-cols-2">
            <label className="text-sm uppercase tracking-[0.3em] text-neutral-500">
              Full Name
              <input
                type="text"
                placeholder="Jane Doe"
                className="mt-2 w-full border-b-2 border-black bg-transparent px-1 py-3 text-base font-body transition-colors focus:border-zlowy-accent focus:outline-none"
              />
            </label>
            <label className="text-sm uppercase tracking-[0.3em] text-neutral-500">
              University
              <input
                type="text"
                placeholder="IIT Bombay"
                className="mt-2 w-full border-b-2 border-black bg-transparent px-1 py-3 text-base font-body transition-colors focus:border-zlowy-accent focus:outline-none"
              />
            </label>
            <label className="text-sm uppercase tracking-[0.3em] text-neutral-500">
              Year of Study
              <select
                className="mt-2 w-full border-b-2 border-black bg-transparent px-1 py-3 text-base font-body transition-colors focus:border-zlowy-accent focus:outline-none"
                defaultValue=""
              >
                <option value="" disabled>
                  Select year
                </option>
                <option value="1">Year 1</option>
                <option value="2">Year 2</option>
                <option value="3">Year 3</option>
                <option value="4">Year 4+</option>
              </select>
            </label>
            <label className="text-sm uppercase tracking-[0.3em] text-neutral-500 md:col-span-2">
              Why You?
              <textarea
                placeholder="Tell us why you are a leader."
                className="mt-2 w-full border-b-2 border-black bg-transparent px-1 py-3 text-base font-body transition-colors focus:border-zlowy-accent focus:outline-none"
                rows={3}
              />
            </label>
          </div>
          <Button className="w-full bg-black text-white">Generate Blueprint</Button>
        </form>
      </section>
    </div>
  )
}

export default CampusAmbassador
