'use client'

import { AnimatePresence, motion } from 'motion/react'
import { ArrowRight, Compass, PenTool, Hammer, Rocket, HeartHandshake } from 'lucide-react'
import { useState } from 'react'
import { Reveal, Section, SectionTitle } from './primitives'

const STAGES = [
  {
    icon: Compass,
    label: 'Discovery',
    summary: 'Understand the problem, people and constraints.',
    body: 'We sit with the business to map how work happens today, where the friction is, and what success would actually look like. Discovery produces a shared, honest understanding of the problem before anything is committed to.',
  },
  {
    icon: PenTool,
    label: 'Planning / Blueprint',
    summary: 'Turn understanding into a concrete plan.',
    body: 'We translate the problem into an architecture and a plan: what to build, in what order, with what technology, and how it integrates with existing systems. The blueprint makes scope, risk and sequencing explicit.',
  },
  {
    icon: Hammer,
    label: 'Build',
    summary: 'Engineer the solution in disciplined increments.',
    body: 'We build in validated increments, keeping the system robust and testable throughout. Regular checkpoints keep the work aligned with the business intent, so there are no surprises at the end.',
  },
  {
    icon: Rocket,
    label: 'Deployment',
    summary: 'Move carefully into live operations.',
    body: 'We roll the solution into real use with care — integrating, supporting the people who use it, and monitoring behaviour. Deployment is treated as a controlled transition, not a hand-off.',
  },
  {
    icon: HeartHandshake,
    label: 'Improvement / Partnership',
    summary: 'Keep improving as the business evolves.',
    body: 'We stay involved after launch, measuring outcomes and refining the system over time. Our aim is a long-term partnership where technology keeps pace with the business rather than ageing in place.',
  },
]

export function HowWeWork() {
  const [active, setActive] = useState(0)

  return (
    <Section id="how-we-work" index="06" eyebrow="How We Work">
      <div className="max-w-3xl">
        <Reveal>
          <SectionTitle>
            A journey from idea to{' '}
            <span className="text-primary">lasting partnership</span>
          </SectionTitle>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            Every engagement follows a deliberate path. It is designed to reduce
            risk, keep the business involved, and ensure what we build keeps
            delivering value long after it goes live. Select a stage to see what
            we do at each step.
          </p>
        </Reveal>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,340px)_1fr] lg:gap-12">
        {/* Timeline */}
        <Reveal>
          <ol className="relative">
            <div className="absolute bottom-4 left-5 top-4 w-px bg-border" aria-hidden="true" />
            <motion.div
              className="absolute left-5 top-4 w-px bg-primary"
              animate={{ height: `${(active / (STAGES.length - 1)) * 100}%` }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              style={{ maxHeight: 'calc(100% - 2rem)' }}
              aria-hidden="true"
            />
            {STAGES.map((s, i) => {
              const SIcon = s.icon
              const selected = active === i
              const done = i <= active
              return (
                <li key={s.label} className="relative">
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    aria-pressed={selected}
                    className="flex w-full items-center gap-4 py-3 text-left"
                  >
                    <motion.span
                      animate={{ scale: selected ? 1.1 : 1 }}
                      className={`relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border transition-colors ${
                        selected
                          ? 'border-primary bg-primary text-primary-foreground glow-ring'
                          : done
                            ? 'border-primary/50 bg-primary/15 text-primary'
                            : 'border-border bg-card text-muted-foreground'
                      }`}
                    >
                      <SIcon className="h-5 w-5" />
                    </motion.span>
                    <span className="min-w-0">
                      <span
                        className={`block font-display text-sm font-medium transition-colors ${
                          selected ? 'text-foreground' : 'text-muted-foreground'
                        }`}
                      >
                        {s.label}
                      </span>
                      <span className="block truncate text-xs text-muted-foreground/80">
                        {s.summary}
                      </span>
                    </span>
                    <ArrowRight
                      className={`ml-auto h-4 w-4 shrink-0 text-primary transition-all ${
                        selected ? 'translate-x-0 opacity-100' : '-translate-x-1 opacity-0'
                      }`}
                    />
                  </button>
                </li>
              )
            })}
          </ol>
        </Reveal>

        {/* Active stage detail */}
        <div className="lg:pt-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4 }}
              className="relative overflow-hidden rounded-2xl border border-border bg-card/50 p-6 backdrop-blur sm:p-8"
            >
              <div className="pointer-events-none absolute right-0 top-0 h-40 w-40 bg-radial-glow" />
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
                Stage {String(active + 1).padStart(2, '0')} of {String(STAGES.length).padStart(2, '0')}
              </span>
              <h3 className="mt-3 font-display text-2xl font-semibold sm:text-3xl">
                {STAGES[active].label}
              </h3>
              <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
                {STAGES[active].body}
              </p>
              <div className="mt-8 flex items-center gap-3">
                {STAGES.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setActive(i)}
                    aria-label={`Go to stage ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all ${
                      active === i ? 'w-8 bg-primary' : 'w-2 bg-border hover:bg-muted-foreground/50'
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </Section>
  )
}
