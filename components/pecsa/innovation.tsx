'use client'

import { AnimatePresence, motion } from 'motion/react'
import { useState } from 'react'
import { Reveal, Section, SectionTitle } from './primitives'

const STAGES = [
  {
    step: '01',
    label: 'PROBLEM',
    heading: 'Name the real problem',
    body: 'We begin with the friction a business actually feels — a slow process, rising cost, unreliable data, a manual bottleneck. The problem is defined in plain business terms before any technology is considered.',
  },
  {
    step: '02',
    label: 'UNDERSTAND',
    heading: 'Understand the context',
    body: 'We study how work happens today: the people, systems, data and constraints involved. Understanding the environment prevents solutions that look good in theory but fail in practice.',
  },
  {
    step: '03',
    label: 'STRATEGIZE',
    heading: 'Strategize the approach',
    body: 'Only now do we choose technology. We weigh options — software, AI, automation, IoT, robotics — against effort, risk and impact, and design an approach that fits the business, not the other way around.',
  },
  {
    step: '04',
    label: 'BUILD',
    heading: 'Build with discipline',
    body: 'We engineer the solution in deliberate increments, validating along the way. Robust architecture, clean data flows and testable components keep the system dependable as it grows.',
  },
  {
    step: '05',
    label: 'DEPLOY',
    heading: 'Deploy into the real world',
    body: 'We roll the solution into live operations carefully — integrating with existing systems, supporting the people who use it, and monitoring how it performs against the original problem.',
  },
  {
    step: '06',
    label: 'IMPROVE',
    heading: 'Improve continuously',
    body: 'Deployment is not the end. We measure outcomes, learn from real usage and refine the system over time, so it keeps delivering value as the business evolves.',
  },
]

export function Innovation() {
  const [active, setActive] = useState(0)

  const handleNextStage = () => {
    setActive((prev) => (prev + 1) % STAGES.length)
  }

  const current = STAGES[active]

  return (
    <Section id="innovation" index="03" eyebrow="Innovation Methodology">
      <div className="max-w-3xl">
        <Reveal>
          <SectionTitle>
            We start with the problem.{' '}
            <span className="text-muted-foreground italic font-serif-editorial">Not the technology.</span>
          </SectionTitle>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-2.5 font-sans text-sm sm:text-base leading-relaxed text-muted-foreground">
            Innovation at PECSA is a discipline, not a buzzword. We anchor on the problem, understand its context, and only then decide whether — and how — technology should be applied.
          </p>
        </Reveal>
      </div>

      {/* CINEMATIC TRANSFORMATION SEQUENCE (COMPACT VERTICAL RHYTHM) */}
      <Reveal delay={0.15}>
        <div className="mt-5 border border-white/10 bg-[#2b211d] p-5 sm:p-8 relative shadow-2xl">
          {/* Header Progress Indicator */}
          <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-5">
            <span className="font-mono-tech text-xs uppercase tracking-widest text-[#8c9a72] font-bold">
              CINEMATIC METHODOLOGY SEQUENCE [{current.step} / 06]
            </span>

            {/* Stage Progress Indicators */}
            <div className="flex items-center gap-2">
              {STAGES.map((s, index) => (
                <button
                  key={s.step}
                  type="button"
                  onClick={() => setActive(index)}
                  className={`h-1.5 transition-all cursor-pointer ${
                    active === index ? 'w-6 bg-primary' : 'w-2 bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Jump to stage ${s.label}`}
                />
              ))}
            </div>
          </div>

          {/* Morphing Visual Canvas */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current.step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="grid gap-8 lg:grid-cols-[1fr_0.6fr] lg:items-center min-h-[160px]"
            >
              <div>
                <span className="font-mono-tech text-xs uppercase tracking-widest text-muted-foreground block mb-1.5 font-medium">
                  STAGE {current.step} · {current.label}
                </span>
                <h3 className="font-serif-editorial text-3xl sm:text-4xl font-normal text-foreground leading-tight">
                  {current.heading}
                </h3>
                <p className="mt-3 font-sans text-sm sm:text-base leading-relaxed text-muted-foreground max-w-2xl">
                  {current.body}
                </p>
              </div>

              {/* Spatial Stage Display */}
              <div className="border border-white/10 bg-[#211a17] p-6 flex flex-col items-center justify-center text-center">
                <span className="font-serif-editorial text-6xl text-primary font-normal leading-none">
                  {current.step}
                </span>
                <span className="mt-2 font-mono-tech text-xs uppercase tracking-widest text-[#8c9a72] font-semibold">
                  {current.label}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Prominent NEXT -> Arrow Control */}
          <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
            <span className="font-mono-tech text-xs text-white/40 uppercase tracking-widest hidden sm:inline-block">
              Click arrow to advance sequence →
            </span>

            <button
              type="button"
              onClick={handleNextStage}
              className="group flex items-center gap-3 border border-primary bg-primary px-7 py-3 font-mono-tech text-xs uppercase tracking-widest text-white hover:bg-primary/90 transition-all cursor-pointer ml-auto"
              aria-label="Advance to next sequence stage"
            >
              <span>NEXT →</span>
            </button>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
