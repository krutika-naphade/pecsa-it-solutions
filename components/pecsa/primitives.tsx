'use client'

import { motion, useReducedMotion, type Variants } from 'motion/react'
import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

/* Fade + rise reveal that respects reduced motion */
export function Reveal({
  children,
  delay = 0,
  y = 28,
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
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </MotionTag>
  )
}

export const staggerParent: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

export const staggerChild: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] },
  },
}

/* Section shell with consistent vertical rhythm + eyebrow index */
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
        'relative mx-auto w-full max-w-7xl scroll-mt-24 px-5 py-24 sm:px-8 md:py-32',
        className,
      )}
    >
      <Reveal className="mb-10 flex items-center gap-4 md:mb-14">
        <span className="font-display text-sm font-medium tabular-nums text-primary">
          {index}
        </span>
        <span className="h-px w-10 bg-primary/40" aria-hidden="true" />
        <span className="text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">
          {eyebrow}
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
        'font-display text-3xl font-semibold leading-[1.08] tracking-tight text-balance sm:text-4xl md:text-5xl',
        className,
      )}
    >
      {children}
    </h2>
  )
}
