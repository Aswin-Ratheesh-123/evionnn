"use client";

import React from "react";
import { Check, Landmark, Sparkles } from "lucide-react";

interface BusinessModelSectionProps {
  onSelectModel?: (modelName: string) => void;
}

export default function BusinessModelSection({ onSelectModel }: BusinessModelSectionProps) {
  const handleScrollToApply = (modelName?: string) => {
    if (onSelectModel && modelName) {
      onSelectModel(modelName);
    }
    const applySection = document.getElementById("apply");
    if (applySection) {
      applySection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="w-full rounded-3xl sm:rounded-[36px] bg-[#00c36a] text-neutral-950 p-6 sm:p-9 lg:p-12 shadow-2xl overflow-hidden relative border border-emerald-400/30">
      {/* 1. Header */}
      <div className="max-w-3xl mb-8 sm:mb-10">
        <div className="inline-flex items-center gap-1 text-[11px] font-mono font-bold tracking-wider uppercase text-neutral-900/80 mb-2">
          <span>4/6</span>
          <span>·</span>
          <span>BUSINESS MODEL</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black tracking-tight leading-[1.08] mb-3">
          Multiple Revenue Streams. Scalable Growth.
        </h2>

        <p className="text-sm sm:text-base font-medium text-neutral-900/80 leading-relaxed max-w-xl">
          Three ways to grow with EVION — pick the model that fits you.
        </p>
      </div>

      {/* 2. Three Business Model Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 items-stretch mb-6 sm:mb-8">
        {/* Card 1: COCO */}
        <div className="bg-white text-neutral-900 rounded-[28px] p-6 sm:p-7 flex flex-col justify-between shadow-xl border border-black/10 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
          <div>
            <h3 className="text-3xl sm:text-4xl font-black tracking-tight text-black mb-1">
              COCO
            </h3>
            <p className="text-xs sm:text-sm font-bold text-neutral-800 mb-2">
              Company Owned, Company Operated
            </p>
            <p className="text-xs sm:text-[13px] text-neutral-600 leading-relaxed mb-5">
              EVION invests in, owns and operates the charging station.
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-1.5 mb-6">
              <span className="px-3 py-1 rounded-full bg-[#141518] text-[#ffd13f] text-[11px] font-bold tracking-tight">
                Invests · EVION
              </span>
              <span className="px-3 py-1 rounded-full bg-[#141518] text-[#ffd13f] text-[11px] font-bold tracking-tight">
                Owns · EVION
              </span>
              <span className="px-3 py-1 rounded-full bg-[#141518] text-[#ffd13f] text-[11px] font-bold tracking-tight">
                Operates · EVION
              </span>
            </div>
          </div>

          <div>
            <div className="border-t border-neutral-200 my-4" />
            <ul className="space-y-2 text-xs sm:text-[13px] font-semibold text-neutral-800">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-neutral-900 stroke-[2.5] shrink-0" />
                <span>Full revenue control</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-neutral-900 stroke-[2.5] shrink-0" />
                <span>Brand consistency</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-neutral-900 stroke-[2.5] shrink-0" />
                <span>Premium locations</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-neutral-900 stroke-[2.5] shrink-0" />
                <span>Higher profitability</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Card 2: FOCO */}
        <div className="bg-[#b9a6ff] text-neutral-900 rounded-[28px] p-6 sm:p-7 flex flex-col justify-between shadow-xl border border-black/10 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
          <div>
            <h3 className="text-3xl sm:text-4xl font-black tracking-tight text-black mb-1">
              FOCO
            </h3>
            <p className="text-xs sm:text-sm font-bold text-neutral-900 mb-2">
              Franchise Owned, Company Operated
            </p>
            <p className="text-xs sm:text-[13px] text-neutral-900/80 leading-relaxed mb-5">
              The partner invests in the infrastructure while EVION manages operations and technology.
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-1.5 mb-6">
              <span className="px-3 py-1 rounded-full bg-white text-neutral-950 border border-neutral-300 text-[11px] font-bold tracking-tight shadow-xs">
                Invests · Partner
              </span>
              <span className="px-3 py-1 rounded-full bg-white text-neutral-950 border border-neutral-300 text-[11px] font-bold tracking-tight shadow-xs">
                Owns · Partner
              </span>
              <span className="px-3 py-1 rounded-full bg-[#141518] text-[#ffd13f] text-[11px] font-bold tracking-tight">
                Operates · EVION
              </span>
            </div>
          </div>

          <div>
            <div className="border-t border-black/15 my-4" />
            <ul className="space-y-2 text-xs sm:text-[13px] font-semibold text-neutral-950">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-neutral-950 stroke-[2.5] shrink-0" />
                <span>Faster expansion</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-neutral-950 stroke-[2.5] shrink-0" />
                <span>Lower capital requirement</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-neutral-950 stroke-[2.5] shrink-0" />
                <span>Local partner participation</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-neutral-950 stroke-[2.5] shrink-0" />
                <span>Scalable growth model</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Card 3: 70 / 30 */}
        <div className="bg-[#ffd13f] text-neutral-900 rounded-[28px] p-6 sm:p-7 flex flex-col justify-between shadow-xl border border-black/10 relative hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
          {/* NEW Badge */}
          <span className="absolute top-4 right-4 px-2.5 py-0.5 rounded-full bg-[#ff5252] text-white text-[10px] font-black uppercase tracking-wider shadow-xs border border-white/20">
            NEW
          </span>

          <div>
            <h3 className="text-3xl sm:text-4xl font-black tracking-tight text-black mb-1">
              70 / 30
            </h3>
            <p className="text-xs sm:text-sm font-bold text-neutral-950 mb-2">
              Revenue-Share Franchise
            </p>
            <p className="text-xs sm:text-[13px] text-neutral-900/80 leading-relaxed mb-5">
              A franchise model where the franchise partner keeps 70% of the charging revenue and EVION takes 30%.
            </p>

            {/* 70/30 Visual Split Bar */}
            <div className="mb-6">
              <div className="w-full h-8 rounded-xl overflow-hidden flex items-stretch border border-black/15 shadow-inner mb-1.5">
                <div className="w-[70%] bg-[#00c36a] flex items-center justify-center font-black text-xs text-black tracking-tight">
                  70%
                </div>
                <div className="w-[30%] bg-[#141518] flex items-center justify-center font-black text-xs text-[#ffd13f] tracking-tight">
                  30%
                </div>
              </div>
              <div className="flex justify-between items-center text-[11px] font-bold text-neutral-950 px-0.5">
                <span>Franchise partner</span>
                <span>EVION</span>
              </div>
            </div>
          </div>

          <div>
            <div className="border-t border-black/15 my-4" />
            <ul className="space-y-2 text-xs sm:text-[13px] font-semibold text-neutral-950">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-neutral-950 stroke-[2.5] shrink-0" />
                <span>70% of the revenue goes to you</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-neutral-950 stroke-[2.5] shrink-0" />
                <span>Backed by EVION technology and support</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-neutral-950 stroke-[2.5] shrink-0" />
                <span>Loan support through SBI EV Mitra</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* 3. Loan Support Through SBI EV Mitra Banner */}
      <div className="bg-[#141c14] border border-white/10 rounded-[24px] p-5 sm:p-6 lg:p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 shadow-2xl mb-8">
        <div className="flex items-start sm:items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-[#ffd13f] text-neutral-950 flex items-center justify-center shrink-0 shadow-md">
            <Landmark className="w-6 h-6 stroke-[2.2]" />
          </div>
          <div>
            <span className="block text-[#ffd13f] text-[10px] sm:text-[11px] font-mono font-bold tracking-wider uppercase mb-1">
              NEED FUNDING?
            </span>
            <h4 className="text-lg sm:text-xl font-bold text-white tracking-tight leading-snug mb-1">
              Loan support through SBI EV Mitra
            </h4>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed max-w-2xl">
              Interested franchise partners can get help applying for SBI&apos;s EV Mitra loan for EV charging infrastructure. Subject to the bank&apos;s eligibility and approval.
            </p>
          </div>
        </div>

        <button
          onClick={() => handleScrollToApply("SBI EV Mitra Financing")}
          className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-[#ffd13f] hover:bg-[#ffbe26] text-neutral-950 font-bold text-xs sm:text-sm transition-all shadow-md hover:scale-105 active:scale-95 shrink-0 whitespace-nowrap cursor-pointer"
        >
          Ask about financing
        </button>
      </div>

      {/* 4. Key Advantages */}
      <div>
        <h4 className="text-xl sm:text-2xl font-black text-black mb-3.5 tracking-tight">
          Key advantages
        </h4>
        <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
          <span className="px-4 py-2 rounded-full bg-[#111215] text-white text-xs sm:text-sm font-bold shadow-sm flex items-center gap-1.5 border border-white/10">
            <Sparkles className="w-3.5 h-3.5 text-[#ffd13f] fill-[#ffd13f]" />
            <span>Asset-light expansion</span>
          </span>
          <span className="px-4 py-2 rounded-full bg-white text-neutral-950 border border-black/15 text-xs sm:text-sm font-bold shadow-xs">
            Recurring revenue
          </span>
          <span className="px-4 py-2 rounded-full bg-[#ffd13f] text-neutral-950 border border-black/15 text-xs sm:text-sm font-bold shadow-xs">
            Strong partner ecosystem
          </span>
          <span className="px-4 py-2 rounded-full bg-white text-neutral-950 border border-black/15 text-xs sm:text-sm font-bold shadow-xs">
            Scalable pan-India model
          </span>
          <span className="px-4 py-2 rounded-full bg-[#0066ff] text-white border border-white/20 text-xs sm:text-sm font-bold shadow-xs">
            Technology-driven operations
          </span>
        </div>
      </div>
    </section>
  );
}
