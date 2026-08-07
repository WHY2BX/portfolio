"use client";

import { useEffect, useRef, useState } from "react";
import { Pause, Play, Volume2, VolumeX } from "lucide-react";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0); // 0..100
  const [muted, setMuted] = useState(false);
  const [volume, setVolume] = useState(0.8);     // 0..1

  // Right volume panel overlay
  const [showVol, setShowVol] = useState(false);
  const hideTimer = useRef<number | null>(null);

  const openVol = () => {
    if (hideTimer.current) window.clearTimeout(hideTimer.current);
    setShowVol(true);
  };

  const closeVol = () => {
    hideTimer.current = window.setTimeout(() => setShowVol(false), 200);
  };

  // Autoplay handler
  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;

    const tryPlay = () =>
      a.play()
        .then(() => {
          setIsPlaying(true);
          setTimeout(() => { a.muted = false; }, 150);
        })
        .catch((err) => console.log("Autoplay blocked:", err));

    a.volume = volume;
    a.muted = true;

    if (a.readyState >= 2) {
      tryPlay();
    } else {
      const onCanPlay = () => {
        a.removeEventListener("canplay", onCanPlay);
        tryPlay();
      };
      a.addEventListener("canplay", onCanPlay);
      return () => a.removeEventListener("canplay", onCanPlay);
    }
  }, []);

  const togglePlay = () => {
    const a = audioRef.current;
    if (!a) return;
    if (isPlaying) {
      a.pause();
      setIsPlaying(false);
    } else {
      a.play()
        .then(() => {
          setIsPlaying(true);
          a.muted = false;
        })
        .catch((err) => console.log("Play failed:", err));
    }
  };

  const handleTimeUpdate = () => {
    const a = audioRef.current;
    if (a && a.duration) {
      setProgress((a.currentTime / a.duration) * 100);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const a = audioRef.current;
    if (!a || !a.duration) return;
    const v = Number(e.target.value);
    a.currentTime = (v / 100) * a.duration;
    setProgress(v);
  };

  const handleVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = Number(e.target.value);
    const a = audioRef.current;
    if (a) a.volume = v;
    setVolume(v);
    setMuted(v === 0);
  };

  const toggleMute = () => {
    const a = audioRef.current;
    if (!a) return;
    a.muted = !muted;
    setMuted(a.muted);
  };

  const mmss = (sec: number) => {
    const s = Math.floor((progress / 100) * (sec || 0));
    const m = String(Math.floor(s / 60)).padStart(2, "0");
    const ss = String(s % 60).padStart(2, "0");
    return `${m}:${ss}`;
  };

  return (
    <>
      <style>{`
        @keyframes music-bar {
          0% { height: 3px; }
          100% { height: 16px; }
        }
      `}</style>
      
      <audio
        ref={audioRef}
        src="/impromptu.mp3"
        preload="auto"
        onTimeUpdate={handleTimeUpdate}
      />

      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <div className="relative">
          {/* MAIN PLAYER */}
          <div className="w-[520px] h-[52px] rounded-2xl glass-panel shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] px-4 flex items-center gap-4 transition-all duration-300">
            {/* Play/Pause Button */}
            <button
              onClick={togglePlay}
              className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/12 border border-white/10 grid place-items-center text-white/90 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? <Pause size={15} className="fill-white" /> : <Play size={15} className="fill-white translate-x-[1px]" />}
            </button>

            {/* Visualizer Bars */}
            <div className="flex items-end gap-[3px] h-4 w-6 px-1 justify-center">
              <span
                className={`w-[2px] rounded-full bg-white transition-all duration-300 ${
                  isPlaying ? "animate-[music-bar_0.8s_infinite_ease-in-out_alternate]" : "h-1"
                }`}
              />
              <span
                className={`w-[2px] rounded-full bg-white/70 transition-all duration-300 ${
                  isPlaying ? "animate-[music-bar_0.6s_infinite_ease-in-out_alternate_0.2s]" : "h-2"
                }`}
                style={{ animationDelay: "0.2s" }}
              />
              <span
                className={`w-[2px] rounded-full bg-white/40 transition-all duration-300 ${
                  isPlaying ? "animate-[music-bar_0.9s_infinite_ease-in-out_alternate_0.1s]" : "h-1.5"
                }`}
                style={{ animationDelay: "0.1s" }}
              />
              <span
                className={`w-[2px] rounded-full bg-white/60 transition-all duration-300 ${
                  isPlaying ? "animate-[music-bar_0.7s_infinite_ease-in-out_alternate_0.3s]" : "h-2.5"
                }`}
                style={{ animationDelay: "0.3s" }}
              />
            </div>

            {/* Time Stamp */}
            <span className="text-[10px] font-mono text-white/50 tracking-wider w-[36px]">
              {mmss(audioRef.current?.duration || 0)}
            </span>

            {/* Seek Bar */}
            <input
              type="range"
              min={0}
              max={100}
              value={progress}
              onChange={handleSeek}
              className="
                flex-1 h-[3px] cursor-pointer accent-white
                appearance-none bg-white/10 hover:bg-white/15 rounded-full transition-colors duration-300
                [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-[10px]
                [&::-webkit-slider-thumb]:h-[10px] [&::-webkit-slider-thumb]:rounded-full
                [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow-[0_0_10px_white]
              "
            />

            {/* Volume Trigger Icon */}
            <button
              onMouseEnter={openVol}
              onFocus={openVol}
              onClick={toggleMute}
              className="text-white/70 hover:text-white hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
              aria-label="Volume"
            >
              {muted || volume === 0 ? <VolumeX size={17} /> : <Volume2 size={17} />}
            </button>
          </div>

          {/* SIDE VOLUME CONTROL */}
          <div
            onMouseEnter={openVol}
            onMouseLeave={closeVol}
            onFocus={openVol}
            onBlur={closeVol}
            className={[
              "absolute left-full ml-3 top-1/2 -translate-y-1/2",
              "w-[130px] h-[52px] rounded-2xl glass-panel shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] px-4 flex items-center justify-center",
              "transition-all duration-300 ease-out",
              showVol ? "opacity-100 translate-x-0 pointer-events-auto" : "opacity-0 translate-x-2 pointer-events-none",
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
                w-full h-[3px] cursor-pointer accent-white
                appearance-none bg-white/10 rounded-full
                [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-[10px]
                [&::-webkit-slider-thumb]:h-[10px] [&::-webkit-slider-thumb]:rounded-full
                [&::-webkit-slider-thumb]:bg-white
              "
            />
          </div>
        </div>
      </div>
    </>
  );
}
