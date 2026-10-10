export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] bg-gradient-to-b from-zinc-900 via-zinc-950 to-black flex items-center justify-center select-none">
      <div className="flex flex-col items-center gap-4">
        {/* Glass loading spinner */}
        <div className="w-9 h-9 border-2 border-white/10 border-t-white rounded-full animate-spin shadow-[0_0_15px_rgba(255,255,255,0.05)]" />
        <span className="type-micro font-mono text-zinc-500 animate-pulse">
          Loading Transmission
        </span>
      </div>
    </div>
  );
}