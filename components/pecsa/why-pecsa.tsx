'use client'

import { AnimatePresence, motion } from 'motion/react'
import { useState } from 'react'
import { Reveal, Section } from './primitives'

const POINTS = [
  {
    step: '01',
    title: 'Practical Technology',
    body: 'We focus on solutions that create real business value.',
  },
  {
    step: '02',
    title: 'Business-Centric Approach',
    body: 'We understand your workflow before designing the technology.',
  },
  {
    step: '03',
    title: 'Scalable Architecture',
    body: 'We build solutions that can evolve with your business.',
  },
  {
    step: '04',
    title: 'Multiple Technology Capabilities',
    body: 'Software, AI, automation, IoT, robotics, and digital solutions under one technology partner.',
  },
  {
    step: '05',
    title: 'Long-Term Partnership',
    body: "We don't disappear after deployment. We help you improve and scale.",
  },
]

export function WhyPecsa() {
  const [active, setActive] = useState(0)

  const handleNextPoint = () => {
    setActive((prev) => (prev + 1) % POINTS.length)
  }

  const p = POINTS[active]

  return (
    <Section id="why-pecsa" index="07" eyebrow="Why PECSA">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <Reveal>
            <h2 className="font-serif-editorial text-3xl sm:text-5xl font-normal leading-[1.02] tracking-tight text-foreground">
              Built for Businesses That Want to{' '}
              <span className="text-primary italic font-serif-editorial">Move Forward.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 font-sans text-sm sm:text-base leading-relaxed text-muted-foreground max-w-xl">
              We approach every technology partnership with a commitment to real business outcomes, clarity, and long-term reliability.
            </p>
          </Reveal>
        </div>

        {/* Spatial Typography Transformation Canvas */}
        <div>
          <Reveal delay={0.15}>
            <div className="border border-white/10 bg-[#2b211d] p-5 sm:p-8 relative shadow-2xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                <span className="font-mono-tech text-xs uppercase tracking-widest text-[#8c9a72] font-bold">
                  CORE PILLAR [0{active + 1} / 05]
                </span>
                <span className="font-mono-tech text-xs text-primary font-semibold">
                  PECSA VALUE
                </span>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={p.step}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="min-h-[140px]"
                >
                  <span className="font-serif-editorial text-5xl sm:text-6xl text-primary font-normal leading-none block mb-3">
                    {p.step}
                  </span>
                  <h3 className="font-serif-editorial text-2xl sm:text-3xl font-normal text-foreground mb-3">
                    {p.title}
                  </h3>
                  <p className="font-sans text-sm sm:text-base leading-relaxed text-muted-foreground">
                    {p.body}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Arrow Control */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-1.5 font-mono-tech text-xs">
                  {POINTS.map((item, idx) => (
                    <span
                      key={item.step}
                      className={`h-1.5 transition-all ${
                        active === idx ? 'w-6 bg-primary' : 'w-2 bg-white/20'
                      }`}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={handleNextPoint}
                  className="group flex items-center gap-3 border border-primary bg-primary px-6 py-2.5 font-mono-tech text-xs uppercase tracking-widest text-white hover:bg-primary/90 transition-all cursor-pointer"
                  aria-label="Reveal next differentiator"
                >
                  <span>NEXT →</span>
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}

