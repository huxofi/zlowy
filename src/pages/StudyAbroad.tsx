import { ArrowDownRight, ArrowUpRight } from 'lucide-react'
import { Button } from '../components/ui/Button'
import { HighlightSpan } from '../components/ui/HighlightSpan'

const destinations = [
  { country: 'USA', code: 'US', perks: 'Ivy Leagues · STEM OPT', salary: '$95k', visa: '3 Years OPT' },
  { country: 'United Kingdom', code: 'UK', perks: '1-Year Masters', salary: '$82k', visa: '2 Years PSW' },
  { country: 'Canada', code: 'CA', perks: 'PR Pathways', salary: '$78k', visa: '3 Years PGWP' },
  { country: 'Germany', code: 'DE', perks: 'Tuition-Free', salary: '$74k', visa: '18m Search' },
  { country: 'Ireland', code: 'IE', perks: 'EU Tech Hub', salary: '$76k', visa: '2 Years Stay' },
  { country: 'UAE', code: 'AE', perks: 'Tax-Free Growth', salary: '$96k', visa: 'Employment' },
  { country: 'Australia', code: 'AU', perks: 'Post-Study Work', salary: '$84k', visa: '4 Years' },
  { country: 'Japan', code: 'JP', perks: 'Robotics & AI', salary: '$88k', visa: 'Tech Talent' },
  { country: 'Korea', code: 'KR', perks: 'Media & Tech', salary: '$79k', visa: 'D-10 Skill' },
]

const stages = [
  {
    title: 'RECON',
    subtitle: 'Profile Analysis',
    detail: 'We audit GPA, GRE, and background to map highest-ROI universities + scholarships.',
  },
  {
    title: 'ATTACK',
    subtitle: 'Applications',
    detail: 'Narratives engineered for impact. SOPs, LORs, and portfolios that admissions cannot ignore.',
  },
  {
    title: 'CLEARANCE',
    subtitle: 'Visa & Finance',
    detail: 'Mock interviews, liquidity hunts, loan orchestration, and visa paperwork to guarantee the stamp.',
  },
  {
    title: 'DEPLOYMENT',
    subtitle: 'Pre-Departure',
    detail: 'Housing, forex, SIM, airport pickup. You land executing, not improvising.',
  },
]

const servicesMarquee = [
  'Scholarship Hacking',
  'Visa War Room',
  'Alumni Network',
  'Loan Assistance',
  'Free Application Waivers',
]

