'use client'

import { AnimatePresence, motion } from 'motion/react'
import { ArrowRight, Boxes, Brain, Layers, Lightbulb, Target } from 'lucide-react'
import { useState } from 'react'
import { Reveal, Section, SectionTitle } from './primitives'

const LAYERS = [
  {
    key: 'business',
    label: 'Business',
    tag: 'The why',
    body: 'Every engagement starts with the business objective — the process to fix, the cost to cut, the growth to unlock. We translate goals and constraints into a clear problem statement before a single line of architecture is drawn.',
  },
  {
    key: 'logic',
    label: 'Logic',
    tag: 'The how',
    body: 'We shape the business intent into systems, workflows and decision rules. This is where automation, AI models and application logic are engineered to behave reliably, predictably and at scale.',
  },
  {
    key: 'data',
    label: 'Data',
    tag: 'The proof',
    body: 'Solutions are grounded in data — captured from software, sensors and operations. Clean, structured data closes the loop, feeding insight back into the business so the system keeps improving over time.',
  },
] as const

const CAPABILITIES = [
  {
    icon: Brain,
    title: 'Engineering mindset',
    body: 'We approach problems like engineers: decompose complexity, validate assumptions, and build systems that are robust, testable and maintainable rather than quick demos.',
  },
  {
    icon: Target,
    title: 'Business-oriented thinking',
    body: 'Technology is a means, not the goal. We prioritise the outcomes that move a business — efficiency, cost, reliability and growth — and design around them.',
  },
  {
    icon: Lightbulb,
    title: 'Practical problem-solving',
    body: 'We favour solutions that ship and hold up in the real world over theoretical perfection, balancing ambition with pragmatism and clear trade-offs.',
  },
  {
    icon: Boxes,
    title: 'Multi-disciplinary capability',
    body: 'Software, AI, automation, IoT and robotics under one roof lets us combine disciplines into connected solutions instead of stitching together disconnected tools.',
  },
]

export function WhoWeAre() {
  const [active, setActive] = useState<number>(0)
  const [openCap, setOpenCap] = useState<number | null>(0)

  return (
    <Section id="who-we-are" index="02" eyebrow="Who We Are">
      <div className="grid gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
        <div>
          <Reveal>
            <SectionTitle>
              Building technology for the{' '}
              <span className="text-primary">real world</span>
            </SectionTitle>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">
              PECSA is a practical engineering company. We combine an engineering
              mindset with business-oriented thinking to turn operational
              problems into working systems. Our multidisciplinary teams span
              software, AI, automation, IoT and robotics — so a solution is
              designed as one connected whole, not a collection of parts.
            </p>
          </Reveal>

          {/* Business -> Logic -> Data interactive system */}
          <Reveal delay={0.15}>
            <div className="mt-10 rounded-2xl border border-border bg-card/40 p-5 backdrop-blur sm:p-6">
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                How we think · Business → Logic → Data
              </p>
              <div className="flex items-center gap-2 sm:gap-3">
                {LAYERS.map((l, i) => (
                  <div key={l.key} className="flex flex-1 items-center gap-2 sm:gap-3">
                    <button
                      type="button"
                      onClick={() => setActive(i)}
                      aria-pressed={active === i}
                      className={`relative flex-1 rounded-xl border px-2 py-4 text-center transition-all ${
                        active === i
                          ? 'border-primary/60 bg-primary/10 glow-ring'
                          : 'border-border bg-background/40 hover:border-primary/30'
                      }`}
                    >
                      <span className="block font-display text-sm font-semibold">
                        {l.label}
                      </span>
                      <span className="mt-0.5 block text-[10px] uppercase tracking-wide text-muted-foreground">
                        {l.tag}
                      </span>
                    </button>
                    {i < LAYERS.length - 1 && (
                      <ArrowRight
                        className={`h-4 w-4 shrink-0 transition-colors ${
                          active > i ? 'text-primary' : 'text-muted-foreground/50'
                        }`}
                      />
                    )}
                  </div>
                ))}
              </div>
              <AnimatePresence mode="wait">
                <motion.p
                  key={active}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="mt-5 text-sm leading-relaxed text-muted-foreground"
                >
                  {LAYERS[active].body}
                </motion.p>
              </AnimatePresence>
            </div>
          </Reveal>
        </div>

        {/* Capabilities accordion */}
        <div className="flex flex-col gap-3">
          {CAPABILITIES.map((c, i) => {
            const Icon = c.icon
            const open = openCap === i
            return (
              <Reveal key={c.title} delay={i * 0.08}>
                <button
                  type="button"
                  onClick={() => setOpenCap(open ? null : i)}
                  aria-expanded={open}
                  className={`w-full rounded-2xl border p-5 text-left transition-all sm:p-6 ${
                    open
                      ? 'border-primary/50 bg-card/70'
                      : 'border-border bg-card/40 hover:border-primary/30'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-colors ${
                        open ? 'bg-primary/20 text-primary' : 'bg-secondary text-muted-foreground'
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="font-display text-lg font-medium">
                      {c.title}
                    </span>
                    <ArrowRight
                      className={`ml-auto h-4 w-4 shrink-0 text-primary transition-transform ${
                        open ? 'rotate-90' : ''
                      }`}
                    />
                  </div>
                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <p className="pl-15 pt-3 text-sm leading-relaxed text-muted-foreground">
                          {c.body}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </Reveal>
            )
          })}
          <Reveal delay={0.4}>
            <div className="mt-1 flex items-center gap-3 rounded-2xl border border-dashed border-border/70 px-5 py-4 text-sm text-muted-foreground">
              <Layers className="h-4 w-4 text-primary" />
              Disciplines combined into one connected solution.
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}
