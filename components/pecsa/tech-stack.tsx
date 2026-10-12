'use client'

import { AnimatePresence, motion } from 'motion/react'
import { Code2, Cpu, Cloud, Database, Workflow, Network, Bot, ArrowRight } from 'lucide-react'
import { useState } from 'react'
import { Reveal, Section } from './primitives'

const CATEGORIES = [
  {
    id: '01',
    icon: Code2,
    name: 'Development',
    how: 'Core languages, frameworks, and engines used for reliable software systems.',
    tech: ['React', 'Next.js', 'Node.js', 'Python', 'PHP'],
  },
  {
    id: '02',
    icon: Cpu,
    name: 'AI',
    how: 'Applied machine intelligence models, language processing, and computer vision.',
    tech: ['LLMs', 'Machine Learning', 'AI Agents', 'Computer Vision'],
  },
  {
    id: '03',
    icon: Cloud,
    name: 'Cloud',
    how: 'Scalable cloud infrastructure, container orchestration, and serverless hosting.',
    tech: ['AWS', 'Azure', 'Google Cloud'],
  },
  {
    id: '04',
    icon: Database,
    name: 'Databases',
    how: 'Secure, high-performance relational and document data storage.',
    tech: ['PostgreSQL', 'MySQL', 'MongoDB'],
  },
  {
    id: '05',
    icon: Workflow,
    name: 'Automation',
    how: 'Seamless workflow orchestration, background pipelines, and API integrations.',
    tech: ['Workflow Automation', 'API Integration', 'RPA'],
  },
  {
    id: '06',
    icon: Network,
    name: 'IoT',
    how: 'Real-time device monitoring, telemetry data collection, and edge connectivity.',
    tech: ['Sensors', 'Embedded Systems', 'Cloud IoT', 'Real-Time Monitoring'],
  },
  {
    id: '07',
    icon: Bot,
    name: 'Robotics',
    how: 'Control systems, sensor arrays, and physical automation software.',
    tech: ['Embedded Systems', 'Sensors', 'Control Systems', 'Automation'],
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
        <h2 className="font-serif-editorial text-3xl sm:text-5xl md:text-6xl font-normal leading-[1.02] tracking-tight text-foreground">
          Powered by{' '}
          <span className="text-primary italic">Modern Technology.</span>
        </h2>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="mt-3 max-w-2xl font-sans text-sm sm:text-base leading-relaxed text-muted-foreground">
          We organize modern frameworks, cloud platforms, and physical systems into structured technology capabilities.
        </p>
      </Reveal>

      {/* DYNAMIC TECHNOLOGY ECOSYSTEM */}
      <Reveal delay={0.15}>
        <div className="mt-6 border border-border bg-card p-5 sm:p-8 relative shadow-lg">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-border pb-4 mb-5">
            <span className="font-mono-tech text-xs uppercase tracking-widest text-muted-sage font-bold">
              TECHNOLOGY CATEGORY [{cat.id} / 07]
            </span>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {CATEGORIES.map((c, index) => (
                <button
                  key={c.name}
                  type="button"
                  onClick={() => setActive(index)}
                  className={`h-2 transition-all cursor-pointer ${
                    active === index ? 'w-6 bg-primary' : 'w-2 bg-border hover:bg-muted-foreground'
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
              className="grid gap-6 lg:grid-cols-[1fr_1.2fr] lg:items-start min-h-[140px]"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex h-10 w-10 items-center justify-center border border-primary/30 bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <span className="font-mono-tech text-[10px] uppercase tracking-widest text-muted-sage font-semibold">
                      CATEGORY {cat.id}
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

              {/* Technologies Tags */}
              <div className="border-t lg:border-t-0 lg:border-l border-border pt-5 lg:pt-0 lg:pl-8">
                <h4 className="font-mono-tech text-xs font-semibold uppercase tracking-widest text-muted-sage mb-3">
                  {cat.name} Ecosystem
                </h4>
                <div className="flex flex-wrap gap-2">
                  {cat.tech.map((t) => (
                    <motion.span
                      key={t}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.25 }}
                      className="border border-border bg-background px-4 py-2 font-mono-tech text-xs text-foreground/90 font-medium hover:border-primary transition-colors"
                    >
                      {t}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Arrow Control */}
          <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
            <span className="font-mono-tech text-xs text-muted-foreground uppercase tracking-widest hidden sm:inline-block">
              Click arrow to cycle category →
            </span>

            <button
              type="button"
              onClick={handleNextCategory}
              className="group flex items-center gap-3 border border-primary bg-primary px-7 py-3 font-mono-tech text-xs uppercase tracking-widest text-white hover:bg-primary/90 transition-all cursor-pointer font-semibold ml-auto shadow-sm"
              aria-label="Cycle to next tech category"
            >
              <span>NEXT CATEGORY</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
