'use client'

import { AnimatePresence, motion } from 'motion/react'
import { Building2, ClipboardCheck, Home, Factory } from 'lucide-react'
import { useState } from 'react'
import { Reveal, Section, SectionTitle } from './primitives'

const VERTICALS = [
  {
    icon: Building2,
    name: 'Enterprise & Operations',
    body: 'We help organisations digitise and streamline the operational backbone — the internal processes, tools and data that keep a business running. The goal is fewer manual steps, cleaner data and clearer visibility across day-to-day work.',
    capabilities: ['Custom internal platforms', 'Process automation', 'Operational dashboards', 'System integration'],
    tech: ['Web applications', 'Workflow engines', 'APIs', 'Databases'],
  },
  {
    icon: ClipboardCheck,
    name: 'Audit & Compliance',
    body: 'Audit and compliance work demands structure, traceability and consistency. We build systems that standardise checks, capture evidence, track findings and produce reliable records — reducing the effort and risk in staying compliant.',
    capabilities: ['Structured audits', 'Evidence & findings tracking', 'Traceable reporting', 'Role-based access'],
    tech: ['AUDITOOL', 'Secure data stores', 'Reporting engines', 'Access control'],
  },
  {
    icon: Home,
    name: 'Community & Society',
    body: 'Communities and residential societies need coordination across members, operations and communication. We build platforms that centralise these into one organised, transparent system that is easy to run and easy to trust.',
    capabilities: ['Member management', 'Operational coordination', 'Communication tools', 'Records & history'],
    tech: ['Society Management System', 'Notifications', 'Web & mobile interfaces', 'Databases'],
  },
  {
    icon: Factory,
    name: 'Industrial & Physical Systems',
    body: 'Where software meets the physical world, we connect machines, sensors and automation into monitored, controllable systems. This vertical brings IoT and robotics together with software to make physical operations smarter and more reliable.',
    capabilities: ['Sensor & telemetry systems', 'Remote monitoring', 'Physical automation', 'Control software'],
    tech: ['IoT devices', 'Edge compute', 'Robotics controllers', 'Time-series data'],
  },
]

export function Verticals() {
  const [active, setActive] = useState(0)

  const handleNextVertical = () => {
    setActive((prev) => (prev + 1) % VERTICALS.length)
  }

  const v = VERTICALS[active]
  const Icon = v.icon

  return (
    <Section id="verticals" index="06" eyebrow="Vertical Strengths">
      <Reveal>
        <SectionTitle>
          Where we go <span className="text-primary italic font-serif-editorial">deep</span>
        </SectionTitle>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="mt-2.5 max-w-2xl font-sans text-sm sm:text-base leading-relaxed text-muted-foreground">
          Beyond individual capabilities, PECSA has developed real depth in a set of domains. Use the arrow control to cycle through each vertical.
        </p>
      </Reveal>

      {/* ONE INTERACTIVE COMPOSITION (COMPACT VERTICAL RHYTHM) */}
      <Reveal delay={0.15}>
        <div className="mt-5 border border-white/10 bg-[#2b211d] p-5 sm:p-8 relative shadow-2xl">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-5">
            <span className="font-mono-tech text-xs uppercase tracking-widest text-[#8c9a72] font-bold">
              ACTIVE SECTOR [0{active + 1} / 04]
            </span>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {VERTICALS.map((vert, index) => (
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
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start min-h-[160px]"
            >
              <div>
                <div className="flex items-center gap-2.5 mb-2">
                  <span className="flex h-8 w-8 items-center justify-center border border-primary bg-primary/10 text-primary">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="font-mono-tech text-xs uppercase tracking-widest text-[#8c9a72] font-semibold">
                    SECTOR DOMAIN 0{active + 1}
                  </span>
                </div>
                <h3 className="font-serif-editorial text-2xl sm:text-4xl font-normal text-foreground">
                  {v.name}
                </h3>
                <p className="mt-3 font-sans text-xs sm:text-sm leading-relaxed text-muted-foreground max-w-xl">
                  {v.body}
                </p>
              </div>

              {/* Capabilities & Technologies */}
              <div className="border-t lg:border-t-0 lg:border-l border-white/10 pt-5 lg:pt-0 lg:pl-8">
                <h4 className="font-mono-tech text-xs font-semibold uppercase tracking-widest text-[#8c9a72] mb-3">
                  Relevant Capabilities
                </h4>
                <ul className="space-y-2 font-sans text-xs sm:text-sm text-muted-foreground mb-6">
                  {v.capabilities.map((c) => (
                    <li key={c} className="flex items-center gap-2.5">
                      <span className="h-1.5 w-1.5 bg-primary" />
                      <span className="text-foreground/90">{c}</span>
                    </li>
                  ))}
                </ul>

                <h4 className="font-mono-tech text-xs font-semibold uppercase tracking-widest text-[#8c9a72] mb-3">
                  Connected Technology
                </h4>
                <div className="flex flex-wrap gap-2">
                  {v.tech.map((t) => (
                    <span
                      key={t}
                      className="border border-white/10 bg-[#211a17] px-3 py-1 font-mono-tech text-xs text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Arrow Control */}
          <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
            <span className="font-mono-tech text-xs text-white/40 uppercase tracking-widest hidden sm:inline-block">
              Click arrow to cycle sector →
            </span>

            <button
              type="button"
              onClick={handleNextVertical}
              className="group flex items-center gap-3 border border-primary bg-primary px-7 py-3 font-mono-tech text-xs uppercase tracking-widest text-white hover:bg-primary/90 transition-all cursor-pointer ml-auto"
              aria-label="Cycle to next sector"
            >
              <span>NEXT →</span>
            </button>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
