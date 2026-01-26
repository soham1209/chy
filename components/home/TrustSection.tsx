"use client";
import React, { useState } from 'react';
import { ShieldCheck, Users, Clock, ArrowRight } from 'lucide-react';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { motion, AnimatePresence } from 'framer-motion';
import { TRUST_POINTS } from '@/data/mockData';

// Images specific to this section
const IMAGES = [
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2670&auto=format&fit=crop", // Documents/Transparency
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2670&auto=format&fit=crop", // Team/Meeting
  "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?q=80&w=2671&auto=format&fit=crop", // Construction/Timely
];

const iconMap: Record<string, React.ElementType> = {
  "ShieldCheck": ShieldCheck,
  "Users": Users,
  "Clock": Clock
};

export const TrustSection: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section className="py-24 bg-stone-50 relative overflow-hidden">
      <div className="container mx-auto px-6">
        
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* --- LEFT SIDE: Interactive List --- */}
          <div className="lg:w-1/2 relative z-10">
            <div className="mb-12">
              <SectionLabel text="Why Choose CHY" />
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                Partners in <br/>
                <span className="text-red-700">Precision.</span>
              </h2>
            </div>

            <div className="space-y-4">
              {TRUST_POINTS.map((item, idx) => {
                const isActive = activeIdx === idx;
                const Icon = iconMap[item.icon] || ShieldCheck;

                return (
                  <div 
                    key={idx}
                    onMouseEnter={() => setActiveIdx(idx)}
                    className={`group cursor-pointer p-8 rounded-xl border transition-all duration-500 relative overflow-hidden ${isActive ? 'bg-white border-red-100 shadow-xl' : 'bg-transparent border-transparent hover:bg-white/50'}`}
                  >
                    {/* Active Left Border Indicator */}
                    <div className={`absolute top-0 left-0 h-full w-1 bg-red-600 transition-transform duration-300 ${isActive ? 'scale-y-100' : 'scale-y-0'}`}></div>

                    <div className="flex items-start gap-6">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-300 ${isActive ? 'bg-red-50 text-red-700' : 'bg-slate-100 text-slate-400'}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      
                      <div>
                        <h3 className={`text-xl font-bold mb-2 transition-colors duration-300 ${isActive ? 'text-slate-900' : 'text-slate-500'}`}>
                          {item.title}
                        </h3>
                        <p className={`text-sm leading-relaxed transition-all duration-500 ${isActive ? 'text-slate-600 opacity-100 max-h-20' : 'text-slate-400 opacity-0 max-h-0 hidden md:block'}`}>
                          {item.text}
                        </p>
                      </div>

                      {/* Arrow appears on active */}
                      <ArrowRight className={`ml-auto w-5 h-5 text-red-600 transition-all duration-300 ${isActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* --- RIGHT SIDE: Dynamic Image Display --- */}
          <div className="lg:w-1/2 relative h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl">
            <AnimatePresence mode='wait'>
              <motion.img
                key={activeIdx}
                src={IMAGES[activeIdx]}
                alt="Trust visual"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
            
            {/* Floating Badge */}
            <div className="absolute bottom-8 left-8 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-lg text-white max-w-xs">
              <div className="text-3xl font-bold mb-1">0{activeIdx + 1}</div>
              <div className="text-xs font-bold uppercase tracking-wider opacity-80">Core Value</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};