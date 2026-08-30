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
    <Section id="build-with-us" index="10" eyebrow="Build With Us">
      <Reveal>
        <SectionTitle>
          Ways to <span className="text-primary italic font-serif-editorial">build with us</span>
        </SectionTitle>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="mt-6 max-w-2xl font-sans text-base leading-relaxed text-muted-foreground">
          Whether you have a problem to solve, a business to grow together, or a
          career to build, there is a way to work with PECSA. Expand each option
          to see what it involves.
        </p>
      </Reveal>

      <div className="mt-12 flex flex-col border-t border-white/10">
        {OPPORTUNITIES.map((o, i) => {
          const Icon = o.icon
          const isOpen = open === i
          return (
            <Reveal key={o.title} delay={0.05 * i}>
              <div className="border-b border-white/10">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between py-8 text-left cursor-pointer group"
                >
                  <div className="flex items-center gap-5">
                    <span
                      className={`flex h-11 w-11 shrink-0 items-center justify-center border transition-colors ${
                        isOpen ? 'border-primary bg-primary/20 text-primary' : 'border-white/10 bg-[#2b211d] text-muted-foreground'
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <span className="font-serif-editorial text-3xl font-normal text-foreground block group-hover:text-primary transition-colors">
                        {o.title}
                      </span>
                      <span className="font-sans text-xs text-muted-foreground block mt-0.5">
                        {o.short}
                      </span>
                    </div>
                  </div>
                  <motion.span
                    animate={{ rotate: isOpen ? 90 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex h-9 w-9 items-center justify-center border border-white/10 text-primary bg-[#2b211d]"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: 'easeInOut' }}
                    >
                      <div className="grid gap-8 pb-8 pt-2 pl-16 pr-4 lg:grid-cols-[1.4fr_1fr]">
                        <p className="font-sans text-sm leading-relaxed text-muted-foreground">{o.body}</p>
                        <div className="border-t lg:border-t-0 lg:border-l border-white/10 pt-4 lg:pt-0 lg:pl-6">
                          <h4 className="font-mono-tech text-xs uppercase tracking-widest text-[#8c9a72] mb-3 font-semibold">
                            Key Deliverables & Scope
                          </h4>
                          <ul className="flex flex-col gap-2.5 font-sans text-xs text-muted-foreground">
                            {o.points.map((p) => (
                              <li key={p} className="flex items-center gap-2.5">
                                <span className="h-1.5 w-1.5 bg-primary" />
                                <span>{p}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
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
