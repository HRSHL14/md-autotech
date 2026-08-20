/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Phone, Mail, MapPin, Lock, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  activeTab?: string;
  setActiveTab: (tab: string) => void;
  onOpenQuoteModal: () => void;
}

export default function Footer({ activeTab = 'home', setActiveTab, onOpenQuoteModal }: FooterProps) {
  const quickLinks = [
    { id: 'home', label: 'HOME' },
    { id: 'products', label: 'PRODUCTS' },
    { id: 'quality', label: 'QUALITY' },
    { id: 'manufacturing', label: 'MANUFACTURING' },
    { id: 'about', label: 'ABOUT US' },
  ];

  const officeInfo = {
    title: 'CORPORATE HEAD OFFICE',
    badge: 'Registered Office & Commercial Enquiries',
    address: 'D 207, Roongta Central Park, Behind Tractor House, Dwarka, Nashik - 422001, Maharashtra, India',
    hours: 'Mon – Sat: 9:00 AM – 7:00 PM',
    embedUrl: 'https://maps.google.com/maps?q=19.988019,73.799714&z=15&output=embed',
    directUrl: 'https://maps.google.com/?q=Roongta+Central+Park+Dwarka+Nashik+422001',
  };

  return (
    <footer className="w-full bg-[#0B1322] text-[#AAB4C2] border-t border-[#263448] pt-12 pb-8" id="app-footer">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 space-y-10">

        {/* Top Grid: 3 Symmetrical Equal-Width Columns with Generous Column Spacing */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16 items-stretch">

          {/* Column 1: Contact Info */}
          <div className="space-y-5 text-left flex flex-col justify-between w-full h-full">
            <div className="space-y-4 w-full">
              <h4 className="text-xs font-bold text-[#F5F7FA] uppercase tracking-wider border-b border-[#263448] pb-2 font-mono">
                CONTACT INFO
              </h4>

              <div
                onClick={() => setActiveTab('home')}
                className="cursor-pointer select-none group block w-full"
              >
                <div className="p-3 sm:p-4 bg-white rounded-2xl border border-slate-200 shadow-sm w-full flex items-center justify-center">
                  <img
                    src="/MD AUTOTECH (1).png"
                    alt="MD AutoTech Automotive Suspension"
                    className="h-12 sm:h-14 md:h-20 w-auto object-contain scale-150"
                  />
                </div>
              </div>

              {/* Direct Contact Info Chips */}
              <div className="space-y-3.5 font-sans text-xs w-full flex flex-col">
                {/* Phone Contact Chip */}
                <a
                  href="tel:+917030727770"
                  className="flex items-center justify-between gap-3 px-4 py-3 bg-[#111C2E] hover:bg-[#16253D] border border-[#263448] hover:border-red-500/60 rounded-2xl transition-all duration-300 group shadow-md w-full cursor-pointer hover:-translate-y-0.5 active:scale-[0.99]"
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/25 text-red-500 flex items-center justify-center shrink-0 group-hover:bg-red-600 group-hover:text-white group-hover:border-red-600 transition-all duration-300 shadow-sm">
                      <Phone className="w-4.5 h-4.5" />
                    </div>
                    <div className="flex flex-col text-left min-w-0">
                      <span className="text-[11px] font-sans font-medium text-slate-400">Phone Support</span>
                      <span className="text-sm sm:text-base font-bold text-white font-sans tracking-tight group-hover:text-red-400 transition-colors">+91 70307 27770</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 text-[10px] sm:text-[11px] font-mono font-bold text-red-500 group-hover:text-white bg-red-500/10 group-hover:bg-red-600 px-2.5 py-1 rounded-full border border-red-500/20 transition-all shrink-0">
                    <span>CALL</span>
                    <ArrowUpRight className="w-3 h-3 text-red-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </a>

                {/* Email Contact Chip */}
                <a
                  href="mailto:contact@mdautotech.com"
                  className="flex items-center justify-between gap-3 px-4 py-3 bg-[#111C2E] hover:bg-[#16253D] border border-[#263448] hover:border-red-500/60 rounded-2xl transition-all duration-300 group shadow-md w-full cursor-pointer hover:-translate-y-0.5 active:scale-[0.99]"
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/25 text-red-500 flex items-center justify-center shrink-0 group-hover:bg-red-600 group-hover:text-white group-hover:border-red-600 transition-all duration-300 shadow-sm">
                      <Mail className="w-4.5 h-4.5" />
                    </div>
                    <div className="flex flex-col text-left min-w-0">
                      <span className="text-[11px] font-sans font-medium text-slate-400">Email Enquiries</span>
                      <span className="text-xs sm:text-sm font-bold text-white font-sans tracking-tight group-hover:text-red-400 transition-colors truncate">contact@mdautotech.com</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 text-[10px] sm:text-[11px] font-mono font-bold text-red-500 group-hover:text-white bg-red-500/10 group-hover:bg-red-600 px-2.5 py-1 rounded-full border border-red-500/20 transition-all shrink-0">
                    <span>EMAIL</span>
                    <ArrowUpRight className="w-3 h-3 text-red-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </a>
              </div>
            </div>

            {/* WhatsApp CTA Button */}
            <div className="pt-2 w-full">
              <a
                href={`https://wa.me/917030727770?text=${encodeURIComponent('Hello MD Autotech, I’m interested in your two-wheeler suspension range. Please share your product catalogue and pricing details.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-mono text-xs font-black uppercase tracking-wider px-5 py-3 rounded-2xl transition-all shadow-lg border border-emerald-500/40 group w-full"
              >
                <svg className="w-4 h-4 fill-current text-white group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.157 4.228 4.305-1.129z" />
                </svg>
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Column 2: Office Address Details */}
          <div className="space-y-5 font-mono text-left flex flex-col justify-between w-full h-full">
            <div className="space-y-4 w-full">
              <h4 className="text-xs font-bold text-[#F5F7FA] uppercase tracking-wider border-b border-[#263448] pb-2">
                OFFICE ADDRESS
              </h4>

              {/* Office Location Card */}
              <div className="p-4.5 sm:p-5 rounded-2xl space-y-3.5 border text-left w-full bg-[#111C2E] border-[#263448] shadow-md">
                <div className="flex items-center justify-between font-mono text-[11px]">
                  <span className="font-extrabold uppercase font-heading text-red-500">
                    {officeInfo.title}
                  </span>
                  <div className="flex items-center gap-1 text-[10px] font-bold text-red-500 shrink-0">
                    <MapPin className="w-3 h-3" />
                    <span>Nashik, MH</span>
                  </div>
                </div>

                <div className="text-[10px] font-mono text-slate-400 uppercase font-bold">
                  {officeInfo.badge}
                </div>

                <div className="text-[#F5F7FA] font-sans text-xs sm:text-sm font-medium leading-relaxed">
                  {officeInfo.address}
                </div>

                <div className="pt-2 border-t border-[#263448] flex items-center justify-between text-[11px] font-mono">
                  <span className="text-slate-400 text-[10px]">{officeInfo.hours}</span>
                  <a
                    href={officeInfo.directUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-400 hover:text-white flex items-center gap-1 font-bold transition-colors"
                  >
                    <span>Directions</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: Office Google Map */}
          <div className="space-y-4 font-mono text-left flex flex-col justify-between w-full h-full">
            <div className="space-y-4 w-full flex-1 flex flex-col">
              <h4 className="text-xs font-bold text-[#F5F7FA] uppercase tracking-wider border-b border-[#263448] pb-2 flex items-center justify-between">
                <span>OFFICE MAP</span>
                <span className="text-[10px] text-red-400 font-normal truncate max-w-[140px]">Dwarka, Nashik</span>
              </h4>

              {/* Map Container Matching Column Height */}
              <div className="bg-[#111C2E] rounded-2xl overflow-hidden border border-[#263448] shadow-md flex-1 min-h-[220px] w-full relative group">
                <iframe
                  title="Google Map - MD AutoTech Office"
                  src={officeInfo.embedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full grayscale-[10%] contrast-[105%] hover:grayscale-0 transition-all duration-300"
                />
                <a
                  href={officeInfo.directUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-3 right-3 bg-red-600 hover:bg-slate-800 text-white font-mono text-[10px] font-bold px-3 py-1.5 rounded-full border border-white/20 shadow-md backdrop-blur-md transition-all flex items-center gap-1"
                >
                  <span>Open in Maps</span>
                  <ArrowUpRight className="w-3 h-3 text-white" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Quick Links Navigation Bar matching header style with active red underline */}
        <div className="pt-8 border-t border-[#263448] flex flex-col items-center gap-4">
          <nav className="flex flex-wrap items-center justify-center gap-6 sm:gap-12">
            {quickLinks.map((link) => {
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => {
                    setActiveTab(link.id);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`relative pb-2.5 text-xs sm:text-sm font-heading font-extrabold uppercase tracking-widest transition-colors group cursor-pointer ${
                    isActive ? 'text-red-500 font-black' : 'text-[#F5F7FA] hover:text-red-400'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-0 right-0 h-0.5 bg-red-600 transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </button>
              );
            })}
          </nav>
        </div>

        {/* Bottom Bar: Copyright */}
        <div className="pt-6 border-t border-[#263448] text-center font-mono text-[11px] text-[#AAB4C2]">
          © {new Date().getFullYear()} MD AutoTech Industrial Group. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}
