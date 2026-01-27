"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/#about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Investor', path: '/investor' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled || mobileOpen ? 'bg-white/95 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link href="/" className="cursor-pointer z-50 group">
            <Image 
              src="/logo.png" 
              alt="CHY Developments" 
              width={80} 
              height={40} 
              className="h-10 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <Link 
                key={item.name}
                href={item.path}
                className={`relative text-sm font-semibold uppercase tracking-wide transition-colors group ${scrolled ? 'text-slate-800' : 'text-white'}`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#E63946] transition-all group-hover:w-full ${pathname === item.path ? 'w-full' : 'w-0'}`}></span>
              </Link>
            ))}
            <Button variant={scrolled ? 'primary' : 'primary'} className="py-3 px-6 text-xs" href="/contact">
              Book Consultation
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden z-50">
            <button onClick={() => setMobileOpen(!mobileOpen)} className={scrolled || mobileOpen ? 'text-slate-900' : 'text-white'}>
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-white z-40 md:hidden animate-fadeIn">
          <div className="flex flex-col items-center justify-center h-full space-y-6 pt-20">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                onClick={() => setMobileOpen(false)}
                className={`text-2xl font-bold uppercase tracking-wider ${
                  pathname === item.path ? 'text-[#E63946]' : 'text-slate-900 hover:text-[#E63946]'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-6">
              <Button variant="primary" href="/contact" onClick={() => setMobileOpen(false)}>
                Book Consultation
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};