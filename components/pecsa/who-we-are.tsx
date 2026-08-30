'use client'

import { AnimatePresence, motion } from 'motion/react'
import { Brain, Target, Lightbulb, Boxes } from 'lucide-react'
import { useState } from 'react'
import { Reveal, Section } from './primitives'

const RHYTHM_STATEMENTS = [
  {
    step: '01',
    eyebrow: 'FOUNDATIONAL PRINCIPLE',
    headline: "WE DON'T START WITH TECHNOLOGY.",
    body: 'Too many projects fail because they start with a tool looking for a use. We invert that: we define the problem in plain business terms before any architecture is drawn.',
  },
  {
    step: '02',
    eyebrow: 'OPERATIONAL FOCUS',
    headline: 'WE START WITH THE PROBLEM.',
    body: 'We identify the friction a business actually feels — the process to fix, the cost to cut, the data to clarify, and the growth to unlock.',
  },
  {
    step: '03',
    eyebrow: 'SYSTEM INTEGRATION',
    headline: 'THEN ENGINEER THE ANSWER.',
    body: 'Only when the objective and context are clear do we engineer a connected solution across software, AI, automation, IoT and robotics.',
  },
]

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
  const [activeStep, setActiveStep] = useState(0)

  const handleNextStep = () => {
    setActiveStep((prev) => (prev + 1) % RHYTHM_STATEMENTS.length)
  }

  const current = RHYTHM_STATEMENTS[activeStep]

  return (
    <Section id="who-we-are" index="01" eyebrow="Who We Are">
      {/* TYPOGRAPHY-LED STORYTELLING CANVAS (NO CARDS) */}
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div>
          <Reveal>
            <div className="border-b border-white/10 pb-3 mb-5">
              <span className="font-mono-tech text-xs uppercase tracking-widest text-[#8c9a72] font-semibold block mb-1">
                PECSA PHILOSOPHY MANIFESTO
              </span>
              <h2 className="font-serif-editorial text-3xl sm:text-4xl md:text-5xl font-normal leading-[1.02] text-foreground">
                Building technology for the{' '}
                <span className="text-primary italic font-serif-editorial">real world</span>
              </h2>
            </div>
          </Reveal>

          {/* Interactive Typography Reveal Statements */}
          <Reveal delay={0.15}>
            <div className="border border-white/10 bg-[#2b211d] p-5 sm:p-8 relative shadow-2xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                <span className="font-mono-tech text-xs uppercase tracking-widest text-primary font-bold">
                  MANIFESTO STATEMENT [{current.step} / 03]
                </span>
                <span className="font-mono-tech text-xs text-white/40">
                  {current.eyebrow}
                </span>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={current.step}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="min-h-[140px]"
                >
                  <h3 className="font-serif-editorial text-2xl sm:text-3xl md:text-4xl font-normal text-foreground leading-[1.05] tracking-tight">
                    {current.headline}
                  </h3>
                  <p className="mt-3 font-sans text-sm sm:text-base leading-relaxed text-muted-foreground max-w-xl">
                    {current.body}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Burnt Copper NEXT -> Arrow Control */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-1.5 font-mono-tech text-xs">
                  {RHYTHM_STATEMENTS.map((s, idx) => (
                    <span
                      key={s.step}
                      className={`h-1.5 transition-all ${
                        activeStep === idx ? 'w-6 bg-primary' : 'w-2 bg-white/20'
                      }`}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={handleNextStep}
                  className="group flex items-center gap-3 border border-primary bg-primary px-6 py-2.5 font-mono-tech text-xs uppercase tracking-widest text-white hover:bg-primary/90 transition-all cursor-pointer"
                  aria-label="Advance manifesto statement"
                >
                  <span>NEXT →</span>
                </button>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Spatial Principles Stream */}
        <div className="flex flex-col gap-4 lg:pl-4">
          <span className="font-mono-tech text-xs uppercase tracking-widest text-[#8c9a72] font-semibold">
            CORE DISCIPLINE PRINCIPLES
          </span>

          <div className="border-t border-white/10">
            {CAPABILITIES.map((c, i) => {
              const Icon = c.icon
              return (
                <Reveal key={c.title} delay={i * 0.06}>
                  <div className="border-b border-white/10 py-3.5">
                    <div className="flex items-center gap-3 mb-1.5">
                      <span className="flex h-7 w-7 items-center justify-center border border-primary/30 bg-primary/10 text-primary">
                        <Icon className="h-3.5 w-3.5" />
                      </span>
                      <h4 className="font-serif-editorial text-xl font-normal text-foreground">
                        {c.title}
                      </h4>
                    </div>
                    <p className="pl-10 font-sans text-xs sm:text-sm leading-relaxed text-muted-foreground">
                      {c.body}
                    </p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </Section>
  )
}
