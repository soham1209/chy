"use client";
import React from 'react';
import { CheckCircle, Home, Star, Ruler, HardHat } from 'lucide-react';
import { ServiceCardProps } from '@/types';

// Map string names to components
const iconMap: Record<string, React.ElementType> = {
  "Home": Home,
  "Star": Star,
  "Ruler": Ruler,
  "HardHat": HardHat
};

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const Icon = iconMap[service.icon] || Home; // Fallback to Home if not found

  return (
    <div className="group relative bg-white border border-gray-200 p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:border-red-600/20 overflow-hidden">
      <div className="absolute top-0 left-0 w-1 h-full bg-red-600 transform -translate-x-1 transition-transform duration-300 group-hover:translate-x-0"></div>
      
      <div className="w-16 h-16 bg-slate-50 text-slate-900 flex items-center justify-center mb-6 rounded-full group-hover:bg-red-700 group-hover:text-white transition-all duration-500 group-hover:scale-110 shadow-sm">
        <Icon className="w-7 h-7 icon-draw" />
      </div>

      <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-red-700 transition-colors">{service.title}</h3>
      <p className="text-slate-600 text-sm leading-relaxed mb-6 border-b border-gray-100 pb-6">
        {service.desc}
      </p>
      
      <ul className="space-y-3">
        {service.features.map((f, i) => (
          <li key={i} className="flex items-center text-xs font-bold text-slate-500 uppercase tracking-wide group-hover:text-slate-700">
            <CheckCircle className="w-4 h-4 text-red-600 mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" style={{transitionDelay: `${i * 100}ms`}} />
            <span className="transform transition-transform group-hover:translate-x-1">{f}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};