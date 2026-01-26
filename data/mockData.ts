import { ServiceData, TrustPointData } from '@/types';

export const SERVICES: ServiceData[] = [
  {
    title: "Dual Occupancy",
    desc: "Strategic duplex designs tailored for high-growth suburbs. We handle feasibility to handover.",
    icon: "Home",
    features: ["Feasibility Study", "Custom Design", "High Yield"]
  },
  {
    title: "Luxury New Builds",
    desc: "Architecturally designed single and double-storey homes balancing aesthetics with practicality.",
    icon: "Star",
    features: ["Premium Finishes", "Sustainable Build", "End-to-End"]
  },
  {
    title: "Granny Flats",
    desc: "High-quality studios and secondary dwellings perfect for rental income or family living.",
    icon: "Ruler",
    features: ["Fast Approval", "Smart Layouts", "Turnkey Solution"]
  },
  {
    title: "Project Management",
    desc: "Comprehensive oversight from DA approval through to construction and handover.",
    icon: "HardHat",
    features: ["Council Liaison", "Budget Management", "Timeline Assurance"]
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