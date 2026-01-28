"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Button } from '@/components/ui/Button';
import { PageHero } from '@/components/layout/PageHero';
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
      <PageHero
        title="Our Services"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services' }
        ]}
      />

      {/* ---------------------------------------------------------------------------
         2. SERVICES GRID
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
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 uppercase">
              Building Excellence Across Every Development
            </motion.h2>
          </motion.div>

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
                </div>

                {/* Content Area */}
                <div className="p-10 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-[#E63946] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 leading-relaxed mb-8 flex-grow">
                    {service.desc}
                  </p>
                  
                  {/* Action Button */}
                  <div className="pt-8 border-t border-slate-100">
                    <Button
                      variant="primary"
                      icon={<ArrowRight className="w-4 h-4" />}
                      href="/contact"
                      className="w-full justify-center"
                    >
                      Book Consultation
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

     

    </div>
  );
}