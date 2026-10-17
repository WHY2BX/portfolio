"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Experience", href: "/certificates" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export default function TopNavBar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-6xl z-50 rounded-2xl border border-white/10 bg-gradient-to-b from-zinc-800/60 to-black/60 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.06)]"
    >
      <div className="flex justify-between items-center px-4 lg:px-6 h-14 lg:h-16 w-full">
        {/* Logo */}
        <div className="text-xl lg:text-2xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-200 to-zinc-500 hover:scale-105 transition-transform duration-300">
          <Link href="/" onClick={closeMenu}>ACHOO</Link>
        </div>

        {/* Desktop Nav (lg and up) */}
        <nav className="hidden lg:flex gap-1 items-center bg-black/40 border border-white/8 rounded-full p-1">
          {navLinks.map(({ label, href }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`relative px-4 py-1.5 rounded-full text-sm font-semibold transition-colors duration-300 ${isActive
                  ? "text-black"
                  : "text-zinc-400 hover:text-white hover:bg-white/5"
                  }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-active-pill"
                    className="absolute inset-0 rounded-full bg-gradient-to-b from-white to-zinc-300 shadow-[0_4px_12px_rgba(255,255,255,0.12)]"
                    initial={false}
                    transition={{ type: "spring", stiffness: 400, damping: 34 }}
                  />
                )}
                <span className="relative z-10">{label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Call to Action Button (lg and up) */}
        <Link
          href="/contact"
          className="hidden lg:flex btn-primary px-5 py-2 rounded-full text-sm font-semibold items-center justify-center"
        >
          Hire Me
        </Link>

        {/* Hamburger toggle (< lg) */}
        <button
          id="mobile-menu-toggle"
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl border border-white/10 bg-white/5 text-zinc-300 hover:text-white hover:bg-white/10 active:scale-95 transition-all duration-300"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={isOpen ? "close" : "open"}
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.2 }}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </motion.span>
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile dropdown (< lg) */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            id="mobile-menu"
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden overflow-hidden border-t border-white/10"
          >
            <ul className="flex flex-col gap-1 p-3">
              {navLinks.map(({ label, href }, i) => {
                const isActive = pathname === href;
                return (
                  <motion.li
                    key={href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i }}
                  >
                    <Link
                      href={href}
                      onClick={closeMenu}
                      className={`block px-4 py-3 rounded-xl text-sm font-semibold transition-colors duration-300 ${isActive
                        ? "text-black bg-gradient-to-b from-white to-zinc-300"
                        : "text-zinc-300 hover:text-white hover:bg-white/5"
                        }`}
                    >
                      {label}
                    </Link>
                  </motion.li>
                );
              })}
              <li className="pt-2">
                <Link
                  href="/contact"
                  onClick={closeMenu}
                  className="btn-primary block w-full text-center px-5 py-3 rounded-xl text-sm font-semibold"
                >
                  Hire Me
                </Link>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
