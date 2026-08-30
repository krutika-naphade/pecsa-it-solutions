'use client'

import { motion, useReducedMotion, type Variants } from 'motion/react'
import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

/* Fade + rise reveal that respects reduced motion */
export function Reveal({
  children,
  delay = 0,
  y = 16,
  className,
  as = 'div',
}: {
  children: ReactNode
  delay?: number
  y?: number
  className?: string
  as?: 'div' | 'span' | 'li' | 'header'
}) {
  const reduce = useReducedMotion()
  const MotionTag = motion[as] as typeof motion.div
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: reduce ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </MotionTag>
  )
}

export const staggerParent: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

export const staggerChild: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
  },
}

/* Section shell with Deep Espresso Viewport Fit Chapter rhythm & clean fixed-navbar scroll offset */
export function Section({
  id,
  index,
  eyebrow,
  children,
  className,
}: {
  id: string
  index: string
  eyebrow: string
  children: ReactNode
  className?: string
}) {
  return (
    <section
      id={id}
      className={cn(
        'relative mx-auto w-full max-w-7xl min-h-[calc(100vh-4rem)] flex flex-col justify-center scroll-mt-16 px-6 py-8 sm:px-10 md:py-12',
        className,
      )}
    >
      <Reveal className="mb-4 flex items-center justify-between pb-1 md:mb-6">
        <div className="flex items-center gap-4">
          <span className="font-mono-tech text-xs tracking-widest text-primary uppercase font-bold">
            [{index}]
          </span>
          <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
          <span className="font-mono-tech text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
            {eyebrow}
          </span>
        </div>
        <span className="hidden font-mono-tech text-[10px] uppercase tracking-widest text-white/30 sm:inline-block">
          PECSA IT SOLUTIONS
        </span>
      </Reveal>
      {children}
    </section>
  )
}

export function SectionTitle({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <h2
      className={cn(
        'font-serif-editorial text-3xl font-normal leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl max-w-4xl',
        className,
      )}
    >
      {children}
    </h2>
  )
}
