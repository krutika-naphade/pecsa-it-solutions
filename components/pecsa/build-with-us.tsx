'use client'

import { AnimatePresence, motion } from 'motion/react'
import { Handshake, Rocket, Users, ArrowRight } from 'lucide-react'
import { useState } from 'react'
import { Reveal, Section, SectionTitle } from './primitives'

const OPPORTUNITIES = [
  {
    icon: Rocket,
    title: 'Project Collaboration',
    short: 'Bring us a problem and build a solution together.',
    body: 'Most of our work begins as a collaboration. You describe an operational challenge, a manual process that is slowing you down, or an idea you want to validate — and we work alongside your team to scope it, prototype it and build it into something dependable. Engagements can range from a focused proof of concept to a full platform delivered end to end.',
    points: [
      'Discovery and solution scoping',
      'Prototypes and proofs of concept',
      'End-to-end platform delivery',
      'Ongoing iteration with your team',
    ],
  },
  {
    icon: Handshake,
    title: 'Partnerships',
    short: 'Combine strengths to deliver more together.',
    body: 'We partner with agencies, product teams, integrators and domain specialists who need engineering depth across software, AI, automation, IoT and robotics. A partnership means shared delivery capacity and a technical team that can slot into your process — so you can take on work you could not deliver alone.',
    points: [
      'Technical delivery capacity',
      'Multi-disciplinary engineering',
      'White-label and joint delivery',
      'Long-term working relationships',
    ],
  },
  {
    icon: Users,
    title: 'Careers & Opportunities',
    short: 'Work on practical technology that ships.',
    body: 'We are a place for engineers and problem-solvers who care about building things that work in the real world, not just in a demo. If you enjoy moving across disciplines — software one week, an IoT integration the next — and want your work in the hands of real users, we would like to hear from you.',
    points: [
      'Hands-on, cross-disciplinary work',
      'Real systems used by real teams',
      'Mentorship and shared ownership',
      'Room to grow into new domains',
    ],
  },
]

export function BuildWithUs() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <Section id="build-with-us" index="11" eyebrow="Build With Us">
      <Reveal>
        <SectionTitle>
          Ways to <span className="text-primary">build with us</span>
        </SectionTitle>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">
          Whether you have a problem to solve, a business to grow together, or a
          career to build, there is a way to work with PECSA. Expand each option
          to see what it involves.
        </p>
      </Reveal>

      <div className="mt-10 flex flex-col gap-4">
        {OPPORTUNITIES.map((o, i) => {
          const Icon = o.icon
          const isOpen = open === i
          return (
            <Reveal key={o.title} delay={0.05 * i}>
              <div
                className={`overflow-hidden rounded-2xl border backdrop-blur transition-colors ${
                  isOpen
                    ? 'border-primary/50 bg-card/70'
                    : 'border-border bg-card/40 hover:border-primary/30'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center gap-4 p-6 text-left sm:p-7"
                >
                  <span
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-colors ${
                      isOpen ? 'bg-primary/20 text-primary' : 'bg-primary/10 text-primary/80'
                    }`}
                  >
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-display text-xl font-semibold sm:text-2xl">
                      {o.title}
                    </span>
                    <span className="mt-1 block text-sm text-muted-foreground">
                      {o.short}
                    </span>
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 90 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-primary"
                    aria-hidden="true"
                  >
                    <ArrowRight className="h-5 w-5" />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
                    >
                      <div className="grid gap-6 border-t border-border/60 px-6 py-6 sm:px-7 lg:grid-cols-[1.4fr_1fr]">
                        <p className="leading-relaxed text-muted-foreground">{o.body}</p>
                        <ul className="flex flex-col gap-2.5">
                          {o.points.map((p) => (
                            <li key={p} className="flex items-start gap-2.5 text-sm">
                              <span
                                className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                                aria-hidden="true"
                              />
                              <span className="text-foreground/85">{p}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
