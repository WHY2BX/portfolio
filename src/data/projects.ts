// =============================================================================
//  PROJECT DATA — Edit this file to add, remove, or update projects.
// =============================================================================

export type Project = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  /** Short blurb shown on the card thumbnail (max ~120 chars recommended) */
  shortDescription: string;
  /** Path inside /public, e.g. "/cards/foo.png" */
  image: string;
  /** Larger image or GIF shown inside the modal */
  showcaseImage?: string;
  tech: string[];
  /** Mark ONE project as the pinned/featured hero */
  featured?: boolean;
  /** Mark ONE project as the thesis hero */
  thesis?: boolean;
  links: {
    github?: string;
    live?: string;
    demo?: string;
    link?: string;
    linkLabel?: string;
  };
};

export const projects: Project[] = [
  // ─── FEATURED / THESIS (Pinned Project) ────────────────────────────────────────────
  {
    id: "bugtopia",
    title: "Bugtopia",
    subtitle: "Thesis Project (March 2025 - April 2026)",
    shortDescription:
      "Time-management simulation game-base learning where players act as doctors diagnosing and treating venomous insect bites.",
    description:
      "A time-management simulation game-base learning where players act as doctors diagnosing and treating venomous insect bites. It develops analytical skills under pressure and significantly improves long-term knowledge retention compared to traditional textbooks. Built with Unreal Engine 5 for game development, SQLite for database management, Figma for UI/UX prototyping, and Lucid Chart for system diagrams.",
    image: "/cards/fool.png",
    showcaseImage: "/cards/fool.png",
    tech: ["Unreal Engine 5", "SQLite", "Figma", "Lucid Chart"],
    featured: false,
    thesis: true,
    links: {
      demo: "https://youtu.be/BeYduilOIRU?si=RpXxodyVDYI5lBtj",
      link: "https://ieeexplore.ieee.org/document/11597079",
      linkLabel: "IEEE Paper",
    },
  },
  {
    id: "pocket-money",
    title: "Pocket-Money",
    subtitle: "Vibe Coding (September 2026 - Now)",
    shortDescription:
      "Personal finance management Progressive Web App inspired by 'Make by KBank'.",
    description:
      "Personal finance management Progressive Web App inspired by 'Make by KBank' to solve daily budgeting and financial planning challenges. Envelope-style budget management featuring drag-and-drop fund transfers, recurring bill tracking, and an analytics dashboard with a Glassmorphism UI. Leveraged AI-assisted development workflows using Claude and Gemini as primary coding and architectural assistants. Built with React + Vite (client) and Express (server), using Zustand for global state management, and Drizzle ORM with PostgreSQL (hosted on Supabase) for data persistence and authentication.",
    image: "/cards/magician.png",
    showcaseImage: "/cards/magician.png",
    tech: ["React", "Vite", "Express", "Zustand", "Drizzle ORM", "PostgreSQL", "Supabase", "Claude", "Gemini"],
    links: {
      github: "https://github.com/WHY2BX",
    },
    featured: true
  },

  // ─── GRID PROJECTS ───────

  {
    id: "dumbthought",
    title: "Dumbthought",
    subtitle: "Vibe Coding, No longer active (August 2026)",
    shortDescription:
      "A full-stack, mobile-optimized note-taking app deployed on Vercel.",
    description:
      "A full-stack, mobile-optimized note-taking app deployed on Vercel. Leveraged AI-assisted development workflows using Claude and Gemini as primary coding. Built with Next.js and Tailwind CSS for frontend, and powered by Supabase (PostgreSQL) for backend authentication and data storage.",
    image: "/cards/wheel.png",
    showcaseImage: "/cards/wheel.png",
    tech: ["Next.js", "Tailwind CSS", "Supabase", "PostgreSQL", "Claude", "Gemini"],
    links: {
      github: "https://github.com/WHY2BX",
    },
  },
  {
    id: "aerocast",
    title: "AeroCast",
    subtitle: "No longer active (November 2024 - December 2024)",
    shortDescription:
      "A global weather web application that implemented real-time weather data retrieval.",
    description: `
A global weather web application that implemented real-time weather data retrieval and historical search tracking. 

**Key Highlights:**
- **Stack:** Next.js, OpenWeather API, MongoDB
- **UI:** Designed a responsive UI with Tailwind CSS
- Real-time weather data retrieval
- Historical search tracking
`,
    image: "/cards/fool.png",
    showcaseImage: "/cards/fool.png",
    tech: ["Next.js", "OpenWeather API", "MongoDB", "Tailwind CSS"],
    links: {
      github: "https://github.com/WHY2BX",
    },
  },
  {
    id: "heaven-hotel",
    title: "Heaven Hotel",
    subtitle: "No longer active (September 2024 - October 2024)",
    shortDescription:
      "Hotel Reservation Website built with Django and Postgres.",
    description: `
Hotel Reservation Website. Designed and developed backend functionalities using Django and styled components with Bootstrap.

### Features
- Hotel room browsing and availability check
- **Reservation system** managed by Django backend
- Data persistence with **Postgres**
`,
    image: "/cards/magician.png",
    showcaseImage: "/cards/magician.png",
    tech: ["Django", "Bootstrap", "Postgres"],
    links: {
      github: "https://github.com/WHY2BX",
    },
  },
];

/** Convenience selectors */
export const featuredProject = projects.find((p) => p.featured) ?? projects[0];
export const thesisProject = projects.find((p) => p.thesis) ?? projects[1];
export const gridProjects = projects.filter((p) => !p.featured && !p.thesis);
