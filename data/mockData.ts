import { ServiceData, TrustPointData } from '@/types';
import { FocusAreaData } from '@/types';

export const SERVICES: ServiceData[] = [
  {
    title: "Development Consultancy",
    desc: "We provide comprehensive feasibility studies, accurate costing, detailed project planning, and end-to-end advisory services.",
    icon: "ClipboardList", 
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2672&auto=format&fit=crop"
  },
  {
    title: "Architecture & Approvals",
    desc: "Registered architects for: DA / CDC Approvals, Concept & detailed drawings, 3D renders, Council submissions.",
    icon: "Ruler",
    image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2500&auto=format&fit=crop"
  },
  {
    title: "Construction Management",
    desc: "We deliver property solutions like residential homes, duplexes, granny flats, commercial fit-outs, and structural upgrades.",
    icon: "HardHat",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2670&auto=format&fit=crop"
  },
  {
    title: "Investment Facilitation",
    desc: "We prepare investor-ready feasibility reports including: Budgeting, ROI models, Margin analysis, Timeline projections.",
    icon: "TrendingUp",
    image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?q=80&w=2672&auto=format&fit=crop"
  },
  {
    title: "End-to-End Delivery",
    desc: "We take responsibility from the first sketch to the final handover—ensuring excellence, trust, and quality at every step.",
    icon: "Key",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2673&auto=format&fit=crop"
  },
  {
    title: "Real Estate Development",
    desc: "Building visions into reality through expert real estate development — with integrity, innovation, and excellence at every stage.",
    icon: "Building2",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop"
  }
];

export const TRUST_POINTS: TrustPointData[] = [
  { 
    icon: "ShieldCheck", 
    title: "Transparent & Compliant", 
    text: "Strict adherence to NSW building codes with full contract transparency." 
  },
  { 
    icon: "Users", 
    title: "Expert Local Team", 
    text: "Dedicated architects and builders who understand the Sydney market." 
  },
  { 
    icon: "Clock", 
    title: "On-Time Delivery", 
    text: "Proven project management systems ensure your investment is ready sooner." 
  }
];

export const FOCUS_AREAS: FocusAreaData[] = [
  {
    id: "01",
    title: "Inner West",
    desc: "A high-demand corridor known for its heritage charm blended with modern density. We focus on luxury terraces and boutique apartment complexes.",
    image: "https://images.squarespace-cdn.com/content/v1/567209215a566877a0528942/1740633737912-237T47GH8G0FALPPFQ7Z/unsplash-image-zh_ofCt2r9c.jpg?format=2500w"
  },
  {
    id: "02",
    title: "North Shore",
    desc: "Sydney's premier residential belt. Our projects here capitalize on the lush landscape and skyline views, delivering premium family residences.",
    image: "https://images.squarespace-cdn.com/content/v1/5a8ff4eb4eddec7b6104d440/1519441868582-5C4EYNLMQIYY0OHWYXBB/new-home-builder-sydney.jpg?format=2500w"
  },
  {
    id: "03",
    title: "Western Sydney",
    desc: "The growth engine of NSW. With the new airport and infrastructure boom, we are developing high-yield dual occupancies and new builds.",
    image: "https://www.realestate.com.au/news-image/w_1000,h_563/v1661234099/news-lifestyle-content-assets/wp-content/production/capi_bc87362478c87c59b966751c79ede824_580ec350e5e6593e29ced27d086fbe26.webp?_i=AA"
  },
  {
    id: "04",
    title: "Greater Sydney",
    desc: "Identifying emerging suburbs with capital growth potential. We bring affordable yet high-quality housing solutions to expanding communities.",
    image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=2670&auto=format&fit=crop"
  }
];