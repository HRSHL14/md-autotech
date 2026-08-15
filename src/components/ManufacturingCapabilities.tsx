/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { MANUFACTURING_CAPABILITIES } from '../data';
import { Factory, Cpu, Wrench, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

interface ManufacturingCapabilitiesProps {
  onOpenQuoteModal: () => void;
}

export default function ManufacturingCapabilities({ onOpenQuoteModal }: ManufacturingCapabilitiesProps) {
  return (
    <div className="w-full space-y-12 bg-slate-100/70 border border-slate-200/80 py-8 sm:py-12 px-4 sm:px-8 max-w-[1440px] mx-auto rounded-3xl mt-20 sm:mt-24 lg:mt-28 mb-8 relative overflow-hidden shadow-xs" id="manufacturing-view">
      {/* Subtle Micro-Dot Matrix Texture */}
      <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#64748b_1.2px,transparent_1.2px)] [background-size:24px_24px]" />

      <div className="relative z-10 space-y-10">
        
        {/* Editorial Header with Upward Scroll Reveal */}
        <ScrollReveal direction="up" delay={0}>
          <div className="border-b border-slate-200 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-3xl">
              <span className="text-xs font-mono font-bold text-red-600 uppercase tracking-widest block mb-2">
                ✦ INDUSTRIAL INFRASTRUCTURE &amp; PRODUCTION
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 uppercase font-heading tracking-tight">
                From Engineering to Production
              </h1>
              <p className="text-slate-600 text-sm sm:text-base mt-2 leading-relaxed font-sans">
                MD AutoTech operates advanced manufacturing infrastructure combining multi-axis CNC spring winding, robotic welding cells, sub-micron bore honing, and computerized dynamometer testing.
              </p>
            </div>

            <button
              onClick={onOpenQuoteModal}
              className="cursor-pointer px-7 py-3.5 bg-gradient-to-r from-red-600 via-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white text-xs font-black uppercase tracking-wider flex items-center gap-2 rounded-full shadow-md hover:shadow-lg transition-all self-start md:self-auto shrink-0 border border-red-500/40"
            >
              <span>GET FACTORY QUOTE</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </button>
          </div>
        </ScrollReveal>

        {/* Capabilities Cards Grid with Staggered Upward Scroll Reveal */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {MANUFACTURING_CAPABILITIES.map((cap, idx) => (
            <ScrollReveal key={cap.id} direction="up" delay={(idx % 2) * 220 + Math.floor(idx / 2) * 120}>
              <div className="min-h-[340px] sm:min-h-[380px] rounded-3xl border border-slate-800 text-white p-7 sm:p-9 transition-all duration-500 transform hover:-translate-y-2 flex flex-col justify-between group relative overflow-hidden shadow-xl hover:shadow-2xl hover:border-red-600">
                
                {/* Full Photo Background */}
                {cap.bgImage && (
                  <img
                    src={cap.bgImage}
                    alt={cap.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-108 transition-all duration-700 pointer-events-none"
                  />
                )}

                {/* Bottom Dark Vignette Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 via-40% to-transparent pointer-events-none" />

                {/* Top Bar: Pill Tag + Icon Button */}
                <div className="flex items-center justify-between relative z-10">
                  <span className="px-4 py-1.5 bg-red-600 text-white font-mono text-xs font-black uppercase tracking-wider rounded-xl shadow-md border border-red-500/50">
                    {cap.category}
                  </span>

                  <div className="w-10 h-10 rounded-full bg-slate-950/60 backdrop-blur-md text-white flex items-center justify-center shadow-md border border-white/20 group-hover:bg-red-600 group-hover:border-red-500 transition-all">
                    <Factory className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Bottom Content Area */}
                <div className="relative z-10 pt-20">
                  <h2 className="text-2xl sm:text-3xl font-black text-white uppercase font-heading leading-tight tracking-tight drop-shadow-md group-hover:text-red-400 transition-colors">
                    {cap.title}
                  </h2>
                </div>

              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Plant Infrastructure Banner with Upward Scroll Reveal */}
        <ScrollReveal direction="up" delay={300}>
          <div className="bg-[#0B1322] border border-[#263448] text-[#F5F7FA] p-8 sm:p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center font-mono relative overflow-hidden group">
            
            {/* Background Image: Springs Production Photo with High Brightness & Visibility */}
            <img
              src="/springs.jpg"
              alt="MD AutoTech Springs Manufacturing Plant Infrastructure"
              className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none scale-105 "
            />

            {/* Light Vignette Overlay for Crisp Readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B1322] via-[#0B1322]/60 via-40% to-transparent pointer-events-none" />

            <div className="lg:col-span-8 space-y-3 relative z-10">
              <div className="text-xs text-red-500 font-bold uppercase tracking-widest">
                ✦ MANUFACTURING FACILITY: NASIK MIDC &amp; PUNE AUTOMOTIVE ZONE
              </div>
              <h3 className="text-2xl sm:text-3xl font-black uppercase text-[#F5F7FA] font-heading leading-tight drop-shadow-md">
                Dedicated OEM &amp; Aftermarket Batch Capacity
              </h3>
              <p className="text-[#AAB4C2] text-xs sm:text-sm leading-relaxed font-sans font-medium">
                Our facilities house automated spring forming equipment, continuous hard-chrome plating lines, vacuum oil dosing stations, and static load testing rigs. Batch orders are processed with standardized quality documentation and protective export-grade shipping master crates.
              </p>
            </div>

            <div className="lg:col-span-4 bg-[#111C2E]/90 backdrop-blur-xs border border-[#263448] p-5 rounded-2xl text-xs space-y-3 shadow-inner relative z-10">
              <div className="flex justify-between border-b border-[#263448] pb-2">
                <span className="text-[#AAB4C2] font-medium">QUALITY FRAMEWORK:</span>
                <span className="text-red-500 font-bold">IATF 16949</span>
              </div>
              <div className="flex justify-between border-b border-[#263448] pb-2">
                <span className="text-[#AAB4C2] font-medium">NASIK FACILITY:</span>
                <span className="text-[#F5F7FA] font-bold">Primary Core Plant</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#AAB4C2] font-medium">PUNE CENTER:</span>
                <span className="text-[#F5F7FA] font-bold">Distribution Hub</span>
              </div>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </div>
  );
}
