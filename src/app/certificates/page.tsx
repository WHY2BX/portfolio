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
        <div className="absolute top-1/3 left-1/3 w-[600px] h-[400px] bg-zinc-500/[0.06] rounded-full blur-[140px] pointer-events-none -z-10" />

        {/* Header Title */}
        <div className="text-center max-w-2xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-gradient-to-b from-white/10 to-white/[0.02] mb-5">
            <Briefcase className="w-3.5 h-3.5 text-zinc-300" />
            <span className="type-caption text-zinc-300">Experience</span>
          </div>
          <h1 className="type-display uppercase mb-4 text-gradient-white">
            Experience &amp; Activities
          </h1>
          <p className="type-lead text-zinc-400">
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
              className="glass-panel p-7 rounded-2xl hover:border-white/20 transition-all duration-300 flex flex-col relative group overflow-hidden"
            >
              {/* Subtle top card glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="space-y-3 relative z-10 flex-grow">
                <div className="flex justify-between items-start">
                  <span className="type-micro font-mono bg-gradient-to-b from-white/12 to-white/[0.03] border border-white/12 text-zinc-200 px-2.5 py-1 rounded-md">
                    {exp.organization}
                  </span>
                  <ShieldCheck className="w-4 h-4 text-white opacity-60 group-hover:opacity-100 transition-opacity" />
                </div>
                
                <h2 className="type-h3 text-white group-hover:text-zinc-200 transition-colors">
                  {exp.title}
                </h2>
                
                <p className="type-body-sm text-zinc-400">
                  {exp.description}
                </p>
              </div>

              <div className="border-t border-white/8 pt-4 flex items-center justify-between mt-5 relative z-10">
                <div>
                  <div className="flex items-center gap-1.5 type-micro font-mono text-zinc-500 mb-1">
                    <Calendar className="w-3 h-3" />
                    <span>Period</span>
                  </div>
                  <span className="text-sm font-semibold text-zinc-200">{exp.date}</span>
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
