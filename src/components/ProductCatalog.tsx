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
    <div className="w-full space-y-4 sm:space-y-8 bg-[#F8FAFC] border border-slate-200 py-4 sm:py-8 px-2 sm:px-6 lg:px-8 max-w-[1440px] mx-auto rounded-2xl sm:rounded-3xl mt-16 sm:mt-24 lg:mt-28 mb-8 relative overflow-hidden shadow-xs" id="products-catalog-view">
      {/* Texture */}
      <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#94a3b8_1.2px,transparent_1.2px)] [background-size:24px_24px]" />

      <div className="relative z-10 space-y-4 sm:space-y-8">
        
        {/* 1. Page Header */}
        <div className="border-b border-slate-200 pb-3 sm:pb-6 flex flex-col md:flex-row md:items-end justify-between gap-3 sm:gap-4">
          <div>
            <h1 className="text-xl sm:text-4xl font-extrabold text-slate-900 uppercase font-heading tracking-tight">
              Suspension Products &amp; Applications
            </h1>
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-8 items-start">
          
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
          <main className="lg:col-span-9 space-y-3 sm:space-y-4">
            
            {/* Results Summary Header */}
            <div className="flex items-center justify-between bg-white border border-slate-200/90 p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl text-[11px] sm:text-xs font-mono shadow-xs">
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
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4 lg:gap-6">
                {filteredProducts.map((prod) => (
                  <div
                    key={prod.id}
                    onClick={() => onOpenQuoteModal(prod.name)}
                    className="bg-white border border-slate-200 rounded-xl sm:rounded-3xl p-2 sm:p-4 lg:p-5 hover:border-red-600 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between group relative overflow-hidden h-full shadow-xs cursor-pointer"
                  >
                    <div>
                      {/* Image Viewport Container: Wider presentation */}
                      <div className="aspect-[934/1250] sm:aspect-[934/1400] w-full bg-slate-50 border border-slate-200/90 rounded-lg sm:rounded-2xl mb-1.5 sm:mb-3 flex items-center justify-center relative overflow-hidden shadow-inner">
                        <img
                          src={prod.imageUrl}
                          alt={prod.name}
                          className="w-full h-full object-contain scale-120 sm:scale-105 group-hover:scale-125 sm:group-hover:scale-110 transition-transform duration-300 drop-shadow-sm"
                          loading="lazy"
                        />
                        <span className="absolute top-1.5 left-1.5 sm:top-3 sm:left-3 px-1.5 py-0.5 sm:px-2.5 sm:py-1 bg-slate-900/90 backdrop-blur-xs text-white font-mono font-bold text-[8px] sm:text-[10px] uppercase rounded sm:rounded-full shadow-sm">
                          #{prod.partNo}
                        </span>
                      </div>

                      {/* Metadata */}
                      <div className="space-y-0.5 sm:space-y-1.5 px-0.5">
                        <div className="flex items-center justify-between text-[9px] sm:text-xs font-sans">
                          <span className="font-extrabold text-red-600 uppercase tracking-wide truncate">{prod.brand}</span>
                          <span className="text-slate-400 font-mono text-[8px] sm:text-[11px] uppercase tracking-wider">{prod.applicationType}</span>
                        </div>

                        <h3 className="text-[11px] sm:text-base lg:text-lg font-black text-slate-900 group-hover:text-red-600 transition-colors line-clamp-1 font-heading">
                          {prod.name}
                        </h3>
                      </div>
                    </div>

                    {/* Component Name in Small Font */}
                    <div className="pt-1.5 sm:pt-2.5 mt-1.5 sm:mt-2.5 border-t border-slate-100 px-0.5">
                      <p className="text-[9px] sm:text-xs text-slate-500 font-sans font-medium truncate">
                        {prod.category}
                      </p>
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
