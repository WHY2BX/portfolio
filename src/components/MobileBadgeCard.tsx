"use client";

import { motion } from "framer-motion";
import { QrCode } from "lucide-react";
import { frontData, type CardData } from "@/components/card";

/* ───────────────────────────────────────────────────────
 *  MobileBadgeCard — vertical "ID badge" rendering of the
 *  front card data, used below the lg breakpoint.
 *
 *  Structure (top → bottom):
 *    1. Lanyard strap + metal clip
 *    2. Badge body with punched slot
 *    3. Header (icon + status) → title → info grid
 *    4. Divider → label / name / description
 *    5. Footer (QR + reference + brand)
 * ─────────────────────────────────────────────────────── */
export default function MobileBadgeCard({ data = frontData }: { data?: CardData }) {
  const Icon = data.icon;
  // First two info items go in the 2-col grid, the rest go in the footer
  const gridInfo = data.info.slice(0, 2);
  const footerInfo = data.info.slice(2);

  return (
    <motion.div
      className="relative flex flex-col items-center w-full max-w-[340px] mx-auto"
      style={{ transformOrigin: "50% 0%" }}
      initial={{ opacity: 0, y: -40, rotate: -4 }}
      animate={{ opacity: 1, y: 0, rotate: [-4, 2.5, -1.2, 0.5, 0] }}
      transition={{ duration: 1.6, ease: "easeOut" }}
    >
      {/* 1 · Lanyard strap (clear plastic) */}
      <div className="relative w-12 h-24 -mt-4 rounded-b-md bg-gradient-to-b from-white/[0.03] via-white/10 to-white/15 border-x border-b border-white/15 backdrop-blur-sm shadow-[inset_0_0_12px_rgba(255,255,255,0.06)]">
        {/* Strap extension — reaches up behind the nav bar regardless of card position */}
        <div className="absolute bottom-full -left-px -right-px h-[50vh] bg-white/[0.03] border-x border-white/15" />
        {/* Metal snap button */}
        <div className="absolute left-1/2 bottom-6 -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-br from-zinc-200 via-zinc-400 to-zinc-700 border border-white/30 shadow-[0_2px_6px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.8)]">
          <div className="absolute inset-[6px] rounded-full bg-gradient-to-br from-zinc-500 to-zinc-800" />
        </div>
      </div>
      {/* Strap loop that goes through the slot */}
      <div className="relative z-20 w-16 h-5 -mt-2 rounded-md bg-gradient-to-b from-white/20 to-white/5 border border-white/20 backdrop-blur-sm" />

      {/* 2 · Badge body */}
      <article
        id="mobile-id-badge"
        className="relative -mt-3 w-full aspect-[5/7.6] rounded-[28px] glass-card overflow-hidden p-6 pt-10 flex flex-col"
      >
        {/* Sheen + grain */}
        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(115deg,transparent_35%,rgba(255,255,255,0.06)_48%,transparent_60%)]" />
        <div className="absolute -top-24 -right-24 w-56 h-56 rounded-full bg-white/[0.04] blur-3xl pointer-events-none" />

        {/* Punched slot */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-4 rounded-full bg-black/80 border border-white/15 shadow-[inset_0_2px_4px_rgba(0,0,0,0.9),0_1px_0_rgba(255,255,255,0.08)]" />

        {/* 3 · Header: icon + status */}
        <header className="relative z-10 flex items-start justify-between">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-b from-white/12 to-white/[0.02] border border-white/10 flex items-center justify-center text-zinc-100">
            <Icon className="w-7 h-7" />
          </div>
          <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full font-mono text-[10px] uppercase tracking-[0.14em] text-black bg-gradient-to-b from-white to-zinc-300 border border-white/40">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            {data.badge}
          </span>
        </header>

        {/* Title */}
        <div className="relative z-10 mt-6">
          <h2 className="font-mono text-[28px] leading-none uppercase tracking-[0.08em] text-gradient-white">
            {data.title}
          </h2>
          <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-400">
            {data.subtitle}
          </p>
        </div>

        {/* Info grid */}
        <dl className="relative z-10 mt-4 grid grid-cols-2 gap-x-4 gap-y-2">
          {gridInfo.map((item) => (
            <div key={item.label}>
              <dt className="font-mono text-[9px] uppercase tracking-[0.14em] text-zinc-500">
                {item.label}
              </dt>
              <dd className="font-mono text-[11px] uppercase text-zinc-200">{item.value}</dd>
            </div>
          ))}
        </dl>

        {/* 4 · Divider + identity */}
        <div className="relative z-10 mt-4 border-t border-white/15 pt-3">
          <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-zinc-500">
            @{data.label.replace(/\s+/g, "_")}
          </span>
          <h1 className="mt-1 font-mono text-[24px] leading-tight uppercase tracking-[0.06em] text-gradient-white">
            {data.name}
          </h1>
          <p className="mt-2 text-[11px] leading-relaxed text-zinc-400 line-clamp-3">
            {data.description}
          </p>
        </div>

        {/* 5 · Footer */}
        <footer className="relative z-10 mt-auto pt-4 flex items-end gap-4">
          <div className="shrink-0 p-2 rounded-xl bg-white/5 border border-white/10">
            <QrCode className="w-16 h-16 text-white/70" strokeWidth={1.25} />
          </div>
          <div className="flex-1 min-w-0 space-y-2">
            {footerInfo.map((item) => (
              <div key={item.label}>
                <span className="block font-mono text-[9px] uppercase tracking-[0.14em] text-zinc-500">
                  {item.label}
                </span>
                <span className="block font-mono text-[10px] uppercase text-zinc-200 leading-snug">
                  {item.value}
                </span>
              </div>
            ))}
            <span className="block text-sm font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-200 to-zinc-500">
              ACHOO
            </span>
          </div>
        </footer>
      </article>
    </motion.div>
  );
}
