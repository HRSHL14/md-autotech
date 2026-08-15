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
    window.open(`https://wa.me/917030727770?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
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
      <div className="border-b border-slate-200 pb-3 mb-4">
        <span className="text-xs font-mono font-bold text-red-600 uppercase tracking-widest block mb-0.5">
          ✦ GET A QUICK QUOTE
        </span>
        <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-heading tracking-tight">
          Looking for MD AutoTech products? Tell us what you need.
        </h1>
      </div>

      {submitted ? (
        <div className="bg-slate-50 border border-slate-200 p-6 sm:p-8 text-center rounded-xl max-w-2xl mx-auto space-y-3 shadow-sm">
          <div className="w-10 h-10 bg-red-600 text-white font-bold text-lg flex items-center justify-center rounded-full mx-auto">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <h2 className="text-xl font-black uppercase text-slate-900 font-heading">
            Quote Request Received
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-sans">
            Thank you, <strong className="text-slate-900">{customerName}</strong>. We’ll contact you with availability, pricing, and supply details for <strong className="text-slate-900">{currentProdObj.partNo} — {currentProdObj.name}</strong>.
          </p>

          <div className="pt-3 border-t border-slate-200 flex flex-col sm:flex-row gap-2.5 justify-center">
            <button
              onClick={triggerWhatsApp}
              className="cursor-pointer px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 rounded-full transition-all shadow-md"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </button>
            <button
              onClick={triggerEmailInvoice}
              className="cursor-pointer px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 rounded-full transition-all shadow-md"
            >
              <Mail className="w-4 h-4 text-white" />
              <span>Send Invoice via Email</span>
            </button>
            <button
              onClick={() => setSubmitted(false)}
              className="cursor-pointer px-5 py-2.5 border border-slate-300 text-slate-700 font-bold text-xs uppercase tracking-wider rounded-full hover:border-slate-400 transition-colors"
            >
              Submit Another Quote
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 bg-white border border-slate-200 p-4 sm:p-6 rounded-2xl shadow-sm relative overflow-hidden">
          {/* Subtle Texture Overlay */}
          <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#94a3b8_1.2px,transparent_1.2px)] [background-size:24px_24px]" />
          
          {/* 1. WHAT DO YOU NEED? */}
          <div className="space-y-2 pb-3 border-b border-slate-200/80">
            <h3 className="text-[11px] font-mono font-black text-red-600 uppercase tracking-widest">
              1. WHAT DO YOU NEED?
            </h3>
            
            {!isChangingProduct ? (
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 bg-white border border-slate-200/90 rounded-xl shadow-xs">
                <span className="font-mono font-bold text-slate-900 text-xs sm:text-sm">
                  {currentProdObj.partNo} — {currentProdObj.name}
                </span>
                <button
                  type="button"
                  onClick={() => setIsChangingProduct(true)}
                  className="cursor-pointer text-xs font-mono font-bold text-red-600 hover:text-red-700 underline text-left sm:text-right"
                >
                  [ Change Product ]
                </button>
              </div>
            ) : (
              <div className="space-y-1.5">
                <select
                  value={selectedProduct}
                  onChange={(e) => {
                    setSelectedProduct(e.target.value);
                    setIsChangingProduct(false);
                  }}
                  className="w-full py-2 px-3 bg-white border border-slate-300 rounded-xl text-xs font-mono text-slate-900 focus:outline-none focus:border-red-600"
                >
                  {PRODUCTS.map((p) => (
                    <option key={p.id} value={p.name}>
                      {p.partNo} — {p.name} ({p.brand})
                    </option>
                  ))}
                </select>
                <button
                  type="button"
                  onClick={() => setIsChangingProduct(false)}
                  className="text-[11px] font-mono text-slate-500 hover:text-slate-800 underline block"
                >
                  Done selecting
                </button>
              </div>
            )}
          </div>

          {/* 2 & 3. HOW MUCH & WHO ARE YOU? (2 COLUMNS ON DESKTOP) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-3 border-b border-slate-200/80">
            
            {/* 2. HOW MUCH? */}
            <div className="space-y-2">
              <h3 className="text-[11px] font-mono font-black text-red-600 uppercase tracking-widest">
                2. HOW MUCH? (APPROX. QTY)
              </h3>
              <div className="grid grid-cols-4 gap-2">
                {['50', '100', '500+', 'Not Sure'].map((qty) => (
                  <button
                    type="button"
                    key={qty}
                    onClick={() => setQuantityTier(qty)}
                    className={`cursor-pointer py-2 text-xs font-mono font-bold rounded-xl border transition-all text-center ${
                      quantityTier === qty
                        ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                        : 'bg-white text-slate-700 border-slate-300 hover:border-slate-400'
                    }`}
                  >
                    {qty}
                  </button>
                ))}
              </div>
            </div>

            {/* 3. WHO ARE YOU? */}
            <div className="space-y-2">
              <h3 className="text-[11px] font-mono font-black text-red-600 uppercase tracking-widest">
                3. WHO ARE YOU?
              </h3>
              <div className="grid grid-cols-4 gap-2">
                {['Dealer', 'Distributor', 'Retailer', 'Workshop'].map((type) => (
                  <button
                    type="button"
                    key={type}
                    onClick={() => setBusinessType(type)}
                    className={`cursor-pointer py-2 text-xs font-mono font-bold rounded-xl border transition-all text-center ${
                      businessType === type
                        ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                        : 'bg-white text-slate-700 border-slate-300 hover:border-slate-400'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* YOUR DETAILS */}
          <div className="space-y-3 pb-3 border-b border-slate-200/80">
            <h3 className="text-[11px] font-mono font-black text-red-600 uppercase tracking-widest">
              YOUR DETAILS
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
              <div>
                <label className="block text-[10px] font-extrabold text-slate-900 uppercase font-mono mb-0.5">
                  Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your name"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full p-2.5 bg-white border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-red-600"
                />
              </div>

              <div>
                <label className="block text-[10px] font-extrabold text-slate-900 uppercase font-mono mb-0.5">
                  Business Name
                </label>
                <input
                  type="text"
                  placeholder="Your business name"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="w-full p-2.5 bg-white border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-red-600"
                />
              </div>

              <div>
                <label className="block text-[10px] font-extrabold text-slate-900 uppercase font-mono mb-0.5">
                  WhatsApp Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 ___________"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full p-2.5 bg-white border border-slate-300 rounded-xl text-xs font-mono text-slate-900 focus:outline-none focus:border-red-600"
                />
              </div>

              <div>
                <label className="block text-[10px] font-extrabold text-slate-900 uppercase font-mono mb-0.5">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="your.email@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-2.5 bg-white border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-red-600"
                />
              </div>
            </div>
          </div>

          {/* ANYTHING ELSE? */}
          <div className="space-y-1.5 pb-3 border-b border-slate-200/80">
            <h3 className="text-[11px] font-mono font-black text-red-600 uppercase tracking-widest">
              ANYTHING ELSE?
            </h3>
            <textarea
              rows={2}
              placeholder="Tell us what you're looking for..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-2.5 bg-white border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-red-600"
            />
          </div>

          {/* SUBMIT ACTIONS */}
          <div className="space-y-3 text-center pt-1">
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <button
                type="submit"
                className="flex-1 w-full cursor-pointer py-3.5 px-5 bg-gradient-to-r from-red-600 via-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-black text-xs uppercase tracking-wider rounded-full shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 border border-red-500/40"
              >
                <span>GET MY QUOTE</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>

              <button
                type="button"
                onClick={triggerEmailInvoice}
                className="flex-1 w-full cursor-pointer py-3.5 px-5 bg-slate-900 hover:bg-slate-800 text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 rounded-full transition-all shadow-md border border-slate-700"
              >
                <Mail className="w-4 h-4 text-white" />
                <span>SEND INVOICE VIA EMAIL</span>
              </button>

              <button
                type="button"
                onClick={triggerWhatsApp}
                className="flex-1 w-full cursor-pointer py-3.5 px-5 bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 rounded-full transition-all shadow-md"
              >
                <MessageSquare className="w-4 h-4 text-white" />
                <span>CHAT ON WHATSAPP</span>
              </button>
            </div>

            <p className="text-[11px] text-slate-500 font-sans italic">
              We’ll contact you with availability, pricing, and supply details.
            </p>
          </div>

        </form>
      )}

    </div>
  );
}
