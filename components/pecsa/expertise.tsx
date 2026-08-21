'use client'

import { AnimatePresence, motion } from 'motion/react'
import {
  Bot,
  Code2,
  Cpu,
  Globe,
  Network,
  Workflow,
} from 'lucide-react'
import { useState } from 'react'
import { Reveal, Section, SectionTitle } from './primitives'

const CAPS = [
  {
    icon: Code2,
    title: 'Software Development',
    summary: 'Custom platforms, web and internal systems built for real operations.',
    applications: ['Enterprise platforms', 'Internal tools & portals', 'APIs & integrations', 'SaaS products'],
    tech: ['Web apps', 'Backend services', 'Databases', 'Cloud'],
  },
  {
    icon: Cpu,
    title: 'AI Solutions',
    summary: 'Applied intelligence that supports decisions and automates judgement.',
    applications: ['Document & data understanding', 'Prediction & classification', 'Assistants & copilots', 'Computer vision'],
    tech: ['ML models', 'LLMs', 'Data pipelines', 'Inference APIs'],
  },
  {
    icon: Workflow,
    title: 'Automation',
    summary: 'Removing repetitive, manual work from day-to-day operations.',
    applications: ['Workflow automation', 'Process orchestration', 'Reporting & alerts', 'System-to-system flows'],
    tech: ['Event pipelines', 'Schedulers', 'Integrations', 'Rules engines'],
  },
  {
    icon: Network,
    title: 'IoT Solutions',
    summary: 'Connecting the physical world to software and dashboards.',
    applications: ['Sensor networks', 'Remote monitoring', 'Telemetry dashboards', 'Edge data capture'],
    tech: ['Devices & gateways', 'Edge compute', 'Time-series data', 'Dashboards'],
  },
  {
    icon: Bot,
    title: 'Robotics',
    summary: 'Bringing automation into physical space and industrial systems.',
    applications: ['Motion & control', 'Physical automation', 'Industrial systems', 'Autonomous behaviour'],
    tech: ['Controllers', 'Sensors', 'Actuation', 'Control software'],
  },
  {
    icon: Globe,
    title: 'Digital Solutions',
    summary: 'The digital surfaces and experiences that carry the product.',
    applications: ['Digital products', 'Portals & experiences', 'Interfaces & UX', 'Digital operations'],
    tech: ['Frontend', 'Design systems', 'Analytics', 'Hosting'],
  },
]

export function Expertise() {
  const [active, setActive] = useState(0)
  const cap = CAPS[active]
  const Icon = cap.icon

  // radial positions for the node ring
  const R = 42 // percentage radius
  const nodes = CAPS.map((_, i) => {
    const angle = (i / CAPS.length) * Math.PI * 2 - Math.PI / 2
    return {
      x: 50 + Math.cos(angle) * R,
      y: 50 + Math.sin(angle) * R,
    }
  })

  return (
    <Section id="expertise" index="03" eyebrow="Our Expertise">
      <Reveal>
        <SectionTitle>
          One connected system of{' '}
          <span className="text-primary">capabilities</span>
        </SectionTitle>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">
          Our capabilities are not isolated services — they interconnect. A
          single solution might combine software, AI and automation, or link IoT
          sensors to robotics on a factory floor. Select a capability to explore
          what it covers and how it connects to the rest of the system.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1fr] lg:gap-12">
        {/* Interactive node ecosystem */}
        <Reveal className="order-2 lg:order-1">
          <div className="relative mx-auto aspect-square w-full max-w-[440px]">
            <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
              {nodes.map((n, i) => (
                <motion.line
                  key={i}
                  x1="50"
                  y1="50"
                  x2={n.x}
                  y2={n.y}
                  stroke="oklch(0.72 0.17 240)"
                  strokeWidth={active === i ? 0.7 : 0.3}
                  strokeOpacity={active === i ? 0.8 : 0.2}
                  animate={{ strokeOpacity: active === i ? 0.8 : 0.2 }}
                  transition={{ duration: 0.4 }}
                />
              ))}
            </svg>

            {/* center hub */}
            <div className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-2xl border border-primary/40 bg-card/80 backdrop-blur">
              <span className="font-display text-xs font-bold text-primary">PECSA</span>
              <span className="text-[9px] text-muted-foreground">system</span>
            </div>

            {/* nodes */}
            {CAPS.map((c, i) => {
              const NodeIcon = c.icon
              const selected = active === i
              return (
                <button
                  key={c.title}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-pressed={selected}
                  aria-label={c.title}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${nodes[i].x}%`, top: `${nodes[i].y}%` }}
                >
                  <motion.span
                    animate={{ scale: selected ? 1.15 : 1 }}
                    className={`flex h-13 w-13 items-center justify-center rounded-xl border transition-colors ${
                      selected
                        ? 'border-primary/60 bg-primary/20 text-primary glow-ring'
                        : 'border-border bg-card/70 text-muted-foreground hover:border-primary/40 hover:text-foreground'
                    }`}
                  >
                    <NodeIcon className="h-5 w-5" />
                  </motion.span>
                </button>
              )
            })}
          </div>
        </Reveal>

        {/* Detail panel */}
        <div className="order-1 lg:order-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
              className="rounded-2xl border border-border bg-card/50 p-6 backdrop-blur sm:p-8"
            >
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="font-display text-2xl font-semibold">{cap.title}</h3>
              </div>
              <p className="mt-4 leading-relaxed text-muted-foreground">{cap.summary}</p>

              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <div>
                  <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-primary/90">
                    Applications
                  </p>
                  <ul className="space-y-2">
                    {cap.applications.map((a) => (
                      <li key={a} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-primary/90">
                    Connected technologies
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {cap.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-border bg-background/50 px-3 py-1 text-xs text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-4 flex flex-wrap gap-2">
            {CAPS.map((c, i) => (
              <button
                key={c.title}
                type="button"
                onClick={() => setActive(i)}
                className={`rounded-full px-3 py-1.5 text-xs transition-colors ${
                  active === i
                    ? 'bg-primary text-primary-foreground'
                    : 'border border-border text-muted-foreground hover:text-foreground'
                }`}
              >
                {c.title}
              </button>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
