'use client'

import { motion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import { HeroSculpture } from './hero-sculpture'

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden min-h-[calc(100vh-4rem)] flex flex-col justify-center pt-16 pb-6 md:pt-20 md:pb-8 bg-[#211a17] scroll-mt-16"
    >
      <div className="relative mx-auto w-full max-w-7xl px-6 sm:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          {/* Main Editorial Hero Headline */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-flex items-center gap-3 border border-white/10 bg-[#2b211d] px-4 py-1.5"
            >
              <span className="h-1.5 w-1.5 bg-primary" />
              <span className="font-mono-tech text-xs uppercase tracking-widest text-muted-foreground">
                PECSA IT SOLUTIONS
              </span>
            </motion.div>

            <h1 className="font-serif-editorial text-5xl font-normal leading-[0.96] tracking-tight text-foreground sm:text-7xl md:text-8xl">
              Engineering what’s{' '}
              <span className="text-primary italic font-serif-editorial">next.</span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-6 font-sans text-xl font-medium text-foreground/90 md:text-2xl"
            >
              Technology that solves real business problems.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground font-sans"
            >
              We design and build practical technology solutions that help
              businesses automate operations, improve efficiency, and grow —
              across software, AI, automation, IoT, robotics and digital
              solutions.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <a
                href="#connect"
                className="group flex items-center gap-3 border border-primary bg-primary px-7 py-3.5 font-mono-tech text-xs uppercase tracking-widest text-white transition-all hover:bg-primary/90"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href="#expertise"
                className="group flex items-center gap-3 border border-white/20 bg-[#2b211d] px-7 py-3.5 font-mono-tech text-xs uppercase tracking-widest text-foreground transition-colors hover:border-white/50"
              >
                <span>Explore Our Expertise</span>
              </a>
            </motion.div>
          </div>

          {/* Right Hero Fixed Artistic PECSA Wordmark Discipline Selector */}
          <div>
            <HeroSculpture />
          </div>
        </div>
      </div>
    </section>
  )
}
