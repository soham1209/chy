"use client";
import React from 'react';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { ArrowUpRight } from 'lucide-react';
import { TEAM_ROLES } from '@/data/mockData';
import { motion } from 'framer-motion';

export const TeamSection: React.FC = () => {
  return (
    <section className="py-28 bg-stone-50">
      <div className="container mx-auto px-6">
        
        {/* Header - Centered & Minimal */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8 border-b border-slate-200 pb-8">
          <div className="max-w-xl">
            <SectionLabel text="Our Experts" />
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4 tracking-tight">
              Expertise Across <br/> Every Discipline.
            </h2>
          </div>
          
        </div>

        {/* --- GLASSMORPHISM CARDS --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TEAM_ROLES.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="group relative h-125 rounded-sm overflow-hidden cursor-pointer"
            >
              
              {/* 1. Background Image */}
              <div className="absolute inset-0 bg-slate-200">
                <img 
                  src={item.image} 
                  alt={item.role} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                />
                {/* Dark Overlay for text readability (fades out on hover) */}
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>

              {/* 2. Top Arrow Icon (Replaces the "Meet the team" text) */}
              <div className="absolute top-6 right-6 z-20 w-12 h-12 bg-white rounded-full flex items-center justify-center opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100 shadow-xl">
                <ArrowUpRight className="w-5 h-5 text-slate-900" />
              </div>

              {/* 3. Glass Panel Overlay */}
              <div className="absolute bottom-0 left-0 w-full p-6 z-20">
                {/* The Blur Container */}
                <div className="bg-white/90 backdrop-blur-md border border-white/20 p-8 rounded-sm shadow-sm transition-all duration-500 group-hover:shadow-2xl group-hover:bg-white/95 group-hover:translate-y-0 translate-y-20">
                  
                  {/* Role Title */}
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-bold text-slate-900">{item.role}</h3>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest group-hover:text-[#E63946] transition-colors">0{idx + 1}</span>
                  </div>

                  {/* Subtitle */}
                  <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-6">
                    {item.title}
                  </p>
                  
                  {/* Description (Hidden initially, slides into view) */}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
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