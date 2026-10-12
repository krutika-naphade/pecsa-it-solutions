import { Metadata } from 'next'
import { Nav } from '@/components/pecsa/nav'
import { SideNav } from '@/components/pecsa/side-nav'
import { BuildWithUs } from '@/components/pecsa/build-with-us'
import { Footer } from '@/components/pecsa/footer'

export const metadata: Metadata = {
  title: 'Privacy Policy | PECSA IT Solutions',
  description: 'PECSA IT Solutions privacy commitments and data handling requirements.',
}

export default function PrivacyPolicyPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden pt-20 bg-background text-foreground">
      <Nav />
      <SideNav />

      <section className="bg-background py-16 sm:py-20 border-b border-border tech-grid-bg">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <span className="font-mono-tech text-xs uppercase tracking-widest text-primary font-bold block mb-3">
            LEGAL & COMPLIANCE
          </span>
          <h1 className="font-serif-editorial text-4xl sm:text-6xl font-normal text-foreground">
            Privacy <span className="text-primary italic">Policy.</span>
          </h1>
          <p className="mt-6 max-w-3xl font-sans text-base sm:text-lg leading-relaxed text-muted-foreground">
            Information and privacy standards for PECSA IT Solutions.
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="mx-auto max-w-4xl px-6 sm:px-10 space-y-10 text-muted-foreground font-sans leading-relaxed text-sm sm:text-base">
          <div>
            <h2 className="font-serif-editorial text-2xl text-foreground font-normal mb-3">
              1. Inquiries & Communication
            </h2>
            <p>
              When submitting inquiries through our contact channels, we receive information you directly provide, such as your name, email address, and project requirements. This information is used strictly to respond to your request and discuss project requirements.
            </p>
          </div>

          <div>
            <h2 className="font-serif-editorial text-2xl text-foreground font-normal mb-3">
              2. Official Direct Contact
            </h2>
            <p>
              For all official inquiries regarding privacy or data handling, please contact PECSA IT Solutions directly:
            </p>
            <ul className="mt-3 space-y-1 font-mono-tech text-xs text-foreground/90">
              <li>• Company: PECSA IT Solutions</li>
              <li>• Location: Nagpur, Maharashtra, India</li>
              <li>• Email:{' '}
                <a href="mailto:contact@pecsa.in" className="text-primary underline font-bold">
                  contact@pecsa.in
                </a>
              </li>
            </ul>
          </div>

          <div className="border border-border bg-card p-6 text-xs font-mono-tech text-muted-foreground">
            <span className="text-primary font-bold block uppercase tracking-widest mb-2">
              [Pending PECSA Input — Legal Content Requirements]
            </span>
            <p className="mb-2">
              The following legal sections require formal review and input from PECSA before final publication:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
              <li>Formal Registered Legal Entity Details & Registration Number</li>
              <li>Official Data Protection & Controller Designation</li>
              <li>Website Analytics & Cookie Policy Specifications</li>
              <li>Third-Party Infrastructure & Hosting Privacy Terms</li>
              <li>Regulatory Compliance Disclosures (e.g. GDPR, DPDP Act India)</li>
            </ul>
          </div>
        </div>
      </section>

      <BuildWithUs />
      <Footer />
    </main>
  )
}
