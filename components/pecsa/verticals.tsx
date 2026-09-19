'use client'

import { AnimatePresence, motion } from 'motion/react'
import { Factory, Landmark, GraduationCap, HeartPulse, Home, Rocket } from 'lucide-react'
import { useState } from 'react'
import { Reveal, Section } from './primitives'

const INDUSTRIES_LIST = [
  {
    id: '01',
    icon: Factory,
    name: 'Manufacturing',
    capabilities: ['Automation', 'IoT', 'Monitoring', 'Software'],
    description: 'Build smarter and more connected operations.',
  },
  {
    id: '02',
    icon: Landmark,
    name: 'Architecture & Real Estate',
    capabilities: ['Websites', 'Digital Portfolios', 'Lead Generation', 'Custom Platforms'],
    description: 'Turn your expertise into a powerful digital presence.',
  },
  {
    id: '03',
    icon: GraduationCap,
    name: 'Education',
    capabilities: ['Platforms', 'Automation', 'AI', 'Management Systems'],
    description: 'Create better digital learning and management experiences.',
  },
  {
    id: '04',
    icon: HeartPulse,
    name: 'Healthcare',
    capabilities: ['Software', 'Automation', 'Digital Platforms'],
    description: 'Improve workflows and simplify operations.',
  },
  {
    id: '05',
    icon: Home,
    name: 'Residential Communities',
    capabilities: ['Society Management', 'Visitor Management', 'Communication'],
    description: 'Make community management more connected and efficient.',
  },
  {
    id: '06',
    icon: Rocket,
    name: 'SMEs & Startups',
    capabilities: ['MVP', 'SaaS', 'Software', 'AI', 'Websites'],
    description: 'Turn ideas into scalable technology products.',
  },
]

export function Verticals() {
  const [active, setActive] = useState(0)

  const handleNextVertical = () => {
    setActive((prev) => (prev + 1) % INDUSTRIES_LIST.length)
  }

  const v = INDUSTRIES_LIST[active]
  const Icon = v.icon

  return (
    <Section id="verticals" index="06" eyebrow="Industries">
      <Reveal>
        <h2 className="font-serif-editorial text-3xl sm:text-5xl md:text-6xl font-normal leading-[1.02] tracking-tight text-foreground">
          Technology Adapted to{' '}
          <span className="text-primary italic font-serif-editorial">Your Industry.</span>
        </h2>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="mt-3 max-w-2xl font-sans text-sm sm:text-base leading-relaxed text-muted-foreground">
          We adapt software, AI, automation, IoT, and robotics to solve sector-specific operational bottlenecks and unlock business growth.
        </p>
      </Reveal>

      {/* SINGLE CLEAN INTERACTIVE SECTOR SHOWCASE */}
      <Reveal delay={0.15}>
        <div className="mt-6 border border-white/10 bg-[#2b211d] p-6 sm:p-8 md:p-10 relative shadow-2xl">
          {/* Header Progress Bar */}
          <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
            <span className="font-mono-tech text-xs uppercase tracking-widest text-[#8c9a72] font-bold">
              INDUSTRY SECTOR [{v.id} / 06]
            </span>

            {/* Step Indicators */}
            <div className="flex items-center gap-1.5">
              {INDUSTRIES_LIST.map((vert, index) => (
                <button
                  key={vert.name}
                  type="button"
                  onClick={() => setActive(index)}
                  className={`h-1.5 transition-all cursor-pointer ${
                    active === index ? 'w-6 bg-primary' : 'w-2 bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Jump to ${vert.name}`}
                />
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={v.name}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start min-h-[160px]"
            >
              {/* Left Column: Sector Name & Statement */}
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex h-9 w-9 items-center justify-center border border-primary bg-primary/10 text-primary">
                    <Icon className="h-4.5 w-4.5" />
                  </span>
                  <div>
                    <span className="font-mono-tech text-[10px] uppercase tracking-widest text-primary font-semibold block">
                      SECTOR {v.id}
                    </span>
                    <h3 className="font-serif-editorial text-3xl sm:text-4xl font-normal text-foreground">
                      {v.name}
                    </h3>
                  </div>
                </div>

                <p className="mt-4 font-sans text-base sm:text-lg leading-relaxed text-muted-foreground max-w-xl">
                  {v.description}
                </p>
              </div>

              {/* Right Column: Documented Solution Capabilities */}
              <div className="border-t lg:border-t-0 lg:border-l border-white/10 pt-6 lg:pt-0 lg:pl-8">
                <h4 className="font-mono-tech text-xs font-semibold uppercase tracking-widest text-[#8c9a72] mb-4">
                  Documented Capability Areas
                </h4>
                <div className="grid gap-2.5 sm:grid-cols-2">
                  {v.capabilities.map((cap, idx) => (
                    <div
                      key={cap}
                      className="border border-white/15 bg-[#211a17] p-3 flex items-center justify-between"
                    >
                      <span className="font-sans text-xs sm:text-sm text-foreground/90 font-medium">
                        {cap}
                      </span>
                      <span className="font-mono-tech text-[10px] text-primary font-bold">
                        0{idx + 1}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls Footer */}
          <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
            <span className="font-mono-tech text-xs text-white/40 uppercase tracking-widest hidden sm:inline-block">
              Click button to cycle next sector →
            </span>

            <button
              type="button"
              onClick={handleNextVertical}
              className="group flex items-center gap-3 border border-primary bg-primary px-7 py-3 font-mono-tech text-xs uppercase tracking-widest text-white hover:bg-primary/90 transition-all cursor-pointer ml-auto font-semibold"
              aria-label="Cycle to next sector"
            >
              <span>NEXT SECTOR →</span>
            </button>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
