"use client";

import React, { useState } from "react";
import { Cpu, QrCode, Terminal, Gamepad2 } from "lucide-react";

/* ───────────────────────────────────────────────────────
 *  Card-face data type + static data
 * ─────────────────────────────────────────────────────── */
type CardData = {
  icon: React.ElementType;
  title: string;
  subtitle: string;
  badge: string;
  label: string;
  name: string;
  description: string;
  info: { label: string; value: string }[];
};

const frontData: CardData = {
  icon: Terminal,
  title: "ACHOO",
  subtitle: "IT, KMITL",
  badge: "Available",
  label: "Access Permit",
  name: "Supitcha Wis",
  description:
    "Authorized for full-stack engineering, interactive UI animations, and technical architecture.",
  info: [
    { label: "Passenger", value: "Achoo / Developer" },
    { label: "Gate / Class", value: "Web-3000 / First" },
    { label: "Flight Code", value: "NEXT-15-TURBO" },
  ],
};

const backData: CardData = {
  icon: Gamepad2,
  title: "ACHOO",
  subtitle: "Gamer",
  badge: "Online",
  label: "Player ID",
  name: "Achoo",
  description:
    "Authorized for gaming sessions, competitive matches, and late-night raids.",
  info: [
    { label: "Player", value: "Achoo / Gamer" },
    { label: "Server", value: "Asia / SEA" },
    { label: "Status", value: "LFG-READY" },
  ],
};

/* ───────────────────────────────────────────────────────
 *  Shared face template — renders identical layout for
 *  both front & back, driven entirely by data props.
 * ─────────────────────────────────────────────────────── */
function CardFaceContent({
  data,
  shine,
  isHovered,
}: {
  data: CardData;
  shine: { x: number; y: number };
  isHovered: boolean;
}) {
  const Icon = data.icon;

  return (
    <div className="relative w-full h-full p-8 flex flex-col justify-between">
      {/* Specular shine overlay */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300 rounded-3xl"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(circle at ${shine.x}% ${shine.y}%, rgba(255, 255, 255, 0.15) 0%, transparent 55%)`,
        }}
      />

      {/* Top Header */}
      <div className="flex justify-between items-start relative z-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/80">
            <Icon className="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <h2 className="text-white text-base font-bold tracking-tight">
              {data.title}
            </h2>
            <p className="text-[10px] text-zinc-400 font-medium uppercase tracking-widest mt-0.5">
              {data.subtitle}
            </p>
          </div>
        </div>
        <span className="inline-block px-3 py-1 rounded-full text-[9px] font-semibold uppercase tracking-widest text-white bg-white/10 border border-white/25">
          {data.badge}
        </span>
      </div>

      {/* Center / Body */}
      <div className="flex justify-between items-center my-4 relative z-10">
        <div className="space-y-1">
          <span className="text-[9px] text-white/40 uppercase tracking-widest block">
            {data.label}
          </span>
          <h1 className="text-3xl font-extrabold tracking-tight text-white uppercase">
            {data.name}
          </h1>
          <p className="text-[11px] text-white/60 max-w-[340px]">
            {data.description}
          </p>
        </div>

        {/* Glowing Virtual Chip */}
        <div className="relative w-14 h-11 rounded-lg border border-white/15 bg-gradient-to-br from-white/10 to-white/0 flex items-center justify-center">
          <Cpu className="w-6 h-6 text-white/50" />
          <div className="absolute inset-0 rounded-lg bg-white/10 blur-[8px] animate-pulse" />
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10 pt-4 flex justify-between items-center relative z-10">
        <div className="flex gap-8">
          {data.info.map((item) => (
            <div key={item.label}>
              <span className="text-[8px] text-white/40 uppercase tracking-widest block">
                {item.label}
              </span>
              <span className="text-xs font-semibold text-white/90">
                {item.value}
              </span>
            </div>
          ))}
        </div>
        <div className="p-1.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300 cursor-pointer">
          <QrCode className="w-6 h-6 text-white/60" />
        </div>
      </div>
    </div>
  );
}

/* ───────────────────────────────────────────────────────
 *  EXPORTED Card — unified 3D hierarchy
 *
 *  Layer stack (outermost → innermost):
 *    1. Mouse-capture layer   (perspective, captures mouse)
 *    2. Flip layer            (rotateY 0/180, smooth 0.7s transition)
 *    3. Tilt layer            (rotateX/Y from mouse, instant)
 *    4. Front / Back faces    (backface-visibility: hidden)
 *
 *  All layers use transform-style: preserve-3d so the 3D
 *  transforms compose correctly down the tree.
 * ─────────────────────────────────────────────────────── */
export default function Card({ isFlipped = false }: { isFlipped?: boolean }) {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [shine, setShine] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const xc = rect.width / 2;
    const yc = rect.height / 2;

    setRotate({ x: ((yc - y) / yc) * 15, y: ((x - xc) / xc) * 15 });
    setShine({ x: (x / rect.width) * 100, y: (y / rect.height) * 100 });
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotate({ x: 0, y: 0 });
  };

  return (
    /* 1 · Mouse-capture + perspective */
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="w-[580px] h-[340px] cursor-default"
      style={{ perspective: "1200px" }}
    >
      {/* 2 · Tilt layer (Parent) — instant mouse follow, always in un-flipped coordinate space */}
      <div
        className="w-full h-full"
        style={{
          transformStyle: "preserve-3d",
          transform: isHovered
            ? `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale(1.03)`
            : "rotateX(0deg) rotateY(0deg) scale(1)",
          transition: isHovered ? "none" : "transform 0.3s ease-out",
        }}
      >
        {/* 3 · Flip layer (Child) — smooth animated rotation */}
        <div
          className="relative w-full h-full"
          style={{
            transformStyle: "preserve-3d",
            transition: "transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)",
            transform: `rotateY(${isFlipped ? 180 : 0}deg)`,
          }}
        >
          {/* 4a · FRONT face */}
          <div
            className="absolute inset-0 rounded-3xl glass-card overflow-hidden"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
            }}
          >
            <CardFaceContent
              data={frontData}
              shine={shine}
              isHovered={isHovered}
            />
          </div>

          {/* 4b · BACK face */}
          <div
            className="absolute inset-0 rounded-3xl glass-card overflow-hidden"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            <CardFaceContent
              data={backData}
              shine={shine}
              isHovered={isHovered}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
