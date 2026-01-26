"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowUpRight } from 'lucide-react';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { FOCUS_AREAS } from '@/data/mockData';

export const FocusAreas: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Header - Improved Typography */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-3xl">
            <SectionLabel text="Our Focus Areas" />
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-[1.1] tracking-tight mt-4">
              Key Development Corridors <br/>
              <span className="text-slate-400 font-medium">Shaping Sydney's Future.</span>
            </h2>
          </div>
          
          {/* Navigation Controls */}
          <div className="flex gap-3">
             <button className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all duration-300">
               <span className="text-xl leading-none pb-1">←</span>
             </button>
             <button className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all duration-300">
               <span className="text-xl leading-none pb-1">→</span>
             </button>
          </div>
        </div>

        {/* --- HORIZONTAL ACCORDION --- */}
        <div className="flex flex-col lg:flex-row h-[600px] gap-4">
          {FOCUS_AREAS.map((area, idx) => {
            const isActive = activeIdx === idx;

            return (
              <motion.div
                key={area.id}
                onMouseEnter={() => setActiveIdx(idx)}
                layout
                initial={false}
                animate={{ 
                  flex: isActive ? 3 : 1,
                }}
                transition={{ type: "spring", stiffness: 200, damping: 30 }}
                className={`relative rounded-2xl overflow-hidden cursor-pointer group transition-all duration-700 ease-out ${isActive ? 'shadow-2xl' : 'grayscale hover:grayscale-0'}`}
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                   {/* Gradient Overlay: Darker at bottom for text readability */}
                   <div className={`absolute inset-0 z-10 transition-opacity duration-500 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent ${isActive ? 'opacity-90' : 'opacity-60'}`}></div>
                   <img 
                    src={area.image} 
                    alt={area.title} 
                    className={`w-full h-full object-cover transition-transform duration-1000 ease-in-out ${isActive ? 'scale-100' : 'scale-110'}`}
                   />
                </div>

                {/* Content Container */}
                <div className="absolute inset-0 z-20 p-8 md:p-10 flex flex-col justify-end">
                  
                  {/* Top Right Arrow */}
                  <div className={`absolute top-8 right-8 w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white transition-all duration-500 ${isActive ? 'opacity-100 rotate-45' : 'opacity-0 rotate-0'}`}>
                    <ArrowUpRight className="w-5 h-5" />
                  </div>

                  {/* Main Text Content */}
                  <div className="relative">
                    {/* Location Tag */}
                    <motion.div 
                      layout="position"
                      className="flex items-center space-x-2 mb-3"
                    >
                      <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-white border border-white/10">
                        Region {area.id}
                      </span>
                    </motion.div>

                    {/* Title - Cleaner, tighter, professional */}
                    <motion.h3 
                      className={`font-bold text-white mb-2 leading-tight tracking-tight transition-all duration-500 ${isActive ? 'text-4xl md:text-5xl' : 'text-2xl md:text-3xl'}`}
                      layout="position"
                    >
                      {area.title}
                    </motion.h3>
                    
                    {/* Description & Button (Reveals on Active) */}
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ 
                        opacity: isActive ? 1 : 0,
                        height: isActive ? 'auto' : 0
                      }}
                      className="overflow-hidden"
                    >
                      <p className="text-slate-300 text-base md:text-lg font-light leading-relaxed max-w-lg mb-8 mt-4">
                        {area.desc}
                      </p>
                      
                      <button className="group/btn inline-flex items-center text-sm font-bold text-white uppercase tracking-wider hover:text-red-400 transition-colors">
                        View Opportunities
                        <span className="block h-[1px] w-8 bg-red-500 ml-4 group-hover/btn:w-12 transition-all duration-300"></span>
                      </button>
                    </motion.div>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};