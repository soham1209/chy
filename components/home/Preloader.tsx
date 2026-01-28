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

  // 1. Define custom keyframes for the scan and wipe effect
  // We put this in a style tag to ensure synchronization without complex Tailwind config
  const styles = `
    @keyframes scan-move {
      0%, 100% { top: 0%; }
      50% { top: 100%; }
    }
    
    @keyframes text-reveal {
      0%, 100% { height: 0%; }
      50% { height: 100%; }
    }

    .animate-scan-move {
      animation: scan-move 3s ease-in-out infinite;
    }
    
    .animate-text-reveal {
      animation: text-reveal 3s ease-in-out infinite;
    }
  `;

  // Minimum display time
  useEffect(() => {
    const timer = setTimeout(() => {
      setMinTimePassed(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Fade out logic
  useEffect(() => {
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
        className={`fixed inset-0 z-[9999] bg-slate-950 flex flex-col items-center justify-center font-sans text-white transition-opacity duration-600 ease-in-out ${
          isFadingOut ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="relative">
          {/* Container with Padding */}
          <div className="relative px-12 md:px-16">
            
            {/* --- Layer 1: The Blueprint Outline (Always Visible) --- */}
            {/* This stays transparent with a border at all times */}
            <h1
              className="text-6xl md:text-8xl font-black tracking-tighter text-transparent select-none text-center"
              style={{ WebkitTextStroke: "1px #475569" }}
            >
              CHY
            </h1>

            {/* --- Layer 2: The Filled Text (Revealed by Animation) --- */}
            {/* We control the HEIGHT of this container to clip the text */}
            <div className="absolute top-0 left-0 w-full animate-text-reveal overflow-hidden flex justify-center">
              {/* IMPORTANT: This h1 must match the Layer 1 h1 exactly for perfect alignment */}
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white select-none text-center">
                CHY
              </h1>
            </div>

            {/* --- Layer 3: The Scan Line --- */}
            {/* Moves up and down, perfectly synced with the height of Layer 2 */}
            <div className="absolute left-0 w-full h-1 bg-[#E63946] animate-scan-move shadow-[0_0_10px_#E63946]"></div>
            
          </div>
        </div>

        {/* Status Text */}
        <p className="mt-8 text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500 animate-pulse">
          Developments
        </p>
      </div>
    </>
  );
};