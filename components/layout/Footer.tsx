"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Instagram, Linkedin, Facebook } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        
        {/* --- 1. Brand & Description --- */}
        <div className="col-span-1">
          <Link href="/" className="mb-6 group cursor-pointer inline-block">
            <Image 
              src="/logo.png" 
              alt="CHY Developments" 
              width={100} 
              height={50} 
              className="h-12 w-auto object-contain brightness-0 invert"
            />
          </Link>
          <p className="text-sm leading-relaxed mb-8">
            CHY Developments delivers property development consultancy design, approvals, construction, and investment facilitation.
          </p>
          
          {/* Social Media Logos */}
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center hover:bg-[#E63946] hover:text-white transition-all duration-300">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="#" className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center hover:bg-[#E63946] hover:text-white transition-all duration-300">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center hover:bg-[#E63946] hover:text-white transition-all duration-300">
              <Facebook className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* --- 2. Useful Links --- */}
        <div>
          <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Our Company</h4>
          <ul className="space-y-3 text-sm">
            <li>
              <Link
                href="/projects"
                className="hover:text-[#E63946] transition-colors hover:translate-x-1 transform duration-300 inline-block w-full"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="hover:text-[#E63946] transition-colors hover:translate-x-1 transform duration-300 inline-block w-full"
              >
                Our Services
              </Link>
            </li>
            <li>
              <Link
                href="/#about"
                className="hover:text-[#E63946] transition-colors hover:translate-x-1 transform duration-300 inline-block w-full"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:text-[#E63946] transition-colors hover:translate-x-1 transform duration-300 inline-block w-full"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* --- 3. Discover Cities --- */}
        <div>
          <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Discover Cities</h4>
          <ul className="space-y-3 text-sm">
            <li>
              <span className="text-slate-400 hover:text-[#E63946] cursor-default transition-colors">
                Sydney
              </span>
            </li>
          </ul>
        </div>

        {/* --- 4. Contact Information --- */}
        <div>
          <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Contact Information</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start">
              <MapPin className="w-5 h-5 mr-3 text-[#E63946] shrink-0 mt-0.5"/> 
              <span>Sydney, NSW</span>
            </li>
            <li className="flex items-center">
              <Phone className="w-5 h-5 mr-3 text-[#E63946] shrink-0"/> 
              <span>+61 480 626 352</span>
            </li>
            <li className="flex items-center">
              <Mail className="w-5 h-5 mr-3 text-[#E63946] shrink-0"/> 
              <a href="mailto:info@chydevelopments.com" className="hover:text-white transition-colors">
                info@chydevelopments.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      
      {/* --- Bottom Bar --- */}
      <div className="container mx-auto px-6 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 mb-4 md:mb-0">
          <p>&copy; {new Date().getFullYear()} CHY Developments. All Rights Reserved.</p>
        </div>
        
        <div className="flex space-x-6">
          <Link href="#" className="hover:text-white transition-colors">Term & Condition</Link>
          <Link href="#" className="hover:text-white transition-colors">Policy & Privacy</Link>
        </div>
      </div>
    </footer>
  );
};