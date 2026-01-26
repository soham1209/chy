import React from 'react';
import Link from 'next/link';
import { Phone, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-1 md:col-span-1">
          <Link href="/" className="text-3xl font-bold text-white mb-6 group cursor-pointer inline-block">
            CHY<span className="text-red-600 group-hover:text-red-500 transition-colors">.</span>
          </Link>
          <p className="text-sm leading-relaxed mb-6">
            Premium residential developers serving the greater Sydney region.
          </p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-wider">Services</h4>
          <ul className="space-y-3 text-sm">
            {['Dual Occupancy', 'New Builds', 'Granny Flats'].map(i => (
              <li key={i} className="hover:text-red-500 cursor-pointer transition-colors hover:translate-x-1 transform duration-300 inline-block w-full">{i}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-wider">Company</h4>
          <ul className="space-y-3 text-sm">
            {['About Us', 'Our Process', 'Projects'].map(i => (
              <li key={i} className="hover:text-red-500 cursor-pointer transition-colors hover:translate-x-1 transform duration-300 inline-block w-full">{i}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-wider">Contact</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-center"><Phone className="w-4 h-4 mr-3 text-red-600"/> (02) 8000 0000</li>
            <li className="flex items-center"><Mail className="w-4 h-4 mr-3 text-red-600"/> hello@chydevelopments.com</li>
          </ul>
        </div>
      </div>
      
      <div className="container mx-auto px-6 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center text-xs">
        <p className="flex items-center flex-wrap justify-center md:justify-start">
          &copy; {new Date().getFullYear()} CHY Developments. All rights reserved.
          <span className="hidden md:inline mx-2 text-slate-700">|</span>
          <span className="text-slate-600 hover:text-slate-400 transition-colors cursor-default mt-2 md:mt-0 ml-0 md:ml-0">Designed by Soham</span>
        </p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <span className="hover:text-white cursor-pointer">Privacy</span>
          <span className="hover:text-white cursor-pointer">Terms</span>
        </div>
      </div>
    </footer>
  );
};