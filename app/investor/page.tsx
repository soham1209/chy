"use client";
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Button } from '@/components/ui/Button';
import { Check, TrendingUp, FileText, Shield, Clock, ArrowRight, Phone, Mail } from 'lucide-react';

// --- Animation Variants ---
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut" } 
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const KEY_BENEFITS = [
  "Structured ROI partnerships",
  "Detailed feasibility reports",
  "Transparent financial breakdowns",
  "Secure execution backed by licensed builders",
  "Project-based investment (6–18 months)"
];

const INVESTOR_PROCESS = [
  "Project Shortlisting",
  "Due Diligence",
  "Costing & ROI",
  "Fund Placement",
  "Execution",
  "Settlement & Profit Distribution"
];

export default function InvestorPage() {
  return (
    <div className="bg-white">
      
      {/* ---------------------------------------------------------------------------
         1. HERO SECTION
      --------------------------------------------------------------------------- */}
      <section className="relative pt-40 pb-20 md:pt-52 md:pb-32 bg-slate-900 text-white overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#c92a37] rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-slate-700/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl"
          >
            <motion.div variants={fadeInUp}>
              <SectionLabel text="Investment Opportunities" dark={true} />
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold leading-[1.1] mb-8 tracking-tight">
              Invest with <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E63946] to-[#c92a37]">
                CHY Developments.
              </span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-xl text-slate-400 max-w-2xl leading-relaxed border-l border-[#E63946] pl-6">
              Partner on project-based opportunities with structured returns, transparent reporting, and execution by licensed professionals.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ---------------------------------------------------------------------------
         2. WHY INVEST SECTION
      --------------------------------------------------------------------------- */}
      <section className="py-24 bg-stone-50">
        <div className="container mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto mb-16"
          >
          </motion.div>
          {/* Two Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* Key Benefits Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-10 rounded-xl shadow-sm border border-slate-100"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-8">Key Benefits</h3>
              <ul className="space-y-5">
                {KEY_BENEFITS.map((benefit, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="mt-0.5 mr-4 text-[#E63946]">
                      <Check className="w-5 h-5" strokeWidth={3} />
                    </div>
                    <span className="text-slate-700 font-medium">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Investor Process Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-10 rounded-xl shadow-sm border border-slate-100"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-8">Investor Process</h3>
              <ul className="space-y-5">
                {INVESTOR_PROCESS.map((step, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="mt-0.5 mr-4 text-slate-400">
                      <span className="w-2 h-2 bg-slate-400 rounded-full inline-block"></span>
                    </div>
                    <span className="text-slate-700 font-medium">{step}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

          </div>

          {/* CTA Button */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-16"
          >
            <Button variant="primary" className="bg-slate-900 hover:bg-slate-800 shadow-none" href="/contact">
              Request Investor Deck
            </Button>
          </motion.div>
        </div>
      </section>

     

      

     
      <section className="py-24 bg-[#E63946] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 animate-pulse"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Ready to Partner with Us?</h2>
          <p className="text-white/80 text-xl mb-12 max-w-2xl mx-auto">
            Join our network of investors and gain access to exclusive property development opportunities in Sydney.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
             <Button variant="secondary" href="/contact">Book a Consultation</Button>
          </div>
        </div>
      </section>

    </div>
  );
}
