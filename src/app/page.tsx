"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Card from "@/components/card";
import MusicPlayer from "@/components/MusicPlayer";
import Snow from "@/components/Snow";
import { RotateCcw } from "lucide-react";

export default function Page() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <main className="h-screen w-full relative overflow-hidden bg-[#030014] grid place-items-center select-none">
      {/* Grayscale background image overlay */}
      <div
        className="absolute inset-0 bg-[url('/bg.png')] bg-cover bg-center opacity-25 pointer-events-none"
        style={{ filter: "grayscale(100%) contrast(110%)" }}
      />

      {/* Dark vignette overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/85 pointer-events-none" />

      {/* Minimal snow effect */}
      <Snow />

      {/* Main card */}
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <Card isFlipped={isFlipped} />
      </motion.div>

      {/* Flip arrow button — bottom left */}
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

      <MusicPlayer />
    </main>
  );
}
