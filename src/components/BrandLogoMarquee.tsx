/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

export default function BrandLogoMarquee() {
  const brandLogos = [
    { name: 'Hero MotoCorp', logo: '/logos/hero.svg', tag: 'Hero Motorcycles & Scooters' },
    { name: 'Honda Motorcycles', logo: '/logos/honda.svg', tag: 'Honda Shine, Dream & Activa' },
    { name: 'Bajaj Auto', logo: '/logos/bajaj.svg', tag: 'Bajaj Platina & Comfortec' },
    { name: 'TVS Motor Company', logo: '/logos/tvs.svg', tag: 'TVS Star City+ Series' },
    { name: 'Yamaha India', logo: '/logos/yamaha.svg', tag: 'Yamaha Crux & RX100' },
    { name: 'MD AutoTech', logo: '/md-autotech-logo.png', tag: 'OEM Dampers & Shocks' },
  ];

  // Duplicate for seamless infinite loop across 3 rows
  const row1 = [...brandLogos, ...brandLogos, ...brandLogos];
  const row2 = [...brandLogos].reverse().concat([...brandLogos].reverse(), [...brandLogos].reverse());
  const row3Base = [brandLogos[2], brandLogos[3], brandLogos[4], brandLogos[5], brandLogos[0], brandLogos[1]];
  const row3 = [...row3Base, ...row3Base, ...row3Base];

  return (
    <section className="w-full bg-slate-950 text-white py-4 sm:py-8 lg:py-16 h-screen flex flex-col justify-center border-y border-slate-900 relative overflow-hidden" id="brand-sliding-marquee">
      {/* Dark Midnight Abyss Ambient Background & Red Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/90 to-slate-950 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Header */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 mb-8 sm:mb-10 lg:mb-12 text-center relative z-10 space-y-1.5">
        <span className="text-xs font-mono font-bold text-red-500 uppercase tracking-widest block">
          ✦ BUILT AROUND EVERY PLATFORM
        </span>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white uppercase tracking-tight font-heading">
          Supported <span className="text-red-500">Two-Wheeler Brands</span> &amp; Standards
        </h2>
        <p className="text-slate-400 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed font-sans">
          MD AutoTech manufactures precision replacement shock absorbers and front fork assemblies for all major Indian two-wheeler platforms.
        </p>
      </div>

      {/* 3 Infinite Sliding Marquee Rows */}
      <div className="space-y-3.5 sm:space-y-4.5 relative z-10">
        
        {/* Row 1: Sliding Left */}
        <div className="w-full overflow-hidden flex select-none py-0.5">
          <div className="animate-marquee-left flex items-center gap-3 sm:gap-6 shrink-0">
            {row1.map((item, idx) => {
              const isMDLogo = item.name === 'MD AutoTech';
              return (
                <div
                  key={`r1-${idx}`}
                  className="bg-slate-900/90 border border-white/20 hover:border-white/50 rounded-2xl p-2.5 sm:p-3.5 px-4 sm:px-5 flex flex-col sm:flex-row items-center gap-2 sm:gap-3.5 shrink-0 text-center sm:text-left shadow-[0_0_15px_rgba(255,255,255,0.08)] hover:shadow-[0_0_22px_rgba(255,255,255,0.2)] transition-all"
                >
                  <div className="p-1.5 bg-white rounded-xl border border-slate-200/90 flex items-center justify-center shrink-0">
                    <div className={`flex items-center justify-center overflow-visible ${isMDLogo ? 'h-6 sm:h-8 w-22 sm:w-28' : 'h-5 sm:h-7 w-16 sm:w-20'}`}>
                      <img
                        src={item.logo}
                        alt={`${item.name} Logo`}
                        className={`max-h-full max-w-full w-auto object-contain ${isMDLogo ? 'scale-[1.25]' : ''}`}
                      />
                    </div>
                  </div>
                  <div className="border-t sm:border-t-0 sm:border-l border-slate-800 pt-1 sm:pt-0 sm:pl-3 w-full sm:w-auto">
                    <div className="font-heading font-black text-xs sm:text-sm text-white uppercase tracking-tight whitespace-nowrap">
                      {item.name}
                    </div>
                    <div className="font-mono text-[9px] sm:text-[10px] text-slate-400 font-semibold uppercase tracking-wider whitespace-nowrap">
                      {item.tag}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Row 2: Sliding Right */}
        <div className="w-full overflow-hidden flex select-none py-0.5">
          <div className="animate-marquee-right flex items-center gap-3 sm:gap-6 shrink-0">
            {row2.map((item, idx) => {
              const isMDLogo = item.name === 'MD AutoTech';
              return (
                <div
                  key={`r2-${idx}`}
                  className="bg-slate-900/90 border border-white/20 hover:border-white/50 rounded-2xl p-2.5 sm:p-3.5 px-4 sm:px-5 flex flex-col sm:flex-row items-center gap-2 sm:gap-3.5 shrink-0 text-center sm:text-left shadow-[0_0_15px_rgba(255,255,255,0.08)] hover:shadow-[0_0_22px_rgba(255,255,255,0.2)] transition-all"
                >
                  <div className="p-1.5 bg-white rounded-xl border border-slate-200/90 flex items-center justify-center shrink-0">
                    <div className={`flex items-center justify-center overflow-visible ${isMDLogo ? 'h-6 sm:h-8 w-22 sm:w-28' : 'h-5 sm:h-7 w-16 sm:w-20'}`}>
                      <img
                        src={item.logo}
                        alt={`${item.name} Logo`}
                        className={`max-h-full max-w-full w-auto object-contain ${isMDLogo ? 'scale-[1.25]' : ''}`}
                      />
                    </div>
                  </div>
                  <div className="border-t sm:border-t-0 sm:border-l border-slate-800 pt-1 sm:pt-0 sm:pl-3 w-full sm:w-auto">
                    <div className="font-heading font-black text-xs sm:text-sm text-white uppercase tracking-tight whitespace-nowrap">
                      {item.name}
                    </div>
                    <div className="font-mono text-[9px] sm:text-[10px] text-slate-400 font-semibold uppercase tracking-wider whitespace-nowrap">
                      {item.tag}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Row 3: Sliding Left (Offset Order) */}
        <div className="w-full overflow-hidden flex select-none py-0.5">
          <div className="animate-marquee-left flex items-center gap-3 sm:gap-6 shrink-0">
            {row3.map((item, idx) => {
              const isMDLogo = item.name === 'MD AutoTech';
              return (
                <div
                  key={`r3-${idx}`}
                  className="bg-slate-900/90 border border-white/20 hover:border-white/50 rounded-2xl p-2.5 sm:p-3.5 px-4 sm:px-5 flex flex-col sm:flex-row items-center gap-2 sm:gap-3.5 shrink-0 text-center sm:text-left shadow-[0_0_15px_rgba(255,255,255,0.08)] hover:shadow-[0_0_22px_rgba(255,255,255,0.2)] transition-all"
                >
                  <div className="p-1.5 bg-white rounded-xl border border-slate-200/90 flex items-center justify-center shrink-0">
                    <div className={`flex items-center justify-center overflow-visible ${isMDLogo ? 'h-6 sm:h-8 w-22 sm:w-28' : 'h-5 sm:h-7 w-16 sm:w-20'}`}>
                      <img
                        src={item.logo}
                        alt={`${item.name} Logo`}
                        className={`max-h-full max-w-full w-auto object-contain ${isMDLogo ? 'scale-[1.25]' : ''}`}
                      />
                    </div>
                  </div>
                  <div className="border-t sm:border-t-0 sm:border-l border-slate-800 pt-1 sm:pt-0 sm:pl-3 w-full sm:w-auto">
                    <div className="font-heading font-black text-xs sm:text-sm text-white uppercase tracking-tight whitespace-nowrap">
                      {item.name}
                    </div>
                    <div className="font-mono text-[9px] sm:text-[10px] text-slate-400 font-semibold uppercase tracking-wider whitespace-nowrap">
                      {item.tag}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
