/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { FileText, Download, HelpCircle, ShieldCheck, BookOpen, MessageSquare, ChevronDown, ChevronUp } from 'lucide-react';
import { B2B_FAQS } from '../data';

interface ResourcesViewProps {
  onOpenQuoteModal: () => void;
}

export default function ResourcesView({ onOpenQuoteModal }: ResourcesViewProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const resources = [
    {
      title: 'MD AutoTech Suspension Product Catalogue 2026',
      type: 'PDF Technical Specification Sheet',
      size: '2.4 MB',
      description: 'Complete fitment guide and technical parameters for Hero, Honda, Bajaj, TVS, and Yamaha motorcycle shock absorbers.',
    },
    {
      title: 'Dealer Application & Trade Terms Guide',
      type: 'PDF Business Document',
      size: '1.1 MB',
      description: 'Overview of minimum order quantities, freight dispatch policies, and trade credit terms for authorized distributors.',
    },
    {
      title: 'Installation & Maintenance Safety Policy',
      type: 'Technical Manual',
      size: '1.8 MB',
      description: 'Factory recommended mounting torque values, eyelet bushing alignment, and pre-ride compression checks for mechanics.',
    },
  ];

  return (
    <div className="w-full space-y-12 bg-white py-6" id="resources-view font-heading">
      
      {/* Header */}
      <div className="border-b border-slate-200 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="text-xs font-mono font-bold text-red-600 uppercase tracking-widest block mb-1">
            ✦ B2B DOCUMENTATION &amp; HELP CENTER
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 uppercase tracking-tight">
            Technical Resources &amp; Support
          </h1>
          <p className="text-slate-600 text-xs sm:text-sm mt-1 max-w-2xl leading-relaxed">
            Access product catalogues, application guides, trade documentation, and business frequently asked questions.
          </p>
        </div>

        <button
          onClick={onOpenQuoteModal}
          className="cursor-pointer px-5 py-3 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 rounded-sm shadow-xs transition-all shrink-0 border border-slate-700"
        >
          <Download className="w-4 h-4 text-white" />
          <span>Request Catalogue Copy</span>
        </button>
      </div>

      {/* Resource Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {resources.map((res, idx) => (
          <div
            key={idx}
            className="bg-slate-50 border border-slate-200 p-6 rounded-sm space-y-4 hover:border-slate-400 transition-all flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <FileText className="w-6 h-6 text-slate-700" />
                <span className="text-[10px] font-mono text-slate-500 uppercase font-bold">
                  {res.size}
                </span>
              </div>

              <h3 className="text-base font-bold text-slate-900 uppercase font-mono">
                {res.title}
              </h3>

              <p className="text-slate-600 text-xs leading-relaxed">
                {res.description}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-200">
              <a
                href={`https://wa.me/917030727770?text=${encodeURIComponent(
                  `Hello MD AutoTech, please send me a digital copy of: ${res.title}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full cursor-pointer py-2 px-3 bg-white border border-slate-300 hover:border-slate-400 text-slate-900 text-xs font-bold uppercase tracking-wider flex items-center justify-between rounded-sm transition-colors"
              >
                <span>Request Document</span>
                <Download className="w-3.5 h-3.5 text-red-600" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* B2B FAQ Accordion */}
      <div className="space-y-6 pt-4">
        <div className="border-b border-slate-200 pb-3">
          <h2 className="text-xl font-bold text-slate-900 uppercase font-mono flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-red-600" />
            Commercial &amp; Technical FAQs
          </h2>
          <p className="text-xs text-slate-500 font-medium mt-0.5">
            Answers to common questions regarding dealership, product compatibility, and wholesale batch supply.
          </p>
        </div>

        <div className="space-y-3">
          {B2B_FAQS.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="border border-slate-200 rounded-sm bg-white overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50 transition-colors"
                >
                  <span className="text-sm font-bold text-slate-900 font-mono">
                    {faq.question}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-slate-500 shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-500 shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-5 pb-4 text-xs text-slate-700 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                    <p className="pt-3">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
