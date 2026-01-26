"use client";
import React from 'react';
import { ArrowRight, Download, Star } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const Hero: React.FC = () => (
  <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
    {/* ... (Background Image Code stays same) ... */}
    <div className="absolute inset-0 z-0">
      <img 
        src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2671&auto=format&fit=crop" 
        alt="Modern Sydney Dual Occupancy" 
        className="w-full h-full object-cover transform scale-105 animate-float-delayed"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/70 to-slate-900/20"></div>
    </div>

    <div className="container mx-auto px-6 relative z-10 pt-20">
      <div className="max-w-4xl">
        <div className="inline-block bg-white/10 border border-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 animate-fade-in-up">
          <span className="text-white text-xs font-bold uppercase tracking-wider flex items-center">
            <Star className="w-3 h-3 mr-2 text-red-500 fill-current animate-spin-slow" />
            Premier Sydney Developers
          </span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-8">
          Unlock the Full Value <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
            Of Your Land.
          </span>
        </h1>
        <p className="text-xl text-gray-300 mb-10 max-w-2xl font-light leading-relaxed">
          Specialising in high-yield dual occupancies, luxury new builds, and seamless project delivery across Sydney.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          {/* FIX: Pass icon as JSX */}
          <Button variant="primary" icon={<ArrowRight className="w-4 h-4" />} href="/contact">
            Book Consultation
          </Button>
          {/* FIX: Pass icon as JSX */}
          <Button variant="secondary" icon={<Download className="w-4 h-4" />}>
            Capability Statement
          </Button>
        </div>
      </div>
    </div>
  </section>
);