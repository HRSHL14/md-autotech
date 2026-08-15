/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Store, Building, Wrench, ArrowRight, Truck } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

interface B2BPartnersSectionProps {
  setActiveTab?: (tab: string) => void;
  onOpenQuoteModal: (businessType?: string) => void;
}

export default function B2BPartnersSection({ onOpenQuoteModal }: B2BPartnersSectionProps) {
  const targetAudiences = [
    {
      icon: Store,
      title: 'SPARE PARTS DEALERS',
      subtitle: 'High-margin two-wheeler suspension spares for your dealership.',
    },
    {
      icon: Building,
      title: 'REGIONAL DISTRIBUTORS',
      subtitle: 'State territory supply rights & bulk container freight.',
    },
    {
      icon: Truck,
      title: 'AUTO PARTS RETAILERS',
      subtitle: 'Direct wholesale damper stock packaged for retail counters.',
    },
    {
      icon: Wrench,
      title: 'WORKSHOPS & SERVICE',
      subtitle: 'OEM-fit rear shocks & front fork assemblies for repair jobs.',
    },
  ];

  return (
    <section className="w-full bg-[#F8FAFC] text-slate-900 py-4 sm:py-8 lg:py-16 h-screen flex flex-col justify-center border-b border-slate-200 relative overflow-hidden" id="b2b-partners">
      {/* Rich Automotive Micro-Dot Grid & Technical Grid Texture */}
      <div className="absolute inset-0 opacity-30 pointer-events-none bg-[radial-gradient(#94a3b8_1.2px,transparent_1.2px)] [background-size:24px_24px]" />
      <div className="absolute inset-0 opacity-15 pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 relative z-10 space-y-6 sm:space-y-10 w-full">

        {/* Section Header with Upward Scroll Reveal */}
        <ScrollReveal direction="up" delay={0}>
          <div className="text-center max-w-2xl mx-auto space-y-1 sm:space-y-2">
            <h2 className="text-3xl sm:text-3xl lg:text-4xl font-black text-slate-900 uppercase tracking-tight font-heading leading-tight">
              POWERING TWO-WHEELER <span className="text-red-600">MOBILITY</span>
            </h2>
            <p className="text-slate-600 text-[11px] sm:text-sm leading-relaxed font-sans max-w-xl mx-auto">
              Factory-direct suspension supply for dealers, distributors, retailers, and service workshops across India.
            </p>
          </div>
        </ScrollReveal>

        {/* 4 Audience Cards: Staggered Upward Scroll Reveal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-5">
          {targetAudiences.map((card, idx) => {
            const Icon = card.icon;
            return (
              <ScrollReveal key={idx} direction="up" delay={180 + idx * 220}>
                <div className="bg-white border border-slate-200 p-4 sm:p-5 rounded-3xl shadow-xs hover:shadow-md hover:border-red-600 transition-all flex flex-row sm:flex-col items-center sm:items-start group gap-3.5 sm:space-y-3 h-full">
                  {/* Icon */}
                  <div className="w-10 h-10 sm:w-11 sm:h-11 bg-slate-900 text-white flex items-center justify-center rounded-2xl shadow-sm group-hover:bg-red-600 transition-colors shrink-0">
                    <Icon className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-white" />
                  </div>

                  {/* Text Content */}
                  <div className="flex-1 min-w-0 space-y-0.5 sm:space-y-1 text-left">
                    <h3 className="text-xs sm:text-base font-extrabold text-slate-900 uppercase tracking-tight font-heading group-hover:text-red-600 transition-colors leading-tight truncate sm:whitespace-normal">
                      {card.title}
                    </h3>
                    <p className="text-slate-600 text-[10px] sm:text-xs leading-snug sm:leading-relaxed font-sans line-clamp-2 sm:line-clamp-none">
                      {card.subtitle}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Single Premium Rounded Pill CTA Button */}
        <ScrollReveal direction="up" delay={500}>
          <div className="text-center flex justify-center pt-1 sm:pt-2">
            <button
              onClick={() => onOpenQuoteModal('Dealer')}
              className="cursor-pointer px-7 sm:px-9 py-3.5 sm:py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-black text-xs uppercase tracking-wider rounded-full shadow-lg shadow-red-950/20 hover:shadow-xl hover:shadow-red-950/30 transition-all transform hover:scale-[1.03] active:scale-[0.98] flex items-center gap-3 group border border-red-500/40"
            >
              <span>GET WHOLESALE QUOTE</span>
              <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform shrink-0" />
            </button>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
