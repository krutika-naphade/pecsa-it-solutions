'use client'

import { motion, AnimatePresence } from 'motion/react'
import { useState } from 'react'

const CAPABILITIES = [
  {
    id: '01',
    title: 'SOFTWARE',
    subtitle: 'Enterprise Platforms & Web Systems',
    description: 'Custom platforms, web and internal systems engineered for real operations, reliability, and scale.',
  },
  {
    id: '02',
    title: 'INTELLIGENCE',
    subtitle: 'AI Models & Decision Engines',
    description: 'Applied machine learning and language models automating judgement in complex operational workflows.',
  },
  {
    id: '03',
    title: 'AUTOMATION',
    subtitle: 'Process Orchestration & Sync',
    description: 'Event pipelines removing repetitive manual work across disparate software and business systems.',
  },
  {
    id: '04',
    title: 'PHYSICAL SYSTEMS',
    subtitle: 'IoT Edge & Robotics Control',
    description: 'Connecting telemetry sensors and actuation controllers directly to digital operational software.',
  },
]

export function LivingSystem() {
  const [active, setActive] = useState(0)

  const handleNext = () => {
    setActive((prev) => (prev + 1) % CAPABILITIES.length)
  }

  const current = CAPABILITIES[active]

  return (
    <div className="relative w-full border border-white/10 bg-[#2b211d] p-8 sm:p-10 shadow-xl">
      {/* Editorial Single Active Capability */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="min-h-[200px] flex flex-col justify-between"
        >
          <div>
            <span className="font-mono-tech text-xs uppercase tracking-widest text-muted-sage block mb-3 font-semibold">
              0{active + 1} · {current.subtitle}
            </span>
            <h3 className="font-serif-editorial text-4xl sm:text-5xl font-normal text-foreground leading-tight">
              {current.title}
            </h3>
            <p className="mt-5 font-sans text-sm leading-relaxed text-muted-foreground">
              {current.description}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Elegant NEXT -> Control */}
      <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          {CAPABILITIES.map((c, index) => (
            <span
              key={c.id}
              className={`h-1.5 transition-all ${
                active === index ? 'w-6 bg-primary' : 'w-2 bg-white/20'
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={handleNext}
          className="group flex items-center gap-3 border border-primary bg-primary px-7 py-3 font-mono-tech text-xs uppercase tracking-widest text-white hover:bg-primary/90 transition-all cursor-pointer"
          aria-label="Advance to next capability"
        >
          <span>NEXT →</span>
        </button>
      </div>
    </div>
  )
}
