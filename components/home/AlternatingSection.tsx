"use client";
import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { AlternatingSectionProps } from '@/types';

export const AlternatingSection: React.FC<AlternatingSectionProps> = ({ title, subtitle, desc, image, reversed = false }) => (
  <div className="flex flex-col md:flex-row min-h-150 group">
    <div className={`w-full md:w-1/2 relative overflow-hidden ${reversed ? 'md:order-2' : ''}`}>
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover absolute inset-0 transition-transform duration-[2s] group-hover:scale-110" 
        loading='lazy'
        decoding='async'
      />
      <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/10 transition-colors duration-500"></div>
    </div>
    <div className={`w-full md:w-1/2 bg-stone-50 flex items-center p-10 md:p-20 ${reversed ? 'md:order-1' : ''}`}>
      <div className="max-w-lg transform transition-all duration-500 group-hover:translate-x-2">
        <SectionLabel text={subtitle} />
        <h2 className="text-4xl font-bold text-slate-900 mb-6">{title}</h2>
        <p className="text-slate-600 text-lg leading-relaxed mb-8">{desc}</p>
        {/* FIX: Pass icon as JSX */}
        <Button variant="outlineDark" icon={<ChevronRight className="w-4 h-4" />}>Discover More</Button>
      </div>
    </div>
  </div>
);