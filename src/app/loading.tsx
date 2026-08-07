export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] bg-[#030014] flex items-center justify-center select-none">
      <div className="flex flex-col items-center gap-4">
        {/* Glass loading spinner */}
        <div className="w-9 h-9 border-2 border-white/10 border-t-white rounded-full animate-spin shadow-[0_0_15px_rgba(255,255,255,0.05)]" />
        <span className="text-[10px] font-mono uppercase tracking-widest text-white/40 animate-pulse">
          Loading Transmission
        </span>
      </div>
    </div>
  );
}