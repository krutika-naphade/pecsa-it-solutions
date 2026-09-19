'use client'

import { AnimatePresence, motion } from 'motion/react'
import { Compass, FileCode2, PenTool, Hammer, Rocket, TrendingUp } from 'lucide-react'
import { useState } from 'react'
import { Reveal, Section } from './primitives'

const STAGES = [
  {
    step: '01',
    icon: Compass,
    label: 'Discover',
    body: 'We understand your business, users, challenges, and goals.',
  },
  {
    step: '02',
    icon: FileCode2,
    label: 'Define',
    body: 'We identify the right solution, technology stack, features, and roadmap.',
  },
  {
    step: '03',
    icon: PenTool,
    label: 'Design',
    body: 'We create intuitive experiences and a scalable technical architecture.',
  },
  {
    step: '04',
    icon: Hammer,
    label: 'Build',
    body: 'Our team develops, integrates, tests, and refines the solution.',
  },
  {
    step: '05',
    icon: Rocket,
    label: 'Launch',
    body: 'We deploy your solution and make sure everything works as intended.',
  },
  {
    step: '06',
    icon: TrendingUp,
    label: 'Evolve',
    body: 'We continuously improve and scale the solution as your business grows.',
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
          <h2 className="font-serif-editorial text-3xl sm:text-5xl md:text-6xl font-normal leading-[1.02] tracking-tight text-foreground">
            From Problem to{' '}
            <span className="text-primary italic font-serif-editorial">Possibility.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-3 font-sans text-sm sm:text-base leading-relaxed text-muted-foreground">
            Our structured 6-stage engineering process ensures every project moves smoothly from initial vision to measurable business value.
          </p>
        </Reveal>
      </div>

      {/* CONTINUOUS VISUAL JOURNEY */}
      <Reveal delay={0.15}>
        <div className="mt-5 border border-white/10 bg-[#2b211d] p-5 sm:p-8 relative shadow-2xl">
          {/* Header Progress */}
          <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-5">
            <span className="font-mono-tech text-xs uppercase tracking-widest text-[#8c9a72] font-bold">
              ENGAGEMENT STAGE [{current.step} / 06]
            </span>

            {/* Step Dots */}
            <div className="flex items-center gap-1.5">
              {STAGES.map((s, index) => (
                <button
                  key={s.step}
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
              key={current.step}
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
                  <span className="font-mono-tech text-xs uppercase tracking-widest text-primary font-bold">
                    STAGE {current.step}
                  </span>
                </div>
                <h3 className="font-serif-editorial text-3xl sm:text-4xl font-normal text-foreground leading-tight">
                  0{active + 1} — {current.label}
                </h3>
                <p className="mt-3 font-sans text-sm sm:text-base leading-relaxed text-muted-foreground max-w-xl">
                  {current.body}
                </p>
              </div>

              {/* Spatial Journey Visual Display */}
              <div className="border border-white/10 bg-[#211a17] p-6 flex flex-col items-center justify-center text-center">
                <span className="font-serif-editorial text-6xl text-primary font-normal leading-none">
                  {current.step}
                </span>
                <span className="mt-2 font-mono-tech text-xs uppercase tracking-widest text-[#8c9a72] font-semibold">
                  {current.label} STAGE
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

