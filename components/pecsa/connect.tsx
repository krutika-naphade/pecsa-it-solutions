'use client'

import { AnimatePresence, motion } from 'motion/react'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import { useState, type FormEvent } from 'react'
import { Reveal, Section } from './primitives'

const INTERESTS = [
  'Software Development',
  'AI Solutions',
  'Automation',
  'IoT Solutions',
  'Robotics',
  'Digital Solutions',
  'Partnership',
  'Careers',
  'Something else',
]

type Fields = {
  name: string
  email: string
  company: string
  interest: string
  message: string
}

const EMPTY: Fields = { name: '', email: '', company: '', interest: '', message: '' }

export function Connect() {
  const [values, setValues] = useState<Fields>(EMPTY)
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({})
  const [sent, setSent] = useState(false)

  function set<K extends keyof Fields>(key: K, value: string) {
    setValues((v) => ({ ...v, [key]: value }))
    setErrors((e) => ({ ...e, [key]: undefined }))
  }

  function validate(): boolean {
    const next: Partial<Record<keyof Fields, string>> = {}
    if (!values.name.trim()) next.name = 'Please tell us your name.'
    if (!values.email.trim()) next.email = 'Please add an email so we can reply.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
      next.email = 'That email address looks incomplete.'
    if (!values.interest) next.interest = 'Pick the area closest to your need.'
    if (!values.message.trim() || values.message.trim().length < 10)
      next.message = 'A sentence or two about your goal helps us reply well.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (validate()) setSent(true)
  }

  function reset() {
    setValues(EMPTY)
    setErrors({})
    setSent(false)
  }

  const fieldClass =
    'w-full border border-white/15 bg-[#211a17] px-4 py-3.5 text-foreground outline-none font-sans text-sm transition-all placeholder:text-muted-foreground/50 focus:border-primary focus:ring-1 focus:ring-primary'

  return (
    <Section id="connect" index="11" eyebrow="Let's Connect">
      <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:items-start">
        <div>
          <Reveal>
            <h2 className="font-serif-editorial text-5xl sm:text-6xl md:text-7xl font-normal leading-[0.98] text-foreground">
              Have a problem worth{' '}
              <span className="text-primary italic font-serif-editorial">solving?</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 font-sans text-base leading-relaxed text-muted-foreground max-w-lg">
              Tell us what you are trying to achieve. We will get back to you to
              explore whether — and how — technology can help. No obligation,
              just a genuine conversation about your goal.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-10 flex flex-col gap-4 border-l-2 border-primary pl-6">
              {[
                'We read every message ourselves.',
                'We reply with honest, practical direction.',
                'If technology is not the answer, we will say so.',
              ].map((line) => (
                <div key={line} className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 bg-primary" aria-hidden="true" />
                  <p className="font-mono-tech text-xs uppercase tracking-wider text-white/80 font-medium">{line}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="border border-white/10 bg-[#2b211d] p-8 sm:p-10 shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
              <span className="font-mono-tech text-xs uppercase tracking-widest text-primary font-bold">
                PROJECT INTAKE
              </span>
              <span className="font-mono-tech text-xs text-white/40">
                DIRECT CONTACT
              </span>
            </div>

            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col items-center py-10 text-center"
                >
                  <span className="flex h-16 w-16 items-center justify-center border border-primary bg-primary/10 text-primary">
                    <CheckCircle2 className="h-8 w-8" />
                  </span>
                  <h3 className="mt-6 font-serif-editorial text-3xl font-normal text-foreground">
                    Message Received
                  </h3>
                  <p className="mt-3 max-w-sm font-sans text-sm leading-relaxed text-muted-foreground">
                    Thanks, {values.name.split(' ')[0] || 'there'}. We have your
                    note about {values.interest.toLowerCase()} and will get back
                    to you to explore how we can help.
                  </p>
                  <button
                    type="button"
                    onClick={reset}
                    className="mt-8 border border-primary bg-primary px-6 py-3 font-mono-tech text-xs uppercase tracking-widest text-white hover:bg-primary/90 transition-all cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  onSubmit={handleSubmit}
                  noValidate
                  className="flex flex-col gap-6"
                >
                  <div className="grid gap-6 sm:grid-cols-2">
                    <Field label="Name" error={errors.name}>
                      <input
                        className={fieldClass}
                        value={values.name}
                        onChange={(e) => set('name', e.target.value)}
                        placeholder="Your name"
                        autoComplete="name"
                      />
                    </Field>
                    <Field label="Email" error={errors.email}>
                      <input
                        type="email"
                        className={fieldClass}
                        value={values.email}
                        onChange={(e) => set('email', e.target.value)}
                        placeholder="you@company.com"
                        autoComplete="email"
                      />
                    </Field>
                  </div>

                  <Field label="Company" hint="Optional">
                    <input
                      className={fieldClass}
                      value={values.company}
                      onChange={(e) => set('company', e.target.value)}
                      placeholder="Company or organisation"
                      autoComplete="organization"
                    />
                  </Field>

                  <Field label="Interest" error={errors.interest}>
                    <select
                      className={`${fieldClass} appearance-none`}
                      value={values.interest}
                      onChange={(e) => set('interest', e.target.value)}
                    >
                      <option value="" disabled>
                        What is this about?
                      </option>
                      {INTERESTS.map((i) => (
                        <option key={i} value={i} className="bg-[#211a17]">
                          {i}
                        </option>
                      ))}
                    </select>
                  </Field>

                  <Field label="Message" error={errors.message}>
                    <textarea
                      rows={4}
                      className={`${fieldClass} resize-none`}
                      value={values.message}
                      onChange={(e) => set('message', e.target.value)}
                      placeholder="Tell us what you are trying to achieve."
                    />
                  </Field>

                  <button
                    type="submit"
                    className="group mt-2 flex items-center justify-center gap-3 border border-primary bg-primary px-8 py-4 font-mono-tech text-xs uppercase tracking-widest text-white hover:bg-primary/90 transition-all cursor-pointer"
                  >
                    <span>Send Message</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}

function Field({
  label,
  hint,
  error,
  children,
}: {
  label: string
  hint?: string
  error?: string
  children: React.ReactNode
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="flex items-center justify-between font-mono-tech text-xs uppercase tracking-wider text-foreground font-medium">
        {label}
        {hint && <span className="text-[10px] text-muted-foreground font-normal">{hint}</span>}
      </span>
      {children}
      {error && (
        <motion.span
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-mono-tech text-[11px] text-primary"
        >
          {error}
        </motion.span>
      )}
    </label>
  )
}
