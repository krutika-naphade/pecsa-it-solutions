import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'PECSA IT Solutions — Engineering what’s next',
  description:
    'PECSA IT Solutions designs and builds practical technology that helps businesses automate operations, improve efficiency and grow — across software, AI, automation, IoT, robotics and digital solutions.',
  generator: 'v0.app',
  keywords: [
    'PECSA',
    'IT Solutions',
    'software development',
    'AI solutions',
    'automation',
    'IoT',
    'robotics',
    'digital solutions',
  ],
  openGraph: {
    title: 'PECSA IT Solutions — Engineering what’s next',
    description:
      'Technology that solves real business problems — software, AI, automation, IoT and robotics.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0b0e17',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`dark bg-background ${inter.variable} ${spaceGrotesk.variable}`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
