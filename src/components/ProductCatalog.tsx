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

export default function ProductCatalog({ onOpenQuoteModal }: ProductCatalogProps) {
  const [selectedBrand, setSelectedBrand] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [mobileFilterOpen, setMobileFilterOpen] = useState<boolean>(false);
  
  const brands = ['All', 'Hero', 'Honda', 'Bajaj', 'TVS', 'Yamaha'];

  // Filter products
  const filteredProducts = PRODUCTS.filter((p) => {
    if (selectedBrand !== 'All' && p.brand !== selectedBrand) return false;

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
      if (e.key === 'Escape' && mobileFilterOpen) {
        setMobileFilterOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileFilterOpen]);

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
              {(selectedBrand !== 'All' || searchQuery) && (
                <button
                  onClick={() => {
                    setSelectedBrand('All');
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

          </aside>

          {/* Right Products Results Area */}
          <main className="lg:col-span-9 space-y-4">
            
            {/* Results Summary Header */}
            <div className="flex items-center justify-between bg-white border border-slate-200/90 p-3.5 rounded-2xl text-xs font-mono shadow-xs">
              <span className="text-slate-800 font-bold uppercase">
                SHOWING {filteredProducts.length} PRODUCTS
              </span>
              <span className="text-slate-500 hidden sm:inline">
                Filtered by: <strong className="text-slate-900">{selectedBrand}</strong>
              </span>
            </div>

            {/* Product Cards Grid */}
            {filteredProducts.length === 0 ? (
              <div className="bg-white border border-slate-200 p-12 text-center rounded-2xl space-y-3">
                <p className="text-slate-500 text-sm font-sans">No suspension parts matched your filter criteria.</p>
                <button
                  onClick={() => {
                    setSelectedBrand('All');
                    setSearchQuery('');
                  }}
                  className="px-5 py-2.5 bg-slate-900 text-white text-xs font-bold uppercase rounded-full cursor-pointer hover:bg-slate-800 transition-all"
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
                      <div className="aspect-[3/4] sm:aspect-[4/5] bg-slate-50 border border-slate-200 rounded-2xl mb-4 p-3 sm:p-4 flex items-center justify-center relative overflow-hidden shadow-inner">
                        <img
                          src={prod.imageUrl}
                          alt={prod.name}
                          className="max-h-full max-w-full object-contain scale-[1.3] sm:scale-[1.28] group-hover:scale-[1.35] transition-transform duration-300 drop-shadow-sm"
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
                      </div>
                    </div>

                    {/* Rounded Pill Action Button */}
                    <div className="pt-4 mt-4 border-t border-slate-200">
                      <button
                        onClick={() => onOpenQuoteModal(prod.name)}
                        className="w-full cursor-pointer py-3 px-4 bg-gradient-to-r from-red-600 via-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white text-xs font-black uppercase tracking-wider text-center rounded-full transition-all shadow-md hover:shadow-lg border border-red-500/40 flex items-center justify-center gap-2 group/btn"
                      >
                        <span>REQUEST WHOLESALE QUOTE</span>
                        <ArrowRight className="w-3.5 h-3.5 text-white group-hover/btn:translate-x-1 transition-transform" />
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
                      onClick={() => {
                        setSelectedBrand(b);
                        setMobileFilterOpen(false);
                      }}
                      className={`px-3.5 py-2.5 text-xs font-mono font-bold rounded-xl border transition-all cursor-pointer ${
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

              {/* Apply CTA */}
              <div className="pt-3 border-t border-slate-200 flex gap-3">
                <button
                  onClick={() => {
                    setSelectedBrand('All');
                    setSearchQuery('');
                    setMobileFilterOpen(false);
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

      </div>
    </div>
  );
}
