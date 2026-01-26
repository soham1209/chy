import React from 'react';
import { ArrowRight } from 'lucide-react'; // Import usually works in server components if used as JSX
import { Hero } from '@/components/home/Hero';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { AlternatingSection } from '@/components/home/AlternatingSection';
import { ServiceCard } from '@/components/services/ServiceCard';
import { ProcessStep } from '@/components/home/ProcessStep';
import { TrustSection } from '@/components/home/TrustSection';
import { Button } from '@/components/ui/Button';
import { SERVICES } from '@/data/mockData';

export default function Home() {
  return (
    <>
      <Hero />
      
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div className="max-w-2xl">
              <SectionLabel text="Mission & Vision" />
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                We don't just build homes. <br/>
                We build <span className="text-red-700">wealth and lifestyle.</span>
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                <strong>Our Mission:</strong> To provide transparent, premium development services that remove the stress from the building process, bridging the gap between architectural vision and investment reality.
              </p>
              <p className="text-slate-600 leading-relaxed">
                <strong>Our Vision:</strong> To be Sydney's most trusted partner for residential transformations, setting new standards in quality, sustainability, and investor returns.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 w-full md:w-auto">
              <div className="p-6 bg-stone-50 rounded-sm hover:shadow-lg transition-shadow duration-300">
                <div className="text-3xl font-bold text-red-700 mb-1 flex items-baseline">
                  100<span className="text-sm text-slate-400">%</span>
                </div>
                <div className="text-xs font-bold uppercase text-slate-500">Compliance Rate</div>
              </div>
              <div className="p-6 bg-stone-50 rounded-sm hover:shadow-lg transition-shadow duration-300">
                <div className="text-3xl font-bold text-red-700 mb-1">Wide</div>
                <div className="text-xs font-bold uppercase text-slate-500">Sydney Service</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <AlternatingSection 
        title="High-End Dual Living."
        subtitle="The CHY Standard"
        desc="We specialise in unlocking the hidden equity in your land. Our dual occupancy designs are crafted to look like premium single residences while delivering double the rental yield."
        image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2670&auto=format&fit=crop"
      />

      <section className="py-24 bg-stone-50">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <SectionLabel text="What We Do" />
              <h2 className="text-4xl font-bold text-slate-900">Our Services</h2>
            </div>
            {/* FIXED: Passing JSX element instead of component function */}
            <Button variant="ghost" icon={<ArrowRight className="w-4 h-4" />} href="/services">View All</Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((s, i) => <ServiceCard key={i} service={s} />)}
          </div>
        </div>
      </section>

      <AlternatingSection 
        title="Compliance & Approvals."
        subtitle="Stress-Free Process"
        desc="Navigating NSW councils can be complex. We handle the entire DA or CDC approval process, ensuring your project meets all compliance requirements without compromising on design intent."
        image="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2689&auto=format&fit=crop"
        reversed={true}
      />

      <section className="py-24 bg-slate-900 text-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <SectionLabel text="Our Methodology" dark={true} />
              <h2 className="text-3xl md:text-4xl font-bold mb-6">A Clear Path to Completion</h2>
              <p className="text-slate-400 mb-8">We demystify the development process with a structured, transparent workflow.</p>
              <Button variant="primary" href="/contact">Start Projects</Button>
            </div>
            <div className="space-y-2">
              {[
                { id: 1, title: "Discovery", text: "Site analysis & feasibility check." },
                { id: 2, title: "Design", text: "Architectural plans & yield optimisation." },
                { id: 3, title: "Approvals", text: "DA/CDC council management." },
                { id: 4, title: "Build", text: "Premium construction & supervision." },
                { id: 5, title: "Handover", text: "Certification, warranties & keys." }
              ].map((step) => (
                <ProcessStep key={step.id} number={step.id} title={step.title} text={step.text} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <TrustSection />
      
      <section className="py-24 bg-red-700 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 animate-pulse"></div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Ready to start your project?</h2>
          <p className="text-red-100 text-xl mb-12 max-w-2xl mx-auto">
            Book a complimentary site feasibility consultation with our development experts today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
             <Button variant="secondary" href="/contact">Book Free Consultation</Button>
          </div>
        </div>
      </section>
    </>
  );
}