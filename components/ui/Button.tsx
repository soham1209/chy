"use client";
import React from 'react';
import Link from 'next/link';
import { ButtonProps } from '@/types';

export const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', className = '', onClick, icon, href }) => {
  const base = "inline-flex items-center justify-center px-8 py-4 text-sm font-bold uppercase tracking-wider transition-all duration-300 rounded-sm group btn-shimmer cursor-pointer";
  
  const colors = {
    primary: "bg-[#E63946] text-white hover:bg-[#c92a37] hover:-translate-y-1",
    secondary: "bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900 hover:-translate-y-1",
    outlineDark: "bg-transparent border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white hover:-translate-y-1",
    ghost: "bg-transparent text-slate-900 hover:text-[#E63946] underline-offset-4 hover:underline p-0",
  };

  const content = (
    <>
      {children}
      {/* We now render the icon node directly */}
      {icon && <span className="ml-2 transition-transform group-hover:translate-x-1">{icon}</span>}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={`${base} ${colors[variant]} ${className}`}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={`${base} ${colors[variant]} ${className}`}>
      {content}
    </button>
  );
};