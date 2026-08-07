"use client";

import { Mail, MessageSquare, Clock } from "lucide-react";

const contacts = [
  {
    icon: Mail,
    label: "Direct Mail",
    value: "whyso2bx@gmail.com",
    href: "mailto:whyso2bx@gmail.com",
  },
  {
    icon: MessageSquare,
    label: "Discord",
    value: "why2bx",
    href: "https://discord.com",
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "Under 24 Hours",
    href: null,
  },
];

export default function ContactCards() {
  return (
    <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-[1000px]">
      {contacts.map(({ icon: Icon, label, value, href }) => {
        const CardElement = (
          <div className="glass-panel p-6 rounded-2xl flex items-center gap-5 group cursor-pointer hover:bg-white/[0.04] transition-all duration-300 border-white/5 relative overflow-hidden">
            {/* Ambient inner glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center text-white/70 group-hover:bg-white group-hover:text-black group-hover:border-white transition-all duration-300 relative z-10 shrink-0">
              <Icon className="w-5 h-5" />
            </div>
            <div className="relative z-10 overflow-hidden">
              <h4 className="text-[9px] font-mono text-white/40 uppercase tracking-widest">
                {label}
              </h4>
              <p className="text-xs font-semibold text-white/95 truncate">{value}</p>
            </div>
          </div>
        );

        return href ? (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            {CardElement}
          </a>
        ) : (
          <div key={label}>{CardElement}</div>
        );
      })}
    </div>
  );
}
