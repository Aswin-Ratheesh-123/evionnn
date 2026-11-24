"use client";

import React from "react";
import { Crown, Check, Landmark, ArrowRight, Building2, UserCheck } from "lucide-react";

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
    <section className="w-full py-12 sm:py-16 border-t border-neutral-200">
      {/* 1. Section Header */}
      <div className="max-w-3xl mb-10 sm:mb-14">
        <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold tracking-wider uppercase text-[#0077e6] mb-3">
          <span>4/6</span>
          <span>·</span>
          <span>BUSINESS MODELS</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-neutral-700 tracking-tight leading-[1.1] mb-4">
          Multiple Revenue Streams. Scalable Growth.
        </h2>

        <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-xl">
          Three ways to grow with EVION — pick the model that fits your investment profile.
        </p>
      </div>

      {/* 2. Three Distinctly Highlighted Revenue Plans */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch pb-12 sm:pb-16 border-b border-neutral-200">
        {/* Plan 1: 70 / 30 (Flagship Highlight) */}
        <div className="relative rounded-3xl p-7 sm:p-8 flex flex-col justify-between bg-gradient-to-b from-[#0077e6]/[0.06] via-white to-white border-2 border-[#0077e6] shadow-xl shadow-[#0077e6]/10 hover:-translate-y-1 transition-all duration-300">
          <div className="space-y-5">
            {/* Top Highlight Badge */}
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0077e6] text-white text-[11px] font-mono font-bold uppercase tracking-wider shadow-sm">
                <Crown className="w-3.5 h-3.5 stroke-[2.2]" />
                <span>Flagship Model</span>
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-[#0077e6]/15 text-[#0077e6] text-[11px] font-mono font-black uppercase tracking-wider">
                70% Share
              </span>
            </div>

            {/* Plan Title & Subtitle */}
            <div>
              <h3 className="text-4xl sm:text-5xl font-black tracking-tight text-neutral-700">
                70 / 30
              </h3>
              <p className="text-sm font-bold text-[#0077e6] mt-1">
                Revenue-Share Franchise
              </p>
            </div>

            <p className="text-sm text-neutral-600 leading-relaxed">
              A franchise model where the franchise partner keeps 70% of the charging revenue and EVION takes 30%.
            </p>

            {/* Highlighted 70/30 Visual Split Bar */}
            <div className="p-3.5 rounded-2xl bg-white border border-[#0077e6]/25 shadow-xs space-y-2">
              <div className="w-full h-4 rounded-full overflow-hidden flex bg-neutral-100 p-0.5 border border-neutral-200">
                <div className="w-[70%] bg-[#0077e6] rounded-full flex items-center justify-center text-[10px] font-black text-white" />
                <div className="w-[30%] bg-neutral-900 rounded-full flex items-center justify-center text-[10px] font-black text-neutral-300" />
              </div>
              <div className="flex justify-between items-center text-xs font-mono font-bold pt-0.5">
                <span className="text-[#0077e6] font-black">70% Partner</span>
                <span className="text-neutral-700">30% EVION</span>
              </div>
            </div>

            {/* Feature List */}
            <ul className="space-y-3 text-sm text-neutral-700 pt-2 border-t border-neutral-100">
              <li className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-[#0077e6]/10 text-[#0077e6] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="font-semibold text-neutral-700">70% of the revenue goes to you</span>
              </li>
              <li className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-[#0077e6]/10 text-[#0077e6] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span>Backed by EVION technology and support</span>
              </li>
              <li className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-[#0077e6]/10 text-[#0077e6] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span>Loan support through SBI EV Mitra</span>
              </li>
            </ul>
          </div>

          <button
            onClick={() => handleScrollToApply("70 / 30 Revenue-Share")}
            className="w-full mt-6 py-3.5 px-5 rounded-full bg-[#0077e6] hover:bg-[#0052cc] text-white text-sm font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-[#0077e6]/25 hover:shadow-lg"
          >
            <span>Select 70 / 30 Model</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Plan 2: FOCO (Purple Highlight) */}
        <div className="relative rounded-3xl p-7 sm:p-8 flex flex-col justify-between bg-gradient-to-b from-purple-500/[0.05] via-white to-white border-2 border-purple-200 hover:border-purple-400 shadow-xl shadow-purple-500/5 hover:-translate-y-1 transition-all duration-300">
          <div className="space-y-5">
            {/* Top Highlight Badge */}
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-700 text-white text-[11px] font-mono font-bold uppercase tracking-wider shadow-sm">
                <UserCheck className="w-3 h-3" />
                <span>Partner Model</span>
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-purple-100 text-purple-800 text-[11px] font-mono font-bold uppercase tracking-wider">
                Passive
              </span>
            </div>

            {/* Plan Title & Subtitle */}
            <div>
              <h3 className="text-4xl sm:text-5xl font-black tracking-tight text-neutral-700">
                FOCO
              </h3>
              <p className="text-sm font-bold text-purple-700 mt-1">
                Franchise Owned, Company Operated
              </p>
            </div>

            <p className="text-sm text-neutral-600 leading-relaxed">
              The partner invests in the infrastructure while EVION manages operations and technology.
            </p>

            {/* Highlighted Responsibilities Badges */}
            <div className="p-3.5 rounded-2xl bg-purple-50/60 border border-purple-100 space-y-1.5 text-xs font-mono">
              <div className="flex items-center justify-between">
                <span className="text-neutral-600">Invests:</span>
                <span className="px-2 py-0.5 rounded-md bg-purple-200/80 text-purple-900 font-bold">Partner</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-neutral-600">Owns:</span>
                <span className="px-2 py-0.5 rounded-md bg-purple-200/80 text-purple-900 font-bold">Partner</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-neutral-600">Operates:</span>
                <span className="px-2 py-0.5 rounded-md bg-neutral-900 text-white font-bold">EVION</span>
              </div>
            </div>

            {/* Feature List */}
            <ul className="space-y-3 text-sm text-neutral-700 pt-2 border-t border-neutral-100">
              <li className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span>Faster expansion</span>
              </li>
              <li className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span>Lower capital requirement</span>
              </li>
              <li className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span>Local partner participation</span>
              </li>
              <li className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span>Scalable growth model</span>
              </li>
            </ul>
          </div>

          <button
            onClick={() => handleScrollToApply("FOCO (Franchise Owned, Company Operated)")}
            className="w-full mt-6 py-3.5 px-5 rounded-full bg-purple-700 hover:bg-purple-800 text-white text-sm font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-purple-700/20 hover:shadow-lg"
          >
            <span>Select FOCO Model</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Plan 3: COCO (Emerald Highlight) */}
        <div className="relative rounded-3xl p-7 sm:p-8 flex flex-col justify-between bg-gradient-to-b from-emerald-500/[0.05] via-white to-white border-2 border-emerald-200 hover:border-emerald-400 shadow-xl shadow-emerald-500/5 hover:-translate-y-1 transition-all duration-300">
          <div className="space-y-5">
            {/* Top Highlight Badge */}
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-700 text-white text-[11px] font-mono font-bold uppercase tracking-wider shadow-sm">
                <Building2 className="w-3 h-3" />
                <span>Company Model</span>
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-mono font-bold uppercase tracking-wider">
                Turnkey
              </span>
            </div>

            {/* Plan Title & Subtitle */}
            <div>
              <h3 className="text-4xl sm:text-5xl font-black tracking-tight text-neutral-700">
                COCO
              </h3>
              <p className="text-sm font-bold text-emerald-700 mt-1">
                Company Owned, Company Operated
              </p>
            </div>

            <p className="text-sm text-neutral-600 leading-relaxed">
              EVION invests in, owns and operates the charging station.
            </p>

            {/* Highlighted Responsibilities Badges */}
            <div className="p-3.5 rounded-2xl bg-emerald-50/60 border border-emerald-100 space-y-1.5 text-xs font-mono">
              <div className="flex items-center justify-between">
                <span className="text-neutral-600">Invests:</span>
                <span className="px-2 py-0.5 rounded-md bg-emerald-200/80 text-emerald-900 font-bold">EVION</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-neutral-600">Owns:</span>
                <span className="px-2 py-0.5 rounded-md bg-emerald-200/80 text-emerald-900 font-bold">EVION</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-neutral-600">Operates:</span>
                <span className="px-2 py-0.5 rounded-md bg-emerald-200/80 text-emerald-900 font-bold">EVION</span>
              </div>
            </div>

            {/* Feature List */}
            <ul className="space-y-3 text-sm text-neutral-700 pt-2 border-t border-neutral-100">
              <li className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span>Full revenue control</span>
              </li>
              <li className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span>Brand consistency</span>
              </li>
              <li className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span>Premium locations</span>
              </li>
              <li className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span>Higher profitability</span>
              </li>
            </ul>
          </div>

          <button
            onClick={() => handleScrollToApply("COCO (Company Owned, Company Operated)")}
            className="w-full mt-6 py-3.5 px-5 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white text-sm font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-emerald-700/20 hover:shadow-lg"
          >
            <span>Select COCO Model</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* 3. Highlighted Loan Support Through SBI EV Mitra Banner */}
      <div className="mt-10 sm:mt-12 p-6 sm:p-8 rounded-3xl bg-neutral-50 border border-neutral-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-[#0077e6]/10 text-[#0077e6] flex items-center justify-center shrink-0 border border-[#0077e6]/20">
            <Landmark className="w-6 h-6 stroke-[2]" />
          </div>
          <div>
            <span className="block text-[#0077e6] text-[11px] font-mono font-bold tracking-wider uppercase mb-1">
              NEED FUNDING?
            </span>
            <h4 className="text-lg sm:text-xl font-bold text-neutral-700 tracking-tight leading-snug mb-1">
              Loan support through SBI EV Mitra
            </h4>
            <p className="text-sm text-neutral-600 leading-relaxed max-w-2xl">
              Interested franchise partners can get help applying for SBI&apos;s EV Mitra loan for EV charging infrastructure. Subject to the bank&apos;s eligibility and approval.
            </p>
          </div>
        </div>

        <button
          onClick={() => handleScrollToApply("SBI EV Mitra Financing Support")}
          className="px-6 py-3 rounded-full bg-neutral-950 hover:bg-[#0077e6] text-white font-bold text-xs sm:text-sm transition-all shrink-0 whitespace-nowrap cursor-pointer shadow-sm"
        >
          Ask about financing
        </button>
      </div>
    </section>
  );
}
