"use client";

import { useEffect, useState } from "react";
import { MessageSquare, ShieldAlert } from "lucide-react";

type LanyardData = {
  data: {
    discord_user: {
      id: string;
      username: string;
      avatar: string;
      global_name: string;
    };
    discord_status: "online" | "idle" | "dnd" | "offline";
    activities: {
      name: string;
      type: number;
      details?: string;
      state?: string;
    }[];
  };
};

export default function DiscordCard() {
  const [data, setData] = useState<LanyardData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const discordId = process.env.NEXT_PUBLIC_DISCORD_ID || "309322195857965057";
        const res = await fetch(`https://api.lanyard.rest/v1/users/${discordId}`);
        const json = await res.json();
        if (json.success) {
          setData(json);
        }
      } catch (err) {
        console.error("Lanyard fetch failed:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 15000);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="w-full max-w-[280px] p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col items-center gap-3 animate-pulse">
        <div className="w-12 h-12 rounded-full bg-white/5" />
        <div className="w-24 h-4 bg-white/5 rounded" />
        <div className="w-32 h-3 bg-white/5 rounded" />
      </div>
    );
  }

  // Fallback UI if data is missing
  if (!data || !data.data || !data.data.discord_user) {
    return (
      <div className="w-full max-w-[280px] p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col items-center gap-3 text-center">
        <ShieldAlert className="w-8 h-8 text-white/40" />
        <p className="type-body-sm text-zinc-500">Discord Widget Unavailable</p>
      </div>
    );
  }

  const user = data.data.discord_user;
  const avatar = user.avatar
    ? `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`
    : `https://cdn.discordapp.com/embed/avatars/0.png`;

  const statusColors = {
    online: { bg: "bg-emerald-500", glow: "shadow-[0_0_12px_#10b981]" },
    idle: { bg: "bg-amber-400", glow: "shadow-[0_0_12px_#fbbf24]" },
    dnd: { bg: "bg-rose-500", glow: "shadow-[0_0_12px_#f43f5e]" },
    offline: { bg: "bg-zinc-500", glow: "shadow-[0_0_12px_#71717a]" },
  }[data.data.discord_status] || { bg: "bg-zinc-500", glow: "" };

  const activity = data.data.activities.find((a) => a.type === 0);

  return (
    <div className="w-full max-w-[280px] rounded-2xl overflow-hidden bg-gradient-to-b from-zinc-800/40 to-black/40 backdrop-blur-xl border border-white/10 shadow-2xl relative transition-all duration-300 hover:border-white/20">
      {/* Small Banner */}
      <div className="h-10 bg-gradient-to-r from-zinc-500/30 via-zinc-700/30 to-zinc-900/30 border-b border-white/5" />

      <div className="px-5 pb-5 -mt-6 flex flex-col items-center">
        {/* Avatar with Status Ring */}
        <div className="relative">
          <img
            src={avatar}
            alt={`${user.username}'s Discord Avatar`}
            className="w-14 h-14 rounded-full border-2 border-white/10 object-cover bg-black/40"
          />
          <span
            className={`absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full border-2 border-[#0a0a0a] ${statusColors.bg} ${statusColors.glow} animate-pulse`}
          />
        </div>

        {/* User Identifiers */}
        <div className="mt-3 text-center">
          <h4 className="type-h4 text-white">
            {user.global_name || user.username}
          </h4>
          <p className="text-xs text-zinc-500 tracking-wider">@{user.username}</p>
        </div>

        {/* Activity Status */}
        {activity ? (
          <div className="mt-4 p-2.5 w-full rounded-xl bg-white/[0.03] border border-white/5 text-left flex items-start gap-2">
            <MessageSquare className="w-4 h-4 text-white/60 shrink-0 mt-0.5" />
            <div className="overflow-hidden">
              <p className="type-micro text-zinc-200 truncate">
                {activity.name}
              </p>
              {activity.details && (
                <p className="text-xs text-zinc-400 mt-0.5 truncate">{activity.details}</p>
              )}
              {activity.state && (
                <p className="text-xs text-zinc-500 mt-0.5 truncate">{activity.state}</p>
              )}
            </div>
          </div>
        ) : (
          <div className="mt-4 py-2.5 px-3 w-full rounded-xl bg-white/[0.02] border border-white/5 text-center">
            <p className="text-xs text-zinc-500 italic">No activity current</p>
          </div>
        )}

        {/* Connect Button */}
        <a
          href={`https://discord.com/users/${user.id}`}
          target="_blank"
          rel="noreferrer"
          className="w-full mt-4 text-center type-micro bg-white/5 border border-white/10 text-zinc-200 hover:text-white hover:bg-white/10 rounded-xl py-2.5 transition-all duration-300"
        >
          Add on Discord
        </a>
      </div>
    </div>
  );
}