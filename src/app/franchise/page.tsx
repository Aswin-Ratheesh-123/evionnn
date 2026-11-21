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
  Phone,
  Mail,
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
    <div className="min-h-screen bg-white text-neutral-900 selection:bg-[#00b4d8] selection:text-white font-sans">
      {/* 1. Header Navigation */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-16 flex items-center justify-between gap-4">
          {/* Left: Back Button */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-neutral-600 hover:text-neutral-950 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 text-neutral-400 group-hover:text-[#0077e6] group-hover:-translate-x-1 transition-all" />
            <span>Back to Home</span>
          </Link>

          {/* Right: Primary Call to Action */}
          <a
            href="#apply"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-neutral-950 hover:bg-[#0077e6] text-white font-semibold text-xs sm:text-sm transition-all"
          >
            <span>Apply for Franchise</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-8 py-12 sm:py-20 space-y-20 sm:space-y-28">
        {/* 2. Hero Section (Unboxed, Pure Typography & Metric Strip) */}
        <section className="space-y-8 max-w-4xl">
          <div className="space-y-4">
            <span className="text-xs font-mono font-bold tracking-widest text-[#0077e6] uppercase">
              EVION FRANCHISE NETWORK • KERALA
            </span>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-neutral-950 leading-[1.08]">
              Complete EV Charging Solutions{" "}
              <span className="bg-gradient-to-r from-[#0052cc] via-[#0077e6] to-[#00b4d8] bg-clip-text text-transparent">
                Everywhere You Need
              </span>
            </h1>

            <p className="text-base sm:text-xl text-neutral-600 font-normal leading-relaxed max-w-2xl pt-2">
              With a comprehensive portfolio and an arterial Kerala fast-charging network, we make EV station ownership{" "}
              <span className="text-neutral-950 font-bold">profitable</span>,{" "}
              <span className="text-neutral-950 font-bold">dependable</span>, and{" "}
              <span className="text-[#0077e6] font-bold">easy</span>.
            </p>
          </div>

          {/* Metric Bar (Unboxed Horizontal Strip) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6 border-y border-neutral-200">
            <div>
              <div className="text-2xl sm:text-3xl font-black text-neutral-950">₹24L +</div>
              <div className="text-xs text-neutral-500 font-medium mt-0.5">Starting Investment</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black text-neutral-950">18–24 Mo.</div>
              <div className="text-xs text-neutral-500 font-medium mt-0.5">Payback Horizon</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black text-neutral-950">180kW DC</div>
              <div className="text-xs text-neutral-500 font-medium mt-0.5">Dual Gun CCS Speed</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black text-[#0077e6]">70 / 30</div>
              <div className="text-xs text-neutral-500 font-medium mt-0.5">Revenue Share</div>
            </div>
          </div>
        </section>

        {/* 3. Business Models (Unboxed 3-Column Section) */}
        <BusinessModelSection
          onSelectModel={(model) =>
            setFormData((prev) => ({ ...prev, preferredModel: model }))
          }
        />

        {/* 4. Core Specifications & Blueprint Requirements (Unboxed Specification Sheet) */}
        <section className="space-y-8">
          <div>
            <div className="text-xs font-mono font-bold tracking-widest text-[#0077e6] uppercase mb-2">
              TECHNICAL BLUEPRINT
            </div>
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-neutral-950">
              Franchise Blueprint &amp; Requirements
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 mt-2">
              Turnkey engineering standards and site infrastructure required for an EVION Superhub.
            </p>
          </div>

          {/* Unboxed Spec Sheet Rows with Clean Dividers */}
          <div className="divide-y divide-neutral-200 border-y border-neutral-200">
            {/* Row 1: Investment */}
            <div className="py-6 sm:py-8 grid grid-cols-1 md:grid-cols-12 gap-4 items-start">
              <div className="md:col-span-3 flex items-center gap-2.5 text-xs font-mono font-bold uppercase tracking-wider text-neutral-500">
                <TrendingUp className="w-4 h-4 text-[#0077e6]" />
                <span>Capital Investment</span>
              </div>
              <div className="md:col-span-4">
                <div className="text-lg sm:text-xl font-bold text-neutral-950">
                  Starting Investment of{" "}
                  <span className="text-[#0077e6] font-black">₹24L +</span>
                </div>
                <a
                  href="#apply"
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#0077e6] hover:underline mt-1"
                >
                  <span>18-24 months payback</span>
                  <span>→</span>
                </a>
              </div>
              <div className="md:col-span-5 text-sm text-neutral-600 leading-relaxed">
                Turnkey hardware, civil foundation, electrical switchgear, canopy branding, and full commissioning.
              </div>
            </div>

            {/* Row 2: Charger Hardware */}
            <div className="py-6 sm:py-8 grid grid-cols-1 md:grid-cols-12 gap-4 items-start">
              <div className="md:col-span-3 flex items-center gap-2.5 text-xs font-mono font-bold uppercase tracking-wider text-neutral-500">
                <Zap className="w-4 h-4 text-[#0077e6]" />
                <span>Charger Hardware</span>
              </div>
              <div className="md:col-span-4">
                <div className="text-lg sm:text-xl font-bold text-neutral-950">
                  <span className="text-[#0077e6] font-bold">60kW, 120kW &amp; 180kW</span> DC Dual Gun CCS
                </div>
                <a
                  href="#apply"
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#0077e6] hover:underline mt-1"
                >
                  <span>EVION DC Dual Gun CCS</span>
                  <span>→</span>
                </a>
              </div>
              <div className="md:col-span-5 text-sm text-neutral-600 leading-relaxed">
                High-speed DC Dual Gun CCS charging stations with dynamic power sharing and smart billing integration.
              </div>
            </div>

            {/* Row 3: Vehicle Type */}
            <div className="py-6 sm:py-8 grid grid-cols-1 md:grid-cols-12 gap-4 items-start">
              <div className="md:col-span-3 flex items-center gap-2.5 text-xs font-mono font-bold uppercase tracking-wider text-neutral-500">
                <Car className="w-4 h-4 text-[#0077e6]" />
                <span>Vehicle Type</span>
              </div>
              <div className="md:col-span-4">
                <div className="text-lg sm:text-xl font-bold text-neutral-950">
                  4-Wheeler Passenger EVs
                </div>
                <a
                  href="#apply"
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#0077e6] hover:underline mt-1"
                >
                  <span>Universal CCS2 protocol</span>
                  <span>→</span>
                </a>
              </div>
              <div className="md:col-span-5 text-sm text-neutral-600 leading-relaxed">
                Universal CCS2 compatibility for Tata Nexon, MG ZS, Hyundai Ioniq 5, Mahindra, BYD, and all upcoming 4W EVs.
              </div>
            </div>

            {/* Row 4: Space Needed */}
            <div className="py-6 sm:py-8 grid grid-cols-1 md:grid-cols-12 gap-4 items-start">
              <div className="md:col-span-3 flex items-center gap-2.5 text-xs font-mono font-bold uppercase tracking-wider text-neutral-500">
                <Maximize2 className="w-4 h-4 text-[#0077e6]" />
                <span>Space Needed</span>
              </div>
              <div className="md:col-span-4">
                <div className="text-lg sm:text-xl font-bold text-neutral-950">
                  Space Needed: <span className="text-[#0077e6]">550 sq. ft.</span>
                </div>
                <a
                  href="#apply"
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#0077e6] hover:underline mt-1"
                >
                  <span>2 car parks footprint</span>
                  <span>→</span>
                </a>
              </div>
              <div className="md:col-span-5 text-sm text-neutral-600 leading-relaxed">
                Requires 2 standard car parking spots plus charger kiosk pad. Easily integrates into commercial frontage.
              </div>
            </div>

            {/* Row 5: Power Connection */}
            <div className="py-6 sm:py-8 grid grid-cols-1 md:grid-cols-12 gap-4 items-start">
              <div className="md:col-span-3 flex items-center gap-2.5 text-xs font-mono font-bold uppercase tracking-wider text-neutral-500">
                <Cpu className="w-4 h-4 text-[#0077e6]" />
                <span>Power Connection</span>
              </div>
              <div className="md:col-span-4">
                <div className="text-lg sm:text-xl font-bold text-neutral-950">
                  Direct Grid Connection
                </div>
                <a
                  href="#apply"
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#0077e6] hover:underline mt-1"
                >
                  <span>Plug-and-play setup</span>
                  <span>→</span>
                </a>
              </div>
              <div className="md:col-span-5 text-sm text-neutral-600 leading-relaxed">
                Plug-and-play setup. Evion manages end-to-end KSEB liaisoning, transformer sizing, and dedicated EV tariffs.
              </div>
            </div>

            {/* Row 6: Ideal Locations */}
            <div className="py-6 sm:py-8 grid grid-cols-1 md:grid-cols-12 gap-4 items-start">
              <div className="md:col-span-3 flex items-center gap-2.5 text-xs font-mono font-bold uppercase tracking-wider text-neutral-500">
                <MapPin className="w-4 h-4 text-[#0077e6]" />
                <span>Ideal Locations</span>
              </div>
              <div className="md:col-span-4">
                <div className="text-lg sm:text-xl font-bold text-neutral-950">
                  Highways, Office Parks &amp; Malls
                </div>
                <a
                  href="#apply"
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#0077e6] hover:underline mt-1"
                >
                  <span>Prime Kerala locations</span>
                  <span>→</span>
                </a>
              </div>
              <div className="md:col-span-5 text-sm text-neutral-600 leading-relaxed">
                Highways (NH-66, NH-544), tech parks (Infopark/Technopark), retail malls, and residential societies.
              </div>
            </div>

            {/* Row 7: Support Package */}
            <div className="py-6 sm:py-8 grid grid-cols-1 md:grid-cols-12 gap-4 items-start">
              <div className="md:col-span-3 flex items-center gap-2.5 text-xs font-mono font-bold uppercase tracking-wider text-neutral-500">
                <ShieldCheck className="w-4 h-4 text-[#0077e6]" />
                <span>Support Package</span>
              </div>
              <div className="md:col-span-4">
                <div className="text-lg sm:text-xl font-bold text-neutral-950">
                  Service and Support You Can Trust
                </div>
                <a
                  href="#apply"
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#0077e6] hover:underline mt-1"
                >
                  <span>CMS dashboard • 24x7 support • Marketing</span>
                  <span>→</span>
                </a>
              </div>
              <div className="md:col-span-5 text-sm text-neutral-600 leading-relaxed">
                Support includes real-time CMS dashboard, 24x7 automated technical support, and marketing assistance to drive EV drivers straight to your bays.
              </div>
            </div>
          </div>
        </section>

        {/* 5. Streamlined Franchise Inquiry (Unboxed 2-Column Split Layout) */}
        <section id="apply" className="pt-8 border-t border-neutral-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Context & Helpline */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-mono font-bold tracking-widest text-[#0077e6] uppercase">
                  PARTNER ONBOARDING
                </span>
                <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-neutral-950 mt-2">
                  Apply for Franchise
                </h2>
                <p className="text-base text-neutral-600 leading-relaxed mt-3">
                  Enter your details to receive the comprehensive investment kit and schedule a site feasibility survey.
                </p>
              </div>

              <div className="pt-4 space-y-3 text-sm text-neutral-600">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#0077e6] shrink-0" />
                  <span>
                    Direct Helpline:{" "}
                    <a href="tel:+916238887611" className="text-neutral-950 font-bold hover:underline">
                      +91 6238-887611
                    </a>
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#0077e6] shrink-0" />
                  <span>
                    Inquiries:{" "}
                    <a href="mailto:Info@evioncharging.com" className="text-neutral-950 font-bold hover:underline">
                      Info@evioncharging.com
                    </a>
                  </span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200 text-xs text-neutral-600 space-y-1.5 font-mono">
                <div>✓ 1. Immediate kit dispatch via WhatsApp</div>
                <div>✓ 2. Technical site feasibility within 48h</div>
                <div>✓ 3. Turnkey deployment in 30 days</div>
              </div>
            </div>

            {/* Right Column: Clean Form */}
            <div className="lg:col-span-7">
              {isSubmitted ? (
                <div className="py-12 text-center space-y-4 bg-neutral-50 rounded-2xl border border-neutral-200 p-8">
                  <div className="w-12 h-12 rounded-full bg-[#0077e6]/10 text-[#0077e6] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-950">Inquiry Received</h3>
                  <p className="text-sm text-neutral-600 max-w-md mx-auto leading-relaxed">
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
                      className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 text-neutral-900 placeholder-neutral-400 text-sm focus:bg-white focus:outline-none focus:border-[#0077e6] focus:ring-1 focus:ring-[#0077e6] transition-all"
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
                      className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 text-neutral-900 placeholder-neutral-400 text-sm focus:bg-white focus:outline-none focus:border-[#0077e6] focus:ring-1 focus:ring-[#0077e6] transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 mb-1">
                        Kerala District *
                      </label>
                      <select
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 text-neutral-900 text-sm focus:bg-white focus:outline-none focus:border-[#0077e6] focus:ring-1 focus:ring-[#0077e6] transition-all"
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
                        className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 text-neutral-900 text-sm focus:bg-white focus:outline-none focus:border-[#0077e6] focus:ring-1 focus:ring-[#0077e6] transition-all"
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
                      className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 text-neutral-900 text-sm focus:bg-white focus:outline-none focus:border-[#0077e6] focus:ring-1 focus:ring-[#0077e6] transition-all"
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
                    className="w-full py-4 px-6 rounded-full bg-neutral-950 hover:bg-[#0077e6] text-white font-bold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 mt-4"
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
