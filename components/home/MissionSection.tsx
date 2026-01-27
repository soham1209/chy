"use client";
import React, { useState } from "react";
import {
  Target,
  Eye,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { motion, AnimatePresence } from "framer-motion";

// --- Data Structure ---
const TABS = [
  {
    id: "mission",
    label: "Our Mission",
    icon: Target,
    // Content from image_3ffda3.png
    headline: "Simplifying Development.",
    text: "To simplify property development through transparency, innovation, and expert guidance delivering quality projects from concept to completion.",
    points: [
      "Architect-led design & approvals", //
      "Builder-backed execution", //
    ],
  },
  {
    id: "vision",
    label: "Our Vision",
    icon: Eye,
    // Content from image_3ffaf4.png
    headline: "Building Trust.",
    text: "To be Sydney’s most trusted property development partner, known for integrity, precision, and long-term value creation.",
    points: [
      "Investor-supported funding", //
      "Delivery-focused project management", //
    ],
  },
  {
    id: "goal",
    label: "Our Goals",
    icon: TrendingUp,
    // Content from image_3ffab9.png
    headline: "Sustainable Growth.",
    text: "To consistently deliver seamless, end-to-end solutions while fostering sustainable growth and total client satisfaction.",
    points: [
      "Deliver seamless, end-to-end solutions", //
      "Maintain highest safety & quality standards", //
      "Foster sustainable growth", //
      "Clear and accountable communication", //
    ],
  },
];

export const MissionSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-24 bg-stone-50 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* --- Header --- */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionLabel text="About us" />
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4 leading-tight">
            Driven by Purpose. <br />
            Defined by Results.
          </h2>
        </div>

        {/* --- 1. The Interactive Tabs (Buttons) --- */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white p-1.5 rounded-full border border-slate-200 shadow-sm relative">
            {TABS.map((tab, idx) => {
              const isActive = activeTab === idx;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(idx)}
                  className={`relative z-10 px-8 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-colors duration-300 flex items-center gap-2 ${isActive ? "text-white" : "text-slate-500 hover:text-slate-900"}`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTabBg"
                      className="absolute inset-0 bg-slate-900 rounded-full shadow-md"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    <tab.icon
                      className={`w-4 h-4 ${isActive ? "text-[#E63946]" : "text-current"}`}
                    />
                    {tab.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* --- 2. The Content Display Area --- */}
        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100 flex flex-col md:flex-row gap-12 items-center"
            >
              {/* Left Side: Icon & Headline */}
              <div className="md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left border-b md:border-b-0 md:border-r border-slate-100 pb-8 md:pb-0 md:pr-8">
                <div className="w-20 h-20 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-900 mb-6 shadow-inner">
                  {React.createElement(TABS[activeTab].icon, {
                    className: "w-10 h-10 text-[#E63946]",
                  })}
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-2">
                  {TABS[activeTab].headline}
                </h3>
                <div className="h-1 w-12 bg-[#E63946] rounded-full mt-4 mx-auto md:mx-0"></div>
              </div>

              {/* Right Side: Description & Points */}
              <div className="md:w-2/3">
                <p className="text-lg text-slate-600 leading-relaxed mb-8 font-medium">
                  "{TABS[activeTab].text}"
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {TABS[activeTab].points.map((point, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start p-3 rounded-lg bg-slate-50 border border-slate-100 hover:border-[#E63946]/20 transition-colors"
                    >
                      <CheckCircle2 className="w-5 h-5 text-[#E63946] mt-0.5 mr-3 shrink-0" />
                      <span className="text-sm font-bold text-slate-700">
                        {point}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Optional "Learn More" Link */}
                <div className="mt-8 flex justify-end">
                  <button className="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-[#E63946] flex items-center gap-2 transition-colors">
                    Learn more about our {TABS[activeTab].id}{" "}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
