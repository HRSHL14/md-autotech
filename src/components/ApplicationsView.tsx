/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { BRAND_APPLICATIONS, PRODUCTS } from '../data';
import { Product } from '../types';
import { Search, ChevronRight, ArrowRight, Layers, CheckCircle2 } from 'lucide-react';

interface ApplicationsViewProps {
  onSelectProduct: (product: Product) => void;
  onOpenQuoteModal: (productName?: string) => void;
}

export default function ApplicationsView({ onSelectProduct, onOpenQuoteModal }: ApplicationsViewProps) {
  const [selectedBrand, setSelectedBrand] = useState<string>('Hero');

  const currentBrandData = BRAND_APPLICATIONS.find(
    (b) => b.brand.toLowerCase().includes(selectedBrand.toLowerCase())
  ) || BRAND_APPLICATIONS[0];

  return (
    <div className="w-full space-y-10 bg-white py-6" id="applications-view font-heading">
      
      {/* Header */}
      <div className="border-b border-slate-200 pb-6">
        <span className="text-xs font-mono font-bold text-red-600 uppercase tracking-widest block mb-1">
          ✦ VEHICLE FITMENT MATRIX &amp; COVERAGE
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 uppercase tracking-tight">
          Suspension Applications Coverage
        </h1>
        <p className="text-slate-600 text-xs sm:text-sm mt-1 max-w-2xl leading-relaxed">
          MD AutoTech manufactures direct OEM-fit rear shock absorbers and front fork assemblies across major Indian two-wheeler motorcycle and scooter platforms.
        </p>
      </div>

      {/* Brand Selection Tabs */}
      <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-4">
        {BRAND_APPLICATIONS.map((app) => {
          const active = selectedBrand.toLowerCase().includes(app.brand.toLowerCase());
          return (
            <button
              key={app.brand}
              onClick={() => setSelectedBrand(app.brand)}
              className={`cursor-pointer px-5 py-3 text-xs font-mono font-bold uppercase tracking-wider rounded-xs transition-all border flex items-center gap-2.5 ${
                active
                  ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300'
              }`}
            >
              <div className="p-1 bg-white rounded-xs border border-slate-200 flex items-center justify-center h-6 shrink-0">
                <img
                  src={app.logo}
                  alt={`${app.brand} Logo`}
                  className="h-4 w-auto object-contain"
                />
              </div>
              <span>{app.brand} ({app.models.length} Models)</span>
            </button>
          );
        })}
      </div>

      {/* Models Table & Coverage Matrix */}
      <div className="bg-slate-50 border border-slate-200 rounded-sm p-6 sm:p-8 space-y-6">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
          <div>
            <h2 className="text-xl font-bold text-slate-900 uppercase font-mono">
              {currentBrandData.brand} Supported Models
            </h2>
            <p className="text-xs text-slate-500 font-medium mt-0.5">
              Select any vehicle model to view corresponding MD AutoTech replacement damper part numbers.
            </p>
          </div>

          <span className="px-3 py-1 bg-white border border-slate-300 font-mono text-xs font-bold text-slate-700 rounded-xs self-start sm:self-auto">
            {currentBrandData.models.length} Applications Listed
          </span>
        </div>

        {/* Models Grid Table */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {currentBrandData.models.map((mod, idx) => {
            const matchedProd = PRODUCTS.find((p) => p.id === mod.productId || p.partNo === mod.partNo);

            return (
              <div
                key={idx}
                className="bg-white border border-slate-200 p-4 rounded-sm hover:border-slate-400 transition-all flex flex-col justify-between group shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between font-mono text-[11px] mb-2">
                    <span className="px-2 py-0.5 bg-slate-900 text-white font-bold rounded-xs">
                      PART #{mod.partNo}
                    </span>
                    <span className="text-slate-500">{mod.fitment}</span>
                  </div>

                  <h3 className="text-sm font-bold text-slate-900 group-hover:text-slate-800">
                    {mod.name}
                  </h3>

                  {matchedProd && (
                    <p className="text-xs text-slate-500 line-clamp-2 mt-1">
                      {matchedProd.springFinish}
                    </p>
                  )}
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                  {matchedProd ? (
                    <button
                      onClick={() => onSelectProduct(matchedProd)}
                      className="cursor-pointer text-xs font-bold font-mono text-slate-900 hover:text-red-600 flex items-center gap-1 uppercase"
                    >
                      <span>View Specifications</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  ) : (
                    <span className="text-xs text-slate-400 font-mono">Part Info</span>
                  )}

                  <button
                    onClick={() => onOpenQuoteModal(mod.name)}
                    className="cursor-pointer text-[11px] font-bold font-mono text-slate-700 hover:text-slate-900 underline"
                  >
                    Inquire
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>

    </div>
  );
}
