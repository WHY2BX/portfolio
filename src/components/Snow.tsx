"use client";

import { useEffect, useRef } from "react";

type Flake = {
  x: number;
  y: number;
  r: number;
  vy: number;
  vx: number;
  phase: number;
  alpha: number;
};

/**
 * Minimal, performant snow layer rendered on a single <canvas>.
 * Non-interactive (pointer-events: none) so it never blocks the card tilt.
 */
export default function Snow({ count = 60 }: { count?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;


    let width = 0;
    let height = 0;
    let raf = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    const makeFlake = (randomY: boolean): Flake => ({
      x: Math.random() * width,
      y: randomY ? Math.random() * height : -5,
      r: Math.random() * 2 + 1,
      vy: Math.random() * 0.6 + 0.4,
      vx: Math.random() * 0.2 - 0.1,
      phase: Math.random() * Math.PI * 2,
      alpha: Math.random() * 0.4 + 0.5,
    });

    const flakes: Flake[] = Array.from({ length: count }, () => makeFlake(true));

    let last = performance.now();
    const tick = (now: number) => {
      const dt = Math.min((now - last) / 16.67, 3); // normalize to ~60fps
      last = now;

      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "#fff";
      ctx.shadowColor = "rgba(255,255,255,0.8)";
      ctx.shadowBlur = 4;

      for (let i = 0; i < flakes.length; i++) {
        const f = flakes[i];
        f.phase += 0.01 * dt;
        f.y += f.vy * dt;
        f.x += (f.vx + Math.sin(f.phase) * 0.15) * dt;

        if (f.y > height + 5) flakes[i] = makeFlake(false);
        else if (f.x > width + 5) f.x = -5;
        else if (f.x < -5) f.x = width + 5;

        ctx.globalAlpha = f.alpha;
        ctx.beginPath();
        ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    // Pause when tab hidden
    const onVisibility = () => {
      if (document.hidden) cancelAnimationFrame(raf);
      else {
        last = performance.now();
        raf = requestAnimationFrame(tick);
      }
    };

    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [count]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none z-[5]"
    />
  );
}
