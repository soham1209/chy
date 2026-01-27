import React from 'react';
import { SectionLabelProps } from '@/types';

export const SectionLabel: React.FC<SectionLabelProps> = ({ text, dark = false }) => (
  <div className={`flex items-center space-x-2 mb-4 ${dark ? 'text-[#E63946]' : 'text-[#E63946]'}`}>
    <span className={`h-0.5 w-8 ${dark ? 'bg-[#E63946]' : 'bg-[#E63946]'}`}></span>
    <span className="text-xs font-bold uppercase tracking-widest">{text}</span>
  </div>
);