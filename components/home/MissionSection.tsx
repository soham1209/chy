"use client";
import React from 'react';
import { Target, Eye, TrendingUp, CheckCircle2, Shield, Leaf, MessageSquare } from 'lucide-react';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { motion, Variants } from 'framer-motion'; // Added Variants type import

// --- Animation Variants ---

// Explicitly typed as Variants to fix the TypeScript error
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const pillVariants: Variants = {
  hover: { 
    scale: 1.05, 
    borderColor: "rgba(185, 28, 28, 0.4)",
    backgroundColor: "#fff1f2",
    transition: { duration: 0.2 } 
  }
};

export const MissionSection: React.FC = () => {
  return (
    <section className="py-24 bg-stone-50">
      <div className="container mx-auto px-6">
        
        {/* Header - Simple Fade In */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <SectionLabel text="Our DNA" />
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            Driven by Purpose, <br />
            <span className="text-slate-400">Defined by Excellence.</span>
          </h2>
        </motion.div>

        {/* Bento Grid Layout - Staggered Entry */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6"
        >
          
          {/* --- MISSION CARD (Span 7) --- */}
          <motion.div 
            variants={cardVariants}
            whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
            className="lg:col-span-7 bg-white p-10 rounded-2xl shadow-sm border border-slate-100 relative overflow-hidden group cursor-default"
          >
            {/* Decoration - Moves on hover */}
            <motion.div 
              className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-bl-full opacity-50"
              transition={{ duration: 0.5 }}
              style={{ originX: 1, originY: 0 }}
              whileHover={{ scale: 1.2, rotate: 5 }}
            />
            
            <div className="relative z-10">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center text-red-700 mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                To simplify property development through transparency, innovation, and expert guidance—delivering quality projects from concept to completion.
              </p>
              
              {/* Pills / Tags with Micro-interaction */}
              <div className="flex flex-wrap gap-3">
                {["Architect-led design & approvals", "Builder-backed execution"].map((tag, i) => (
                  <motion.span 
                    key={i}
                    variants={pillVariants}
                    whileHover="hover"
                    className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-full text-xs font-bold uppercase tracking-wider text-slate-700 cursor-default"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* --- VISION CARD (Span 5) --- */}
          <motion.div 
            variants={cardVariants}
            whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3)" }}
            className="lg:col-span-5 bg-slate-900 p-10 rounded-2xl shadow-xl text-white relative overflow-hidden group cursor-default"
          >
            {/* Decoration - Subtle rotation on hover */}
            <motion.div 
              className="absolute -bottom-10 -right-10 w-40 h-40 bg-slate-800 rounded-full opacity-50"
              whileHover={{ scale: 1.15, x: -10, y: -10 }}
              transition={{ duration: 0.6 }}
            />

            <div className="relative z-10">
              <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center text-white mb-6 border border-slate-700 group-hover:border-red-500 transition-colors duration-300">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-slate-300 text-lg leading-relaxed mb-8">
                To be Sydney’s most trusted property development partner, known for integrity, precision, and long-term value creation.
              </p>
              
              <div className="space-y-3">
                {["Investor-supported funding", "Delivery-focused management"].map((item, i) => (
                  <div key={i} className="flex items-center text-sm font-semibold text-red-400">
                    <motion.span 
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.5 }}
                      className="w-2 h-2 bg-red-500 rounded-full mr-3"
                    ></motion.span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* --- GOALS CARD (Full Width) --- */}
          <motion.div 
            variants={cardVariants}
            className="lg:col-span-12 bg-white p-10 rounded-2xl shadow-sm border border-slate-100 mt-2"
          >
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
               <div className="flex items-center gap-4 mb-4 md:mb-0">
                 <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center text-green-700">
                   <TrendingUp className="w-6 h-6" />
                 </div>
                 <h3 className="text-2xl font-bold text-slate-900">Strategic Goals</h3>
               </div>
               <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Commitment to Excellence</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: CheckCircle2, text: "Deliver seamless, end-to-end project solutions" },
                { icon: Shield, text: "Maintain the highest safety and quality standards" },
                { icon: Leaf, text: "Foster sustainable growth and client satisfaction" },
                { icon: MessageSquare, text: "Clear and accountable communication" },
              ].map((goal, idx) => {
                const Icon = goal.icon;
                return (
                  <motion.div 
                    key={idx} 
                    whileHover={{ scale: 1.02, backgroundColor: "#f8fafc" }} // slate-50
                    transition={{ duration: 0.2 }}
                    className="flex items-start p-4 rounded-lg bg-transparent border border-transparent hover:border-slate-200 transition-colors cursor-default"
                  >
                    <Icon className="w-5 h-5 text-red-600 mt-1 mr-3 shrink-0" />
                    <span className="text-sm font-medium text-slate-700 leading-snug">{goal.text}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};