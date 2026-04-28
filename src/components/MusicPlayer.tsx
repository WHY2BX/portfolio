// components/MusicPlayer.tsx
"use client";
import { useEffect, useRef, useState } from "react";
import { Pause, Play, Volume2, VolumeX } from "lucide-react";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0); // 0..100
  const [muted, setMuted] = useState(false);
   const [blocked, setBlocked] = useState(false); 
  const [volume, setVolume] = useState(1);     // 0..1

  // แผงปรับเสียงด้านขวา (overlay)
  const [showVol, setShowVol] = useState(false);
  const hideTimer = useRef<number | null>(null);
  const openVol = () => {
    if (hideTimer.current) window.clearTimeout(hideTimer.current);
    setShowVol(true);
  };
  const closeVol = () => {
    hideTimer.current = window.setTimeout(() => setShowVol(false), 120);
  };

  // --- Autoplay robust ---
  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;

    const tryPlay = () =>
      a.play()
        .then(() => {
          setIsPlaying(true);
          // เปิดเสียงหลังเริ่มเล่นแล้ว
          setTimeout(() => { a.muted = false; }, 150);
        })
        .catch(() => setBlocked(true)); // โดนบล็อก

    // ค่าตั้งต้น
    a.volume = volume;
    a.muted = true;

    if (a.readyState >= 2) {
      // โหลดพอเล่นได้แล้ว
      tryPlay();
    } else {
      const onCanPlay = () => { a.removeEventListener("canplay", onCanPlay); tryPlay(); };
      a.addEventListener("canplay", onCanPlay);
      return () => a.removeEventListener("canplay", onCanPlay);
    }
  }, []);

  const togglePlay = () => {
    const a = audioRef.current; if (!a) return;
    if (isPlaying) { a.pause(); setIsPlaying(false); }
    else {
      a.play().then(() => { setIsPlaying(true); a.muted = false; setBlocked(false); })
        .catch(() => setBlocked(true));
    }
  };

  const handleTimeUpdate = () => {
    const a = audioRef.current;
    if (a && a.duration) setProgress((a.currentTime / a.duration) * 100);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const a = audioRef.current; if (!a || !a.duration) return;
    const v = Number(e.target.value);
    a.currentTime = (v / 100) * a.duration; setProgress(v);
  };

  const handleVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = Number(e.target.value);
    const a = audioRef.current; if (a) a.volume = v;
    setVolume(v); setMuted(v === 0);
  };

  const toggleMute = () => {
    const a = audioRef.current; if (!a) return;
    a.muted = !muted; setMuted(a.muted);
  };

  const mmss = (sec: number) => {
    const s = Math.floor((progress / 100) * (sec || 0));
    const m = String(Math.floor(s / 60)).padStart(2,"0");
    const ss = String(s % 60).padStart(2,"0");
    return `${m}:${ss}`;
  };


  return (
    <>
      <audio
        ref={audioRef}
        src="/impromptu.mp3"
        preload="auto"
        onTimeUpdate={handleTimeUpdate}
      />

      {/* wrapper ความกว้าง = เฉพาะ player หลัก -> อยู่กึ่งกลางเสมอ */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <div className="relative">
          {/* PLAYER หลัก */}
          <div className="w-[560px] h-[48px] rounded-2xl bg-black/45 backdrop-blur-md border border-white/10 shadow-lg px-4 flex items-center gap-3">
            {/* ▶ / ⏸ */}
            <button
              onClick={togglePlay}
              className="w-8 h-8 rounded-full border border-white/20 grid place-items-center text-white/90 hover:scale-105 transition"
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? <Pause size={18}/> : <Play size={18}/>}
            </button>

            {/* เวลา */}
            <span className="text-xs text-gray-200 tabular-nums w-[46px]">
              {mmss(audioRef.current?.duration || 0)}
            </span>

            {/* แถบเล่น */}
            <input
              type="range"
              min={0}
              max={100}
              value={progress}
              onChange={handleSeek}
              className="
                flex-1 h-[4px] cursor-pointer accent-white
                appearance-none bg-[#5f6a7b]/40 rounded-full
                [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-[14px]
                [&::-webkit-slider-thumb]:h-[14px] [&::-webkit-slider-thumb]:rounded-full
                [&::-webkit-slider-thumb]:bg-white
              "
            />

            {/* ไอคอนลำโพง (แค่ตัว trigger) */}
            <button
              onMouseEnter={openVol}
              onFocus={openVol}
              onClick={toggleMute}
              className="text-white/90 hover:scale-105 transition"
              aria-label="Volume"
            >
              {muted || volume === 0 ? <VolumeX size={18}/> : <Volume2 size={18}/>}
            </button>
          </div>

          {/* แผงปรับเสียง "ข้าง ๆ" ทางขวา (overlay ไม่ดัน layout) */}
          <div
            onMouseEnter={openVol}
            onMouseLeave={closeVol}
            onFocus={openVol}
            onBlur={closeVol}
            className={[
              "absolute left-full ml-3 top-1/2 -translate-y-1/2",
              "w-[140px] h-[48px] rounded-2xl bg-black/45 backdrop-blur-md",
              "border border-white/10 shadow-lg px-4 flex items-center",
              "transition-all duration-200",
              showVol ? "opacity-100 translate-x-0 pointer-events-auto"
                      : "opacity-0 translate-x-2 pointer-events-none",
            ].join(" ")}
          >
            <input
              type="range"
              min={0}
              max={1}
              step={0.01}
              value={muted ? 0 : volume}
              onChange={handleVolume}
              className="
                w-[100px] h-[4px] cursor-pointer accent-white
                appearance-none bg-[#5f6a7b]/40 rounded-full
                [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-[14px]
                [&::-webkit-slider-thumb]:h-[14px] [&::-webkit-slider-thumb]:rounded-full
                [&::-webkit-slider-thumb]:bg-white
              "
            />
          </div>
        </div>
      </div>
    </>
  );
}
