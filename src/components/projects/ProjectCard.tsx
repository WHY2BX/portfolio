"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  onClick: (project: Project) => void;
  /** index used for staggered entrance animation */
  index?: number;
}

function ProjectCard({ project, onClick, index = 0 }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1], delay: index * 0.06 }}
      whileHover={{ y: -6 }}
      onClick={() => onClick(project)}
      className="group cursor-pointer rounded-2xl overflow-hidden surface-gradient border border-white/10 hover:border-white/25 hover:shadow-2xl hover:shadow-black/60 transition-[border-color,box-shadow] duration-300 flex flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
      role="button"
      tabIndex={0}
      aria-label={`Open ${project.title} details`}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") onClick(project); }}
    >
      {/* Thumbnail */}
      <div className="relative h-48 w-full overflow-hidden bg-zinc-900/60">
        <Image
          src={project.image}
          alt={`${project.title} thumbnail`}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 will-change-transform"
        />
        {/* hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        {/* Open hint */}
        <div className="absolute top-3 right-3 p-1.5 rounded-full bg-black/40 opacity-0 group-hover:opacity-100 transition-[opacity,transform] duration-200 translate-y-1 group-hover:translate-y-0">
          <ArrowUpRight className="w-3.5 h-3.5 text-white" />
        </div>
      </div>

      {/* Card content */}
      <div className="p-5 flex-1 flex flex-col gap-1.5">
        <h3 className="type-h3 text-white">
          {project.title}
        </h3>
        <p className="type-micro text-zinc-400">
          {project.subtitle}
        </p>
        <p className="type-body-sm text-zinc-400 mt-1.5 line-clamp-2">
          {project.shortDescription}
        </p>

        {/* Minimal tech list */}
        <div className="flex flex-wrap gap-1.5 mt-3">
          {project.tech.slice(0, 3).map((t) => (
            <span key={t} className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono text-white/50">
              {t}
            </span>
          ))}
          {project.tech.length > 3 && (
            <span className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono text-white/30">
              +{project.tech.length - 3}
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}

// memo: skips re-render when parent's `selected` state changes but this card's props haven't changed
export default memo(ProjectCard);
