"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Code2, ExternalLink, X } from "lucide-react";

type Project = {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
};

const projects: Project[] = [
  {
    title: "Bugtopia",
    subtitle: "Software Engineering Thesis",
    description: "A gamified 3D virtual environment for detecting, replicating, and repairing complex software defects dynamically.",
    image: "/cards/fool.png",
    tags: ["Next.js", "Three.js", "Python", "WebSockets"],
    link: "https://github.com",
  },
  {
    title: "Synth-Wave",
    subtitle: "Web Audio Synthesizer",
    description: "Real-time collaborative synthesizer with spatial audio, digital filters, and custom track recording functionality.",
    image: "/cards/wheel.png",
    tags: ["React", "Web Audio API", "TailwindCSS"],
    link: "https://github.com",
  },
  {
    title: "Aegis Mobile",
    subtitle: "Cryptographic Vault",
    description: "A mobile password and identity safe running zero-knowledge proof client authentication protocols.",
    image: "/cards/magician.png",
    tags: ["React Native", "Expo", "TypeScript", "AES-256"],
    link: "https://github.com",
  },
  {
    title: "Lumina Engine",
    subtitle: "WebGL Voxel Engine",
    description: "Custom lightweight 3D ray-tracing engine built from scratch utilizing fragment shaders and sparse voxel octrees.",
    image: "/cards/fool.png",
    tags: ["WebGL 2", "GLSL", "TypeScript", "HTML5"],
    link: "https://github.com",
  },
  {
    title: "Chronos AI",
    subtitle: "Deep Time-Series Forecaster",
    description: "Predictive engine training transformer models to analyze global supply-chain fluctuations with anomaly detection.",
    image: "/cards/wheel.png",
    tags: ["PyTorch", "FastAPI", "Docker", "TailwindCSS"],
    link: "https://github.com",
  },
];

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // Scroll lock and focus management
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
      // Small timeout ensures the element is mounted before focusing
      setTimeout(() => modalRef.current?.focus(), 10);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedProject]);

  return (
    <main className="min-h-screen pt-32 pb-16 px-4 md:px-12 relative overflow-hidden select-none font-sans">
      
      {/* Ambient Background Reflection */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-indigo-500/10 rounded-full blur-[160px] pointer-events-none -z-10" />

      {/* Header Info */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/5 bg-white/5 mb-4">
          <Code2 className="w-3.5 h-3.5 text-white/60" />
          <span className="text-[10px] font-mono tracking-widest text-white/80 uppercase">Selected Works</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white uppercase mb-4">
          Project Archive
        </h1>
        <p className="text-sm md:text-base text-white/60 leading-relaxed">
          A showcase of systems programming, interactive frontend design, and AI experimentation.
        </p>
      </div>

      {/* Grid Gallery */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <motion.div
            key={project.title}
            onClick={() => setSelectedProject(project)}
            whileHover={{ y: -8 }}
            className="group cursor-pointer rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300 flex flex-col"
          >
            {/* Thumbnail */}
            <div className="relative h-56 w-full overflow-hidden bg-black/40">
              <div className="absolute inset-0">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Card Content */}
            <div className="p-6 flex-1 flex flex-col justify-center">
              <h3 className="text-xl font-bold text-white mb-2 tracking-tight">
                {project.title}
              </h3>
              <p className="text-sm text-indigo-300/80 font-medium line-clamp-1">
                {project.subtitle}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Interactive Modal */}
      <AnimatePresence>
        {selectedProject && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              style={{ willChange: "opacity" }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md"
            />

            {/* Modal Content */}
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 pointer-events-none">
              <motion.div
                ref={modalRef}
                tabIndex={-1}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                style={{ willChange: "transform, opacity" }}
                className="pointer-events-auto relative w-full max-w-2xl bg-zinc-900 border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh] outline-none"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 z-20 p-2 bg-black/50 hover:bg-black/80 rounded-full text-white/80 hover:text-white transition-colors backdrop-blur-md"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Modal Image */}
                <div className="relative w-full h-64 sm:h-80 overflow-hidden flex-shrink-0 bg-black">
                  <div className="absolute inset-0">
                    <Image
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent" />
                </div>

                {/* Modal Details */}
                <div className="p-6 sm:p-8 -mt-16 relative z-10 overflow-y-auto custom-scrollbar">
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-2 tracking-tight drop-shadow-md">
                    {selectedProject.title}
                  </h2>
                  <p className="text-indigo-400 font-medium text-lg mb-6">
                    {selectedProject.subtitle}
                  </p>

                  <p className="text-white/70 leading-relaxed mb-8 text-sm sm:text-base">
                    {selectedProject.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {selectedProject.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-white/80">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div>
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 bg-white text-black font-semibold rounded-xl hover:bg-zinc-200 transition-colors shadow-lg shadow-white/10"
                    >
                      Explore Project
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </main>
  );
}