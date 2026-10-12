'use client'

import { Compass, FileCode2, PenTool, Hammer, Rocket, TrendingUp, ArrowRight, Search, Target, Code, Send, RefreshCw, CheckCircle2 } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'
import { Reveal, Section } from './primitives'

/* -------------------------------------------------------------------------- */
/* SECTION 04: PROBLEM-FIRST APPROACH (THE PECSA DIFFERENCE)                 */
/* -------------------------------------------------------------------------- */

const METHODOLOGY_PIPELINE = [
  { step: '01', name: 'Understand', icon: Search, desc: 'Analyze operational bottleneck, stakeholder friction, and business objectives.' },
  { step: '02', name: 'Strategize', icon: Target, desc: 'Define optimal system architecture, data flow, and technology selection.' },
  { step: '03', name: 'Build', icon: Code, desc: 'Develop custom software, AI models, automation workflows, and IoT telemetry.' },
  { step: '04', name: 'Deploy', icon: Send, desc: 'Seamless integration with existing systems and secure production rollout.' },
  { step: '05', name: 'Improve', icon: RefreshCw, desc: 'Continuous telemetry monitoring, throughput optimization, and scaling.' },
]

export function ProblemApproach() {
  return (
    <Section id="difference" index="04" eyebrow="THE PECSA DIFFERENCE">
      <div className="space-y-10">
        <div className="max-w-3xl">
          <Reveal>
            <span className="font-mono-tech text-xs uppercase tracking-widest text-primary font-bold block mb-2">
              PROBLEM-FIRST METHODOLOGY
            </span>
            <h2 className="font-serif-editorial text-3xl sm:text-5xl md:text-6xl font-normal leading-[1.03] text-foreground">
              We Start With the Problem.{' '}
              <span className="text-primary italic">Not the Technology.</span>
            </h2>
            <p className="mt-4 font-sans text-base sm:text-lg leading-relaxed text-muted-foreground">
              Technology is only useful when it solves the right problem. Before recommending tools or writing code, we analyze how your operations function and where friction exists.
            </p>
          </Reveal>
        </div>

        {/* Visual Process Pipeline */}
        <Reveal delay={0.2}>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {METHODOLOGY_PIPELINE.map((p, i) => {
              const Icon = p.icon
              return (
                <div
                  key={p.step}
                  className="group border border-border bg-card p-5 transition-all hover:border-primary hover:shadow-xs relative flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4 border-b border-border/70 pb-2.5">
                      <span className="font-mono-tech text-xs text-primary font-bold">
                        PHASE {p.step}
                      </span>
                      <Icon className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <h3 className="font-mono-tech text-sm font-semibold uppercase tracking-wider text-foreground mb-2">
                      {p.name}
                    </h3>
                    <p className="font-sans text-xs text-muted-foreground leading-relaxed">
                      {p.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-border/40 font-mono-tech text-[10px] text-muted-foreground/70 uppercase">
                    STAGE 0{i + 1} OF 05
                  </div>
                </div>
              )
            })}
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="flex items-center justify-between flex-wrap gap-4 pt-2">
            <span className="font-sans text-xs sm:text-sm text-muted-foreground">
              Every deliverable is measured by operational outcome, not arbitrary complexity.
            </span>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 border border-border bg-card px-6 py-3 font-mono-tech text-xs uppercase tracking-widest text-foreground hover:border-primary transition-colors font-semibold shadow-xs"
            >
              <span>Explore Delivery Methodology</span>
              <ArrowRight className="h-4 w-4 text-primary" />
            </Link>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}

/* -------------------------------------------------------------------------- */
/* SECTION 06: HOW WE WORK (6-STAGE ENGINEERING JOURNEY)                    */
/* -------------------------------------------------------------------------- */

const STAGES = [
  {
    step: '01',
    icon: Compass,
    label: 'Discover',
    body: 'We understand your operational bottlenecks, stakeholder workflows, technical constraints, and measurable business targets.',
    deliverable: 'Discovery Assessment & Operational Scope',
  },
  {
    step: '02',
    icon: FileCode2,
    label: 'Define',
    body: 'We identify the optimal architecture, technology stack, data schema, system integration points, and delivery roadmap.',
    deliverable: 'Technical Architecture & Solution Blueprint',
  },
  {
    step: '03',
    icon: PenTool,
    label: 'Design',
    body: 'We architect responsive user experiences, system workflows, database structures, and telemetry protocols.',
    deliverable: 'Interactive Prototypes & System Schematics',
  },
  {
    step: '04',
    icon: Hammer,
    label: 'Build',
    body: 'Our engineers develop clean code, integrate third-party APIs, configure edge devices, and conduct rigorous quality testing.',
    deliverable: 'Production Software & Hardware Integration',
  },
  {
    step: '05',
    icon: Rocket,
    label: 'Launch',
    body: 'We deploy systems into secure production cloud environments, verify data integrity, and ensure smooth operational changeover.',
    deliverable: 'Production Deployment & Team Training',
  },
  {
    step: '06',
    icon: TrendingUp,
    label: 'Evolve',
    body: 'We continuously monitor telemetry, evaluate throughput, resolve emerging needs, and scale system capacity over time.',
    deliverable: 'Ongoing Optimization & Long-Term Support',
  },
]

export function HowWeWork() {
  const [active, setActive] = useState(0)
  const current = STAGES[active]
  const Icon = current.icon

  return (
    <Section id="how-we-work" index="06" eyebrow="How We Work">
      <div className="space-y-10">
        <div className="max-w-3xl">
          <Reveal>
            <h2 className="font-serif-editorial text-3xl sm:text-5xl md:text-6xl font-normal leading-[1.02] tracking-tight text-foreground">
              Structured 6-Phase{' '}
              <span className="text-primary italic">Engineering Process.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-3 font-sans text-sm sm:text-base leading-relaxed text-muted-foreground">
              From the first conversation to long-term operational support, our structured engineering lifecycle provides absolute clarity and momentum.
            </p>
          </Reveal>
        </div>

        {/* Interactive 6-Stage Timeline Bar */}
        <Reveal delay={0.15}>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
            {STAGES.map((s, idx) => {
              const SIcon = s.icon
              const isSelected = active === idx
              return (
                <button
                  key={s.step}
                  type="button"
                  onClick={() => setActive(idx)}
                  className={`p-3.5 text-left border transition-all cursor-pointer ${
                    isSelected
                      ? 'border-primary bg-primary/10 shadow-xs'
                      : 'border-border bg-card hover:border-primary/50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`font-mono-tech text-xs font-bold ${isSelected ? 'text-primary' : 'text-muted-foreground'}`}>
                      {s.step}
                    </span>
                    <SIcon className={`h-4 w-4 ${isSelected ? 'text-primary' : 'text-muted-foreground'}`} />
                  </div>
                  <span className="font-mono-tech text-xs uppercase tracking-wider text-foreground font-semibold block">
                    {s.label}
                  </span>
                </button>
              )
            })}
          </div>
        </Reveal>

        {/* Active Stage Detailed Canvas */}
        <Reveal delay={0.2}>
          <div className="border border-border bg-card p-6 sm:p-8 md:p-10 shadow-sm">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex h-10 w-10 items-center justify-center border border-primary bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <span className="font-mono-tech text-[10px] uppercase tracking-widest text-primary font-bold block">
                      STAGE [{current.step} / 06]
                    </span>
                    <h3 className="font-serif-editorial text-2xl sm:text-3xl font-normal text-foreground">
                      Phase {current.step}: {current.label}
                    </h3>
                  </div>
                </div>

                <p className="mt-4 font-sans text-base leading-relaxed text-muted-foreground max-w-xl">
                  {current.body}
                </p>
              </div>

              {/* Deliverable Callout */}
              <div className="border-t lg:border-t-0 lg:border-l border-border pt-6 lg:pt-0 lg:pl-8">
                <span className="font-mono-tech text-[10px] uppercase tracking-wider text-muted-foreground font-semibold block mb-2">
                  Key Stage Deliverable
                </span>
                <div className="flex items-start gap-3 border border-border bg-background p-4">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <span className="font-sans text-sm font-semibold text-foreground block">
                      {current.deliverable}
                    </span>
                    <span className="font-sans text-xs text-muted-foreground mt-0.5 block">
                      Fully documented, reviewed, and approved before proceeding to subsequent phase.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}

/* -------------------------------------------------------------------------- */
/* FULL PROCESS ROADMAP (FOR /services PAGE)                                  */
/* -------------------------------------------------------------------------- */

export function FullProcessRoadmap() {
  return (
    <Section id="delivery-roadmap" index="01" eyebrow="6-STAGE ENGAGEMENT ROADMAP">
      <div className="space-y-12">
        <Reveal>
          <div className="border-l-2 border-primary pl-4 sm:pl-6 max-w-3xl">
            <span className="font-mono-tech text-xs uppercase tracking-widest text-primary font-bold block mb-1">
              ENGINEERING DELIVERY METHODOLOGY
            </span>
            <h2 className="font-serif-editorial text-3xl sm:text-5xl font-normal text-foreground">
              Sequential Process from Discovery to Long-Term Evolution
            </h2>
            <p className="mt-3 font-sans text-sm sm:text-base leading-relaxed text-muted-foreground">
              We structure every project into six clear, accountable stages. This provides momentum, eliminates surprises, and ensures every line of code or hardware prototype directly solves your operational bottleneck.
            </p>
          </div>
        </Reveal>

        <div className="space-y-6">
          {STAGES.map((s, i) => {
            const SIcon = s.icon
            return (
              <Reveal key={s.step} delay={i * 0.05}>
                <div className="border border-border bg-card p-6 sm:p-8 shadow-2xs hover:border-primary/50 transition-all">
                  <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
                    <div>
                      <div className="flex items-center gap-3 mb-2 font-mono-tech text-xs">
                        <span className="text-primary font-bold">STAGE [{s.step} / 06]</span>
                        <span className="text-muted-foreground uppercase font-semibold">PECSA METHODOLOGY</span>
                      </div>

                      <div className="flex items-center gap-3.5 mb-3">
                        <span className="flex h-10 w-10 items-center justify-center border border-primary/40 bg-primary/10 text-primary shrink-0">
                          <SIcon className="h-5 w-5" />
                        </span>
                        <h3 className="font-serif-editorial text-2xl sm:text-3xl font-normal text-foreground">
                          {s.label}
                        </h3>
                      </div>

                      <p className="font-sans text-sm sm:text-base leading-relaxed text-muted-foreground font-light max-w-xl">
                        {s.body}
                      </p>
                    </div>

                    <div className="border border-border/80 bg-background/60 p-4 sm:p-5">
                      <span className="font-mono-tech text-[10px] uppercase tracking-wider text-primary font-bold block mb-2">
                        Phase Deliverable & Verification
                      </span>
                      <div className="flex items-start gap-2.5">
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <span className="font-sans text-xs sm:text-sm font-semibold text-foreground">
                          {s.deliverable}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </Section>
  )
}

