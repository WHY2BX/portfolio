// =============================================================================
//  PROJECT DATA — Edit this file to add, remove, or update projects.
// =============================================================================

export type ProjectImage = {
  /** Path inside /public (e.g. "/project-image/foo/1.png") or a full URL */
  src: string;
  /** Optional caption shown under the image */
  caption?: string;
};

export type Project = {
  id: string;
  title: string;
  subtitle: string;
  duration?: string;
  /**
   * Markdown. Inline images are supported:
   *   ![Caption text](/project-image/foo/screenshot.png)
   */
  description: string;
  /** Short blurb shown on the card thumbnail (max ~120 chars recommended) */
  shortDescription: string;
  /** Path inside /public, e.g. "/cards/foo.png" */
  image: string;
  /** Larger image or GIF shown inside the modal */
  showcaseImage?: string;
  /** Extra images shown as a grid below the description */
  gallery?: ProjectImage[];
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
    subtitle: "Thesis Project",
    duration: "March 2025 - April 2026",
    shortDescription:
      "Time-management simulation game-base learning where players act as doctors diagnosing and treating venomous insect bites.",
    description:
      `
      ### What is Bugtopia?
      A time-management simulation game-base learning where players act as doctors diagnosing and treating venomous insect bites.
      It develops analytical skills under pressure and significantly improves long-term knowledge retention compared to traditional textbooks. Built with Unreal Engine 5 for game development,
      SQLite for database management, Figma for UI/UX prototyping, and Lucid Chart for system diagrams.
      
      ### Why We made Bugtopia?
      Incidents involving venomous insects represent a significant public health concern, frequently resulting in injury and, in severe instances, mortality. Envenomation typically occurs through direct stings, bites, or cutaneous contact. While these risks are prevalent, they are preventable through enhanced public literacy regarding symptoms and emergency first aid procedures.

      ### Advisor
      [Asst. Prof. Dr.Sirion Vittayakorn](https://www.it.kmitl.ac.th/~sirion/)

      ### Contributor
      Sirimongkol Thongkhwanjai
      `,
    image: "/project-image/bugtopia/bugtopia-logo.png",
    showcaseImage: "/project-image/bugtopia/bugtopia-logo.png",
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
    subtitle: "Vibe Coding",
    duration: "September 2026 - Now",
    shortDescription:
      "Personal finance management Progressive Web App inspired by 'Make by KBank'.",
    description:
      `
      ### What is Pocket-money?
      Personal finance management Progressive Web App inspired by 'Make by KBank' to solve daily budgeting and financial planning challenges.
      Envelope-style budget management featuring drag-and-drop fund transfers, recurring bill tracking, and an analytics dashboard with a Glassmorphism UI.
      Leveraged AI-assisted development workflows using Claude and Gemini as primary coding and architectural assistants.
      Built with React + Vite (client) and Express (server), using Zustand for global state management, and Drizzle ORM with PostgreSQL (hosted on Supabase) for data persistence and authentication.
      `,
    image: "/cards/magician.png",
    showcaseImage: "/cards/magician.png",
    tech: ["React", "Vite", "Express", "Zustand", "Drizzle ORM", "PostgreSQL", "Supabase", "Claude", "Gemini"],
    links: {
      github: "https://github.com/WHY2BX/pocket-money",
    },
    featured: true
  },

  // ─── GRID PROJECTS ───────

  {
    id: "dumbthought",
    title: "dumbthought",
    subtitle: "Vibe Coding, No longer active",
    duration: "August 2026",
    shortDescription:
      "A full-stack, mobile-optimized note-taking app deployed on Vercel.",
    description: `
### What is dumpthought?
A full-stack, mobile-optimized note-taking app deployed on Vercel.
Leveraged AI-assisted development workflows using Claude and Gemini as primary coding.
Built with Next.js and Tailwind CSS for frontend, and powered by Supabase (PostgreSQL) for backend authentication and data storage.

![Login page](/project-image/dumbthought/dumbthought-login.png)

### Why I Create this?
I love taking notes on IOS Note app, How ever it always been a pile of notes that so hard to search for the one I looking for and I not used to IOS text formatting, So I created this app to solve that problem. Which can categorized notes in to a folder with Markdown text formatting that really suits to my GEN-Z style ✨.

![Compare to IOS note](/project-image/dumbthought/dumbthought-ios-compare-1.png)

### Features
- **Authentication**: User can register, login or logout via password or Google.
- **Notes**: User can create, read, update, delete notes.
- **Pins**: User can pin up to 3 notes on the top of the page.
- **Markdown Text**: Use Markdown langauge for formatting notes, Similar to Discord.
- **Categorize**: User can create, read, update, delete category and also can assign category to notes.
- **Overview**: User can see how much notes in each category.
      `,
    image: "/project-image/dumbthought/dumbthought-logo.jpg",
    showcaseImage: "/project-image/dumbthought/dumbthought-logo.jpg",
    gallery: [
      { src: "/project-image/dumbthought/dumbthought-all-notes.png", caption: "Main page" },
      { src: "/project-image/dumbthought/dumbthought-create-note.png", caption: "Create note" },
      { src: "/project-image/dumbthought/dumbthought-read-note.png", caption: "Read note" },
      { src: "/project-image/dumbthought/dumbthought-ios-compare-2.png", caption: "Slide to delete" },
      { src: "/project-image/dumbthought/dumbthought-create-category.png", caption: "Create category" },
      { src: "/project-image/dumbthought/dumbthought-view-note-in-category.png", caption: "View note in category" },
    ],
    tech: ["Next.js", "Tailwind CSS", "Supabase", "PostgreSQL", "Claude", "Gemini"],
    links: {
      github: "https://github.com/WHY2BX/dumbthought",
    },
  },
  ,
  // {
  //     id: "Pawgician",
  //     title: "Pawgician",
  //     subtitle: "No longer active",
  //     duration: "November 2024 - December 2024",
  //     shortDescription:
  //       "A global weather web application that implemented real-time weather data retrieval.",
  //     description: `
  // A global weather web application that implemented real-time weather data retrieval and historical search tracking. 

  // **Key Highlights:**
  // - **Stack:** Next.js, OpenWeather API, MongoDB
  // - **UI:** Designed a responsive UI with Tailwind CSS
  // - Real-time weather data retrieval
  // - Historical search tracking
  // `,
  //     image: "/cards/fool.png",
  //     showcaseImage: "/cards/fool.png",
  //     tech: ["Next.js", "OpenWeather API", "MongoDB", "Tailwind CSS"],
  //     links: {
  //       github: "https://github.com/WHY2BX/AeroCast",
  //     },
  //   }
  ,
  {
    id: "aerocast",
    title: "AeroCast",
    subtitle: "No longer active",
    duration: "November 2024 - December 2024",
    shortDescription:
      "A global weather web application that implemented real-time weather data retrieval.",
    description: `
A global weather web application that implemented real-time weather data retrieval and historical search tracking. This project is a part of Client-side Web Development course at IT, KMITL

**Key Highlights:**
- **Stack:** Next.js, OpenWeather API, MongoDB
- **UI:** Designed a responsive UI with Tailwind CSS
- Real-time weather data retrieval
- Favourite place, easy to find.
`,
    image: "/project-image/aerocast/aerocast-logo.png",
    showcaseImage: "/project-image/aerocast/aerocast-logo.png",
    tech: ["Next.js", "OpenWeather API", "MongoDB", "Tailwind CSS"],
    links: {
      github: "https://github.com/WHY2BX/AeroCast",
    },
  },
  {
    id: "heaven-hotel",
    title: "Heaven Hotel",
    subtitle: "No longer active",
    duration: "September 2024 - October 2024",
    shortDescription:
      "Hotel Reservation Website built with Django and Postgres.",
    description: `
Hotel Reservation Website. Designed and developed backend functionalities using Django and styled components with Bootstrap. This project is a part of Server-side Web Development course at IT, KMITL.

### Features
- **Authentication**: User can register, login or logout.
- **Room Details**: User and admin can view room details.
- **Reservation**: Client can book, view or cancel their reservation, Admin can also view and cancel every reservations.
- **Search System**: Both Client and Admin can search for the room by name.
- **Room Management**: Admin can create, read, update and delete room.
- **Promotions**: Admin can create, update and delete promotions.
`,
    image: "/project-image/heaven-hotel/heavenhotel-logo.jpg",
    showcaseImage: "/project-image/heaven-hotel/heavenhotel-logo.jpg",
    tech: ["Django", "Bootstrap", "Postgres"],
    links: {
      github: "https://github.com/WHY2BX/heaven-hotel",
    },
  },
  ,
];

/** Convenience selectors */
export const featuredProject = projects.find((p) => p.featured) ?? projects[0];
export const thesisProject = projects.find((p) => p.thesis) ?? projects[1];
export const gridProjects = projects.filter((p) => !p.featured && !p.thesis);
