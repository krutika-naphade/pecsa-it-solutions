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
  const cat = CATEGORIES[active]
  const Icon = cat.icon

  return (
    <Section id="tech-stack" index="10" eyebrow="Technology Stack">
      <Reveal>
        <SectionTitle>
          The tools behind the <span className="text-primary">solutions</span>
        </SectionTitle>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">
          Our stack is chosen to fit problems, not the other way around. Explore
          each category to see the kinds of technologies we work with and how
          they support the solutions we build.
        </p>
      </Reveal>

      {/* Category ecosystem */}
      <Reveal delay={0.15}>
        <div className="mt-10 flex flex-wrap gap-2.5">
          {CATEGORIES.map((c, i) => {
            const CIcon = c.icon
            const selected = active === i
            return (
              <button
                key={c.name}
                type="button"
                onClick={() => setActive(i)}
                aria-pressed={selected}
                className={`flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-medium transition-all ${
                  selected
                    ? 'border-primary/60 bg-primary/15 text-foreground glow-ring'
                    : 'border-border bg-card/40 text-muted-foreground hover:border-primary/40 hover:text-foreground'
                }`}
              >
                <CIcon className="h-4 w-4" />
                {c.name}
              </button>
            )
          })}
        </div>
      </Reveal>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.4 }}
          className="mt-8 grid gap-8 rounded-2xl border border-border bg-card/50 p-6 backdrop-blur sm:p-8 lg:grid-cols-[1fr_1.2fr] lg:gap-12"
        >
          <div>
            <div className="flex items-center gap-4">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                <Icon className="h-7 w-7" />
              </span>
              <h3 className="font-display text-2xl font-semibold sm:text-3xl">{cat.name}</h3>
            </div>
            <p className="mt-5 leading-relaxed text-muted-foreground">{cat.how}</p>
          </div>

          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-primary/90">
              Technologies we work with
            </p>
            <div className="flex flex-wrap gap-2.5">
              {cat.tech.map((t, i) => (
                <motion.span
                  key={t}
                  initial={{ opacity: 0, scale: 0.9, y: 8 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                  className="rounded-xl border border-border bg-background/50 px-4 py-2.5 text-sm text-foreground/90"
                >
                  {t}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </Section>
  )
}
