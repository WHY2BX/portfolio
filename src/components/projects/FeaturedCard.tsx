"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles, BookOpen, ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";

interface FeaturedCardProps {
  project: Project;
  variant: "featured" | "thesis";
  onClick: (project: Project) => void;
  index?: number;
}

const CONFIG = {
  featured: {
    label: "📌 Pinned Project",
    icon: Sparkles,
    accentBg: "from-indigo-600/20 to-violet-600/10",
    accentBorder: "border-indigo-500/25 hover:border-indigo-400/50",
    accentGlow: "hover:shadow-indigo-500/15",
    badgeClass: "bg-indigo-500/20 text-indigo-300 border-indigo-500/30",
    labelColor: "text-indigo-400",
  },
  thesis: {
    label: "🎓 Senior Thesis",
    icon: BookOpen,
    accentBg: "from-violet-600/20 to-fuchsia-600/10",
    accentBorder: "border-violet-500/25 hover:border-violet-400/50",
    accentGlow: "hover:shadow-violet-500/15",
    badgeClass: "bg-violet-500/20 text-violet-300 border-violet-500/30",
    labelColor: "text-violet-400",
  },
};

function FeaturedCard({
  project,
  variant,
  onClick,
  index = 0,
}: FeaturedCardProps) {
  const cfg = CONFIG[variant];

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      onClick={() => onClick(project)}
      className={`group cursor-pointer relative rounded-3xl overflow-hidden border bg-gradient-to-br ${cfg.accentBg} ${cfg.accentBorder} hover:shadow-2xl ${cfg.accentGlow} transition-[border-color,box-shadow] duration-300 flex flex-col min-h-[340px]`}
      role="button"
      tabIndex={0}
      aria-label={`Open ${project.title} details`}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") onClick(project); }}
    >
      {/* Background image — fills top ~60% */}
      <div className="relative w-full h-52 overflow-hidden flex-shrink-0">
        <Image
          src={project.image}
          alt={`${project.title} showcase`}
          fill
          priority={index === 0}
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 will-change-transform"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />

        {/* Variant label badge (top-left) */}
        <div className="absolute top-4 left-4">
          <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border ${cfg.badgeClass}`}>
            {cfg.label}
          </span>
        </div>

        {/* Open hint (top-right) */}
        <div className="absolute top-4 right-4 p-1.5 rounded-full bg-black/40 opacity-0 group-hover:opacity-100 transition-[opacity,transform] duration-200 translate-y-1 group-hover:translate-y-0">
          <ArrowUpRight className="w-4 h-4 text-white" />
        </div>
      </div>

      {/* Text content */}
      <div className="flex-1 p-6 flex flex-col justify-between gap-4">
        <div>
          <h3 className="text-2xl font-extrabold text-white tracking-tight mb-1">
            {project.title}
          </h3>
          <p className={`text-xs font-semibold uppercase tracking-wider mb-3 ${cfg.labelColor}`}>
            {project.subtitle}
          </p>
          <p className="text-sm text-white/55 leading-relaxed line-clamp-3">
            {project.shortDescription}
          </p>
        </div>

        {/* Tech chips */}
        <div className="flex flex-wrap gap-1.5">
          {project.tech.slice(0, 4).map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 rounded-full bg-white/5 border border-white/8 text-[10px] font-mono text-white/50"
            >
              {t}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/8 text-[10px] font-mono text-white/30">
              +{project.tech.length - 4}
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}

// memo: skips re-render when parent's `selected` state changes but props haven't changed
export default memo(FeaturedCard);
