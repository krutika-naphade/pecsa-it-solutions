'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { X, CheckCircle2, ArrowRight } from 'lucide-react'

interface IntakeModalProps {
  isOpen: boolean
  onClose: () => void
}

export function PracticeBriefModal({ isOpen, onClose }: IntakeModalProps) {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    practiceName: '',
    principalName: '',
    email: '',
    location: '',
    typology: 'Residential Architecture',
    website: '',
    notes: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const handleReset = () => {
    setSubmitted(false)
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="brief-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.2 }}
            className="relative z-10 w-full max-w-2xl border border-border bg-card p-6 sm:p-10 shadow-2xl overflow-y-auto max-h-[90vh]"
          >
            <div className="flex items-center justify-between border-b border-border pb-4 mb-6">
              <div>
                <span className="font-mono-tech text-[10px] uppercase tracking-widest text-primary font-bold block">
                  PECSA ARCHITECTURAL PRACTICE BRIEF
                </span>
                <h3 id="brief-modal-title" className="font-serif-editorial text-2xl text-foreground font-normal">
                  Initiate Your Studio Monograph
                </h3>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="flex h-8 w-8 items-center justify-center border border-border text-muted-foreground hover:text-foreground hover:border-primary transition-colors cursor-pointer"
                aria-label="Close dialog"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {submitted ? (
              <div className="py-8 text-center space-y-4">
                <div className="mx-auto flex h-14 w-14 items-center justify-center border border-primary bg-primary/10 text-primary">
                  <CheckCircle2 className="h-7 w-7" />
                </div>
                <h4 className="font-serif-editorial text-3xl font-normal text-foreground">
                  Brief Transmitted Successfully
                </h4>
                <p className="font-sans text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="text-foreground font-semibold">{formData.principalName || 'Architect'}</span>. Our architectural digital team will review your practice information and respond within one business day.
                </p>
                <button
                  type="button"
                  onClick={handleReset}
                  className="mt-4 border border-primary bg-primary px-6 py-3 font-mono-tech text-xs uppercase tracking-widest text-white hover:bg-primary/90 font-semibold cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 font-sans text-xs">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="font-mono-tech uppercase tracking-wider text-muted-foreground block mb-1.5">
                      Practice / Studio Name *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Studio Tessera"
                      value={formData.practiceName}
                      onChange={(e) => setFormData({ ...formData, practiceName: e.target.value })}
                      className="w-full border border-border bg-background px-3.5 py-2.5 text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="font-mono-tech uppercase tracking-wider text-muted-foreground block mb-1.5">
                      Principal Architect / Contact *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Ar. Elena Vasquez"
                      value={formData.principalName}
                      onChange={(e) => setFormData({ ...formData, principalName: e.target.value })}
                      className="w-full border border-border bg-background px-3.5 py-2.5 text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="font-mono-tech uppercase tracking-wider text-muted-foreground block mb-1.5">
                      Email Address *
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="principal@studiotessera.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full border border-border bg-background px-3.5 py-2.5 text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="font-mono-tech uppercase tracking-wider text-muted-foreground block mb-1.5">
                      Practice Location / City
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Mumbai / London"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full border border-border bg-background px-3.5 py-2.5 text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-mono-tech uppercase tracking-wider text-muted-foreground block mb-1.5">
                    Primary Architectural Typology
                  </label>
                  <select
                    value={formData.typology}
                    onChange={(e) => setFormData({ ...formData, typology: e.target.value })}
                    className="w-full border border-border bg-background px-3.5 py-2.5 text-foreground focus:border-primary focus:outline-none"
                  >
                    <option value="Residential Architecture">Residential & Private Villas</option>
                    <option value="Civic & Cultural Institutions">Civic & Cultural Institutions</option>
                    <option value="Commercial & Workspaces">Commercial & Workplace Architecture</option>
                    <option value="Landscape & Urbanism">Landscape & Urban Masterplanning</option>
                    <option value="Adaptive Reuse & Heritage">Adaptive Reuse & Heritage Conservation</option>
                    <option value="Multi-Disciplinary Design">Multi-Disciplinary Design Studio</option>
                  </select>
                </div>

                <div>
                  <label className="font-mono-tech uppercase tracking-wider text-muted-foreground block mb-1.5">
                    Current Portfolio URL (if any)
                  </label>
                  <input
                    type="url"
                    placeholder="https://..."
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    className="w-full border border-border bg-background px-3.5 py-2.5 text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none"
                  />
                </div>

                <div>
                  <label className="font-mono-tech uppercase tracking-wider text-muted-foreground block mb-1.5">
                    Key Architectural Sensibilities or Project Goals
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Describe your design philosophy, materials focus, or what you feel is missing from your current website..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full border border-border bg-background px-3.5 py-2.5 text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none resize-none"
                  />
                </div>

                <div className="pt-4 border-t border-border flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={onClose}
                    className="border border-border bg-background px-5 py-2.5 font-mono-tech text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 border border-primary bg-primary px-6 py-2.5 font-mono-tech text-xs uppercase tracking-widest text-white hover:bg-primary/90 font-semibold cursor-pointer shadow-xs"
                  >
                    <span>Transmit Brief</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
