"use client";

import React, { useEffect, useRef, useState } from "react";

interface EvGrowthShowcaseProps {
  onOpenCallbackModal?: () => void;
}

export default function EvGrowthShowcase({ onOpenCallbackModal }: EvGrowthShowcaseProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const card0Ref = useRef<HTMLDivElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);

  const [isInView, setIsInView] = useState(false);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [cardsInView, setCardsInView] = useState([false, false]);

  // IntersectionObserver to trigger initial header entrance animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // IntersectionObserver to track which card is active as user scrolls through vertically & trigger slide-in
  useEffect(() => {
    const cardRefs = [card0Ref, card1Ref];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = cardRefs.findIndex((r) => r.current === entry.target);
            if (idx !== -1) {
              setCardsInView((prev) => {
                if (prev[idx]) return prev;
                const next = [...prev];
                next[idx] = true;
                return next;
              });
              setActiveCardIndex(idx);
            }
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    cardRefs.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="ev-growth"
      className="bg-white text-neutral-900 pt-8 sm:pt-14 pb-12 sm:pb-20 px-3 sm:px-6 lg:px-8 select-none relative overflow-hidden flex flex-col justify-between w-full"
    >
      {/* Ambient Radial Electric Cyan Aura */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_35%,rgba(0,180,216,0.06),transparent)] pointer-events-none" />

      <div className="max-w-[1360px] mx-auto w-full relative z-10 flex flex-col justify-between h-full">
        {/* ========================================================================= */}
        {/* 1. TOP HEADER */}
        {/* ========================================================================= */}
        <div className="pb-4 sm:pb-6 border-b border-neutral-200/80">
          <div className="text-left max-w-4xl mx-auto w-full">
            {/* Kinetic Masked Animated Headline with Optical Deblur */}
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight max-w-2xl leading-[1.15] text-left">
              <span className="block overflow-hidden py-0.5">
                <span
                  className={`block text-neutral-900 transition-all duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)] delay-150 ${
                    isInView ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-full blur-[6px]"
                  }`}
                >
                  <span className="text-[#0077b6] font-extrabold drop-shadow-[0_0_24px_rgba(0,180,216,0.25)]">Record Investment</span> &amp;
                </span>
              </span>

              <span className="block overflow-hidden py-0.5 mt-0.5 sm:mt-1">
                <span
                  className={`block transition-all duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)] delay-300 ${isInView ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-full blur-[6px]"
                    }`}
                >
                  <span
                    className={
                      isInView
                        ? "inline-block animate-green-sweep-dark"
                        : "text-neutral-900"
                    }
                  >
                    Explosive EV Growth.
                  </span>
                </span>
              </span>
            </h2>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2. VERTICAL CARDS CONTAINER (ONE BELOW THE OTHER NOT SIDEWAYS) */}
        {/* ========================================================================= */}
        <div className="flex flex-col gap-8 sm:gap-12 w-full max-w-4xl mx-auto my-8 sm:my-12">
          {/* ------------------------------------------------------------- */}
          {/* CARD 1: ₹4,000+cr PM E-DRIVE SCHEME ALLOCATION */}
          {/* ------------------------------------------------------------- */}
          <div
            ref={card0Ref}
            id="card-pm-edrive"
            className={`w-full rounded-3xl bg-white border border-neutral-200/90 hover:border-[#00b4d8]/60 p-6 sm:p-9 lg:p-10 flex flex-col justify-between min-h-[420px] sm:min-h-[460px] overflow-hidden group shadow-[0_12px_40px_-10px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_50px_-12px_rgba(0,180,216,0.18)] relative transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
              cardsInView[0]
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-12 sm:translate-y-16 scale-[0.98]"
            }`}
          >
            {/* Ambient Bottom Blue-Cyan Glow */}
            <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-96 h-44 bg-[radial-gradient(ellipse_at_bottom,rgba(0,180,216,0.18),transparent_70%)] pointer-events-none group-hover:opacity-100 transition-opacity" />

            {/* Stat Value & Title */}
            <div className="relative z-10">
              <div className="flex items-baseline tracking-tight">
                <span className="text-4xl sm:text-5xl lg:text-[4.25rem] font-bold text-neutral-900 leading-none">
                  ₹4,000+
                </span>
                <span className="text-3xl sm:text-4xl lg:text-[3rem] font-semibold text-[#0077b6] ml-3 leading-none font-sans">
                  cr
                </span>
              </div>

              <p className="text-sm sm:text-base lg:text-lg text-neutral-600 font-normal leading-snug mt-3 sm:mt-4 max-w-xl">
                allocated to EV infra under <span className="text-neutral-900 font-semibold underline decoration-[#00b4d8] underline-offset-4 decoration-2">PM E-Drive Scheme</span>
              </p>
            </div>

            {/* Bottom Graphic: Exponential Growth Arrow Infographic with Pillars (Matching Uploaded Reference) */}
            <div className="relative w-full h-52 sm:h-60 md:h-64 mt-6 overflow-hidden flex items-end justify-center bg-gradient-to-b from-slate-50/70 to-slate-100/50 rounded-2xl border border-slate-100/90 p-2 sm:p-4">
              <svg
                viewBox="0 0 360 212"
                className="w-full max-w-[390px] h-full relative z-10 overflow-visible"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  {/* Soft Drop Shadow for the Curving Arrow Ribbon */}
                  <filter id="infographicArrowShadow" x="-20%" y="-20%" width="150%" height="150%">
                    <feDropShadow dx="0" dy="6" stdDeviation="6" floodColor="#0052cc" floodOpacity="0.28" />
                  </filter>

                  {/* Pillar Soft Drop Shadow */}
                  <filter id="pillarSoftShadow" x="-30%" y="-10%" width="160%" height="130%">
                    <feDropShadow dx="-2" dy="3" stdDeviation="3" floodColor="#0f172a" floodOpacity="0.07" />
                  </filter>

                  {/* Gradient for the Blue Core Ribbon */}
                  <linearGradient id="infographicBlueRibbon" x1="0" y1="1" x2="1" y2="0">
                    <stop offset="0%" stopColor="#0052cc" />
                    <stop offset="45%" stopColor="#0077b6" />
                    <stop offset="100%" stopColor="#00b4d8" />
                  </linearGradient>
                </defs>

                {/* 1. Horizontal Blue Baseline Platform */}
                <rect
                  x="16"
                  y="194"
                  width="328"
                  height="6"
                  rx="3"
                  fill="#0077b6"
                />

                {/* 2. Seven Vertical Rising Pillars (Standing on the Baseline with DATA 01 - 07 labels) */}
                {/* Pillar 1 */}
                <g className="transition-transform duration-300 origin-bottom group-hover:scale-y-[1.02]">
                  <rect
                    x="46"
                    y="132"
                    width="28"
                    height="62"
                    rx="3"
                    fill="#ffffff"
                    filter="url(#pillarSoftShadow)"
                    stroke="#e2e8f0"
                    strokeWidth="0.75"
                  />
                  <rect x="46" y="132" width="3.5" height="62" rx="1.5" fill="#cbd5e1" opacity="0.35" />
                  <text x="60" y="176" textAnchor="middle" fontSize="6.5" fontWeight="700" fill="#64748b" letterSpacing="0.5" fontFamily="system-ui, sans-serif">DATA</text>
                  <text x="60" y="189" textAnchor="middle" fontSize="10.5" fontWeight="800" fill="#0f172a" fontFamily="system-ui, sans-serif">01</text>
                </g>

                {/* Pillar 2 */}
                <g className="transition-transform duration-300 origin-bottom group-hover:scale-y-[1.02]">
                  <rect
                    x="86"
                    y="124"
                    width="28"
                    height="70"
                    rx="3"
                    fill="#ffffff"
                    filter="url(#pillarSoftShadow)"
                    stroke="#e2e8f0"
                    strokeWidth="0.75"
                  />
                  <rect x="86" y="124" width="3.5" height="70" rx="1.5" fill="#cbd5e1" opacity="0.35" />
                  <text x="100" y="176" textAnchor="middle" fontSize="6.5" fontWeight="700" fill="#64748b" letterSpacing="0.5" fontFamily="system-ui, sans-serif">DATA</text>
                  <text x="100" y="189" textAnchor="middle" fontSize="10.5" fontWeight="800" fill="#0f172a" fontFamily="system-ui, sans-serif">02</text>
                </g>

                {/* Pillar 3 */}
                <g className="transition-transform duration-300 origin-bottom group-hover:scale-y-[1.02]">
                  <rect
                    x="126"
                    y="112"
                    width="28"
                    height="82"
                    rx="3"
                    fill="#ffffff"
                    filter="url(#pillarSoftShadow)"
                    stroke="#e2e8f0"
                    strokeWidth="0.75"
                  />
                  <rect x="126" y="112" width="3.5" height="82" rx="1.5" fill="#cbd5e1" opacity="0.35" />
                  <text x="140" y="176" textAnchor="middle" fontSize="6.5" fontWeight="700" fill="#64748b" letterSpacing="0.5" fontFamily="system-ui, sans-serif">DATA</text>
                  <text x="140" y="189" textAnchor="middle" fontSize="10.5" fontWeight="800" fill="#0f172a" fontFamily="system-ui, sans-serif">03</text>
                </g>

                {/* Pillar 4 */}
                <g className="transition-transform duration-300 origin-bottom group-hover:scale-y-[1.02]">
                  <rect
                    x="166"
                    y="94"
                    width="28"
                    height="100"
                    rx="3"
                    fill="#ffffff"
                    filter="url(#pillarSoftShadow)"
                    stroke="#e2e8f0"
                    strokeWidth="0.75"
                  />
                  <rect x="166" y="94" width="3.5" height="100" rx="1.5" fill="#cbd5e1" opacity="0.35" />
                  <text x="180" y="176" textAnchor="middle" fontSize="6.5" fontWeight="700" fill="#64748b" letterSpacing="0.5" fontFamily="system-ui, sans-serif">DATA</text>
                  <text x="180" y="189" textAnchor="middle" fontSize="10.5" fontWeight="800" fill="#0f172a" fontFamily="system-ui, sans-serif">04</text>
                </g>

                {/* Pillar 5 */}
                <g className="transition-transform duration-300 origin-bottom group-hover:scale-y-[1.02]">
                  <rect
                    x="206"
                    y="72"
                    width="28"
                    height="122"
                    rx="3"
                    fill="#ffffff"
                    filter="url(#pillarSoftShadow)"
                    stroke="#e2e8f0"
                    strokeWidth="0.75"
                  />
                  <rect x="206" y="72" width="3.5" height="122" rx="1.5" fill="#cbd5e1" opacity="0.35" />
                  <text x="220" y="176" textAnchor="middle" fontSize="6.5" fontWeight="700" fill="#64748b" letterSpacing="0.5" fontFamily="system-ui, sans-serif">DATA</text>
                  <text x="220" y="189" textAnchor="middle" fontSize="10.5" fontWeight="800" fill="#0f172a" fontFamily="system-ui, sans-serif">05</text>
                </g>

                {/* Pillar 6 */}
                <g className="transition-transform duration-300 origin-bottom group-hover:scale-y-[1.02]">
                  <rect
                    x="246"
                    y="44"
                    width="28"
                    height="150"
                    rx="3"
                    fill="#ffffff"
                    filter="url(#pillarSoftShadow)"
                    stroke="#e2e8f0"
                    strokeWidth="0.75"
                  />
                  <rect x="246" y="44" width="3.5" height="150" rx="1.5" fill="#cbd5e1" opacity="0.35" />
                  <text x="260" y="176" textAnchor="middle" fontSize="6.5" fontWeight="700" fill="#64748b" letterSpacing="0.5" fontFamily="system-ui, sans-serif">DATA</text>
                  <text x="260" y="189" textAnchor="middle" fontSize="10.5" fontWeight="800" fill="#0f172a" fontFamily="system-ui, sans-serif">06</text>
                </g>

                {/* Pillar 7 */}
                <g className="transition-transform duration-300 origin-bottom group-hover:scale-y-[1.02]">
                  <rect
                    x="286"
                    y="14"
                    width="28"
                    height="180"
                    rx="3"
                    fill="#ffffff"
                    filter="url(#pillarSoftShadow)"
                    stroke="#e2e8f0"
                    strokeWidth="0.75"
                  />
                  <rect x="286" y="14" width="3.5" height="180" rx="1.5" fill="#cbd5e1" opacity="0.35" />
                  <text x="300" y="176" textAnchor="middle" fontSize="6.5" fontWeight="700" fill="#64748b" letterSpacing="0.5" fontFamily="system-ui, sans-serif">DATA</text>
                  <text x="300" y="189" textAnchor="middle" fontSize="10.5" fontWeight="800" fill="#0f172a" fontFamily="system-ui, sans-serif">07</text>
                </g>

                {/* 3. Exponential Upward-Curving Arrow Ribbon (Rendered on top of pillars) */}
                {/* Outer White Layer with Drop Shadow */}
                <path
                  d="M 16 146 C 88 146, 172 132, 238 84 C 274 58, 298 38, 314 22"
                  stroke="#ffffff"
                  strokeWidth="26"
                  strokeLinecap="round"
                  filter="url(#infographicArrowShadow)"
                />

                {/* Inner Electric Blue Core Stripe */}
                <path
                  d="M 16 146 C 88 146, 172 132, 238 84 C 274 58, 298 38, 314 22"
                  stroke="url(#infographicBlueRibbon)"
                  strokeWidth="13"
                  strokeLinecap="round"
                />

                {/* 4. Large Diagonal Arrowhead pointing Up-Right (↗) */}
                <g className="transition-transform duration-300 origin-center group-hover:translate-x-1 group-hover:-translate-y-1">
                  {/* Outer White Arrowhead with Shadow */}
                  <polygon
                    points="292,16 344,6 332,54 316,36 306,26"
                    fill="#ffffff"
                    stroke="#ffffff"
                    strokeWidth="8"
                    strokeLinejoin="round"
                    filter="url(#infographicArrowShadow)"
                  />
                  {/* Inner Blue Arrowhead Fill */}
                  <polygon
                    points="292,16 344,6 332,54 316,36 306,26"
                    fill="url(#infographicBlueRibbon)"
                    stroke="url(#infographicBlueRibbon)"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
            </div>
          </div>

          {/* ------------------------------------------------------------- */}
          {/* CARD 2: 17.1% YoY GROWTH BAR CHART */}
          {/* ------------------------------------------------------------- */}
          <div
            ref={card1Ref}
            id="card-yoy-growth"
            className={`w-full rounded-3xl bg-white border border-neutral-200/90 hover:border-[#00b4d8]/60 p-6 sm:p-9 lg:p-10 flex flex-col justify-between min-h-[420px] sm:min-h-[460px] overflow-hidden group shadow-[0_12px_40px_-10px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_50px_-12px_rgba(0,180,216,0.18)] relative transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
              cardsInView[1]
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-12 sm:translate-y-16 scale-[0.98]"
            }`}
          >
            {/* Ambient Bottom Blue-Cyan Glow */}
            <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-96 h-44 bg-[radial-gradient(ellipse_at_bottom,rgba(0,180,216,0.18),transparent_70%)] pointer-events-none group-hover:opacity-100 transition-opacity" />

            {/* Stat Value & Title */}
            <div className="relative z-10">
              <div className="flex items-baseline tracking-tight">
                <span className="text-4xl sm:text-5xl lg:text-[4.25rem] font-bold text-neutral-900 leading-none">
                  17.1%
                </span>
                <span className="text-3xl sm:text-4xl lg:text-[3.25rem] font-bold text-[#0077b6] ml-3 leading-none font-sans">
                  YoY
                </span>
              </div>

              <p className="text-sm sm:text-base lg:text-lg text-neutral-600 font-normal leading-snug mt-3 sm:mt-4 max-w-xl">
                growth in <span className="text-neutral-900 font-semibold underline decoration-[#00b4d8] underline-offset-4 decoration-2">national electric vehicle</span> registrations
              </p>
            </div>

            {/* Bottom Graphic: Rising YoY Growth Bar Chart (2nd type of design) */}
            <div className="relative w-full h-52 sm:h-60 md:h-64 mt-6 overflow-hidden flex items-end justify-center bg-gradient-to-b from-slate-50/70 to-slate-100/50 rounded-2xl border border-slate-100/90 p-2 sm:p-4">
              <svg
                viewBox="0 0 320 200"
                className="w-full max-w-[340px] h-full relative z-10 overflow-visible"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* L-Shaped Coordinate Axes */}
                {/* Y-Axis Line */}
                <line
                  x1="46"
                  y1="168"
                  x2="46"
                  y2="28"
                  stroke="#1e293b"
                  strokeWidth="5.5"
                  strokeLinecap="round"
                />
                {/* Y-Axis Up Arrowhead */}
                <polygon
                  points="46,14 37,32 55,32"
                  fill="#1e293b"
                />

                {/* X-Axis Line */}
                <line
                  x1="46"
                  y1="168"
                  x2="286"
                  y2="168"
                  stroke="#1e293b"
                  strokeWidth="5.5"
                  strokeLinecap="round"
                />
                {/* X-Axis Right Arrowhead */}
                <polygon
                  points="300,168 282,159 282,177"
                  fill="#1e293b"
                />

                {/* 4 Rising Vertical Bars (Site Theme: Cyan to Cobalt Blue Progression) */}
                {/* Bar 1: Light Electric Sky Cyan (Shortest) */}
                <rect
                  x="74"
                  y="114"
                  width="38"
                  height="54"
                  rx="4"
                  fill="#38bdf8"
                  className="transition-transform duration-300 origin-bottom group-hover:scale-y-105"
                />

                {/* Bar 2: Signature Evion Turquoise Cyan */}
                <rect
                  x="126"
                  y="84"
                  width="38"
                  height="84"
                  rx="4"
                  fill="#00b4d8"
                  className="transition-transform duration-300 origin-bottom group-hover:scale-y-105"
                />

                {/* Bar 3: Electric Azure Blue */}
                <rect
                  x="178"
                  y="54"
                  width="38"
                  height="114"
                  rx="4"
                  fill="#0077b6"
                  className="transition-transform duration-300 origin-bottom group-hover:scale-y-105"
                />

                {/* Bar 4: Deep Cobalt Sapphire Blue (Tallest) */}
                <rect
                  x="230"
                  y="24"
                  width="38"
                  height="144"
                  rx="4"
                  fill="#0047ba"
                  className="transition-transform duration-300 origin-bottom group-hover:scale-y-105"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 3. BOTTOM GUIDANCE & BULLETS */}
        {/* ========================================================================= */}
        <div className="pt-4 sm:pt-6 border-t border-neutral-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 max-w-4xl mx-auto w-full">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#0077b6]" />
            <span className="font-semibold text-neutral-800">
              {activeCardIndex === 0 && "Central Subsidy → ₹4,000+ Cr Dedicated EV Infra Allocation"}
              {activeCardIndex === 1 && "Rapid Market Adoption → 17.1% YoY Commercial Fleet & Passenger Expansion"}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[11px] text-neutral-500 font-mono">2026 EV Infrastructure Outlook</span>
          </div>
        </div>
      </div>
    </section>
  );
}
