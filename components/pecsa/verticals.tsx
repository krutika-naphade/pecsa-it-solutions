'use client'

import { AnimatePresence, motion } from 'motion/react'
import { Building2, ClipboardCheck, Home, Factory, ArrowUpRight } from 'lucide-react'
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
  const v = VERTICALS[active]
  const Icon = v.icon

  return (
    <Section id="verticals" index="07" eyebrow="Vertical Strengths">
      <Reveal>
        <SectionTitle>
          Where we go <span className="text-primary">deep</span>
        </SectionTitle>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">
          Beyond individual capabilities, PECSA has developed real depth in a set
          of domains. Select a vertical to see how our capabilities and
          technologies come together to solve its specific problems.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-6 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-10">
        {/* Selector */}
        <Reveal>
          <div className="flex flex-col gap-2">
            {VERTICALS.map((vert, i) => {
              const VIcon = vert.icon
              const selected = active === i
              return (
                <button
                  key={vert.name}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-pressed={selected}
                  className={`group flex items-center gap-3 rounded-xl border px-4 py-4 text-left transition-all ${
                    selected
                      ? 'border-primary/60 bg-primary/10 glow-ring'
                      : 'border-border bg-card/40 hover:border-primary/30'
                  }`}
                >
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition-colors ${
                      selected ? 'bg-primary/20 text-primary' : 'bg-secondary text-muted-foreground'
                    }`}
                  >
                    <VIcon className="h-5 w-5" />
                  </span>
                  <span className={`text-sm font-medium ${selected ? 'text-foreground' : 'text-muted-foreground'}`}>
                    {vert.name}
                  </span>
                  <ArrowUpRight
                    className={`ml-auto h-4 w-4 shrink-0 text-primary transition-opacity ${
                      selected ? 'opacity-100' : 'opacity-0 group-hover:opacity-60'
                    }`}
                  />
                </button>
              )
            })}
          </div>
        </Reveal>

        {/* Detail */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4 }}
            className="relative overflow-hidden rounded-2xl border border-border bg-card/50 p-6 backdrop-blur sm:p-8"
          >
            <div className="pointer-events-none absolute right-0 top-0 h-48 w-48 bg-radial-glow" />
            <div className="flex items-center gap-4">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                <Icon className="h-7 w-7" />
              </span>
              <h3 className="font-display text-2xl font-semibold sm:text-3xl">{v.name}</h3>
            </div>
            <p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">{v.body}</p>

            <div className="mt-8 grid gap-8 sm:grid-cols-2">
              <div>
                <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-primary/90">
                  Relevant capabilities
                </p>
                <ul className="space-y-2.5">
                  {v.capabilities.map((c, i) => (
                    <motion.li
                      key={c}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.06 }}
                      className="flex items-center gap-2.5 text-sm text-muted-foreground"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {c}
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-primary/90">
                  Connected technology
                </p>
                <div className="flex flex-wrap gap-2">
                  {v.tech.map((t, i) => (
                    <motion.span
                      key={t}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.15 + i * 0.06 }}
                      className="rounded-full border border-border bg-background/50 px-3 py-1.5 text-xs text-muted-foreground"
                    >
                      {t}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </Section>
  )
}
