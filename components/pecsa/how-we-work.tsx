'use client'

import { AnimatePresence, motion } from 'motion/react'
import { Compass, PenTool, Hammer, Rocket, HeartHandshake } from 'lucide-react'
import { useState } from 'react'
import { Reveal, Section, SectionTitle } from './primitives'

const STAGES = [
  {
    icon: Compass,
    label: 'DISCOVERY',
    summary: 'Understand the problem, people and constraints.',
    body: 'We sit with the business to map how work happens today, where the friction is, and what success would actually look like. Discovery produces a shared, honest understanding of the problem before anything is committed to.',
  },
  {
    icon: PenTool,
    label: 'BLUEPRINT',
    summary: 'Turn understanding into a concrete plan.',
    body: 'We translate the problem into an architecture and a plan: what to build, in what order, with what technology, and how it integrates with existing systems. The blueprint makes scope, risk and sequencing explicit.',
  },
  {
    icon: Hammer,
    label: 'BUILD',
    summary: 'Engineer the solution in disciplined increments.',
    body: 'We build in validated increments, keeping the system robust and testable throughout. Regular checkpoints keep the work aligned with the business intent, so there are no surprises at the end.',
  },
  {
    icon: Rocket,
    label: 'DEPLOYMENT',
    summary: 'Move carefully into live operations.',
    body: 'We roll the solution into real use with care — integrating, supporting the people who use it, and monitoring behaviour. Deployment is treated as a controlled transition, not a hand-off.',
  },
  {
    icon: HeartHandshake,
    label: 'IMPROVEMENT',
    summary: 'Keep improving as the business evolves.',
    body: 'We stay involved after launch, measuring outcomes and refining the system over time. Our aim is a long-term partnership where technology keeps pace with the business rather than ageing in place.',
  },
]

export function HowWeWork() {
  const [active, setActive] = useState(0)

  const handleNextPhase = () => {
    setActive((prev) => (prev + 1) % STAGES.length)
  }

  const current = STAGES[active]
  const Icon = current.icon

  return (
    <Section id="how-we-work" index="05" eyebrow="How We Work">
      <div className="max-w-3xl">
        <Reveal>
          <SectionTitle>
            A journey from idea to{' '}
            <span className="text-primary italic font-serif-editorial">lasting partnership</span>
          </SectionTitle>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-2.5 font-sans text-sm sm:text-base leading-relaxed text-muted-foreground">
            Every engagement follows a deliberate path designed to reduce risk and ensure what we build keeps delivering value long after launch.
          </p>
        </Reveal>
      </div>

      {/* CONTINUOUS VISUAL JOURNEY (COMPACT VERTICAL RHYTHM) */}
      <Reveal delay={0.15}>
        <div className="mt-5 border border-white/10 bg-[#2b211d] p-5 sm:p-8 relative shadow-2xl">
          {/* Header Progress */}
          <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-5">
            <span className="font-mono-tech text-xs uppercase tracking-widest text-[#8c9a72] font-bold">
              ENGAGEMENT JOURNEY [0{active + 1} / 05]
            </span>

            {/* Step Dots */}
            <div className="flex items-center gap-2">
              {STAGES.map((s, index) => (
                <button
                  key={s.label}
                  type="button"
                  onClick={() => setActive(index)}
                  className={`h-1.5 transition-all cursor-pointer ${
                    active === index ? 'w-6 bg-primary' : 'w-2 bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Jump to ${s.label}`}
                />
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current.label}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center min-h-[160px]"
            >
              <div>
                <div className="flex items-center gap-2.5 mb-2">
                  <span className="flex h-8 w-8 items-center justify-center border border-primary bg-primary/20 text-primary">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="font-mono-tech text-xs uppercase tracking-widest text-muted-foreground font-medium">
                    PHASE 0{active + 1} · {current.summary}
                  </span>
                </div>
                <h3 className="font-serif-editorial text-3xl sm:text-4xl font-normal text-foreground leading-tight">
                  {current.label}
                </h3>
                <p className="mt-3 font-sans text-sm sm:text-base leading-relaxed text-muted-foreground max-w-xl">
                  {current.body}
                </p>
              </div>

              {/* Spatial Journey Visual Display */}
              <div className="border border-white/10 bg-[#211a17] p-6 flex flex-col items-center justify-center text-center">
                <span className="font-serif-editorial text-6xl text-primary font-normal leading-none">
                  0{active + 1}
                </span>
                <span className="mt-2 font-mono-tech text-xs uppercase tracking-widest text-[#8c9a72] font-semibold">
                  {current.label}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Arrow Control */}
          <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
            <span className="font-mono-tech text-xs text-white/40 uppercase tracking-widest hidden sm:inline-block">
              Click arrow to advance journey →
            </span>

            <button
              type="button"
              onClick={handleNextPhase}
              className="group flex items-center gap-3 border border-primary bg-primary px-7 py-3 font-mono-tech text-xs uppercase tracking-widest text-white hover:bg-primary/90 transition-all cursor-pointer ml-auto"
              aria-label="Advance to next journey phase"
            >
              <span>NEXT →</span>
            </button>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
