import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Hero } from '@/components/home/Hero';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { AlternatingSection } from '@/components/home/AlternatingSection';
import { ServicesSlider } from '@/components/services/ServicesSlider';
import { MethodologyStack } from '@/components/home/MethodologyStack'; // <--- NEW IMPORT
import { TrustSection } from '@/components/home/TrustSection';
import { MissionSection } from '@/components/home/MissionSection';
import { Button } from '@/components/ui/Button';
import { FocusAreas } from '@/components/home/FocusAreas';

export default function Home() {
  return (
    <>
      <Hero />
      
      <MissionSection />
      
      <AlternatingSection 
        title="High-End Dual Living."
        subtitle="The CHY Standard"
        desc="We specialise in unlocking the hidden equity in your land. Our dual occupancy designs are crafted to look like premium single residences while delivering double the rental yield."
        image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2670&auto=format&fit=crop"
      />

      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <SectionLabel text="What We Do" />
              <h2 className="text-4xl font-bold text-slate-900">Our Services</h2>
            </div>
            <div className="hidden md:block">
               <Button variant="ghost" icon={<ArrowRight className="w-4 h-4" />} href="/services">View All Services</Button>
            </div>
          </div>
          <ServicesSlider />
        </div>
      </section>

      <AlternatingSection 
        title="Compliance & Approvals."
        subtitle="Stress-Free Process"
        desc="Navigating NSW councils can be complex. We handle the entire DA or CDC approval process, ensuring your project meets all compliance requirements without compromising on design intent."
        image="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2689&auto=format&fit=crop"
        reversed={true}
      />

      {/* --- NEW STACK SECTION REPLACES THE OLD METHODOLOGY --- */}
      <MethodologyStack />

      <TrustSection />
      
      <FocusAreas />
      
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