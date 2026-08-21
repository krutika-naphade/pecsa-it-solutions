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
  Wrench,
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
  const p = PRODUCTS[active]

  return (
    <Section id="products" index="05" eyebrow="Products">
      <Reveal>
        <SectionTitle>
          Platforms we have built to solve{' '}
          <span className="text-primary">real problems</span>
        </SectionTitle>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">
          These are products PECSA has designed and engineered end to end. Each
          began as a concrete operational problem and became a dependable
          platform. Switch between them to explore what they do and how they
          work.
        </p>
      </Reveal>

      {/* Tabs */}
      <Reveal delay={0.15}>
        <div className="mt-10 flex flex-wrap gap-2">
          {PRODUCTS.map((prod, i) => (
            <button
              key={prod.id}
              type="button"
              onClick={() => setActive(i)}
              aria-pressed={active === i}
              className={`rounded-full border px-5 py-2.5 text-sm font-medium transition-all ${
                active === i
                  ? 'border-primary/60 bg-primary/15 text-foreground glow-ring'
                  : 'border-border bg-card/40 text-muted-foreground hover:border-primary/40 hover:text-foreground'
              }`}
            >
              {prod.name}
            </button>
          ))}
        </div>
      </Reveal>

      <AnimatePresence mode="wait">
        <motion.div
          key={p.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.4 }}
          className="mt-8 grid gap-8 lg:grid-cols-[1fr_1fr] lg:gap-12"
        >
          {/* Conceptual interface */}
          <ConceptualUI variant={p.ui} name={p.name} />

          {/* Details */}
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              {p.tagline}
            </p>
            <h3 className="mt-2 font-display text-3xl font-semibold">{p.name}</h3>
            <p className="mt-4 leading-relaxed text-muted-foreground">{p.purpose}</p>

            <p className="mt-8 mb-4 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
              How it works
            </p>
            <ol className="grid gap-3 sm:grid-cols-2">
              {p.workflow.map((w, i) => {
                const WIcon = w.icon
                return (
                  <motion.li
                    key={w.label}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.4 }}
                    className="rounded-xl border border-border bg-card/40 p-4"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/15 text-primary">
                        <WIcon className="h-4 w-4" />
                      </span>
                      <span className="text-sm font-medium">{w.label}</span>
                    </div>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                      {w.text}
                    </p>
                  </motion.li>
                )
              })}
            </ol>

            <p className="mt-8 mb-3 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Capabilities
            </p>
            <div className="flex flex-wrap gap-2">
              {p.capabilities.map((c) => (
                <span
                  key={c}
                  className="rounded-full border border-border bg-background/50 px-3 py-1.5 text-xs text-muted-foreground"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </Section>
  )
}

/* Abstract product interface mock — conceptual, no invented data */
function ConceptualUI({ variant, name }: { variant: string; name: string }) {
  const isAudit = variant === 'audit'
  const AccentIcon = isAudit ? ClipboardCheck : Building2
  const rows = isAudit
    ? ['Scope defined', 'Checklist in progress', 'Evidence attached', 'Findings logged']
    : ['Members registered', 'Requests open', 'Notices scheduled', 'Records updated']
  const sidebar = isAudit
    ? [ClipboardCheck, FileSearch, ShieldCheck, FileText, Wrench]
    : [Users, Wallet, Bell, ListChecks, FileText]

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-2xl border border-border bg-card/60 shadow-2xl backdrop-blur">
        {/* window bar */}
        <div className="flex items-center gap-2 border-b border-border bg-background/60 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-primary/40" />
          <span className="h-2.5 w-2.5 rounded-full bg-primary/70" />
          <span className="ml-3 flex items-center gap-1.5 text-[11px] text-muted-foreground">
            <AccentIcon className="h-3.5 w-3.5 text-primary" />
            {name}
          </span>
        </div>
        <div className="grid grid-cols-[auto_1fr]">
          {/* sidebar */}
          <div className="flex flex-col gap-1 border-r border-border bg-background/40 p-3">
            {sidebar.map((SIcon, i) => (
              <span
                key={i}
                className={`flex h-9 w-9 items-center justify-center rounded-lg ${
                  i === 1 ? 'bg-primary/20 text-primary' : 'text-muted-foreground'
                }`}
              >
                <SIcon className="h-4 w-4" />
              </span>
            ))}
          </div>
          {/* content */}
          <div className="p-4">
            <div className="mb-4 flex items-center justify-between">
              <div className="h-2.5 w-28 rounded-full bg-muted-foreground/25" />
              <div className="h-6 w-16 rounded-md bg-primary/25" />
            </div>
            <div className="space-y-2.5">
              {rows.map((r, i) => (
                <motion.div
                  key={r}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="flex items-center gap-3 rounded-lg border border-border bg-background/50 px-3 py-2.5"
                >
                  <span
                    className={`flex h-6 w-6 items-center justify-center rounded-md text-[10px] ${
                      i < 2 ? 'bg-primary/20 text-primary' : 'bg-muted text-muted-foreground'
                    }`}
                  >
                    {i < 2 ? '✓' : i + 1}
                  </span>
                  <span className="text-xs text-muted-foreground">{r}</span>
                  <span className="ml-auto h-1.5 w-10 rounded-full bg-muted-foreground/20" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-3 -right-3 -z-10 h-24 w-24 rounded-2xl bg-primary/20 blur-2xl" />
    </div>
  )
}
