/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PRODUCTS } from '../data';
import { QuoteRequest } from '../types';
import { CheckCircle2, MessageSquare, ArrowRight, Mail } from 'lucide-react';

interface QuoteBuilderProps {
  initialProductName?: string;
  initialBusinessType?: string;
  onSuccessSubmitted?: () => void;
}

export default function QuoteBuilder({ initialProductName = '', initialBusinessType = 'Dealer', onSuccessSubmitted }: QuoteBuilderProps) {
  const [selectedProduct, setSelectedProduct] = useState<string>(initialProductName || PRODUCTS[0].name);
  const [isChangingProduct, setIsChangingProduct] = useState(false);

  const [quantityTier, setQuantityTier] = useState<string>('100');
  const [businessType, setBusinessType] = useState<string>(initialBusinessType || 'Dealer');

  const [customerName, setCustomerName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [message, setMessage] = useState('');

  const [submitted, setSubmitted] = useState(false);

  // Selected product detail object
  const currentProdObj = PRODUCTS.find((p) => p.name === selectedProduct) || PRODUCTS[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName || !phone) return;
    setSubmitted(true);
    if (onSuccessSubmitted) onSuccessSubmitted();
  };

  const whatsappMessage = `Hello MD AutoTech Sales Team, I would like to request a quotation for:
- Product: ${currentProdObj.partNo} — ${currentProdObj.name}
- Approx. Quantity: ${quantityTier}
- Business Type: ${businessType}
- Name: ${customerName}
- Business Name: ${companyName || 'N/A'}
- WhatsApp Number: ${phone}
- Email: ${email || 'N/A'}
- Location: ${city || 'N/A'}
- Message: ${message || 'N/A'}`;

  const triggerWhatsApp = () => {
    window.open(`https://wa.me/917030727770?text=${encodeURIComponent(whatsappMessage)}`, '_blank', 'noopener,noreferrer');
  };

  const triggerEmailInvoice = () => {
    const mailtoUrl = `mailto:contact@mdautotech.com?subject=${encodeURIComponent(`RFQ Proforma Invoice Request — ${currentProdObj.partNo} ${currentProdObj.name}`)}&body=${encodeURIComponent(
      `Hello MD AutoTech Sales Desk,\n\nPlease email a formal Proforma Invoice and quotation for:\n- Product: ${currentProdObj.partNo} — ${currentProdObj.name}\n- Approx. Quantity: ${quantityTier} units\n- Business Category: ${businessType}\n- Contact Person: ${customerName || 'N/A'}\n- Business Name: ${companyName || 'N/A'}\n- Phone: ${phone || 'N/A'}\n- Email: ${email || 'N/A'}\n- Location: ${city || 'N/A'}\n- Requirements: ${message || 'N/A'}`
    )}`;
    window.location.href = mailtoUrl;
  };

  return (
    <div className="w-full bg-white py-2 max-w-4xl mx-auto" id="quick-quote-form">
      
      {/* Section Header */}
      <div className="border-b border-slate-200 pb-2 mb-3 flex items-center justify-between pr-24 sm:pr-28">
        <div>
          <span className="text-[10px] font-mono font-bold text-red-600 uppercase tracking-widest block">
            ✦ GET A QUICK QUOTE
          </span>
          <h1 className="text-xs sm:text-sm font-extrabold text-slate-900 font-heading tracking-tight leading-tight">
            Tell us what you need — MD AutoTech Wholesale Desk
          </h1>
        </div>
      </div>

      {submitted ? (
        <div className="bg-slate-50 border border-slate-200 p-5 sm:p-6 text-center rounded-2xl max-w-xl mx-auto space-y-3 shadow-sm">
          <div className="w-10 h-10 bg-red-600 text-white font-bold text-lg flex items-center justify-center rounded-full mx-auto">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <h2 className="text-lg font-black uppercase text-slate-900 font-heading">
            Quote Request Received
          </h2>
          <p className="text-slate-600 text-xs leading-relaxed font-sans">
            Thank you, <strong className="text-slate-900">{customerName}</strong>. We’ll contact you with availability, pricing, and supply details for <strong className="text-slate-900">{currentProdObj.partNo} — {currentProdObj.name}</strong>.
          </p>

          <div className="pt-2 border-t border-slate-200 flex flex-col sm:flex-row gap-2 justify-center">
            <button
              onClick={triggerWhatsApp}
              className="cursor-pointer px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 rounded-xl transition-all shadow-sm"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </button>
            <button
              onClick={triggerEmailInvoice}
              className="cursor-pointer px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 rounded-xl transition-all shadow-sm"
            >
              <Mail className="w-4 h-4 text-white" />
              <span>Send Email</span>
            </button>
            <button
              onClick={() => setSubmitted(false)}
              className="cursor-pointer px-4 py-2 border border-slate-300 text-slate-700 font-bold text-xs uppercase tracking-wider rounded-xl hover:border-slate-400 transition-colors"
            >
              Back
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3 bg-white border border-slate-200/90 p-3.5 sm:p-4 rounded-2xl shadow-xs relative overflow-hidden">
          {/* Subtle Background Texture */}
          <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#94a3b8_1.2px,transparent_1.2px)] [background-size:24px_24px]" />
          
          {/* STEP 1. SELECTED PRODUCT */}
          <div className="pb-2.5 border-b border-slate-200/80">
            {!isChangingProduct ? (
              <div className="flex items-center justify-between gap-3 p-2.5 bg-slate-50 border border-slate-200 rounded-xl">
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="w-9 h-9 bg-white border border-slate-200 rounded-lg p-0.5 flex items-center justify-center shrink-0 shadow-inner overflow-hidden">
                    <img
                      src={currentProdObj.imageUrl}
                      alt={currentProdObj.name}
                      className="max-h-full max-w-full object-contain scale-110"
                    />
                  </div>
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="px-1.5 py-0.5 bg-red-600 text-white font-mono font-extrabold text-[8px] uppercase rounded shrink-0">
                      {currentProdObj.brand}
                    </span>
                    <span className="font-heading font-black text-slate-900 text-xs uppercase truncate">
                      {currentProdObj.partNo} — {currentProdObj.name}
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setIsChangingProduct(true)}
                  className="cursor-pointer text-[10px] font-mono font-extrabold text-red-600 hover:text-red-700 bg-red-50 hover:bg-red-100 border border-red-200 px-2.5 py-1 rounded-md transition-all shrink-0"
                >
                  Change Product
                </button>
              </div>
            ) : (
              <div className="space-y-1 bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                <div className="flex items-center justify-between">
                  <label className="block text-[10px] font-mono font-bold text-slate-700 uppercase">
                    Select Product from Catalog:
                  </label>
                  <button
                    type="button"
                    onClick={() => setIsChangingProduct(false)}
                    className="text-[10px] font-mono font-bold text-slate-500 hover:text-slate-900 underline"
                  >
                    Done
                  </button>
                </div>
                <select
                  value={selectedProduct}
                  onChange={(e) => {
                    setSelectedProduct(e.target.value);
                    setIsChangingProduct(false);
                  }}
                  className="w-full py-1.5 px-3 bg-white border border-slate-300 rounded-lg text-xs font-sans text-slate-900 focus:outline-none focus:border-red-600"
                >
                  {PRODUCTS.map((p) => (
                    <option key={p.id} value={p.name}>
                      {p.partNo} — {p.name} ({p.brand.toUpperCase()})
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>

          {/* STEP 2. QUANTITY & BUSINESS CATEGORY (2 COLS) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pb-2.5 border-b border-slate-200/80">
            {/* QUANTITY */}
            <div className="space-y-1">
              <label className="block text-[10px] font-mono font-bold text-slate-700 uppercase">
                1. Approx. Order Qty (Units)
              </label>
              <div className="grid grid-cols-4 gap-1">
                {['50', '100', '500+', 'Not Sure'].map((qty) => (
                  <button
                    type="button"
                    key={qty}
                    onClick={() => setQuantityTier(qty)}
                    className={`cursor-pointer py-1.5 px-1 text-xs font-sans transition-all text-center rounded-lg border ${
                      quantityTier === qty
                        ? 'bg-red-600 text-white font-black border-red-600 shadow-xs'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 font-semibold'
                    }`}
                  >
                    {qty}
                  </button>
                ))}
              </div>
            </div>

            {/* BUSINESS TYPE */}
            <div className="space-y-1">
              <label className="block text-[10px] font-mono font-bold text-slate-700 uppercase">
                2. Business Category
              </label>
              <div className="grid grid-cols-4 gap-1">
                {['Dealer', 'Distributor', 'Retailer', 'Workshop'].map((type) => (
                  <button
                    type="button"
                    key={type}
                    onClick={() => setBusinessType(type)}
                    className={`cursor-pointer py-1.5 px-1 text-xs font-sans transition-all text-center rounded-lg border ${
                      businessType === type
                        ? 'bg-red-600 text-white font-black border-red-600 shadow-xs'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 font-semibold'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* STEP 3. CONTACT DETAILS (2x2 GRID) */}
          <div className="space-y-2 pb-2.5 border-b border-slate-200/80">
            <label className="block text-[10px] font-mono font-bold text-slate-700 uppercase">
              3. Contact Details
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <div>
                <input
                  type="text"
                  required
                  placeholder="Full Name *"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full px-3 py-1.5 bg-white border border-slate-300 rounded-lg text-xs font-sans text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-red-600"
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Business / Firm Name"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="w-full px-3 py-1.5 bg-white border border-slate-300 rounded-lg text-xs font-sans text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-red-600"
                />
              </div>

              <div>
                <input
                  type="tel"
                  required
                  placeholder="WhatsApp / Phone Number *"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3 py-1.5 bg-white border border-slate-300 rounded-lg text-xs font-mono text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-red-600"
                />
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-1.5 bg-white border border-slate-300 rounded-lg text-xs font-sans text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-red-600"
                />
              </div>
            </div>
          </div>

          {/* SUBMIT ACTIONS */}
          <div className="pt-1 space-y-1.5">
            <div className="flex flex-col sm:flex-row items-center gap-2">
              <button
                type="submit"
                className="flex-1 w-full cursor-pointer py-2.5 px-4 bg-gradient-to-r from-red-600 via-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-black text-xs uppercase tracking-wider rounded-xl shadow-md transition-all flex items-center justify-center gap-2 border border-red-500/40"
              >
                <span>SUBMIT QUOTE REQUEST</span>
                <ArrowRight className="w-3.5 h-3.5 text-white" />
              </button>

              <button
                type="button"
                onClick={triggerWhatsApp}
                className="flex-1 w-full cursor-pointer py-2.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 rounded-xl transition-all shadow-md"
              >
                <MessageSquare className="w-3.5 h-3.5 text-white" />
                <span>CHAT ON WHATSAPP</span>
              </button>
            </div>
          </div>

        </form>
      )}

    </div>
  );
}
