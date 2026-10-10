"use client";

import { motion } from "framer-motion";
import { User, GraduationCap } from "lucide-react";
import Footer from "@/components/Footer";

/* ─── Skill Data (restructured to match tree design) ─── */

type SkillBranch = {
  label: string;
  skills: string[];
};

// Row 1: Programming Languages + Frameworks & Databases
const row1Branches: SkillBranch[] = [
  {
    label: "Programming Languages",
    skills: ["HTML", "CSS", "JavaScript", "Python", "PHP", "Java", "GO"],
  },
  {
    label: "Frameworks & Databases",
    skills: [
      "Django",
      "Bootstrap",
      "Tailwind CSS",
      "GORM",
      "MySQL",
      "Postgres",
      "Redis",
      "SQLite",
    ],
  },
];

// Row 2: Tools (full width)
const row2Branches: SkillBranch[] = [
  {
    label: "Tools",
    skills: [
      "VSCode",
      "Antigravity",
      "Github",
      "GitKraken",
      "Gitea",
      "RedisInsight",
      "DBeaver",
      "DB Browser",
      "Docker",
      "Postman",
      "Supabase",
      "Diversion",
      "Figma",
      "Canva",
      "Unreal Engine 5",
      "Maya",
    ],
  },
];

// Row 3: Human Languages + Soft Skills
const row3Branches: SkillBranch[] = [
  {
    label: "Languages",
    skills: ["Thai (Native)", "English (TOEIC 775)"],
  },
  {
    label: "Soft Skills",
    skills: [
      "Problem-Solving",
      "Teamwork",
      "Collaboration",
      "Adaptability",
      "Design",
    ],
  },
];

/* ─── Animation Variants ─── */

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" as const },
  }),
};

const tagStagger = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: 0.3 + i * 0.04, type: "spring" as const, stiffness: 180, damping: 18 },
  }),
};

/* ─── Reusable Skill Tag Component ─── */

