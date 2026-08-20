/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Product } from '../types';
import { PRODUCTS } from '../data';
import ScrollReveal from './ScrollReveal';

interface FindYourPartProps {
  setActiveTab?: (tab: string) => void;
  onSelectProduct?: (product: Product) => void;
  onOpenQuoteModal?: (productName: string) => void;
}

export default function FindYourPart({ setActiveTab, onSelectProduct }: FindYourPartProps) {
  // 4 Featured products covering major OEM brands
  const featuredProducts = [
    {
      id: 'md2031',
      brand: 'HERO',
      name: 'HR PASSION PLATED',
      partNo: 'MD2031',
      category: 'Rear Shock Absorber',
      vehicleModel: 'HERO PASSION',
      imageUrl: '/md-auto-images/md2031-hr-passion-plated.png',
    },
    {
      id: 'md1002',
      brand: 'HONDA',
      name: 'HONDA SHINE RED',
      partNo: 'MD1002',
      category: 'Rear Shock Absorber',
      vehicleModel: 'HONDA SHINE',
      imageUrl: '/md-auto-images/md1002-honda-shine-red.png',
    },
    {
      id: 'md3004',
      brand: 'BAJAJ',
      name: 'BAJAJ COMFORTEC',
      partNo: 'MD3004',
      category: 'Rear Shock Absorber',
      vehicleModel: 'BAJAJ PLATINA / COMFORTEC',
      imageUrl: '/md-auto-images/md3004-bajaj-comfortec.png',
    },
    {
      id: 'md4003',
      brand: 'TVS',
      name: 'TVS STAR CITY+ RED',
      partNo: 'MD4003',
      category: 'Rear Shock Absorber',
      vehicleModel: 'TVS STAR CITY+',
      imageUrl: '/md-auto-images/md4003-tvs-star-city-plus.png',
    },
  ];

  const handleProductClick = (partNo: string, id: string) => {
    const matched = PRODUCTS.find((p) => p.id === id || p.partNo.toLowerCase() === partNo.toLowerCase());
    if (matched && onSelectProduct) {
      onSelectProduct(matched);
    } else if (setActiveTab) {
      setActiveTab('products');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full bg-[#F8FAFC] border-b border-slate-200 py-12 sm:py-0 sm:h-screen flex flex-col justify-center relative overflow-hidden" id="featured-products-preview">
      {/* Rich Automotive Micro-Dot Grid & Technical Grid Texture */}
      <div className="absolute inset-0 opacity-25 pointer-events-none bg-[radial-gradient(#94a3b8_1.2px,transparent_1.2px)] [background-size:24px_24px]" />
      <div className="absolute inset-0 opacity-15 pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 space-y-6 sm:space-y-8 lg:space-y-10 relative z-10 w-full my-auto">
        
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 justify-items-center sm:justify-items-stretch">
          {featuredProducts.map((prod, idx) => (
            <ScrollReveal key={idx} direction="up" delay={180 + idx * 180} className="w-full max-w-[310px] sm:max-w-none">
              <div
                onClick={() => handleProductClick(prod.partNo, prod.id)}
                className="bg-white border border-slate-200 rounded-2xl sm:rounded-3xl p-3.5 sm:p-5 flex flex-col justify-between sm:hover:border-red-600 sm:hover:shadow-xl transition-all duration-300 sm:hover:-translate-y-1.5 cursor-pointer group space-y-3 relative overflow-hidden h-full w-full mx-auto"
              >
                {/* Top Technical Metadata */}
                <div className="flex items-center justify-between font-sans text-xs pb-2 border-b border-slate-100">
                  <span className="font-extrabold text-red-600 uppercase tracking-wide">{prod.brand}</span>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-3 bg-red-600 rounded-full" />
                    <span className="font-mono font-bold text-slate-900 tracking-wider">{prod.partNo}</span>
                  </div>
                </div>

                {/* Dedicated Product Photography Visual Area */}
                <div className="h-44 sm:h-52 bg-slate-50 border border-slate-200 rounded-xl sm:rounded-2xl p-2.5 flex items-center justify-center relative overflow-hidden shadow-inner">
                  <img
                    src={prod.imageUrl}
                    alt={prod.name}
                    className="max-h-full max-w-full object-contain scale-[1.1] sm:scale-[1.05] sm:group-hover:scale-[1.15] transition-transform duration-300"
                    loading="lazy"
                  />
                </div>

                {/* Product Details & Right-Side View Button */}
                <div className="pt-2 border-t border-slate-100 flex items-center justify-between gap-2">
                  <div className="space-y-0.5 text-left min-w-0 flex-1">
                    <h3 className="text-sm sm:text-base font-black text-slate-900 uppercase font-heading tracking-tight sm:group-hover:text-red-600 transition-colors leading-tight truncate">
                      {prod.name}
                    </h3>
                    <p className="text-xs text-slate-500 font-sans font-medium truncate">
                      {prod.category}
                    </p>
                  </div>

                  {/* Compact View CTA Button on Right */}
                  <div className="flex items-center gap-1 text-[11px] font-mono font-black text-red-600 uppercase tracking-wider bg-red-50 sm:group-hover:bg-red-600 sm:group-hover:text-white px-2.5 py-1.5 rounded-full transition-all duration-300 shrink-0 border border-red-200/80 sm:group-hover:border-red-600 shadow-2xs">
                    <span>VIEW</span>
                    <ArrowRight className="w-3 h-3 text-red-600 sm:group-hover:text-white sm:group-hover:translate-x-0.5 transition-all" />
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
