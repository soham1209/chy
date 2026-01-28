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
              <span className="">Across Sydney.</span>
            </h2>
          </div>
        </div>

        {/* --- HORIZONTAL ACCORDION --- */}
        <div className="flex flex-col lg:flex-row h-150 gap-4">
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
                   <div className={`absolute inset-0 z-10 transition-opacity duration-500 bg-linear-to-t from-slate-950 via-slate-950/20 to-transparent ${isActive ? 'opacity-90' : 'opacity-60'}`}></div>
                   <img 
                    src={area.image} 
                    alt={area.title} 
                    className={`w-full h-full object-cover transition-transform duration-1000 ease-in-out ${isActive ? 'scale-100' : 'scale-110'}`}
                   />
                </div>

                {/* Content Container */}
                <div className="absolute inset-0 z-20 p-8 md:p-10 flex flex-col justify-end">
                  
                  {/* Main Text Content */}
                  <div className="relative">
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
                      
                      <button className="group/btn inline-flex items-center text-sm font-bold text-white uppercase tracking-wider hover:text-[#E63946] transition-colors">
                        View Opportunities
                        <span className="block h-px w-8 bg-[#E63946] ml-4 group-hover/btn:w-12 transition-all duration-300"></span>
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