function SkillTag({ name, index }: { name: string; index: number }) {
  return (
    <motion.span
      custom={index}
      variants={tagStagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="skill-tag"
    >
      {name}
    </motion.span>
  );
}

/* ─── Branch Card Component ─── */

function BranchCard({
  branch,
  animIndex,
}: {
  branch: SkillBranch;
  animIndex: number;
}) {
  return (
    <motion.div
      custom={animIndex}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="skill-branch-card"
    >
      {/* Corner accents */}
      <span className="corner-accent top-0 left-0 border-t border-l" />
      <span className="corner-accent top-0 right-0 border-t border-r" />
      <span className="corner-accent bottom-0 left-0 border-b border-l" />
      <span className="corner-accent bottom-0 right-0 border-b border-r" />

      <div className="flex flex-wrap gap-2.5 justify-center">
        {branch.skills.map((skill, i) => (
          <SkillTag key={skill} name={skill} index={i} />
        ))}
      </div>
    </motion.div>
  );
}

/* ─── Main Page ─── */

export default function AboutPage() {
  return (
    <>
      <main className="min-h-screen pt-36 pb-24 px-4 md:px-12 flex flex-col items-center relative overflow-hidden select-none">
        {/* Ambient glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-zinc-500/[0.06] rounded-full blur-[160px] pointer-events-none -z-10" />

        {/* ── PAGE HEADER ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center max-w-2xl mb-14"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-gradient-to-b from-white/10 to-white/[0.02] type-caption text-zinc-300 mb-5">
            <User className="w-3.5 h-3.5" />
            Profile
          </span>
          <h1 className="type-display uppercase text-gradient-white mb-4">
            About Me
          </h1>
          <p className="type-lead text-zinc-400">
            Background, education, and the toolkit I bring to every project.
          </p>
        </motion.div>

        {/* ── ABOUT ME & EDUCATION ── */}
        <div className="w-full max-w-5xl mb-24 grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
          
          {/* About Me Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="glass-panel p-8 rounded-3xl border-white/5 relative group overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="flex items-center gap-4 mb-6 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-b from-white/12 to-white/[0.02] border border-white/10 flex items-center justify-center text-white/80 shrink-0 shadow-inner">
                <User className="w-6 h-6 text-zinc-200" />
              </div>
              <h2 className="type-h2 uppercase text-gradient-white">
                Who I Am
              </h2>
            </div>
            <p className="type-body text-zinc-400 relative z-10">
              A highly motivated recent graduate from King Mongkut's Institute of Technology Ladkrabang with a strong academic record. Proven ability to quickly learn new concepts and adapt to diverse environments. Seeking an entry-level opportunity to leverage strong analytical skills, attention to detail, and a dedicated work ethic to contribute to organizational success.
            </p>
          </motion.div>

          {/* Education Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="glass-panel p-8 rounded-3xl border-white/5 relative group overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="flex items-center gap-4 mb-6 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-b from-white/12 to-white/[0.02] border border-white/10 flex items-center justify-center text-white/80 shrink-0 shadow-inner">
                <GraduationCap className="w-6 h-6 text-zinc-200" />
              </div>
              <h2 className="type-h2 uppercase text-gradient-white">
                Education
              </h2>
            </div>
            
            <div className="space-y-4 relative z-10">
              <div>
                <h3 className="type-h3 text-white group-hover:text-zinc-200 transition-colors">
                  King Mongkut's Institute of Technology Ladkrabang (KMITL)
                </h3>
                <div className="flex justify-between items-center mt-2">
                  <p className="type-body-sm text-zinc-400">Bachelor of Science (IT)</p>
                  <span className="type-micro font-mono bg-white/10 text-zinc-200 px-2 py-1 rounded-md">2022-2026</span>
                </div>
              </div>
              <div className="h-px w-full bg-gradient-to-r from-white/15 via-white/10 to-transparent" />
              <div>
                <p className="type-body-sm text-zinc-400 mb-3">
                  Multimedia for Interactive Media, Web and Game Development
                </p>
                <div className="inline-flex items-center gap-2">
                  <span className="type-micro font-mono text-zinc-500">GPA</span>
                  <span className="type-h4 text-white">3.36 <span className="type-body-sm font-normal text-zinc-500">(Second Class Honors)</span></span>
                </div>
              </div>
            </div>
          </motion.div>
          
        </div>

        {/* ── TREE STRUCTURE ── */}
        <div className="skill-tree w-full max-w-5xl">
          {/* Root Title */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="skill-root-title">
              <h2 className="text-base md:text-xl font-bold tracking-[0.25em] uppercase text-white">
                My Skills
              </h2>
            </div>
          </motion.div>

          {/* Vertical connector from root */}
          <div className="tree-connector-v mx-auto" style={{ height: 48 }} />

          {/* ── ROW 1: Programming Languages + Frameworks & Databases ── */}
          <div className="relative">
            <div className="tree-connector-h top-row-bar" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative">
              <div className="hidden md:block tree-connector-v branch-connector-left" />
              <div className="hidden md:block tree-connector-v branch-connector-right" />
              {row1Branches.map((branch, i) => (
                <BranchCard key={branch.label} branch={branch} animIndex={i + 3} />
              ))}
            </div>
          </div>

          {/* Vertical connector to row 2 */}
          <div className="tree-connector-v mx-auto" style={{ height: 48 }} />

          {/* ── ROW 2: Tools (full width) ── */}
          <div className="relative">
            {row2Branches.map((branch, i) => (
              <BranchCard key={branch.label} branch={branch} animIndex={i + 5} />
            ))}
          </div>

          {/* Vertical connector to row 3 */}
          <div className="tree-connector-v mx-auto" style={{ height: 48 }} />

          {/* ── ROW 3: Languages + Soft Skills ── */}
          <div className="relative">
            <div className="tree-connector-h top-row-bar" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative items-start">
              <div className="hidden md:block tree-connector-v branch-connector-left" />
              <div className="hidden md:block tree-connector-v branch-connector-right" />
              {row3Branches.map((branch, i) => (
                <BranchCard key={branch.label} branch={branch} animIndex={i + 6} />
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
