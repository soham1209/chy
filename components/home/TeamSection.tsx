"use client";
import React from 'react';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { ArrowUpRight } from 'lucide-react';
import { TEAM_ROLES } from '@/data/mockData';
import { motion } from 'framer-motion';

export const TeamSection: React.FC = () => {
  return (
    <section className="py-10 md:py-12 bg-stone-50">
      <div className="container mx-auto px-6">
        
        {/* Header - Centered & Minimal */}
        <div className="flex justify-center mb-12 md:mb-12">
          <div className="text-center max-w-xl">
            <div className="flex justify-center">
              <SectionLabel text="Our Experts" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-4 tracking-tight">
              Expertise Across Every Discipline.
            </h2>
          </div>
        </div>

        {/* --- CARDS --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {TEAM_ROLES.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              viewport={{ once: true }}
              className="group relative h-80 md:h-125 rounded-lg md:rounded-sm overflow-hidden cursor-pointer"
            >
              
              {/* 1. Background Image */}
              <div className="absolute inset-0 bg-slate-200">
                <img 
                  src={item.image} 
                  alt={item.role} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale-0 md:grayscale md:group-hover:grayscale-0"
                />
                {/* Dark Overlay for text readability */}
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/70 via-slate-900/20 to-transparent md:bg-slate-900/10 md:group-hover:bg-transparent transition-colors duration-500"></div>
              </div>

              {/* 3. Mobile Card Content (Always visible) */}
              <div className="absolute bottom-0 left-0 w-full p-4 md:p-6 z-20">
                {/* Mobile: Simple overlay text, Desktop: Glass panel */}
                <div className="md:bg-white/90 md:backdrop-blur-md md:border md:border-white/20 p-4 md:p-8 rounded-lg md:rounded-sm md:shadow-sm transition-all duration-500 md:group-hover:shadow-2xl md:group-hover:bg-white/95 md:group-hover:translate-y-0 md:translate-y-20">
                  
                  {/* Role Title */}
                  <div className="flex items-center justify-between mb-1 md:mb-2">
                    <h3 className="text-xl md:text-2xl font-bold text-white md:text-slate-900">{item.role}</h3>
                    <span className="text-xs font-bold text-white/70 md:text-slate-400 uppercase tracking-widest md:group-hover:text-[#E63946] transition-colors">0{idx + 1}</span>
                  </div>

                  {/* Subtitle */}
                  <p className="text-xs md:text-sm font-semibold text-[#E63946] md:text-slate-500 uppercase tracking-wider mb-0 md:mb-6">
                    {item.title}
                  </p>
                  
                  {/* Description (Hidden on mobile, slides in on desktop hover) */}
                  <div className="hidden md:block opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    <p className="text-slate-600 leading-relaxed text-sm">
                      {item.desc}
                    </p>
                  </div>

                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};