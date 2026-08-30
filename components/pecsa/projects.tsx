'use client'

import { AnimatePresence, motion } from 'motion/react'
import { AlertCircle, Lightbulb, Cpu, TrendingUp, ShieldCheck } from 'lucide-react'
import { useState } from 'react'
import { Reveal, Section, SectionTitle } from './primitives'

const CASE_LAYERS = [
  {
    step: '01',
    id: 'challenge',
    label: 'Challenge',
    icon: AlertCircle,
    heading: 'Defining the operational friction & real constraints',
    body: 'The specific business problem or operational pain the project set out to address — described in plain, honest terms with its real constraints.',
  },
  {
    step: '02',
    id: 'solution',
    label: 'Solution',
    icon: Lightbulb,
    heading: 'Engineering the architecture & operational workflow',
    body: 'The approach PECSA designed and built, including key decisions, system architecture and how it fits into existing operations.',
  },
  {
    step: '03',
    id: 'technology',
    label: 'Technology',
    icon: Cpu,
    heading: 'Multidisciplinary software, AI & automation stack',
    body: 'The software, AI, automation, IoT or robotics used to deliver the solution, and why each was chosen for the problem at hand.',
  },
  {
    step: '04',
    id: 'result',
    label: 'Result',
    icon: TrendingUp,
    heading: 'Verified operational outcomes & client value',
    body: 'The outcome the solution delivered, measured against the original challenge — reported only once verified with the client.',
  },
]

export function Projects() {
  const [active, setActive] = useState(0)

  const handleNextLayer = () => {
    setActive((prev) => (prev + 1) % CASE_LAYERS.length)
  }

  const current = CASE_LAYERS[active]
  const Icon = current.icon

  return (
    <Section id="projects" index="08" eyebrow="Case Studies">
      <div className="max-w-3xl">
        <Reveal>
          <SectionTitle>
            Case studies, structured for{' '}
            <span className="text-primary italic font-serif-editorial">clarity</span>
          </SectionTitle>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-2.5 font-sans text-sm sm:text-base leading-relaxed text-muted-foreground">
            We present every project through the same clear structure — Challenge, Solution, Technology and Result — so the value of the work is easy to understand at a glance.
          </p>
        </Reveal>
      </div>

      {/* EDITORIAL CASE STUDY GALLERY (COMPACT VERTICAL RHYTHM) */}
      <Reveal delay={0.15}>
        <div className="mt-5 border border-white/10 bg-[#2b211d] p-5 sm:p-8 relative shadow-2xl">
          {/* Header */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-3 mb-5">
            <div className="flex items-center gap-2.5">
              <span className="flex h-7 w-7 items-center justify-center border border-primary/40 bg-primary/10 text-primary">
                <ShieldCheck className="h-3.5 w-3.5" />
              </span>
              <div>
                <p className="font-serif-editorial text-lg font-normal text-foreground">Case Study Gallery</p>
                <p className="font-mono-tech text-[10px] uppercase tracking-widest text-muted-foreground">
                  Standardized Architectural Reporting
                </p>
              </div>
            </div>
            <span className="border border-primary/30 bg-primary/10 px-2.5 py-1 font-mono-tech text-[10px] uppercase tracking-widest text-primary font-semibold">
              Verified Studies Added On Approval
            </span>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center min-h-[160px]"
            >
              <div>
                <div className="flex items-center gap-2.5 mb-2">
                  <span className="flex h-7 w-7 items-center justify-center border border-primary bg-primary/20 text-primary">
                    <Icon className="h-3.5 w-3.5" />
                  </span>
                  <span className="font-mono-tech text-xs uppercase tracking-widest text-[#8c9a72] font-semibold">
                    FRAMEWORK LAYER {current.step} · {current.label}
                  </span>
                </div>
                <h3 className="font-serif-editorial text-2xl sm:text-4xl font-normal text-foreground leading-tight">
                  {current.heading}
                </h3>
                <p className="mt-3 font-sans text-xs sm:text-sm leading-relaxed text-muted-foreground max-w-xl">
                  {current.body}
                </p>
              </div>

              {/* Spatial Layer Visual Display */}
              <div className="border border-white/10 bg-[#211a17] p-6 flex flex-col items-center justify-center text-center">
                <span className="font-serif-editorial text-6xl text-primary font-normal leading-none">
                  {current.step}
                </span>
                <span className="mt-2 font-mono-tech text-xs uppercase tracking-widest text-[#8c9a72] font-semibold">
                  {current.label} LAYER
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Arrow Control */}
          <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
            <span className="font-mono-tech text-xs text-white/40 uppercase tracking-widest hidden sm:inline-block">
              Click arrow to advance framework layer →
            </span>

            <button
              type="button"
              onClick={handleNextLayer}
              className="group flex items-center gap-3 border border-primary bg-primary px-7 py-3 font-mono-tech text-xs uppercase tracking-widest text-white hover:bg-primary/90 transition-all cursor-pointer ml-auto"
              aria-label="Advance framework layer"
            >
              <span>NEXT →</span>
            </button>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
