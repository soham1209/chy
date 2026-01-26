import React from 'react';

export interface ServiceData {
  title: string;
  desc: string;
  icon: string;
  image: string; // <--- ADD THIS LINE
  features?: string[]; // Made optional as your new text doesn't strictly have bullet points
}

// ... rest of the file stays the same ...
export interface TrustPointData {
  icon: string;
  title: string;
  text: string;
}

export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outlineDark' | 'ghost';
  className?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  href?: string;
}

export interface SectionLabelProps {
  text: string;
  dark?: boolean;
}

export interface ServiceCardProps {
  service: ServiceData;
}

export interface ProcessStepProps {
  number: number;
  title: string;
  text: string;
}

export interface AlternatingSectionProps {
  title: string;
  subtitle: string;
  desc: string;
  image: string;
  reversed?: boolean;
}