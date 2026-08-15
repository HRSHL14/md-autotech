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
  // Active manufacturing site selection for Google Maps IFrame in Footer
  const [activeMapSite, setActiveMapSite] = useState<'nasik' | 'pune'>('nasik');

  const quickLinks = [
    { id: 'home', label: 'HOME' },
    { id: 'products', label: 'PRODUCTS' },
    { id: 'quality', label: 'QUALITY' },
    { id: 'manufacturing', label: 'MANUFACTURING' },
    { id: 'about', label: 'ABOUT US' },
  ];

  const mapsData = {
    nasik: {
      id: 'nasik',
      name: 'NASIK CORE PLANT (HQ)',
      badge: 'Main Manufacturing Plant & Corporate HQ',
      address: 'E 31, MIDC Satpur, Nasik - 422007, Maharashtra, India',
      embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.2016209424785!2d73.74230107593649!3d19.99986348140306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb073c683515%3A0xb3bd88a6d68b9cf2!2sMIDC%20Satpur%2C%20Nashik%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1713000000000!5m2!1sen!2sin',
      directUrl: 'https://maps.google.com/?q=MIDC+Satpur+Nashik+Maharashtra',
    },
    pune: {
      id: 'pune',
      name: 'REGIONAL FACILITY (PUNE)',
      badge: 'Automotive Distribution & Assembly Center',
      address: 'Plot 42, MIDC Automotive Zone, Bhosari, Pune - 411026, MH, India',
      embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.702951717316!2d73.84157147590899!3d18.632402482482322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b842df082729%3A0x6b866c1b3fbc5bf2!2sMIDC%20Bhosari%2C%20Pimpri-Chinchwad%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1713000000000!5m2!1sen!2sin',
      directUrl: 'https://maps.google.com/?q=MIDC+Bhosari+Pune+Maharashtra',
    },
  };

  const currentMap = mapsData[activeMapSite];

  return (
    <footer className="w-full bg-[#0B1322] text-[#AAB4C2] border-t border-[#263448] pt-12 pb-8" id="app-footer">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 space-y-10">

        {/* Top Grid: Left (Logo & Contact), Middle (Manufacturing Sites Stacked), Right (Square Google Map IFrame) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Column 1: Brand Info & Direct Contacts (Left 4 cols) */}
          <div className="lg:col-span-4 space-y-4 text-center lg:text-left flex flex-col items-center lg:items-start w-full">
            <h4 className="text-s font-bold text-[#F5F7FA] uppercase tracking-wider border-b border-[#263448] pb-2 w-full font-mono">
              CONTACT INFO
            </h4>

            <div
              onClick={() => setActiveTab('home')}
              className="inline-block cursor-pointer select-none group"
            >
              <div className="p-3 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm inline-block">
                <img
                  src="/md-autotech-logo.png"
                  alt="MD AutoTech Automotive Suspension"
                  className="h-14 sm:h-18 md:h-20 w-auto object-contain"
                />
              </div>
            </div>

            {/* Direct Contact Info & WhatsApp CTA */}
            <div className="space-y-3 font-mono text-xs pt-1 w-full flex flex-col items-center lg:items-start">
              <a
                href="tel:+917030727770"
                className="flex items-center justify-center lg:justify-start gap-2.5 text-[#AAB4C2] hover:text-[#F5F7FA] transition-colors"
              >
                <div className="w-7 h-7 bg-[#111C2E] border border-[#263448] rounded-xs flex items-center justify-center text-red-500 shrink-0">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span>Phone: <strong className="text-[#F5F7FA] font-bold">+91 70307 27770</strong></span>
              </a>

              <a
                href="mailto:contact@mdautotech.com"
                className="flex items-center justify-center lg:justify-start gap-2.5 text-[#AAB4C2] hover:text-[#F5F7FA] transition-colors"
              >
                <div className="w-7 h-7 bg-[#111C2E] border border-[#263448] rounded-xs flex items-center justify-center text-red-500 shrink-0">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <span>Email: <strong className="text-[#F5F7FA] font-bold">contact@mdautotech.com</strong></span>
              </a>

              <div className="pt-1">
                <a
                  href={`https://wa.me/917030727770?text=${encodeURIComponent('Hello MD Autotech, I’m interested in your two-wheeler suspension range. Please share your product catalogue and pricing details.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-mono text-xs font-black uppercase tracking-wider px-5 py-2.5 rounded-full transition-all shadow-lg border border-emerald-500/40 group"
                >
                  <svg className="w-4 h-4 fill-current text-white group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.157 4.228 4.305-1.129z" />
                  </svg>
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Industrial Manufacturing Sites Stacked (Middle 4 cols) */}
          <div className="lg:col-span-4 space-y-3 font-mono text-center lg:text-left">
            <h4 className="text-xs font-bold text-[#F5F7FA] uppercase tracking-wider border-b border-[#263448] pb-2">
              INDUSTRIAL FACILITIES
            </h4>

            {/* Clickable Manufacturing Site Cards Stacked One Below Other */}
            <div className="flex flex-col gap-3 text-xs">
              {[mapsData.nasik, mapsData.pune].map((site) => {
                const isActive = activeMapSite === site.id;
                return (
                  <div
                    key={site.id}
                    onClick={() => setActiveMapSite(site.id as 'nasik' | 'pune')}
                    className={`cursor-pointer p-3.5 rounded-2xl space-y-1.5 transition-all border text-left ${
                      isActive
                        ? 'bg-[#111C2E] border-red-600 shadow-md ring-1 ring-red-600/30'
                        : 'bg-[#111C2E]/60 border-[#263448] hover:border-slate-600 hover:bg-[#111C2E]'
                    }`}
                  >
                    <div className="flex items-center justify-between font-mono text-[11px]">
                      <span className={`font-extrabold uppercase font-heading ${isActive ? 'text-red-500' : 'text-[#F5F7FA]'}`}>
                        {site.name}
                      </span>
                      <div className="flex items-center gap-1 text-[10px] font-bold text-red-500 shrink-0">
                        <MapPin className="w-3 h-3" />
                        <span>{isActive ? 'Active' : 'Select'}</span>
                      </div>
                    </div>
                    <div className="text-[#AAB4C2] font-sans text-xs leading-relaxed">{site.address}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Column 3: Square Embedded Google Maps IFrame (Right 4 cols) */}
          <div className="lg:col-span-4 space-y-3 font-mono text-center lg:text-left">
            <h4 className="text-xs font-bold text-[#F5F7FA] uppercase tracking-wider border-b border-[#263448] pb-2 flex items-center justify-between">
              <span>FACILITY MAP</span>
              <span className="text-[10px] text-red-400 font-normal truncate max-w-[140px]">{currentMap.name}</span>
            </h4>

            {/* Square Map Container */}
            <div className="bg-[#111C2E] rounded-xl overflow-hidden border border-[#263448] shadow-md aspect-square max-h-[250px] w-full mx-auto relative group">
              <iframe
                title={`Google Map - ${currentMap.name}`}
                src={currentMap.embedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale-[10%] contrast-[105%] hover:grayscale-0 transition-all duration-300"
              />
              <a
                href={currentMap.directUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-2.5 right-2.5 bg-[#0B1322]/90 text-red-500 border border-[#263448] hover:border-red-600 px-2.5 py-1 text-[11px] font-mono font-bold rounded-xs flex items-center gap-1 transition-all shadow-md"
              >
                <span>Directions</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
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
