'use client'

import { AnimatePresence, motion } from 'motion/react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'
import { Reveal, Section, SectionTitle } from './primitives'

const STAGES = [
  {
    label: 'Problem',
    heading: 'Name the real problem',
    body: 'We begin with the friction a business actually feels — a slow process, rising cost, unreliable data, a manual bottleneck. The problem is defined in plain business terms before any technology is considered.',
  },
  {
    label: 'Understand',
    heading: 'Understand the context',
    body: 'We study how work happens today: the people, systems, data and constraints involved. Understanding the environment prevents solutions that look good in theory but fail in practice.',
  },
  {
    label: 'Strategize',
    heading: 'Strategize the approach',
    body: 'Only now do we choose technology. We weigh options — software, AI, automation, IoT, robotics — against effort, risk and impact, and design an approach that fits the business, not the other way around.',
  },
  {
    label: 'Build',
    heading: 'Build with discipline',
    body: 'We engineer the solution in deliberate increments, validating along the way. Robust architecture, clean data flows and testable components keep the system dependable as it grows.',
  },
  {
    label: 'Deploy',
    heading: 'Deploy into the real world',
    body: 'We roll the solution into live operations carefully — integrating with existing systems, supporting the people who use it, and monitoring how it performs against the original problem.',
  },
  {
    label: 'Improve',
    heading: 'Improve continuously',
    body: 'Deployment is not the end. We measure outcomes, learn from real usage and refine the system over time, so it keeps delivering value as the business evolves.',
  },
]

export function Innovation() {
  const [active, setActive] = useState(0)
  const progress = (active / (STAGES.length - 1)) * 100

  return (
    <Section id="innovation" index="04" eyebrow="Innovation">
      <div className="max-w-3xl">
        <Reveal>
          <SectionTitle>
            We start with the problem.{' '}
            <span className="text-muted-foreground">Not the technology.</span>
          </SectionTitle>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            Innovation at PECSA is a discipline, not a buzzword. Too many
            projects fail because they start with a tool looking for a use. We
            invert that: we anchor on the problem, understand its context, and
            only then decide whether — and how — technology should be applied.
            The result is a repeatable journey that turns a business problem into
            a system that keeps improving.
          </p>
        </Reveal>
      </div>

      {/* Interactive journey */}
      <Reveal delay={0.15}>
        <div className="mt-12">
          {/* Track */}
          <div className="relative">
            <div className="absolute left-0 right-0 top-5 h-px bg-border" aria-hidden="true" />
            <motion.div
              className="absolute left-0 top-5 h-px bg-primary"
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              aria-hidden="true"
            />
            <ol className="relative grid grid-cols-3 gap-y-6 sm:grid-cols-6">
              {STAGES.map((s, i) => {
                const done = i <= active
                return (
                  <li key={s.label} className="flex flex-col items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setActive(i)}
                      aria-pressed={active === i}
                      className="flex flex-col items-center gap-2"
                    >
                      <motion.span
                        animate={{ scale: active === i ? 1.15 : 1 }}
                        className={`flex h-10 w-10 items-center justify-center rounded-full border text-xs font-semibold tabular-nums transition-colors ${
                          active === i
                            ? 'border-primary bg-primary text-primary-foreground glow-ring'
                            : done
                              ? 'border-primary/50 bg-primary/15 text-primary'
                              : 'border-border bg-card text-muted-foreground'
                        }`}
                      >
                        {String(i + 1).padStart(2, '0')}
                      </motion.span>
                      <span
                        className={`text-center text-xs transition-colors ${
                          active === i ? 'text-foreground' : 'text-muted-foreground'
                        }`}
                      >
                        {s.label}
                      </span>
                    </button>
                  </li>
                )
              })}
            </ol>
          </div>

          {/* Detail */}
          <div className="mt-10 rounded-2xl border border-border bg-card/50 p-6 backdrop-blur sm:p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.35 }}
              >
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
                  Stage {String(active + 1).padStart(2, '0')} · {STAGES[active].label}
                </span>
                <h3 className="mt-3 font-display text-2xl font-semibold">
                  {STAGES[active].heading}
                </h3>
                <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
                  {STAGES[active].body}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="mt-7 flex items-center gap-3">
              <button
                type="button"
                onClick={() => setActive((a) => Math.max(0, a - 1))}
                disabled={active === 0}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground disabled:opacity-30"
                aria-label="Previous stage"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => setActive((a) => Math.min(STAGES.length - 1, a + 1))}
                disabled={active === STAGES.length - 1}
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.03] disabled:opacity-30 disabled:hover:scale-100"
              >
                {active === STAGES.length - 1 ? 'Journey complete' : 'Next stage'}
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
