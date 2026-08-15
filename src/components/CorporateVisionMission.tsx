/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import ScrollReveal from './ScrollReveal';

export default function CorporateVisionMission() {
  return (
    <section className="w-full bg-[#F8FAFC] border-b border-slate-200 py-12 sm:py-16 lg:py-24 min-h-[85vh] lg:h-screen flex flex-col justify-center relative overflow-hidden" id="corporate-vision-mission">
      {/* Rich Automotive Micro-Dot Grid & Technical Grid Texture */}
      <div className="absolute inset-0 opacity-25 pointer-events-none bg-[radial-gradient(#64748b_1.2px,transparent_1.2px)] [background-size:24px_24px]" />
      <div className="absolute inset-0 opacity-15 pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 space-y-8 sm:space-y-10 lg:space-y-14 relative z-10 w-full">
        
        {/* Two-Column Editorial Composition: Vision (Left) & Mission (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-stretch">
          
          {/* LEFT — VISION CARD */}
          <ScrollReveal direction="up" delay={180}>
            <div className="p-7 sm:p-9 lg:p-12 min-h-[250px] sm:min-h-[280px] bg-white border border-slate-200 border-l-4 border-l-red-600 rounded-3xl shadow-md hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col justify-between space-y-5 sm:space-y-6 relative overflow-hidden group h-full">
              <div className="absolute -bottom-6 -right-6 text-slate-100 font-heading font-black text-6xl sm:text-7xl select-none pointer-events-none opacity-40 group-hover:text-red-50 transition-colors">
                VISION
              </div>

              <div className="flex items-center gap-2.5 relative z-10">
                <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse" />
                <span className="text-xs font-mono font-black text-red-600 tracking-widest uppercase">
                  OUR VISION
                </span>
              </div>
              
              <h2 className="text-base sm:text-2xl lg:text-3xl font-extrabold text-slate-900 leading-relaxed sm:leading-tight font-heading tracking-tight relative z-10 my-auto">
                To be a trusted Indian leader in automotive suspension, delivering innovation, reliability, and confidence on every ride.
              </h2>
            </div>
          </ScrollReveal>

          {/* RIGHT — MISSION CARD */}
          <ScrollReveal direction="up" delay={400}>
            <div className="p-7 sm:p-9 lg:p-12 min-h-[250px] sm:min-h-[280px] bg-white border border-slate-200 border-l-4 border-l-slate-900 rounded-3xl shadow-md hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col justify-between space-y-5 sm:space-y-6 relative overflow-hidden group h-full">
              <div className="absolute -bottom-6 -right-6 text-slate-100 font-heading font-black text-6xl sm:text-7xl select-none pointer-events-none opacity-40 group-hover:text-slate-100 transition-colors">
                MISSION
              </div>

              <div className="flex items-center gap-2.5 relative z-10">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-900" />
                <span className="text-xs font-mono font-black text-slate-900 tracking-widest uppercase">
                  OUR MISSION
                </span>
              </div>
              
              <p className="text-sm sm:text-base lg:text-xl font-medium text-slate-700 leading-relaxed font-sans relative z-10 my-auto">
                To manufacture high-quality, durable, and innovative shock absorbers through continuous R&amp;D, advanced manufacturing, and uncompromising quality—while creating lasting value for our customers and partners.
              </p>
            </div>
          </ScrollReveal>

        </div>

        {/* Bottom Brand Statement Banner */}
        <ScrollReveal direction="up" delay={400}>
          <div className="pt-6 sm:pt-10 border-t border-slate-200/80 flex flex-col items-center justify-center text-center space-y-3">
            {/* Clean MD AUTOTECH Text Header */}
            <span className="text-xs font-mono font-black tracking-widest text-slate-900 uppercase block">
              MD AUTOTECH
            </span>

            {/* Flanked Tagline */}
            <div className="flex items-center justify-center gap-4 w-full max-w-sm sm:max-w-md mx-auto">
              <div className="h-[1px] bg-slate-300 flex-1" />
              <p className="text-lg sm:text-2xl font-heading font-extrabold text-slate-900 italic tracking-tight whitespace-nowrap">
                Ride with Confidence.
              </p>
              <div className="h-[1px] bg-slate-300 flex-1" />
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
