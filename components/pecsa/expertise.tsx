'use client'

import { AnimatePresence, motion } from 'motion/react'
import { Code2, Cpu, Workflow, Network, Bot, Globe } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'
import { Reveal, Section } from './primitives'

const CAPABILITIES_LIST = [
  {
    id: '01',
    key: 'SOFTWARE',
    title: 'Software Development',
    icon: Code2,
    summary: 'Custom applications and business systems designed around your workflows.',
    applications: ['Custom Web & Desktop Applications', 'Enterprise Business Systems', 'Workflow-Specific Tools', 'API & Database Integration'],
    tech: ['React', 'Next.js', 'Node.js', 'Python', 'PHP', 'PostgreSQL'],
  },
  {
    id: '02',
    key: 'AI',
    title: 'AI Solutions',
    icon: Cpu,
    summary: 'AI-powered applications and intelligent workflows that help teams work smarter.',
    applications: ['Intelligent Automation Workflows', 'LLMs & AI Agents', 'Machine Learning Models', 'Computer Vision Systems'],
    tech: ['LLMs', 'Machine Learning', 'AI Agents', 'Computer Vision', 'Python'],
  },
  {
    id: '03',
    key: 'AUTOMATION',
    title: 'Automation',
    icon: Workflow,
    summary: 'Transform repetitive processes into efficient, connected workflows.',
    applications: ['Workflow Automation', 'System & API Integration', 'Robotic Process Automation (RPA)', 'Operational Task Reduction'],
    tech: ['Workflow Automation', 'API Integration', 'RPA', 'Event Pipelines'],
  },
  {
    id: '04',
    key: 'IOT',
    title: 'IoT Solutions',
    icon: Network,
    summary: 'Connect devices, data, and software to monitor and control real-world operations.',
    applications: ['Sensor Data Collection', 'Real-Time Telemetry & Monitoring', 'Remote Asset Management', 'Cloud IoT Dashboards'],
    tech: ['Sensors', 'Embedded Systems', 'Cloud IoT', 'Real-Time Monitoring'],
  },
  {
    id: '05',
    key: 'ROBOTICS',
    title: 'Robotics',
    icon: Bot,
    summary: 'Combine hardware, software, sensors, and intelligence to automate physical processes.',
    applications: ['Hardware & Sensor Integration', 'Physical Process Automation', 'Embedded Controllers', 'Autonomous Task Systems'],
    tech: ['Embedded Systems', 'Sensors', 'Control Systems', 'Automation'],
  },
  {
    id: '06',
    key: 'DIGITAL',
    title: 'Digital Solutions',
    icon: Globe,
    summary: 'High-performance websites and digital experiences built to support business growth.',
    applications: ['High-Performance Websites', 'Web Portals & Portfolios', 'Lead Generation Platforms', 'Digital Experience UX'],
    tech: ['Next.js', 'React', 'Tailwind / Vanilla CSS', 'SEO Optimization'],
  },
]

export function Expertise() {
  const [active, setActive] = useState(0)

  const handleNextDiscipline = () => {
    setActive((prev) => (prev + 1) % CAPABILITIES_LIST.length)
  }

  const current = CAPABILITIES_LIST[active]
  const Icon = current.icon

  return (
    <Section id="expertise" index="02" eyebrow="What We Do">
      <Reveal>
        <h2 className="font-serif-editorial text-3xl sm:text-5xl md:text-6xl font-normal leading-[1.02] tracking-tight text-foreground max-w-5xl">
          One Technology Partner.{' '}
          <span className="text-primary italic font-serif-editorial">
            Multiple Possibilities.
          </span>
        </h2>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="mt-4 max-w-3xl font-sans text-base sm:text-lg leading-relaxed text-muted-foreground">
          Businesses don't always need more technology. They need the right technology.
          <br /><br />
          At PECSA, we combine multiple technology capabilities to create solutions around your actual business requirements.
        </p>
      </Reveal>

      {/* ONE IMMERSIVE CAPABILITY EXPLORER */}
      <Reveal delay={0.15}>
        <div className="mt-5 border border-white/10 bg-[#2b211d] p-5 sm:p-6 md:p-8 relative shadow-2xl">
          {/* Active Capability Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center border border-primary bg-primary/10 text-primary">
                <Icon className="h-4 w-4" />
              </span>
              <div>
                <span className="font-mono-tech text-xs uppercase tracking-widest text-[#8c9a72] font-bold">
                  CAPABILITY [{current.id} / 06]
                </span>
                <span className="font-mono-tech text-xs text-white/40 block font-medium">
                  {current.key}
                </span>
              </div>
            </div>

            {/* Progress Bar Dots */}
            <div className="flex items-center gap-1.5 font-mono-tech text-xs text-muted-foreground">
              {CAPABILITIES_LIST.map((d, index) => (
                <button
                  key={d.key}
                  type="button"
                  onClick={() => setActive(index)}
                  className={`h-1.5 transition-all cursor-pointer ${
                    active === index ? 'w-6 bg-primary' : 'w-2 bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Jump to ${d.title}`}
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
              className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-start"
            >
              <div>
                <span className="font-mono-tech text-xs uppercase tracking-widest text-primary block mb-2 font-semibold">
                  0{active + 1} — {current.title}
                </span>
                <h3 className="font-serif-editorial text-2xl sm:text-4xl font-normal text-foreground leading-tight">
                  {current.title}
                </h3>
                <p className="mt-3 font-sans text-sm sm:text-base leading-relaxed text-muted-foreground max-w-xl">
                  {current.summary}
                </p>
                <div className="mt-6">
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 border border-white/20 bg-[#211a17] px-4 py-2 font-mono-tech text-xs uppercase tracking-widest text-foreground hover:border-primary transition-colors"
                  >
                    <span>Explore Services</span>
                    <span className="text-primary">→</span>
                  </Link>
                </div>
              </div>

              {/* Connected Applications & Technologies */}
              <div className="border-t lg:border-t-0 lg:border-l border-white/10 pt-4 lg:pt-0 lg:pl-6">
                <h4 className="font-mono-tech text-xs font-semibold uppercase tracking-widest text-[#8c9a72] mb-2">
                  Key Deliverables
                </h4>
                <ul className="space-y-1.5 font-sans text-xs sm:text-sm text-muted-foreground mb-4">
                  {current.applications.map((app) => (
                    <li key={app} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 bg-primary" />
                      <span className="text-foreground/90">{app}</span>
                    </li>
                  ))}
                </ul>

                <h4 className="font-mono-tech text-xs font-semibold uppercase tracking-widest text-[#8c9a72] mb-2">
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {current.tech.map((t) => (
                    <span
                      key={t}
                      className="border border-white/10 bg-[#211a17] px-2.5 py-1 font-mono-tech text-xs text-muted-foreground"
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
              Click arrow to transition capability →
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

