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
      tag: 'DEALERSHIP NETWORK',
      mobileTag: 'DEALERS',
      title: 'SPARE PARTS DEALERS',
      subtitle: 'High-margin two-wheeler suspension spares for your dealership.',
      image: '/b2b1.png',
    },
    {
      icon: Building,
      tag: 'TERRITORY SUPPLY',
      mobileTag: 'DISTRIBUTORS',
      title: 'REGIONAL DISTRIBUTORS',
      subtitle: 'State territory supply rights & bulk container freight.',
      image: '/b2b2.png',
    },
    {
      icon: Truck,
      tag: 'RETAIL COUNTERS',
      mobileTag: 'RETAILERS',
      title: 'AUTO PARTS RETAILERS',
      subtitle: 'Direct wholesale damper stock packaged for retail counters.',
      image: '/b2b3.png',
    },
    {
      icon: Wrench,
      tag: 'REPAIR & OEM-FIT',
      mobileTag: 'WORKSHOPS',
      title: 'WORKSHOPS & SERVICE',
      subtitle: 'OEM-fit rear shocks & front fork assemblies for repair jobs.',
      image: '/b2b4.jpg',
    },
  ];

  return (
    <section className="w-full bg-[#F8FAFC] text-slate-900 min-h-screen flex flex-col justify-center border-b border-slate-200 relative overflow-hidden py-12 sm:py-16" id="b2b-partners">
      {/* Rich Automotive Micro-Dot Grid & Technical Grid Texture */}
      <div className="absolute inset-0 opacity-30 pointer-events-none bg-[radial-gradient(#94a3b8_1.2px,transparent_1.2px)] [background-size:24px_24px]" />
      <div className="absolute inset-0 opacity-15 pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="max-w-[1440px] mx-auto px-3 sm:px-8 relative z-10 space-y-3 sm:space-y-6 lg:space-y-7 w-full my-auto">

        {/* Section Header with Upward Scroll Reveal */}
        <ScrollReveal direction="up" delay={0}>
          <div className="text-center max-w-3xl mx-auto space-y-1 sm:space-y-1.5">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 uppercase tracking-tight font-heading leading-tight whitespace-nowrap">
              POWERING TWO-WHEELER <span className="text-red-600">MOBILITY</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-snug sm:leading-relaxed font-sans max-w-2xl mx-auto">
              Factory-direct supply of shock absorbers, suspension systems, and automobile components for dealers, distributors, retailers, and service workshops across India.
            </p>
          </div>
        </ScrollReveal>

        {/* 4 Premium Cards (Taller 2x2 Grid on Mobile & Tablet, 4-Col Grid on Desktop) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 lg:gap-6">
          {targetAudiences.map((card, idx) => {
            const Icon = card.icon;
            return (
              <ScrollReveal key={idx} direction="up" delay={180 + idx * 120}>
                <div
                  className="relative overflow-hidden rounded-2xl sm:rounded-[28px] shadow-md hover:shadow-2xl transition-all duration-500 group border border-slate-200/50 flex flex-col justify-between p-4 sm:p-5 lg:p-6 aspect-[3/4.2] sm:aspect-[3/4] lg:aspect-[4/4.8] transform hover:-translate-y-1 min-h-[175px] sm:min-h-0"
                >
                  {/* Full-Bleed Background Image */}
                  <img
                    src={card.image}
                    alt={card.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-[0.82] contrast-[1.05]"
                    loading="lazy"
                  />

                  {/* Gradient Overlay: Darker at bottom for white text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/50 via-40% to-slate-950/20 group-hover:from-slate-950/90 transition-opacity duration-300" />

                  {/* Top Row: Red Pill Tag (Left) & Dark Circle Icon (Right) */}
                  <div className="relative z-10 flex items-center justify-between w-full">
                    <span className="px-2.5 py-1 sm:px-3.5 sm:py-1.5 bg-red-600 text-white font-mono font-black text-[9px] sm:text-xs uppercase tracking-wider rounded-full shadow-md border border-red-500/30 shrink-0">
                      <span className="sm:hidden">{card.mobileTag}</span>
                      <span className="hidden sm:inline">{card.tag}</span>
                    </span>
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/20 text-white flex items-center justify-center shadow-md group-hover:bg-red-600 group-hover:border-red-500 transition-all duration-300 shrink-0">
                      <Icon className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-white" />
                    </div>
                  </div>

                  {/* Bottom Row: Large Bold White Title */}
                  <div className="relative z-10 text-left pt-3 sm:pt-6">
                    <h3 className="text-base sm:text-xl lg:text-2xl font-black text-white uppercase tracking-tight font-heading leading-tight group-hover:text-red-400 transition-colors drop-shadow-sm">
                      {card.title}
                    </h3>
                  </div>

                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Single Premium Rounded Pill CTA Button */}
        <ScrollReveal direction="up" delay={450}>
          <div className="text-center flex justify-center pt-0.5 sm:pt-2">
            <button
              onClick={() => onOpenQuoteModal('Dealer')}
              className="cursor-pointer px-6 sm:px-9 lg:px-10 py-2.5 sm:py-3.5 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-black text-[11px] sm:text-sm uppercase tracking-wider rounded-full shadow-lg shadow-red-950/20 hover:shadow-xl hover:shadow-red-950/30 transition-all transform hover:scale-[1.03] active:scale-[0.98] flex items-center gap-2.5 group border border-red-500/40"
            >
              <span>GET WHOLESALE QUOTE</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4.5 sm:h-4.5 text-white group-hover:translate-x-1 transition-transform shrink-0" />
            </button>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
