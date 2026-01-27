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
            <motion.div variants={fadeInUp}>
              <SectionLabel text="Why Partner With Us" />
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-slate-900 uppercase tracking-wide">
              Why Invest With CHY Developments?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-slate-600 text-lg mt-6">
              Partner on project-based opportunities with structured returns, transparent reporting, and execution by licensed professionals.
            </motion.p>
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

      {/* ---------------------------------------------------------------------------
         3. INVESTMENT FEATURES
      --------------------------------------------------------------------------- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <SectionLabel text="Investment Model" />
            <h2 className="text-4xl font-bold text-slate-900 mb-6">How We Structure Returns</h2>
            <p className="text-slate-500">
              Our investment model is built on transparency, security, and performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                title: "Structured ROI",
                desc: "Clear return expectations with project-based timelines ranging from 6 to 18 months."
              },
              {
                icon: FileText,
                title: "Full Transparency",
                desc: "Detailed feasibility reports and financial breakdowns at every stage of the project."
              },
              {
                icon: Shield,
                title: "Secure Execution",
                desc: "All projects are backed by licensed builders and managed by experienced professionals."
              }
            ].map((card, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2, duration: 0.5 }}
                className="bg-stone-50 p-10 border-t-4 border-slate-200 hover:border-[#E63946] shadow-sm hover:shadow-2xl transition-all duration-300 group rounded-lg"
              >
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-slate-400 group-hover:bg-[#E63946]/10 group-hover:text-[#E63946] mb-6 transition-colors shadow-sm">
                  <card.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{card.title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------------------
         4. CONTACT SECTION
      --------------------------------------------------------------------------- */}
      <section className="py-24 bg-stone-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
            
            {/* Left Side - Info */}
            <div>
              <SectionLabel text="Get In Touch" />
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Start Your Investment Journey.</h2>
              <p className="text-slate-600 text-lg mb-12 leading-relaxed">
                Whether you're an experienced property investor or exploring your first opportunity, our team is here to provide clarity and guidance.
              </p>
              <div className="space-y-8">
                <div className="flex items-start group">
                  <div className="w-12 h-12 bg-white shadow-sm flex items-center justify-center mr-6 rounded-sm text-[#E63946] shrink-0 group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Phone</h4>
                    <p className="text-slate-600">+61 480 626 352</p>
                  </div>
                </div>
                <div className="flex items-start group">
                  <div className="w-12 h-12 bg-white shadow-sm flex items-center justify-center mr-6 rounded-sm text-[#E63946] shrink-0 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Email</h4>
                    <p className="text-slate-600">info@chydevelopments.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Side - Form */}
            <div className="bg-white p-8 md:p-12 shadow-2xl rounded-sm border-t-4 border-[#E63946] relative overflow-hidden">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Request Investor Information</h3>
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
                  <label className="text-xs font-bold uppercase text-slate-500">Phone</label>
                  <input type="tel" className="w-full bg-slate-50 border border-slate-200 p-3 rounded-sm focus:border-[#E63946] outline-none transition-colors" />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase text-slate-500">Investment Interest</label>
                  <select className="w-full bg-slate-50 border border-slate-200 p-3 rounded-sm focus:border-[#E63946] outline-none transition-colors text-slate-700">
                    <option>Dual Occupancy / Duplex</option>
                    <option>Townhouse Development</option>
                    <option>Multi-Unit Development</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase text-slate-500">Message</label>
                  <textarea rows={4} className="w-full bg-slate-50 border border-slate-200 p-3 rounded-sm focus:border-[#E63946] outline-none transition-colors" placeholder="Tell us about your investment goals..."></textarea>
                </div>
                <Button className="w-full">Request Investor Deck</Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------------------
         5. CTA SECTION
      --------------------------------------------------------------------------- */}
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
