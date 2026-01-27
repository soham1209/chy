"use client";
import React from 'react';
import { motion, Variants } from 'framer-motion'; // 1. Import Variants
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Button } from '@/components/ui/Button';
import { TeamSection } from '@/components/home/TeamSection';
import { ArrowRight, Check, Award, Building } from 'lucide-react';

// --- Animation Variants ---

// 2. Apply the 'Variants' type here to fix the "ease" error
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

export default function AboutPage() {
  return (
    <div className="bg-white">
      
      {/* ---------------------------------------------------------------------------
         1. HERO SECTION
      --------------------------------------------------------------------------- */}
      <section className="relative pt-40 pb-20 md:pt-52 md:pb-32 bg-slate-900 text-white overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#c92a37] rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-slate-700/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl"
          >
            <motion.div variants={fadeInUp}>
              <SectionLabel text="Who We Are" dark={true} />
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold leading-[1.1] mb-8 tracking-tight">
              Building the skyline, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500">
                honoring the streetscape.
              </span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-xl text-slate-400 max-w-2xl leading-relaxed border-l border-[#E63946] pl-6">
              CHY Developments sits at the intersection of architectural vision and construction reality. We exist to bridge the gap between "concept" and "keys".
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ---------------------------------------------------------------------------
         2. IMAGE & STORY SPLIT
      --------------------------------------------------------------------------- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            {/* Image Side */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 relative"
            >
              <div className="relative h-[600px] w-full rounded-sm overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=2670&auto=format&fit=crop" 
                  alt="Architectural details" 
                  className="w-full h-full object-cover"
                />
                {/* Floating Quote Card */}
                <div className="absolute bottom-8 right-8 bg-white p-8 max-w-xs shadow-2xl border-l-4 border-[#E63946] hidden md:block">
                  <p className="text-slate-800 italic font-medium mb-4">
                    "We don't just build structures. We engineer assets that perform for generations."
                  </p>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">— The Founders</span>
                </div>
              </div>
              {/* Decorative Outline */}
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-slate-100 -z-10"></div>
            </motion.div>

            {/* Text Side */}
            <motion.div 
              className="lg:w-1/2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeInUp} className="text-4xl font-bold text-slate-900 mb-6">
                Redefining the standard of <br />
                <span className="text-[#E63946]">Sydney Development.</span>
              </motion.h2>

              <motion.p variants={fadeInUp} className="text-slate-600 text-lg leading-relaxed mb-6">
                Founded on the belief that property development had become too complex and opaque, CHY set out to create a transparent, design-led alternative.
              </motion.p>
              <motion.p variants={fadeInUp} className="text-slate-600 text-lg leading-relaxed mb-8">
                We saw too many clients caught in the gap between architects who designed unbuildable dreams, and builders who cut corners on design. 
              </motion.p>
              <motion.p variants={fadeInUp} className="text-slate-900 font-bold text-lg mb-8">
                We integrated both.
              </motion.p>
              
              <motion.div variants={fadeInUp}>
                 <ul className="space-y-4 mb-8">
                   {[
                     "End-to-end accountability from DA to Handover.",
                     "Strict adherence to NSW Building Commissioner standards.",
                     "Financial transparency at every project milestone."
                   ].map((item, i) => (
                     <li key={i} className="flex items-start">
                       <div className="mt-1 mr-4 bg-[#E63946]/20 text-[#E63946] rounded-full p-1">
                         <Check className="w-3 h-3" />
                       </div>
                       <span className="text-slate-700">{item}</span>
                     </li>
                   ))}
                 </ul>
                 <Button href="/projects" variant="outlineDark" icon={<ArrowRight className="w-4 h-4"/>}>
                    View Our Portfolio
                 </Button>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------------------
         3. STATS STRIP
      --------------------------------------------------------------------------- */}
      <section className="py-20 bg-slate-950 border-y border-slate-900">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center divide-x divide-slate-800/50">
            {[
              { label: "Combined Experience", value: "35+", suffix: "Years" },
              { label: "Project Value Delivered", value: "$120", suffix: "M+" },
              { label: "Approval Success Rate", value: "100", suffix: "%" },
              { label: "Active Sites", value: "14", suffix: "" },
            ].map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="px-4"
              >
                <div className="text-4xl md:text-6xl font-black text-white mb-2 tracking-tighter">
                  {stat.value}<span className="text-[#E63946] text-2xl md:text-4xl align-top">{stat.suffix}</span>
                </div>
                <div className="text-slate-500 text-xs font-bold uppercase tracking-widest">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------------------
         4. VALUES GRID
      --------------------------------------------------------------------------- */}
      <section className="py-24 bg-stone-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <SectionLabel text="Our Philosophy" />
            <h2 className="text-4xl font-bold text-slate-900 mb-6">The CHY Standard.</h2>
            <p className="text-slate-500">
              We don't chase trends. We follow a set of immutable principles that ensure every project stands the test of time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Building,
                title: "Architectural Integrity",
                desc: "We believe good design is not an optional extra. It is the fundamental driver of property value and lifestyle quality."
              },
              {
                icon: Award,
                title: "Construction Excellence",
                desc: "Our sites are run with military precision. A clean site is a safe site, and a safe site produces superior quality finishes."
              },
              {
                icon: Check,
                title: "Radical Transparency",
                desc: "No hidden costs. No surprise variations. We provide clear, itemized contracts so you know exactly where every dollar goes."
              }
            ].map((card, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2, duration: 0.5 }}
                className="bg-white p-10 border-t-4 border-slate-200 hover:border-[#E63946] shadow-sm hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-slate-50 rounded-full flex items-center justify-center text-slate-400 group-hover:bg-[#E63946]/10 group-hover:text-[#E63946] mb-6 transition-colors">
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
         5. TEAM SECTION
      --------------------------------------------------------------------------- */}
      <TeamSection />

      {/* ---------------------------------------------------------------------------
         6. CTA SECTION
      --------------------------------------------------------------------------- */}
      <section className="py-24 bg-[#E63946] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 animate-pulse"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Let's build something lasting.</h2>
          <p className="text-white/80 text-xl mb-12 max-w-2xl mx-auto">
            Whether you are an investor, a landowner, or a family looking to build, we are ready to guide you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
             <Button variant="secondary" href="/contact">Start a Conversation</Button>
          </div>
        </div>
      </section>

    </div>
  );
}