const StudyAbroad = () => {
  return (
    <div className="space-y-16">
      <section className="relative overflow-hidden rounded-[40px] border-3 border-black bg-white px-8 py-14 shadow-brutal">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <p className="font-mono text-xs uppercase tracking-[0.6em] text-neutral-500">Mission Control</p>
            <h1 className="font-display text-4xl uppercase leading-tight md:text-6xl">
              THE WORLD <br /> IS YOUR{' '}
              <HighlightSpan color="pink" className="text-5xl md:text-6xl">
                CAMPUS
              </HighlightSpan>
              .
            </h1>
            <p className="text-lg text-neutral-700">
              Top 1% Universities. $0 Application Fees. 100% Visa Success Rate. We run the war room so you choose the
              battlefield.
            </p>
            <Button className="bg-black text-white" asChild>
              <a href="#targets" className="flex items-center gap-2">
                EXPLORE DESTINATIONS <ArrowDownRight className="h-4 w-4" />
              </a>
            </Button>
            <p className="text-xs uppercase tracking-[0.4em] text-neutral-500">MISSION CONTROL · CHOOSE YOUR BATTLEFIELD</p>
          </div>
          <div className="relative flex h-72 items-center justify-center rounded-[32px] border-2 border-black bg-gradient-to-br from-zlowy-accent via-white to-zlowy-bg">
            <div className="absolute inset-6 rounded-[28px] border-2 border-dashed border-black" />
            <div className="relative text-center">
              <p className="font-mono text-xs uppercase tracking-[0.4em] text-neutral-600">Next departure window</p>
              <p className="font-display text-5xl">04 · 23 · 12</p>
              <p className="mt-4 text-sm text-neutral-600">Students on stand-by · Visa Taskforce engaged</p>
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full border-2 border-black bg-zlowy-accent/70" />
      </section>

      <section id="targets" className="space-y-6">
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.6em] text-neutral-500">The Targets</p>
            <h2 className="font-display text-3xl uppercase">
              Choose your <HighlightSpan color="cyan">battlefield</HighlightSpan>
            </h2>
          </div>
          <p className="max-w-lg text-sm text-neutral-600">
            Hover to decode perks, average outcomes, and visa runway before you lock coordinates.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {destinations.map(({ country, code, perks, salary, visa }) => (
            <div
              key={code}
              className="relative h-56 overflow-hidden rounded-3xl border-2 border-black bg-white p-6 shadow-brutal transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="flex h-full flex-col justify-between">
                <p className="font-display text-5xl uppercase">{code}</p>
                <div>
                  <p className="font-display text-lg uppercase">{country}</p>
                  <p className="text-sm text-neutral-600">{perks}</p>
                </div>
              </div>
              <div className="absolute inset-0 flex flex-col justify-between bg-black/90 p-6 text-white opacity-0 transition-opacity duration-300 hover:opacity-100">
                <div>
                  <p className="text-sm uppercase tracking-[0.4em] text-zlowy-accent">Intel</p>
                  <p className="mt-2 text-xl font-semibold">{country}</p>
                  <p className="text-sm text-white/70">{perks}</p>
                </div>
                <div className="space-y-2 text-sm">
                  <p>Avg Salary: {salary}</p>
                  <p>Visa Window: {visa}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.6em] text-neutral-500">The Flight Path</p>
          <h2 className="font-display text-3xl uppercase">
            We run the <HighlightSpan color="lime">operation</HighlightSpan>
          </h2>
        </div>
        <div className="relative pl-10">
          <div className="absolute left-4 top-0 h-full w-1 bg-black" />
          <div className="space-y-10">
            {stages.map(({ title, subtitle, detail }) => (
              <div key={title} className="relative">
                <div className="absolute -left-[1.55rem] top-1 h-6 w-6 rounded-full border-2 border-black bg-white" />
                <div className="rounded-3xl border-2 border-black bg-white p-6 shadow-brutal">
                  <p className="font-display text-xl uppercase">
                    {title} · <span className="text-neutral-600">{subtitle}</span>
                  </p>
                  <p className="mt-2 text-sm text-neutral-700">{detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="font-display text-3xl uppercase">
            The <HighlightSpan color="pink">Unfair advantage</HighlightSpan>
          </h2>
          <p className="text-sm text-neutral-600">Stats: $10M+ scholarships · 99% visa success</p>
        </div>
        <div className="overflow-hidden border-y-2 border-black bg-black py-4 text-white">
          <div className="flex min-w-full animate-marquee gap-8 whitespace-nowrap">
            {[0, 1].map((pass) => (
              <div key={pass} className="flex items-center gap-8">
                {servicesMarquee.map((service) => (
                  <span key={`${service}-${pass}`} className="font-display text-sm uppercase tracking-[0.4em] text-white/80">
                    {service}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.6em] text-neutral-500">Initiate Launch</p>
          <h2 className="font-display text-3xl uppercase">
            Start your <HighlightSpan color="cyan">profile scan</HighlightSpan>
          </h2>
        </div>
        <form className="space-y-4 rounded-[32px] border-2 border-black bg-white p-8 shadow-brutal">
          <div className="grid gap-4 md:grid-cols-3">
            <label className="text-sm uppercase tracking-[0.3em] text-neutral-500">
              Name
              <input
                type="text"
                placeholder="Aditi Rao"
                className="mt-2 w-full border-2 border-black bg-transparent px-3 py-2 font-body text-base focus:outline-none"
              />
            </label>
            <label className="text-sm uppercase tracking-[0.3em] text-neutral-500">
              Target Country
              <input
                type="text"
                placeholder="Canada / Germany / USA"
                className="mt-2 w-full border-2 border-black bg-transparent px-3 py-2 font-body text-base focus:outline-none"
              />
            </label>
            <label className="text-sm uppercase tracking-[0.3em] text-neutral-500">
              Phone
              <input
                type="tel"
                placeholder="+1 310 000 1234"
                className="mt-2 w-full border-2 border-black bg-transparent px-3 py-2 font-body text-base focus:outline-none"
              />
            </label>
          </div>
          <Button className="w-full bg-black text-white flex items-center justify-center gap-2">
            GENERATE BLUEPRINT <ArrowUpRight className="h-4 w-4" />
          </Button>
        </form>
      </section>
    </div>
  )
}

export default StudyAbroad
