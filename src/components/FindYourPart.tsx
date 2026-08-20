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
    <section className="w-full bg-[#F8FAFC] border-b border-slate-200 min-h-screen py-10 sm:py-0 sm:h-screen flex flex-col justify-center relative overflow-hidden" id="featured-products-preview">
      {/* Rich Automotive Micro-Dot Grid & Technical Grid Texture */}
      <div className="absolute inset-0 opacity-25 pointer-events-none bg-[radial-gradient(#94a3b8_1.2px,transparent_1.2px)] [background-size:24px_24px]" />
      <div className="absolute inset-0 opacity-15 pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 space-y-6 sm:space-y-8 lg:space-y-9 relative z-10 w-full my-auto">
        
        {/* Section Header: Shifted bit up */}
        <ScrollReveal direction="up" delay={0}>
          <div className="text-center max-w-4xl mx-auto space-y-1.5 -mt-3 sm:-mt-6 lg:-mt-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-slate-900 uppercase font-heading tracking-tight leading-tight sm:whitespace-nowrap">
              Explore Our <span className="text-red-600">Suspension Solutions</span>
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm font-sans leading-relaxed">
              A selection of MD AutoTech suspension products developed for popular two-wheeler applications.
            </p>
          </div>
        </ScrollReveal>

        {/* 4 Featured Automotive Catalogue Cards Grid: Scaled up in same proportion */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-6 max-w-5xl mx-auto justify-center">
          {featuredProducts.map((prod, idx) => (
            <ScrollReveal key={idx} direction="up" delay={180 + idx * 180} className="w-full flex justify-center">
              <div
                onClick={() => handleProductClick(prod.partNo, prod.id)}
                className="bg-white border border-slate-200 rounded-2xl sm:rounded-3xl p-3 sm:p-4 flex flex-col justify-between sm:hover:border-red-600 sm:hover:shadow-xl transition-all duration-300 sm:hover:-translate-y-1.5 cursor-pointer group space-y-2.5 relative overflow-hidden h-full w-full max-w-[215px] sm:max-w-[245px] lg:max-w-[255px] mx-auto shadow-xs"
              >
                {/* Top Technical Metadata */}
                <div className="flex items-center justify-between font-sans text-[11px] sm:text-xs pb-2 border-b border-slate-100">
                  <span className="font-extrabold text-red-600 uppercase tracking-wide truncate">{prod.brand}</span>
                  <div className="flex items-center gap-1 shrink-0">
                    <span className="w-1.5 h-2.5 bg-red-600 rounded-full" />
                    <span className="font-mono font-bold text-slate-900 tracking-wider text-[11px] sm:text-xs">{prod.partNo}</span>
                  </div>
                </div>

                {/* Dedicated Product Photography Visual Area: Proportionally enlarged vertical container */}
                <div className="aspect-[3/4] max-h-52 sm:max-h-60 lg:max-h-64 bg-slate-50/80 border border-slate-200/80 rounded-xl sm:rounded-2xl p-2 flex items-center justify-center relative overflow-hidden shadow-inner">
                  <img
                    src={prod.imageUrl}
                    alt={prod.name}
                    className="max-h-full max-w-full object-contain scale-[1.3] sm:scale-[1.25] sm:group-hover:scale-[1.32] transition-transform duration-300 drop-shadow-sm"
                    loading="lazy"
                  />
                </div>

                {/* Product Details */}
                <div className="pt-2 border-t border-slate-100">
                  <div className="space-y-0.5 text-left min-w-0">
                    <h3 className="text-xs sm:text-sm font-black text-slate-900 uppercase font-heading tracking-tight sm:group-hover:text-red-600 transition-colors leading-tight truncate">
                      {prod.name}
                    </h3>
                    <p className="text-[10px] sm:text-xs text-slate-500 font-sans font-medium truncate">
                      {prod.category}
                    </p>
                  </div>
                </div>

              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Common View Products Button: Pushed down */}
        <ScrollReveal direction="up" delay={500}>
          <div className="text-center flex justify-center pt-4 sm:pt-6 lg:pt-7">
            <button
              onClick={() => {
                if (setActiveTab) setActiveTab('products');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="cursor-pointer px-8 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-mono font-bold text-xs uppercase tracking-wider rounded-full shadow-md hover:shadow-lg transition-all transform hover:scale-[1.03] active:scale-[0.98] flex items-center gap-2.5 group border border-slate-700"
            >
              <span>VIEW ALL PRODUCTS</span>
              <ArrowRight className="w-4 h-4 text-red-500 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
