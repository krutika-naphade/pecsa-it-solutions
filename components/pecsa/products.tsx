'use client'

import { AnimatePresence, motion } from 'motion/react'
import {
  ClipboardCheck,
  FileSearch,
  FileText,
  Building2,
  Users,
  Wallet,
  Bell,
  ShieldCheck,
  ListChecks,
  ChevronDown,
} from 'lucide-react'
import { useState } from 'react'
import { Reveal, Section, SectionTitle } from './primitives'

const PRODUCTS = [
  {
    id: 'auditool',
    name: 'AUDITOOL',
    tagline: 'Audit & Compliance Platform',
    purpose:
      'AUDITOOL brings structure to audit and compliance work that is often scattered across spreadsheets, email and paper. It gives teams a single, disciplined environment to plan audits, run checks against defined standards, capture findings with evidence, and produce consistent, traceable reports.',
    workflow: [
      { icon: ClipboardCheck, label: 'Plan & scope', text: 'Define audit scope, standards and checklists up front.' },
      { icon: FileSearch, label: 'Execute checks', text: 'Work through structured checks and record evidence as you go.' },
      { icon: ShieldCheck, label: 'Log findings', text: 'Capture non-conformities, risks and observations against each item.' },
      { icon: FileText, label: 'Report', text: 'Generate consistent, traceable reports from the captured record.' },
    ],
    capabilities: ['Configurable checklists', 'Evidence capture', 'Findings & risk tracking', 'Structured reporting', 'Audit trail', 'Role-based access'],
    ui: 'audit',
  },
  {
    id: 'society',
    name: 'SOCIETY MANAGEMENT SYSTEM',
    tagline: 'Community Operations Platform',
    purpose:
      'The Society Management System is a platform for running residential and community operations in one place. It replaces disconnected registers and messaging with a coordinated system for managing members, day-to-day operations, communications and records — making community administration transparent and repeatable.',
    workflow: [
      { icon: Users, label: 'Members & units', text: 'Maintain a single register of members, units and roles.' },
      { icon: Wallet, label: 'Operations', text: 'Coordinate dues, requests and routine operational tasks.' },
      { icon: Bell, label: 'Communication', text: 'Send notices and updates to the right people, reliably.' },
      { icon: ListChecks, label: 'Records', text: 'Keep an organised, auditable history of community activity.' },
    ],
    capabilities: ['Member directory', 'Operational workflows', 'Notices & communication', 'Records & history', 'Role-based access', 'Reporting'],
    ui: 'society',
  },
]

