"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, Github, ExternalLink, Play } from "lucide-react";
import type { Project } from "@/data/projects";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

/** Tech-badge colour map — extend freely */
const TECH_COLORS: Record<string, string> = {
  "Next.js": "bg-white/10 text-white border-white/20",
  "React": "bg-cyan-500/15 text-cyan-300 border-cyan-500/25",
  "React Native": "bg-cyan-500/15 text-cyan-300 border-cyan-500/25",
  "TypeScript": "bg-blue-500/15 text-blue-300 border-blue-500/25",
  "Python": "bg-yellow-400/15 text-yellow-300 border-yellow-400/25",
  "PyTorch": "bg-orange-500/15 text-orange-300 border-orange-500/25",
  "Three.js": "bg-green-500/15 text-green-300 border-green-500/25",
  "WebGL 2": "bg-purple-500/15 text-purple-300 border-purple-500/25",
  "GLSL": "bg-purple-500/15 text-purple-300 border-purple-500/25",
  "Docker": "bg-sky-500/15 text-sky-300 border-sky-500/25",
  "Kubernetes": "bg-sky-400/15 text-sky-200 border-sky-400/25",
  "FastAPI": "bg-teal-500/15 text-teal-300 border-teal-500/25",
  "WebSockets": "bg-fuchsia-500/15 text-fuchsia-300 border-fuchsia-500/25",
  "Kafka": "bg-red-500/15 text-red-300 border-red-500/25",
  "TailwindCSS": "bg-teal-400/15 text-teal-200 border-teal-400/25",
  "Expo": "bg-white/10 text-white border-white/20",
};

function getBadgeClass(tech: string): string {
  return TECH_COLORS[tech] ?? "bg-white/5 text-white/70 border-white/10";
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
      setTimeout(() => modalRef.current?.focus(), 10);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [project]);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop — solid dark overlay, NO backdrop-blur (blur forces full-screen GPU repaint every frame) */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/75"
          />

          {/* Modal shell */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 pointer-events-none">
            <motion.div
              ref={modalRef}
              key="modal"
              tabIndex={-1}
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 20 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="pointer-events-auto relative w-full max-w-2xl bg-zinc-950/95 border border-white/10 rounded-3xl overflow-hidden shadow-2xl shadow-black/60 flex flex-col max-h-[92vh] outline-none"
            >
              {/* Close button */}
              <button
                onClick={onClose}
                aria-label="Close modal"
                className="absolute top-4 right-4 z-30 p-2 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-white/60 hover:text-white transition-all duration-200"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Showcase image */}
              <div className="relative w-full h-56 sm:h-72 flex-shrink-0 bg-zinc-900 overflow-hidden">
                <Image
                  src={project.showcaseImage ?? project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  priority
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent" />
              </div>

              {/* Details */}
              {/* Scroll lives in a plain div — not in the animated shell — to avoid composite-layer scroll jank */}
              <div className="overflow-y-auto overscroll-contain custom-scrollbar p-6 sm:p-8 -mt-12 relative z-10">
                {/* Title block */}
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-1 drop-shadow-lg">
                  {project.title}
                </h2>
                <p className="text-indigo-400 font-semibold text-sm sm:text-base mb-6">
                  {project.subtitle}
                </p>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className={`px-3 py-1 rounded-full text-[11px] font-mono font-semibold border ${getBadgeClass(t)}`}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Full description */}
                <p className="text-white/65 text-sm sm:text-base leading-relaxed mb-8">
                  {project.description}
                </p>

                {/* Action links */}
                <div className="flex flex-wrap gap-3">
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/8 hover:bg-white/15 border border-white/10 hover:border-white/25 text-white/80 hover:text-white text-sm font-semibold transition-all duration-200"
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
                  )}
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold transition-all duration-200 shadow-lg shadow-indigo-500/20"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Site
                    </a>
                  )}
                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/8 hover:bg-white/15 border border-white/10 hover:border-white/25 text-white/80 hover:text-white text-sm font-semibold transition-all duration-200"
                    >
                      <Play className="w-4 h-4" />
                      Video Demo
                    </a>
                  )}
                  {project.links.link && (
                    <a
                      href={project.links.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/8 hover:bg-white/15 border border-white/10 hover:border-white/25 text-white/80 hover:text-white text-sm font-semibold transition-all duration-200"
                    >
                      <ExternalLink className="w-4 h-4" />
                      {project.links.linkLabel || "External Link"}
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
