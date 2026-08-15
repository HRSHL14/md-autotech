/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Award, Factory, Users, ShieldCheck, ArrowRight, Building } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function AboutUs() {
  const timeline = [
    {
      year: '1979',
      shortYear: "'79",
      title: 'FOUNDATION',
      description: 'Enterprise established by Mr. K J Patil, a Mechanical Engineer focused on precision automotive component manufacturing.',
    },
    {
      year: '1995',
      shortYear: "'95",
      title: 'INDUSTRIAL EXPANSION',
      description: 'Expanded production to heavy-duty suspension dampers and specialized fluor-elastomer fluid seal components.',
    },
    {
      year: '2010',
      shortYear: "'10",
      title: 'AUTOMATED INFRASTRUCTURE',
      description: 'Commissioned CNC spring coiling formers and computerized hydraulic dynamometer testing rigs.',
    },
    {
      year: 'PRESENT',
      shortYear: "'26",
      title: 'MODERN B2B SUPPLY NETWORK',
      description: 'Operating across western India facilities serving spare-parts dealers, distributors, and aftermarket automotive trade.',
    },
  ];

  return (
    <div className="w-full space-y-12 bg-slate-100/70 border border-slate-200/80 py-8 sm:py-12 px-4 sm:px-8 max-w-[1440px] mx-auto rounded-3xl mt-20 sm:mt-24 lg:mt-28 mb-8 relative overflow-hidden shadow-xs" id="about-us-view">
      {/* Subtle Micro-Dot Grid Texture */}
      <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#64748b_1.2px,transparent_1.2px)] [background-size:24px_24px]" />

      <div className="relative z-10 space-y-10">
        
        {/* Editorial Header with Upward Scroll Reveal */}
        <ScrollReveal direction="up" delay={0}>
          <div className="border-b border-slate-200 pb-6 max-w-3xl">
            <span className="text-xs font-mono font-bold text-red-600 uppercase tracking-widest block mb-2">
              ✦ MD AUTOTECH CORPORATE HERITAGE &amp; VALUES
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 uppercase font-heading tracking-tight">
              Precision Manufacturing Heritage
            </h1>
            <p className="text-slate-600 text-sm sm:text-base mt-2 leading-relaxed font-sans">
              MD AutoTech represents decades of engineering dedication in heavy-duty shock absorbers, front forks, and precision oil seal components.
            </p>
          </div>
        </ScrollReveal>

        {/* Origin Story Cards Grid with Staggered Upward Scroll Reveal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          <div className="lg:col-span-7">
            <ScrollReveal direction="up" delay={150}>
              <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border border-slate-800 text-white p-8 sm:p-10 rounded-3xl shadow-xl space-y-6 flex flex-col justify-between relative overflow-hidden h-full">
                <div className="space-y-4 relative z-10">
                  <span className="text-xs font-mono font-bold text-red-400 uppercase tracking-widest block">
                    OUR ORIGIN STORY
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-white uppercase font-heading leading-tight">
                    Founded on Mechanical Engineering Excellence
                  </h2>

                  <p className="text-slate-300 text-sm leading-relaxed font-sans">
                    <strong>MD AutoTech</strong> was established under an industrial group founded by a Mechanical Engineer with a commitment to localized precision manufacturing.
                  </p>

                  <p className="text-slate-300 text-sm leading-relaxed font-sans">
                    From early production beginnings, the company has systematically grown its manufacturing capabilities across Western India. Today, our technical operations encompass dedicated machining, spring forming, robotic welding, and dynamic shock absorber testing.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-800 text-xs font-mono relative z-10">
                  <div className="bg-slate-900/90 p-4 border border-slate-800 rounded-2xl shadow-inner">
                    <span className="text-slate-400 block text-[10px] uppercase font-bold">CORE PHILOSOPHY</span>
                    <span className="text-white font-bold block mt-1">Experience. Execution. Excellence.</span>
                  </div>
                  <div className="bg-slate-900/90 p-4 border border-slate-800 rounded-2xl shadow-inner">
                    <span className="text-slate-400 block text-[10px] uppercase font-bold">QUALITY FRAMEWORK</span>
                    <span className="text-red-400 font-bold block mt-1">ISO 9001:2015 &amp; IATF 16949</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-5">
            <ScrollReveal direction="up" delay={300}>
              <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white p-8 sm:p-10 rounded-3xl flex flex-col justify-between space-y-6 font-mono shadow-xl border border-slate-800 relative overflow-hidden h-full">
                <div className="space-y-4 relative z-10">
                  <span className="text-xs text-red-400 font-bold uppercase tracking-widest block">
                    CORPORATE VALUES
                  </span>
                  <div className="text-xl sm:text-2xl font-black uppercase text-white font-heading leading-tight">
                    &ldquo;Reliable products built on verified engineering standards.&rdquo;
                  </div>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-sans">
                    Our engineering focus prioritizes structural durability, multi-lip fluid sealing, and consistent damping performance under heavy payload road conditions.
                  </p>
                </div>

                <div className="p-5 bg-slate-900 border border-slate-800 rounded-2xl text-xs space-y-3 relative z-10 shadow-inner">
                  <div className="flex justify-between border-b border-slate-800 pb-2">
                    <span className="text-slate-400">CORE FOCUS:</span>
                    <span className="text-red-400 font-bold">Two-Wheeler Suspension</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">FACILITIES:</span>
                    <span className="text-white font-bold">Nasik Core Plant &amp; Pune</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>

        {/* Connected Interactive Industrial Timeline */}
        <div className="space-y-8 pt-6">
          <ScrollReveal direction="up" delay={100}>
            <div className="border-b border-slate-200 pb-4">
              <span className="text-xs font-mono font-bold text-red-600 uppercase tracking-widest block mb-1">
                ✦ EVOLUTION &amp; HISTORICAL PROGRESSION
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 uppercase font-heading">
                Industrial Development Milestones
              </h2>
            </div>
          </ScrollReveal>

          {/* Timeline Container with Horizontal Connecting Bar */}
          <div className="relative">
            {/* Horizontal Connecting Progress Line (Visible on Desktop lg+) */}
            <div className="hidden lg:block absolute top-5 left-10 right-10 h-1 bg-slate-300 rounded-full z-0" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative z-10">
              {timeline.map((item, idx) => (
                <ScrollReveal key={idx} direction="up" delay={idx * 180}>
                  <div className="flex flex-col space-y-4 group h-full">
                    {/* Timeline Circular Pulsing Node */}
                    <div className="flex items-center gap-3 lg:flex-col lg:items-start">
                      <div className="w-10 h-10 rounded-full bg-slate-950 border-4 border-white shadow-md text-white font-mono font-black text-xs flex items-center justify-center shrink-0 group-hover:scale-115 group-hover:bg-red-600 transition-all duration-300 z-10">
                        0{idx + 1}
                      </div>
                    </div>

                    {/* Creative Milestone Card */}
                    <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border border-slate-800 text-white rounded-3xl p-6 sm:p-7 space-y-3 hover:border-red-500 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1.5 relative overflow-hidden flex-1 flex flex-col justify-between h-full">
                      {/* Big Soft Gray Watermark Short Year Typography */}
                      <div className="absolute -top-3 -right-2 font-heading font-black text-7xl sm:text-8xl text-slate-400/40 group-hover:text-red-500/30 transition-colors select-none pointer-events-none tracking-tighter leading-none">
                        {item.shortYear}
                      </div>

                      <div className="space-y-2 relative z-10">
                        <div className="text-2xl sm:text-3xl font-black text-red-500 font-mono tracking-tight">
                          {item.year}
                        </div>
                        <h3 className="text-sm sm:text-base font-black text-white uppercase font-heading group-hover:text-red-400 transition-colors leading-tight">
                          {item.title}
                        </h3>
                        <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-sans pt-1">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
