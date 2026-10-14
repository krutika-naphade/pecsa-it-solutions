'use client'

import { ArrowUpRight, Compass, FileText, Mail, MapPin } from 'lucide-react'
import Link from 'next/link'
import { motion, useReducedMotion } from 'motion/react'

function RevealItem({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  const reduce = useReducedMotion()
  if (reduce) return <div className={className}>{children}</div>
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '200px 0px 50px 0px' }}
      transition={{ duration: 0.45, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}

interface ClosingCTAProps {
  onOpenBrief: () => void
}

export function ClosingCTASection({ onOpenBrief }: ClosingCTAProps) {
  return (
    <section
      id="closing-cta"
      aria-label="Manifesto & Next Steps"
      className="relative border-b border-border py-12 sm:py-16 md:py-20 bg-card tech-grid-bg"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="border border-border bg-background p-5 sm:p-10 lg:p-16 shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 h-96 w-96 bg-primary/10 blur-[130px] pointer-events-none" />

          <RevealItem>
            <span className="font-mono-tech text-xs uppercase tracking-widest text-primary font-bold block mb-3 sm:mb-4">
              08 // MANIFESTO & COMMISSIONS
            </span>
            <h2 className="font-serif-editorial text-3xl sm:text-5xl md:text-6xl font-normal text-foreground leading-[1.04] max-w-4xl break-words">
              Your Buildings Last Decades.{' '}
              <span className="text-primary italic">Your Website Shouldn't Feel Ephemeral.</span>
            </h2>
            <p className="mt-5 sm:mt-6 font-sans text-base sm:text-xl text-muted-foreground leading-relaxed max-w-2xl font-light break-words">
              We build websites that look like architects think — intentional, disciplined, enduring, and quiet enough to let the work speak.
            </p>
          </RevealItem>

          <RevealItem delay={0.15}>
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 border border-primary bg-primary px-6 py-3.5 sm:px-8 sm:py-4 font-mono-tech text-xs uppercase tracking-widest text-white hover:bg-primary/90 transition-all font-semibold shadow-xs text-center"
              >
                <span>Start a Conversation</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              <button
                type="button"
                onClick={onOpenBrief}
                className="group inline-flex items-center justify-center gap-3 border border-border bg-card px-6 py-3.5 sm:px-8 sm:py-4 font-mono-tech text-xs uppercase tracking-widest text-foreground hover:border-primary transition-all font-semibold shadow-2xs cursor-pointer text-center"
              >
                <FileText className="h-4 w-4 text-primary" />
                <span>Submit Practice Brief</span>
              </button>
            </div>
          </RevealItem>

          <RevealItem delay={0.25}>
            <div className="mt-10 sm:mt-14 pt-6 sm:pt-8 border-t border-border grid gap-5 sm:grid-cols-3 font-sans text-xs text-muted-foreground">
              <div>
                <span className="font-mono-tech text-[10px] uppercase tracking-wider text-foreground font-semibold block mb-1">
                  DIRECT COLLABORATION
                </span>
                <span>Work directly with dedicated senior design engineers who read architectural drawings.</span>
              </div>
              <div>
                <span className="font-mono-tech text-[10px] uppercase tracking-wider text-foreground font-semibold block mb-1">
                  END-TO-END ARCHITECTURE
                </span>
                <span>From editorial discovery to custom CMS, responsive design, and global CDN hosting.</span>
              </div>
              <div>
                <span className="font-mono-tech text-[10px] uppercase tracking-wider text-foreground font-semibold block mb-1">
                  PRACTICE INQUIRIES
                </span>
                <div className="flex items-center gap-2 mt-1">
                  <Mail className="h-3.5 w-3.5 text-primary" />
                  <a href="mailto:info@pecsa.in" className="hover:text-foreground transition-colors font-mono-tech">
                    info@pecsa.in
                  </a>
                </div>
              </div>
            </div>
          </RevealItem>
        </div>
      </div>
    </section>
  )
}
