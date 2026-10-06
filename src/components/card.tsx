"use client";

import React, { useState } from "react";
import { Cpu, QrCode, Terminal } from "lucide-react";

export default function Card() {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [shine, setShine] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Calculate rotation (-15 to 15 degrees)
    const xc = rect.width / 2;
    const yc = rect.height / 2;
    const rotateX = ((yc - y) / yc) * 15;
    const rotateY = ((x - xc) / xc) * 15;

    // Shine percentage
    const shineX = (x / rect.width) * 100;
    const shineY = (y / rect.height) * 100;

    setRotate({ x: rotateX, y: rotateY });
    setShine({ x: shineX, y: shineY });
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div
      className="relative flex items-center justify-center select-none"
      style={{ perspective: "1200px" }}
    >
      {/* 3D Glass Ticket */}
      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative w-[580px] h-[340px] rounded-3xl glass-card overflow-hidden p-8 flex flex-col justify-between transition-all duration-300 ease-out"
        style={{
          transform: isHovered
            ? `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale(1.03)`
            : "rotateX(0deg) rotateY(0deg) scale(1)",
          boxShadow: isHovered
            ? "0 30px 60px rgba(0, 0, 0, 0.6), 0 0 40px rgba(255, 255, 255, 0.08)"
            : "0 16px 40px rgba(0, 0, 0, 0.4)",
        }}
      >
        {/* Specular Shine Overlay */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(circle at ${shine.x}% ${shine.y}%, rgba(255, 255, 255, 0.15) 0%, transparent 55%)`,
          }}
        />

        {/* Top Header Section */}
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/80">
              <Terminal className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <h2 className="text-white text-base font-bold tracking-tight">ACHOO</h2>
              <p className="text-[10px] text-zinc-400 font-medium uppercase tracking-widest mt-0.5">IT, KMITL</p>
            </div>
          </div>
          <div className="text-right">
            <span className="inline-block px-3 py-1 rounded-full text-[9px] font-semibold uppercase tracking-widest text-white bg-white/10 border border-white/25">
              Available
            </span>
          </div>
        </div>

        {/* Center / Body Section */}
        <div className="flex justify-between items-center my-4">
          <div className="space-y-1">
            <span className="text-[9px] text-white/40 uppercase tracking-widest block">Access Permit</span>
            <h1 className="text-3xl font-extrabold tracking-tight text-white uppercase">
              Supitcha Wis
            </h1>
            <p className="text-[11px] text-white/60 max-w-[340px]">
              Authorized for full-stack engineering, interactive UI animations, and technical architecture.
            </p>
          </div>

          {/* Glowing Virtual Chip */}
          <div className="relative w-14 h-11 rounded-lg border border-white/15 bg-gradient-to-br from-white/10 to-white/0 flex items-center justify-center">
            <Cpu className="w-6 h-6 text-white/50" />
            <div className="absolute inset-0 rounded-lg bg-white/10 blur-[8px] animate-pulse" />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-4 flex justify-between items-center">
          <div className="flex gap-8">
            <div>
              <span className="text-[8px] text-white/40 uppercase tracking-widest block">Passenger</span>
              <span className="text-xs font-semibold text-white/90">Achoo / Developer</span>
            </div>
            <div>
              <span className="text-[8px] text-white/40 uppercase tracking-widest block">Gate / Class</span>
              <span className="text-xs font-semibold text-white/90">Web-3000 / First</span>
            </div>
            <div>
              <span className="text-[8px] text-white/40 uppercase tracking-widest block">Flight Code</span>
              <span className="text-xs font-semibold text-white/90">NEXT-15-TURBO</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Holographic QR Code */}
            <div className="p-1.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300 cursor-pointer">
              <QrCode className="w-6 h-6 text-white/60" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
