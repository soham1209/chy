import React from 'react';
import { SectionLabelProps } from '@/types';

export const SectionLabel: React.FC<SectionLabelProps> = ({ text, dark = false }) => (
  <div className={`flex items-center space-x-2 mb-4 ${dark ? 'text-red-400' : 'text-red-700'}`}>
    <span className={`h-[2px] w-8 ${dark ? 'bg-red-400' : 'bg-red-700'}`}></span>
    <span className="text-xs font-bold uppercase tracking-widest">{text}</span>
  </div>
);