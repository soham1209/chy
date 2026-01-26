"use client";
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  ClipboardList, 
  Ruler, 
  HardHat, 
  TrendingUp, 
  Key, 
  Building2, 
  ArrowRight 
} from 'lucide-react';
import { SERVICES } from '@/data/mockData';
import { Button } from '@/components/ui/Button';

// Icon Map
const iconMap: Record<string, React.ElementType> = {
  "ClipboardList": ClipboardList,
  "Ruler": Ruler,
  "HardHat": HardHat,
  "TrendingUp": TrendingUp,
  "Key": Key,
  "Building2": Building2
};

export const ServicesSlider: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Scroll handler for pagination buttons (Optional, or we can just let user swipe)
  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -400 : 400;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative group">
      {/* Scrollable Container */}
      <div 
        ref={scrollRef}
        className="flex overflow-x-auto gap-8 pb-12 pt-4 px-4 -mx-4 snap-x snap-mandatory hide-scrollbar"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {SERVICES.map((service, i) => {
          const Icon = iconMap[service.icon] || Building2;
          
          return (
            <motion.div 
              key={i}
              className="snap-center shrink-0 w-[350px] md:w-[400px] h-[500px] bg-white border border-slate-200 p-8 rounded-xl relative overflow-hidden group/card cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              {/* --- 1. Background Image (Hidden by default, reveals on hover) --- */}
              <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-slate-900/90 z-10 transition-opacity duration-500 group-hover/card:opacity-90 opacity-0"></div>
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110 opacity-0 group-hover/card:opacity-100"
                />
              </div>

              {/* --- 2. Content --- */}
              <div className="relative z-20 h-full flex flex-col justify-between">
                <div>
                  {/* Icon Circle */}
                  <div className="w-14 h-14 bg-slate-50 rounded-lg flex items-center justify-center text-slate-900 mb-8 transition-colors duration-300 group-hover/card:bg-red-600 group-hover/card:text-white shadow-sm">
                    <Icon className="w-7 h-7" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 transition-colors duration-300 group-hover/card:text-white">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-slate-600 leading-relaxed transition-colors duration-300 group-hover/card:text-slate-300">
                    {service.desc}
                  </p>
                </div>

                {/* Button Area */}
                <div className="pt-8 border-t border-slate-100 group-hover/card:border-slate-700 transition-colors duration-300">
                  <span className="flex items-center text-sm font-bold uppercase tracking-wider text-red-700 group-hover/card:text-white transition-colors">
                    Book Consultation 
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/card:translate-x-2" />
                  </span>
                </div>
              </div>

              {/* Decorative Red Line Bottom */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-red-600 transform scale-x-0 group-hover/card:scale-x-100 transition-transform duration-500 origin-left z-30"></div>
            </motion.div>
          );
        })}
      </div>

      {/* Navigation Indicators (Visual Only) */}
      <div className="flex justify-center gap-2 mt-8">
        {SERVICES.map((_, i) => (
            <div key={i} className="w-2 h-2 rounded-full bg-slate-200"></div>
        ))}
      </div>
      
      <p className="text-center text-xs text-slate-400 mt-2 uppercase tracking-widest">Swipe or scroll to explore</p>
    </div>
  );
};