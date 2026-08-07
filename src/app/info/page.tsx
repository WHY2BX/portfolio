"use client";

import { motion } from "framer-motion";
import { User, Calendar, Briefcase, FileDown, Rocket, Award, Coffee } from "lucide-react";
import Footer from "@/components/Footer";

const stats = [
  { icon: Briefcase, value: "5+", label: "Years Experience" },
  { icon: Rocket, value: "30+", label: "Projects Completed" },
  { icon: Coffee, value: "900+", label: "Litres of Coffee" },
  { icon: Award, value: "12+", label: "Credentials" },
];

const timeline = [
  {
    role: "Lead Creative Engineer",
    company: "Golden Ticket Labs",
    period: "2024 - PRESENT",
    desc: "Spearheading frontend architecture, developing high-performance 3D visualizers, and implementing elegant glassmorphism systems.",
  },
  {
    role: "Senior Full-Stack Developer",
    company: "Nexus Digital",
    period: "2022 - 2024",
    desc: "Designed scalable microservices with Node.js and Next.js. Improved system load speeds by 40% and set up automated CI/CD pipelines.",
  },
  {
    role: "Frontend & Interactive UI Developer",
    company: "Vortex Studio",
    period: "2020 - 2022",
    desc: "Created highly polished responsive web user interfaces and interactive transitions using Framer Motion and WebGL shaders.",
  },
];

export default function InfoPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring" as const, stiffness: 100 },
    },
  };

  return (
    <>
      <main className="min-h-screen pt-36 pb-20 px-4 md:px-12 flex flex-col items-center relative overflow-hidden select-none">
        
        {/* Decorative background glow */}
        <div className="absolute top-1/3 left-1/4 w-[700px] h-[400px] bg-purple-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full max-w-5xl space-y-12"
        >
          {/* Hero Section */}
          <motion.div variants={itemVariants} className="text-center md:text-left flex flex-col md:flex-row items-center gap-8 p-8 rounded-3xl glass-card relative overflow-hidden">
            {/* Holographic light highlight */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-transparent pointer-events-none" />

            <div className="w-28 h-28 rounded-full border-2 border-white/10 bg-white/5 flex items-center justify-center text-white/40 shrink-0">
              <User className="w-14 h-14 text-white/80" />
            </div>
            <div className="space-y-4 flex-grow">
              <div>
                <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight uppercase text-gradient-white">
                  Achoo / Developer
                </h1>
                <p className="text-sm font-semibold text-zinc-400 uppercase tracking-widest mt-1">
                  Creative Full-Stack Engineer
                </p>
              </div>
              <p className="text-xs md:text-sm text-white/60 leading-relaxed max-w-3xl">
                I am a technical builder focusing on combining high-performance computing, clean architecture, and breathtaking visuals. Passionate about interactive design, WebGL, Next.js, and pushing web graphics to their limits.
              </p>
              <div className="flex justify-center md:justify-start">
                <a
                  href="/cv.pdf"
                  download
                  className="glass-button px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white inline-flex items-center gap-2"
                >
                  <FileDown className="w-4 h-4" />
                  <span>Download Résumé</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map(({ icon: Icon, value, label }) => (
              <div key={label} className="glass-panel p-6 rounded-2xl text-center flex flex-col items-center justify-center gap-2 hover:bg-white/[0.04] transition-all duration-300 border-white/5">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center text-white">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-2xl font-black text-white">{value}</span>
                <span className="text-[10px] font-mono text-white/40 uppercase tracking-wider">{label}</span>
              </div>
            ))}
          </motion.div>

          {/* Timeline & Bio Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Professional Background */}
            <motion.div variants={itemVariants} className="md:col-span-2 glass-panel p-8 rounded-3xl space-y-6 border border-white/5">
              <h2 className="text-lg font-bold text-white uppercase tracking-wider flex items-center gap-2.5">
                <Briefcase className="w-5 h-5 text-white/80" />
                <span>Professional Experience</span>
              </h2>

              <div className="space-y-8 relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-px before:bg-white/10">
                {timeline.map(({ role, company, period, desc }) => (
                  <div key={role} className="relative pl-8 space-y-2">
                    {/* Timeline Node */}
                    <div className="absolute left-1.5 top-1.5 w-3 h-3 rounded-full bg-white border-4 border-[#030014] glow-dot" />

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <h3 className="text-sm font-bold text-white tracking-tight">{role}</h3>
                      <span className="text-[9px] font-mono bg-white/5 border border-white/5 px-2 py-0.5 rounded text-white/50 w-fit">
                        {period}
                      </span>
                    </div>
                    <p className="text-[11px] font-semibold text-zinc-300">{company}</p>
                    <p className="text-xs text-white/55 leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Core Values */}
            <motion.div variants={itemVariants} className="glass-panel p-8 rounded-3xl space-y-6 border border-white/5 flex flex-col justify-between">
              <div className="space-y-6">
                <h2 className="text-lg font-bold text-white uppercase tracking-wider flex items-center gap-2.5">
                  <User className="w-5 h-5 text-white/80" />
                  <span>My Philosophy</span>
                </h2>

                <div className="space-y-4 text-xs text-white/60 leading-relaxed">
                  <p>
                    <strong className="text-white block mb-1">1. User First</strong>
                    An interface must be delightful. Animations should feel natural and assist usability rather than distracting.
                  </p>
                  <p>
                    <strong className="text-white block mb-1">2. Optimization Always</strong>
                    Clean assets, performant layout tree rendering, and optimized network bundles are just as important as aesthetics.
                  </p>
                  <p>
                    <strong className="text-white block mb-1">3. Modular Code</strong>
                    Building modular, self-contained, typed React components guarantees codebase testability and longevity.
                  </p>
                </div>
              </div>

              <div className="border-t border-white/5 pt-4 flex items-center gap-3 mt-4">
                <Calendar className="w-5 h-5 text-white/30 shrink-0" />
                <div>
                  <span className="text-[8px] font-mono text-white/40 uppercase tracking-widest block">Available From</span>
                  <span className="text-[10px] font-bold text-white">IMMEDIATELY</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

      </main>
      <Footer />
    </>
  );
}