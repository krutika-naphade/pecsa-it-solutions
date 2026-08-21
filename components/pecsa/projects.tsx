'use client'

import { motion } from 'motion/react'
import { AlertCircle, Lightbulb, Cpu, TrendingUp, Lock } from 'lucide-react'
import { Reveal, Section, SectionTitle } from './primitives'

const FRAMEWORK = [
  {
    icon: AlertCircle,
    label: 'Challenge',
    text: 'The specific business problem or operational pain the project set out to address — described in plain, honest terms with its real constraints.',
  },
  {
    icon: Lightbulb,
    label: 'Solution',
    text: 'The approach PECSA designed and built, including the key decisions, the system architecture and how it fits into existing operations.',
  },
  {
    icon: Cpu,
    label: 'Technology',
    text: 'The software, AI, automation, IoT or robotics used to deliver the solution, and why each was chosen for the problem at hand.',
  },
  {
    icon: TrendingUp,
    label: 'Result',
    text: 'The outcome the solution delivered, measured against the original challenge — reported only once verified with the client.',
  },
]

export function Projects() {
  return (
    <Section id="projects" index="09" eyebrow="Projects">
      <div className="max-w-3xl">
        <Reveal>
          <SectionTitle>
            Case studies, structured for{' '}
            <span className="text-primary">clarity</span>
          </SectionTitle>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            We present every project through the same clear structure —
            Challenge, Solution, Technology and Result — so the value of the work
            is easy to understand at a glance. We only publish case studies with
            real, verified detail; nothing here is fabricated. Verified case
            studies are added to this section once approved with the client.
          </p>
        </Reveal>
      </div>

      {/* Case-study framework card */}
      <Reveal delay={0.15}>
        <div className="mt-12 overflow-hidden rounded-3xl border border-border bg-card/50 backdrop-blur">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border px-6 py-5 sm:px-8">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/15 text-primary">
                <Lock className="h-4 w-4" />
              </span>
              <div>
                <p className="font-display text-sm font-medium">Case Study Template</p>
                <p className="text-xs text-muted-foreground">
                  The structure every verified PECSA case study follows
                </p>
              </div>
            </div>
            <span className="rounded-full border border-primary/40 bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary">
              Verified studies added on approval
            </span>
          </div>

          <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
            {FRAMEWORK.map((f, i) => {
              const Icon = f.icon
              return (
                <motion.div
                  key={f.label}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ delay: i * 0.12, duration: 0.5 }}
                  className="group relative bg-card/60 p-6 sm:p-7"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary text-primary transition-colors group-hover:bg-primary/20">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="font-display text-xs tabular-nums text-muted-foreground">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold">{f.label}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {f.text}
                  </p>
                  {/* placeholder content rows to feel complete */}
                  <div className="mt-5 space-y-2" aria-hidden="true">
                    <div className="h-1.5 w-full rounded-full bg-muted-foreground/15" />
                    <div className="h-1.5 w-4/5 rounded-full bg-muted-foreground/15" />
                    <div className="h-1.5 w-2/3 rounded-full bg-muted-foreground/10" />
                  </div>
                </motion.div>
              )
            })}
          </div>

          <div className="border-t border-border px-6 py-5 text-center text-sm text-muted-foreground sm:px-8">
            Have a project we have delivered for you?{' '}
            <a href="#connect" className="font-medium text-primary underline-offset-4 hover:underline">
              Let us publish it as a verified case study.
            </a>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
