'use client'

import { AnimatePresence, motion } from 'motion/react'
import { Plus, Wrench, Target, Layers, Boxes, HeartHandshake } from 'lucide-react'
import { useState } from 'react'
import { Reveal, Section, SectionTitle } from './primitives'

const POINTS = [
  {
    icon: Wrench,
    title: 'Practical Technology',
    body: 'We build technology that earns its place in real operations. Every solution is judged by whether it works reliably in the messiness of the real world — not by how impressive it looks in a demo. Pragmatism, robustness and maintainability come before novelty.',
  },
  {
    icon: Target,
    title: 'Business-Centric Approach',
    body: 'We start from business outcomes and work backwards to technology. Understanding the problem, the constraints and the people involved lets us build solutions that fit how an organisation actually works, and that deliver value where it matters.',
  },
  {
    icon: Layers,
    title: 'Scalable Architecture',
    body: 'We design systems that can grow. Clean architecture, sensible data models and modular components mean a solution can expand in scope and load over time without needing to be rebuilt from scratch.',
  },
  {
    icon: Boxes,
    title: 'Multiple Technology Capabilities',
    body: 'Software, AI, automation, IoT and robotics under one roof mean we can combine disciplines into a single connected solution. This breadth lets us solve problems that a single-discipline team simply cannot.',
  },
  {
    icon: HeartHandshake,
    title: 'Long-Term Partnership',
    body: 'We aim to be a lasting technology partner, not a one-off vendor. We stay involved after launch — measuring, supporting and improving — so the systems we build keep pace with the business as it evolves.',
  },
]

export function WhyPecsa() {
  const [open, setOpen] = useState(0)

  return (
    <Section id="why-pecsa" index="08" eyebrow="Why PECSA">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,420px)_1fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal>
            <SectionTitle>
              The difference is in{' '}
              <span className="text-primary">how we build</span>
            </SectionTitle>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Plenty of companies can write code. What sets PECSA apart is a
              consistent philosophy that runs through everything we do. These
              five principles shape our decisions from the first conversation to
              long after launch. Expand each one to see what it means in
              practice.
            </p>
          </Reveal>
        </div>

        <div className="flex flex-col">
          {POINTS.map((p, i) => {
            const Icon = p.icon
            const isOpen = open === i
            return (
              <Reveal key={p.title} delay={i * 0.06}>
                <div className="border-b border-border">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center gap-4 py-6 text-left"
                  >
                    <span className="font-display text-sm tabular-nums text-primary">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors ${
                        isOpen ? 'bg-primary/20 text-primary' : 'bg-secondary text-muted-foreground'
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </span>
                    <span
                      className={`font-display text-lg font-medium transition-colors sm:text-xl ${
                        isOpen ? 'text-foreground' : 'text-muted-foreground'
                      }`}
                    >
                      {p.title}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      className="ml-auto flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border text-primary"
                    >
                      <Plus className="h-4 w-4" />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <p className="pb-6 pl-19 pr-4 leading-relaxed text-muted-foreground">
                          {p.body}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </Section>
  )
}
