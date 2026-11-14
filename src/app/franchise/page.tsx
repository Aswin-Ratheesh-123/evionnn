"use client";

import React, { useState } from "react";
import Link from "next/link";
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
    <div className="min-h-screen bg-[#0c0c0e] text-white selection:bg-[#00d26a] selection:text-black font-sans">
      {/* 1. Header Navigation */}
      <header className="sticky top-0 z-50 bg-[#0c0c0e]/85 backdrop-blur-xl border-b border-white/[0.08] transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-16 flex items-center justify-between gap-4">
          {/* Left: Back Button */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/10 hover:border-[#00d26a]/40 hover:bg-white/[0.08] text-neutral-300 hover:text-white text-xs sm:text-sm font-medium transition-all group active:scale-95 shadow-sm"
          >
            <ArrowLeft className="w-4 h-4 text-neutral-400 group-hover:text-[#00d26a] group-hover:-translate-x-0.5 transition-transform" />
            <span className="hidden sm:inline">Back to</span>
            <span>Home</span>
          </Link>

          {/* Right: Primary Call to Action */}
          <a
            href="#apply"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00d26a] hover:bg-[#00e575] text-black font-semibold text-xs sm:text-sm transition-all shadow-[0_0_18px_rgba(0,210,106,0.3)] hover:scale-105 active:scale-95"
          >
            <span>Apply for Franchise</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-8 py-12 sm:py-16 space-y-16">
        {/* 2. Hero Section (Simple & Professional) */}
        <section className="space-y-4 max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            Complete EV Charging Solutions Everywhere You Need
          </h1>

          <p className="text-base sm:text-lg text-neutral-400 font-normal leading-relaxed max-w-2xl">
            With a comprehensive portfolio and an arterial Kerala fast-charging network, we make EV station ownership profitable, dependable, and easy.
          </p>
        </section>

        {/* 3. Core Specifications (Styled like the reference design) */}
        <section className="space-y-6">
          <div className="border-b border-white/[0.08] pb-3">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-neutral-400">
              Franchise Blueprint &amp; Requirements
            </h2>
          </div>

          {/* 4-Column Responsive Grid matching reference layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {/* Column 1: Investment */}
            <div className="flex flex-col justify-between p-5 rounded-2xl bg-neutral-900/50 border border-white/[0.08] hover:border-[#00d26a]/40 transition-all group">
              <div className="space-y-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#00d26a]/10 border border-[#00d26a]/20 flex items-center justify-center text-[#00d26a] mb-2">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <h3 className="text-lg font-bold text-white tracking-tight leading-snug">
                  Starting Investment of ₹24L +
                </h3>
                <p className="text-sm text-neutral-400 font-normal leading-relaxed">
                  Turnkey hardware, civil foundation, electrical switchgear, canopy branding, and full commissioning.
                </p>
              </div>
              <a
                href="#apply"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#00d26a] hover:text-[#00e575] mt-5 group-hover:gap-2 transition-all"
              >
                <span>18-24 months payback</span>
                <span>→</span>
              </a>
            </div>

            {/* Column 2: Charger Options */}
            <div className="flex flex-col justify-between p-5 rounded-2xl bg-neutral-900/50 border border-white/[0.08] hover:border-[#00d26a]/40 transition-all group">
              <div className="space-y-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#00d26a]/10 border border-[#00d26a]/20 flex items-center justify-center text-[#00d26a] mb-2">
                  <Zap className="w-4 h-4" />
                </div>
                <h3 className="text-lg font-bold text-white tracking-tight leading-snug">
                  30, 60 &amp; 120 kW Fast Chargers
                </h3>
                <p className="text-sm text-neutral-400 font-normal leading-relaxed">
                  High-speed DC charging stations with Single or Dual Gun CCS2 configurations and dynamic power sharing.
                </p>
              </div>
              <a
                href="#apply"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#00d26a] hover:text-[#00e575] mt-5 group-hover:gap-2 transition-all"
              >
                <span>Single / Dual Gun DC</span>
                <span>→</span>
              </a>
            </div>

            {/* Column 3: Vehicle Type */}
            <div className="flex flex-col justify-between p-5 rounded-2xl bg-neutral-900/50 border border-white/[0.08] hover:border-[#00d26a]/40 transition-all group">
              <div className="space-y-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#00d26a]/10 border border-[#00d26a]/20 flex items-center justify-center text-[#00d26a] mb-2">
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
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#00d26a] hover:text-[#00e575] mt-5 group-hover:gap-2 transition-all"
              >
                <span>Universal CCS2 protocol</span>
                <span>→</span>
              </a>
            </div>

            {/* Column 4: Space Needed */}
            <div className="flex flex-col justify-between p-5 rounded-2xl bg-neutral-900/50 border border-white/[0.08] hover:border-[#00d26a]/40 transition-all group">
              <div className="space-y-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#00d26a]/10 border border-[#00d26a]/20 flex items-center justify-center text-[#00d26a] mb-2">
                  <Maximize2 className="w-4 h-4" />
                </div>
                <h3 className="text-lg font-bold text-white tracking-tight leading-snug">
                  Space Needed: 550 sq. ft.
                </h3>
                <p className="text-sm text-neutral-400 font-normal leading-relaxed">
                  Requires 2 standard car parking spots plus charger kiosk pad. Easily integrates into commercial frontage.
                </p>
              </div>
              <a
                href="#apply"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#00d26a] hover:text-[#00e575] mt-5 group-hover:gap-2 transition-all"
              >
                <span>2 car parks footprint</span>
                <span>→</span>
              </a>
            </div>

            {/* Column 5: Power Connection */}
            <div className="flex flex-col justify-between p-5 rounded-2xl bg-neutral-900/50 border border-white/[0.08] hover:border-[#00d26a]/40 transition-all group">
              <div className="space-y-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#00d26a]/10 border border-[#00d26a]/20 flex items-center justify-center text-[#00d26a] mb-2">
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
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#00d26a] hover:text-[#00e575] mt-5 group-hover:gap-2 transition-all"
              >
                <span>Plug-and-play setup</span>
                <span>→</span>
              </a>
            </div>

            {/* Column 6: Ideal Locations */}
            <div className="flex flex-col justify-between p-5 rounded-2xl bg-neutral-900/50 border border-white/[0.08] hover:border-[#00d26a]/40 transition-all group">
              <div className="space-y-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#00d26a]/10 border border-[#00d26a]/20 flex items-center justify-center text-[#00d26a] mb-2">
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
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#00d26a] hover:text-[#00e575] mt-5 group-hover:gap-2 transition-all"
              >
                <span>Prime Kerala locations</span>
                <span>→</span>
              </a>
            </div>

            {/* Column 7 & 8: Support Package (Spans 2 columns on desktop) */}
            <div className="lg:col-span-2 flex flex-col justify-between p-5 rounded-2xl bg-neutral-900/50 border border-white/[0.08] hover:border-[#00d26a]/40 transition-all group">
              <div className="space-y-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#00d26a]/10 border border-[#00d26a]/20 flex items-center justify-center text-[#00d26a] mb-2">
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
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#00d26a] hover:text-[#00e575] mt-5 group-hover:gap-2 transition-all"
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
                <div className="w-12 h-12 rounded-full bg-[#00d26a]/15 border border-[#00d26a]/30 text-[#00d26a] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white">Inquiry Received</h3>
                <p className="text-xs sm:text-sm text-neutral-300 max-w-sm mx-auto leading-relaxed">
                  Thank you, <span className="text-[#00d26a] font-semibold">{formData.name || "Partner"}</span>. Our franchise representative will connect with you at <span className="text-white font-mono">{formData.phone}</span>.
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
                    className="w-full px-3.5 py-2.5 rounded-xl bg-black/50 border border-white/10 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-[#00d26a] transition-colors"
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
                    className="w-full px-3.5 py-2.5 rounded-xl bg-black/50 border border-white/10 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-[#00d26a] transition-colors"
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
                      className="w-full px-3.5 py-2.5 rounded-xl bg-black/50 border border-white/10 text-white text-sm focus:outline-none focus:border-[#00d26a] transition-colors"
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
                      className="w-full px-3.5 py-2.5 rounded-xl bg-black/50 border border-white/10 text-white text-sm focus:outline-none focus:border-[#00d26a] transition-colors"
                    >
                      <option value="Highway Land">Highway Frontage</option>
                      <option value="Office Park">Office / Tech Park</option>
                      <option value="Mall / Retail">Mall / Retail Center</option>
                      <option value="Hotel / Resort">Hotel / Resort</option>
                      <option value="Residential">Residential Society</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-5 rounded-full bg-[#00d26a] hover:bg-[#00e575] text-black font-semibold text-sm transition-all shadow-[0_0_18px_rgba(0,210,106,0.25)] hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 mt-2"
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
            <a href="tel:+916238887611" className="text-[#00d26a] hover:underline">
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
