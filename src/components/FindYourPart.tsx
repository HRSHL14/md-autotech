/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Product } from '../types';
import ScrollReveal from './ScrollReveal';

interface FindYourPartProps {
  setActiveTab?: (tab: string) => void;
  onSelectProduct?: (product: Product) => void;
  onOpenQuoteModal?: (productName: string) => void;
}

export default function FindYourPart({ setActiveTab }: FindYourPartProps) {
  // 4 Featured products covering major OEM brands
  const featuredProducts = [
    {
      brand: 'HERO',
      name: 'HR PASSION PLATED',
      partNo: 'MD2031',
      category: 'Rear Shock Absorber',
      vehicleModel: 'HERO PASSION',
      imageUrl: '/md-auto-images/md2031-hr-passion-plated.png',
    },
    {
      brand: 'HONDA',
      name: 'HONDA SHINE RED',
      partNo: 'MD1002',
      category: 'Rear Shock Absorber',
      vehicleModel: 'HONDA SHINE',
      imageUrl: '/md-auto-images/md1002-honda-shine-red.png',
    },
    {
      brand: 'BAJAJ',
      name: 'BAJAJ COMFORTEC',
      partNo: 'MD3004',
      category: 'Rear Shock Absorber',
      vehicleModel: 'BAJAJ PLATINA / COMFORTEC',
      imageUrl: '/md-auto-images/md3004-bajaj-comfortec.png',
    },
    {
      brand: 'TVS',
      name: 'TVS STAR CITY+ RED',
      partNo: 'MD4003',
      category: 'Rear Shock Absorber',
      vehicleModel: 'TVS STAR CITY+',
      imageUrl: '/md-auto-images/md4003-tvs-star-city-plus.png',
    },
  ];

  return (
    <section className="w-full bg-[#F8FAFC] border-b border-slate-200 py-12 lg:py-20 relative overflow-hidden" id="featured-products-preview">
      {/* Rich Automotive Micro-Dot Grid & Technical Grid Texture */}
      <div className="absolute inset-0 opacity-25 pointer-events-none bg-[radial-gradient(#94a3b8_1.2px,transparent_1.2px)] [background-size:24px_24px]" />
      <div className="absolute inset-0 opacity-15 pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 space-y-12 relative z-10">
        
        {/* Section Header with Upward Scroll Reveal */}
        <ScrollReveal direction="up" delay={0}>
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 uppercase font-heading tracking-tight leading-tight">
              Explore Our <span className="text-red-600">Suspension Solutions</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-sans leading-relaxed">
              A selection of MD AutoTech suspension products developed for popular two-wheeler applications.
            </p>
          </div>
        </ScrollReveal>

        {/* 4 Featured Automotive Catalogue Cards Grid with Staggered Upward Scroll Reveal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {featuredProducts.map((prod, idx) => (
            <ScrollReveal key={idx} direction="up" delay={180 + idx * 220}>
              <div
                onClick={() => {
                  if (setActiveTab) setActiveTab('products');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-white border border-slate-200 rounded-3xl p-6 flex flex-col justify-between hover:border-red-600 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 cursor-pointer group space-y-4 relative overflow-hidden h-full"
              >
                {/* Top Technical Metadata */}
                <div className="flex items-center justify-between font-sans text-xs pb-3 border-b border-slate-100">
                  <span className="font-extrabold text-red-600 uppercase tracking-wide">{prod.brand}</span>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-3 bg-red-600 rounded-full" />
                    <span className="font-mono font-bold text-slate-900 tracking-wider">{prod.partNo}</span>
                  </div>
                </div>

                {/* Dedicated Product Photography Visual Area */}
                <div className="aspect-[4/3] bg-slate-50 border border-slate-200 rounded-2xl p-4 flex items-center justify-center relative overflow-hidden shadow-inner">
                  <img
                    src={prod.imageUrl}
                    alt={prod.name}
                    className="max-h-full max-w-full object-contain group-hover:scale-108 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>

                {/* Product Details */}
                <div className="space-y-1 text-left pt-3 border-t border-slate-100">
                  <h3 className="text-base sm:text-lg font-black text-slate-900 uppercase font-heading tracking-tight group-hover:text-red-600 transition-colors leading-tight">
                    {prod.name}
                  </h3>
                  <p className="text-xs text-slate-500 font-sans font-medium">
                    {prod.category}
                  </p>

                  {/* Subtle Text CTA */}
                  <div className="pt-3 flex items-center gap-1.5 text-xs font-mono font-black text-red-600 uppercase tracking-wider group-hover:text-red-700">
                    <span>VIEW PRODUCT</span>
                    <ArrowRight className="w-3.5 h-3.5 text-red-600 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Single Strong Section CTA */}
        <ScrollReveal direction="up" delay={500}>
          <div className="text-center flex justify-center pt-2">
            <button
              onClick={() => {
                if (setActiveTab) setActiveTab('products');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="cursor-pointer px-8 py-4 bg-gradient-to-r from-red-600 via-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-black text-xs sm:text-sm uppercase tracking-wider rounded-full shadow-lg shadow-red-950/20 hover:shadow-xl transition-all transform hover:scale-[1.03] active:scale-[0.98] flex items-center gap-3 group border border-red-500/40"
            >
              <span>VIEW COMPLETE PRODUCT RANGE</span>
              <ArrowRight className="w-4.5 h-4.5 text-white group-hover:translate-x-1 transition-transform shrink-0" />
            </button>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
