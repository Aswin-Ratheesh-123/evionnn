"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  Play,
  ArrowRight,
  ExternalLink,
  MapPin,
  Zap,
  ShieldCheck,
  Building2,
  Calendar,
  ChevronRight,
  Phone,
  Mail,
  User,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import TornPaperEdge from "@/components/TornPaperEdge";

interface ChargeZoneHomeProps {
  onOpenFranchiseModal: () => void;
}

export default function ChargeZoneHome({ onOpenFranchiseModal }: ChargeZoneHomeProps) {
  const [activeStoryVideo, setActiveStoryVideo] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedAudience, setSelectedAudience] = useState("Franchise Hosts");

  // Filtered charging hubs for search bar
  const KERALA_HUBS = [
    "Edappally Superhub, Kochi (180kW DC)",
    "Vyttila Mobility Hub, Kochi (120kW DC)",
    "Kazhakkoottam Technopark, Trivandrum (180kW DC)",
    "Calicut Beach Road, Kozhikode (120kW DC)",
    "NH-66 Highway Express Hub, Alappuzha (180kW DC)",
    "NH-544 Bypass Hub, Thrissur (120kW DC)",
    "Infopark Phase 2, Kakkanad (60kW DC)",
    "Meppadi Wayanad Resort Corridor (60kW DC)",
  ];

  const searchResults = searchQuery.trim()
    ? KERALA_HUBS.filter((h) => h.toLowerCase().includes(searchQuery.toLowerCase()))
    : [];

  return (
    <div className="min-h-screen bg-white text-neutral-900 selection:bg-[#00b4d8] selection:text-white font-sans antialiased overflow-x-hidden">
      {/* ========================================================================= */}
      {/* 1. TOP NAVBAR (Clean White, ChargeZone Red Brand Accent)                  */}
      {/* ========================================================================= */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-neutral-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 h-20 flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="flex items-center">
              <span className="font-display font-black text-3xl sm:text-4xl tracking-tighter text-[#00b4d8]">
                EVION
              </span>
              <span className="ml-2 px-2 py-0.5 rounded text-[10px] font-mono font-black uppercase tracking-wider bg-black text-white">
                CHARGE+ZONE
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-bold text-neutral-800 uppercase tracking-wider">
            <Link href="#why-evion" className="hover:text-[#00b4d8] transition-colors">
              Why EVION
            </Link>
            <Link href="#network" className="hover:text-[#00b4d8] transition-colors">
              Network
            </Link>
            <Link href="/franchise" className="hover:text-[#00b4d8] transition-colors">
              Franchise
            </Link>
            <Link href="#stories" className="hover:text-[#00b4d8] transition-colors">
              Driver Stories
            </Link>
            <Link href="#states-network" className="hover:text-[#00b4d8] transition-colors">
              Corridors
            </Link>
            <Link href="#contact" className="hover:text-[#00b4d8] transition-colors">
              Contact
            </Link>
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-3 sm:gap-4">
            <a
              href="#search-bar"
              className="w-10 h-10 rounded-full border border-neutral-300 flex items-center justify-center text-neutral-700 hover:border-black hover:text-black transition-colors"
              aria-label="Search charging locations"
            >
              <Search className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenFranchiseModal}
              className="px-6 py-2.5 bg-[#00b4d8] hover:bg-[#0096b7] text-white font-display font-black text-sm tracking-wider uppercase transition-all shadow-md hover:scale-105 active:scale-95 cursor-pointer"
            >
              APPLY
            </button>
          </div>
        </div>
      </header>

      {/* ========================================================================= */}
      {/* 2. HERO SECTION (Exact Reference: Red Block, Torn Edge, Sky Blue Wash)    */}
      {/* ========================================================================= */}
      <section className="relative w-full overflow-hidden bg-[#00b4d8]">
        {/* Subtle Diagonal Paper Crease across Hero Canvas */}
        <div
          className="absolute inset-0 pointer-events-none z-0 opacity-20"
          style={{
            background: "linear-gradient(125deg, transparent 40%, rgba(0,0,0,0.15) 42.5%, rgba(255,255,255,0.3) 43.5%, transparent 45%)",
          }}
        />

        {/* Top Solid Red Container */}
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 pt-12 sm:pt-16 pb-16 sm:pb-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Bold Collegiate Typography */}
            <div className="lg:col-span-7 space-y-6 text-white">
              <div className="space-y-1">
                <h1 className="font-display font-black text-6xl sm:text-8xl md:text-9xl leading-[0.88] tracking-tighter uppercase text-white drop-shadow-sm">
                  THE
                  <br />
                  POWER
                  <br />
                  CALLS.
                </h1>
              </div>

              {/* High-Contrast Black Block Tags */}
              <div className="flex flex-wrap gap-2 pt-1">
                <span className="px-3 py-1 bg-black text-white font-display font-black text-lg sm:text-2xl uppercase tracking-tight">
                  HOW WILL
                </span>
                <span className="px-3 py-1 bg-black text-white font-display font-black text-lg sm:text-2xl uppercase tracking-tight">
                  YOU CHARGE?
                </span>
              </div>

              {/* Action Buttons & Quick Nav Links */}
              <div className="pt-4 flex flex-wrap items-center gap-4 sm:gap-6">
                <button
                  onClick={onOpenFranchiseModal}
                  className="px-8 py-3.5 bg-black hover:bg-neutral-900 text-white font-display font-black text-base uppercase tracking-wider transition-all shadow-xl hover:-translate-y-0.5 cursor-pointer"
                >
                  APPLY FOR FRANCHISE
                </button>

                <div className="flex items-center gap-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-white">
                  <a href="#network" className="hover:underline flex items-center gap-1">
                    <span>&gt; EXPLORE STATIONS</span>
                  </a>
                  <Link href="/franchise" className="hover:underline flex items-center gap-1">
                    <span>&gt; GET INFO</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Column: Dynamic Media Collage (Organic Pill Cutout + 8-Point Star) */}
            <div className="lg:col-span-5 relative flex flex-col items-center">
              {/* Retro 8-Point Geometric Starburst Emblem */}
              <div className="absolute -top-8 -right-4 sm:-right-8 w-24 h-24 text-white/90 animate-spin-slow pointer-events-none">
                <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full drop-shadow-lg">
                  <polygon points="50,0 62,38 100,50 62,62 50,100 38,62 0,50 38,38" />
                </svg>
              </div>

              {/* Primary Cutout Media Card with Play Button */}
              <div className="relative w-full max-w-sm rounded-[36px] overflow-hidden border-4 border-white shadow-2xl bg-neutral-900 group">
                <div className="relative h-80 sm:h-96 w-full">
                  <Image
                    src="/images/evion-family-fast-charging-1.jpg"
                    alt="EV Driver Fast Charging in Kerala"
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* ========================================================= */}
                  {/* SIMPLE & SMALL PAPER FOLDINGS ON HERO IMAGE               */}
                  {/* ========================================================= */}
                  {/* 1. Horizontal Fold Crease */}
                  <div className="absolute inset-x-0 top-[46%] h-[1px] bg-white/45 pointer-events-none z-10 shadow-[0_1px_2px_rgba(0,0,0,0.4)]" />
                  <div className="absolute inset-x-0 top-[46.3%] h-[1px] bg-black/25 pointer-events-none z-10" />

                  {/* 2. Vertical Fold Crease */}
                  <div className="absolute inset-y-0 left-[50%] w-[1px] bg-white/35 pointer-events-none z-10 shadow-[1px_0_2px_rgba(0,0,0,0.4)]" />
                  <div className="absolute inset-y-0 left-[50.3%] w-[1px] bg-black/20 pointer-events-none z-10" />

                  {/* 3. Small Diagonal Paper Crease */}
                  <div
                    className="absolute inset-0 pointer-events-none z-10 opacity-30"
                    style={{
                      background: "linear-gradient(135deg, transparent 48%, rgba(0,0,0,0.4) 49.5%, rgba(255,255,255,0.6) 50.5%, transparent 52%)",
                    }}
                  />

                  {/* 4. Subtle Quadrant Light Differentiation (Tactile Paper Facets) */}
                  <div className="absolute inset-0 pointer-events-none z-10 grid grid-cols-2 grid-rows-2">
                    <div className="bg-white/[0.03]" />
                    <div className="bg-black/[0.03]" />
                    <div className="bg-black/[0.02]" />
                    <div className="bg-white/[0.02]" />
                  </div>

                  {/* 5. Small Folded Corner (Dog-Ear Fold at top-right) */}
                  <div className="absolute top-0 right-0 w-8 h-8 pointer-events-none z-20">
                    <div
                      className="absolute top-0 right-0 w-full h-full"
                      style={{
                        clipPath: "polygon(0 0, 100% 0, 100% 100%)",
                        background: "linear-gradient(135deg, #f0f0f0 0%, #ffffff 50%, #d8d8d8 100%)",
                        filter: "drop-shadow(-1px 2px 3px rgba(0,0,0,0.35))",
                      }}
                    />
                    <div
                      className="absolute top-0 right-0 w-full h-full"
                      style={{
                        background: "linear-gradient(135deg, transparent 46%, rgba(0,0,0,0.35) 49%, rgba(255,255,255,0.5) 51%, transparent 53%)",
                      }}
                    />
                  </div>

                  {/* Centered Circular White Play Button */}
                  <button
                    onClick={() => setActiveStoryVideo("hero-story")}
                    className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-white text-[#00b4d8] shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all cursor-pointer z-20"
                    aria-label="Play charging showcase video"
                  >
                    <Play className="w-7 h-7 fill-current ml-1" />
                  </button>

                  <div className="absolute bottom-4 left-4 right-4 text-white z-20">
                    <span className="px-2 py-0.5 rounded bg-[#00b4d8] text-[10px] font-mono font-bold uppercase tracking-wider">
                      180kW DC Fast Charge
                    </span>
                    <p className="text-sm font-bold mt-1">Kerala Highway Superhub Experience</p>
                  </div>
                </div>
              </div>

              {/* Secondary Overlapping Photo Card with Matching Fold & Small Corner */}
              <div className="w-48 sm:w-56 h-32 rounded-2xl overflow-hidden border-4 border-white shadow-xl -mt-10 mr-auto ml-4 sm:ml-0 relative z-20 bg-neutral-800">
                <Image
                  src="/images/evion-charging-station-kerala-hub.jpg"
                  alt="EVION DC Fast Charger Dual Gun CCS"
                  fill
                  sizes="240px"
                  className="object-cover"
                />
                {/* Diagonal Paper Fold Crease across secondary card */}
                <div
                  className="absolute inset-0 pointer-events-none z-10"
                  style={{
                    background: "linear-gradient(125deg, transparent 48%, rgba(0,0,0,0.35) 49.5%, rgba(255,255,255,0.45) 50.5%, transparent 52%)",
                  }}
                />
                {/* Small Folded Corner (Dog-Ear Fold) */}
                <div className="absolute top-0 right-0 w-5 h-5 pointer-events-none z-20">
                  <div
                    className="absolute top-0 right-0 w-full h-full"
                    style={{
                      clipPath: "polygon(0 0, 100% 0, 100% 100%)",
                      background: "linear-gradient(135deg, #f0f0f0 0%, #ffffff 50%, #d8d8d8 100%)",
                      filter: "drop-shadow(-1px 1.5px 2px rgba(0,0,0,0.3))",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Authentic Torn Paper Cutting Edge Transition to Sky Blue */}
        <TornPaperEdge fillColor="#7ec8e3" heightClass="h-10 sm:h-16" />

        {/* Lower Sky Blue Horizon Band with Light Cloud Wash */}
        <div className="w-full bg-[#7ec8e3] py-4 px-4 sm:px-8 relative z-10">
          <div className="max-w-[1400px] mx-auto flex flex-wrap items-center justify-between gap-4 text-neutral-900 font-display font-black tracking-tight text-sm sm:text-base uppercase">
            <span>KERALA ARTERIAL NETWORK</span>
            <span>•</span>
            <span>180kW DUAL GUN CCS FAST CHARGING</span>
            <span>•</span>
            <span>24/36 MO. PAYBACK HORIZON</span>
            <span>•</span>
            <span>100% KSEB LIAISONING</span>
          </div>
        </div>

        {/* Torn Paper Cutting Edge Transition from Sky Blue to Watercolor Sky */}
        <div className="w-full bg-[#7ec8e3] leading-none -mb-[1px] pointer-events-none">
          <TornPaperEdge fillColor="#f1f6fa" heightClass="h-8 sm:h-14" />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. SECTION: WHY EVION? (India Gate Artwork Full-Bleed Background)          */}
      {/* ========================================================================= */}
      <section id="why-evion" className="relative py-20 sm:py-28 overflow-hidden bg-[#f1f6fa]">
        {/* Full-Bleed Background Image (Exact User Artwork Filling the Entire Section) */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/images/why-evion-india-gate.jpg"
            alt="India Gate Landmark Watercolor Background - EVION Infrastructure"
            fill
            priority
            sizes="100vw"
            className="object-cover object-bottom"
          />
          {/* Directional protective watercolor wash: clear on left (55%+) to showcase India Gate, soft on far right so text never mixes */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent via-55% to-white/90 lg:to-white/95" />
          <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent" />
        </div>

        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 relative z-10">
          {/* Section Header: Exact Reference Style (Heading + Thick Turquoise Accent Bar) */}
          <div className="mb-8 sm:mb-12">
            <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-neutral-950">
              Why EVION?
            </h2>
            <div className="w-16 sm:w-20 h-1.5 bg-[#00b4d8] mt-2" />
          </div>

          {/* 2-Column Arrangement: Left 58% clear for India Gate, Right 42% dedicated for editorial text */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center min-h-[460px] sm:min-h-[520px]">
            {/* Left Column Spacer: Keeps the entire left 50%-58% clear for India Gate */}
            <div className="hidden lg:block lg:col-span-6 xl:col-span-7" />

            {/* Right Column: Moved far to the right edge */}
            <div className="lg:col-span-6 xl:col-span-5 flex flex-col items-start lg:items-end">
              <div className="w-full max-w-lg xl:max-w-xl space-y-8 sm:space-y-10 bg-white/85 lg:bg-transparent p-6 sm:p-8 lg:p-0 rounded-none backdrop-blur-sm lg:backdrop-blur-none shadow-sm lg:shadow-none border border-white/60 lg:border-0">
                {/* Lead Editorial Paragraph */}
                <div className="space-y-3">
                  <p className="text-base sm:text-lg text-neutral-800 leading-relaxed font-medium">
                    <strong className="font-bold text-neutral-950">
                      Ranked No. 1 for High-Speed EV Infrastructure and Arterial Network Reliability across Kerala
                    </strong>{" "}
                    (Clean Mobility Index, 2026), EVION is a place that&apos;s big on opportunity and making a difference. There are countless reasons to join the EVION franchise family, and we can&apos;t wait to welcome you as a hub partner so you can make meaningful returns and build Kerala&apos;s clean energy future.
                  </p>
                </div>

                {/* Prominent Action Links with Arrows & Thick Turquoise Underlines (Exact Reference Style) */}
                <div className="flex flex-col space-y-5 sm:space-y-6">
                  <Link
                    href="/franchise"
                    className="group inline-flex items-center font-display font-black text-2xl sm:text-3xl md:text-4xl uppercase tracking-tight text-neutral-950 hover:text-[#00b4d8] transition-colors"
                  >
                    <span className="border-b-4 sm:border-b-[5px] border-[#00b4d8] pb-1">
                      300+ ARTERIAL HIGHWAY BAYS &amp; HUBS
                    </span>
                    <ArrowRight className="w-6 h-6 sm:w-7 sm:h-7 ml-3 text-neutral-950 group-hover:text-[#00b4d8] group-hover:translate-x-2 transition-all" />
                  </Link>

                  <Link
                    href="/franchise"
                    className="group inline-flex items-center font-display font-black text-2xl sm:text-3xl md:text-4xl uppercase tracking-tight text-neutral-950 hover:text-[#00b4d8] transition-colors"
                  >
                    <span className="border-b-4 sm:border-b-[5px] border-[#00b4d8] pb-1">
                      180kW DUAL GUN CCS FAST CHARGING
                    </span>
                    <ArrowRight className="w-6 h-6 sm:w-7 sm:h-7 ml-3 text-neutral-950 group-hover:text-[#00b4d8] group-hover:translate-x-2 transition-all" />
                  </Link>
                </div>

                {/* Clean Rectangular Search Bar (Exact Reference Style: Input + Black SEARCH Button) */}
                <div id="search-bar" className="pt-2 w-full space-y-2">
                  <div className="flex items-center border border-neutral-300 bg-white shadow-sm overflow-hidden">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search all 50+ Kerala charging locations & corridors..."
                      className="w-full px-4 sm:px-5 py-3.5 text-sm sm:text-base font-normal text-neutral-800 placeholder-neutral-400 bg-transparent focus:outline-none"
                    />
                    <button
                      onClick={() => {
                        const el = document.getElementById("search-results");
                        if (el) el.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="px-6 sm:px-8 py-3.5 bg-black hover:bg-neutral-800 text-white font-display font-black text-xs sm:text-sm tracking-widest uppercase flex items-center gap-2 cursor-pointer transition-colors shrink-0"
                    >
                      <span>SEARCH</span>
                      <Search className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Quick Search Autocomplete Results */}
                  {searchQuery && searchResults.length > 0 && (
                    <div id="search-results" className="p-3 rounded-none border border-neutral-200 bg-white shadow-md space-y-1.5 mt-2">
                      <div className="text-[11px] font-mono font-bold text-neutral-500 uppercase">
                        Matching Fast Chargers ({searchResults.length}):
                      </div>
                      {searchResults.map((hub, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-neutral-900 py-1 border-b border-neutral-200 last:border-0">
                          <MapPin className="w-3.5 h-3.5 text-[#00b4d8] shrink-0" />
                          <span>{hub}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. SECTION: STATS & RECOGNITION MOSAIC (Exact Reference Layout)            */}
      {/* ========================================================================= */}
      <section className="pt-12 sm:pt-20 pb-0 bg-white relative">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 pb-10 sm:pb-16">
          {/* Asymmetric 6-Card Mosaic Grid (Exact 1:1 Reference Architecture) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 items-stretch">
            {/* ----------------------------------------------------------------- */}
            {/* LEFT CLUSTER: Top Wide Turquoise Card + Bottom [Photo + White Card] */}
            {/* ----------------------------------------------------------------- */}
            <div className="flex flex-col gap-5 sm:gap-6 justify-between">
              {/* Box 1: Solid Vibrant Turquoise Card with Thick White Border Overlapping Why EVION (Exact Reference) */}
              <div className="relative -mt-16 sm:-mt-24 lg:-mt-32 z-20 overflow-hidden bg-[#00b4d8] text-white p-8 sm:p-12 flex flex-col justify-center items-center text-center rounded-none border-4 sm:border-[6px] lg:border-[8px] border-white shadow-2xl min-h-[220px] sm:min-h-[260px]">
                <Image
                  src="/images/evion-station-cafe-plaza-travelers-desktop-wide.jpg"
                  alt="Top 50 Fast-Charging Superhubs in South India"
                  fill
                  sizes="(max-width: 1024px) 100vw, 700px"
                  className="object-cover mix-blend-multiply opacity-25"
                />
                <div className="relative z-10 max-w-md mx-auto space-y-3">
                  <h3 className="font-display font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight leading-[0.95] text-white">
                    Top 50 Fast-Charging Superhubs in South India
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold tracking-normal text-white">
                    <span className="underline decoration-1 underline-offset-4">EV Infra Report, 2026</span>
                  </p>
                </div>
              </div>

              {/* Bottom Row: Photo Tile (col-span-5) + White Framed Card (col-span-7) */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 sm:gap-6 flex-1 items-stretch">
                {/* Box 2: Portrait Photo Tile */}
                <div className="sm:col-span-5 relative min-h-[240px] sm:min-h-[270px] overflow-hidden rounded-none shadow-sm bg-neutral-900 group">
                  <Image
                    src="/images/evion-family-fast-charging-2.jpg"
                    alt="EV Drivers in Kerala"
                    fill
                    sizes="(max-width: 640px) 100vw, 320px"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Box 3: White Card with Thick Turquoise Border */}
                <div className="sm:col-span-7 bg-white border-4 sm:border-[5px] border-[#00b4d8] p-6 sm:p-8 flex flex-col justify-center items-center text-center rounded-none shadow-sm min-h-[240px] sm:min-h-[270px]">
                  <div className="max-w-xs mx-auto space-y-3">
                    <h3 className="font-display font-black text-2xl sm:text-3xl md:text-4xl uppercase tracking-tight leading-[0.95] text-neutral-950">
                      Named best value in Kerala EV charging
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold tracking-normal text-neutral-600">
                      <span className="underline decoration-1 underline-offset-4">Clean Mobility Index, 2026</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ----------------------------------------------------------------- */}
            {/* RIGHT CLUSTER: Top [Tall Photo + White Card] + Bottom Wide Black Card */}
            {/* ----------------------------------------------------------------- */}
            <div className="flex flex-col gap-5 sm:gap-6 justify-between">
              {/* Top Row: Tall Vertical Portrait Photo (col-span-5) + White Framed Card (col-span-7) */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 sm:gap-6 flex-1 items-stretch">
                {/* Box 4: Tall Vertical Portrait Photo (Highway Corridor / Lamppost Avenue) */}
                <div className="sm:col-span-5 relative min-h-[260px] sm:min-h-[300px] overflow-hidden rounded-none shadow-sm bg-neutral-900 group">
                  <Image
                    src="/images/hero-station-charger-mobile-optimized.jpg"
                    alt="Kerala EV Highway Superhub Corridor"
                    fill
                    sizes="(max-width: 640px) 100vw, 320px"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Box 5: White Card with Thick Turquoise Border (Offset to align cleanly) */}
                <div className="sm:col-span-7 sm:self-end bg-white border-4 sm:border-[5px] border-[#00b4d8] p-6 sm:p-8 flex flex-col justify-center items-center text-center rounded-none shadow-sm min-h-[240px] sm:min-h-[270px]">
                  <div className="max-w-xs mx-auto space-y-3">
                    <h3 className="font-display font-black text-2xl sm:text-3xl md:text-4xl uppercase tracking-tight leading-[0.95] text-neutral-950">
                      Online cloud CMS earns national recognition
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold tracking-normal text-neutral-600">
                      <span className="underline decoration-1 underline-offset-4">Central Electricity Authority, 2026</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Box 6: Wide Dark/Black Card with Grayscale Photo Texture */}
              <div className="relative overflow-hidden bg-neutral-950 text-white p-8 sm:p-12 flex flex-col justify-center items-center text-center rounded-none shadow-sm min-h-[200px] sm:min-h-[220px]">
                <Image
                  src="/images/evion-station-evening-travelers-hero-wide.jpg"
                  alt="EVION Sustainability Recognition"
                  fill
                  sizes="(max-width: 1024px) 100vw, 700px"
                  className="object-cover grayscale opacity-25"
                />
                <div className="relative z-10 max-w-md mx-auto space-y-3">
                  <h3 className="font-display font-black text-2xl sm:text-3xl md:text-4xl uppercase tracking-tight leading-[0.95] text-white">
                    Recognized with two national sustainability rankings
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold tracking-normal text-neutral-300">
                    <span className="underline decoration-1 underline-offset-4">BEE &amp; KSEB Green Grid Certified, 2026</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Authentic Torn Paper Cutting Edge Transition into Sky Blue Stories Section */}
        <div className="w-full relative z-20 -mb-[1px] bg-white leading-none pointer-events-none">
          <TornPaperEdge fillColor="#7ec8e3" heightClass="h-12 sm:h-16 lg:h-20" />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. SECTION: LIFE ON THE GRID / 4-VIDEO CAROUSEL (Sky Blue Wash)            */}
      {/* ========================================================================= */}
      <section id="stories" className="py-20 sm:py-28 bg-[#7ec8e3] relative">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
            <span className="text-xs font-mono font-bold tracking-widest text-neutral-900 uppercase">
              EXPERIENCES ON THE CORRIDOR
            </span>
            <h2 className="font-display font-black text-5xl sm:text-6xl md:text-7xl uppercase tracking-tighter text-neutral-950">
              Life on the Grid
            </h2>
            <p className="text-base sm:text-lg text-neutral-800 font-medium max-w-xl mx-auto">
              Real stories from daily commuters, tourist resort hosts, and commercial partners who have plugged into EVION.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenFranchiseModal}
                className="px-6 py-2.5 bg-[#00b4d8] hover:bg-[#0096b7] text-white font-display font-black text-sm uppercase tracking-wider transition-all shadow-md"
              >
                SEE MORE EVION STORIES
              </button>
            </div>
          </div>

          {/* 4 Portrait Video Cards (Exact OSU Style) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-none border-2 border-black overflow-hidden shadow-xl flex flex-col justify-between group">
              <div className="relative h-72 w-full bg-neutral-900 overflow-hidden">
                <Image
                  src="/images/evion-family-fast-charging-3.jpg"
                  alt="EV Driver Interview"
                  fill
                  sizes="(max-width: 768px) 100vw, 300px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />

                {/* White Circular Play Button */}
                <button
                  onClick={() => setActiveStoryVideo("story-1")}
                  className="absolute inset-0 m-auto w-14 h-14 rounded-full bg-white text-[#00b4d8] shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all cursor-pointer"
                  aria-label="Play video"
                >
                  <Play className="w-6 h-6 fill-current ml-0.5" />
                </button>
              </div>
              <div className="p-4 bg-white border-t border-neutral-200">
                <h4 className="font-display font-black text-xl uppercase tracking-tight text-neutral-950">
                  What&apos;s your charging speed?
                </h4>
                <p className="text-xs text-neutral-600 mt-1">
                  15 minutes to 80% on NH-66 Edappally Dual-Gun CCS.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-none border-2 border-black overflow-hidden shadow-xl flex flex-col justify-between group">
              <div className="relative h-72 w-full bg-neutral-900 overflow-hidden">
                <Image
                  src="/images/evion-family-plug-and-charge.jpg"
                  alt="Hotel and Resort EV Charger Host"
                  fill
                  sizes="(max-width: 768px) 100vw, 300px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />

                <button
                  onClick={() => setActiveStoryVideo("story-2")}
                  className="absolute inset-0 m-auto w-14 h-14 rounded-full bg-white text-[#00b4d8] shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all cursor-pointer"
                  aria-label="Play video"
                >
                  <Play className="w-6 h-6 fill-current ml-0.5" />
                </button>
              </div>
              <div className="p-4 bg-white border-t border-neutral-200">
                <h4 className="font-display font-black text-xl uppercase tracking-tight text-neutral-950">
                  Why was EVION right for my resort?
                </h4>
                <p className="text-xs text-neutral-600 mt-1">
                  Capturing premium luxury tourists driving from Bangalore and Kochi.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-none border-2 border-black overflow-hidden shadow-xl flex flex-col justify-between group">
              <div className="relative h-72 w-full bg-neutral-900 overflow-hidden">
                <Image
                  src="/images/evion-station-young-travelers-hero-wide.jpg"
                  alt="Young Travelers Fast Charging"
                  fill
                  sizes="(max-width: 768px) 100vw, 300px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />

                <button
                  onClick={() => setActiveStoryVideo("story-3")}
                  className="absolute inset-0 m-auto w-14 h-14 rounded-full bg-white text-[#00b4d8] shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all cursor-pointer"
                  aria-label="Play video"
                >
                  <Play className="w-6 h-6 fill-current ml-0.5" />
                </button>
              </div>
              <div className="p-4 bg-white border-t border-neutral-200">
                <h4 className="font-display font-black text-xl uppercase tracking-tight text-neutral-950">
                  What are you most excited for?
                </h4>
                <p className="text-xs text-neutral-600 mt-1">
                  Zero range anxiety on Kochi to Wayanad hill road trips.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-none border-2 border-black overflow-hidden shadow-xl flex flex-col justify-between group">
              <div className="relative h-72 w-full bg-neutral-900 overflow-hidden">
                <Image
                  src="/images/evion-station-evening-travelers-hero-wide.jpg"
                  alt="Weekly automated franchise payouts"
                  fill
                  sizes="(max-width: 768px) 100vw, 300px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />

                <button
                  onClick={() => setActiveStoryVideo("story-4")}
                  className="absolute inset-0 m-auto w-14 h-14 rounded-full bg-white text-[#00b4d8] shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all cursor-pointer"
                  aria-label="Play video"
                >
                  <Play className="w-6 h-6 fill-current ml-0.5" />
                </button>
              </div>
              <div className="p-4 bg-white border-t border-neutral-200">
                <h4 className="font-display font-black text-xl uppercase tracking-tight text-neutral-950">
                  How do weekly payouts work?
                </h4>
                <p className="text-xs text-neutral-600 mt-1">
                  Automated net revenue disbursed directly to bank account every Monday.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. SECTION: BECOME A FRANCHISEE (The State's Network Banner in Brand Colors)*/}
      {/* ========================================================================= */}
      <section id="states-network" className="relative w-full overflow-hidden bg-[#00b4d8]">
        {/* Full-Bleed Artwork Banner Image in Website Color Scheme */}
        <div className="relative w-full min-h-[500px] sm:min-h-[560px] md:min-h-[620px] lg:min-h-[700px] flex items-center">
          <Image
            src="/images/the-states-network-banner-clean.jpg"
            alt="The State's Network - Become a Franchisee"
            fill
            priority
            sizes="100vw"
            className="object-cover object-right md:object-center pointer-events-none"
          />

          {/* Directional Softening on Small Screens (ensures text readability over artwork on mobile) */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#00b4d8] via-[#00b4d8]/85 to-transparent md:hidden pointer-events-none" />

          {/* Content Container Aligned to the Left (Matching Reference Layout) */}
          <div className="max-w-[1400px] w-full mx-auto px-6 sm:px-10 lg:px-16 pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 relative z-10">
            <div className="max-w-xl lg:max-w-2xl space-y-6 sm:space-y-8">
              <div>
                <span className="text-xs sm:text-sm font-mono font-black tracking-widest text-neutral-900 uppercase block mb-3">
                  THE STATE&apos;S NETWORK • KERALA ARTERIAL CORRIDORS
                </span>
                <h2 className="font-display font-black text-6xl sm:text-7xl md:text-8xl lg:text-9xl uppercase tracking-tighter leading-[0.88] text-neutral-950">
                  BECOME A
                  <br />
                  FRANCHISEE
                </h2>
              </div>

              <div>
                <button
                  onClick={onOpenFranchiseModal}
                  className="inline-flex items-center gap-3 px-8 sm:px-10 py-3.5 sm:py-4 bg-white hover:bg-neutral-100 text-black font-display font-black text-sm sm:text-base uppercase tracking-wider transition-all shadow-xl hover:shadow-2xl cursor-pointer"
                >
                  <span>BECOME A FRANCHISEE</span>
                  <ArrowRight className="w-5 h-5 text-black" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. SECTION: INFORMATION FOR: AUDIENCE BAR (Solid ChargeZone Turquoise)     */}
      {/* ========================================================================= */}
      <section className="bg-[#00b4d8] py-8 sm:py-10 text-white border-t border-black/10">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 text-center space-y-4">
          <h3 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tight text-white">
            Information for:
          </h3>

          {/* Rounded White Audience Pills (Exact OSU Style) */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {[
              "Franchise Hosts",
              "EV Drivers",
              "Commercial Fleets",
              "Mall & Hotel Hosts",
              "Highway Landowners",
              "KSEB Liaison",
              "Tech Parks",
              "Resort Chains",
            ].map((audience) => (
              <button
                key={audience}
                onClick={() => {
                  setSelectedAudience(audience);
                  onOpenFranchiseModal();
                }}
                className={`px-4 sm:px-5 py-2 rounded-full font-bold text-xs sm:text-sm transition-all cursor-pointer shadow-sm ${
                  selectedAudience === audience
                    ? "bg-black text-white scale-105"
                    : "bg-white text-neutral-900 hover:bg-neutral-100 hover:scale-105"
                }`}
              >
                {audience}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. SECTION: FULL-WIDTH STATION LANDMARK PANORAMA                          */}
      {/* ========================================================================= */}
      <section className="relative w-full h-80 sm:h-[480px] bg-neutral-900 overflow-hidden">
        <Image
          src="/images/statement-accessible-network-desktop.jpg"
          alt="EVION Highway Superhub Panoramic View"
          fill
          sizes="100vw"
          className="object-cover object-center brightness-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

        <div className="absolute bottom-8 left-4 sm:left-12 max-w-xl text-white space-y-2">
          <span className="px-3 py-1 bg-[#00b4d8] font-mono text-xs font-bold uppercase tracking-wider">
            Flagship Engineering
          </span>
          <h3 className="font-display font-black text-3xl sm:text-5xl uppercase tracking-tight">
            Building Kerala&apos;s Fastest Corridor
          </h3>
          <p className="text-sm text-neutral-300">
            Powered by high-capacity grid switchgear, dual-gun dynamic CCS dispensers, and automated weekly payouts.
          </p>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 10. SECTION: BOLD STATEMENT BANNER (Sky-Blue Strip + Solid Red Graphic)   */}
      {/* ========================================================================= */}
      {/* ========================================================================= */}
      {/* 10. SECTION: WE ARE ALL CHARGING FORWARD (Collegiate Poster Finale)       */}
      {/* ========================================================================= */}
      <section className="w-full">
        {/* Upper Sky-Blue Strip with Subtle Dry-Brush Scrambles */}
        <div className="bg-[#7ec8e3] py-6 px-4 sm:px-8 border-t border-black/10 relative overflow-hidden">
          {/* Subtle Painterly Chalk / Brush Scrambles in Upper Left (Echoing Reference Poster) */}
          <div className="absolute top-1 left-4 sm:left-12 pointer-events-none opacity-40">
            <svg viewBox="0 0 200 60" fill="none" stroke="currentColor" className="w-40 sm:w-56 h-12 text-white">
              <path d="M5,18 C30,8 55,28 85,14 S130,26 155,10 S185,22 198,12" strokeWidth="2" strokeLinecap="round" strokeDasharray="6 3 10 3" />
              <path d="M18,30 C42,16 68,36 98,22 S142,32 168,18 S190,30 199,22" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="4 2 8 3" />
              <path d="M30,42 C52,30 80,48 110,32 S155,42 180,28" strokeWidth="1" strokeLinecap="round" strokeDasharray="3 2 6 2" />
            </svg>
          </div>

          <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left relative z-10">
            <div>
              <h4 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tight text-neutral-950">
                EVERY DRIVER ANSWERS THE CALL
              </h4>
              <p className="text-xs sm:text-sm text-neutral-800 max-w-xl font-medium mt-0.5">
                In everything we make, deploy, and power, we are answering a call to unlock zero-emission travel across Kerala.
              </p>
            </div>
            <button
              onClick={onOpenFranchiseModal}
              className="px-8 py-3 bg-black hover:bg-neutral-900 text-white font-display font-black text-sm uppercase tracking-wider whitespace-nowrap shadow-md cursor-pointer"
            >
              PARTNER WITH EVION
            </button>
          </div>
        </div>

        {/* Authentic Torn Paper Cutting Edge Transition into Turquoise Banner */}
        <div className="w-full bg-[#7ec8e3] leading-none -mb-[1px] pointer-events-none">
          <TornPaperEdge fillColor="#00b4d8" heightClass="h-10 sm:h-16" />
        </div>

        {/* Lower Solid ChargeZone Banner with Massive Condensed Typography & Localized Scrambles */}
        <div className="bg-[#00b4d8] py-16 sm:py-20 px-4 sm:px-8 relative overflow-hidden text-white">
          {/* Localized Paper Crease Fold Line cutting across part of the field */}
          <div
            className="absolute top-0 left-[20%] w-80 h-full pointer-events-none opacity-20"
            style={{
              background: "linear-gradient(115deg, transparent 48%, rgba(0,0,0,0.3) 49.5%, rgba(255,255,255,0.55) 50.5%, transparent 52%)",
            }}
          />

          <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
            <div>
              <h2 className="font-display font-black text-5xl sm:text-7xl md:text-8xl lg:text-9xl uppercase tracking-tighter leading-[0.88] text-white">
                <span className="relative inline-block">
                  WE ARE ALL
                  {/* Subtle Etched Hatch Scratches over part of "ALL" */}
                  <span className="absolute -top-3 right-0 sm:right-2 w-16 h-6 pointer-events-none text-white/45">
                    <svg viewBox="0 0 60 20" fill="none" stroke="currentColor">
                      <path d="M4,16 L18,4 M14,18 L28,5 M24,16 L38,3 M34,17 L48,4 M44,15 L56,3" strokeWidth="1.2" strokeLinecap="round" />
                    </svg>
                  </span>
                </span>
                <br />
                <span className="relative inline-block">
                  CHARGING FORWARD
                  {/* Subtle Hand-Drawn Distressed Scribble Stroke Accent under "FORWARD" */}
                  <span className="absolute -bottom-2 sm:-bottom-3 right-2 sm:right-6 w-36 sm:w-52 h-4 pointer-events-none text-white/50">
                    <svg viewBox="0 0 160 14" fill="none" stroke="currentColor">
                      <path d="M2,8 Q40,2 80,9 T158,6 M16,11 Q55,4 95,12 T145,9" strokeWidth="1.6" strokeLinecap="round" strokeDasharray="8 4 18 5" />
                    </svg>
                  </span>
                </span>
              </h2>
              <p className="text-sm sm:text-base font-bold text-white/90 mt-4 max-w-lg">
                Join India&apos;s fast charging movement. Own an EVION Superhub along high-traffic corridors.
              </p>
            </div>

            {/* Illustrated Graphic Element: Twin Gun CCS Fast Charging Plug with Localized Scramble Ring */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 flex items-center justify-center">
              {/* Subtle Stencil & Sketched Scramble Outer Rings */}
              <div className="absolute -inset-2 rounded-full border border-dashed border-white/20 pointer-events-none" />
              <svg viewBox="0 0 120 120" className="absolute -inset-3 w-[calc(100%+24px)] h-[calc(100%+24px)] text-white/25 pointer-events-none">
                <circle cx="60" cy="60" r="56" fill="none" stroke="currentColor" strokeWidth="1.2" strokeDasharray="14 8 4 6 20 6" />
                <circle cx="60" cy="60" r="59" fill="none" stroke="currentColor" strokeWidth="0.8" strokeDasharray="8 16 3 10" />
              </svg>

              <div className="w-full h-full rounded-full border-8 border-white/20 flex items-center justify-center p-6 bg-black/10">
                <div className="text-center space-y-2">
                  <Zap className="w-24 h-24 text-white mx-auto stroke-[2.5]" />
                  <div className="font-display font-black text-3xl uppercase tracking-tight text-white">
                    180kW DUAL GUN
                  </div>
                  <div className="text-xs font-mono font-bold text-white/80">
                    CCS2 HIGH VOLTAGE
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 11. FOOTER (Jet Black Background, ChargeZone Red Accents)                 */}
      {/* ========================================================================= */}
      <footer id="contact" className="bg-[#0a0a0a] text-white pt-16 pb-12 border-t border-neutral-900">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-neutral-800">
            {/* Col 1: Brand & Headquarters */}
            <div className="lg:col-span-4 space-y-4">
              <div className="flex items-center gap-2">
                <span className="font-display font-black text-3xl tracking-tighter text-[#00b4d8]">
                  EVION
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-black uppercase tracking-wider bg-white text-black">
                  CHARGE+ZONE
                </span>
              </div>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-sm">
                Evion Power Solutions Pvt. Ltd. in strategic alliance with CHARGE+ZONE. Powering Kerala&apos;s highway EV charging revolution.
              </p>
              <div className="space-y-2 text-xs text-neutral-300 font-mono pt-2">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#00b4d8] shrink-0" />
                  <span>Infopark Expressway, Kakkanad, Kochi, Kerala 682042</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#00b4d8] shrink-0" />
                  <a href="tel:+916238887611" className="hover:text-white">
                    +91 6238-887611 (Franchise Helpline)
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#00b4d8] shrink-0" />
                  <a href="mailto:Info@evioncharging.com" className="hover:text-white">
                    Info@evioncharging.com
                  </a>
                </div>
              </div>
            </div>

            {/* Col 2: Network & Solutions */}
            <div className="lg:col-span-3 space-y-3">
              <h5 className="font-display font-black text-lg uppercase tracking-tight text-white border-b border-neutral-800 pb-1.5">
                Charging Network
              </h5>
              <ul className="space-y-2 text-xs text-neutral-400">
                <li><a href="#why-evion" className="hover:text-white transition-colors">Why EVION Charging</a></li>
                <li><a href="#network" className="hover:text-white transition-colors">NH-66 Arterial Corridors</a></li>
                <li><a href="#network" className="hover:text-white transition-colors">NH-544 Bypass Superhubs</a></li>
                <li><a href="#stories" className="hover:text-white transition-colors">180kW DC Dual Gun Specs</a></li>
                <li><a href="#stories" className="hover:text-white transition-colors">Universal CCS2 Protocol</a></li>
              </ul>
            </div>

            {/* Col 3: Franchise & Partnerships */}
            <div className="lg:col-span-3 space-y-3">
              <h5 className="font-display font-black text-lg uppercase tracking-tight text-white border-b border-neutral-800 pb-1.5">
                Franchise Hubs
              </h5>
              <ul className="space-y-2 text-xs text-neutral-400">
                <li><Link href="/franchise" className="hover:text-white transition-colors">70 / 30 Revenue-Share Model</Link></li>
                <li><Link href="/franchise" className="hover:text-white transition-colors">FOCO (Franchise Owned, Company Operated)</Link></li>
                <li><Link href="/franchise" className="hover:text-white transition-colors">COCO (Company Owned, Company Operated)</Link></li>
                <li><Link href="/franchise" className="hover:text-white transition-colors">SBI EV Mitra Loan Support</Link></li>
                <li><Link href="/franchise" className="hover:text-white transition-colors">Turnkey Site Feasibility Survey</Link></li>
              </ul>
            </div>

            {/* Col 4: Follow Us with Square Boxed Social Icons */}
            <div className="lg:col-span-2 space-y-3">
              <h5 className="font-display font-black text-lg uppercase tracking-tight text-white border-b border-neutral-800 pb-1.5">
                Follow EVION
              </h5>
              <div className="flex items-center gap-2">
                {["X", "IN", "IG", "YT"].map((social) => (
                  <div
                    key={social}
                    className="w-9 h-9 border border-neutral-700 bg-neutral-900 text-white flex items-center justify-center font-mono font-bold text-xs hover:border-[#00b4d8] hover:text-[#00b4d8] transition-colors cursor-pointer"
                  >
                    {social}
                  </div>
                ))}
              </div>
              <p className="text-[11px] text-neutral-500 font-mono pt-2">
                ChargeZone EV Partner Network
              </p>
            </div>
          </div>

          {/* Bottom Copyright */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 font-mono">
            <p>© 2026 EVION Power Solutions Pvt. Ltd. &amp; CHARGE+ZONE. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-neutral-300">Privacy Policy</a>
              <span>•</span>
              <a href="#" className="hover:text-neutral-300">Terms of Service</a>
              <span>•</span>
              <a href="#" className="hover:text-neutral-300">KSEB EV Tariffs</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Video Modal Player Popup */}
      {activeStoryVideo && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={() => setActiveStoryVideo(null)}
        >
          <div
            className="relative w-full max-w-3xl bg-neutral-950 border border-neutral-800 rounded-2xl overflow-hidden shadow-2xl p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-neutral-800 mb-4">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#00b4d8] animate-ping" />
                <h4 className="font-display font-black text-xl uppercase tracking-tight text-white">
                  EVION Corridor Story Showcase
                </h4>
              </div>
              <button
                onClick={() => setActiveStoryVideo(null)}
                className="w-8 h-8 rounded-full bg-neutral-800 text-white flex items-center justify-center hover:bg-neutral-700 cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-black flex items-center justify-center">
              <Image
                src="/images/evion-station-family-desktop-wide.jpg"
                alt="Station Video Preview"
                fill
                className="object-cover opacity-60"
              />
              <div className="relative z-10 text-center space-y-3 p-6 bg-black/60 backdrop-blur-sm rounded-xl max-w-md mx-auto border border-white/10">
                <div className="w-16 h-16 rounded-full bg-[#00b4d8] text-white flex items-center justify-center mx-auto shadow-2xl">
                  <Play className="w-8 h-8 fill-current ml-1" />
                </div>
                <h5 className="font-display font-black text-2xl uppercase tracking-tight text-white">
                  Fast Charging in Kerala
                </h5>
                <p className="text-xs text-neutral-300">
                  Hear from EV owners and franchise hosts about 180kW charging and automated weekly returns.
                </p>
                <button
                  onClick={() => {
                    setActiveStoryVideo(null);
                    onOpenFranchiseModal();
                  }}
                  className="px-6 py-2.5 bg-white text-black font-display font-black text-xs uppercase tracking-wider hover:bg-[#00b4d8] hover:text-white transition-colors"
                >
                  SCHEDULE HUB SITE VISIT
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
