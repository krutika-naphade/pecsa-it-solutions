'use client'

import { Reveal, Section } from './primitives'

const DISCIPLINES = [
  'Software',
  'AI',
  'Automation',
  'IoT',
  'Robotics',
  'Digital',
]

export function WhoWeAre() {
  return (
    <Section id="who-we-are" index="01" eyebrow="PECSA Introduction">
      <div className="max-w-4xl">
        <Reveal>
          <div className="border-b border-white/10 pb-8">
            <h2 className="font-serif-editorial text-3xl sm:text-5xl md:text-6xl font-normal leading-[1.02] text-foreground">
              Building Technology for the Real World
            </h2>
            <p className="mt-6 font-sans text-lg sm:text-xl leading-relaxed text-muted-foreground">
              From a simple website to a complex automated system, we believe technology should have a purpose — solving problems, reducing complexity, and creating measurable value.
            </p>
            {/* Technology Line */}
            <div className="mt-8 flex flex-wrap items-center gap-3 font-mono-tech text-xs sm:text-sm text-primary font-semibold">
              {DISCIPLINES.map((d, i) => (
                <span key={d} className="flex items-center gap-3">
                  <span className="border border-primary/30 bg-primary/10 px-4 py-1.5 text-primary tracking-wider uppercase">
                    {d}
                  </span>
                  {i < DISCIPLINES.length - 1 && <span className="text-white/20">|</span>}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}


