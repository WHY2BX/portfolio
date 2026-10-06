"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, ShieldCheck, MapPin } from "lucide-react";
import Footer from "@/components/Footer";

type Experience = {
  title: string;
  organization: string;
  date: string;
  description: string;
};

const experiences: Experience[] = [
  {
    title: "Software Developer Internship",
    organization: "MFEC",
    date: "5 Jan - 31 March 2026",
    description: "Worked as a Back-end Developer, responsible for developing APIs to deliver data for a mobile tourism application. Built the system using Go with Hexagonal Architecture to ensure maintainability and scalability. Used PostgreSQL as the main database and Redis for caching to improve system performance and response speed."
  },
  {
    title: "Project Presenter",
    organization: "JCSSE 2026",
    date: "2026",
    description: "Presented the technical architecture and development process of Bugtopia, an educational game project to academic and industry professionals and answered technical questions from the audience."
  },
  {
    title: "Staff",
    organization: "KMITL Open House 2024-2025",
    date: "2024 - 2025",
    description: "Acted as a curriculum advisor, assisting prospective students and visitors by providing information"
  },
  {
    title: "Staff in Art Department",
    organization: "KMITL IT Pre-programming 2023",
    date: "2023",
    description: "Designed official camp merchandise, including staff and participant t-shirts, aligning with the event's core theme."
  }
];

export default function CertificatesPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring" as const, stiffness: 120, damping: 22 },
    },
  };

  return (
    <>
      <main className="min-h-screen pt-36 pb-20 px-4 md:px-12 flex flex-col items-center relative overflow-hidden select-none">
        
        {/* Ambient light ring */}
        <div className="absolute top-1/3 left-1/3 w-[600px] h-[400px] bg-purple-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />

        {/* Header Title */}
        <div className="text-center max-w-xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/5 bg-white/5 mb-4">
            <Briefcase className="w-3.5 h-3.5 text-indigo-400" />
            <span className="text-[10px] font-mono tracking-widest text-indigo-200 uppercase">Experience</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white uppercase mb-2 text-gradient-white">
            EXPERIENCE & ACTIVITIES
          </h1>
          <p className="text-xs md:text-sm text-white/50">
            Professional work experience and extracurricular activities.
          </p>
        </div>

        {/* Certificates Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="glass-panel p-6 rounded-2xl hover:bg-white/[0.04] transition-all duration-300 border-white/5 flex flex-col relative group overflow-hidden"
            >
              {/* Subtle top card glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="space-y-3 relative z-10 flex-grow">
                <div className="flex justify-between items-start">
                  <span className="text-[9px] font-mono bg-white/5 border border-white/12 text-zinc-300 px-2 py-0.5 rounded-md uppercase font-semibold">
                    {exp.organization}
                  </span>
                  <ShieldCheck className="w-4 h-4 text-white opacity-60 group-hover:opacity-100 transition-opacity" />
                </div>
                
                <h2 className="text-lg font-bold text-white tracking-tight group-hover:text-zinc-200 transition-colors">
                  {exp.title}
                </h2>
                
                <p className="text-xs text-white/60 leading-relaxed">
                  {exp.description}
                </p>
              </div>

              <div className="border-t border-white/5 pt-3 flex items-center justify-between mt-4 relative z-10">
                <div>
                  <div className="flex items-center gap-1 text-[8px] font-mono text-white/40 uppercase">
                    <Calendar className="w-3 h-3" />
                    <span>Period</span>
                  </div>
                  <span className="text-[9px] font-bold text-white/70">{exp.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </main>
      <Footer />
    </>
  );
}
