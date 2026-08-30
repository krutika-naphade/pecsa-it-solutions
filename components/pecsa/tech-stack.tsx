'use client'

import { AnimatePresence, motion } from 'motion/react'
import { Code2, Cpu, Cloud, Database, Workflow, Network, Bot } from 'lucide-react'
import { useState } from 'react'
import { Reveal, Section, SectionTitle } from './primitives'

const CATEGORIES = [
  {
    icon: Code2,
    name: 'Development',
    how: 'The foundation of most solutions — the languages, frameworks and tooling we use to build reliable web platforms, services and internal systems.',
    tech: ['TypeScript', 'React', 'Next.js', 'Node.js', 'REST & GraphQL APIs', 'Testing tooling'],
  },
  {
    icon: Cpu,
    name: 'AI',
    how: 'How we add intelligence — from classical machine learning to modern language models — always applied to a concrete business decision or task.',
    tech: ['Python', 'Machine learning models', 'LLMs', 'Computer vision', 'Data pipelines', 'Inference APIs'],
  },
  {
    icon: Cloud,
    name: 'Cloud',
    how: 'Where solutions run and scale. Cloud infrastructure gives us reliable hosting, elasticity and the operational tooling to deploy and monitor with confidence.',
    tech: ['Managed hosting', 'Containers', 'Serverless', 'CI/CD', 'Monitoring', 'Object storage'],
  },
  {
    icon: Database,
    name: 'Databases',
    how: 'Where data lives. We choose data stores that fit the shape of the problem, keeping information consistent, queryable and secure.',
    tech: ['PostgreSQL', 'Relational databases', 'Document stores', 'Time-series data', 'Caching', 'Search'],
  },
  {
    icon: Workflow,
    name: 'Automation',
    how: 'The glue that removes manual work — connecting systems, orchestrating processes and reacting to events without human intervention.',
    tech: ['Workflow engines', 'Event pipelines', 'Schedulers', 'Integration connectors', 'Rules engines'],
  },
  {
    icon: Network,
    name: 'IoT',
    how: 'How we bridge the physical and digital worlds — capturing data from devices and sensors and bringing it into software in real time.',
    tech: ['Sensors & devices', 'Gateways', 'Edge compute', 'Telemetry protocols', 'Dashboards'],
  },
  {
    icon: Bot,
    name: 'Robotics',
    how: 'Where automation becomes physical — the controllers, sensing and software that let machines act reliably in the real world.',
    tech: ['Controllers', 'Actuation', 'Sensing', 'Control software', 'Safety systems'],
  },
]

export function TechStack() {
  const [active, setActive] = useState(0)

  const handleNextCategory = () => {
    setActive((prev) => (prev + 1) % CATEGORIES.length)
  }

  const cat = CATEGORIES[active]
  const Icon = cat.icon

  return (
    <Section id="tech-stack" index="09" eyebrow="Technology Stack">
      <Reveal>
        <SectionTitle>
          The tools behind the <span className="text-primary italic font-serif-editorial">solutions</span>
        </SectionTitle>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="mt-2.5 max-w-2xl font-sans text-sm sm:text-base leading-relaxed text-muted-foreground">
          Our stack is chosen to fit problems, not the other way around. Use the arrow control to explore each living technology ecosystem category.
        </p>
      </Reveal>

      {/* DYNAMIC TECHNOLOGY ECOSYSTEM (COMPACT VERTICAL RHYTHM) */}
      <Reveal delay={0.15}>
        <div className="mt-5 border border-white/10 bg-[#2b211d] p-5 sm:p-8 relative shadow-2xl">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-5">
            <span className="font-mono-tech text-xs uppercase tracking-widest text-[#8c9a72] font-bold">
              TECHNICAL ECOSYSTEM [0{active + 1} / 07]
            </span>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {CATEGORIES.map((c, index) => (
                <button
                  key={c.name}
                  type="button"
                  onClick={() => setActive(index)}
                  className={`h-1.5 transition-all cursor-pointer ${
                    active === index ? 'w-6 bg-primary' : 'w-2 bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Jump to ${c.name}`}
                />
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-start min-h-[160px]"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex h-10 w-10 items-center justify-center border border-primary/30 bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <span className="font-mono-tech text-[10px] uppercase tracking-widest text-[#8c9a72] font-semibold">
                      CATEGORY 0{active + 1}
                    </span>
                    <h3 className="font-serif-editorial text-2xl sm:text-3xl font-normal text-foreground">
                      {cat.name}
                    </h3>
                  </div>
                </div>
                <p className="mt-3 font-sans text-xs sm:text-sm leading-relaxed text-muted-foreground max-w-xl">
                  {cat.how}
                </p>
              </div>

              {/* Technologies Reorganizing Tags */}
              <div className="border-t lg:border-t-0 lg:border-l border-white/10 pt-5 lg:pt-0 lg:pl-8">
                <h4 className="font-mono-tech text-xs font-semibold uppercase tracking-widest text-[#8c9a72] mb-3">
                  Technologies We Work With
                </h4>
                <div className="flex flex-wrap gap-2">
                  {cat.tech.map((t) => (
                    <motion.span
                      key={t}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.25 }}
                      className="border border-white/10 bg-[#211a17] px-3.5 py-2 font-mono-tech text-xs text-foreground/90 hover:border-primary transition-colors"
                    >
                      {t}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Arrow Control */}
          <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
            <span className="font-mono-tech text-xs text-white/40 uppercase tracking-widest hidden sm:inline-block">
              Click arrow to cycle ecosystem category →
            </span>

            <button
              type="button"
              onClick={handleNextCategory}
              className="group flex items-center gap-3 border border-primary bg-primary px-7 py-3 font-mono-tech text-xs uppercase tracking-widest text-white hover:bg-primary/90 transition-all cursor-pointer ml-auto"
              aria-label="Cycle to next tech category"
            >
              <span>NEXT →</span>
            </button>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
