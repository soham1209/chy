import React from 'react';
import { ProcessStepProps } from '@/types';

export const ProcessStep: React.FC<ProcessStepProps> = ({ number, title, text }) => (
  <div className="relative group p-6 border-l border-slate-700 hover:border-[#E63946] transition-colors duration-500">
    <div className="absolute -left-2.25 top-6 w-4 h-4 rounded-full bg-slate-900 border-2 border-slate-700 group-hover:border-[#E63946] group-hover:bg-[#E63946] transition-all duration-500"></div>
    <span className="text-5xl font-black text-slate-800 absolute -top-4 right-4 opacity-50 group-hover:text-slate-700 group-hover:scale-110 transition-all duration-500 select-none">
      0{number}
    </span>
    <div className="relative z-10 pt-4">
      <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#E63946] transition-colors duration-300">{title}</h3>
      <p className="text-sm text-slate-400 leading-relaxed group-hover:text-slate-300">{text}</p>
    </div>
  </div>
);