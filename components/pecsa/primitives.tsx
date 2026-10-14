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

/* Section shell with natural document flow & clean fixed-navbar scroll offset */
export function Section({
  id,
  index,
  eyebrow,
  children,
  className,
  dividerClassName,
}: {
  id: string
  index?: string
  eyebrow: string
  children: ReactNode
  className?: string
  dividerClassName?: string
}) {
  return (
    <section
      id={id}
      className={cn(
        'relative mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8 lg:px-10 py-10 sm:py-14 md:py-20 scroll-mt-24',
        className,
      )}
    >
      <Reveal
        className={cn(
          'mb-6 flex flex-wrap items-center justify-between gap-2 border-b border-border pb-3 sm:mb-8 md:mb-10',
          dividerClassName,
        )}
      >
        <div className="flex items-center gap-2.5 sm:gap-3">
          {index && (
            <span className="font-mono-tech text-xs tracking-widest text-primary uppercase font-bold">
              [{index}]
            </span>
          )}
          {index && <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />}
          <span className="font-mono-tech text-xs font-semibold uppercase tracking-[0.18em] sm:tracking-[0.2em] text-foreground">
            {eyebrow}
          </span>
        </div>
        <span className="hidden font-mono-tech text-[10px] uppercase tracking-widest text-muted-foreground sm:inline-block font-semibold">
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
        'font-serif-editorial text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.05] tracking-tight text-foreground max-w-4xl break-words',
        className,
      )}
    >
      {children}
    </h2>
  )
}

/* Standardized subpage hero banner primitive */
export function PageHeader({
  eyebrow,
  title,
  titleAccent,
  description,
  lead,
  children,
  className,
}: {
  eyebrow: string
  title: ReactNode
  titleAccent?: string
  description?: string
  lead?: string
  children?: ReactNode
  className?: string
}) {
  return (
    <section
      className={cn(
        'bg-background py-10 sm:py-14 md:py-20 border-b border-border tech-grid-bg',
        className,
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-10">
        <span className="font-mono-tech text-xs uppercase tracking-widest text-primary font-bold block mb-3">
          {eyebrow}
        </span>
        <h1 className="font-serif-editorial text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.05] text-foreground max-w-4xl break-words">
          {title} {titleAccent && <span className="text-primary italic">{titleAccent}</span>}
        </h1>
        {description && (
          <p className="mt-4 sm:mt-5 max-w-3xl font-sans text-base sm:text-lg md:text-xl leading-relaxed text-muted-foreground font-light break-words">
            {description}
          </p>
        )}
        {lead && (
          <p className="mt-3 max-w-3xl font-sans text-xs sm:text-sm md:text-base leading-relaxed text-foreground font-medium break-words">
            {lead}
          </p>
        )}
        {children}
      </div>
    </section>
  )
}
