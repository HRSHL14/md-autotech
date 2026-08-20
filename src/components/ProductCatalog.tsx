/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Search, Filter, ArrowRight, CheckCircle2, ChevronRight, Download, X, MessageSquare, Shield } from 'lucide-react';
import { PRODUCTS } from '../data';
import { Product } from '../types';
import ScrollReveal from './ScrollReveal';

interface ProductCatalogProps {
  onOpenQuoteModal: (productName?: string) => void;
  targetProductId?: string | null;
}

export default function ProductCatalog({ onOpenQuoteModal, targetProductId }: ProductCatalogProps) {
  const [selectedBrand, setSelectedBrand] = useState<string>('All');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedAppType, setSelectedAppType] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [mobileFilterOpen, setMobileFilterOpen] = useState<boolean>(false);
  
  // Selected product for detailed modal view
  const [activeDetailProduct, setActiveDetailProduct] = useState<Product | null>(() => {
    if (targetProductId) {
      return PRODUCTS.find((p) => p.id === targetProductId) || null;
    }
    return null;
  });

  const brands = ['All', 'Hero', 'Honda', 'Bajaj', 'TVS', 'Yamaha'];
  const categories = ['All', 'Rear Shock Absorber', 'Scooter Suspension', 'Front Suspension'];
  const appTypes = ['All', 'Motorcycle', 'Scooter'];

  // Filter products
  const filteredProducts = PRODUCTS.filter((p) => {
    if (selectedBrand !== 'All' && p.brand !== selectedBrand) return false;
    if (selectedCategory !== 'All' && p.category !== selectedCategory) return false;
    if (selectedAppType !== 'All' && p.applicationType !== selectedAppType) return false;

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchPart = p.partNo.toLowerCase().includes(q);
      const matchName = p.name.toLowerCase().includes(q);
      const matchModel = p.vehicleModel.toLowerCase().includes(q);
      const matchBrand = p.brand.toLowerCase().includes(q);
      return matchPart || matchName || matchModel || matchBrand;
    }
    return true;
  });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (activeDetailProduct) setActiveDetailProduct(null);
        if (mobileFilterOpen) setMobileFilterOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeDetailProduct, mobileFilterOpen]);

  return (
    <div className="w-full space-y-6 sm:space-y-8 bg-[#F8FAFC] border border-slate-200 py-6 sm:py-8 px-4 sm:px-8 max-w-[1440px] mx-auto rounded-3xl mt-20 sm:mt-24 lg:mt-28 mb-8 relative overflow-hidden shadow-xs" id="products-catalog-view">
      {/* Texture */}
      <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#94a3b8_1.2px,transparent_1.2px)] [background-size:24px_24px]" />

      <div className="relative z-10 space-y-6 sm:space-y-8">
        
        {/* 1. Page Header */}
        <div className="border-b border-slate-200 pb-4 sm:pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-mono font-bold text-red-600 uppercase tracking-widest block mb-1">
              ✦ B2B AUTOMOTIVE COMPONENT CATALOGUE
            </span>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 uppercase font-heading tracking-tight">
              Suspension Products &amp; Applications
            </h1>
            <p className="text-slate-600 text-xs sm:text-sm mt-1 max-w-2xl leading-relaxed font-sans">
              Factory-grade gas-hydraulic shock absorbers, front forks, and replacement damper assemblies engineered for major two-wheeler applications in India.
            </p>
          </div>

          <button
            onClick={() => onOpenQuoteModal()}
            className="hidden md:flex cursor-pointer px-5 py-3 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider items-center gap-2 rounded-full shadow-md transition-all self-start md:self-auto shrink-0 border border-slate-700"
          >
            <span>Request Wholesale Price Sheet</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </button>
        </div>

        {/* 2. Main B2B Catalogue Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          
          {/* Left Filter Sidebar (Hidden on Mobile, Visible on Desktop lg+) */}
          <aside className="hidden lg:block lg:col-span-3 bg-white border border-slate-200/90 p-5 rounded-2xl space-y-6 shadow-xs">
            
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <span className="text-xs font-mono font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                <Filter className="w-4 h-4 text-red-600" />
                Catalogue Filters
              </span>
              {(selectedBrand !== 'All' || selectedCategory !== 'All' || selectedAppType !== 'All' || searchQuery) && (
                <button
                  onClick={() => {
                    setSelectedBrand('All');
                    setSelectedCategory('All');
                    setSelectedAppType('All');
                    setSearchQuery('');
                  }}
                  className="text-[11px] font-mono text-slate-500 hover:text-slate-900 underline cursor-pointer"
                >
                  Reset
                </button>
              )}
            </div>



            {/* Vehicle Brand Filter */}
            <div>
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-2">
                VEHICLE BRAND
              </label>
              <div className="space-y-1">
                {brands.map((b) => (
                  <button
                    key={b}
                    onClick={() => setSelectedBrand(b)}
                    className={`w-full text-left px-3 py-2 text-xs font-semibold rounded-xl transition-colors cursor-pointer flex items-center justify-between ${
                      selectedBrand === b
                        ? 'bg-slate-900 text-white font-bold'
                        : 'text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <span>{b}</span>
                    {selectedBrand === b && <ChevronRight className="w-3 h-3 text-red-500" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Product Category Filter */}
            <div>
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-2">
                PRODUCT TYPE
              </label>
              <div className="space-y-1">
                {categories.map((c) => (
                  <button
                    key={c}
                    onClick={() => setSelectedCategory(c)}
                    className={`w-full text-left px-3 py-2 text-xs font-semibold rounded-xl transition-colors cursor-pointer flex items-center justify-between ${
                      selectedCategory === c
                        ? 'bg-slate-900 text-white font-bold'
                        : 'text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <span>{c}</span>
                    {selectedCategory === c && <ChevronRight className="w-3 h-3 text-red-500" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Application Type */}
            <div>
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-2">
                APPLICATION
              </label>
              <div className="space-y-1">
                {appTypes.map((a) => (
                  <button
                    key={a}
                    onClick={() => setSelectedAppType(a)}
                    className={`w-full text-left px-3 py-2 text-xs font-semibold rounded-xl transition-colors cursor-pointer flex items-center justify-between ${
                      selectedAppType === a
                        ? 'bg-slate-900 text-white font-bold'
                        : 'text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <span>{a}</span>
                    {selectedAppType === a && <ChevronRight className="w-3 h-3 text-red-500" />}
                  </button>
                ))}
              </div>
            </div>

          </aside>

          {/* Right Products Results Area */}
          <main className="lg:col-span-9 space-y-4">
            
            {/* Results Summary Header */}
            <div className="flex items-center justify-between bg-white border border-slate-200/90 p-3.5 rounded-2xl text-xs font-mono shadow-xs">
              <span className="text-slate-800 font-bold uppercase">
                SHOWING {filteredProducts.length} PRODUCTS
              </span>
              <span className="text-slate-500 hidden sm:inline">
                Filtered by: <strong className="text-slate-900">{selectedBrand}</strong> / <strong className="text-slate-900">{selectedCategory}</strong>
              </span>
            </div>

            {/* Product Cards Grid */}
            {filteredProducts.length === 0 ? (
              <div className="bg-white border border-slate-200 p-12 text-center rounded-2xl space-y-3">
                <p className="text-sm font-bold text-slate-700">No suspension products match your filter criteria.</p>
                <button
                  onClick={() => {
                    setSelectedBrand('All');
                    setSelectedCategory('All');
                    setSelectedAppType('All');
                    setSearchQuery('');
                  }}
                  className="px-4 py-2 bg-slate-900 text-white text-xs font-bold uppercase tracking-wider rounded-full cursor-pointer"
                >
                  Clear All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map((prod) => (
                  <div
                    key={prod.id}
                    className="bg-white border border-slate-200 rounded-3xl p-5 hover:border-red-600 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between group relative overflow-hidden h-full"
                  >
                    <div>
                      {/* Image Viewport Container */}
                      <div className="aspect-[4/3] bg-slate-50 border border-slate-200 rounded-2xl mb-4 p-4 flex items-center justify-center relative overflow-hidden shadow-inner">
                        <img
                          src={prod.imageUrl}
                          alt={prod.name}
                          className="max-h-full max-w-full object-contain group-hover:scale-108 transition-transform duration-300"
                          loading="lazy"
                        />
                        <span className="absolute top-3 left-3 px-2.5 py-1 bg-slate-900 text-white font-mono font-bold text-[10px] uppercase rounded-full shadow-sm">
                          PART #{prod.partNo}
                        </span>
                      </div>

                      {/* Metadata */}
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-xs font-sans">
                          <span className="font-extrabold text-red-600 uppercase tracking-wide">{prod.brand}</span>
                          <span className="text-slate-500 font-medium">{prod.category}</span>
                        </div>

                        <h3 className="text-base sm:text-lg font-black text-slate-900 group-hover:text-red-600 transition-colors line-clamp-1 font-heading">
                          {prod.name}
                        </h3>

                        <p className="text-xs text-slate-600 font-sans">
                          Vehicle Fitment: <strong className="text-slate-900 font-extrabold">{prod.vehicleModel}</strong>
                        </p>

                        {/* Technical Spec Cards */}
                        <div className="grid grid-cols-2 gap-2.5 text-xs font-sans pt-2">
                          <div className="bg-white/90 p-2.5 rounded-xl border border-slate-200/80 shadow-xs">
                            <span className="text-[10px] font-mono text-slate-400 block uppercase font-bold">DAMPING TYPE</span>
                            <span className="text-slate-900 font-bold text-[11px] block mt-0.5 leading-tight">{prod.technicalDetails.dampingType}</span>
                          </div>
                          <div className="bg-white/90 p-2.5 rounded-xl border border-slate-200/80 shadow-xs">
                            <span className="text-[10px] font-mono text-slate-400 block uppercase font-bold">PRELOAD</span>
                            <span className="text-slate-900 font-bold text-[11px] block mt-0.5 leading-tight">Adjustable</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Rounded Pill Action Buttons */}
                    <div className="pt-4 mt-4 border-t border-slate-200 grid grid-cols-2 gap-2.5">
                      <button
                        onClick={() => setActiveDetailProduct(prod)}
                        className="cursor-pointer py-2.5 px-3 border border-slate-300 hover:border-slate-400 bg-white hover:bg-slate-50 text-slate-800 text-xs font-black uppercase tracking-wider text-center rounded-full transition-all shadow-xs"
                      >
                        View Specs
                      </button>
                      <button
                        onClick={() => onOpenQuoteModal(prod.name)}
                        className="cursor-pointer py-2.5 px-3 bg-gradient-to-r from-red-600 via-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white text-xs font-black uppercase tracking-wider text-center rounded-full transition-all shadow-md hover:shadow-lg border border-red-500/40"
                      >
                        Request Quote
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

          </main>
        </div>

        {/* 3. Mobile Floating Sticky Filter Button (Icon Only) */}
        <div className="fixed bottom-6 right-6 z-40 lg:hidden pointer-events-auto">
          <button
            onClick={() => setMobileFilterOpen(true)}
            className="cursor-pointer w-14 h-14 bg-slate-900 hover:bg-slate-800 text-white rounded-full shadow-2xl border border-slate-700 flex items-center justify-center backdrop-blur-md transform hover:scale-110 active:scale-95 transition-all group"
            aria-label="Filter Catalogue"
          >
            <Filter className="w-6 h-6 text-white group-hover:rotate-12 transition-transform" />
          </button>
        </div>

        {/* 4. Mobile Bottom Filter Drawer */}
        {mobileFilterOpen && createPortal(
          <div
            onClick={() => setMobileFilterOpen(false)}
            className="fixed inset-0 z-[100] bg-slate-950/70 backdrop-blur-sm flex items-end justify-center lg:hidden cursor-pointer"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-white border-t border-slate-200 w-full max-h-[85vh] overflow-y-auto rounded-t-3xl p-6 space-y-5 shadow-2xl relative cursor-default"
            >
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <span className="text-sm font-mono font-black text-slate-900 uppercase tracking-wider flex items-center gap-2">
                  <Filter className="w-4 h-4 text-red-600" />
                  FILTER CATALOGUE
                </span>
                <button
                  onClick={() => setMobileFilterOpen(false)}
                  className="w-8 h-8 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center font-mono font-bold cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Vehicle Brand Pills */}
              <div className="space-y-1.5">
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700">
                  VEHICLE BRAND
                </label>
                <div className="flex flex-wrap gap-2">
                  {brands.map((b) => (
                    <button
                      key={b}
                      onClick={() => setSelectedBrand(b)}
                      className={`px-3 py-2 text-xs font-mono font-bold rounded-xl border transition-all cursor-pointer ${
                        selectedBrand === b
                          ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                          : 'bg-slate-50 text-slate-700 border-slate-300'
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              {/* Category Pills */}
              <div className="space-y-1.5">
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700">
                  PRODUCT TYPE
                </label>
                <div className="flex flex-wrap gap-2">
                  {categories.map((c) => (
                    <button
                      key={c}
                      onClick={() => setSelectedCategory(c)}
                      className={`px-3 py-2 text-xs font-mono font-bold rounded-xl border transition-all cursor-pointer ${
                        selectedCategory === c
                          ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                          : 'bg-slate-50 text-slate-700 border-slate-300'
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>

              {/* Apply CTA */}
              <div className="pt-3 border-t border-slate-200 flex gap-3">
                <button
                  onClick={() => {
                    setSelectedBrand('All');
                    setSelectedCategory('All');
                    setSelectedAppType('All');
                    setSearchQuery('');
                  }}
                  className="px-4 py-3 border border-slate-300 text-slate-700 font-mono font-bold text-xs uppercase rounded-full cursor-pointer"
                >
                  RESET
                </button>
                <button
                  onClick={() => setMobileFilterOpen(false)}
                  className="flex-1 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white font-mono font-bold text-xs uppercase tracking-wider rounded-full shadow-md cursor-pointer"
                >
                  SHOW {filteredProducts.length} RESULTS
                </button>
              </div>

            </div>
          </div>,
          document.body
        )}

        {/* 5. Product Detail Modal */}
        {activeDetailProduct && createPortal(
          <div
            onClick={() => setActiveDetailProduct(null)}
            className="fixed inset-0 z-[100] bg-slate-950/70 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 cursor-pointer"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-white border border-slate-200 max-w-4xl w-full max-h-[92vh] overflow-y-auto rounded-3xl p-5 sm:p-8 shadow-2xl relative space-y-4 my-auto cursor-default"
            >
              
              {/* Close CTA Button */}
              <button
                onClick={() => setActiveDetailProduct(null)}
                className="absolute top-5 right-5 px-3.5 py-1.5 bg-slate-900 hover:bg-slate-800 text-white font-mono font-bold text-xs uppercase tracking-wider rounded-full shadow-md transition-all border border-slate-700 flex items-center gap-1.5 cursor-pointer z-20 group hover:scale-105"
                aria-label="Close modal"
              >
                <span>CLOSE</span>
                <X className="w-4 h-4 text-white group-hover:rotate-90 transition-transform duration-300" />
              </button>

              {/* Modal Content Grid */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                
                {/* Left Image Column */}
                <div className="md:col-span-5 bg-slate-50 border border-slate-200 rounded-2xl p-5 flex flex-col items-center justify-between shadow-inner space-y-3">
                  <img
                    src={activeDetailProduct.imageUrl}
                    alt={activeDetailProduct.name}
                    className="max-h-56 sm:max-h-64 w-auto object-contain hover:scale-105 transition-transform duration-300"
                  />
                  <span className="px-3 py-1 bg-slate-900 text-white font-mono font-bold text-xs uppercase rounded-full shadow-md">
                    PART NUMBER: {activeDetailProduct.partNo}
                  </span>
                </div>

                {/* Right Detail Column */}
                <div className="md:col-span-7 space-y-4">
                  <div>
                    <span className="px-3 py-0.5 bg-red-50 border border-red-200 text-red-600 font-mono text-[11px] font-bold uppercase rounded-full inline-block">
                      {activeDetailProduct.brand} AUTOMOTIVE APPLICATION
                    </span>
                    <h2 className="text-xl sm:text-2xl font-black text-slate-900 uppercase font-heading mt-1 tracking-tight">
                      {activeDetailProduct.name}
                    </h2>
                    <p className="text-xs text-slate-600 mt-0.5 font-sans">
                      Target Fitment: <strong className="text-slate-900 font-extrabold">{activeDetailProduct.vehicleModel}</strong>
                    </p>
                  </div>

                  <p className="text-slate-600 text-xs leading-relaxed font-sans border-y border-slate-200/80 py-2.5">
                    {activeDetailProduct.longDescription}
                  </p>

                  {/* Technical Specifications Card */}
                  <div className="space-y-1.5">
                    <h4 className="text-[11px] font-mono font-black uppercase tracking-wider text-slate-900">
                      TECHNICAL SPECIFICATIONS
                    </h4>
                    <div className="bg-slate-50/80 border border-slate-200/90 rounded-xl divide-y divide-slate-200/80 text-[11px] font-sans">
                      <div className="py-2 px-3 flex justify-between">
                        <span className="text-slate-500 font-medium">Damping Architecture:</span>
                        <span className="text-slate-900 font-bold">{activeDetailProduct.technicalDetails.dampingType}</span>
                      </div>
                      <div className="py-2 px-3 flex justify-between">
                        <span className="text-slate-500 font-medium">Piston Diameter:</span>
                        <span className="text-slate-900 font-bold">{activeDetailProduct.technicalDetails.pistonDiameter}</span>
                      </div>
                      <div className="py-2 px-3 flex justify-between">
                        <span className="text-slate-500 font-medium">Stroke Length:</span>
                        <span className="text-slate-900 font-bold">{activeDetailProduct.technicalDetails.strokeLength}</span>
                      </div>
                      <div className="py-2 px-3 flex justify-between">
                        <span className="text-slate-500 font-medium">Preload Adjustability:</span>
                        <span className="text-slate-900 font-bold">
                          {activeDetailProduct.technicalDetails.preloadAdjustable ? 'Multi-Step Notch Adjuster' : 'Standard'}
                        </span>
                      </div>
                      <div className="py-2 px-3 flex justify-between">
                        <span className="text-slate-500 font-medium">Coil / Spring Finish:</span>
                        <span className="text-slate-900 font-bold">{activeDetailProduct.springFinish}</span>
                      </div>
                    </div>
                  </div>

                  {/* Feature Bullet Checklist */}
                  <div className="space-y-1.5">
                    <h4 className="text-[11px] font-mono font-black uppercase tracking-wider text-slate-900">
                      ENGINEERING HIGHLIGHTS
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-700 font-sans">
                      {activeDetailProduct.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-red-600 shrink-0 mt-0.5" />
                          <span className="font-medium text-[11px]">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Modal Rounded Actions */}
                  <div className="pt-3 border-t border-slate-200/80 flex flex-col sm:flex-row gap-2.5">
                    <button
                      onClick={() => {
                        const name = activeDetailProduct.name;
                        setActiveDetailProduct(null);
                        onOpenQuoteModal(name);
                      }}
                      className="flex-1 cursor-pointer py-3 px-5 bg-gradient-to-r from-red-600 via-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-black text-xs uppercase tracking-wider text-center rounded-full shadow-md hover:shadow-lg transition-all border border-red-500/40"
                    >
                      Request Wholesale Quote
                    </button>

                    <a
                      href={`https://wa.me/917030727770?text=${encodeURIComponent(
                        `Hello MD AutoTech, I am interested in inquiring about wholesale availability for ${activeDetailProduct.name} (Part #${activeDetailProduct.partNo}).`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer py-3 px-5 bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 rounded-full transition-all shadow-md"
                    >
                      <MessageSquare className="w-4 h-4 text-white" />
                      <span>WhatsApp Inquiry</span>
                    </a>
                  </div>

                </div>

              </div>

            </div>
          </div>,
          document.body
        )}

      </div>
    </div>
  );
}
