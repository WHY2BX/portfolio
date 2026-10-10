"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, Github, ExternalLink, Play } from "lucide-react";
import ReactMarkdown from "react-markdown";
import type { Project } from "@/data/projects";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

/** Tech-badge styles — monochrome palette. Highlighted techs get a lighter chip; extend freely */
const HIGHLIGHT_TECH = new Set<string>(["Next.js", "React", "TypeScript", "Python", "Go", "GO"]);

function getBadgeClass(tech: string): string {
  return HIGHLIGHT_TECH.has(tech)
    ? "bg-gradient-to-b from-white/20 to-white/5 text-white border-white/25"
    : "bg-white/5 text-zinc-300 border-white/10";
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
              className="pointer-events-auto relative w-full max-w-2xl bg-gradient-to-b from-zinc-900 via-zinc-950 to-black border border-white/10 rounded-3xl overflow-hidden shadow-2xl shadow-black/60 flex flex-col max-h-[92vh] outline-none"
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
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/30 to-transparent" />
              </div>

              {/* Details */}
              {/* Scroll lives in a plain div — not in the animated shell — to avoid composite-layer scroll jank */}
              <div className="overflow-y-auto overscroll-contain custom-scrollbar p-6 sm:p-8 -mt-12 relative z-10">
                {/* Title block */}
                <h2 className="type-h1 text-gradient-white mb-2 drop-shadow-lg">
                  {project.title}
                </h2>
                <p className="type-caption text-zinc-400 mb-6">
                  {project.subtitle}
                </p>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className={`px-3 py-1 rounded-full text-xs font-mono font-semibold border ${getBadgeClass(t)}`}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Full description */}
                <div className="type-body text-zinc-400 mb-8">
                  <ReactMarkdown
                    components={{
                      p: ({ node, ...props }) => <p className="mb-4 last:mb-0" {...props} />,
                      ul: ({ node, ...props }) => <ul className="list-disc pl-5 mb-4 last:mb-0 space-y-1.5" {...props} />,
                      ol: ({ node, ...props }) => <ol className="list-decimal pl-5 mb-4 last:mb-0 space-y-1.5" {...props} />,
                      li: ({ node, ...props }) => <li className="marker:text-zinc-600" {...props} />,
                      strong: ({ node, ...props }) => <strong className="font-semibold text-zinc-100" {...props} />,
                      a: ({ node, ...props }) => (
                        <a className="text-white hover:text-zinc-300 underline underline-offset-2 decoration-white/30 transition-colors" target="_blank" rel="noopener noreferrer" {...props} />
                      ),
                      h1: ({ node, ...props }) => <h3 className="type-h2 text-white mt-8 mb-3 first:mt-0" {...props} />,
                      h2: ({ node, ...props }) => <h3 className="type-h3 text-white mt-7 mb-3 first:mt-0" {...props} />,
                      h3: ({ node, ...props }) => <h3 className="type-h3 text-zinc-100 mt-6 mb-3 first:mt-0" {...props} />,
                      h4: ({ node, ...props }) => <h4 className="type-h4 text-zinc-200 mt-5 mb-2 first:mt-0" {...props} />,
                    }}
                  >
                    {project.description}
                  </ReactMarkdown>
                </div>

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
                      className="btn-primary inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold"
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
