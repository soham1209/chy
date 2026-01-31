"use client";
import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { SERVICES } from '@/data/mockData';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper as SwiperType } from 'swiper';
import { ServiceCard } from '@/components/services/ServiceCard';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export const ServicesSlider: React.FC = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="w-full py-2 relative group/slider px-2 md:px-12">
      
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
          640: { slidesPerView: 2 },  
          900: { slidesPerView: 3 },  
        }}
        className="w-full pb-8 md:pb-10"
      >
        {SERVICES.map((service, i) => (
          <SwiperSlide key={i} className="h-full">
            <ServiceCard service={service} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};