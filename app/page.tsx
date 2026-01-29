import React from "react";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/home/Hero";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { AlternatingSection } from "@/components/home/AlternatingSection";
import { ServicesSlider } from "@/components/services/ServicesSlider";
import { MethodologyStack } from "@/components/home/MethodologyStack";
import { FocusAreas } from "@/components/home/FocusAreas";
import { TrustSection } from "@/components/home/TrustSection";
import { MissionSection } from "@/components/home/MissionSection";
import { Button } from "@/components/ui/Button";
import { HomeWrapper } from "@/components/home/HomeWrapper";

// --- NEW IMPORTS ---
import { TeamSection } from "@/components/home/TeamSection";
import { ComplianceSection } from "@/components/home/ComplianceSection";

export default function Home() {
  return (
    <HomeWrapper>
      <Hero />

      <MissionSection />

      <section className="py-12 md:py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <SectionLabel text="Our Services" />
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
                Building excellence across <br/>
                every development.
              </h2>
            </div>
            <div className="hidden md:block">
              <Button
                variant="ghost"
                icon={<ArrowRight className="w-4 h-4" />}
                href="/services"
              >
                View All Services
              </Button>
            </div>
          </div>
          <ServicesSlider />
        </div>
      </section>

      <TrustSection />

      

      <TeamSection />

      <MethodologyStack />

      <FocusAreas />


      <ComplianceSection />

      <section className="py-24 bg-[#E63946] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 animate-pulse"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Ready to start your project?
          </h2>
          <p className="text-white/80 text-xl mb-12 max-w-2xl mx-auto">
            Book a complimentary site feasibility consultation with our
            development experts today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button variant="secondary" href="/contact">
              Book Free Consultation
            </Button>
          </div>
        </div>
      </section>
    </HomeWrapper>
  );
}
