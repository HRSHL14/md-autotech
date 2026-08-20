/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HeroVideoBanner from './components/HeroVideoBanner';
import SuspensionOverview from './components/SuspensionOverview';
import BrandLogoMarquee from './components/BrandLogoMarquee';
import CorporateVisionMission from './components/CorporateVisionMission';
import FindYourPart from './components/FindYourPart';
import B2BPartnersSection from './components/B2BPartnersSection';
import ProductCatalog from './components/ProductCatalog';
import QualityAssurance from './components/QualityAssurance';
import ManufacturingCapabilities from './components/ManufacturingCapabilities';
import AboutUs from './components/AboutUs';
import QuoteBuilder from './components/QuoteBuilder';
import { PRODUCTS } from './data';
import { Product } from './types';
import { X } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quoteModalProduct, setQuoteModalProduct] = useState<string>('');
  const [quoteModalBusinessType, setQuoteModalBusinessType] = useState<string>('Dealer');

  // Handle mobile hardware back button and browser history
  useEffect(() => {
    // Set initial history state
    if (!window.history.state) {
      window.history.replaceState({ tab: 'home' }, '', '#home');
    }

    const handlePopState = (e: PopStateEvent) => {
      // If modal is open, back button closes modal first
      if (quoteModalOpen) {
        setQuoteModalOpen(false);
        return;
      }
      
      // Navigate directly to home tab and scroll to absolute top (Hero Section start)
      setActiveTab('home');
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && quoteModalOpen) {
        setQuoteModalOpen(false);
      }
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [quoteModalOpen]);

  const handleTabChange = (tab: string) => {
    if (tab !== activeTab) {
      window.history.pushState({ tab }, '', `#${tab}`);
      setActiveTab(tab);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenQuoteModal = (productName?: string, businessType?: string) => {
    if (productName) setQuoteModalProduct(productName);
    else setQuoteModalProduct('');
    if (businessType) setQuoteModalBusinessType(businessType);
    else setQuoteModalBusinessType('Dealer');
    setQuoteModalOpen(true);
  };

  const handleSelectProductFromFitment = (product: Product) => {
    handleTabChange('products');
  };

  return (
    <div className="min-h-screen w-full bg-white text-slate-900 font-sans flex flex-col justify-between selection:bg-red-600 selection:text-white" id="mdautotech-portal">
      
      {/* 1. Global Navigation Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={handleTabChange}
        onOpenQuoteModal={() => handleOpenQuoteModal()}
      />

      {/* 2. Main Content Container */}
      <main className="flex-grow w-full">
        
        {/* TAB 1: HOME (B2B Landing & Manufacturer Portfolio) */}
        {activeTab === 'home' && (
          <div className="space-y-0 w-full" id="home-tab">
            {/* Hero Section */}
            <HeroVideoBanner
              setActiveTab={handleTabChange}
              onOpenQuoteModal={() => handleOpenQuoteModal()}
            />

            {/* B2B Target Audience & Trade Section */}
            <B2BPartnersSection
              setActiveTab={handleTabChange}
              onOpenQuoteModal={(bType) => handleOpenQuoteModal(undefined, bType)}
            />

            {/* Exploded Suspension Technical Architecture & Overview */}
            <SuspensionOverview
              setActiveTab={handleTabChange}
              onOpenQuoteModal={() => handleOpenQuoteModal()}
            />

            {/* Featured Product Range Homepage Preview */}
            <FindYourPart
              setActiveTab={handleTabChange}
              onSelectProduct={handleSelectProductFromFitment}
              onOpenQuoteModal={(prodName) => handleOpenQuoteModal(prodName)}
            />

            {/* Brand Logos Infinite Sliding Marquee */}
            <BrandLogoMarquee />

            {/* Corporate Vision & Mission Section */}
            <CorporateVisionMission />
          </div>
        )}

        {/* TAB 2: PRODUCTS CATALOGUE */}
        {activeTab === 'products' && (
          <div className="max-w-[1440px] mx-auto px-4 sm:px-8 py-6">
            <ProductCatalog
              onOpenQuoteModal={(prodName) => handleOpenQuoteModal(prodName)}
            />
          </div>
        )}

        {/* TAB 4: QUALITY ASSURANCE */}
        {activeTab === 'quality' && (
          <div className="max-w-[1440px] mx-auto px-4 sm:px-8 py-6">
            <QualityAssurance />
          </div>
        )}

        {/* TAB 5: MANUFACTURING CAPABILITIES */}
        {activeTab === 'manufacturing' && (
          <div className="max-w-[1440px] mx-auto px-4 sm:px-8 py-6">
            <ManufacturingCapabilities
              onOpenQuoteModal={() => handleOpenQuoteModal()}
            />
          </div>
        )}

        {/* TAB 6: ABOUT US */}
        {activeTab === 'about' && (
          <div className="max-w-[1440px] mx-auto px-4 sm:px-8 py-6">
            <AboutUs />
          </div>
        )}

      </main>

      {/* 3. Global Wholesale Quote Modal */}
      {quoteModalOpen && createPortal(
        <div
          onClick={() => setQuoteModalOpen(false)}
          className="fixed inset-0 z-[100] bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 cursor-pointer"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white border border-slate-200/90 max-w-3xl w-full max-h-[90vh] overflow-y-auto rounded-3xl p-4 sm:p-7 shadow-2xl relative space-y-3 my-auto cursor-default"
          >
            <button
              onClick={() => setQuoteModalOpen(false)}
              className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 px-2.5 sm:px-3.5 py-1 sm:py-1.5 bg-slate-900 hover:bg-slate-800 text-white font-mono font-bold text-[11px] sm:text-xs uppercase tracking-wider rounded-full shadow-md transition-all border border-slate-700 flex items-center gap-1 cursor-pointer z-30 group hover:scale-105"
              aria-label="Close modal"
            >
              <span>CLOSE</span>
              <X className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white group-hover:rotate-90 transition-transform duration-300" />
            </button>

            <QuoteBuilder
              initialProductName={quoteModalProduct}
              initialBusinessType={quoteModalBusinessType}
              onSuccessSubmitted={() => {
                setTimeout(() => setQuoteModalOpen(false), 3000);
              }}
            />
          </div>
        </div>,
        document.body
      )}

      {/* 4. Footer Component */}
      <Footer
        activeTab={activeTab}
        setActiveTab={handleTabChange}
        onOpenQuoteModal={() => handleOpenQuoteModal()}
      />
    </div>
  );
}
