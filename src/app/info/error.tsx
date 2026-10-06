"use client";

import { useEffect } from "react";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

const InfoError = ({ error, reset }: ErrorProps) => {
  useEffect(() => {
    console.error("Info Page Error:", error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 text-center">
      <h2 className="text-xl font-bold text-rose-400">Something went wrong!</h2>
      <p className="text-xs text-white/50">{error.message || "An unexpected error occurred."}</p>
      <button
        onClick={reset}
        className="glass-button px-4 py-2 rounded-xl text-xs font-bold text-white uppercase tracking-wider cursor-pointer"
      >
        Try Again
      </button>
    </div>
  );
};

export default InfoError;