export function Products() {
  const [active, setActive] = useState(0)
  const [expandedDetails, setExpandedDetails] = useState(false)

  const handleNextProduct = () => {
    setActive((prev) => (prev + 1) % PRODUCTS.length)
    setExpandedDetails(false)
  }

  const p = PRODUCTS[active]

  return (
    <Section id="products" index="04" eyebrow="Flagship Products">
      <Reveal>
        <SectionTitle>
          Platforms we have built to solve{' '}
          <span className="text-primary italic font-serif-editorial">real problems</span>
        </SectionTitle>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="mt-1.5 sm:mt-2 max-w-2xl font-sans text-xs sm:text-sm leading-relaxed text-muted-foreground">
          These are products PECSA has designed and engineered end to end. Each
          began as a concrete operational problem and became a dependable
          platform. Use the arrow control to transition between products.
        </p>
      </Reveal>

      {/* LARGE IMMERSIVE PRODUCT PRESENTATION (COMPACT VIEWPORT RHYTHM) */}
      <Reveal delay={0.15}>
        <div className="mt-3 sm:mt-4 border border-white/10 bg-[#2b211d] p-4 sm:p-5 md:p-6 relative shadow-2xl">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-2.5 mb-3">
            <span className="font-mono-tech text-xs uppercase tracking-widest text-[#8c9a72] font-bold">
              PRODUCT PRESENTATION [{active + 1} / 02]
            </span>
            <span className="font-mono-tech text-xs text-white/40">
              {p.name}
            </span>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="grid gap-4 sm:gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-start"
            >
              {/* Product Visual Architecture */}
              <EvolvingProductVisual variant={p.ui} name={p.name} />

              {/* Product Copy Details */}
              <div>
                <span className="font-mono-tech text-xs font-semibold uppercase tracking-widest text-[#8c9a72]">
                  {p.tagline}
                </span>
                <h3 className="mt-1 font-serif-editorial text-2xl sm:text-3xl font-normal text-foreground">
                  {p.name}
                </h3>
                <p className="mt-2 font-sans text-xs leading-relaxed text-muted-foreground">
                  {p.purpose}
                </p>

                <h4 className="mt-3 mb-1.5 font-mono-tech text-xs font-semibold uppercase tracking-widest text-white/50">
                  System Workflow Architecture
                </h4>
                <div className="grid gap-1.5 sm:grid-cols-2">
                  {p.workflow.map((w) => {
                    const WIcon = w.icon
                    return (
                      <div
                        key={w.label}
                        className="border border-white/10 bg-[#211a17] p-2.5 flex flex-col justify-between"
                      >
                        <div className="flex items-center gap-2">
                          <span className="flex h-5 w-5 items-center justify-center border border-primary/30 bg-primary/10 text-primary">
                            <WIcon className="h-3 w-3" />
                          </span>
                          <span className="font-mono-tech text-xs uppercase tracking-wider text-white font-medium">
                            {w.label}
                          </span>
                        </div>
                        <p className="mt-1 font-sans text-[11px] leading-relaxed text-muted-foreground">
                          {w.text}
                        </p>
                      </div>
                    )
                  })}
                </div>

                <div className="mt-3 flex items-center justify-between border-t border-white/10 pt-3">
                  <button
                    type="button"
                    onClick={() => setExpandedDetails(!expandedDetails)}
                    className="flex items-center gap-2 border border-white/20 bg-[#211a17] px-3.5 py-1.5 font-mono-tech text-xs uppercase tracking-widest text-white hover:border-primary transition-all cursor-pointer"
                  >
                    <span>{expandedDetails ? 'Hide System Specs' : 'Inspect Capabilities'}</span>
                    <ChevronDown className={`h-3.5 w-3.5 text-primary transition-transform ${expandedDetails ? 'rotate-180' : ''}`} />
                  </button>
                </div>

                {expandedDetails && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-2 border border-white/10 bg-[#211a17] p-3"
                  >
                    <span className="font-mono-tech text-xs font-semibold uppercase tracking-widest text-[#8c9a72] block mb-1.5">
                      Core Platform Capabilities
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {p.capabilities.map((c) => (
                        <span
                          key={c}
                          className="border border-white/10 bg-[#342924] px-2 py-0.5 font-mono-tech text-xs text-muted-foreground"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Burnt Copper NEXT -> Arrow Control */}
          <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
            <span className="font-mono-tech text-xs text-white/40 uppercase tracking-widest hidden sm:inline-block">
              Click arrow to transition product →
            </span>

            <button
              type="button"
              onClick={handleNextProduct}
              className="group flex items-center gap-3 border border-primary bg-primary px-6 py-2.5 font-mono-tech text-xs uppercase tracking-widest text-white hover:bg-primary/90 transition-all cursor-pointer ml-auto"
              aria-label="Transition to next product"
            >
              <span>NEXT →</span>
            </button>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}

function EvolvingProductVisual({ variant, name }: { variant: string; name: string }) {
  const isAudit = variant === 'audit'
  const AccentIcon = isAudit ? ClipboardCheck : Building2
  const rows = isAudit
    ? ['Audit Scope & Checklist Defined', 'Structured Evidence Capture', 'Risk & Non-Conformity Logging', 'Traceable Report Generation']
    : ['Member & Unit Directory Register', 'Dues & Task Request Workflows', 'Notice Broadcast & Communications', 'Auditable Operations Record']

  return (
    <div className="border border-white/10 bg-[#211a17] p-4 sm:p-5">
      <div className="flex items-center justify-between border-b border-white/10 pb-2.5 mb-3">
        <div className="flex items-center gap-2">
          <AccentIcon className="h-4 w-4 text-primary" />
          <span className="font-serif-editorial text-xl sm:text-2xl font-normal text-white">
            {name}
          </span>
        </div>
        <span className="font-mono-tech text-xs text-[#8c9a72] font-semibold">
          SYSTEM LAYER
        </span>
      </div>

      <div className="space-y-2 font-mono-tech">
        {rows.map((r, i) => (
          <motion.div
            key={r}
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.08, duration: 0.35 }}
            className="flex items-center justify-between border border-white/10 bg-[#2b211d] p-2.5 text-xs"
          >
            <div className="flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center bg-primary/20 text-[10px] text-primary font-bold">
                0{i + 1}
              </span>
              <span className="text-foreground/90 font-sans">{r}</span>
            </div>
            <span className="text-[10px] text-[#8c9a72] uppercase font-bold">INTEGRATED</span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
