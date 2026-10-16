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

      ### What did I do in this project?
      - Contributed to game's overall system design in Unreal Engine 5 to create the core gameplay mechanics, including the diagnosis system, time-management system, including the game loop, progression system, and difficulty balancing.
      - Designed the user interface (UI) and user experience (UX) using Figma to create a user-friendly and visually appealing interface.
      - Implemented C++ code (Vibe Coding) for connecting to relational database schema to collect insect data and track player progress using SQLite.
      - Analyzed game design patterns and user engagement metrics to iterate on gameplay mechanics and improve the player experience.

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
    id: "Spendid",
    title: "Spendid",
    subtitle: "Vibe Coding, Under Development",
    duration: "September 2026 - Now",
    shortDescription:
      "Personal finance management Progressive Web App inspired by 'Make by KBank'.",
    description:
      `
      ### What is Spendid?
      Personal finance management Progressive Web App inspired by 'Make by KBank' to solve daily budgeting and financial planning challenges.
      Envelope-style budget management featuring drag-and-drop fund transfers, recurring bill tracking, and an analytics dashboard with a Glassmorphism UI.
      Leveraged AI-assisted development workflows using Claude and Gemini as primary coding and architectural assistants.
      Built with React + Vite (client) and Express (server), using Zustand for global state management, and Drizzle ORM with PostgreSQL (hosted on Supabase) for data persistence and authentication.

      ### Why I made this?
      As someone passionate about financial planning and managing income/expenses, I actively used Kasikornbank's MAKE application.
      However, finding that a single app couldn't cover all my specific needs, I extracted its core features to develop my own customized financial application.
      
      ### Features
      - **Pockets**: Dividing and allocating money into specific categories.
      - **Drag and Drop**: Intuitive system for transferring funds between pockets.
      - **Recurring Bills**: Auto-populate monthly expenses with due date tracking
      - **Customizable categories**: Customizable categories for individual pockets.
      - **Graphical visualization**: Summarizing income and expenses.

      ### Development Approach (Vibe Coding)
      In this project, I want to show my real-world problem-solving skills, how I identify problems, design solutions, and use AI to assist me in building a product.
      - Started by drafting requirements based on personal pain points, translating them into specific application features to ensure practical problem-solving.
      - Leveraged Gemini to structure these requirements and suggest valuable feature additions.
      - Utilized both Claude and Gemini to generate the application codebase and debug errors.

      ### Future Development plans:
      - Once the system fully meets the requirements and I am satisfied with the UX/UI, the application will be deployed via Vercel.
      - Plan to continuously develop new features by gathering user feedback and identifying the pain points of people around me.
      `,
    image: "/project-image/spendid/spendid-icon.jpg",
    showcaseImage: "/project-image/spendid/spendid-icon.jpg",
    tech: ["React", "Vite", "Express", "Zustand", "Drizzle ORM", "PostgreSQL", "Supabase", "Claude", "Gemini"],
    links: {
      github: "https://github.com/WHY2BX/pocket-money",
    },
    featured: true
  },

  // ─── GRID PROJECTS ───────

  {
    id: "Portfolio",
    title: "THIS WEBSITE (Portfolio)",
    subtitle: "Vibe Coding, Still update",
    duration: "September 2026 - Now",
    shortDescription:
      "My portfolio website that shows how COOL i am 😎✨",
    description: `
### Who am I and Why I Create this?
Greetings! I'm Bambam (or by my stage name 'achoo'). I think you've already read the *FORMAL* information about me on my About Me page, so this space will let you get to know another side of me—my real personality. I hope it helps you see how well I'd fit in with your company.

I recently graduated with a degree in IT, KMITL and am currently searching for a job 🥺. I do not have an experience on working in Enterprise that much, but I really want to learn and grow as a developer.
I love seeking solutions to real-world problems and building products that actually solve them, all while enhancing the user experience (since sometimes I'm that user LOL). 
I created this website to showcase my skills, my experience. Hope this make you had an interested in me (🪷).\n
*P.S. I am not just interested in Developer roles; I am also interested in many other areas, such as Game Designer, Business Analyst, System Analyst, or even Project Manager positions.*



### Features
- **AESTHETIC UI/UX**: I care about how the application looks and feels. I spent a lot of time designing and researcing the UI to be visually appealing and user-friendly. AND MAKE IT REALLY IMPRESSIVE *COOLLLLLLLL!!*
- **FLIPABLE ANIMATED CARDS**: I spent a lot of time designing and researcing how to make the cards look really cool, yk what? I *REALLY* LOVE IT!
- **CONTACT ME VIA EMAIL TICKET**: If you interested in me, just click the icon to contact me, I will be happy to hear from you!
- **DISCORD CARD**: ik it's really unformal way, but I also want to show how I adapted my GEN-Z style to make my portfolio look unique and modern, while still maintaining a professional image for potential employers.
      `,
    image: "/project-image/portfolio/achoo.png",
    showcaseImage: "/project-image/portfolio/achoo.png",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "Claude", "Gemini"],
    links: {
      github: "https://github.com/WHY2BX/portfolio",
    },
  },

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
  {
    id: "Pawgician",
    title: "Pawgician",
    subtitle: "No longer active",
    duration: "August 2025",
    shortDescription:
      "A Third-Person Shooting multiplayer game in a theme of magician fat cat.",
    description: `
  A Third-Person Shooting multiplayer game (2 up to 4 players) in a theme of magician fat cat fighting for magical fish that can make them slim.
  Participated in **Dakok x AWS GameCraft** event in a name of Anonymous.exe team. Develop by using Unreal Engine 5 and AWS Cloud.
  
  ### What I do in this project?
  - **Game Designer**: I'm being a part of brainstorming session to come up with game ideas and concepts, also plan for **Level Design** and placing block out.
  - **UX/UI Designer**: I designed a whole UI game with Figma base on team art concept and color CI.
  ![Level Design](/project-image/pawgician/level-design.png)
  `,
    image: "/project-image/pawgician/pawgician-logo.png",
    showcaseImage: "/project-image/pawgician/pawgician-logo.png",
    gallery: [
      { src: "/project-image/pawgician/login-page.png", caption: "Login with Epic Game" },
      { src: "/project-image/pawgician/maingame.png", caption: "Main game" },
      { src: "/project-image/pawgician/lobby-4-create-room.png", caption: "Create room" },
      { src: "/project-image/pawgician/lobby-4-finding-match.png", caption: "Finding match" },
      { src: "/project-image/pawgician/lobby-4-invite.png", caption: "Invite" },
      { src: "/project-image/pawgician/leaderboard.png", caption: "Leaderboard" },
      { src: "/project-image/pawgician/setting-popup.png", caption: "Setting popup" },
      { src: "/project-image/pawgician/how-to-play.png", caption: "How to play" },
      { src: "/project-image/pawgician/skin-popup.png", caption: "Skin popup" },
      { src: "/project-image/pawgician/party-code-popup.png", caption: "Party code popup" },
      { src: "/project-image/pawgician/error-page.png", caption: "Error page" },
      { src: "/project-image/pawgician/in-game-score-board.png", caption: "In-game score board" },
      { src: "/project-image/pawgician/invite-pop-up.png", caption: "Invite pop up" },
      { src: "/project-image/pawgician/timeout.png", caption: "Time out" },
      { src: "/project-image/pawgician/ingame-hud.png", caption: "In-game hud" },
      { src: "/project-image/pawgician/loading-match.png", caption: "Loading match" },
    ],
    tech: ["Unreal Engine 5", "AWS Cloud", "Figma"],
    links: {
      demo: "https://www.youtube.com/watch?v=lFspm9__13g",
    },
  }
  ,
  {
    id: "aerocast",
    title: "AeroCast",
    subtitle: "No longer active",
    duration: "November 2024 - December 2024",
    shortDescription:
      "A global weather web application that implemented real-time weather data retrieval.",
    description: `
A global weather web application that implemented real-time weather data retrieval and historical search tracking. This project is a part of **Client-side Web Development** course at IT, KMITL

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
Hotel Reservation Website. Designed and developed backend functionalities using Django and styled components with Bootstrap. This project is a part of **Server-side Web Development** course at IT, KMITL.

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
