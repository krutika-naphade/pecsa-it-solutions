'use client'

import { Code2, Cpu, Workflow, Network, Bot, Globe, ArrowRight, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { Reveal, Section } from './primitives'

const CAPABILITIES_LIST = [
  {
    id: '01',
    key: 'SOFTWARE',
    title: 'Software Development',
    icon: Code2,
    problem: 'Fragmented operations, disconnected spreadsheets, and rigid off-the-shelf software create administrative friction, human error, and lost operational data.',
    summary: 'Custom applications and enterprise business systems designed specifically around your operational workflows and business objectives.',
    deliverables: ['Custom Web & Desktop Applications', 'Enterprise ERP & Operations Systems', 'Workflow-Specific Tools', 'API & Database Integration'],
    tech: ['React', 'Next.js', 'Node.js', 'Python', 'PostgreSQL'],
    contextualLink: {
      text: 'Explore Proprietary Platforms (Auditool & Society Management)',
      href: '/products',
    },
  },
  {
    id: '02',
    key: 'AI',
    title: 'AI Solutions',
    icon: Cpu,
    problem: 'Teams spend hours manually categorizing data, reviewing repetitive documentation, and extracting critical operational insights from unstructured formats.',
    summary: 'Intelligent workflows and AI-powered systems that augment teams, automate classification, and accelerate business decisions.',
    deliverables: ['Intelligent Automation Workflows', 'LLMs & AI Agents', 'Machine Learning Models', 'Computer Vision Systems'],
    tech: ['LLMs', 'AI Agents', 'Machine Learning', 'Computer Vision'],
    contextualLink: {
      text: 'Inquire About AI Automation Workflows',
      href: '/contact?interest=AI%20Solutions',
    },
  },
  {
    id: '03',
    key: 'AUTOMATION',
    title: 'Automation',
    icon: Workflow,
    problem: 'Disjointed software tools force staff into manual data re-entry, delayed handoffs, and error-prone reconciliation across departments.',
    summary: 'Transform repetitive manual tasks and scattered data handoffs into reliable, connected automated pipelines.',
    deliverables: ['Workflow Automation', 'System & API Integration', 'Robotic Process Automation (RPA)', 'Operational Task Reduction'],
    tech: ['Workflow Automation', 'API Integration', 'RPA', 'Pipelines'],
    contextualLink: {
      text: 'Review Our 6-Phase Engineering Delivery Process',
      href: '/services',
    },
  },
  {
    id: '04',
    key: 'IOT',
    title: 'IoT Solutions',
    icon: Network,
    problem: 'Physical equipment and industrial assets run without real-time visibility, leading to unexpected failures, mechanical halts, and blind spots.',
    summary: 'Connect physical devices, sensors, and cloud software to monitor, alert, and manage real-world industrial assets.',
    deliverables: ['Sensor Data Collection', 'Real-Time Telemetry & Monitoring', 'Remote Asset Management', 'Cloud IoT Dashboards'],
    tech: ['Sensors', 'Embedded Systems', 'Cloud IoT', 'Telemetry'],
    contextualLink: {
      text: 'View Verified Industrial IoT Telemetry Case Study',
      href: '/projects',
    },
  },
  {
    id: '05',
    key: 'ROBOTICS',
    title: 'Robotics',
    icon: Bot,
    problem: 'Mechanical routines, physical inspection, and repetitive handling bottlenecks reduce production consistency and throughput.',
    summary: 'Combine hardware, sensors, embedded controllers, and intelligent software to automate physical and mechanical processes.',
    deliverables: ['Hardware & Sensor Integration', 'Physical Process Automation', 'Embedded Controllers', 'Autonomous Task Systems'],
    tech: ['Embedded Systems', 'Sensors', 'Control Systems'],
    contextualLink: {
      text: 'Discuss Hardware & Embedded Engineering',
      href: '/contact?interest=Robotics',
    },
  },
  {
    id: '06',
    key: 'DIGITAL',
    title: 'Digital Solutions',
    icon: Globe,
    problem: 'Generic agency web templates fail to communicate design rigor, brand depth, and technical credibility to discerning clients.',
    summary: 'High-performance websites, specialized studio portfolios, and web platforms built to support commercial growth.',
    deliverables: ['High-Performance Websites', 'Specialized Practice Portfolios', 'Lead Generation Platforms', 'Digital Experience UX'],
    tech: ['Next.js', 'React', 'Tailwind CSS', 'SEO Optimization'],
    contextualLink: {
      text: 'Explore For Architects: Portfolio Philosophy',
      href: '/for-architects/philosophy',
    },
  },
]

export function Expertise() {
  return (
    <Section id="expertise" index="03" eyebrow="What We Do">
      <div className="space-y-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="max-w-3xl">
            <Reveal>
              <h2 className="font-serif-editorial text-3xl sm:text-5xl md:text-6xl font-normal leading-[1.02] tracking-tight text-foreground">
                One Technology Partner.{' '}
                <span className="text-primary italic">Multiple Possibilities.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-4 font-sans text-base sm:text-lg leading-relaxed text-muted-foreground font-light">
                Businesses don’t always need more technology. They need the right technology. Here is a brief overview of our six core engineering disciplines, designed to solve operational bottlenecks and build scalable systems.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <Link
              href="/solutions"
              className="inline-flex items-center gap-2 border border-border bg-card px-6 py-3 font-mono-tech text-xs uppercase tracking-widest text-foreground hover:border-primary transition-colors font-semibold shadow-xs shrink-0"
            >
              <span>Explore All Solutions</span>
              <ArrowUpRight className="h-4 w-4 text-primary" />
            </Link>
          </Reveal>
        </div>

        {/* 6 Capabilities Brief Overview Grid */}
        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CAPABILITIES_LIST.map((c, i) => {
            const Icon = c.icon
            return (
              <Reveal key={c.id} delay={0.04 * i}>
                <div className="group border border-border bg-card p-5 sm:p-6 h-full flex flex-col justify-between hover:border-primary/60 transition-all shadow-xs">
                  <div>
                    <div className="flex items-center justify-between border-b border-border pb-3 mb-4 font-mono-tech text-xs">
                      <span className="text-primary font-bold">[{c.id}]</span>
                      <span className="text-muted-foreground uppercase font-semibold">{c.key}</span>
                    </div>

                    <div className="flex items-center gap-3 mb-3">
                      <span className="flex h-10 w-10 items-center justify-center border border-primary bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
                        <Icon className="h-5 w-5" />
                      </span>
                      <h3 className="font-serif-editorial text-xl sm:text-2xl font-normal text-foreground">
                        {c.title}
                      </h3>
                    </div>

                    <p className="font-sans text-xs sm:text-sm text-muted-foreground leading-relaxed font-light mb-4">
                      {c.summary}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-border flex items-center justify-between">
                    <Link
                      href="/solutions"
                      className="font-mono-tech text-xs text-primary uppercase tracking-widest font-semibold hover:underline flex items-center gap-1.5"
                    >
                      <span>Explore on Solutions</span>
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>

        {/* Specialized Practice Callout: For Architects */}
        <Reveal delay={0.2}>
          <div className="border border-border bg-card/60 p-6 sm:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6 shadow-sm">
            <div className="max-w-2xl">
              <span className="font-mono-tech text-xs uppercase tracking-widest text-primary font-bold block mb-1.5">
                SPECIALIZED DIGITAL PRACTICE // FOR ARCHITECTS
              </span>
              <h3 className="font-serif-editorial text-2xl sm:text-3xl font-normal text-foreground">
                Built Around Your Philosophy.
              </h3>
              <p className="mt-2 font-sans text-xs sm:text-sm text-muted-foreground leading-relaxed">
                We don’t build generic portfolio templates. We translate an architectural studio’s unique design thinking, material sensibilities, and spatial sequencing into an authentic digital presence.
              </p>
            </div>

            <Link
              href="/for-architects/philosophy"
              className="inline-flex items-center justify-center gap-2 border border-primary bg-primary px-6 py-3 font-mono-tech text-xs uppercase tracking-widest text-white hover:bg-primary/90 transition-all font-semibold shrink-0 shadow-xs w-full sm:w-auto text-center"
            >
              <span>Explore Architecture Philosophy</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}

/* -------------------------------------------------------------------------- */
/* FULL SOLUTIONS GRID CATALOG (FOR /solutions PAGE)                         */
/* -------------------------------------------------------------------------- */

export function FullSolutionsList() {
  return (
    <Section
      id="all-solutions"
      index="01"
      eyebrow="ALL 6 CAPABILITY AREAS"
      className="pt-16 sm:pt-20 md:pt-24 pb-12 sm:pb-16 md:pb-20"
      dividerClassName="mb-5 sm:mb-6 md:mb-6"
    >
      <div className="space-y-10 sm:space-y-12">
        <Reveal>
          <div className="border-l-2 border-primary pl-4 sm:pl-6 max-w-3xl">
            <span className="font-mono-tech text-xs uppercase tracking-widest text-primary font-bold block mb-1">
              PROBLEM-FIRST CAPABILITY ARCHITECTURE
            </span>
            <h2 className="font-serif-editorial text-3xl sm:text-5xl font-normal text-foreground break-words">
              What PECSA Helps Solve Across Core Disciplines
            </h2>
            <p className="mt-3 font-sans text-sm sm:text-base leading-relaxed text-muted-foreground">
              We design every solution starting from the operational friction point. Explore the practical business challenges addressed by each engineering capability.
            </p>
          </div>
        </Reveal>

        <div className="space-y-8">
          {CAPABILITIES_LIST.map((c, i) => {
            const Icon = c.icon
            return (
              <Reveal key={c.id} delay={i * 0.05}>
                <div className="border border-border bg-card p-4 sm:p-6 md:p-10 shadow-sm hover:border-primary/40 transition-all">
                  <div className="grid gap-6 sm:gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
                    {/* Left: Capability Info & Problem Solved */}
                    <div className="space-y-4 sm:space-y-5">
                      <div className="flex items-center justify-between border-b border-border/80 pb-2.5">
                        <span className="font-mono-tech text-xs text-primary font-bold">
                          [{c.id}] // {c.key}
                        </span>
                        <span className="font-mono-tech text-[10px] text-muted-foreground uppercase font-semibold">
                          CORE CAPABILITY
                        </span>
                      </div>

                      <div className="flex items-center gap-3.5">
                        <span className="flex h-11 w-11 items-center justify-center border border-primary/40 bg-primary/10 text-primary shrink-0">
                          <Icon className="h-5 w-5" />
                        </span>
                        <h3 className="font-serif-editorial text-2xl sm:text-3xl font-normal text-foreground break-words">
                          {c.title}
                        </h3>
                      </div>

                      {/* Problem Statement Callout */}
                      <div className="border border-border/80 bg-background/60 p-4">
                        <span className="font-mono-tech text-[10px] uppercase tracking-wider text-primary font-bold block mb-1">
                          Operational Friction Solved
                        </span>
                        <p className="font-sans text-xs sm:text-sm text-foreground/90 leading-relaxed font-medium">
                          {c.problem}
                        </p>
                      </div>

                      <p className="font-sans text-sm text-muted-foreground leading-relaxed font-light">
                        {c.summary}
                      </p>
                    </div>

                    {/* Right: Deliverables, Stack, and Contextual Bridge */}
                    <div className="space-y-5 pt-2 lg:pt-0">
                      <div>
                        <span className="font-mono-tech text-[10px] uppercase tracking-wider text-foreground font-semibold block mb-2.5">
                          Engineered Deliverables
                        </span>
                        <div className="grid gap-2 sm:grid-cols-2">
                          {c.deliverables.map((d) => (
                            <div key={d} className="flex items-start gap-2 border border-border bg-background/50 p-2.5">
                              <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                              <span className="font-sans text-xs text-foreground/90 font-medium leading-snug">{d}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <span className="font-mono-tech text-[10px] uppercase tracking-wider text-foreground font-semibold block mb-2">
                          Technologies Deployed
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {c.tech.map((t) => (
                            <span
                              key={t}
                              className="border border-border bg-background px-2.5 py-0.5 font-mono-tech text-xs text-muted-foreground"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Contextual Link */}
                      <div className="pt-2 border-t border-border/60">
                        <Link
                          href={c.contextualLink.href}
                          className="inline-flex items-center gap-1.5 font-mono-tech text-xs text-primary uppercase tracking-wider font-semibold hover:underline"
                        >
                          <span>{c.contextualLink.text}</span>
                          <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </Section>
  )
}
