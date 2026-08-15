/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Lock, ShieldAlert, FileText, Users, Package, BarChart3, CheckCircle2, ArrowRight } from 'lucide-react';
import { PRODUCTS } from '../data';

export default function OwnerDesk() {
  const [authenticated, setAuthenticated] = useState(true);
  const [activeTab, setActiveTab] = useState<'inquiries' | 'leads' | 'catalog' | 'analytics'>('inquiries');

  const dummyInquiries = [
    { id: 'RFQ-8921', client: 'Rajesh Auto Spare Parts', city: 'Pune', product: 'MD2031 (HR Passion Plated)', qty: '100 Units', type: 'Dealer', date: 'Today, 09:40 AM', status: 'Pending Review' },
    { id: 'RFQ-8920', client: 'Southern Moto Distributors', city: 'Chennai', product: 'MD1002 (Honda Shine Red)', qty: '500+ Units', type: 'Distributor', date: 'Yesterday', status: 'Quote Sent' },
    { id: 'RFQ-8919', client: 'Speedway Workshop Services', city: 'Nasik', product: 'MD3004 (Bajaj Comfortec)', qty: '50 Units', type: 'Workshop', date: '12 Aug 2026', status: 'Contacted' },
  ];

  return (
    <div className="w-full bg-grainy-midnight text-[#F5F7FA] min-h-[600px] p-6 sm:p-10 rounded-2xl border border-[#263448] shadow-2xl space-y-8 font-mono relative overflow-hidden max-w-[1440px] mx-auto my-6" id="owner-desk-view">
      <div className="relative z-10 space-y-8">
        
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#263448] pb-6 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#111C2E] border border-[#263448] text-red-500 text-[10px] font-bold uppercase rounded-full">
              <Lock className="w-3 h-3 text-red-500" />
              <span>SECURE MANAGEMENT PORTAL</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-[#F5F7FA] uppercase font-heading tracking-tight mt-2">
              Owner Desk &amp; B2B Commercial CRM
            </h1>
            <p className="text-[#AAB4C2] text-xs font-sans mt-0.5">
              Internal dashboard for monitoring incoming wholesale quote requests, dealer leads, and catalogue telemetry.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-3.5 py-1.5 bg-emerald-950/80 border border-emerald-800/80 text-emerald-400 text-xs font-bold rounded-full shadow-sm">
              SYSTEM STATUS: ACTIVE
            </span>
          </div>
        </div>

        {/* Internal Navigation Tabs */}
        <div className="flex flex-wrap gap-2.5 border-b border-[#263448] pb-4">
          {[
            { id: 'inquiries', label: 'Commercial Inquiries (3)', icon: FileText },
            { id: 'leads', label: 'Dealer Leads', icon: Users },
            { id: 'catalog', label: 'Product Inventory (15)', icon: Package },
            { id: 'analytics', label: 'Demand Analytics', icon: BarChart3 },
          ].map((tab) => {
            const Icon = tab.icon;
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`cursor-pointer px-4 py-2.5 text-xs font-bold uppercase tracking-wider rounded-xl transition-all flex items-center gap-2 border ${
                  active
                    ? 'bg-red-600 text-white border-red-500 shadow-md'
                    : 'bg-[#111C2E] text-[#AAB4C2] border-[#263448] hover:border-slate-600'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab 1: Commercial Inquiries */}
        {activeTab === 'inquiries' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between text-xs text-[#AAB4C2] border-b border-[#263448] pb-2">
              <span>INCOMING B2B WHOLESALE RFQs</span>
              <span>REAL-TIME FEED</span>
            </div>

            <div className="bg-[#111C2E] border border-[#263448] rounded-xl overflow-x-auto shadow-inner">
              <table className="w-full text-left text-xs text-[#AAB4C2]">
                <thead className="bg-[#162337] text-[#AAB4C2] text-[10px] uppercase font-bold border-b border-[#263448]">
                  <tr>
                    <th className="p-3.5">RFQ ID</th>
                    <th className="p-3.5">Client Firm</th>
                    <th className="p-3.5">Location</th>
                    <th className="p-3.5">Product Interest</th>
                    <th className="p-3.5">Quantity</th>
                    <th className="p-3.5">Type</th>
                    <th className="p-3.5">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#263448]">
                  {dummyInquiries.map((inq) => (
                    <tr key={inq.id} className="hover:bg-[#162337] transition-colors">
                      <td className="p-3.5 font-bold text-red-500">{inq.id}</td>
                      <td className="p-3.5 font-bold text-[#F5F7FA] font-sans">{inq.client}</td>
                      <td className="p-3.5">{inq.city}</td>
                      <td className="p-3.5">{inq.product}</td>
                      <td className="p-3.5 font-bold text-[#F5F7FA]">{inq.qty}</td>
                      <td className="p-3.5">
                        <span className="px-2 py-0.5 bg-[#162337] border border-[#263448] text-[#F5F7FA] text-[10px] font-bold rounded-md">
                          {inq.type}
                        </span>
                      </td>
                      <td className="p-3.5">
                        <span className={`px-2 py-0.5 text-[10px] font-bold rounded-md ${
                          inq.status === 'Pending Review'
                            ? 'bg-[#162337] border border-red-900/60 text-red-500'
                            : inq.status === 'Quote Sent'
                            ? 'bg-emerald-950/80 border border-emerald-800 text-emerald-400'
                            : 'bg-[#162337] border border-[#263448] text-[#AAB4C2]'
                        }`}>
                          {inq.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
