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
          <div className="glass-panel p-6 rounded-2xl flex items-center gap-5 group cursor-pointer hover:border-white/20 transition-all duration-300 relative overflow-hidden">
            {/* Ambient inner glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="w-11 h-11 rounded-xl bg-gradient-to-b from-white/12 to-white/[0.02] border border-white/10 flex items-center justify-center text-zinc-300 group-hover:from-white group-hover:to-zinc-300 group-hover:text-black group-hover:border-white transition-all duration-300 relative z-10 shrink-0">
              <Icon className="w-5 h-5" />
            </div>
            <div className="relative z-10 overflow-hidden">
              <h3 className="type-micro font-mono text-zinc-500 mb-1">
                {label}
              </h3>
              <p className="type-body-sm font-semibold text-zinc-100 truncate">{value}</p>
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
