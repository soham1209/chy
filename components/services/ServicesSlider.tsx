"use client";
import React, { useRef } from 'react';
import { 
  ClipboardList, 
  Ruler, 
  HardHat, 
  TrendingUp, 
  Key, 
  Building2, 
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { SERVICES } from '@/data/mockData';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper as SwiperType } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Icon Map
const iconMap: Record<string, React.ElementType> = {
  "ClipboardList": ClipboardList,
  "Ruler": Ruler,
  "HardHat": HardHat,
  "TrendingUp": TrendingUp,
  "Key": Key,
  "Building2": Building2
};

export const ServicesSlider: React.FC = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="w-full py-10 relative group/slider px-4 md:px-12">
      
      {/* --- Navigation Buttons (Moved Inside) --- */}
      <button 
        onClick={() => swiperRef.current?.slidePrev()}
        className="absolute top-1/2 left-0 md:left-2 z-30 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg border border-slate-200 flex items-center justify-center text-slate-900 hover:text-[#E63946] hover:scale-110 transition-all duration-300 opacity-0 group-hover/slider:opacity-100 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button 
        onClick={() => swiperRef.current?.slideNext()}
        className="absolute top-1/2 right-0 md:right-2 z-30 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg border border-slate-200 flex items-center justify-center text-slate-900 hover:text-[#E63946] hover:scale-110 transition-all duration-300 opacity-0 group-hover/slider:opacity-100 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        spaceBetween={24}
        // Default (Mobile): 1 Card
        slidesPerView={1} 
        centeredSlides={false}
        loop={false}
        speed={800}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        // --- UPDATED BREAKPOINTS ---
        breakpoints={{
          640: { slidesPerView: 2 },   // Tablets: 2 cards
          900: { slidesPerView: 3 },   // Laptops/Desktop: 3 cards (Lowered from 1024 to ensure it shows)
        }}
        className="w-full h-155 pb-14!"
      >
        {SERVICES.map((service, i) => {
          const Icon = iconMap[service.icon] || Building2;
          
          return (
            <SwiperSlide key={i} className="h-full">
              <div className="h-full bg-white border border-slate-200 p-8 rounded-xl relative overflow-hidden group cursor-pointer flex flex-col justify-between hover:shadow-2xl hover:-translate-y-1 transition-all duration-500">
                
                {/* Background Image Reveal */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                  <div className="absolute inset-0 bg-slate-900/95 z-10 transition-opacity duration-500 group-hover:opacity-95 opacity-0"></div>
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-0 group-hover:opacity-100"
                  />
                </div>

                {/* Content Container */}
                <div className="relative z-20 flex flex-col h-full">
                  
                  {/* Header */}
                  <div className="mb-6">
                    <div className="w-14 h-14 bg-slate-100 rounded-lg flex items-center justify-center text-slate-900 mb-6 transition-colors duration-300 group-hover:bg-[#E63946] group-hover:text-white shadow-sm">
                      <Icon className="w-8 h-8" strokeWidth={1.5} />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-slate-900 mb-3 transition-colors duration-300 group-hover:text-white leading-tight min-h-16 flex items-end pb-1">
                      {service.title}
                    </h3>
                    
                    <p className="text-slate-600 text-sm leading-relaxed transition-colors duration-300 group-hover:text-slate-300 line-clamp-4">
                      {service.desc}
                    </p>
                  </div>

                  {/* Bullet Highlights */}
                  <div className="mb-auto">
                    <div className="h-px w-full bg-slate-100 mb-4 group-hover:bg-white/10 transition-colors"></div>
                    <ul className="space-y-3">
                      {(service.features || []).slice(0,3).map((feat: string, idx: number) => (
                        <li key={idx} className="flex items-start text-xs font-bold uppercase tracking-wide text-slate-500 group-hover:text-slate-200 transition-colors">
                          <Check className="w-4 h-4 text-[#E63946] mr-2 shrink-0 group-hover:text-[#c92a37]" />
                          {feat}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Book Link */}
                  <div className="pt-6 mt-6 border-t border-slate-100 group-hover:border-white/10 transition-colors">
                    <span className="flex items-center text-sm font-bold uppercase tracking-wider text-[#E63946] group-hover:text-white transition-colors">
                      Book Consultation 
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-2" />
                    </span>
                  </div>

                </div>

                {/* Decorative Bottom Line */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-[#E63946] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-30"></div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};