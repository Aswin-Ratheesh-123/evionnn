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
    <div className="min-h-screen bg-[#0c0c0e] text-white selection:bg-[#00b4d8] selection:text-white font-sans">
      {/* 1. Header Navigation */}
      <header className="sticky top-0 z-50 bg-[#0c0c0e]/85 backdrop-blur-xl border-b border-white/[0.08] transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-16 flex items-center justify-between gap-4">
          {/* Left: Back Button */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/10 hover:border-[#00b4d8]/40 hover:bg-white/[0.08] text-neutral-300 hover:text-white text-xs sm:text-sm font-medium transition-all group active:scale-95 shadow-sm"
          >
            <ArrowLeft className="w-4 h-4 text-neutral-400 group-hover:text-[#00b4d8] group-hover:-translate-x-0.5 transition-transform" />
            <span className="hidden sm:inline">Back to</span>
            <span>Home</span>
          </Link>

          {/* Right: Primary Call to Action */}
          <a
            href="#apply"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#0052cc] via-[#0084e8] to-[#00b4d8] hover:from-[#0047b3] hover:to-[#009dc2] text-white font-semibold text-xs sm:text-sm transition-all shadow-[0_0_18px_rgba(0,180,216,0.35)] hover:scale-105 active:scale-95"
          >
            <span>Apply for Franchise</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-8 py-12 sm:py-16 space-y-16">
        {/* 2. Hero Section (Simple & Professional with Optical Focus Animation) */}
        <section className="space-y-4 max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight animate-text-focus">
            Complete EV Charging Solutions <span className="bg-gradient-to-r from-[#0052cc] via-[#0088ff] to-[#00b4d8] bg-clip-text text-transparent drop-shadow-[0_0_24px_rgba(0,180,216,0.4)]">Everywhere You Need</span>
          </h1>

          <p className="text-base sm:text-lg text-neutral-400 font-normal leading-relaxed max-w-2xl animate-text-focus-delay-1">
            With a comprehensive portfolio and an arterial Kerala fast-charging network, we make EV station ownership <span className="text-white font-semibold">profitable</span>, <span className="text-white font-semibold">dependable</span>, and <span className="text-[#00b4d8] font-semibold">easy</span>.
          </p>
        </section>

        {/* 3. Business Models (COCO, FOCO, 70/30 & SBI EV Mitra Loan Support) */}
        <BusinessModelSection
          onSelectModel={(model) =>
            setFormData((prev) => ({ ...prev, preferredModel: model }))
          }
        />

        {/* 3. Core Specifications (Styled like the reference design) */}
        <section className="space-y-6">
          <div className="border-b border-white/[0.08] pb-3">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-neutral-400">
              Franchise Blueprint &amp; Requirements
            </h2>
          </div>

          {/* 4-Column Responsive Grid matching reference layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {/* Column 1: Investment (Featured Highlight) */}
            <div className="flex flex-col justify-between p-5 rounded-2xl bg-gradient-to-b from-[#0052cc]/15 to-[#00b4d8]/10 border-2 border-[#00b4d8]/60 ring-2 ring-[#00b4d8]/20 shadow-[0_0_30px_rgba(0,180,216,0.18)] transition-all group">
              <div className="space-y-2.5">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-r from-[#0052cc]/30 to-[#00b4d8]/30 border border-[#00b4d8]/40 flex items-center justify-center text-[#00b4d8] mb-2 shadow-[0_0_12px_rgba(0,180,216,0.3)]">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <h3 className="text-lg font-bold text-white tracking-tight leading-snug">
                  Starting Investment of <span className="text-[#00b4d8] font-black underline decoration-[#00b4d8] underline-offset-4">₹24L +</span>
                </h3>
                <p className="text-sm text-neutral-300 font-normal leading-relaxed">
                  Turnkey hardware, civil foundation, electrical switchgear, canopy branding, and full commissioning.
                </p>
              </div>
              <a
                href="#apply"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00b4d8] hover:text-[#48cae4] mt-5 group-hover:gap-2 transition-all"
              >
                <span className="underline underline-offset-2">18-24 months payback</span>
                <span>→</span>
              </a>
            </div>

            {/* Column 2: Charger Options */}
            <div className="flex flex-col justify-between p-5 rounded-2xl bg-neutral-900/50 border border-white/[0.08] hover:border-[#00b4d8]/40 transition-all group">
              <div className="space-y-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#00b4d8]/10 border border-[#00b4d8]/20 flex items-center justify-center text-[#00b4d8] mb-2">
                  <Zap className="w-4 h-4" />
                </div>
                <h3 className="text-lg font-bold text-white tracking-tight leading-snug">
                  <span className="text-[#00b4d8] font-bold">60kW, 120kW &amp; 180kW</span> DC Dual Gun CCS
                </h3>
                <p className="text-sm text-neutral-400 font-normal leading-relaxed">
                  High-speed DC Dual Gun CCS charging stations with dynamic power sharing and smart billing integration.
                </p>
              </div>
              <a
                href="#apply"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#00b4d8] hover:text-[#48cae4] mt-5 group-hover:gap-2 transition-all"
              >
                <span>EVION DC Dual Gun CCS</span>
                <span>→</span>
              </a>
            </div>

            {/* Column 3: Vehicle Type */}
            <div className="flex flex-col justify-between p-5 rounded-2xl bg-neutral-900/50 border border-white/[0.08] hover:border-[#40E0D0]/40 transition-all group">
              <div className="space-y-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#40E0D0]/10 border border-[#40E0D0]/20 flex items-center justify-center text-[#40E0D0] mb-2">
                  <Car className="w-4 h-4" />
                </div>
                <h3 className="text-lg font-bold text-white tracking-tight leading-snug">
                  4-Wheeler Passenger EVs
                </h3>
                <p className="text-sm text-neutral-400 font-normal leading-relaxed">
                  Universal CCS2 compatibility for Tata Nexon, MG ZS, Hyundai Ioniq 5, Mahindra, BYD, and all upcoming 4W EVs.
                </p>
              </div>
              <a
                href="#apply"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#40E0D0] hover:text-[#48ebd8] mt-5 group-hover:gap-2 transition-all"
              >
                <span>Universal CCS2 protocol</span>
                <span>→</span>
              </a>
            </div>

            {/* Column 4: Space Needed */}
            <div className="flex flex-col justify-between p-5 rounded-2xl bg-neutral-900/50 border border-white/[0.08] hover:border-[#40E0D0]/40 transition-all group">
              <div className="space-y-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#40E0D0]/10 border border-[#40E0D0]/20 flex items-center justify-center text-[#40E0D0] mb-2">
                  <Maximize2 className="w-4 h-4" />
                </div>
                <h3 className="text-lg font-bold text-white tracking-tight leading-snug">
                  Space Needed: <span className="text-[#40E0D0] font-bold">550 sq. ft.</span>
                </h3>
                <p className="text-sm text-neutral-400 font-normal leading-relaxed">
                  Requires 2 standard car parking spots plus charger kiosk pad. Easily integrates into commercial frontage.
                </p>
              </div>
              <a
                href="#apply"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#40E0D0] hover:text-[#48ebd8] mt-5 group-hover:gap-2 transition-all"
              >
                <span>2 car parks footprint</span>
                <span>→</span>
              </a>
            </div>

            {/* Column 5: Power Connection */}
            <div className="flex flex-col justify-between p-5 rounded-2xl bg-neutral-900/50 border border-white/[0.08] hover:border-[#40E0D0]/40 transition-all group">
              <div className="space-y-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#40E0D0]/10 border border-[#40E0D0]/20 flex items-center justify-center text-[#40E0D0] mb-2">
                  <Cpu className="w-4 h-4" />
                </div>
                <h3 className="text-lg font-bold text-white tracking-tight leading-snug">
                  Direct Grid Connection
                </h3>
                <p className="text-sm text-neutral-400 font-normal leading-relaxed">
                  Plug-and-play setup. Evion manages end-to-end KSEB liaisoning, transformer sizing, and dedicated EV tariffs.
                </p>
              </div>
              <a
                href="#apply"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#40E0D0] hover:text-[#48ebd8] mt-5 group-hover:gap-2 transition-all"
              >
                <span>Plug-and-play setup</span>
                <span>→</span>
              </a>
            </div>

            {/* Column 6: Ideal Locations */}
            <div className="flex flex-col justify-between p-5 rounded-2xl bg-neutral-900/50 border border-white/[0.08] hover:border-[#40E0D0]/40 transition-all group">
              <div className="space-y-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#40E0D0]/10 border border-[#40E0D0]/20 flex items-center justify-center text-[#40E0D0] mb-2">
                  <MapPin className="w-4 h-4" />
                </div>
                <h3 className="text-lg font-bold text-white tracking-tight leading-snug">
                  Highways, Office Parks &amp; Malls
                </h3>
                <p className="text-sm text-neutral-400 font-normal leading-relaxed">
                  Highways (NH-66, NH-544), tech parks (Infopark/Technopark), retail malls, and residential societies.
                </p>
              </div>
              <a
                href="#apply"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#40E0D0] hover:text-[#48ebd8] mt-5 group-hover:gap-2 transition-all"
              >
                <span>Prime Kerala locations</span>
                <span>→</span>
              </a>
            </div>

            {/* Column 7 & 8: Support Package (Spans 2 columns on desktop) */}
            <div className="lg:col-span-2 flex flex-col justify-between p-5 rounded-2xl bg-neutral-900/50 border border-white/[0.08] hover:border-[#00b4d8]/40 transition-all group">
              <div className="space-y-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#00b4d8]/10 border border-[#00b4d8]/20 flex items-center justify-center text-[#00b4d8] mb-2">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h3 className="text-lg font-bold text-white tracking-tight leading-snug">
                  Service and Support You Can Trust
                </h3>
                <p className="text-sm text-neutral-400 font-normal leading-relaxed">
                  Support includes real-time CMS dashboard, 24x7 automated technical support, and marketing assistance to drive EV drivers straight to your bays.
                </p>
              </div>
              <a
                href="#apply"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#00b4d8] hover:text-[#48cae4] mt-5 group-hover:gap-2 transition-all"
              >
                <span>CMS dashboard • 24x7 support • Marketing</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </section>

        {/* 4. Streamlined Franchise Inquiry Card */}
        <section id="apply" className="pt-6">
          <div className="max-w-xl mx-auto p-6 sm:p-8 rounded-2xl bg-neutral-900/60 border border-white/[0.08] shadow-xl">
            <div className="space-y-1.5 mb-6 text-center">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                Apply for Franchise
              </h2>
              <p className="text-xs sm:text-sm text-neutral-400 font-normal">
                Enter your details to receive the investment kit and site feasibility survey.
              </p>
            </div>

            {isSubmitted ? (
              <div className="text-center py-8 space-y-3">
                <div className="w-12 h-12 rounded-full bg-[#00b4d8]/15 border border-[#00b4d8]/30 text-[#00b4d8] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white">Inquiry Received</h3>
                <p className="text-xs sm:text-sm text-neutral-300 max-w-sm mx-auto leading-relaxed">
                  Thank you, <span className="text-[#00b4d8] font-semibold">{formData.name || "Partner"}</span>. Our franchise representative will connect with you at <span className="text-white font-mono">{formData.phone}</span> regarding the <span className="text-[#ffd13f] font-semibold">{formData.preferredModel}</span> model.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-2 text-xs text-neutral-400 hover:text-white underline cursor-pointer"
                >
                  Submit another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Menon"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-black/50 border border-white/10 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-[#00b4d8] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1">
                    Phone Number (WhatsApp) *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-black/50 border border-white/10 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-[#00b4d8] transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1">
                      Kerala District *
                    </label>
                    <select
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-black/50 border border-white/10 text-white text-sm focus:outline-none focus:border-[#00b4d8] transition-colors"
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
                    <label className="block text-xs font-medium text-neutral-300 mb-1">
                      Property Type *
                    </label>
                    <select
                      value={formData.propertyType}
                      onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-black/50 border border-white/10 text-white text-sm focus:outline-none focus:border-[#00b4d8] transition-colors"
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
                  <label className="block text-xs font-medium text-neutral-300 mb-1">
                    Preferred Business Model / Funding
                  </label>
                  <select
                    value={formData.preferredModel}
                    onChange={(e) => setFormData({ ...formData, preferredModel: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-black/50 border border-white/10 text-white text-sm focus:outline-none focus:border-[#00b4d8] transition-colors"
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
                  className="w-full py-3 px-5 rounded-full bg-gradient-to-r from-[#0052cc] via-[#0084e8] to-[#00b4d8] hover:from-[#0047b3] hover:to-[#009dc2] text-white font-semibold text-sm transition-all shadow-[0_0_18px_rgba(0,180,216,0.3)] hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 mt-2"
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

        {/* 5. Minimal Footer */}
        <footer className="pt-8 pb-12 text-center text-xs text-neutral-400 border-t border-white/[0.08] space-y-1">
          <p>© 2026 Evion Power Solutions Pvt. Ltd.</p>
          <p>
            Customer Support:{" "}
            <a href="tel:+916238887611" className="text-[#00b4d8] hover:underline">
              +91 6238-887611
            </a>{" "}
            •{" "}
            <a href="mailto:Info@evioncharging.com" className="text-white hover:underline">
              Info@evioncharging.com
            </a>
          </p>
        </footer>
      </main>
    </div>
  );
}
