"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="cursor-pointer z-50 group">
          <h1 className={`text-2xl font-black tracking-tighter transition-colors duration-300 ${scrolled || mobileOpen || pathname !== '/' ? 'text-slate-900' : 'text-white'}`}>
            CHY<span className="text-[#E63946] inline-block group-hover:animate-bounce">.</span>
          </h1>
        </Link>

        <div className="hidden md:flex items-center space-x-10">
          {navItems.map((item) => (
            <Link 
              key={item.name}
              href={item.path}
              className={`relative text-sm font-semibold uppercase tracking-wide transition-colors group ${scrolled || pathname !== '/' ? 'text-slate-800' : 'text-white'}`}
            >
              {item.name}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#E63946] transition-all group-hover:w-full ${pathname === item.path ? 'w-full' : 'w-0'}`}></span>
            </Link>
          ))}
          <Button variant={scrolled ? 'primary' : 'primary'} className="py-3 px-6 text-xs" href="/contact">
            Book Consultation
          </Button>
        </div>

        <div className="md:hidden z-50">
          <button onClick={() => setMobileOpen(!mobileOpen)} className={scrolled || mobileOpen || pathname !== '/' ? 'text-slate-900' : 'text-white'}>
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </nav>
  );
};