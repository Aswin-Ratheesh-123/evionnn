"use client";

import React, { useState } from "react";
import { ArrowRight, Calculator, CheckCircle2, ChevronDown, ChevronUp } from "lucide-react";

interface GreatPowerHostProps {
  onOpenCallbackModal: () => void;
}

export default function GreatPowerHost({ onOpenCallbackModal }: GreatPowerHostProps) {
  const [calculatorOpen, setCalculatorOpen] = useState(false);
  const [dailyCars, setDailyCars] = useState(30);
  const [tariff, setTariff] = useState(21);
  const [guns, setGuns] = useState(2);

  // Calculations
  const ksebCost = 7.0;
  const avgKwh = 32;
  const monthlyUnits = dailyCars * avgKwh * 30;
  const grossRev = monthlyUnits * tariff;
  const powerCost = monthlyUnits * ksebCost;
  const netMargin = grossRev - powerCost;
  const partnerNetProfit = Math.round(netMargin * 0.85); // 85% partner share

  return (
    <section id="great-power" className="bg-[#121212] text-white py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-neutral-800">
      <div className="max-w-[1360px] mx-auto">
        {/* Exact Ather Style Split Card */}
        <div className="bg-[#1c1c1e] rounded-3xl sm:rounded-[36px] p-8 sm:p-14 lg:p-16 border border-neutral-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            {/* Left Col: Bold Heading */}
            <div className="lg:col-span-6">
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
                Great power. <br />
                <span className="text-neutral-400 font-normal">No responsibility.</span>
              </h2>
            </div>

            {/* Right Col: Copy & Host CTA */}
            <div className="lg:col-span-6 space-y-6">
              <p className="text-sm sm:text-base md:text-lg text-neutral-300 font-light leading-relaxed">
                Got a business space? Own commercial land along NH-66, NH-544, or in major Kerala towns? Host an Evion Public Fast Charger for zero hassle and earn guaranteed recurring returns on electricity dispensed. And the footfalls from thousands of premium electric car owners? Consider that a perk.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={onOpenCallbackModal}
                  className="px-7 py-3.5 rounded-full bg-white text-black hover:bg-neutral-200 font-bold text-xs sm:text-sm transition-transform hover:scale-105 active:scale-95"
                >
                  Become a Host / Partner
                </button>

                <button
                  onClick={() => setCalculatorOpen(!calculatorOpen)}
                  className="px-5 py-3.5 rounded-full bg-neutral-800 hover:bg-neutral-700 text-neutral-200 font-semibold text-xs sm:text-sm border border-neutral-700 transition-colors flex items-center space-x-2"
                >
                  <Calculator className="w-4 h-4 text-emerald-400" />
                  <span>{calculatorOpen ? "Hide ROI Calculator" : "Calculate Estimated Revenue"}</span>
                  {calculatorOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </div>

          {/* Collapsible ROI Calculator inside Great Power section */}
          {calculatorOpen && (
            <div className="mt-12 pt-10 border-t border-neutral-800 animate-in fade-in slide-in-from-top-4 duration-300">
              <div className="text-center max-w-xl mx-auto mb-8">
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Kerala Franchise Revenue Simulator
                </h3>
                <p className="text-xs text-neutral-400 mt-1">
                  Adjust daily car traffic and tariff to view your monthly net earnings.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {/* Guns Slider */}
                <div className="bg-[#242426] p-5 rounded-2xl border border-neutral-700">
                  <div className="text-xs font-semibold text-neutral-400 uppercase">Fast Guns</div>
                  <div className="text-2xl font-bold text-white mt-1">{guns} Guns (120kW DC)</div>
                  <div className="flex gap-2 mt-3">
                    {[2, 4, 6].map((g) => (
                      <button
                        key={g}
                        onClick={() => setGuns(g)}
                        className={`flex-1 py-1.5 rounded-lg text-xs font-bold ${
                          guns === g ? "bg-white text-black" : "bg-neutral-800 text-neutral-300"
                        }`}
                      >
                        {g} Guns
                      </button>
                    ))}
                  </div>
                </div>

                {/* Daily Cars */}
                <div className="bg-[#242426] p-5 rounded-2xl border border-neutral-700">
                  <div className="flex justify-between items-center text-xs font-semibold text-neutral-400 uppercase">
                    <span>Daily Cars Charged</span>
                    <span className="text-white font-bold">{dailyCars} cars</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="60"
                    value={dailyCars}
                    onChange={(e) => setDailyCars(Number(e.target.value))}
                    className="w-full mt-4 accent-emerald-400 cursor-pointer"
                  />
                  <div className="text-[10px] text-neutral-400 mt-1">Avg ~30 cars on Kerala highways</div>
                </div>

                {/* Net Earnings Output */}
                <div className="bg-gradient-to-br from-emerald-950/60 to-[#242426] p-5 rounded-2xl border border-emerald-500/40 flex flex-col justify-between">
                  <div>
                    <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                      Est. Partner Monthly Net
                    </div>
                    <div className="text-3xl font-black text-white mt-1 font-mono">
                      ₹{partnerNetProfit.toLocaleString("en-IN")}
                    </div>
                    <div className="text-[11px] text-neutral-300 mt-1">
                      ≈ ₹{(partnerNetProfit * 12).toLocaleString("en-IN")} / year
                    </div>
                  </div>

                  <button
                    onClick={onOpenCallbackModal}
                    className="w-full mt-4 py-2 rounded-xl bg-white text-black font-bold text-xs hover:bg-neutral-200 transition-colors"
                  >
                    Apply with This Plan
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

