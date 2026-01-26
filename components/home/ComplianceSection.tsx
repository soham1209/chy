"use client";
import React from 'react';
import { FileCheck, Shield, Lock } from 'lucide-react';

export const ComplianceSection: React.FC = () => {
  return (
    <section className="bg-slate-900 py-16 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
          
          {/* Title Area */}
          <div className="md:w-1/3 text-center md:text-left">
            <h3 className="text-2xl font-bold text-white mb-2">Compliance & Transparency</h3>
            <p className="text-slate-400 text-sm">
              Our non-negotiable standard for every project.
            </p>
          </div>

          {/* Features Grid */}
          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
            
            <div className="flex items-center gap-4 bg-white/5 p-4 rounded-lg border border-white/10">
              <div className="bg-green-500/20 p-2 rounded-full text-green-400">
                <FileCheck className="w-5 h-5" />
              </div>
              <span className="text-white font-bold text-sm">100% Council Approval Rate</span>
            </div>

            <div className="flex items-center gap-4 bg-white/5 p-4 rounded-lg border border-white/10">
              <div className="bg-blue-500/20 p-2 rounded-full text-blue-400">
                <Shield className="w-5 h-5" />
              </div>
              <span className="text-white font-bold text-sm">Fully Insured Construction</span>
            </div>

            <div className="flex items-center gap-4 bg-white/5 p-4 rounded-lg border border-white/10">
              <div className="bg-amber-500/20 p-2 rounded-full text-amber-400">
                <Lock className="w-5 h-5" />
              </div>
              <span className="text-white font-bold text-sm">Fixed Price Contracts</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};