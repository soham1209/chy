import { ServiceData, TrustPointData } from '@/types';

export const SERVICES: ServiceData[] = [
  {
    title: "Development Consultancy",
    desc: "We provide comprehensive feasibility studies, accurate costing, detailed project planning, and end-to-end advisory services.",
    icon: "ClipboardList", // Changed to appropriate icons
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