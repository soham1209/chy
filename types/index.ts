import React from 'react';

export interface ServiceData {
  title: string;
  desc: string;
  icon: string; // Changed from React.ElementType to string
  features: string[];
}

export interface TrustPointData {
  icon: string; // Changed from React.ElementType to string
  title: string;
  text: string;
}

export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outlineDark' | 'ghost';
  className?: string;
  onClick?: () => void;
  icon?: React.ReactNode; // Changed to ReactNode to accept <Icon />
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