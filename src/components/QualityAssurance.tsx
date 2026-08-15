/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ShieldCheck, Award, CheckCircle2, FileText, ArrowRight, Layers } from 'lucide-react';
import { PROCESS_STEPS } from '../data';
import ScrollReveal from './ScrollReveal';

export default function QualityAssurance() {
  return (
    <div className="w-full space-y-12 bg-[#F8FAFC] border border-slate-200 py-8 sm:py-12 px-4 sm:px-8 max-w-[1440px] mx-auto rounded-3xl mt-20 sm:mt-24 lg:mt-28 mb-8 relative overflow-hidden shadow-xs" id="quality-assurance-view">
      {/* Subtle Micro-Dot Texture Grid */}
      <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#64748b_1.2px,transparent_1.2px)] [background-size:24px_24px]" />

      <div className="relative z-10 space-y-10">
        
        {/* 1. Header with Upward Scroll Reveal */}
        <ScrollReveal direction="up" delay={0}>
          <div className="border-b border-slate-200 pb-6 max-w-3xl">
            <span className="text-xs font-mono font-bold text-red-600 uppercase tracking-widest block mb-2">
              ✦ COMPLIANCE &amp; VERIFICATION STANDARDS
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 uppercase font-heading tracking-tight">
              Quality Built Into Every Stage
            </h1>
            <p className="text-slate-600 text-sm sm:text-base mt-2 leading-relaxed font-sans">
              From incoming raw material inspection to 100% computerized end-of-line dynamometer verification, quality is integrated throughout the entire manufacturing process.
            </p>
          </div>
        </ScrollReveal>

        {/* 2. Official Quality Certifications Showcase Section */}
        <ScrollReveal direction="up" delay={150}>
          <div className="space-y-6">
            <div className="border-b border-slate-200 pb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="text-xs font-mono font-bold text-red-600 uppercase tracking-widest block mb-1">
                  ✦ ACCREDITED AUTOMOTIVE QUALITY STANDARDS
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 uppercase font-heading">
                  Official Quality &amp; Compliance Certifications
                </h2>
              </div>
              <span className="px-3.5 py-1.5 bg-emerald-100 border border-emerald-300 text-emerald-800 font-mono text-xs font-bold rounded-full self-start sm:self-auto flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>INTERNATIONALLY AUDITED &amp; COMPLIANT</span>
              </span>
            </div>

            {/* Side-by-Side Large Certificate Showcase Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              
              {/* ISO 9001:2015 Feature Card */}
              <div className="bg-white border-2 border-slate-200 hover:border-red-600 rounded-3xl p-6 sm:p-8 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 bg-red-50 text-red-600 border border-red-200 font-mono text-xs font-bold uppercase rounded-full">
                      ISO 9001:2015 CERTIFIED
                    </span>
                    <span className="text-xs font-mono text-slate-500 font-semibold">
                      QMS STANDARD
                    </span>
                  </div>

                  {/* Large Seal Image Container */}
                  <div className="py-6 px-4 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center group-hover:bg-red-50/30 transition-colors">
                    <img
                      src="/iso.webp"
                      alt="ISO 9001:2015 Quality Management System Official Seal"
                      className="h-32 sm:h-36 w-auto object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div>
                    <h3 className="text-xl font-extrabold text-slate-900 uppercase font-heading">
                      ISO 9001:2015 Quality Management
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed font-sans">
                      Certified international quality management framework governing raw material receiving, precision CNC manufacturing, calibrated gauging, and complete lot traceability.
                    </p>
                  </div>
                </div>

                <div className="pt-4 mt-6 border-t border-slate-100 flex items-center justify-between font-mono text-xs">
                  <span className="text-slate-500 font-medium">SCOPE: Manufacturing Systems</span>
                  <span className="text-emerald-600 font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>VERIFIED</span>
                  </span>
                </div>
              </div>

              {/* IATF 16949:2016 Feature Card */}
              <div className="bg-white border-2 border-slate-200 hover:border-red-600 rounded-3xl p-6 sm:p-8 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 bg-red-50 text-red-600 border border-red-200 font-mono text-xs font-bold uppercase rounded-full">
                      IATF 16949:2016 COMPLIANT
                    </span>
                    <span className="text-xs font-mono text-slate-500 font-semibold">
                      AUTOMOTIVE OEM SPEC
                    </span>
                  </div>

                  {/* Large Seal Image Container */}
                  <div className="py-6 px-4 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center group-hover:bg-red-50/30 transition-colors">
                    <img
                      src="/iatf.webp"
                      alt="IATF 16949 Automotive Quality Management System Official Seal"
                      className="h-32 sm:h-36 w-auto object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div>
                    <h3 className="text-xl font-extrabold text-slate-900 uppercase font-heading">
                      IATF 16949 Automotive Standard
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed font-sans">
                      Global automotive industry quality technical specification emphasizing continuous improvement, defect prevention, and 100% end-of-line dynamometer damping validation.
                    </p>
                  </div>
                </div>

                <div className="pt-4 mt-6 border-t border-slate-100 flex items-center justify-between font-mono text-xs">
                  <span className="text-slate-500 font-medium">SPEC: Automotive Grade Dampers</span>
                  <span className="text-emerald-600 font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>VERIFIED</span>
                  </span>
                </div>
              </div>

            </div>
          </div>
        </ScrollReveal>

        {/* 3. 6-Stage Quality Control Pipeline */}
        <div className="space-y-6">
          <ScrollReveal direction="up" delay={200}>
            <div className="border-b border-slate-200 pb-4">
              <h2 className="text-2xl font-black text-slate-900 uppercase font-heading">
                6-Stage Quality Control Pipeline
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
                Sequential quality verification points enforced across raw material receiving, CNC honing, sub-assembly, and final dispatch.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROCESS_STEPS.map((step, idx) => (
              <ScrollReveal key={step.id} direction="up" delay={(idx % 3) * 180 + Math.floor(idx / 3) * 120}>
                <div className="bg-[#111C2E] border border-[#263448] p-7 rounded-3xl space-y-5 hover:border-red-600 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between group relative overflow-hidden h-full">
                  <div className="space-y-3 relative z-10">
                    <div className="flex items-center justify-between">
                      <span className="w-9 h-9 bg-red-600 text-white font-mono font-black text-xs flex items-center justify-center rounded-xl shadow-md">
                        0{step.id}
                      </span>
                      <span className="text-[10px] font-mono font-bold text-[#AAB4C2] uppercase tracking-widest">
                        STAGE {step.id} OF 6
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-black text-[#F5F7FA] uppercase font-heading group-hover:text-red-400 transition-colors leading-tight">
                      {step.title}
                    </h3>

                    <p className="text-[#AAB4C2] text-xs sm:text-sm leading-relaxed font-sans">
                      {step.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#263448] relative z-10 bg-[#0B1322] p-3 rounded-2xl border border-[#263448]">
                    <span className="text-[10px] font-mono text-[#AAB4C2] block uppercase font-semibold">
                      AUDIT / INSPECTION METHOD:
                    </span>
                    <span className="text-xs font-mono font-bold text-emerald-400 block mt-0.5">
                      ✓ {step.inspectionDetail}
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
