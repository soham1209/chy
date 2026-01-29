"use client";

import React from "react";
import { Home } from "lucide-react";
import { SectionLabel } from "../ui/SectionLabel";

type Crumb = {
  label: string;
  href?: string;
};

type PageHeroProps = {
  title: string;
  breadcrumbs: Crumb[];
  className?: string;
};

export function PageHero({ title, breadcrumbs, className }: PageHeroProps) {
  return (
    <section
      className={`relative overflow-hidden bg-slate-950 text-white border-b border-slate-900 py-16 md:py-20 ${
        className ? className : ""
      }`}
    >
      {/* Subtle skyline-style backdrop */}
      <div
        className="absolute inset-0 bg-linear-to-b from-slate-900 via-slate-950 to-slate-950"
        aria-hidden
      />
      <div className="absolute inset-x-0 bottom-0 h-40" aria-hidden />

      <div className="container mx-auto px-6 relative z-10 text-center space-y-6 mt-18 md:mt-12 h-40">
        <div className="flex justify-center">
          <SectionLabel text={title} />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight uppercase text-white">
          {title}
        </h1>

        <div className="flex items-center justify-center gap-3 text-slate-300 text-sm">
          <Home className="w-4 h-4" aria-hidden />
          {breadcrumbs.map((crumb, idx) => {
            const isLast = idx === breadcrumbs.length - 1;
            return (
              <React.Fragment key={crumb.label}>
                {idx > 0 && <span className="text-slate-500">/</span>}
                {crumb.href && !isLast ? (
                  <a
                    href={crumb.href}
                    className="font-semibold text-slate-200 hover:text-[#E63946] transition-colors"
                  >
                    {crumb.label}
                  </a>
                ) : (
                  <span className="font-semibold text-slate-100">
                    {crumb.label}
                  </span>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default PageHero;
