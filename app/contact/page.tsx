"use client";
import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Button } from '@/components/ui/Button';

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24 bg-stone-50 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Side - Contact Info */}
          <div>
            <SectionLabel text="Contact Us" />
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 uppercase tracking-wide">Connect With Us</h1>
            <p className="text-slate-600 text-lg mb-12 leading-relaxed">
              Get in touch to start your next project with CHY Developments.
            </p>
            <div className="space-y-8">
              <div className="flex items-start group">
                <div className="w-12 h-12 bg-white shadow-sm flex items-center justify-center mr-6 rounded-full border border-slate-100 text-[#E63946] shrink-0 group-hover:scale-110 transition-transform">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-slate-500 text-sm mb-1">Address</h4>
                  <p className="text-slate-900 font-semibold">Sydney, NSW</p>
                </div>
              </div>
              <div className="flex items-start group">
                <div className="w-12 h-12 bg-white shadow-sm flex items-center justify-center mr-6 rounded-full border border-slate-100 text-[#E63946] shrink-0 group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-slate-500 text-sm mb-1">Phone</h4>
                  <p className="text-slate-900 font-semibold">+61 480 626 352</p>
                </div>
              </div>
              <div className="flex items-start group">
                <div className="w-12 h-12 bg-white shadow-sm flex items-center justify-center mr-6 rounded-full border border-slate-100 text-[#E63946] shrink-0 group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-slate-500 text-sm mb-1">Email</h4>
                  <p className="text-slate-900 font-semibold">info@chydevelopments.com</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Side - Contact Form */}
          <div className="bg-white p-8 md:p-12 shadow-lg rounded-lg relative overflow-hidden">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Contact Us</h3>
            <p className="text-slate-600 mb-8">
              We'd love to hear from you! Please fill out the form and we'll get back to you as soon as possible.
            </p>
            <form className="space-y-5 relative z-10">
              <div className="grid grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-800">First Name</label>
                  <input className="w-full bg-slate-50 border border-slate-200 p-3 rounded-md focus:border-[#E63946] outline-none transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-800">Last Name</label>
                  <input className="w-full bg-slate-50 border border-slate-200 p-3 rounded-md focus:border-[#E63946] outline-none transition-colors" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-800">Email<span className="text-[#E63946]">*</span></label>
                <input type="email" required className="w-full bg-slate-50 border border-slate-200 p-3 rounded-md focus:border-[#E63946] outline-none transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-800">Phone Number</label>
                <div className="flex">
                  <select className="bg-slate-50 border border-slate-200 border-r-0 p-3 rounded-l-md focus:border-[#E63946] outline-none transition-colors text-slate-700 w-24">
                    <option>AU +61</option>
                    <option>IN +91</option>
                    <option>US +1</option>
                    <option>UK +44</option>
                  </select>
                  <input type="tel" className="w-full bg-slate-50 border border-slate-200 p-3 rounded-r-md focus:border-[#E63946] outline-none transition-colors" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-800">Message</label>
                <textarea rows={4} className="w-full bg-slate-50 border border-slate-200 p-3 rounded-md focus:border-[#E63946] outline-none transition-colors resize-y"></textarea>
              </div>
              <Button className="w-full">Send Message</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}