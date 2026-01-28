"use client";
import React, { useState, useEffect } from "react";
import { Preloader } from "@/components/home/Preloader";

interface HomeWrapperProps {
  children: React.ReactNode;
}

export const HomeWrapper: React.FC<HomeWrapperProps> = ({ children }) => {
  const [showPreloader, setShowPreloader] = useState(true);
  const [isContentLoaded, setIsContentLoaded] = useState(false);

  useEffect(() => {
    // Check if document is already loaded
    if (document.readyState === 'complete') {
      setIsContentLoaded(true);
    } else {
      // Wait for window load event (all resources including images)
      const handleLoad = () => {
        setIsContentLoaded(true);
      };
      
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  const handlePreloaderComplete = () => {
    setShowPreloader(false);
  };

  return (
    <>
      {/* Main content always renders underneath */}
      {children}
      
      {/* Preloader overlays on top and fades out when content is loaded */}
      {showPreloader && (
        <Preloader 
          onComplete={handlePreloaderComplete} 
          isContentLoaded={isContentLoaded}
        />
      )}
    </>
  );
};
