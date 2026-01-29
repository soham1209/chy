"use client";
import React, { useState } from 'react';
import { ShieldCheck, TrendingUp, Building2, ArrowRight } from 'lucide-react';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { motion, AnimatePresence } from 'framer-motion';

// --- Custom Data for this Section ---
const TRUST_CONTENT = [
  {
    id: "01",
    title: "One-Stop Development Consultancy",
    tagline: "Architects, builders, project managers all coordinated for you.",
    description: "We manage every aspect of your project under one roof — from design to delivery — ensuring smooth coordination between architects, builders, and project managers.",
    icon: Building2,
    image: "https://images.unsplash.com/photo-1664575602276-acd073f104c1?q=80&w=2670&auto=format&fit=crop" // Meeting/Coordination
  },
  {
    id: "02",
    title: "Investor-Backed Development Model",
    tagline: "We connect investors to profitable projects through structured ROI models.",
    description: "Our structured investment approach connects trusted investors with high-potential projects, offering transparency, profitability, and sustainable returns.",
    icon: TrendingUp,
    image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?q=80&w=2672&auto=format&fit=crop" // Financial/Growth
  },
  {
    id: "03",
    title: "Transparent & Professional Management",
    tagline: "Clear reporting, stage-by-stage updates, and full accountability.",
    description: "We provide stage-by-stage progress updates, clear communication, and complete accountability to ensure your project stays on time, on budget, and on vision.",
    icon: ShieldCheck,
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2670&auto=format&fit=crop" // Documents/Trust
  }
];

export const TrustSection: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section className="py-16 md:py-12 bg-stone-50 relative overflow-hidden">
      <div className="container mx-auto px-6">
        
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* --- LEFT SIDE: Interactive List --- */}
          <div className="lg:w-1/2 relative z-10">
            <div className="mb-12">
              <SectionLabel text="Why Choose CHY" />
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                Partners in <br/>
                Precision.
              </h2>
            </div>

            <div className="space-y-4">
              {TRUST_CONTENT.map((item, idx) => {
                const isActive = activeIdx === idx;
                
                return (
                  <div 
                    key={idx}
                    onMouseEnter={() => setActiveIdx(idx)}
                    className={`group cursor-pointer p-8 rounded-xl border transition-all duration-500 relative overflow-hidden ${isActive ? 'bg-white border-[#E63946]/20 shadow-xl' : 'bg-transparent border-transparent hover:bg-white/50'}`}
                  >
                    {/* Active Left Border Indicator */}
                    <div className={`absolute top-0 left-0 h-full w-1 bg-[#E63946] transition-transform duration-300 ${isActive ? 'scale-y-100' : 'scale-y-0'}`}></div>

                    <div className="flex items-start gap-6">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-300 ${isActive ? 'bg-[#E63946]/10 text-[#E63946]' : 'bg-slate-100 text-slate-400'}`}>
                        <item.icon className="w-6 h-6" />
                      </div>
                      
                      <div className="grow">
                        <h3 className={`text-xl font-bold mb-2 transition-colors duration-300 ${isActive ? 'text-slate-900' : 'text-slate-500'}`}>
                          {item.title}
                        </h3>
                        {/* Tagline shows in the list */}
                        <p className={`text-sm leading-relaxed transition-all duration-500 ${isActive ? 'text-slate-600 opacity-100' : 'text-slate-400 opacity-60'}`}>
                          {item.tagline}
                        </p>
                      </div>

                      {/* Arrow appears on active */}
                      <ArrowRight className={`ml-auto w-5 h-5 text-[#E63946] transition-all duration-300 ${isActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* --- RIGHT SIDE: Dynamic Image & Description Display --- */}
          <div className="lg:w-1/2 relative w-full min-h-100 md:min-h-100 lg:min-h-140 rounded-2xl overflow-hidden shadow-2xl group">
            <AnimatePresence mode='wait'>
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 w-full h-full"
              >
                <img
                  src={TRUST_CONTENT[activeIdx].image}
                  alt={TRUST_CONTENT[activeIdx].title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              
                <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="absolute bottom-0 left-0 w-full p-8 md:p-12 text-white"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-[#E63946] text-white text-xs font-bold px-3 py-1 uppercase tracking-widest rounded-full">
                      Value {TRUST_CONTENT[activeIdx].id}
                    </span>
                    <div className="h-px grow bg-white/20"></div>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    {TRUST_CONTENT[activeIdx].title}
                  </h3>
                  
                  <p className="text-slate-200 text-lg leading-relaxed max-w-lg border-l-2 border-[#E63946] pl-6">
                    {TRUST_CONTENT[activeIdx].description}
                  </p>
                </motion.div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};