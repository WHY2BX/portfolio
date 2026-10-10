"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Code2, Layers } from "lucide-react";
import { featuredProject, thesisProject, gridProjects } from "@/data/projects";
import type { Project } from "@/data/projects";
import FeaturedCard from "@/components/projects/FeaturedCard";
import ProjectCard from "@/components/projects/ProjectCard";
import ProjectModal from "@/components/projects/ProjectModal";

export default function ProjectsPage() {
  const [selected, setSelected] = useState<Project | null>(null);

  // Stable references — prevents child cards and modal effects from re-running on every render
  const handleSelect = useCallback((p: Project) => setSelected(p), []);
  const handleClose  = useCallback(() => setSelected(null), []);

  return (
    <main className="min-h-screen pt-28 pb-20 px-4 md:px-10 xl:px-16 relative overflow-hidden select-none font-sans">

      {/* ── Ambient background glows ── */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-zinc-400/[0.07] rounded-full blur-[180px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-zinc-600/[0.08] rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* ── Page header ── */}
      <div className="text-center max-w-2xl mx-auto mb-16 pt-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-gradient-to-b from-white/10 to-white/[0.02] mb-5"
        >
          <Code2 className="w-3.5 h-3.5 text-zinc-300" />
          <span className="type-caption text-zinc-300">
            Selected Works
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="type-display uppercase mb-4 text-gradient-white"
        >
          Project Archive
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="type-lead text-zinc-400"
        >
          A curated collection spanning systems programming, interactive UI, and
          applied machine learning.
        </motion.p>
      </div>

      {/* ════════════════════════════════════════════
          SECTION 1 — Featured 2-column banner row
          ════════════════════════════════════════════ */}
      <section className="max-w-6xl mx-auto mb-14" aria-label="Featured projects">
        <SectionLabel icon={<Layers className="w-3.5 h-3.5" />} text="Featured Works" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FeaturedCard
            project={featuredProject}
            variant="featured"
            onClick={handleSelect}
            index={0}
          />
          <FeaturedCard
            project={thesisProject}
            variant="thesis"
            onClick={handleSelect}
            index={1}
          />
        </div>
      </section>

      {/* ════════════════════════════════════════════
          SECTION 2 — Main 3-column project grid
          ════════════════════════════════════════════ */}
      <section className="max-w-6xl mx-auto" aria-label="All projects">
        <SectionLabel icon={<Code2 className="w-3.5 h-3.5" />} text="All Projects" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {gridProjects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={handleSelect}
              index={i}
            />
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════════
          MODAL — single instance, driven by state
          ════════════════════════════════════════════ */}
      <ProjectModal project={selected} onClose={handleClose} />
    </main>
  );
}

/* ── Small helper: section divider label ── */
function SectionLabel({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <div className="flex items-center gap-2 text-zinc-400">
        {icon}
        <h2 className="type-caption font-mono">{text}</h2>
      </div>
      <div className="flex-1 h-px bg-gradient-to-r from-white/15 to-transparent" />
    </div>
  );
}