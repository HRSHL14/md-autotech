/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Phone, Mail, Menu, X, ShieldCheck, ArrowRight, Lock, MessageSquare, Home } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenQuoteModal?: (productName?: string) => void;
}

export default function Header({ activeTab, setActiveTab, onOpenQuoteModal }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 30);

      // Always visible at the absolute top of the page
      if (currentScrollY <= 60) {
        setIsVisible(true);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling UP -> show header
        setIsVisible(true);
      } else {
        // Scrolling DOWN -> hide header unless mobile menu is open
        if (!mobileMenuOpen) {
          setIsVisible(false);
        }
      }
      lastScrollY = currentScrollY;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (window.scrollY > 60) {
        if (e.clientY <= 90) {
          setIsVisible(true);
        } else if (!mobileMenuOpen) {
          // Hide again when cursor leaves top area
          setIsVisible(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mobileMenuOpen]);

  const navigations = [
    { id: 'home', label: 'HOME' },
    { id: 'products', label: 'PRODUCTS' },
    { id: 'quality', label: 'QUALITY' },
    { id: 'manufacturing', label: 'MANUFACTURING' },
    { id: 'about', label: 'ABOUT US' },
  ];

  const whatsappDirectUrl = `https://wa.me/917030727770?text=${encodeURIComponent(
    'Hello MD Autotech, I’m interested in your two-wheeler suspension range. Please share your product catalogue and pricing details.'
  )}`;

  return (
    <>
      {/* Invisible Top Hover Sensor Zone to trigger Header on mouseover near screen top */}
      <div
        onMouseEnter={() => setIsVisible(true)}
        className="fixed top-0 left-0 right-0 h-6 z-40 pointer-events-auto"
      />

      <header
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => {
          if (window.scrollY > 60 && !mobileMenuOpen) {
            setIsVisible(false);
          }
        }}
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 transform bg-white ${
          isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
        } ${isScrolled ? 'shadow-md border-b border-slate-200' : 'border-b border-slate-200'}`}
        id="app-header"
      >

        {/* MAIN HEADER ROW */}
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 py-2 h-16 sm:h-20 flex items-center justify-between relative">

          {/* Left Mobile Menu Toggle - On far LEFT for Mobile */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-800 hover:text-slate-900 rounded-sm z-10 shrink-0"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Brand Logo - Shifted Left on Mobile */}
          <div
            onClick={() => {
              setActiveTab('home');
              setMobileMenuOpen(false);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center justify-start flex-1 lg:flex-none cursor-pointer select-none group overflow-visible pl-1 sm:pl-2"
            id="brand-logo"
          >
            <img
              src="/md-autotech-logo.png"
              alt="MD AutoTech Automotive Suspension"
              className="h-12 sm:h-18 md:h-24 w-auto object-contain scale-[1.5] sm:scale-125 origin-left"
            />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-2 xl:gap-4" id="desktop-navigation">
            {navigations.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`cursor-pointer px-2.5 py-2 text-[13px] font-extrabold uppercase tracking-wider transition-colors border-b-2 ${
                    isActive
                      ? 'text-red-600 border-red-600 font-black'
                      : 'text-slate-700 hover:text-red-600 border-transparent'
                  }`}
                  id={`nav-${item.id}`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Actions: Get Quotation Button (Desktop) & Mobile Home Icon Button */}
          <div className="flex items-center gap-2 sm:gap-4 shrink-0">
            {/* Desktop GET QUOTATION Button */}
            <button
              onClick={() => {
                if (onOpenQuoteModal) onOpenQuoteModal();
                else setActiveTab('contact');
              }}
              className="hidden sm:flex cursor-pointer px-6 py-2.5 bg-gradient-to-r from-red-600 via-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-extrabold text-xs uppercase tracking-wider rounded-full shadow-md hover:shadow-lg transition-all items-center gap-2 border border-red-500/40"
              id="header-contact-cta"
            >
              <span>GET QUOTATION</span>
              <ArrowRight className="w-3.5 h-3.5 text-white" />
            </button>

            {/* Mobile Home Icon Button */}
            <button
              onClick={() => {
                setActiveTab('home');
                setMobileMenuOpen(false);
                window.scrollTo(0, 0);
                document.documentElement.scrollTop = 0;
                document.body.scrollTop = 0;
              }}
              className="lg:hidden p-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-full shadow-md hover:shadow-lg transition-all shrink-0 z-10 cursor-pointer border border-slate-700 flex items-center justify-center transform active:scale-95"
              aria-label="Home"
              title="Home"
            >
              <Home className="w-5 h-5 text-white stroke-[2.5]" />
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3 shadow-lg">
            <div className="flex flex-col space-y-1 font-mono">
              {navigations.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-left px-3 py-2 text-sm font-extrabold uppercase ${
                    activeTab === item.id ? 'bg-slate-100 text-red-600 font-black' : 'text-slate-800 hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-200 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  if (onOpenQuoteModal) onOpenQuoteModal();
                  else setActiveTab('contact');
                  setMobileMenuOpen(false);
                }}
                className="w-full py-3.5 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-extrabold text-xs uppercase tracking-wider text-center rounded-full shadow-md transition-all"
              >
                GET QUOTATION
              </button>
              <a
                href={whatsappDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 rounded-full shadow-md transition-all"
              >
                <MessageSquare className="w-4 h-4 text-white" />
                LET&apos;S TALK! (WHATSAPP)
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
