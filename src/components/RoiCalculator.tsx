"use client";

import React, { useState } from "react";
import {
  Calculator,
  IndianRupee,
  ArrowRight,
  Info
} from "lucide-react";

interface RoiCalculatorProps {
  onOpenModal: () => void;
}

export default function RoiCalculator({ onOpenModal }: RoiCalculatorProps) {
  const [guns, setGuns] = useState<number>(2);
  const [dailyCars, setDailyCars] = useState<number>(25);
  const [avgKwh, setAvgKwh] = useState<number>(32);
  const [sellingPrice, setSellingPrice] = useState<number>(21);

  // Kerala Assumptions
  const ksebCostPerKwh = 7.0;
  const evionTechSharePercent = 0.15;

  const dailyUnits = dailyCars * avgKwh;
  const monthlyUnits = dailyUnits * 30;

  const monthlyGrossRevenue = monthlyUnits * sellingPrice;
  const monthlyElectricityCost = monthlyUnits * ksebCostPerKwh;
  const grossMargin = monthlyGrossRevenue - monthlyElectricityCost;

  const evionShare = grossMargin * evionTechSharePercent;
  const partnerNetMonthlyProfit = Math.round(grossMargin - evionShare);
  const partnerAnnualNetProfit = partnerNetMonthlyProfit * 12;

  const capexByGuns: Record<number, number> = {
    2: 1800000,
    4: 3200000,
    6: 4600000
  };

  const estimatedCapex = capexByGuns[guns] || 1800000;
  const paybackMonths = Math.max(8, Math.round((estimatedCapex / partnerNetMonthlyProfit) * 10) / 10);

  const applyPreset = (preset: "highway" | "city" | "destination") => {
    if (preset === "highway") {
      setGuns(4);
      setDailyCars(40);
      setAvgKwh(38);
      setSellingPrice(22);
    } else if (preset === "city") {
      setGuns(2);
      setDailyCars(28);
      setAvgKwh(30);
      setSellingPrice(21);
    } else if (preset === "destination") {
      setGuns(2);
      setDailyCars(14);
      setAvgKwh(35);
      setSellingPrice(23);
    }
  };

  return (
    <section id="calculator" className="py-20 md:py-28 bg-white text-neutral-900 border-b border-neutral-200">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-100 text-neutral-800 text-xs font-bold uppercase tracking-wider mb-4 border border-neutral-200">
            <Calculator className="w-3.5 h-3.5 text-neutral-800" />
            <span>ROI & Financial Projections</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-black mb-4">
            Interactive Franchise Revenue Calculator
          </h2>
          <p className="text-base sm:text-lg text-neutral-600">
            Simulate your monthly cash flow based on Kerala’s actual EV traffic patterns and KSEB commercial electricity tariffs.
          </p>

          {/* Ather style scenario pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            <span className="text-xs font-semibold text-neutral-400 mr-1">Presets:</span>
            <button
              onClick={() => applyPreset("highway")}
              className="text-xs px-3.5 py-1.5 rounded-full border border-neutral-300 hover:border-black font-semibold text-neutral-800 bg-white transition-colors"
            >
              🚗 NH-66 Highway Hub
            </button>
            <button
              onClick={() => applyPreset("city")}
              className="text-xs px-3.5 py-1.5 rounded-full border border-neutral-300 hover:border-black font-semibold text-neutral-800 bg-white transition-colors"
            >
              🏙️ Kochi Mall / Retail
            </button>
            <button
              onClick={() => applyPreset("destination")}
              className="text-xs px-3.5 py-1.5 rounded-full border border-neutral-300 hover:border-black font-semibold text-neutral-800 bg-white transition-colors"
            >
              ⛰️ Munnar / Wayanad Resort
            </button>
          </div>
        </div>

        {/* Main Box */}
        <div className="bg-[#f7f7f8] border border-neutral-200 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Sliders */}
            <div className="lg:col-span-7 space-y-7">
              {/* Guns */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold text-neutral-700 uppercase tracking-wider">
                    Fast Charging Guns
                  </label>
                  <span className="text-xs font-bold text-neutral-900">
                    {guns === 2 && "2 Guns (120kW DC)"}
                    {guns === 4 && "4 Guns (2x 120kW Superhub)"}
                    {guns === 6 && "6 Guns (Highway Plaza)"}
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {[2, 4, 6].map((num) => (
                    <button
                      key={num}
                      onClick={() => setGuns(num)}
                      className={`py-3 rounded-2xl border text-xs sm:text-sm font-bold transition-all ${
                        guns === num
                          ? "bg-black text-white border-black shadow-sm"
                          : "bg-white text-neutral-800 border-neutral-300 hover:border-neutral-400"
                      }`}
                    >
                      {num} Fast Guns
                    </button>
                  ))}
                </div>
              </div>

              {/* Slider 1 */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold text-neutral-700 uppercase tracking-wider">
                    Daily Cars Charged (Across All Guns)
                  </label>
                  <span className="text-base font-black text-black">
                    {dailyCars} <span className="text-xs font-normal text-neutral-500">cars/day</span>
                  </span>
                </div>
                <input
                  type="range"
                  min="8"
                  max="70"
                  step="1"
                  value={dailyCars}
                  onChange={(e) => setDailyCars(Number(e.target.value))}
                  className="w-full h-2 bg-neutral-300 rounded-lg appearance-none cursor-pointer accent-[#00d26a]"
                />
                <div className="flex justify-between text-[11px] text-neutral-500 mt-1">
                  <span>8 cars/day</span>
                  <span>40 cars/day (Avg Highway)</span>
                  <span>70 cars/day</span>
                </div>
              </div>

              {/* Slider 2 */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold text-neutral-700 uppercase tracking-wider">
                    Avg. Energy per Charge
                  </label>
                  <span className="text-base font-black text-black">
                    {avgKwh} <span className="text-xs font-normal text-neutral-500">kWh (Units)</span>
                  </span>
                </div>
                <input
                  type="range"
                  min="15"
                  max="55"
                  step="1"
                  value={avgKwh}
                  onChange={(e) => setAvgKwh(Number(e.target.value))}
                  className="w-full h-2 bg-neutral-300 rounded-lg appearance-none cursor-pointer accent-[#00d26a]"
                />
                <div className="flex justify-between text-[11px] text-neutral-500 mt-1">
                  <span>15 kWh</span>
                  <span>32 kWh (Standard EV)</span>
                  <span>55 kWh</span>
                </div>
              </div>

              {/* Slider 3 */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold text-neutral-700 uppercase tracking-wider">
                    Customer Tariff Charged
                  </label>
                  <span className="text-base font-black text-black">
                    ₹{sellingPrice} <span className="text-xs font-normal text-neutral-500">/ kWh</span>
                  </span>
                </div>
                <input
                  type="range"
                  min="18"
                  max="26"
                  step="1"
                  value={sellingPrice}
                  onChange={(e) => setSellingPrice(Number(e.target.value))}
                  className="w-full h-2 bg-neutral-300 rounded-lg appearance-none cursor-pointer accent-[#00d26a]"
                />
                <div className="flex justify-between text-[11px] text-neutral-500 mt-1">
                  <span>₹18 / unit</span>
                  <span>₹21 / unit (Standard Kerala)</span>
                  <span>₹26 / unit</span>
                </div>
              </div>

              {/* Note */}
              <div className="p-4 rounded-2xl bg-white border border-neutral-200 text-xs text-neutral-600 flex items-start space-x-2.5">
                <Info className="w-4 h-4 text-neutral-500 shrink-0 mt-0.5" />
                <p>
                  Calculations factor in Kerala State Electricity Board (KSEB) commercial electricity tariff at ₹{ksebCostPerKwh}/kWh, and 15% platform management including Cloud CMS, Evion mobile app gateways, and customer support.
                </p>
              </div>
            </div>

            {/* Results Card */}
            <div className="lg:col-span-5 bg-white border border-neutral-300/80 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col justify-between">
              <div className="space-y-6">
                <div>
                  <span className="text-[11px] uppercase tracking-wider font-bold text-neutral-500">
                    Estimated Partner Net Earnings
                  </span>
                  <div className="flex items-baseline space-x-1 mt-1">
                    <span className="text-3xl sm:text-5xl font-black text-black tracking-tight">
                      ₹{partnerNetMonthlyProfit.toLocaleString("en-IN")}
                    </span>
                    <span className="text-sm font-semibold text-neutral-500">/ month</span>
                  </div>
                  <div className="text-xs text-emerald-700 font-bold mt-1">
                    ≈ ₹{partnerAnnualNetProfit.toLocaleString("en-IN")} Annual Net Cash Flow
                  </div>
                </div>

                {/* Breakdown */}
                <div className="space-y-3 pt-4 border-t border-neutral-200 text-xs">
                  <div className="flex items-center justify-between text-neutral-700">
                    <span className="text-neutral-500">Monthly Gross Revenue:</span>
                    <span className="font-bold text-black font-mono">
                      ₹{monthlyGrossRevenue.toLocaleString("en-IN")}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-neutral-700">
                    <span className="text-neutral-500">KSEB Power Cost:</span>
                    <span className="font-bold text-neutral-700 font-mono">
                      - ₹{monthlyElectricityCost.toLocaleString("en-IN")}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-neutral-700">
                    <span className="text-neutral-500">Evion Cloud & Tech Share (15%):</span>
                    <span className="font-bold text-neutral-700 font-mono">
                      - ₹{Math.round(evionShare).toLocaleString("en-IN")}
                    </span>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-neutral-200 text-sm font-black text-black">
                    <span>Payback Horizon:</span>
                    <span className="text-[#00d26a] font-mono">
                      ~ {paybackMonths} Months
                    </span>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="pt-8 space-y-2">
                <button
                  onClick={onOpenModal}
                  className="w-full py-4 px-6 rounded-full bg-black text-white hover:bg-neutral-800 font-bold text-xs sm:text-sm shadow-md flex items-center justify-center space-x-2 transition-transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>Apply with This Revenue Plan</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-center text-[11px] text-neutral-500">
                  Custom financial model tailored to your Kerala site.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
