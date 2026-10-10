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
    accentBg: "from-zinc-700/40 via-zinc-900/60 to-black",
    accentBorder: "border-white/12 hover:border-white/30",
    accentGlow: "hover:shadow-white/5",
    badgeClass: "bg-gradient-to-b from-white to-zinc-300 text-black border-white/40",
    labelColor: "text-zinc-300",
  },
  thesis: {
    label: "🎓 Senior Thesis",
    icon: BookOpen,
    accentBg: "from-zinc-800/50 via-zinc-950/70 to-black",
    accentBorder: "border-white/10 hover:border-white/25",
    accentGlow: "hover:shadow-white/5",
    badgeClass: "bg-zinc-800/80 text-zinc-100 border-white/20",
    labelColor: "text-zinc-400",
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
          <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full type-micro border ${cfg.badgeClass}`}>
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
          <h3 className="type-h2 text-white mb-1.5">
            {project.title}
          </h3>
          <p className={`type-caption mb-3 ${cfg.labelColor}`}>
            {project.subtitle}
          </p>
          <p className="type-body-sm text-zinc-400 line-clamp-3">
            {project.shortDescription}
          </p>
        </div>

        {/* Tech chips */}
        <div className="flex flex-wrap gap-1.5">
          {project.tech.slice(0, 4).map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono text-white/50"
            >
              {t}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono text-white/30">
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
