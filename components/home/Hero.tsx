"use client";
import React, { useState, useEffect } from "react";
import { ArrowRight, Download, Home } from "lucide-react"; // Switched to Home icon to match image
import { Button } from "@/components/ui/Button";
import { motion, AnimatePresence } from "framer-motion";

// --- Configuration ---
const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2671&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2666&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2670&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2670&auto=format&fit=crop",
];

const SLIDE_DURATION = 5000; // 5 Seconds per slide

export const Hero: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen min-h-175 flex items-center overflow-hidden bg-slate-900">
      {/* --- Background Image Slider --- */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="popLayout">
          <motion.img
            key={index}
            src={HERO_IMAGES[index]}
            alt={`Hero Slide ${index + 1}`}
            // Animation: Start slightly zoomed in and transparent, fade in to normal
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="w-full h-full object-cover absolute inset-0"
          />
        </AnimatePresence>

        {/* Dark Overlay Gradient (Stays on top of images) */}
        <div className="absolute inset-0 bg-linear-to-r from-slate-900/95 via-slate-900/70 to-slate-900/20 z-10"></div>
      </div>

      {/* --- Content --- */}
      <div className="container mx-auto px-10 relative z-20 pt-20">
        <div className="max-w-4xl">
          {/* Badge - Updated to CHY DEVELOPMENTS with Home Icon */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="inline-block bg-white/10 border border-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
          >
            <span className="text-white text-xs font-bold uppercase tracking-wider flex items-center">
              <Home className="w-3 h-3 mr-2 text-white fill-current" />
              CHY Developments
            </span>
          </motion.div>

          {/* Heading - Updated to CONFIDENCE HONESTY YIELD */}
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-8">
            CONFIDENCE <br />
            HONESTY <br />
            YIELD
          </h1>

          {/* Subheading - Updated Description */}
          <p className="text-xl text-gray-300 mb-10 max-w-2xl font-light leading-relaxed">
            CHY Developments delivers end-to-end property development
            consultancy: Design, Approvals, Construction, and Investment
            Facilitation.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              variant="primary"
              icon={<ArrowRight className="w-4 h-4" />}
              href="/contact"
            >
              Book Consultation
            </Button>
            <Button variant="secondary" icon={<Download className="w-4 h-4" />}>
              Capability Statement
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
