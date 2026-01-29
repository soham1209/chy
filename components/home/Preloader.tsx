"use client";
import React, { useState, useEffect } from "react";

interface PreloaderProps {
  onComplete: () => void;
  isContentLoaded: boolean;
}

export const Preloader: React.FC<PreloaderProps> = ({
  onComplete,
  isContentLoaded,
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [minTimePassed, setMinTimePassed] = useState(false);

  // --- 1. Pure CSS Animations (Runs Instantly, No JS Lag) ---
  const styles = `
    @keyframes dance {
      0%, 100% { transform: translateY(0) scale(1); }
      50% { transform: translateY(-30px) scale(1.15); }
    }

    @keyframes indeterminate-bar {
      0% { transform: translateX(-100%); }
      50% { transform: translateX(0%); }
      100% { transform: translateX(100%); }
    }

    @keyframes fade-up {
      0% { opacity: 0; transform: translateY(20px); }
      100% { opacity: 1; transform: translateY(0); }
    }

    .animate-dance {
      animation: dance 1.2s ease-in-out infinite;
    }
    
    /* Stagger the letters */
    .delay-1 { animation-delay: 0s; }
    .delay-2 { animation-delay: 0.15s; }
    .delay-3 { animation-delay: 0.3s; }

    .animate-bar-loop {
      animation: indeterminate-bar 2s linear infinite;
    }

    .animate-fade-up {
      animation: fade-up 0.6s ease-out forwards;
      animation-delay: 0.5s;
      opacity: 0; /* Start invisible */
    }
  `;

  useEffect(() => {
    const timer = setTimeout(() => {
      setMinTimePassed(true);
    }, 2000); 
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Only fade out when BOTH content is loaded AND min time passed
    if (isContentLoaded && minTimePassed && !isFadingOut) {
      setIsFadingOut(true);
      setTimeout(() => {
        setIsVisible(false);
        onComplete();
      }, 600);
    }
  }, [isContentLoaded, minTimePassed, isFadingOut, onComplete]);

  if (!isVisible) return null;

  return (
    <>
      <style>{styles}</style>
      <div
        className={`fixed inset-0 z-9999 bg-slate-950 flex flex-col items-center justify-center font-sans text-white transition-opacity duration-600 ease-in-out ${
          isFadingOut ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="relative flex flex-col items-center">
          
          {/* 1. Dancing Logo Text (CSS Animation) */}
          <div className="flex items-center gap-6 mb-6">
            {["C", "H", "Y"].map((letter, i) => (
              <span
                key={i}
                className={`text-7xl md:text-9xl font-black tracking-tighter text-white inline-block origin-bottom animate-dance delay-${i + 1}`}
              >
                {letter}
              </span>
            ))}
          </div>

          {/* 2. Progress Bar (Indeterminate / Looping) */}
          {/* Using overflow-hidden to mask the moving bar */}
          <div className="w-40 h-[3px] bg-slate-800/50 rounded-full overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-full bg-[#E63946] animate-bar-loop" />
          </div>

          {/* 3. Subtitle */}
          <div className="mt-5 animate-fade-up">
            <span className="text-sm md:text-base font-bold uppercase tracking-[0.4em] text-slate-500">
              Developments
            </span>
          </div>
        </div>
      </div>
    </>
  );
};