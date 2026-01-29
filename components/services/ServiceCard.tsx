"use client";
import React from 'react';
import { Check, ArrowRight, Home, Ruler, HardHat, ClipboardList, TrendingUp, Key, Building2 } from 'lucide-react';
import { ServiceCardProps } from '@/types';

const iconMap: Record<string, React.ElementType> = {
  "ClipboardList": ClipboardList,
  "Ruler": Ruler,
  "HardHat": HardHat,
  "TrendingUp": TrendingUp,
  "Key": Key,
  "Building2": Building2,
  "Home": Home
};

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const Icon = iconMap[service.icon] || Home;

  return (
    <div className="group h-full min-h-110 bg-white border border-slate-200 p-8 rounded-xl relative overflow-hidden cursor-pointer flex flex-col justify-between hover:shadow-2xl hover:-translate-y-1 hover:border-[#E63946]/20 transition-all duration-500">
      {/* Background Image Reveal */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-slate-900/95 z-10 transition-opacity duration-500 group-hover:opacity-95 opacity-0"></div>
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-0 group-hover:opacity-100"
          loading='lazy'
          decoding='async'
        />
      </div>

      {/* Content Container */}
      <div className="relative z-20 flex flex-col h-full">
        <div className="mb-6">
          <div className="w-14 h-14 bg-slate-100 rounded-lg flex items-center justify-center text-slate-900 mb-6 transition-colors duration-300 group-hover:bg-[#E63946] group-hover:text-white shadow-sm">
            <Icon className="w-8 h-8" strokeWidth={1.5} />
          </div>

          <h3 className="text-2xl font-bold text-slate-900 mb-3 transition-colors duration-300 group-hover:text-white leading-tight min-h-16 flex items-end pb-1">
            {service.title}
          </h3>

          <p className="text-slate-600 text-sm leading-relaxed transition-colors duration-300 group-hover:text-slate-300 line-clamp-3 min-h-18">
            {service.desc}
          </p>
        </div>

        {/* Bullet Highlights */}
        <div className="mb-auto min-h-24">
          <div className="h-px w-full bg-slate-100 mb-4 group-hover:bg-white/10 transition-colors"></div>
          <ul className="space-y-3">
            {(service.features || []).slice(0, 3).map((feat: string, idx: number) => (
              <li
                key={idx}
                className="flex items-start text-xs font-bold uppercase tracking-wide text-slate-500 group-hover:text-slate-200 transition-colors"
              >
                <Check className="w-4 h-4 text-[#E63946] mr-2 shrink-0 group-hover:text-[#c92a37]" />
                {feat}
              </li>
            ))}
          </ul>
        </div>

        {/* Book Link */}
        <div className="pt-6 mt-6 border-t border-slate-100 group-hover:border-white/10 transition-colors">
          <span className="flex items-center text-sm font-bold uppercase tracking-wider text-[#E63946] group-hover:text-white transition-colors">
            Book Consultation
            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-2" />
          </span>
        </div>
      </div>

      {/* Decorative Bottom Line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-[#E63946] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-30"></div>
    </div>
  );
};