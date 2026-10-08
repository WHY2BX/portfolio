"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Experience", href: "/certificates" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export default function TopNavBar() {
  const pathname = usePathname();

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-6xl z-50 rounded-2xl border border-white/8 bg-black/35 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.4)]"
    >
      <div className="flex justify-between items-center px-6 h-16 w-full">
        {/* Logo */}
        <div className="text-xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-white/60 hover:scale-105 transition-transform duration-300">
          <Link href="/">ACHOO</Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-1 items-center bg-white/5 border border-white/5 rounded-full p-1">
          {navLinks.map(({ label, href }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`relative px-4 py-1.5 rounded-full text-xs font-semibold transition-colors duration-300 ${isActive
                  ? "text-black"
                  : "text-white/60 hover:text-white hover:bg-white/5"
                  }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-active-pill"
                    className="absolute inset-0 rounded-full bg-white shadow-[0_4px_12px_rgba(255,255,255,0.1)]"
                    initial={false}
                    transition={{ type: "spring", stiffness: 400, damping: 34 }}
                  />
                )}
                <span className="relative z-10">{label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Call to Action Button */}
        <Link
          href="/contact"
          className="glass-button px-5 py-2 rounded-full text-xs font-semibold text-white/90 hover:text-white flex items-center justify-center border border-white/10"
        >
          Hire Me
        </Link>
      </div>
    </motion.header>
  );
}
