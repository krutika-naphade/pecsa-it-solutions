'use client'

import { AnimatePresence, motion } from 'motion/react'
import { useState } from 'react'
import { Reveal, Section } from './primitives'

const PROCESS_STAGES = [
  {
    step: '01',
    label: 'Understand',
    heading: 'We begin by understanding your business & friction',
    body: 'Technology is only useful when it solves the right problem. That\'s why we don\'t begin by asking, "What software should we build?" We begin by asking, "What problem are we trying to solve?"',
  },
  {
    step: '02',
    label: 'Strategize',
    heading: 'Identify technology, architecture & approach',
    body: 'Once we understand your business, we identify the technology, architecture, and approach that can create the most value.',
  },
  {
    step: '03',
    label: 'Build',
    heading: 'Engineer with clarity and scalable discipline',
    body: 'We build the solution in structured increments, combining software, AI, automation, IoT, or robotics into a coherent, high-performance system.',
  },
  {
    step: '04',
    label: 'Deploy',
    heading: 'Seamless integration into live operations',
    body: 'We carefully roll out the solution into your operational environment, ensuring setup, testing, and team onboarding work as intended.',
  },
  {
    step: '05',
    label: 'Improve',
    heading: 'Continuous iteration and value optimization',
    body: 'We stay connected to measure real-world performance, refine workflows, and help your systems scale as your business grows.',
  },
]

export function Innovation() {
  const [active, setActive] = useState(0)

  const handleNextStage = () => {
    setActive((prev) => (prev + 1) % PROCESS_STAGES.length)
  }

  const current = PROCESS_STAGES[active]

  return (
    <Section id="innovation" index="03" eyebrow="Problem-First Approach">
      <div className="max-w-4xl">
        <Reveal>
          <h2 className="font-serif-editorial text-3xl sm:text-5xl md:text-6xl font-normal leading-[1.02] tracking-tight text-foreground">
            We Start With the Problem.{' '}
            <span className="text-primary italic font-serif-editorial">Not the Technology.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-4 space-y-3 font-sans text-sm sm:text-base leading-relaxed text-muted-foreground">
            <p>Technology is only useful when it solves the right problem.</p>
            <p>That's why we don't begin by asking, "What software should we build?"</p>
            <p>We begin by asking, "What problem are we trying to solve?"</p>
            <p>Once we understand your business, we identify the technology, architecture, and approach that can create the most value.</p>
          </div>
        </Reveal>
      </div>

      {/* Visual / Process Flow Bar */}
      <Reveal delay={0.15}>
        <div className="mt-8 border border-white/10 bg-[#211a17] p-4 sm:p-6">
          <span className="font-mono-tech text-xs font-semibold uppercase tracking-widest text-[#8c9a72] block mb-4">
            VISUAL PROCESS FLOW
          </span>
          <div className="flex flex-wrap items-center justify-between gap-3 font-mono-tech text-xs sm:text-sm">
            {PROCESS_STAGES.map((s, idx) => (
              <div key={s.label} className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setActive(idx)}
                  className={`flex items-center gap-2 border px-3.5 py-2 transition-colors cursor-pointer ${
                    active === idx
                      ? 'border-primary bg-primary text-white font-bold'
                      : 'border-white/15 bg-[#2b211d] text-muted-foreground hover:border-white/40 hover:text-white'
                  }`}
                >
                  <span className="text-[10px] text-white/50">0{idx + 1}</span>
                  <span>{s.label}</span>
                </button>
                {idx < PROCESS_STAGES.length - 1 && (
                  <span className="text-primary hidden sm:inline-block">→</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Interactive Process Stage Presentation */}
      <Reveal delay={0.2}>
        <div className="mt-4 border border-white/10 bg-[#2b211d] p-5 sm:p-8 relative shadow-2xl">
          <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-5">
            <span className="font-mono-tech text-xs uppercase tracking-widest text-[#8c9a72] font-bold">
              PROCESS STAGE [{current.step} / 05]
            </span>
            <span className="font-mono-tech text-xs text-primary font-semibold uppercase">
              {current.label}
            </span>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current.step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="grid gap-8 lg:grid-cols-[1fr_0.5fr] lg:items-center min-h-[140px]"
            >
              <div>
                <span className="font-mono-tech text-xs uppercase tracking-widest text-muted-foreground block mb-1.5 font-medium">
                  STAGE {current.step} · {current.label.toUpperCase()}
                </span>
                <h3 className="font-serif-editorial text-2xl sm:text-3xl font-normal text-foreground leading-tight">
                  {current.heading}
                </h3>
                <p className="mt-3 font-sans text-sm sm:text-base leading-relaxed text-muted-foreground max-w-2xl">
                  {current.body}
                </p>
              </div>

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

          <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
            <span className="font-mono-tech text-xs text-white/40 uppercase tracking-widest hidden sm:inline-block">
              Click arrow to advance process →
            </span>

            <button
              type="button"
              onClick={handleNextStage}
              className="group flex items-center gap-3 border border-primary bg-primary px-7 py-3 font-mono-tech text-xs uppercase tracking-widest text-white hover:bg-primary/90 transition-all cursor-pointer ml-auto"
              aria-label="Advance to next process stage"
            >
              <span>NEXT →</span>
            </button>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}

