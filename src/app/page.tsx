"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Card from "@/components/card";
import MobileBadgeCard from "@/components/MobileBadgeCard";
import MusicPlayer from "@/components/MusicPlayer";
import Snow from "@/components/Snow";
import { RotateCcw } from "lucide-react";

export default function Page() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <main className="min-h-dvh lg:h-screen w-full relative overflow-x-hidden lg:overflow-hidden bg-gradient-to-b from-zinc-900 via-zinc-950 to-black select-none">
      {/* Grayscale background image overlay */}
      <div
        className="absolute inset-0 bg-[url('/bg.png')] bg-cover bg-center opacity-25 pointer-events-none"
        style={{ filter: "grayscale(100%) contrast(110%)" }}
      />

      {/* Dark vignette overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-zinc-950/30 to-zinc-900/80 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.75)_100%)] pointer-events-none" />

      {/* Minimal snow effect */}
      <Snow />

      {/* ─── Desktop view (lg and up) ─── */}
      <div className="hidden lg:grid h-full w-full place-items-center">
        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <Card isFlipped={isFlipped} />
        </motion.div>

        {/* Flip arrow button — bottom right */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          onClick={() => setIsFlipped((prev) => !prev)}
          className={`flip-arrow-btn ${isFlipped ? "flipped" : ""}`}
          aria-label="Flip card"
        >
          <RotateCcw className="w-5 h-5" />
        </motion.button>
      </div>

      {/* ─── Mobile / tablet view (< lg) ─── */}
      <section
        aria-label="ID badge"
        className="lg:hidden relative z-10 min-h-dvh flex items-center justify-center px-6 pt-20 pb-36"
      >
        <MobileBadgeCard />
      </section>

      <MusicPlayer />
    </main>
  );
}
