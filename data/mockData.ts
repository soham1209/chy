import { ServiceData, TrustPointData, FocusAreaData, BlogPostData } from '@/types';

// --- SERVICES DATA ---
export const SERVICES: ServiceData[] = [
  {
    title: "Development Consultancy",
    desc: "We provide comprehensive feasibility studies, accurate costing, detailed project planning, and end-to-end advisory services.",
    icon: "ClipboardList", 
    image: "/service1.jpeg",
    features: ["Feasibility Studies", "Cost Planning", "Advisory Services"]
  },
  {
    title: "Architecture & Approvals",
    desc: "Registered architects for: DA / CDC Approvals, Concept & detailed drawings, 3D renders, Council submissions.",
    icon: "Ruler",
    image: "/service2.jpeg",
    features: ["DA & CDC Approvals", "3D Visualization", "Council Liaison"]
  },
  {
    title: "Construction Management",
    desc: "We deliver property solutions like residential homes, duplexes, granny flats, commercial fit-outs, and structural upgrades.",
    icon: "HardHat",
    image: "/service3.jpeg",
    features: ["Residential Builds", "Commercial Fit-outs", "Structural Upgrades"]
  },
  {
    title: "Investment Facilitation",
    desc: "We prepare investor-ready feasibility reports including: Budgeting, ROI models, Margin analysis, Timeline projections.",
    icon: "TrendingUp",
    image: "/service4.jpeg",
    features: ["ROI Modeling", "Margin Analysis", "Investor Reports"]
  },
  {
    title: "End-to-End Delivery",
    desc: "We take responsibility from the first sketch to the final handover—ensuring excellence, trust, and quality at every step.",
    icon: "Key",
    image: "/service5.jpeg",
    features: ["Turnkey Solutions", "Quality Assurance", "Final Handover"]
  },
  {
    title: "Real Estate Development",
    desc: "Building visions into reality through expert real estate development — with integrity, innovation, and excellence at every stage.",
    icon: "Building2",
    image: "/service6.jpeg",
    features: ["Site Acquisition", "Project Visioning", "Market Strategy"]
  }
];

// --- 3 BLOG POSTS ---
export const SERVICE_POSTS: BlogPostData[] = [
  {
    id: 1,
    title: "Maximizing Yield on Narrow Blocks",
    excerpt: "How strategic architectural design can unlock hidden value in challenging sites.",
    date: "Oct 12, 2025",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2670&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "The CDC Approval Advantage",
    excerpt: "Why fast-tracking your approval through a Private Certifier might be the best ROI decision.",
    date: "Nov 05, 2025",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2666&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Construction Costs in 2026",
    excerpt: "A transparent look at material costs and labor trends for the upcoming financial year.",
    date: "Dec 01, 2025",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2689&auto=format&fit=crop"
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
    image: "https://assets.gonest.com.au/App/PropertyImage/fcf09880-6cfa-11f0-b8e7-3594380da298/1ad25f42-1701-42e2-9753-c80e8f320d9c-lg-Robust-1.jpg?d89e507e1e1b83d0bf4a9b875b016597c40a5e3b"
  },
  {
    id: "04",
    title: "Greater Sydney",
    desc: "Identifying emerging suburbs with capital growth potential. We bring affordable yet high-quality housing solutions to expanding communities.",
    image: "https://i2.au.reastatic.net/800x600-format=webp/4416e2d439b4cfda13fe2635720ee227e9d8cab64b9ea5420bf20ed8783e358b/image.jpg"
  }
];

export const TEAM_ROLES = [
  {
    role: "Architects",
    title: "Design & Vision",
    desc: "Our registered architects blend creative innovation with council compliance, ensuring every design maximizes yield and aesthetic value.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2689&auto=format&fit=crop"
  },
  {
    role: "Builders",
    title: "Construction & Delivery",
    desc: "Master builders with decades of on-site experience. We manage the physical realization of your asset with precision and speed.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2670&auto=format&fit=crop"
  },
  {
    role: "Consultants",
    title: "Strategy & Feasibility",
    desc: "The analytical backbone. Our consultants provide the financial modeling and market insights that turn a project into a profitable investment.",
    image: "https://images.unsplash.com/photo-1664575602276-acd073f104c1?q=80&w=2670&auto=format&fit=crop"
  }
];