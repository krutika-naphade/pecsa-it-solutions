'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence, useReducedMotion } from 'motion/react'
import { CheckCircle2 } from 'lucide-react'
import { Section } from '../primitives'
import { VISUAL_LANGUAGES, VIEWER_JOURNEY_STEPS } from './data'

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

export function PhilosophySections() {
  const [selectedLanguage, setSelectedLanguage] = useState(0)
  const [activeJourneyStep, setActiveJourneyStep] = useState(0)

  return (
    <>
      {/* -------------------------------------------------------------------- */}
      {/* 01 — WE UNDERSTAND BEFORE WE DESIGN                                  */}
      {/* -------------------------------------------------------------------- */}
      <Section
        id="section-01"
        index="01"
        eyebrow="WE UNDERSTAND BEFORE WE DESIGN"
        className="border-b border-border"
      >
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-start">
          <div>
            <RevealItem>
              <h2 className="font-serif-editorial text-3xl sm:text-5xl md:text-6xl font-normal leading-[1.04] text-foreground">
                We understand before we design.
              </h2>
            </RevealItem>

            <RevealItem delay={0.1}>
              <div className="mt-6 space-y-4 font-sans text-base sm:text-lg leading-relaxed text-muted-foreground">
                <p className="text-foreground font-medium text-lg sm:text-xl">
                  We don’t start with templates, colours or animations.
                </p>
                <p>
                  We first understand what kind of architect you are, what your work stands for,
                  how you approach a project, what makes your practice different, and what you want
                  a client to feel when they visit your portfolio.
                </p>
              </div>
            </RevealItem>

            <RevealItem delay={0.18}>
              <div className="mt-8 border-l-2 border-primary bg-card/60 p-6 sm:p-8">
                <blockquote className="font-serif-editorial text-2xl sm:text-3xl md:text-4xl italic text-foreground leading-snug">
                  “Because design without understanding becomes decoration.”
                </blockquote>
                <span className="mt-3 block font-mono-tech text-xs uppercase tracking-widest text-primary font-semibold">
                  — The PECSA Architectural Foundation
                </span>
              </div>
            </RevealItem>

            <RevealItem delay={0.25} className="mt-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono-tech text-xs">
                <div className="border border-border bg-card p-4">
                  <span className="text-primary font-bold block mb-1">[01. SPATIAL ETHOS]</span>
                  <span className="text-foreground font-medium">What your practice stands for and rejects</span>
                </div>
                <div className="border border-border bg-card p-4">
                  <span className="text-primary font-bold block mb-1">[02. PROJECT GENEALOGY]</span>
                  <span className="text-foreground font-medium">How an idea transforms into physical enclosure</span>
                </div>
                <div className="border border-border bg-card p-4">
                  <span className="text-primary font-bold block mb-1">[03. PRACTICE DISTINCTION]</span>
                  <span className="text-foreground font-medium">What makes your methodology unmistakable</span>
                </div>
                <div className="border border-border bg-card p-4">
                  <span className="text-primary font-bold block mb-1">[04. VISITOR RESONANCE]</span>
                  <span className="text-foreground font-medium">What a client feels within 10 seconds</span>
                </div>
              </div>
            </RevealItem>
          </div>

          <RevealItem delay={0.2}>
            <div className="border border-border bg-card overflow-hidden">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/images/architects/sketch-process.jpg"
                  alt="Close-up of architectural design sketches, tracing paper drawings with graphite annotations, timber study block on an architect workbench"
                  fill
                  sizes="(max-width: 1024px) 100vw, 580px"
                  className="object-cover"
                />
              </div>
              <div className="p-5 border-t border-border bg-card">
                <div className="flex items-center justify-between font-mono-tech text-xs text-muted-foreground pb-2 border-b border-border/60">
                  <span className="text-primary font-bold">ARTIFACT // DISCOVERY AUDIT</span>
                  <span>PLATE 02</span>
                </div>
                <p className="mt-3 font-sans text-xs text-muted-foreground leading-relaxed">
                  Before a single line of code is committed, we examine tracing paper iterations, client interviews, site models, and hand notes to locate the spine of your practice.
                </p>
              </div>
            </div>
          </RevealItem>
        </div>
      </Section>

      {/* -------------------------------------------------------------------- */}
      {/* 02 — PROJECTS ARE NOT JUST IMAGES                                    */}
      {/* -------------------------------------------------------------------- */}
      <Section
        id="section-02"
        index="02"
        eyebrow="PROJECTS ARE NOT JUST IMAGES"
        className="border-b border-border"
      >
        <div className="max-w-3xl">
          <RevealItem>
            <h2 className="font-serif-editorial text-3xl sm:text-5xl md:text-6xl font-normal leading-[1.04] text-foreground">
              Your projects are not just images.
            </h2>
          </RevealItem>

          <RevealItem delay={0.1}>
            <p className="mt-6 font-sans text-lg sm:text-xl leading-relaxed text-muted-foreground">
              A portfolio shouldn’t feel like a gallery of disconnected projects.
            </p>
            <p className="mt-2 font-sans text-base sm:text-lg leading-relaxed text-foreground font-medium">
              We look at the journey behind the work:
            </p>
          </RevealItem>
        </div>

        <RevealItem delay={0.15} className="mt-10 sm:mt-14">
          <div className="hidden lg:grid grid-cols-5 gap-3 border border-border bg-card p-6 shadow-sm">
            {[
              { num: '01', label: 'Project', desc: 'The brief, scale, site constraints, and spatial ambition.' },
              { num: '02', label: 'Context', desc: 'Topography, climate, daylight orientation, and cultural history.' },
              { num: '03', label: 'Idea', desc: 'The conceptual core thesis and structural spatial principle.' },
              { num: '04', label: 'Process', desc: 'Section cuts, structural models, material mockups, and joinery.' },
              { num: '05', label: 'Outcome', desc: 'The built reality experienced through time, light, and occupation.' },
            ].map((step, idx) => (
              <div
                key={step.num}
                className={`relative flex flex-col justify-between p-4 border-l-2 ${
                  idx === 0 ? 'border-primary' : 'border-border hover:border-primary'
                } transition-colors`}
              >
                <div>
                  <span className="font-mono-tech text-xs text-primary font-bold block mb-1">[{step.num}]</span>
                  <span className="font-serif-editorial text-2xl font-normal text-foreground block">{step.label}</span>
                </div>
                <p className="mt-4 font-sans text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
                {idx < 4 && (
                  <span className="absolute -right-2.5 top-1/2 -translate-y-1/2 text-primary text-xs font-mono-tech hidden xl:block" aria-hidden="true">
                    →
                  </span>
                )}
              </div>
            ))}
          </div>

          <div className="lg:hidden flex flex-col gap-3">
            {[
              { num: '01', label: 'Project', desc: 'The brief, scale, site constraints, and spatial ambition.' },
              { num: '02', label: 'Context', desc: 'Topography, climate, daylight orientation, and cultural history.' },
              { num: '03', label: 'Idea', desc: 'The conceptual core thesis and structural spatial principle.' },
              { num: '04', label: 'Process', desc: 'Section cuts, structural models, material mockups, and joinery.' },
              { num: '05', label: 'Outcome', desc: 'The built reality experienced through time, light, and occupation.' },
            ].map((step, idx) => (
              <div key={step.num} className="border border-border bg-card p-5 flex items-start gap-4 border-l-2 border-l-primary">
                <span className="font-mono-tech text-xs text-primary font-bold shrink-0 mt-1">[{step.num}]</span>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="font-serif-editorial text-2xl font-normal text-foreground">{step.label}</span>
                    {idx < 4 && <span className="font-mono-tech text-xs text-primary">↓</span>}
                  </div>
                  <p className="mt-1 font-sans text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </RevealItem>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-start">
          <RevealItem delay={0.2}>
            <div className="border border-border bg-card p-6 sm:p-10">
              <span className="font-mono-tech text-xs uppercase tracking-widest text-primary font-bold block mb-3">
                THE DIGITAL MONOGRAPH CRITERIA
              </span>
              <p className="font-serif-editorial text-2xl sm:text-3xl text-foreground leading-snug">
                The website should help someone understand why a project exists, not just what it looks like.
              </p>
              <div className="mt-6 pt-6 border-t border-border flex flex-col gap-3 font-sans text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  <span>Cross-sections and axonometrics paired alongside high-resolution photography.</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  <span>Site conditions, climatic orientation, and client intent documented cleanly.</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  <span>Material schedules and construction details given dignity and space.</span>
                </div>
              </div>
            </div>
          </RevealItem>

          <RevealItem delay={0.25}>
            <div className="border border-border bg-card overflow-hidden">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/images/architects/context-section.jpg"
                  alt="Architectural orthographic section drawing and physical basswood structural model on an architect drafting table"
                  fill
                  sizes="(max-width: 1024px) 100vw, 560px"
                  className="object-cover"
                />
              </div>
              <div className="p-4 border-t border-border bg-card flex items-center justify-between font-mono-tech text-xs text-muted-foreground">
                <span className="text-foreground font-semibold">Plate 03 — Process & Sectional Truth</span>
                <span>ORTHOGRAPHIC MONOGRAPH</span>
              </div>
            </div>
          </RevealItem>
        </div>
      </Section>

      {/* -------------------------------------------------------------------- */}
      {/* 03 — VISUAL LANGUAGE                                                 */}
      {/* -------------------------------------------------------------------- */}
      <Section
        id="section-03"
        index="03"
        eyebrow="VISUAL LANGUAGE"
        className="border-b border-border"
      >
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-start">
          <div>
            <RevealItem>
              <h2 className="font-serif-editorial text-3xl sm:text-5xl md:text-6xl font-normal leading-[1.04] text-foreground">
                We design around your visual language.
              </h2>
            </RevealItem>

            <RevealItem delay={0.1}>
              <div className="mt-6 space-y-4 font-sans text-base sm:text-lg leading-relaxed text-muted-foreground">
                <p className="text-foreground font-medium text-lg sm:text-xl">
                  Every architect has a visual language.
                </p>
                <p>
                  Some are minimal and restrained. Some are material-driven, experimental, contextual,
                  luxury-oriented, raw and industrial, or contemporary and expressive.
                </p>
                <p>
                  We use that character to influence the typography, spacing, imagery, navigation,
                  interactions and overall rhythm of the website.
                </p>
              </div>
            </RevealItem>

            <RevealItem delay={0.2} className="mt-8">
              <div className="border border-border bg-card p-6 sm:p-8">
                <div className="flex items-center justify-between border-b border-border pb-3 mb-4">
                  <span className="font-mono-tech text-xs uppercase tracking-widest text-primary font-bold">
                    VISUAL LANGUAGE INTERACTION
                  </span>
                  <span className="font-mono-tech text-xs text-muted-foreground">SELECT TYPOLOGY</span>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {VISUAL_LANGUAGES.map((lang, index) => (
                    <button
                      key={lang.id}
                      type="button"
                      onClick={() => setSelectedLanguage(index)}
                      className={`px-3.5 py-2 font-mono-tech text-xs uppercase tracking-wider transition-all cursor-pointer border ${
                        selectedLanguage === index
                          ? 'border-primary bg-primary text-white font-semibold'
                          : 'border-border bg-background text-muted-foreground hover:text-foreground hover:border-foreground/40'
                      }`}
                    >
                      {lang.title.split(' ')[0]}
                    </button>
                  ))}
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedLanguage}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-4"
                  >
                    <div>
                      <span className="font-mono-tech text-xs text-primary font-bold uppercase tracking-widest block">
                        Typology {selectedLanguage + 1} // {VISUAL_LANGUAGES[selectedLanguage].title}
                      </span>
                      <h3 className="font-serif-editorial text-2xl font-normal text-foreground mt-1">
                        {VISUAL_LANGUAGES[selectedLanguage].subtitle}
                      </h3>
                      <p className="mt-2 font-sans text-sm text-muted-foreground leading-relaxed">
                        {VISUAL_LANGUAGES[selectedLanguage].description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-border grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono-tech text-xs">
                      <div>
                        <span className="text-muted-foreground text-[10px] uppercase block">Digital Parameters</span>
                        <ul className="mt-1 space-y-1 text-foreground">
                          {VISUAL_LANGUAGES[selectedLanguage].attributes.map((attr) => (
                            <li key={attr} className="flex items-center gap-1.5">
                              <span className="h-1 w-1 rounded-full bg-primary" />
                              <span>{attr}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <span className="text-muted-foreground text-[10px] uppercase block">Material Correlate</span>
                        <span className="mt-1 block text-foreground font-semibold">
                          {VISUAL_LANGUAGES[selectedLanguage].materiality}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </RevealItem>
          </div>

          <RevealItem delay={0.25}>
            <div className="border border-border bg-card overflow-hidden">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/images/architects/materials-detail.jpg"
                  alt="Architectural tactile materials moodboard, board-formed concrete, travertine limestone, aged brass, dark fluted oak, and linen sample"
                  fill
                  sizes="(max-width: 1024px) 100vw, 560px"
                  className="object-cover"
                />
              </div>
              <div className="p-5 border-t border-border bg-card">
                <div className="flex items-center justify-between font-mono-tech text-xs text-muted-foreground pb-2 border-b border-border/60">
                  <span className="text-primary font-bold">MATERIAL HARMONY</span>
                  <span>PLATE 04</span>
                </div>
                <p className="mt-3 font-sans text-xs text-muted-foreground leading-relaxed">
                  We translate physical materiality—honed travertine, blackened steel, tactile timber grains, and linen textures—into typographic balance, responsive pacing, and subtle interface warmth.
                </p>
              </div>
            </div>
          </RevealItem>
        </div>
      </Section>

      {/* -------------------------------------------------------------------- */}
      {/* 04 — THE WEBSITE IS THE FRAME                                        */}
      {/* -------------------------------------------------------------------- */}
      <Section
        id="section-04"
        index="04"
        eyebrow="THE WEBSITE IS THE FRAME"
        className="border-b border-border"
      >
        <div className="mx-auto max-w-4xl text-center">
          <RevealItem>
            <span className="font-mono-tech text-xs uppercase tracking-widest text-primary font-bold block mb-4">
              CURATORIAL RIGOR // ZERO DISTRACTION
            </span>
            <h2 className="font-serif-editorial text-3xl sm:text-5xl md:text-6xl font-normal leading-[1.04] text-foreground">
              We don’t let the website overpower the architecture.
            </h2>
          </RevealItem>

          <RevealItem delay={0.12} className="my-10 sm:my-14">
            <div className="border border-border bg-card p-8 sm:p-14 shadow-sm relative">
              <span className="font-mono-tech text-[10px] uppercase tracking-widest text-muted-foreground absolute top-4 left-6">
                FRAME MANIFESTO
              </span>
              <p className="font-serif-editorial text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-primary tracking-tight leading-none italic">
                “The website is the frame, not the artwork.”
              </p>
              <p className="mt-6 font-sans text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Our job is to create enough visual character to make the portfolio memorable,
                while keeping the focus on the architect’s work.
              </p>
            </div>
          </RevealItem>

          <RevealItem delay={0.2}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left font-mono-tech text-xs">
              <div className="border-2 border-primary bg-primary/5 p-6 sm:p-8">
                <span className="text-primary font-bold block mb-2 text-sm uppercase tracking-wider">
                  The website should say:
                </span>
                <p className="font-serif-editorial text-2xl sm:text-3xl text-foreground font-normal leading-snug">
                  “This is their work.”
                </p>
                <p className="mt-3 font-sans text-xs text-muted-foreground">
                  The visitor is captivated by the light, proportion, spatial genius, and tectonic resolve of your buildings.
                </p>
              </div>

              <div className="border border-border bg-card p-6 sm:p-8">
                <span className="text-muted-foreground font-bold block mb-2 text-sm uppercase tracking-wider">
                  Not:
                </span>
                <p className="font-serif-editorial text-2xl sm:text-3xl text-muted-foreground font-normal line-through decoration-primary decoration-2 leading-snug">
                  “Look what the website designer did.”
                </p>
                <p className="mt-3 font-sans text-xs text-muted-foreground">
                  No gratuitous animations, no gimmicky cursors, no slow-motion canvas bloat competing with your architecture.
                </p>
              </div>
            </div>
          </RevealItem>
        </div>

        <RevealItem delay={0.25} className="mt-14 sm:mt-18">
          <div className="relative border border-border bg-card overflow-hidden">
            <div className="relative aspect-[16/9] md:aspect-[21/9] w-full">
              <Image
                src="/images/architects/frame-space.jpg"
                alt="Minimalist architectural smooth concrete portal framing a serene Japanese courtyard with red maple, exemplifying the website as a quiet frame"
                fill
                sizes="(max-width: 768px) 100vw, 1280px"
                className="object-cover"
              />
            </div>
            <div className="p-4 sm:p-5 flex flex-wrap items-center justify-between gap-3 border-t border-border bg-card/90 font-mono-tech text-xs text-muted-foreground">
              <span className="text-foreground font-medium uppercase tracking-wider">
                Plate 05 — The Architecture Remains the Artwork. The Digital System Remains the Frame.
              </span>
              <span className="text-[11px] uppercase tracking-widest">PROPORTIONAL HARMONY</span>
            </div>
          </div>
        </RevealItem>
      </Section>

      {/* -------------------------------------------------------------------- */}
      {/* 05 — THE VIEWER JOURNEY                                              */}
      {/* -------------------------------------------------------------------- */}
      <Section
        id="section-05"
        index="05"
        eyebrow="THE VIEWER JOURNEY"
        className="border-b border-border"
      >
        <div className="max-w-3xl">
          <RevealItem>
            <h2 className="font-serif-editorial text-3xl sm:text-5xl md:text-6xl font-normal leading-[1.04] text-foreground">
              We think about the person viewing it.
            </h2>
          </RevealItem>

          <RevealItem delay={0.1}>
            <p className="mt-6 font-sans text-lg sm:text-xl leading-relaxed text-muted-foreground">
              A potential client may know nothing about the architect before opening the website.
            </p>
            <p className="mt-2 font-sans text-base sm:text-lg leading-relaxed text-foreground font-medium">
              So we think about the journey:
            </p>
          </RevealItem>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.3fr] lg:items-start">
          <RevealItem delay={0.15}>
            <div className="space-y-2">
              {VIEWER_JOURNEY_STEPS.map((step, idx) => (
                <button
                  key={step.step}
                  type="button"
                  onClick={() => setActiveJourneyStep(idx)}
                  className={`w-full text-left p-4 sm:p-5 border transition-all cursor-pointer ${
                    activeJourneyStep === idx
                      ? 'border-primary bg-card shadow-sm border-l-4'
                      : 'border-border bg-background hover:bg-card hover:border-foreground/30'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono-tech text-xs text-primary font-bold">[{step.step}]</span>
                    <span className="font-mono-tech text-[10px] uppercase text-muted-foreground">
                      STAGE {idx + 1} OF 5
                    </span>
                  </div>
                  <h3 className="font-serif-editorial text-xl sm:text-2xl font-normal text-foreground mt-1">
                    {step.question}
                  </h3>
                  <span className="font-sans text-xs text-muted-foreground block mt-1">{step.subtitle}</span>
                </button>
              ))}
            </div>
          </RevealItem>

          <RevealItem delay={0.2}>
            <div className="border border-border bg-card p-6 sm:p-10 shadow-sm sticky top-28">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeJourneyStep}
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -12 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-6"
                >
                  <div className="flex items-center justify-between border-b border-border pb-3">
                    <span className="font-mono-tech text-xs text-primary font-bold uppercase tracking-widest">
                      STAGE {VIEWER_JOURNEY_STEPS[activeJourneyStep].step} // VISITOR PSYCHOLOGY
                    </span>
                    <span className="font-mono-tech text-xs text-muted-foreground uppercase">PECSA FRAMEWORK</span>
                  </div>

                  <div>
                    <h3 className="font-serif-editorial text-3xl sm:text-4xl text-foreground font-normal">
                      {VIEWER_JOURNEY_STEPS[activeJourneyStep].question}
                    </h3>
                    <span className="font-mono-tech text-xs text-primary uppercase tracking-wider block mt-1">
                      {VIEWER_JOURNEY_STEPS[activeJourneyStep].subtitle}
                    </span>
                  </div>

                  <div className="border-t border-border pt-4">
                    <span className="font-mono-tech text-xs uppercase tracking-wider text-muted-foreground block mb-1">
                      Visitor Mental State
                    </span>
                    <p className="font-sans text-base text-foreground leading-relaxed">
                      {VIEWER_JOURNEY_STEPS[activeJourneyStep].purpose}
                    </p>
                  </div>

                  <div className="border-t border-border pt-4 bg-background/50 p-4 border border-border/60">
                    <span className="font-mono-tech text-xs uppercase tracking-wider text-primary font-bold block mb-1">
                      PECSA Digital Translation
                    </span>
                    <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                      {VIEWER_JOURNEY_STEPS[activeJourneyStep].digitalExecution}
                    </p>
                  </div>

                  <div className="pt-2">
                    <blockquote className="font-serif-editorial text-lg italic text-foreground border-l-2 border-primary pl-4">
                      “Every section should have a reason to exist.”
                    </blockquote>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </RevealItem>
        </div>
      </Section>

      {/* -------------------------------------------------------------------- */}
      {/* 06 — THE ARCHITECT’S VOICE                                           */}
      {/* -------------------------------------------------------------------- */}
      <Section
        id="section-06"
        index="06"
        eyebrow="THE ARCHITECT’S VOICE"
        className="border-b border-border"
      >
        <div className="max-w-3xl">
          <RevealItem>
            <h2 className="font-serif-editorial text-3xl sm:text-5xl md:text-6xl font-normal leading-[1.04] text-foreground">
              We preserve the architect’s voice.
            </h2>
          </RevealItem>

          <RevealItem delay={0.1}>
            <p className="mt-6 font-sans text-lg sm:text-xl leading-relaxed text-muted-foreground">
              We don’t want every architecture portfolio to look like the same “premium architecture website.”
            </p>
            <p className="mt-3 font-sans text-base sm:text-lg leading-relaxed text-foreground">
              The words, project descriptions, photographs, drawings and philosophy should still feel
              like they came from the architect.
            </p>
          </RevealItem>
        </div>

        <RevealItem delay={0.2} className="mt-12 sm:mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-2 border-primary bg-card p-8 sm:p-12 shadow-sm flex flex-col justify-between">
              <div>
                <span className="font-mono-tech text-xs uppercase tracking-widest text-primary font-bold block mb-3">
                  PECSA COMMITMENT
                </span>
                <p className="font-serif-editorial text-3xl sm:text-4xl md:text-5xl text-foreground font-normal leading-tight">
                  PECSA provides the digital thinking.
                </p>
              </div>
              <ul className="mt-8 space-y-2.5 font-sans text-sm text-muted-foreground border-t border-border pt-6">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                  <span>Monograph responsive architecture & viewport ratios</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                  <span>Subtle performance-optimized image streaming & caching</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                  <span>Clean keyboard accessibility and search indexing</span>
                </li>
              </ul>
            </div>

            <div className="border border-border bg-card p-8 sm:p-12 shadow-sm flex flex-col justify-between">
              <div>
                <span className="font-mono-tech text-xs uppercase tracking-widest text-muted-sage font-bold block mb-3">
                  STUDIO ESSENCE
                </span>
                <p className="font-serif-editorial text-3xl sm:text-4xl md:text-5xl text-foreground font-normal leading-tight">
                  The architect provides the identity.
                </p>
              </div>
              <ul className="mt-8 space-y-2.5 font-sans text-sm text-muted-foreground border-t border-border pt-6">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-muted-sage shrink-0" />
                  <span>Spatial convictions, philosophy essays & studio lineage</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-muted-sage shrink-0" />
                  <span>Authentic drawings, construction details & sketches</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-muted-sage shrink-0" />
                  <span>Specific project nomenclature and critical reflections</span>
                </li>
              </ul>
            </div>
          </div>
        </RevealItem>
      </Section>

      {/* -------------------------------------------------------------------- */}
      {/* 07 — LONGEVITY                                                       */}
      {/* -------------------------------------------------------------------- */}
      <Section
        id="section-07"
        index="07"
        eyebrow="LONGEVITY"
        className="border-b border-border"
      >
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-start">
          <div>
            <RevealItem>
              <h2 className="font-serif-editorial text-3xl sm:text-5xl md:text-6xl font-normal leading-[1.04] text-foreground">
                We build for longevity.
              </h2>
            </RevealItem>

            <RevealItem delay={0.1}>
              <div className="mt-6 space-y-4 font-sans text-base sm:text-lg leading-relaxed text-muted-foreground">
                <p className="text-foreground font-medium text-lg sm:text-xl">
                  An architect’s portfolio is never really finished.
                </p>
                <p>New projects come. Old projects evolve. The practice grows.</p>
                <p>
                  So we think about how the website can remain useful—not just how it can look
                  impressive on launch day.
                </p>
              </div>
            </RevealItem>

            <RevealItem delay={0.2} className="mt-8">
              <div className="border border-border bg-card p-6 sm:p-8 space-y-4">
                <span className="font-mono-tech text-xs uppercase tracking-widest text-primary font-bold block">
                  SCALABLE STUDIO ARCHITECTURE
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 font-mono-tech text-xs">
                  <div className="border border-border/80 bg-background p-3">
                    <span className="text-primary font-bold block mb-1">LAUNCH DAY</span>
                    <span className="text-foreground text-sm font-serif-editorial block">Crisp Monograph</span>
                    <span className="text-[11px] text-muted-foreground mt-1 block">Curated initial projects, clear thesis</span>
                  </div>
                  <div className="border border-border/80 bg-background p-3">
                    <span className="text-primary font-bold block mb-1">YEAR 01</span>
                    <span className="text-foreground text-sm font-serif-editorial block">Effortless Growth</span>
                    <span className="text-[11px] text-muted-foreground mt-1 block">Structured CMS, rapid project additions</span>
                  </div>
                  <div className="border border-border/80 bg-background p-3">
                    <span className="text-primary font-bold block mb-1">YEAR 03+</span>
                    <span className="text-foreground text-sm font-serif-editorial block">Living Archive</span>
                    <span className="text-[11px] text-muted-foreground mt-1 block">Retrospective taxonomy & monographs</span>
                  </div>
                </div>
                <p className="pt-2 font-sans text-xs text-muted-foreground leading-relaxed">
                  Clean code, decoupled content models, and maintainable project schemas ensure your portfolio never becomes obsolete or rigid as your studio wins new commissions.
                </p>
              </div>
            </RevealItem>
          </div>

          <RevealItem delay={0.25}>
            <div className="border border-border bg-card p-8 sm:p-12 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 font-mono-tech text-[10px] text-primary/40 uppercase tracking-widest">
                TEMPORAL DURABILITY
              </div>
              <span className="font-mono-tech text-xs uppercase tracking-widest text-primary font-bold block mb-4">
                THE ENDURING STANDARD
              </span>
              <h3 className="font-serif-editorial text-2xl sm:text-3xl text-foreground font-normal leading-snug">
                Built to age with the dignity of honest materials.
              </h3>
              <p className="mt-4 font-sans text-sm text-muted-foreground leading-relaxed">
                Just as stone, timber, and copper acquire character through seasonal exposure, your digital home is engineered without ephemeral web gimmicks that feel dated after six months.
              </p>
              <div className="mt-8 pt-6 border-t border-border grid grid-cols-2 gap-4 font-mono-tech text-xs">
                <div>
                  <span className="text-muted-foreground uppercase text-[10px] block">Performance Baseline</span>
                  <span className="text-foreground font-semibold">Sub-second Monograph Load</span>
                </div>
                <div>
                  <span className="text-muted-foreground uppercase text-[10px] block">Content Independence</span>
                  <span className="text-foreground font-semibold">Zero Vendor Lock-in</span>
                </div>
              </div>
            </div>
          </RevealItem>
        </div>
      </Section>
    </>
  )
}
