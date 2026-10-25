# PECSA IT Solutions

Modern, multi-page corporate web application for **PECSA IT Solutions** ([pecsa.in](https://pecsa.in)), showcasing practical engineering, enterprise automation, IoT/embedded systems, software products, and architectural technology collaborations.

---

## Overview & Purpose

PECSA IT Solutions designs and builds practical technology that helps businesses automate operations, improve efficiency, and scale across:
- **Software Engineering**: Enterprise web platforms, automated workflows, and custom digital infrastructure.
- **Embedded Systems & IoT**: Real-time telemetry, sensor networks, hardware prototyping, and edge computing.
- **AI & Automation**: Intelligent process automation, data analytics, and operational intelligence.
- **Specialized Industry Verticals**: Solutions for manufacturing, healthcare, logistics, smart residential systems, and architectural technology.

---

## Main Website Pages & Key Features

The application uses the Next.js App Router with static route optimization and responsive light-theme styling:

| Route | Page / Section | Description |
| :--- | :--- | :--- |
| `/` | **Homepage** | Comprehensive portal featuring Hero, Who We Are, Core Expertise, Industry Verticals, Featured Products, How We Work, Technology Stack, and Direct Connect inquiry. |
| `/about` | **About Us** | Company vision, engineering philosophy, and practitioner-led team ethos. |
| `/services` | **Services** | Core service offerings across software engineering, cloud, embedded systems, and automation. |
| `/solutions` | **Solutions** | End-to-end solutions tailored for enterprise workflow automation and intelligent operations. |
| `/industries` | **Industries** | Targeted vertical solutions for manufacturing, logistics, healthcare, and smart infrastructure. |
| `/products` | **Products** | Showcase of proprietary software platforms: **Auditool** (statutory safety audit compliance SaaS) and the **Society Management System** (residential community operations platform). |
| `/projects` | **Projects** | Case studies of verified engineering deployments, including **Industrial Machine Telemetry & IoT** and **Architectural Studio Spatial Portfolios**. |
| `/for-architects` | **For Architects** | Dedicated portal for architectural collaborations, spatial engineering, and interactive technology. |
| `/for-architects/philosophy` | **Architectural Philosophy** | Deep-dive into spatial systems, interactive material explorations, and client intake modal. |
| `/contact` | **Contact** | Direct contact form and inquiry routing. |
| `/privacy-policy` | **Privacy Policy** | Compliance, privacy standards, and data processing terms. |

---

## Technology Stack

- **Framework**: [Next.js](https://nextjs.org/) 16.3.0 (App Router with Turbopack)
- **Language**: [TypeScript](https://www.typescriptlang.org/) 5.7.3 (Strict type checking)
- **UI & Components**: [React](https://react.dev/) 19, [@base-ui/react](https://www.npmjs.com/package/@base-ui/react), shadcn UI component patterns
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) v4 (`@tailwindcss/postcss`, `tailwindcss`), PostCSS 8
- **Animations & Transitions**: [Motion](https://motion.dev/) (v13), Tailwind Animate
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**: [Google Fonts](https://fonts.google.com/) via `next/font` (`Inter` and `Space Grotesk`)
- **Analytics**: [@vercel/analytics](https://vercel.com/analytics) (Client-side telemetry in `lib/analytics.ts`)

---

## Project Structure

```text
pecsa-it-solutions/
├── app/                                    # Next.js App Router (Pages, layout, global styles)
│   ├── about/                              # /about
│   ├── contact/                            # /contact
│   ├── for-architects/                     # /for-architects & /for-architects/philosophy
│   ├── industries/                         # /industries
│   ├── privacy-policy/                     # /privacy-policy
│   ├── products/                           # /products
│   ├── projects/                           # /projects
│   ├── services/                           # /services
│   ├── solutions/                          # /solutions
│   ├── globals.css                         # Tailwind CSS v4 design tokens and utility styles
│   ├── layout.tsx                          # Root layout, Google Fonts, and Vercel Analytics
│   └── page.tsx                            # Homepage assembly
├── components/                             # React components
│   ├── pecsa/                              # Domain-specific components
│   │   ├── architect-philosophy/           # Architectural philosophy sections, modals, & data
│   │   ├── hero.tsx                        # Homepage hero section
│   │   ├── nav.tsx & side-nav.tsx          # Navigation bars and drawer navigation
│   │   ├── who-we-are.tsx                  # Company introduction and team photography
│   │   ├── expertise.tsx                   # Core technical disciplines
│   │   ├── verticals.tsx                   # Industry verticals
│   │   ├── products.tsx                    # Product showcase
│   │   ├── projects.tsx                    # Portfolio and project highlights
│   │   ├── how-we-work.tsx                 # Collaborative process and methodology
│   │   ├── tech-stack.tsx                  # Interactive technology stack showcase
│   │   ├── why-pecsa.tsx                   # Value propositions
│   │   ├── connect.tsx                     # Contact / consultation form
│   │   └── footer.tsx                      # Site footer and legal links
│   └── ui/                                 # Shared UI primitives (e.g., button.tsx)
├── lib/                                    # Shared libraries and utilities
│   ├── analytics.ts                        # Telemetry and Vercel Analytics event dispatcher
│   └── utils.ts                            # Tailwind class merge utility (cn)
├── public/                                 # Static assets
│   ├── images/                             # Product previews, dashboards, and photography
│   └── *.png, *.svg                        # Icons and favicons
├── .gitignore                              # Git exclusion rules
├── AGENTS.md / CLAUDE.md                   # AI agent conventions and instructions
├── components.json                         # shadcn UI CLI configuration
├── next.config.mjs                         # Next.js configuration (unoptimized images, TS options)
├── package.json & package-lock.json        # Dependencies and scripts (npm)
├── pnpm-lock.yaml                          # Preserved lockfile
├── postcss.config.mjs                      # PostCSS plugins
└── tsconfig.json                           # TypeScript compiler configuration
```

---

## Prerequisites & Installation

### Prerequisites
- **Node.js**: `v20.x` or `v22.x` (LTS recommended)
- **Package Manager**: **`npm`** (v10+ or v11+, verified in current repository setup)

### Package Manager & Lockfile Note
Both `package-lock.json` and `pnpm-lock.yaml` are present in the repository, and `"pnpm": { "overrides": { "hono": "4.12.25" } }` is retained in `package.json`. The intended long-term package-manager standard has not been confirmed, so neither lockfile has been removed. All local setup, build, and type-checking verification reported for this repository were conducted using **`npm`**.

### Installation
Clone the repository and install dependencies using `npm`:

```bash
git clone https://github.com/krutika-naphade/pecsa-it-solutions.git
cd pecsa-it-solutions
npm install
```

*(Note: Both lockfiles are present. Local dependency installation and build verification were performed using `npm`. `pnpm` CLI execution was not tested locally.)*

---

## Development & Build Commands

| Command | Source | Description |
| :--- | :--- | :--- |
| `npm run dev` | `package.json` | Starts the Next.js development server at [http://localhost:3000](http://localhost:3000) using Turbopack. |
| `npm run build` | `package.json` | Builds an optimized production bundle with Next.js Turbopack and prerenders all static routes. |
| `npm run start` | `package.json` | Starts the production server using the built `.next/` bundle. |
| `npx tsc --noEmit` | `typescript` CLI | Performs a full TypeScript type-check across all components and routes without emitting files. |

> **Note on TypeScript Checks:** In `next.config.mjs`, `typescript.ignoreBuildErrors: true` is configured during `next build`. Running `npx tsc --noEmit` independently verifies complete type safety for collaborator review and CI checks.

---

## Environment Variables Guidance

The base website runs out-of-the-box without requiring local environment variables for standard page rendering.

If integrating external services (e.g., email notification webhooks, form endpoints, or custom analytics environments):
1. Create a local environment file:
   ```bash
   touch .env.local    # or create .env.local in the root directory
   ```
2. **Never commit secrets**: All `.env`, `.env*.local`, `.env.production`, and `.env.development` files are excluded by [`.gitignore`](file:///c:/Users/kruti/Downloads/pecsa-it-solutions/.gitignore).
3. Prefix variables that need client browser access with `NEXT_PUBLIC_` (e.g., `NEXT_PUBLIC_API_URL`), while keeping private server keys un-prefixed.

---

## Deployment Configuration

- **Vercel & Node Hosting**: Fully compatible with Vercel and standard Node.js hosting. Next.js App Router routes and `@vercel/analytics` are detected automatically.
- **Image Optimization**: `images.unoptimized: true` is set in `next.config.mjs` to ensure static images in `public/images/` render reliably across all hosting environments without requiring dedicated external image-optimization services.
- **Static Prerendering**: All routes are statically prerendered at build time for optimal performance, fast Time-to-First-Byte (TTFB), and clean search indexing.

---

## Verification & Audit Notes

For collaborators and reviewers:
- **Verified Checks**:
  - All 11 application routes in `app/` were verified to compile and prerender cleanly via `npm run build` (Next.js 16.3.0 Turbopack).
  - TypeScript compilation and type definitions were verified with zero errors via `npx tsc --noEmit`.
  - Local repository builds and scripts were verified using Node.js and `npm` (`package-lock.json`).
  - `.gitignore` rules were updated and verified to exclude `tsconfig.tsbuildinfo`, `.next/`, `node_modules`, `/out/`, debug logs, and all `.env` files.
- **Unverified Items**:
  - `pnpm` CLI installation and execution were not tested locally because `pnpm` is not installed on the host machine.
  - Live network reachability and uptime for external product URLs referenced in component code (`auditool.pecsa.app` and `society.pecsa.app`) were not tested over the internet.
