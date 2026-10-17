<div align="center">

# ✦ ACHOO — Developer Portfolio ✦

An immersive, futuristic, dark-aesthetic personal developer portfolio crafted with Next.js 15, React 19, Tailwind CSS v4, and Framer Motion.

[![Next.js](https://img.shields.io/badge/Next.js-15.5-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-black?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)

<br />

[Features](#-key-features) • [Tech Stack](#-tech-stack) • [Getting Started](#-getting-started) • [Environment Variables](#-environment-variables) • [Project Structure](#-project-structure) • [Customization](#-customization-guide)

</div>

---

## 🌟 Overview

**ACHOO Portfolio** is a showcase for **Supitcha Wis (Bambam / achoo)** — a Back-end and Full-Stack Developer & IT graduate from King Mongkut's Institute of Technology Ladkrabang (KMITL). 

The portfolio merges high-tech cyberpunk aesthetics, fluid glassmorphism, and interactive micro-animations with solid full-stack engineering, presenting projects, real-time presence, work experiences, and an interactive contact flow.

---

## ✨ Key Features

- **🪪 3D Interactive Holographic ID Card**
  - Dual-sided card with smooth 3D flip animation: **Developer Mode ("Access Permit")** and **Gamer Mode ("Player ID")**.
  - Interactive mouse-tracking specular shine effect and spring motion.
  - Quick-flip trigger button with dynamic rotation states.

- **🎵 Ambient Audio Player**
  - Integrated Lo-Fi / Synth ambient player with real-time audio progress scrubbing.
  - Hover flyout volume controls, mute toggling, and autoplay handling.

- **💬 Real-Time Discord Status**
  - Live activity and status badge powered by the [Lanyard API](https://github.com/Ph青/lanyard).
  - Displays avatar, live activity details (e.g. VS Code, Spotify, gaming), and status indicator (Online, Idle, DND, Offline).

- **💼 Dynamic Project Catalog & Modal Viewer**
  - Featured / Thesis Hero showcase for pinned projects (e.g., *Bugtopia*).
  - Markdown-rendered modal descriptions (`react-markdown`) with responsive image galleries, tech pills, and live demo / source links.
  - Centralized, typed project configuration in `src/data/projects.ts`.

- **🌳 Interactive Skill Matrix**
  - Structured tree layout covering Programming Languages (Go, Python, Java, JS/TS, PHP), Frameworks & Databases (PostgreSQL, Redis, MySQL, GORM, Django), DevOps, and 3D / Design Tools.

- **🎫 Boarding Pass Contact Ticket**
  - Cyberpunk-styled boarding pass contact form (`ContactTicket.tsx`).
  - Next.js serverless route (`/api/contact`) sending notification emails via [Resend](https://resend.com).

- **❄️ Atmospheric Visuals**
  - Subtle HTML5 canvas snowfall particle simulation (`Snow.tsx`).
  - Fluid background gradient blobs and film grain noise overlay for depth.
  - Glassmorphic floating navigation header with Framer Motion layout pill animation.

---

## 🛠️ Tech Stack

| Domain | Technology | Description |
| :--- | :--- | :--- |
| **Framework** | [Next.js 15](https://nextjs.org/) | App Router, React Server Components, Turbopack |
| **Library** | [React 19](https://react.dev/) | Core UI rendering library |
| **Language** | [TypeScript](https://www.typescriptlang.org/) | End-to-end type safety |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) | Modern utility-first styling with `@tailwindcss/postcss` |
| **Motion** | [Framer Motion 12](https://www.framer.com/motion/) | Smooth page transitions, springs, and gesture animations |
| **Icons** | [Lucide React](https://lucide.dev/) | Clean, consistent iconography |
| **Email API** | [Resend](https://resend.com/) | Transactional email delivery for the contact form |
| **Live Presence** | [Lanyard REST API](https://api.lanyard.rest/) | Real-time Discord status and activities |
| **Content** | [React Markdown](https://github.com/remarkjs/react-markdown) | Markdown rendering inside project showcase modals |

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version `18.18+` or `20+` recommended)
- `npm`, `pnpm`, `yarn`, or `bun`

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/WHY2BX/portfolio.git
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   pnpm install
   # or
   yarn install
   ```

3. **Configure Environment Variables:**
   Copy the example environment file:
   ```bash
   cp .env.example .env.local
   ```
   Fill in your API keys (see [Environment Variables](#-environment-variables) below).

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open in browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

---

## ⚙️ Environment Variables

Create a `.env.local` file in the root directory and define the following variables:

```env
# Resend API Key for sending emails from the Contact Ticket
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxx

# Destination email where contact inquiries are received
CONTACT_EMAIL=your_email@example.com

# Discord User ID used to query live status from Lanyard
DISCORD_USER_ID=309322195857965057
NEXT_PUBLIC_DISCORD_ID=309322195857965057
```

> [!NOTE]
> To enable real-time Discord presence, ensure your account is in the [Lanyard Discord server](https://discord.gg/lanyard) so the API can track your user activity.

---

## 📁 Project Structure

```
portfolio/
├── public/                       # Static public assets
│   ├── cards/                    # Project thumbnails and cards
│   ├── icons/                    # Custom icons and badges
│   ├── bg.png                    # Background texture
│   └── ...                       # Audio tracks & media
├── src/
│   ├── app/                      # Next.js App Router
│   │   ├── about/                # Skills matrix & educational background
│   │   ├── api/                  # Serverless API routes
│   │   │   └── contact/          # Resend email handler endpoint
│   │   ├── certificates/         # Experience timeline & milestones
│   │   ├── contact/              # Boarding pass contact ticket interface
│   │   ├── info/                 # Career statistics & summary
│   │   ├── projects/             # Projects showcase page & modals
│   │   ├── globals.css           # Global CSS variables, fonts & utilities
│   │   ├── layout.tsx            # Root layout, fonts & ambient lighting
│   │   └── page.tsx              # Home view (3D ID card & music player)
│   ├── components/               # UI Components
│   │   ├── projects/             # ProjectCard, FeaturedCard, ProjectModal
│   │   ├── card.tsx              # 3D interactive holographic permit card
│   │   ├── ContactTicket.tsx     # Boarding pass ticket contact form
│   │   ├── ContactCards.tsx      # Quick social link cards
│   │   ├── DiscordCard.tsx       # Live Lanyard Discord presence widget
│   │   ├── MusicPlayer.tsx       # Ambient background audio player
│   │   ├── Snow.tsx              # Canvas snowfall particle effect
│   │   ├── TopNavBar.tsx         # Floating glassmorphism navbar
│   │   └── Footer.tsx            # Global footer component
│   └── data/
│       └── projects.ts           # Central project database & TypeScript schema
├── .env.example                  # Environment configuration template
├── package.json                  # Dependencies and build scripts
├── tailwind.config.ts            # Tailwind CSS configuration
└── tsconfig.json                 # TypeScript compiler configuration
```

---

## 🎨 Customization Guide

### Adding or Updating Projects
Modify [src/data/projects.ts](file:///d:/ACHOOs/Project/portfolio/src/data/projects.ts). Each project conforms to the `Project` type:

```typescript
{
  id: "my-project",
  title: "Project Name",
  subtitle: "Category or Role",
  duration: "Jan 2026 - Present",
  shortDescription: "A concise blurb for the preview card.",
  description: `
    ### Project Overview
    Detailed markdown description explaining architecture, problem, and solution.
  `,
  image: "/cards/my-project.png",
  showcaseImage: "/cards/my-project-showcase.png",
  tech: ["Next.js", "Go", "PostgreSQL", "Docker"],
  featured: false,
  links: {
    github: "https://github.com/...",
    live: "https://...",
  },
}
```

### Updating Profile Data
- **Hero ID Card:** Update `frontData` and `backData` in [src/components/card.tsx](file:///d:/ACHOOs/Project/portfolio/src/components/card.tsx).
- **Skills Matrix:** Edit branch lists in [src/app/about/page.tsx](file:///d:/ACHOOs/Project/portfolio/src/app/about/page.tsx).
- **Experience Timeline:** Edit `experiences` array in [src/app/certificates/page.tsx](file:///d:/ACHOOs/Project/portfolio/src/app/certificates/page.tsx).

---

## 📜 Available Scripts

| Command | Action |
| :--- | :--- |
| `npm run dev` | Starts local development server with Turbopack on `http://localhost:3000` |
| `npm run build` | Compiles the production build |
| `npm run start` | Starts the production server |
| `npm run lint` | Runs ESLint to check for code issues |

---

## 👤 Author

**Supitcha Wis (achoo / Bambam)**
- GitHub: [@WHY2BX](https://github.com/WHY2BX)
- Email: [whyso2bx@gmail.com](mailto:whyso2bx@gmail.com)
- Discord ID: `309322195857965057`

---

## 📄 License

This project is personal portfolio work. All rights reserved © 2026 Supitcha Wis.
