"use client";

import React, { useState } from "react";
import Link from "next/link";
import BusinessModelSection from "@/components/BusinessModelSection";
import {
  ArrowLeft,
  ArrowRight,
  TrendingUp,
  Zap,
  Car,
  Maximize2,
  Cpu,
  MapPin,
  ShieldCheck,
  CheckCircle2,
  Send,
} from "lucide-react";

export default function FranchisePage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "Kochi",
    propertyType: "Highway Land",
    preferredModel: "70 / 30 Revenue-Share",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 selection:bg-[#00b4d8] selection:text-white font-sans">
      {/* 1. Header Navigation */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-neutral-200 transition-all shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-16 flex items-center justify-between gap-4">
          {/* Left: Back Button */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-100 border border-neutral-200 hover:border-[#00b4d8]/50 hover:bg-neutral-200/70 text-neutral-700 hover:text-neutral-950 text-xs sm:text-sm font-medium transition-all group active:scale-95 shadow-2xs"
          >
            <ArrowLeft className="w-4 h-4 text-neutral-500 group-hover:text-[#0077e6] group-hover:-translate-x-0.5 transition-transform" />
            <span className="hidden sm:inline">Back to</span>
            <span>Home</span>
          </Link>

          {/* Right: Primary Call to Action */}
          <a
            href="#apply"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#0052cc] via-[#0077e6] to-[#00b4d8] hover:from-[#0047b3] hover:to-[#009dc2] text-white font-semibold text-xs sm:text-sm transition-all shadow-[0_2px_14px_rgba(0,119,230,0.3)] hover:scale-105 active:scale-95"
          >
            <span>Apply for Franchise</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-8 py-12 sm:py-16 space-y-16">
        {/* 2. Hero Section */}
        <section className="space-y-4 max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-neutral-950 leading-tight">
            Complete EV Charging Solutions{" "}
            <span className="bg-gradient-to-r from-[#0052cc] via-[#0077e6] to-[#00b4d8] bg-clip-text text-transparent">
              Everywhere You Need
            </span>
          </h1>

          <p className="text-base sm:text-lg text-neutral-600 font-normal leading-relaxed max-w-2xl">
            With a comprehensive portfolio and an arterial Kerala fast-charging network, we make EV station ownership{" "}
            <span className="text-neutral-950 font-bold">profitable</span>,{" "}
            <span className="text-neutral-950 font-bold">dependable</span>, and{" "}
            <span className="text-[#0077e6] font-bold">easy</span>.
          </p>
        </section>

        {/* 3. Business Models (COCO, FOCO, 70/30 & SBI EV Mitra Loan Support) */}
        <BusinessModelSection
          onSelectModel={(model) =>
            setFormData((prev) => ({ ...prev, preferredModel: model }))
          }
        />

        {/* 4. Core Specifications & Blueprint Requirements */}
        <section className="space-y-6">
          <div className="border-b border-neutral-200 pb-3">
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-neutral-500">
              Franchise Blueprint &amp; Requirements
            </h2>
          </div>

          {/* 4-Column Responsive Grid matching reference layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {/* Column 1: Investment (Featured Highlight) */}
            <div className="flex flex-col justify-between p-6 rounded-2xl bg-gradient-to-b from-[#0052cc]/5 to-[#00b4d8]/10 border-2 border-[#00b4d8] shadow-[0_4px_24px_rgba(0,180,216,0.15)] transition-all group hover:shadow-lg">
              <div className="space-y-2.5">
                <div className="w-10 h-10 rounded-xl bg-white border border-[#00b4d8]/40 flex items-center justify-center text-[#0077e6] mb-2 shadow-xs">
                  <TrendingUp className="w-5 h-5 text-[#0077e6]" />
                </div>
                <h3 className="text-lg font-bold text-neutral-950 tracking-tight leading-snug">
                  Starting Investment of{" "}
                  <span className="text-[#0077e6] font-black underline decoration-[#00b4d8] underline-offset-4">
                    ₹24L +
                  </span>
                </h3>
                <p className="text-sm text-neutral-600 font-normal leading-relaxed">
                  Turnkey hardware, civil foundation, electrical switchgear, canopy branding, and full commissioning.
                </p>
              </div>
              <a
                href="#apply"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0077e6] hover:text-[#0052cc] mt-5 group-hover:gap-2 transition-all"
              >
                <span className="underline underline-offset-2">18-24 months payback</span>
                <span>→</span>
              </a>
            </div>

            {/* Column 2: Charger Options */}
            <div className="flex flex-col justify-between p-6 rounded-2xl bg-white border border-neutral-200 shadow-xs hover:border-[#00b4d8]/60 hover:shadow-md transition-all group">
              <div className="space-y-2.5">
                <div className="w-10 h-10 rounded-xl bg-neutral-100 border border-neutral-200 flex items-center justify-center text-[#0077e6] mb-2">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-neutral-950 tracking-tight leading-snug">
                  <span className="text-[#0077e6] font-bold">60kW, 120kW &amp; 180kW</span> DC Dual Gun CCS
                </h3>
                <p className="text-sm text-neutral-600 font-normal leading-relaxed">
                  High-speed DC Dual Gun CCS charging stations with dynamic power sharing and smart billing integration.
                </p>
              </div>
              <a
                href="#apply"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0077e6] hover:text-[#0052cc] mt-5 group-hover:gap-2 transition-all"
              >
                <span>EVION DC Dual Gun CCS</span>
                <span>→</span>
              </a>
            </div>

            {/* Column 3: Vehicle Type */}
            <div className="flex flex-col justify-between p-6 rounded-2xl bg-white border border-neutral-200 shadow-xs hover:border-[#00b4d8]/60 hover:shadow-md transition-all group">
              <div className="space-y-2.5">
                <div className="w-10 h-10 rounded-xl bg-neutral-100 border border-neutral-200 flex items-center justify-center text-[#0077e6] mb-2">
                  <Car className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-neutral-950 tracking-tight leading-snug">
                  4-Wheeler Passenger EVs
                </h3>
                <p className="text-sm text-neutral-600 font-normal leading-relaxed">
                  Universal CCS2 compatibility for Tata Nexon, MG ZS, Hyundai Ioniq 5, Mahindra, BYD, and all upcoming 4W EVs.
                </p>
              </div>
              <a
                href="#apply"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0077e6] hover:text-[#0052cc] mt-5 group-hover:gap-2 transition-all"
              >
                <span>Universal CCS2 protocol</span>
                <span>→</span>
              </a>
            </div>

            {/* Column 4: Space Needed */}
            <div className="flex flex-col justify-between p-6 rounded-2xl bg-white border border-neutral-200 shadow-xs hover:border-[#00b4d8]/60 hover:shadow-md transition-all group">
              <div className="space-y-2.5">
                <div className="w-10 h-10 rounded-xl bg-neutral-100 border border-neutral-200 flex items-center justify-center text-[#0077e6] mb-2">
                  <Maximize2 className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-neutral-950 tracking-tight leading-snug">
                  Space Needed: <span className="text-[#0077e6] font-bold">550 sq. ft.</span>
                </h3>
                <p className="text-sm text-neutral-600 font-normal leading-relaxed">
                  Requires 2 standard car parking spots plus charger kiosk pad. Easily integrates into commercial frontage.
                </p>
              </div>
              <a
                href="#apply"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0077e6] hover:text-[#0052cc] mt-5 group-hover:gap-2 transition-all"
              >
                <span>2 car parks footprint</span>
                <span>→</span>
              </a>
            </div>

            {/* Column 5: Power Connection */}
            <div className="flex flex-col justify-between p-6 rounded-2xl bg-white border border-neutral-200 shadow-xs hover:border-[#00b4d8]/60 hover:shadow-md transition-all group">
              <div className="space-y-2.5">
                <div className="w-10 h-10 rounded-xl bg-neutral-100 border border-neutral-200 flex items-center justify-center text-[#0077e6] mb-2">
                  <Cpu className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-neutral-950 tracking-tight leading-snug">
                  Direct Grid Connection
                </h3>
                <p className="text-sm text-neutral-600 font-normal leading-relaxed">
                  Plug-and-play setup. Evion manages end-to-end KSEB liaisoning, transformer sizing, and dedicated EV tariffs.
                </p>
              </div>
              <a
                href="#apply"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0077e6] hover:text-[#0052cc] mt-5 group-hover:gap-2 transition-all"
              >
                <span>Plug-and-play setup</span>
                <span>→</span>
              </a>
            </div>

            {/* Column 6: Ideal Locations */}
            <div className="flex flex-col justify-between p-6 rounded-2xl bg-white border border-neutral-200 shadow-xs hover:border-[#00b4d8]/60 hover:shadow-md transition-all group">
              <div className="space-y-2.5">
                <div className="w-10 h-10 rounded-xl bg-neutral-100 border border-neutral-200 flex items-center justify-center text-[#0077e6] mb-2">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-neutral-950 tracking-tight leading-snug">
                  Highways, Office Parks &amp; Malls
                </h3>
                <p className="text-sm text-neutral-600 font-normal leading-relaxed">
                  Highways (NH-66, NH-544), tech parks (Infopark/Technopark), retail malls, and residential societies.
                </p>
              </div>
              <a
                href="#apply"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0077e6] hover:text-[#0052cc] mt-5 group-hover:gap-2 transition-all"
              >
                <span>Prime Kerala locations</span>
                <span>→</span>
              </a>
            </div>

            {/* Column 7 & 8: Support Package (Spans 2 columns on desktop) */}
            <div className="lg:col-span-2 flex flex-col justify-between p-6 rounded-2xl bg-white border border-neutral-200 shadow-xs hover:border-[#00b4d8]/60 hover:shadow-md transition-all group">
              <div className="space-y-2.5">
                <div className="w-10 h-10 rounded-xl bg-neutral-100 border border-neutral-200 flex items-center justify-center text-[#0077e6] mb-2">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-neutral-950 tracking-tight leading-snug">
                  Service and Support You Can Trust
                </h3>
                <p className="text-sm text-neutral-600 font-normal leading-relaxed">
                  Support includes real-time CMS dashboard, 24x7 automated technical support, and marketing assistance to drive EV drivers straight to your bays.
                </p>
              </div>
              <a
                href="#apply"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0077e6] hover:text-[#0052cc] mt-5 group-hover:gap-2 transition-all"
              >
                <span>CMS dashboard • 24x7 support • Marketing</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </section>

        {/* 5. Streamlined Franchise Inquiry Card */}
        <section id="apply" className="pt-6">
          <div className="max-w-xl mx-auto p-6 sm:p-8 rounded-3xl bg-white border border-neutral-200 shadow-xl">
            <div className="space-y-1.5 mb-6 text-center">
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-950">
                Apply for Franchise
              </h2>
              <p className="text-xs sm:text-sm text-neutral-500 font-normal">
                Enter your details to receive the investment kit and site feasibility survey.
              </p>
            </div>

            {isSubmitted ? (
              <div className="text-center py-8 space-y-3">
                <div className="w-12 h-12 rounded-full bg-[#00b4d8]/15 border border-[#00b4d8]/30 text-[#0077e6] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-neutral-950">Inquiry Received</h3>
                <p className="text-xs sm:text-sm text-neutral-600 max-w-sm mx-auto leading-relaxed">
                  Thank you, <span className="text-[#0077e6] font-semibold">{formData.name || "Partner"}</span>. Our franchise representative will connect with you at <span className="text-neutral-950 font-mono font-bold">{formData.phone}</span> regarding the <span className="text-neutral-950 font-semibold">{formData.preferredModel}</span> model.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-2 text-xs text-neutral-500 hover:text-neutral-900 underline cursor-pointer"
                >
                  Submit another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Menon"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-50 border border-neutral-200 text-neutral-900 placeholder-neutral-400 text-sm focus:bg-white focus:outline-none focus:border-[#0077e6] focus:ring-2 focus:ring-[#0077e6]/20 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    Phone Number (WhatsApp) *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-50 border border-neutral-200 text-neutral-900 placeholder-neutral-400 text-sm focus:bg-white focus:outline-none focus:border-[#0077e6] focus:ring-2 focus:ring-[#0077e6]/20 transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">
                      Kerala District *
                    </label>
                    <select
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-50 border border-neutral-200 text-neutral-900 text-sm focus:bg-white focus:outline-none focus:border-[#0077e6] focus:ring-2 focus:ring-[#0077e6]/20 transition-all"
                    >
                      <option value="Kochi">Kochi / Ernakulam</option>
                      <option value="Thiruvananthapuram">Thiruvananthapuram</option>
                      <option value="Kozhikode">Kozhikode</option>
                      <option value="Thrissur">Thrissur</option>
                      <option value="Kollam">Kollam</option>
                      <option value="Alappuzha">Alappuzha</option>
                      <option value="Palakkad">Palakkad</option>
                      <option value="Kannur">Kannur</option>
                      <option value="Kottayam">Kottayam</option>
                      <option value="Other">Other Corridor</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">
                      Property Type *
                    </label>
                    <select
                      value={formData.propertyType}
                      onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-50 border border-neutral-200 text-neutral-900 text-sm focus:bg-white focus:outline-none focus:border-[#0077e6] focus:ring-2 focus:ring-[#0077e6]/20 transition-all"
                    >
                      <option value="Highway Land">Highway Frontage</option>
                      <option value="Office Park">Office / Tech Park</option>
                      <option value="Mall / Retail">Mall / Retail Center</option>
                      <option value="Hotel / Resort">Hotel / Resort</option>
                      <option value="Residential">Residential Society</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    Preferred Business Model / Funding
                  </label>
                  <select
                    value={formData.preferredModel}
                    onChange={(e) => setFormData({ ...formData, preferredModel: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-50 border border-neutral-200 text-neutral-900 text-sm focus:bg-white focus:outline-none focus:border-[#0077e6] focus:ring-2 focus:ring-[#0077e6]/20 transition-all"
                  >
                    <option value="70 / 30 Revenue-Share">70 / 30 Revenue-Share (Keep 70% of Charging Revenue)</option>
                    <option value="FOCO (Franchise Owned, Company Operated)">FOCO (Franchise Owned, Company Operated)</option>
                    <option value="COCO (Company Owned, Company Operated)">COCO (Company Owned, Company Operated)</option>
                    <option value="SBI EV Mitra Financing Support">SBI EV Mitra Financing Support</option>
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-5 rounded-full bg-gradient-to-r from-[#0052cc] via-[#0077e6] to-[#00b4d8] hover:from-[#0047b3] hover:to-[#009dc2] text-white font-bold text-sm transition-all shadow-[0_4px_16px_rgba(0,119,230,0.3)] hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 mt-2"
                >
                  {isSubmitting ? (
                    <span>Submitting...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Franchise Application</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </section>

        {/* 6. Minimal Footer */}
        <footer className="pt-8 pb-12 text-center text-xs text-neutral-500 border-t border-neutral-200 space-y-1">
          <p>© 2026 Evion Power Solutions Pvt. Ltd.</p>
          <p>
            Customer Support:{" "}
            <a href="tel:+916238887611" className="text-[#0077e6] font-medium hover:underline">
              +91 6238-887611
            </a>{" "}
            •{" "}
            <a href="mailto:Info@evioncharging.com" className="text-neutral-900 font-medium hover:underline">
              Info@evioncharging.com
            </a>
          </p>
        </footer>
      </main>
    </div>
  );
}