"use client";
import React from 'react';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { TRUST_POINTS } from '@/data/mockData';
import { ShieldCheck, Users, Clock } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  "ShieldCheck": ShieldCheck,
  "Users": Users,
  "Clock": Clock
};

export const TrustSection: React.FC = () => (
  <section className="py-24 bg-white">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <SectionLabel text="Why Choose CHY" />
        <h2 className="text-4xl font-bold text-slate-900">Your Trusted Development Partner</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {TRUST_POINTS.map((item, idx) => {
          const Icon = iconMap[item.icon] || ShieldCheck;
          return (
            <div key={idx} className="flex flex-col items-center text-center p-8 group hover:bg-slate-50 rounded-lg transition-colors duration-300">
              <div className="w-24 h-24 bg-red-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-white group-hover:shadow-xl transition-all duration-500 relative">
                 <div className="absolute inset-0 rounded-full border border-red-100 opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
                 <Icon className="w-10 h-10 text-red-700 icon-draw" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">{item.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);