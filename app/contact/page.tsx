"use client";
import React from 'react';
import { Phone, Mail } from 'lucide-react';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Button } from '@/components/ui/Button';

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24 bg-stone-50 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <SectionLabel text="Contact Us" />
            <h1 className="text-5xl font-bold text-slate-900 mb-6">Let's Discuss Your Project.</h1>
            <p className="text-slate-600 text-lg mb-12 leading-relaxed">
              Whether you have a block of land ready to go, or you're just starting your research, our team is here to provide clarity.
            </p>
            <div className="space-y-8">
              <div className="flex items-start group">
                <div className="w-12 h-12 bg-white shadow-sm flex items-center justify-center mr-6 rounded-sm text-[#E63946] shrink-0 group-hover:scale-110 transition-transform">
                  <Phone className="icon-draw" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Phone</h4>
                  <p className="text-slate-600">(02) 8000 0000</p>
                </div>
              </div>
              <div className="flex items-start group">
                <div className="w-12 h-12 bg-white shadow-sm flex items-center justify-center mr-6 rounded-sm text-[#E63946] shrink-0 group-hover:scale-110 transition-transform">
                  <Mail className="icon-draw" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Email</h4>
                  <p className="text-slate-600">hello@chydevelopments.com</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 md:p-12 shadow-2xl rounded-sm border-t-4 border-[#E63946] relative overflow-hidden">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Get in Touch</h3>
            <form className="space-y-5 relative z-10">
              <div className="grid grid-cols-2 gap-5">
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase text-slate-500">First Name</label>
                  <input className="w-full bg-slate-50 border border-slate-200 p-3 rounded-sm focus:border-[#E63946] outline-none transition-colors" />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase text-slate-500">Last Name</label>
                  <input className="w-full bg-slate-50 border border-slate-200 p-3 rounded-sm focus:border-[#E63946] outline-none transition-colors" />
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase text-slate-500">Email</label>
                <input type="email" className="w-full bg-slate-50 border border-slate-200 p-3 rounded-sm focus:border-[#E63946] outline-none transition-colors" />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase text-slate-500">Service Interest</label>
                <select className="w-full bg-slate-50 border border-slate-200 p-3 rounded-sm focus:border-[#E63946] outline-none transition-colors text-slate-700">
                  <option>Dual Occupancy / Duplex</option>
                  <option>New Build</option>
                  <option>Granny Flat</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase text-slate-500">Message</label>
                <textarea rows={4} className="w-full bg-slate-50 border border-slate-200 p-3 rounded-sm focus:border-[#E63946] outline-none transition-colors"></textarea>
              </div>
              <Button className="w-full">Send Message</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}