'use client'

import { AnimatePresence, motion } from 'motion/react'
import { Code2, Cpu, Workflow, Network } from 'lucide-react'
import { useState } from 'react'
import { Reveal, Section } from './primitives'

const EXPERTISE_DISCIPLINES = [
  {
    id: '01',
    key: 'SOFTWARE',
    title: 'SOFTWARE DEVELOPMENT & DIGITAL SURFACES',
    icon: Code2,
    tagline: 'Custom platforms, web and internal systems built for real operations.',
    summary: 'The foundation of most solutions — enterprise platforms, internal portals, APIs, and scalable web services engineered for speed, security, and high reliability.',
    applications: ['Enterprise platforms', 'Internal tools & portals', 'APIs & integrations', 'SaaS products & digital UX'],
    tech: ['TypeScript', 'React', 'Next.js', 'Node.js', 'REST & GraphQL APIs', 'Cloud hosting'],
  },
  {
    id: '02',
    key: 'INTELLIGENCE',
    title: 'AI & INTELLIGENT LOGIC',
    icon: Cpu,
    tagline: 'Applied intelligence that supports decisions and automates judgement.',
    summary: 'How we add intelligence — from machine learning models to language model copilots — always anchored on a concrete business decision or operational bottleneck.',
    applications: ['Document & data understanding', 'Prediction & classification', 'Assistants & copilots', 'Computer vision'],
    tech: ['Python', 'Machine learning models', 'LLMs', 'Data pipelines', 'Inference APIs'],
  },
  {
    id: '03',
    key: 'AUTOMATION',
    title: 'WORKFLOW & PROCESS ORCHESTRATION',
    icon: Workflow,
    tagline: 'Removing repetitive, manual work from day-to-day operations.',
    summary: 'Connecting systems, orchestrating multi-step workflows, and reacting to operational events without human intervention.',
    applications: ['Workflow automation', 'Process orchestration', 'Reporting & alerts', 'System-to-system flows'],
    tech: ['Workflow engines', 'Event pipelines', 'Schedulers', 'Integration connectors', 'Rules engines'],
  },
  {
    id: '04',
    key: 'PHYSICAL SYSTEMS',
    title: 'IOT SENSORS & ROBOTICS CONTROL',
    icon: Network,
    tagline: 'Connecting the physical world to software dashboards & control systems.',
    summary: 'Where software meets physical machinery — capturing real-time telemetry from sensors and sending control signals to physical automation and robotics.',
    applications: ['Sensor networks', 'Remote monitoring', 'Physical automation', 'Industrial control systems'],
    tech: ['IoT gateways', 'Edge compute', 'Sensors & actuation', 'Controllers', 'Time-series data'],
  },
]

export function Expertise() {
  const [active, setActive] = useState(0)

  const handleNextDiscipline = () => {
    setActive((prev) => (prev + 1) % EXPERTISE_DISCIPLINES.length)
  }

  const current = EXPERTISE_DISCIPLINES[active]
  const Icon = current.icon

  return (
    <Section id="expertise" index="02" eyebrow="Our Expertise">
      <Reveal>
        <h2 className="font-serif-editorial text-3xl sm:text-5xl md:text-6xl font-normal leading-[1.02] tracking-tight text-foreground max-w-5xl">
          ONE PROBLEM.{' '}
          <span className="text-primary italic font-serif-editorial">
            MANY WAYS TO ENGINEER THE ANSWER.
          </span>
        </h2>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="mt-1.5 sm:mt-2 max-w-2xl font-sans text-xs sm:text-sm leading-relaxed text-muted-foreground">
          Our capabilities are not isolated services — they interconnect. A
          single solution might combine software, AI and automation, or link IoT
          sensors to robotics on a factory floor. Use the arrow control to transition between capabilities.
        </p>
      </Reveal>

      {/* ONE IMMERSIVE CAPABILITY EXPLORER (HIGH VIEWPORT POSITIONING) */}
      <Reveal delay={0.15}>
        <div className="mt-3 sm:mt-4 border border-white/10 bg-[#2b211d] p-4 sm:p-5 md:p-6 relative shadow-2xl">
          {/* Active Capability Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-2.5 mb-3">
            <div className="flex items-center gap-2.5">
              <span className="flex h-7 w-7 items-center justify-center border border-primary bg-primary/10 text-primary">
                <Icon className="h-3.5 w-3.5" />
              </span>
              <div>
                <span className="font-mono-tech text-xs uppercase tracking-widest text-[#8c9a72] font-bold">
                  CAPABILITY [{current.id} / 04]
                </span>
                <span className="font-mono-tech text-xs text-white/40 block mt-0.5 font-medium">
                  {current.key}
                </span>
              </div>
            </div>

            {/* Progress Bar Dots */}
            <div className="flex items-center gap-2 font-mono-tech text-xs text-muted-foreground">
              {EXPERTISE_DISCIPLINES.map((d, index) => (
                <button
                  key={d.key}
                  type="button"
                  onClick={() => setActive(index)}
                  className={`h-1.5 transition-all cursor-pointer ${
                    active === index ? 'w-8 bg-primary' : 'w-2 bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Jump to ${d.key}`}
                />
              ))}
            </div>
          </div>

          {/* Morphing Capability Canvas */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current.key}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="grid gap-4 sm:gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-start"
            >
              <div>
                <span className="font-mono-tech text-xs uppercase tracking-widest text-muted-foreground block mb-1 font-medium">
                  {current.tagline}
                </span>
                <h3 className="font-serif-editorial text-2xl sm:text-3xl font-normal text-foreground leading-tight">
                  {current.title}
                </h3>
                <p className="mt-2 font-sans text-xs sm:text-sm leading-relaxed text-muted-foreground max-w-xl">
                  {current.summary}
                </p>
              </div>

              {/* Connected Applications & Technologies */}
              <div className="border-t lg:border-t-0 lg:border-l border-white/10 pt-3 lg:pt-0 lg:pl-5">
                <h4 className="font-mono-tech text-xs font-semibold uppercase tracking-widest text-[#8c9a72] mb-1.5">
                  Core System Applications
                </h4>
                <ul className="space-y-1 font-sans text-xs text-muted-foreground mb-3">
                  {current.applications.map((app) => (
                    <li key={app} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 bg-primary" />
                      <span className="text-foreground/90">{app}</span>
                    </li>
                  ))}
                </ul>

                <h4 className="font-mono-tech text-xs font-semibold uppercase tracking-widest text-[#8c9a72] mb-1.5">
                  Connected Technologies
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {current.tech.map((t) => (
                    <span
                      key={t}
                      className="border border-white/10 bg-[#211a17] px-2.5 py-0.5 font-mono-tech text-xs text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Simple Burnt Copper Arrow Control labelled NEXT -> */}
          <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
            <span className="font-mono-tech text-xs text-white/40 uppercase tracking-widest hidden sm:inline-block">
              Click arrow to transform capability →
            </span>

            <button
              type="button"
              onClick={handleNextDiscipline}
              className="group flex items-center gap-3 border border-primary bg-primary px-6 py-2.5 font-mono-tech text-xs uppercase tracking-widest text-white hover:bg-primary/90 transition-all cursor-pointer ml-auto"
              aria-label="Advance to next capability"
            >
              <span>NEXT →</span>
            </button>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
