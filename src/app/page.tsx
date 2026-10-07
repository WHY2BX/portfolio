"use client";

import { useState } from "react";
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
      <div className="relative z-10">
        <Card isFlipped={isFlipped} />
      </div>

      {/* Flip arrow button — bottom left */}
      <button
        onClick={() => setIsFlipped((prev) => !prev)}
        className={`flip-arrow-btn ${isFlipped ? "flipped" : ""}`}
        aria-label="Flip card"
      >
        <RotateCcw className="w-5 h-5" />
      </button>

      <MusicPlayer />
    </main>
  );
}
