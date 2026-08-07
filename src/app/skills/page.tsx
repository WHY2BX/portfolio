"use client";

import { motion } from "framer-motion";
import { Cpu, Layout, Server, Settings, Palette } from "lucide-react";
import Footer from "@/components/Footer";

type Skill = {
  name: string;
  level: number; // percentage
};

type SkillCategory = {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  skills: Skill[];
  color: string;
};

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Engineering",
    icon: Layout,
    color: "from-white/10 to-zinc-800/10 text-white",
    skills: [
      { name: "React / Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "TailwindCSS & CSS4", level: 95 },
      { name: "Framer Motion", level: 88 },
      { name: "WebGL / Three.js", level: 75 },
    ],
  },
  {
    title: "Backend & Systems",
    icon: Server,
    color: "from-zinc-200/10 to-zinc-900/10 text-zinc-300",
    skills: [
      { name: "Node.js & Express", level: 90 },
      { name: "Python / FastAPI", level: 82 },
      { name: "PostgreSQL / Prisma", level: 85 },
      { name: "GraphQL & REST APIs", level: 92 },
      { name: "Redis Caching", level: 78 },
    ],
  },
  {
    title: "DevOps & Cloud",
    icon: Settings,
    color: "from-white/5 to-zinc-700/5 text-zinc-200",
    skills: [
      { name: "Git & CI/CD Pipelines", level: 95 },
      { name: "Docker Containers", level: 80 },
      { name: "AWS Services", level: 82 },
      { name: "Vercel / Netlify", level: 90 },
      { name: "Linux System Ops", level: 78 },
    ],
  },
  {
    title: "Creative & Design",
    icon: Palette,
    color: "from-zinc-100/10 to-zinc-600/10 text-zinc-400",
    skills: [
      { name: "UI/UX Design Systems", level: 88 },
      { name: "Figma Prototyping", level: 92 },
      { name: "3D Interaction / Spline", level: 70 },
      { name: "Branding & Typography", level: 85 },
      { name: "Motion Graphic design", level: 80 },
    ],
  },
];

export default function SkillsPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const cardVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring" as const, stiffness: 110, damping: 20 },
    },
  };

  return (
    <>
      <main className="min-h-screen pt-36 pb-20 px-4 md:px-12 flex flex-col items-center relative overflow-hidden select-none">
        
        {/* Ambient light ring */}
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[400px] bg-indigo-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />

        {/* Header Title */}
        <div className="text-center max-w-xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/5 bg-white/5 mb-4">
            <Cpu className="w-3.5 h-3.5 text-indigo-400 animate-pulse" />
            <span className="text-[10px] font-mono tracking-widest text-indigo-200 uppercase">Core Capability</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white uppercase mb-2 text-gradient-white">
            SKILL ARCHITECTURE
          </h1>
          <p className="text-xs md:text-sm text-white/50">
            A comprehensive overview of languages, frameworks, operations, and creative tooling.
          </p>
        </div>

        {/* Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl"
        >
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                variants={cardVariants}
                className="glass-panel p-6 md:p-8 rounded-3xl space-y-6 hover:bg-white/[0.03] hover:border-white/12 transition-all duration-300 relative border-white/5"
              >
                {/* Decorative category background glow */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${category.color} blur-[60px] opacity-25 rounded-full pointer-events-none`} />

                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-11 h-11 rounded-2xl bg-white/5 border border-white/8 flex items-center justify-center text-white/80 shrink-0 shadow-inner">
                    <Icon className="w-5 h-5 text-white/70" />
                  </div>
                  <h2 className="text-base font-bold text-white uppercase tracking-wider">
                    {category.title}
                  </h2>
                </div>

                <div className="space-y-4 relative z-10">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-1.5">
                      <div className="flex justify-between items-center text-xs font-medium">
                        <span className="text-white/80">{skill.name}</span>
                        <span className="font-mono text-zinc-400 text-[10px]">{skill.level}%</span>
                      </div>
                      
                      {/* Glass Progress Bar */}
                      <div className="w-full h-1.5 rounded-full bg-white/5 border border-white/5 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1.2, ease: "easeOut", delay: 0.1 }}
                          className="h-full bg-gradient-to-r from-white to-zinc-600 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </main>
      <Footer />
    </>
  );
}
