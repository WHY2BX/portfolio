"use client";

import { useRef, useState } from "react";
import DiscordCard from "./DiscordCard";
import { CheckCircle2, AlertTriangle, Send } from "lucide-react";

export default function ContactTicket() {
  const ticketRef = useRef<HTMLFormElement>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleMouseMove = (e: React.MouseEvent) => {
    const ticket = ticketRef.current;
    if (!ticket) return;
    const rect = ticket.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (x > 0 && x < rect.width && y > 0 && y < rect.height) {
      ticket.style.borderColor = "rgba(255, 255, 255, 0.2)";
      ticket.style.boxShadow = "0 25px 60px rgba(0, 0, 0, 0.5), 0 0 30px rgba(255, 255, 255, 0.05)";
    } else {
      ticket.style.borderColor = "";
      ticket.style.boxShadow = "";
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    
    setStatus("loading");
    const nameParts = name.trim().split(" ");
    const firstName = nameParts[0] || "";
    const lastName = nameParts.slice(1).join(" ") || "N/A";

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, lastName, email, message }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      ref={ticketRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        if (ticketRef.current) {
          ticketRef.current.style.borderColor = "";
          ticketRef.current.style.boxShadow = "";
        }
      }}
      className="w-full max-w-[1000px] bg-gradient-to-br from-zinc-800/40 via-zinc-900/40 to-black/60 backdrop-blur-2xl border border-white/10 rounded-3xl flex flex-col md:flex-row overflow-hidden relative transition-all duration-500 shadow-2xl"
    >
      {/* Left Section: Form Content */}
      <div className="flex-1 p-8 md:p-10">
        <div className="flex items-center justify-between mb-8">
          <div className="flex flex-col">
            <span className="type-micro font-mono text-zinc-500 mb-1">
              Voucher Type
            </span>
            <h2 className="type-h2 uppercase text-gradient-white">
              Inquiry Pass
            </h2>
          </div>
          <div className="flex flex-col text-right">
            <span className="type-micro font-mono text-zinc-500 mb-1">
              Issue Date
            </span>
            <span className="text-sm font-mono text-zinc-200 tracking-wider">
              2026.06.24
            </span>
          </div>
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="type-micro font-mono text-zinc-400 block">
                Passenger Name
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name"
                className="w-full glass-input rounded-xl px-4 py-3 text-white placeholder:text-zinc-600 type-body-sm"
              />
            </div>
            <div className="space-y-2">
              <label className="type-micro font-mono text-zinc-400 block">
                Contact Email
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email@example.com"
                className="w-full glass-input rounded-xl px-4 py-3 text-white placeholder:text-zinc-600 type-body-sm"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="type-micro font-mono text-zinc-400 block">
              Project Mission
            </label>
            <textarea
              rows={4}
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell me about your project, vision, or timeline..."
              className="w-full glass-input rounded-xl px-4 py-3 text-white placeholder:text-zinc-600 type-body-sm resize-none"
            />
          </div>
        </div>
      </div>

      {/* Vertical Perforation */}
      <div className="hidden md:block w-px ticket-perforation opacity-15" />

      {/* Right Section: Stub / Info & Submit */}
      <div className="w-full md:w-[320px] bg-white/[0.005] flex flex-col items-center justify-between p-8 relative ticket-tear-hover group transition-all duration-500">
        {/* Tear cutouts */}
        <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-[#0c0c0e] border border-white/10 hidden md:block" />
        <div className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 w-7 h-7 rounded-full bg-[#050506] border border-white/10 hidden md:block" />

        <div className="w-full flex flex-col items-center gap-6 h-full justify-center">
          <DiscordCard />

          {/* Form Status Messages */}
          {status === "success" && (
            <div className="flex items-center gap-2 text-white type-body-sm font-semibold animate-fade-in">
              <CheckCircle2 className="w-4 h-4 shrink-0 text-white" />
              <span>Ticket Issued Successfully!</span>
            </div>
          )}
          {status === "error" && (
            <div className="flex items-center gap-2 text-zinc-400 type-body-sm font-medium animate-fade-in">
              <AlertTriangle className="w-4 h-4 shrink-0 text-zinc-400" />
              <span>Transmission Failed.</span>
            </div>
          )}

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full btn-primary rounded-xl py-3 type-caption flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
          >
            {status === "loading" ? (
              <span className="w-4 h-4 border-2 border-black/20 border-t-black rounded-full animate-spin" />
            ) : (
              <>
                <Send className="w-3.5 h-3.5" />
                <span>Submit Ticket</span>
              </>
            )}
          </button>
        </div>
      </div>
    </form>
  );
}
