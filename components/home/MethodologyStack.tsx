"use client";
import React, { useState } from 'react';
import { Search, PenTool, FileCheck, Hammer, Key } from 'lucide-react';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { motion } from 'framer-motion';

const STEPS = [
  {
    id: 1,
    title: "Discovery & Feasibility",
    desc: "We start with a deep dive into your site's potential. Our analysts review zoning, council regulations, and market data to ensure your project is financially viable.",
    icon: Search,
    color: "bg-stone-50", 
    textColor: "text-slate-900",
    numberColor: "text-slate-300",
    borderColor: "border-white"
  },
  {
    id: 2,
    title: "Architectural Design",
    desc: "Our in-house architects craft bespoke designs that balance aesthetic appeal with construction practicality, maximizing yield while adhering to controls.",
    icon: PenTool,
    color: "bg-white",
    textColor: "text-slate-900",
    numberColor: "text-slate-200",
    borderColor: "border-slate-200"
  },
  {
    id: 3,
    title: "Approvals (DA/CDC)",
    desc: "We handle the bureaucracy. Whether it's a Council DA or a Fast-Track CDC, we manage the paperwork and engineering to get you the green light.",
    icon: FileCheck,
    color: "bg-slate-800",
    textColor: "text-white",
    numberColor: "text-slate-600",
    borderColor: "border-slate-700"
  },
  {
    id: 4,
    title: "Premium Construction",
    desc: "Construction without the headaches. Our project managers oversee the build quality, timeline, and budget, ensuring the design is executed to the millimeter.",
    icon: Hammer,
    color: "bg-[#E63946]",
    textColor: "text-white",
    numberColor: "text-[#c92a37]",
    borderColor: "border-[#E63946]"
  },
  {
    id: 5,
    title: "Handover & Warranty",
    desc: "The moment of truth. We conduct a final defect check, obtain the Occupation Certificate, and provide a statutory warranty for your peace of mind.",
    icon: Key,
    color: "bg-slate-950",
    textColor: "text-slate-400",
    numberColor: "text-slate-800",
    borderColor: "border-slate-800"
  }
];

// Helper Component to handle detection logic
const StackCard = ({ step, index, setActiveStep }: { step: any, index: number, setActiveStep: (i: number) => void }) => {
  return (
    <motion.div 
      className="sticky"
      style={{ top: `${index * 40 + 100}px` }}
      // Logic: When I enter view (scroll down), I am active. 
      // When I leave view (scroll up and slide down), the guy before me is active.
      onViewportEnter={() => setActiveStep(index)}
      onViewportLeave={() => {
        if (index > 0) setActiveStep(index - 1);
      }}
      // Viewport settings: 'amount: 0.1' means trigger as soon as 10% of the card is visible from the bottom
      viewport={{ amount: 0.2, margin: "0px 0px -100px 0px" }}
    >
      <div className={`relative p-10 md:p-12 rounded-2xl shadow-2xl border ${step.borderColor} overflow-hidden min-h-80 flex flex-col justify-center ${step.color} ${step.textColor} hover:-translate-y-2 transition-transform duration-300`}>
        
        {/* Large Background Number */}
        <span 
          className={`absolute top-4 right-6 text-8xl font-black opacity-30 select-none ${step.numberColor}`}
          style={{ 
            WebkitTextStroke: '1px currentColor', 
            fill: 'transparent' 
          }}
        >
          0{step.id}
        </span>

        <div className="flex flex-col md:flex-row items-start gap-8 relative z-10">
          {/* Icon Box */}
          <div className={`w-16 h-16 rounded-xl flex items-center justify-center shrink-0 border shadow-lg ${step.textColor === 'text-white' ? 'border-white/20 bg-white/10 text-white' : 'border-slate-200 bg-white text-slate-900'}`}>
            <step.icon className="w-8 h-8" />
          </div>
          
          <div className="pt-2">
            <h3 className="text-2xl font-bold mb-3 flex items-center">
              {step.title}
            </h3>
            <p className={`text-lg leading-relaxed max-w-lg ${step.textColor === 'text-white' ? 'text-slate-300' : 'text-slate-600'}`}>
              {step.desc}
            </p>
          </div>
        </div>

      </div>
    </motion.div>
  );
};

export const MethodologyStack: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="bg-slate-950 py-32 relative">
      <div className="container mx-auto px-6">
        
        <div className="flex flex-col lg:flex-row gap-20">
          
          {/* --- LEFT SIDE: Sticky Title & Progress --- */}
          <div className="lg:w-1/3">
            <div className="sticky top-32">
              <SectionLabel text="Our Methodology" dark={true} />
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                A Clear Path to <br/> Completion.
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-12">
                Development can be complex, but our process is simple. We break down the journey into 5 clear stages, giving you transparency and control at every step.
              </p>
              
              {/* Active Progress Indicator */}
              <div className="flex gap-3">
                {STEPS.map((_, i) => (
                   <motion.div 
                     key={i} 
                     initial={false}
                     animate={{ 
                       backgroundColor: i === activeStep ? '#E63946' : '#1e293b', // Red-600 vs Slate-800
                       flex: i === activeStep ? 2 : 1, // Grow the active bar
                       opacity: i === activeStep || i < activeStep ? 1 : 0.3 // Dim future steps
                     }}
                     className="h-1.5 rounded-full transition-all duration-300"
                   />
                ))}
              </div>
              
              <div className="mt-4 text-sm font-bold text-slate-500 uppercase tracking-widest flex justify-between items-center w-50">
                <span>Step 0{activeStep + 1}</span>
                <span className="text-slate-700">/</span>
                <span>05</span>
              </div>
            </div>
          </div>

          {/* --- RIGHT SIDE: The Card Stack --- */}
          <div className="lg:w-2/3 flex flex-col gap-8 relative pb-20">
            {STEPS.map((step, index) => (
              <StackCard 
                key={step.id} 
                step={step} 
                index={index} 
                setActiveStep={setActiveStep} 
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};