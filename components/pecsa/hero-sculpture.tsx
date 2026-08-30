'use client'

import { AnimatePresence, motion } from 'motion/react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useEffect, useState } from 'react'

const LETTERS = [
  {
    char: 'P',
    title: 'PHYSICAL SYSTEMS',
    code: '01',
    fontStyle: 'font-serif-editorial',
    xOffset: -120,
    yOffset: -30,
    z: 60,
    rotateZ: -5,
    tagline: 'IoT, Sensors & Telemetry Control',
    description: 'Connecting telemetry sensors and actuation controllers directly to digital operational software.',
  },
  {
    char: 'E',
    title: 'ENGINEERING',
    code: '02',
    fontStyle: 'font-mono-tech',
    xOffset: -60,
    yOffset: 25,
    z: 40,
    rotateZ: 4,
    tagline: 'Practical Architecture & Business Intent',
    description: 'Engineering complex operational friction into predictable, maintainable, and robust systems.',
  },
  {
    char: 'C',
    title: 'CONNECTED SYSTEMS',
    code: '03',
    fontStyle: 'font-serif-editorial',
    xOffset: 0,
    yOffset: -40,
    z: 80,
    rotateZ: -3,
    tagline: 'Cloud Infrastructure & Managed APIs',
    description: 'Scalable cloud services, secure integrations, and data pipelines connecting operational tools.',
  },
  {
    char: 'S',
    title: 'SOFTWARE',
    code: '04',
    fontStyle: 'font-serif-editorial',
    xOffset: 60,
    yOffset: 30,
    z: 50,
    rotateZ: 5,
    tagline: 'Enterprise Platforms & Web Applications',
    description: 'Custom platforms, internal tools, and web applications built for daily business speed and reliability.',
  },
  {
    char: 'A',
    title: 'AUTOMATION',
    code: '05',
    fontStyle: 'font-mono-tech',
    xOffset: 120,
    yOffset: -20,
    z: 70,
    rotateZ: -4,
    tagline: 'Workflow Orchestration & Event Rules',
    description: 'Event engines and intelligent decision rules removing repetitive manual work across operations.',
  },
]

export function HeroSculpture() {
  const [selectedIdx, setSelectedIdx] = useState(0)

  const handlePrev = () => {
    setSelectedIdx((prev) => (prev - 1 + LETTERS.length) % LETTERS.length)
  }

  const handleNext = () => {
    setSelectedIdx((prev) => (prev + 1) % LETTERS.length)
  }

  // Keyboard navigation listener (Up/Left = Prev, Down/Right = Next)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        e.preventDefault()
        handlePrev()
      } else if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        e.preventDefault()
        handleNext()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const current = LETTERS[selectedIdx]

  return (
    <div className="relative w-full max-w-[540px] mx-auto py-6 select-none flex flex-col justify-between min-h-[420px]">
      {/* ARTISTIC UP/DOWN LAYERED PECSA WORDMARK (FIXED COMPOSITION) */}
      <div className="relative w-full aspect-[4/2.6] flex items-center justify-center pointer-events-auto">
        {/* Ambient Glow */}
        <div className="absolute inset-8 rounded-full bg-[#c65a3a]/10 blur-3xl pointer-events-none" />

        {LETTERS.map((item, idx) => {
          const isSelected = selectedIdx === idx
          return (
            <button
              key={item.char}
              type="button"
              onMouseEnter={() => setSelectedIdx(idx)}
              onClick={() => setSelectedIdx(idx)}
              className="absolute cursor-pointer transition-all duration-300 group focus:outline-none drop-shadow-2xl"
              style={{
                transform: `translate3d(${item.xOffset}px, ${item.yOffset}px, ${item.z}px) rotate(${item.rotateZ}deg)`,
              }}
              aria-label={`Select ${item.char} for ${item.title}`}
            >
              <motion.span
                animate={{
                  scale: isSelected ? 1.15 : 0.95,
                  opacity: isSelected ? 1 : 0.55,
                }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className={`${item.fontStyle} text-7xl sm:text-9xl font-normal leading-none tracking-tight block ${
                  isSelected ? 'text-[#c65a3a]' : 'text-[#f3e9d8]'
                }`}
              >
                {item.char}
              </motion.span>
            </button>
          )
        })}
      </div>

      {/* DISCIPLINE DETAILS & ARROW SELECTOR (NO BOX / NO EXTRA BUTTONS) */}
      <div className="mt-6 border-t border-white/10 pt-6 flex flex-col justify-between">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.char}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <span className="font-serif-editorial text-2xl font-normal text-primary">
                  {current.char}
                </span>
                <span className="font-mono-tech text-xs uppercase tracking-widest font-bold text-foreground">
                  {current.title}
                </span>
              </div>

              {/* Minimal Arrow Navigation Selector */}
              <div className="flex items-center gap-3 font-mono-tech text-xs">
                <span className="text-muted-foreground">
                  [{current.code} / 05]
                </span>
                <div className="flex items-center gap-1 border border-white/15 bg-[#2b211d] p-1">
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="p-1 text-muted-foreground hover:text-foreground hover:bg-white/10 transition-colors cursor-pointer"
                    aria-label="Previous letter discipline"
                  >
                    <ChevronLeft className="h-3.5 w-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    className="p-1 text-muted-foreground hover:text-foreground hover:bg-white/10 transition-colors cursor-pointer"
                    aria-label="Next letter discipline"
                  >
                    <ChevronRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            </div>

            <p className="font-mono-tech text-xs uppercase tracking-wider text-muted-sage font-medium mb-2">
              {current.tagline}
            </p>

            <p className="font-sans text-sm text-muted-foreground leading-relaxed max-w-lg">
              {current.description}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
