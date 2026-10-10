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
      <h2 className="type-h2 text-gradient-white">Something went wrong!</h2>
      <p className="type-body-sm text-zinc-500">{error.message || "An unexpected error occurred."}</p>
      <button
        onClick={reset}
        className="btn-primary px-5 py-2.5 rounded-xl type-caption cursor-pointer"
      >
        Try Again
      </button>
    </div>
  );
};

export default InfoError;