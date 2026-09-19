'use client'

import { AnimatePresence, motion } from 'motion/react'
import { AlertCircle, Lightbulb, Cpu, TrendingUp } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'
import { Reveal, Section } from './primitives'

const CASE_STUDIES = [
  {
    id: 'auditool-impl',
    projectName: 'Safety & Statutory Audit Platform',
    shortDescription: 'Centralized compliance and audit management for enterprise operations.',
    challenge: 'Audit workflows were scattered across manual registers, spreadsheets, and emails, creating compliance risks and delays in report generation.',
    solution: 'Designed and deployed AUDITOOL, a centralized audit platform with digital statutory forms, evidence capture, and automated reporting.',
    technology: 'Software Development • Automation • Web Systems',
    result: 'Standardized compliance records, eliminated paper delays, and established clear audit traceability across client locations.',
  },
  {
    id: 'society-management',
    name: 'Residential Community Platform',
    shortDescription: 'Connected operations and member communication for housing societies.',
    challenge: 'Disconnected communication, manual visitor logging, and scattered complaint tracking burdened committee administrators.',
    solution: 'Engineered a unified Society Management System integrating visitor logs, complaint tracking, amenity scheduling, and administrative communications.',
    technology: 'Software Development • Digital Platforms • Mobile Web',
    result: 'Simplified daily community administration, improved resident response times, and automated operational record-keeping.',
  },
  {
    id: 'industrial-monitoring',
    name: 'Factory Sensor & Telemetry Integration',
    shortDescription: 'Real-time industrial machine monitoring and alert automation.',
    challenge: 'Unplanned machinery downtime went undetected until critical failures halted production line operations.',
    solution: 'Deployed IoT edge sensors connected to a real-time software dashboard to monitor temperature, vibration, and machine runtime metrics.',
    technology: 'IoT Solutions • Embedded Sensors • Software',
    result: 'Enabled predictive maintenance alerts and continuous operational monitoring without human intervention.',
  },
]

export function Projects() {
  const [active, setActive] = useState(0)

  const handleNextProject = () => {
    setActive((prev) => (prev + 1) % CASE_STUDIES.length)
  }

  const p = CASE_STUDIES[active]

  return (
    <Section id="projects" index="08" eyebrow="Projects / Case Studies">
      <div className="max-w-3xl">
        <Reveal>
          <h2 className="font-serif-editorial text-3xl sm:text-5xl md:text-6xl font-normal leading-[1.02] tracking-tight text-foreground">
            From Ideas to{' '}
            <span className="text-primary italic font-serif-editorial">Real-World Solutions.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-3 font-sans text-sm sm:text-base leading-relaxed text-muted-foreground">
            Explore how PECSA translates complex operational challenges into dependable software, AI, IoT, and automation systems.
          </p>
        </Reveal>
      </div>

      {/* Case Study Card Showcase */}
      <Reveal delay={0.15}>
        <div className="mt-5 border border-white/10 bg-[#2b211d] p-5 sm:p-8 relative shadow-2xl">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-5">
            <span className="font-mono-tech text-xs uppercase tracking-widest text-[#8c9a72] font-bold">
              CASE STUDY [{active + 1} / 03]
            </span>
            <span className="font-mono-tech text-xs text-primary font-semibold">
              FEATURED SOLUTION
            </span>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-start"
            >
              {/* Left Column: Overview */}
              <div>
                <span className="font-mono-tech text-xs uppercase tracking-widest text-primary font-semibold block mb-1">
                  {p.technology}
                </span>
                <h3 className="font-serif-editorial text-2xl sm:text-4xl font-normal text-foreground">
                  {p.projectName || p.name}
                </h3>
                <p className="mt-2 font-sans text-sm sm:text-base leading-relaxed text-foreground/90 italic">
                  "{p.shortDescription}"
                </p>

                <div className="mt-6">
                  <Link
                    href="/projects"
                    className="inline-flex items-center gap-2 border border-primary bg-primary px-6 py-2.5 font-mono-tech text-xs uppercase tracking-widest text-white hover:bg-primary/90 transition-all font-semibold"
                  >
                    <span>View Case Study</span>
                    <span className="text-white">→</span>
                  </Link>
                </div>
              </div>

              {/* Right Column: Recommended Structured Card Sections */}
              <div className="space-y-3">
                <div className="border border-white/10 bg-[#211a17] p-3.5">
                  <div className="flex items-center gap-2 text-primary mb-1">
                    <AlertCircle className="h-4 w-4" />
                    <span className="font-mono-tech text-xs uppercase tracking-widest font-semibold">
                      Challenge
                    </span>
                  </div>
                  <p className="font-sans text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {p.challenge}
                  </p>
                </div>

                <div className="border border-white/10 bg-[#211a17] p-3.5">
                  <div className="flex items-center gap-2 text-primary mb-1">
                    <Lightbulb className="h-4 w-4" />
                    <span className="font-mono-tech text-xs uppercase tracking-widest font-semibold">
                      Solution
                    </span>
                  </div>
                  <p className="font-sans text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {p.solution}
                  </p>
                </div>

                <div className="border border-white/10 bg-[#211a17] p-3.5">
                  <div className="flex items-center gap-2 text-primary mb-1">
                    <Cpu className="h-4 w-4" />
                    <span className="font-mono-tech text-xs uppercase tracking-widest font-semibold">
                      Technology
                    </span>
                  </div>
                  <p className="font-sans text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {p.technology}
                  </p>
                </div>

                <div className="border border-white/10 bg-[#211a17] p-3.5">
                  <div className="flex items-center gap-2 text-primary mb-1">
                    <TrendingUp className="h-4 w-4" />
                    <span className="font-mono-tech text-xs uppercase tracking-widest font-semibold">
                      Result
                    </span>
                  </div>
                  <p className="font-sans text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {p.result}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Arrow Control */}
          <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
            <span className="font-mono-tech text-xs text-white/40 uppercase tracking-widest hidden sm:inline-block">
              Click arrow to view next case study →
            </span>

            <button
              type="button"
              onClick={handleNextProject}
              className="group flex items-center gap-3 border border-primary bg-primary px-7 py-3 font-mono-tech text-xs uppercase tracking-widest text-white hover:bg-primary/90 transition-all cursor-pointer ml-auto"
              aria-label="View next case study"
            >
              <span>NEXT →</span>
            </button>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}

