"use client";

import React, { useState } from "react";
import {
  CheckCircle2,
  TrendingUp,
  Building2,
  Hotel,
  Compass,
  ArrowRight,
  ShieldCheck,
  Zap
} from "lucide-react";

interface FranchiseModelProps {
  onOpenModal: () => void;
}

export default function FranchiseModel({ onOpenModal }: FranchiseModelProps) {
  const [activeTab, setActiveTab] = useState<"highway" | "retail" | "destination">("highway");

  const models = [
    {
      id: "highway",
      title: "Highway Fast-Charge Superhub",
      subtitle: "Designed for NH-66, NH-544 & MC Road corridors",
      tag: "Highest Revenue Potential",
      badgeColor: "bg-emerald-50 text-emerald-800 border-emerald-200",
      icon: <Compass className="w-5 h-5 text-emerald-600" />,
      hardware: "120kW or 240kW Dual CCS2 Guns (Expandable)",
      spaceRequired: "4 to 6 car parking bays (800 - 1,500 sq.ft)",
      powerRequirement: "100kVA – 250kVA Dedicated KSEB Sanction",
      turnover: "₹2,50,000 – ₹4,50,000 / month estimated",
      payback: "12 – 16 Months",
      features: [
        "Simultaneous ultra-fast charging for 2-4 EVs",
        "High highway pass-through traffic across Kerala",
        "Integration with food courts, petrol pumps & rest stops",
        "Architectural canopy & roadside highway totem branding",
        "Priority 24/7 technical on-site SLA across Kerala"
      ]
    },
    {
      id: "retail",
      title: "Commercial & Retail Plaza Hub",
      subtitle: "For shopping malls, hypermarkets, cafes & city complexes",
      tag: "High Daily Shopper Footfall",
      badgeColor: "bg-blue-50 text-blue-800 border-blue-200",
      icon: <Building2 className="w-5 h-5 text-blue-600" />,
      hardware: "60kW DC Fast Dual Gun + Dual 22kW Type 2 AC",
      spaceRequired: "2 to 4 car bays (400 - 800 sq.ft)",
      powerRequirement: "60kVA – 100kVA Commercial Meter",
      turnover: "₹1,40,000 – ₹2,80,000 / month estimated",
      payback: "14 – 18 Months",
      features: [
        "Attracts high-spending EV drivers who stay 30-45 minutes",
        "Increases retail customer dwell time and basket size",
        "Captures commercial EV fleets & premium private EVs",
        "Smart dynamic load balancing prevents power tripping",
        "Branded QR payments with UPI, cards & Evion App"
      ]
    },
    {
      id: "destination",
      title: "Destination & Eco-Resort Hub",
      subtitle: "For Munnar, Wayanad, Kumarakom & coastal resorts",
      tag: "Zero-Downtime Hospitality Amenity",
      badgeColor: "bg-teal-50 text-teal-800 border-teal-200",
      icon: <Hotel className="w-5 h-5 text-teal-600" />,
      hardware: "30kW DC Fast Wallbox + Dual 22kW Smart AC",
      spaceRequired: "2 car bays (300 - 500 sq.ft)",
      powerRequirement: "30kVA – 50kVA Existing or Upgraded Load",
      turnover: "₹80,000 – ₹1,60,000 / month estimated",
      payback: "16 – 20 Months",
      features: [
        "Attracts eco-conscious tourists driving EVs from Kochi/Bangalore",
        "Premium guest amenity that drives repeat hotel bookings",
        "Monsoon-proof IP65 weatherproof charging cabinets",
        "Hotel PMS & billing integration for guest room chargebacks",
        "Featured on Kerala Tourism EV corridors"
      ]
    }
  ];

  const turnkeySteps = [
    {
      step: "01",
      title: "Free Site Feasibility Study",
      desc: "Our Kerala field engineers survey your land, highway access, traffic density, and existing electrical infrastructure."
    },
    {
      step: "02",
      title: "KSEB Approvals & Power Sanction",
      desc: "Evion handles end-to-end KSEB liaisoning, transformer installation approvals, and electrical inspectorate clearances."
    },
    {
      step: "03",
      title: "Civil & Hardware Commissioning",
      desc: "Turnkey civil bays, safety bollards, illuminated branding totem, and 120kW/240kW charger installation in 21 days."
    },
    {
      step: "04",
      title: "Go-Live & Automated Payouts",
      desc: "Live listing on Evion App, Google Maps, and PlugShare. Automated weekly revenue payouts directly to your bank account."
    }
  ];

  const currentModel = models.find((m) => m.id === activeTab) || models[0];

  return (
    <section id="franchise" className="py-20 md:py-28 bg-[#f7f7f8] text-neutral-900 border-b border-neutral-200">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold uppercase tracking-wider mb-4">
            <Zap className="w-3.5 h-3.5 text-[#00d26a]" />
            <span>Evion Grid Franchise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-black mb-4">
            Host an Evion Station. Build Recurring Green Revenue.
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
            Turn your parking space, petrol pump, or highway frontage into a high-yield EV charging hub. Evion supplies the industrial hardware, secures KSEB transformer sanctions, and manages software and payments.
          </p>
        </div>

        {/* Ather Style Tab Selectors */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {models.map((model) => {
            const isSelected = activeTab === model.id;
            return (
              <button
                key={model.id}
                onClick={() => setActiveTab(model.id as any)}
                className={`px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-bold transition-all ${
                  isSelected
                    ? "bg-black text-white shadow-md scale-105"
                    : "bg-white text-neutral-700 hover:text-black border border-neutral-200 hover:border-neutral-400"
                }`}
              >
                {model.title}
              </button>
            );
          })}
        </div>

        {/* Active Model Deep Dive Box (Clean White Ather Card) */}
        <div className="bg-white border border-neutral-200 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-sm mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left 7 cols: Model Specs & Highlights */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center space-x-2">
                <span className={`text-xs font-bold px-3 py-1 rounded-full border ${currentModel.badgeColor}`}>
                  {currentModel.tag}
                </span>
                <span className="text-xs text-neutral-500 font-medium">Turnkey Setup Across Kerala</span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-black">
                  {currentModel.title}
                </h3>
                <p className="text-neutral-600 text-sm sm:text-base mt-1">
                  {currentModel.subtitle}
                </p>
              </div>

              {/* Specs Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-4 rounded-2xl bg-[#f7f7f8] border border-neutral-200/60">
                  <div className="text-[11px] text-neutral-500 uppercase font-bold">Hardware</div>
                  <div className="text-xs sm:text-sm font-bold text-black mt-1">{currentModel.hardware}</div>
                </div>

                <div className="p-4 rounded-2xl bg-[#f7f7f8] border border-neutral-200/60">
                  <div className="text-[11px] text-neutral-500 uppercase font-bold">Space Needed</div>
                  <div className="text-xs sm:text-sm font-bold text-black mt-1">{currentModel.spaceRequired}</div>
                </div>

                <div className="p-4 rounded-2xl bg-[#f7f7f8] border border-neutral-200/60">
                  <div className="text-[11px] text-neutral-500 uppercase font-bold">Power Sanction</div>
                  <div className="text-xs sm:text-sm font-bold text-black mt-1">{currentModel.powerRequirement}</div>
                </div>

                <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200">
                  <div className="text-[11px] text-emerald-800 uppercase font-bold">Est. Monthly Net</div>
                  <div className="text-sm sm:text-base font-black text-emerald-900 mt-1">{currentModel.turnover}</div>
                </div>

                <div className="p-4 rounded-2xl bg-[#f7f7f8] border border-neutral-200/60">
                  <div className="text-[11px] text-neutral-500 uppercase font-bold">Payback Timeline</div>
                  <div className="text-sm sm:text-base font-bold text-black mt-1">{currentModel.payback}</div>
                </div>

                <div className="p-4 rounded-2xl bg-[#f7f7f8] border border-neutral-200/60">
                  <div className="text-[11px] text-neutral-500 uppercase font-bold">Compliance</div>
                  <div className="text-xs sm:text-sm font-bold text-black mt-1">100% KSEB & CEA</div>
                </div>
              </div>

              {/* Bullet Features */}
              <div className="space-y-2.5 pt-2">
                <div className="text-xs font-bold text-neutral-500 uppercase tracking-wider">
                  Partner Deliverables:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-700">
                  {currentModel.features.map((feat, i) => (
                    <div key={i} className="flex items-start space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-[#00d26a] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right 5 cols: Ather Style Clean Card */}
            <div className="lg:col-span-5 bg-[#f7f7f8] border border-neutral-200 rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-neutral-500 uppercase font-bold tracking-wider">Revenue Structure</span>
                  <span className="text-[11px] bg-emerald-100 text-emerald-800 px-2.5 py-0.5 rounded-full font-bold">
                    Direct Bank Payouts
                  </span>
                </div>

                <div className="border-b border-neutral-200 pb-4">
                  <div className="text-3xl sm:text-4xl font-black text-black">
                    70% – 80%
                  </div>
                  <div className="text-xs text-neutral-600 mt-1">
                    Partner revenue share on net electricity tariff margin.
                  </div>
                </div>

                <ul className="space-y-2 text-xs text-neutral-700">
                  <li className="flex items-center justify-between py-1 border-b border-neutral-200/60">
                    <span className="text-neutral-500">Civil & Bay Preparation:</span>
                    <span className="font-bold text-black">Turnkey by Evion</span>
                  </li>
                  <li className="flex items-center justify-between py-1 border-b border-neutral-200/60">
                    <span className="text-neutral-500">KSEB Approvals:</span>
                    <span className="font-bold text-emerald-700">100% Managed</span>
                  </li>
                  <li className="flex items-center justify-between py-1 border-b border-neutral-200/60">
                    <span className="text-neutral-500">Hardware Warranty:</span>
                    <span className="font-bold text-black">5 Years Comprehensive</span>
                  </li>
                  <li className="flex items-center justify-between py-1 border-b border-neutral-200/60">
                    <span className="text-neutral-500">Evion App Listing:</span>
                    <span className="font-bold text-black">Kerala-wide Promotion</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 space-y-3">
                <button
                  onClick={onOpenModal}
                  className="w-full py-3.5 px-6 rounded-full bg-black text-white hover:bg-neutral-800 font-bold text-xs sm:text-sm shadow-md flex items-center justify-center space-x-2 transition-transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>Apply for {currentModel.title}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <p className="text-center text-[11px] text-neutral-500">
                  Free site inspection & power feasibility study within 48 hours.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Step Turnkey Process */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl sm:text-3xl font-black text-black mb-2">
              From Site Survey to Live Revenue in 21 Days
            </h3>
            <p className="text-neutral-600 text-sm">
              Our engineering team handles the complete civil, electrical, and licensing process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {turnkeySteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-white border border-neutral-200 rounded-2xl p-6 relative hover:border-black transition-colors"
              >
                <div className="text-2xl font-mono font-black text-neutral-300 mb-2">
                  {step.step}
                </div>
                <h4 className="text-base font-bold text-black mb-1.5">
                  {step.title}
                </h4>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
