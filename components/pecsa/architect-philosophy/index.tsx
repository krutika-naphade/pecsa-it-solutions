'use client'

import { useState } from 'react'
import { ArchitectHero } from './hero'
import { PhilosophySections } from './sections'
import { ClosingCTASection } from './closing-cta'
import { PracticeBriefModal } from './intake-modal'

export function ArchitectPhilosophy() {
  const [briefOpen, setBriefOpen] = useState(false)

  return (
    <div className="relative w-full bg-background text-foreground">
      {/* 00. Hero Section: "Your portfolio should look like you think." */}
      <ArchitectHero onOpenModal={() => setBriefOpen(true)} />

      {/* 01 through 07. Documented Philosophy Sections */}
      <PhilosophySections />

      {/* 08. Closing Manifesto & CTA */}
      <ClosingCTASection onOpenBrief={() => setBriefOpen(true)} />

      {/* Practice Brief Intake Modal */}
      <PracticeBriefModal
        isOpen={briefOpen}
        onClose={() => setBriefOpen(false)}
      />
    </div>
  )
}
