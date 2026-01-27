"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Button } from '@/components/ui/Button';
import { ArrowUpRight, MapPin, Calendar, Ruler } from 'lucide-react';

// --- Local Data for Projects ---
const CATEGORIES = ["All", "Dual Occupancy", "Luxury Homes", "Granny Flats"];

const PROJECTS = [
  {
    id: 1,
    title: "The Mosman Duplex",
    category: "Dual Occupancy",
    location: "Mosman, NSW",
    year: "2023",
    size: "650 sqm",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2666&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Vaucluse Residence",
    category: "Luxury Homes",
    location: "Vaucluse, NSW",
    year: "2022",
    size: "820 sqm",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2670&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Bondi Coastal Villa",
    category: "Luxury Homes",
    location: "Bondi Beach, NSW",
    year: "2023",
    size: "540 sqm",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2670&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Ryde Garden Studio",
    category: "Granny Flats",
    location: "Ryde, NSW",
    year: "2024",
    size: "60 sqm",
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=2670&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Strathfield Manor",
    category: "Dual Occupancy",
    location: "Strathfield, NSW",
    year: "2023",
    size: "700 sqm",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2670&auto=format&fit=crop"
  },
  {
    id: 6,
    title: "Cronulla Duplex",
    category: "Dual Occupancy",
    location: "Cronulla, NSW",
    year: "2022",
    size: "580 sqm",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2670&auto=format&fit=crop"
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

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = activeFilter === "All" 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeFilter);

  return (
    <div className="bg-white">
      
      {/* ---------------------------------------------------------------------------
         1. HERO SECTION
      --------------------------------------------------------------------------- */}
      <section className="relative pt-40 pb-20 md:pt-52 md:pb-32 bg-slate-900 text-white overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-slate-800/30 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl"
          >
            <motion.div variants={fadeInUp}>
              <SectionLabel text="Selected Works" dark={true} />
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold leading-[1.1] mb-8 tracking-tight">
              A legacy of <br />
              <span className="text-slate-500">
                built excellence.
              </span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-xl text-slate-400 max-w-2xl leading-relaxed">
               Explore our portfolio of completed projects, showcasing our commitment to design integrity, yield optimization, and construction quality.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ---------------------------------------------------------------------------
         2. FILTER BAR
      --------------------------------------------------------------------------- */}
      <section className="sticky top-20 z-40 bg-white/90 backdrop-blur-md border-b border-slate-100 py-4">
        <div className="container mx-auto px-6 overflow-x-auto hide-scrollbar">
          <div className="flex space-x-8 min-w-max md:min-w-0 md:justify-center">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`text-sm font-bold uppercase tracking-wider py-2 relative transition-colors ${
                  activeFilter === cat ? 'text-slate-900' : 'text-slate-400 hover:text-slate-600'
                }`}
              >
                {cat}
                {activeFilter === cat && (
                  <motion.div 
                    layoutId="activeFilter"
                    className="absolute bottom-0 left-0 w-full h-[2px] bg-red-600"
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------------------
         3. PROJECTS GRID
      --------------------------------------------------------------------------- */}
      <section className="py-20 bg-stone-50 min-h-screen">
        <div className="container mx-auto px-6">
          
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode='popLayout'>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group relative h-[500px] bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer"
                >
                  
                  {/* Image Layer */}
                  <div className="absolute inset-0 bg-slate-200 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/20 transition-colors duration-500"></div>
                  </div>

                  {/* Top Right Arrow */}
                  <div className="absolute top-6 right-6 z-20 w-12 h-12 bg-white rounded-full flex items-center justify-center opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 shadow-xl">
                    <ArrowUpRight className="w-5 h-5 text-slate-900" />
                  </div>

                  {/* Info Card (Slides Up) */}
                  <div className="absolute bottom-0 left-0 w-full p-6 z-20">
                    <div className="bg-white p-6 shadow-sm border border-slate-100 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      
                      <div className="flex justify-between items-start mb-2">
                         <span className="text-xs font-bold text-red-600 uppercase tracking-widest">{project.category}</span>
                         <span className="text-xs font-bold text-slate-300">{project.year}</span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-slate-900 mb-4">{project.title}</h3>
                      
                      {/* Detailed Specs (Hidden -> Visible) */}
                      <div className="flex items-center gap-6 text-slate-500 text-xs font-medium uppercase tracking-wider border-t border-slate-100 pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        <span className="flex items-center"><MapPin className="w-3 h-3 mr-1"/> {project.location}</span>
                        <span className="flex items-center"><Ruler className="w-3 h-3 mr-1"/> {project.size}</span>
                      </div>

                    </div>
                  </div>

                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

        </div>
      </section>

      {/* ---------------------------------------------------------------------------
         4. FEATURED PROJECT (SPOTLIGHT)
      --------------------------------------------------------------------------- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <SectionLabel text="Signature Project" />
          <div className="mt-8 relative h-[600px] w-full rounded-2xl overflow-hidden group">
            <img 
               src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2671&auto=format&fit=crop"
               alt="Signature Project"
               className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent"></div>
            
            <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 text-white">
               <div className="max-w-2xl">
                 <div className="flex items-center gap-4 mb-4">
                   <span className="bg-red-600 px-3 py-1 text-xs font-bold uppercase tracking-widest">Award Winner</span>
                   <span className="text-slate-300 text-sm font-semibold">2023 Master Builders</span>
                 </div>
                 <h2 className="text-4xl md:text-6xl font-bold mb-6">The Horizon Dual Occupancy</h2>
                 <p className="text-slate-300 text-lg mb-8 max-w-xl">
                   Setting a new benchmark for yield and design in the Inner West. This project achieved a 22% ROI for our investors through clever subdivision and premium finishes.
                 </p>
                 <Button variant="secondary" icon={<ArrowUpRight className="w-4 h-4" />}>
                   Read Case Study
                 </Button>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------------------
         5. CTA
      --------------------------------------------------------------------------- */}
      <section className="py-24 bg-slate-900 relative overflow-hidden text-center">
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Have a project in mind?
          </h2>
          <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
            Browse our completed works, then let's discuss how we can achieve similar results for your land.
          </p>
          <Button variant="primary" href="/contact">
            Start Your Project
          </Button>
        </div>
      </section>

    </div>
  );
}