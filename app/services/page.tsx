"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Plus, Minus, ArrowUpRight } from 'lucide-react';
import { SERVICES } from '@/data/mockData';

// --- Local FAQ Data ---
const FAQS = [
  {
    question: "Do I need my own architect?",
    answer: "No. We offer a full end-to-end service which includes our in-house architectural team. However, we are also happy to work with plans you have already had approved."
  },
  {
    question: "How long does a typical Dual Occupancy project take?",
    answer: "Timelines vary by council, but typically: 3-5 months for design & approval, and 8-12 months for construction. We provide a detailed Gantt chart at the start of every project."
  },
  {
    question: "What is the difference between DA and CDC?",
    answer: "DA (Development Application) goes through the local Council and allows for more design flexibility. CDC (Complying Development Certificate) is a fast-track state approval process that is faster but has stricter design limitations."
  },
  {
    question: "Do you handle the subdivision process?",
    answer: "Yes. For dual occupancies and duplexes, we manage the subdivision (Torrens or Strata) as part of the final occupation certificate stage."
  }
];

// --- Animation Variants ---
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export default function ServicesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="bg-white">
      
      {/* ---------------------------------------------------------------------------
         1. HERO SECTION
      --------------------------------------------------------------------------- */}
      <section className="relative pt-40 pb-20 md:pt-52 md:pb-32 bg-slate-900 text-white overflow-hidden">
        {/* Subtle Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl"
          >
            <motion.div variants={fadeInUp}>
              <SectionLabel text="Our Expertise" dark={true} />
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold leading-[1.1] mb-8 tracking-tight">
              Comprehensive solutions <br />
              <span className="text-slate-500">
                for modern living.
              </span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-xl text-slate-400 max-w-2xl leading-relaxed">
              From feasibility studies to final handover, we provide a unified suite of development services designed to maximize value and minimize risk.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ---------------------------------------------------------------------------
         2. SERVICES GRID
      --------------------------------------------------------------------------- */}
      <section className="py-24 bg-stone-50">
        <div className="container mx-auto px-6">
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {SERVICES.map((service, idx) => (
              <motion.div 
                key={idx}
                variants={fadeInUp}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-[#E63946]/20 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col h-full"
              >
                {/* Image Area */}
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Icon Badge */}
                  <div className="absolute top-6 left-6 z-20 bg-white/90 backdrop-blur px-4 py-2 rounded-lg shadow-lg border border-white/50">
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-900">0{idx + 1}</span>
                  </div>
                  {/* Arrow Interaction */}
                  <div className="absolute top-6 right-6 z-20 w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 shadow-xl">
                    <ArrowUpRight className="w-5 h-5 text-[#E63946]" />
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-10 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-[#E63946] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 leading-relaxed mb-8 flex-grow">
                    {service.desc}
                  </p>
                  
                  {/* Action Line */}
                  <div className="pt-8 border-t border-slate-100 flex justify-between items-center">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 group-hover:text-slate-900 transition-colors">
                      Learn More
                    </span>
                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-[#E63946] transition-colors transform group-hover:translate-x-2 duration-300" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* ---------------------------------------------------------------------------
         3. FAQ SECTION
      --------------------------------------------------------------------------- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          
          <div className="text-center mb-16">
            <SectionLabel text="Common Questions" />
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Clarifying the Complex.
            </h2>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="border border-slate-200 rounded-lg overflow-hidden"
              >
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 bg-white hover:bg-slate-50 transition-colors text-left"
                >
                  <span className="font-bold text-slate-900 text-lg">{faq.question}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openFaq === idx ? 'bg-[#E63946] text-white' : 'bg-slate-100 text-slate-500'}`}>
                    {openFaq === idx ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>
                
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ---------------------------------------------------------------------------
         4. CTA SECTION
      --------------------------------------------------------------------------- */}
      <section className="py-24 bg-slate-900 relative overflow-hidden text-center">
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Unsure which service you need?
          </h2>
          <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
            Our team is happy to review your property details and recommend the best path forward for maximum ROI.
          </p>
          <Button variant="primary" href="/contact">
            Speak to a Consultant
          </Button>
        </div>
      </section>

    </div>
  );
}