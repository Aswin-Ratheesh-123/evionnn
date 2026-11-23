"use client";

import React, { useEffect, useRef, useState } from "react";

interface EvGrowthShowcaseProps {
  onOpenCallbackModal?: () => void;
}

// Smooth Number Counter Hook with easeOutExpo curve
function useCountUp(target: number, duration: number, isStarted: boolean, decimals = 0) {
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!isStarted) return;
    let startTimestamp: number | null = null;
    let frameId: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsed = timestamp - startTimestamp;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutExpo
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = eased * target;
      setVal(current);

      if (progress < 1) {
        frameId = requestAnimationFrame(step);
      } else {
        setVal(target);
      }
    };

    frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, [target, duration, isStarted]);

  return decimals === 0 ? Math.round(val).toLocaleString() : val.toFixed(decimals);
}

// Data for Chart 1: PM E-Drive Capital Infusion Milestones
const INFRA_MILESTONES = [
  { phase: "Phase 1", year: "2024", label: "Grid Sanction", amount: "₹850 Cr", cx: 72, cy: 135, pct: "21%" },
  { phase: "Phase 2", year: "2025", label: "NH-66 Corridors", amount: "₹2,100 Cr", cx: 195, cy: 90, pct: "52%" },
  { phase: "Target", year: "2026", label: "Full Statewide Grid", amount: "₹4,000+ Cr", cx: 325, cy: 38, pct: "100%", isPeak: true },
];

// Data for Chart 2: YoY National EV Growth Bars
const ADOPTION_BARS = [
  { year: "2023", volume: "1.02M", growth: "+6.4%", x: 60, y: 118, w: 42, h: 52, topCenter: { x: 81, y: 118 } },
  { year: "2024", volume: "1.48M", growth: "+9.8%", x: 128, y: 90, w: 42, h: 80, topCenter: { x: 149, y: 90 } },
  { year: "2025", volume: "1.95M", growth: "+13.5%", x: 196, y: 62, w: 42, h: 108, topCenter: { x: 217, y: 62 } },
  { year: "2026E", volume: "2.50M+", growth: "+17.1%", x: 264, y: 28, w: 42, h: 142, topCenter: { x: 285, y: 28 }, isPeak: true },
];

export default function EvGrowthShowcase({ onOpenCallbackModal }: EvGrowthShowcaseProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const card0Ref = useRef<HTMLDivElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);

  const [isInView, setIsInView] = useState(false);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [cardsInView, setCardsInView] = useState([false, false]);
  const [hoveredBarIndex, setHoveredBarIndex] = useState<number | null>(null);

  // Animated Numbers
  const countCr = useCountUp(4000, 1500, cardsInView[0], 0);
  const countYoY = useCountUp(17.1, 1500, cardsInView[1], 1);

  // Header intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Track cards scrolling into view
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
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
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
      {/* Keyframe Styles for Radar Pulse Animations */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes radarPing {
          0% { transform: scale(0.9); opacity: 0.8; }
          70% { transform: scale(2.4); opacity: 0; }
          100% { transform: scale(2.4); opacity: 0; }
        }
      ` }} />

      {/* Ambient Electric Cyan Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_35%,rgba(0,180,216,0.06),transparent)] pointer-events-none" />

      <div className="max-w-[1360px] mx-auto w-full relative z-10 flex flex-col justify-between h-full">
        {/* ========================================================================= */}
        {/* 1. TOP HEADER */}
        {/* ========================================================================= */}
        <div className="pb-4 sm:pb-6 border-b border-neutral-200/80">
          <div className="text-left max-w-4xl mx-auto w-full">
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
                  className={`block transition-all duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)] delay-300 ${
                    isInView ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-full blur-[6px]"
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
        {/* 2. VERTICAL CARDS CONTAINER */}
        {/* ========================================================================= */}
        <div className="flex flex-col gap-8 sm:gap-12 w-full max-w-4xl mx-auto my-8 sm:my-12">
          {/* ------------------------------------------------------------- */}
          {/* CARD 1: ₹4,000+cr PM E-DRIVE INFRASTRUCTURE DEPLOYMENT WAVE */}
          {/* ------------------------------------------------------------- */}
          <div
            ref={card0Ref}
            id="card-pm-edrive"
            className={`w-full rounded-3xl bg-white border border-neutral-200/90 hover:border-[#00b4d8]/60 p-6 sm:p-8 flex flex-col gap-4 sm:gap-5 overflow-hidden group shadow-[0_12px_40px_-10px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_50px_-12px_rgba(0,180,216,0.18)] relative transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
              cardsInView[0]
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-12 sm:translate-y-16 scale-[0.98]"
            }`}
          >
            {/* Ambient Cyan Aura */}
            <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-96 h-44 bg-[radial-gradient(ellipse_at_bottom,rgba(0,180,216,0.14),transparent_70%)] pointer-events-none group-hover:opacity-100 transition-opacity" />

            {/* Stat Value & Title with Count-Up Animation */}
            <div className="relative z-10">
              <div className="flex items-baseline tracking-tight">
                <span
                  suppressHydrationWarning
                  className="text-4xl sm:text-5xl lg:text-[4.25rem] font-bold text-neutral-900 leading-none tabular-nums"
                >
                  ₹{countCr}+
                </span>
                <span className="text-3xl sm:text-4xl lg:text-[3rem] font-semibold text-[#0077b6] ml-3 leading-none font-sans">
                  cr
                </span>
              </div>

              <p className="text-sm sm:text-base lg:text-lg text-neutral-600 font-normal leading-snug mt-2 sm:mt-3 max-w-xl">
                allocated to EV infra under <span className="text-neutral-900 font-semibold underline decoration-[#00b4d8] underline-offset-4 decoration-2">PM E-Drive Scheme</span>
              </p>
            </div>

            {/* Clean White Graphic Container with Capital Deployment Wave */}
            <div className="relative w-full h-48 sm:h-56 overflow-hidden flex items-center justify-center bg-white rounded-2xl border border-neutral-200/90 p-2 sm:p-4 shadow-xs">
              <svg
                viewBox="0 0 380 180"
                className="w-full max-w-[420px] h-full overflow-visible"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                  <defs>
                    {/* Glowing Area Fill Gradient for White Background */}
                    <linearGradient id="waveAreaGradWhite" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#00b4d8" stopOpacity="0.22" />
                      <stop offset="60%" stopColor="#0077b6" stopOpacity="0.05" />
                      <stop offset="100%" stopColor="#ffffff" stopOpacity="0.0" />
                    </linearGradient>

                    {/* Gradient for Line */}
                    <linearGradient id="waveLineGradWhite" x1="0" y1="1" x2="1" y2="0">
                      <stop offset="0%" stopColor="#00b4d8" />
                      <stop offset="45%" stopColor="#0077b6" />
                      <stop offset="100%" stopColor="#0052cc" />
                    </linearGradient>

                    {/* Soft Shadow for Floating Badges */}
                    <filter id="cleanCardShadow" x="-20%" y="-20%" width="140%" height="140%">
                      <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#0f172a" floodOpacity="0.1" />
                    </filter>
                  </defs>

                  {/* Horizontal Guideline Benchmarks */}
                  {[38, 95, 152].map((y) => (
                    <line
                      key={y}
                      x1="25"
                      y1={y}
                      x2="365"
                      y2={y}
                      stroke="#e2e8f0"
                      strokeWidth="1"
                      strokeDasharray="4 4"
                    />
                  ))}

                  {/* Vertical Phase Boundaries */}
                  {[72, 195, 325].map((xPos) => (
                    <line
                      key={xPos}
                      x1={xPos}
                      y1="24"
                      x2={xPos}
                      y2="152"
                      stroke="#f1f5f9"
                      strokeWidth="1"
                      strokeDasharray="3 3"
                    />
                  ))}

                  {/* Area Wave Gradient Fill Under Curve */}
                  <path
                    d="M 45 152 L 45 146 C 110 142, 140 115, 195 90 C 255 64, 280 44, 325 38 L 365 35 L 365 152 Z"
                    fill="url(#waveAreaGradWhite)"
                    style={{
                      opacity: cardsInView[0] ? 1 : 0,
                      transition: "opacity 1000ms ease-out 400ms",
                    }}
                  />

                  {/* Animated Glowing Wave Stroke */}
                  <path
                    d="M 45 146 C 110 142, 140 115, 195 90 C 255 64, 280 44, 325 38 L 365 35"
                    stroke="url(#waveLineGradWhite)"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeDasharray="380"
                    strokeDashoffset={cardsInView[0] ? 0 : 380}
                    style={{
                      transition: "stroke-dashoffset 1400ms cubic-bezier(0.16, 1, 0.3, 1) 250ms",
                    }}
                  />
                </svg>
            </div>
          </div>

          {/* ------------------------------------------------------------- */}
          {/* CARD 2: 17.1% YoY NATIONAL EV REGISTRATION MATRIX */}
          {/* ------------------------------------------------------------- */}
          <div
            ref={card1Ref}
            id="card-yoy-growth"
            className={`w-full rounded-3xl bg-white border border-neutral-200/90 hover:border-[#00b4d8]/60 p-6 sm:p-8 flex flex-col gap-4 sm:gap-5 overflow-hidden group shadow-[0_12px_40px_-10px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_50px_-12px_rgba(0,180,216,0.18)] relative transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
              cardsInView[1]
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-12 sm:translate-y-16 scale-[0.98]"
            }`}
          >
            {/* Ambient Cyan Aura */}
            <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-96 h-44 bg-[radial-gradient(ellipse_at_bottom,rgba(0,180,216,0.14),transparent_70%)] pointer-events-none group-hover:opacity-100 transition-opacity" />

            {/* Stat Value & Title with Count-Up Animation */}
            <div className="relative z-10">
              <div className="flex items-baseline tracking-tight">
                <span
                  suppressHydrationWarning
                  className="text-4xl sm:text-5xl lg:text-[4.25rem] font-bold text-neutral-900 leading-none tabular-nums"
                >
                  {countYoY}%
                </span>
                <span className="text-3xl sm:text-4xl lg:text-[3.25rem] font-bold text-[#0077b6] ml-3 leading-none font-sans">
                  YoY
                </span>
              </div>

              <p className="text-sm sm:text-base lg:text-lg text-neutral-600 font-normal leading-snug mt-2 sm:mt-3 max-w-xl">
                growth in <span className="text-neutral-900 font-semibold underline decoration-[#00b4d8] underline-offset-4 decoration-2">national electric vehicle</span> registrations
              </p>
            </div>

            {/* Clean White Graphic Container with Growth Bars & Spline */}
            <div className="relative w-full h-48 sm:h-56 overflow-hidden flex items-center justify-center bg-white rounded-2xl border border-neutral-200/90 p-2 sm:p-4 shadow-xs">
              <svg
                viewBox="0 0 360 180"
                className="w-full max-w-[390px] h-full overflow-visible"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                  <defs>
                    {/* Glowing Bar Gradients for Light Mode */}
                    <linearGradient id="lightBar1" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#38bdf8" />
                      <stop offset="100%" stopColor="#0284c7" />
                    </linearGradient>
                    <linearGradient id="lightBar2" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#00b4d8" />
                      <stop offset="100%" stopColor="#0077b6" />
                    </linearGradient>
                    <linearGradient id="lightBar3" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#0077b6" />
                      <stop offset="100%" stopColor="#0052cc" />
                    </linearGradient>
                    <linearGradient id="lightBar4" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#0052cc" />
                      <stop offset="100%" stopColor="#003399" />
                    </linearGradient>

                    {/* Soft Shadow Filter */}
                    <filter id="cleanBarShadow" x="-20%" y="-20%" width="140%" height="140%">
                      <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#0052cc" floodOpacity="0.12" />
                    </filter>
                  </defs>

                  {/* Horizontal Grid Guide Lines */}
                  {[40, 85, 130, 170].map((yVal) => (
                    <line
                      key={yVal}
                      x1="45"
                      y1={yVal}
                      x2="335"
                      y2={yVal}
                      stroke="#e2e8f0"
                      strokeWidth="1"
                      strokeDasharray="4 4"
                    />
                  ))}

                  {/* 4 Column Bars */}
                  {ADOPTION_BARS.map((b, i) => {
                    const isHovered = hoveredBarIndex === i;
                    const gradId = i === 0 ? "lightBar1" : i === 1 ? "lightBar2" : i === 2 ? "lightBar3" : "lightBar4";
                    return (
                      <g
                        key={b.year}
                        className="cursor-pointer"
                        onMouseEnter={() => setHoveredBarIndex(i)}
                        onMouseLeave={() => setHoveredBarIndex(null)}
                      >
                        {/* Column Bar with Staggered Rise */}
                        <rect
                          x={b.x}
                          y={b.y}
                          width={b.w}
                          height={b.h}
                          rx="6"
                          fill={`url(#${gradId})`}
                          stroke={isHovered ? "#0052cc" : b.isPeak ? "#0077b6" : "rgba(0,0,0,0.06)"}
                          strokeWidth={isHovered ? "2" : "1"}
                          filter="url(#cleanBarShadow)"
                          style={{
                            transformOrigin: `${b.x + b.w / 2}px 170px`,
                            transform: cardsInView[1]
                              ? isHovered
                                ? "scaleY(1.04) translateY(-3px)"
                                : "scaleY(1)"
                              : "scaleY(0)",
                            opacity: cardsInView[1] ? 1 : 0,
                            transition: `transform 850ms cubic-bezier(0.16, 1, 0.3, 1) ${i * 120 + 300}ms, opacity 400ms ease ${i * 120 + 300}ms`,
                          }}
                        />

                        {/* Top Cap Light Highlight */}
                        <rect
                          x={b.x + 3}
                          y={b.y + 2}
                          width={b.w - 6}
                          height="4"
                          rx="2"
                          fill="#ffffff"
                          opacity={b.isPeak ? "0.85" : "0.5"}
                          style={{
                            transformOrigin: `${b.x + b.w / 2}px 170px`,
                            transform: cardsInView[1] ? "scaleY(1)" : "scaleY(0)",
                            transition: `transform 850ms cubic-bezier(0.16, 1, 0.3, 1) ${i * 120 + 300}ms`,
                          }}
                        />

                        {/* Floating Growth Badge on top of Bar */}
                        <g
                          style={{
                            transformOrigin: `${b.topCenter.x}px ${b.topCenter.y - 12}px`,
                            opacity: cardsInView[1] ? 1 : 0,
                            transform: cardsInView[1]
                              ? isHovered
                                ? "scale(1.1) translateY(-4px)"
                                : "scale(1) translateY(0)"
                              : "scale(0.6) translateY(10px)",
                            transition: `all 450ms cubic-bezier(0.34, 1.56, 0.64, 1) ${i * 120 + 750}ms`,
                          }}
                        >
                          <rect
                            x={b.topCenter.x - (b.isPeak ? 28 : 22)}
                            y={b.topCenter.y - 20}
                            width={b.isPeak ? 56 : 44}
                            height="16"
                            rx="4"
                            fill={b.isPeak ? "#0052cc" : "#ffffff"}
                            stroke={b.isPeak ? "#00b4d8" : "#cbd5e1"}
                            strokeWidth="1.2"
                            filter="url(#cleanBarShadow)"
                          />
                          <text
                            x={b.topCenter.x}
                            y={b.topCenter.y - 9}
                            textAnchor="middle"
                            fontSize={b.isPeak ? "8" : "7"}
                            fontWeight="800"
                            fill={b.isPeak ? "#ffffff" : "#0f172a"}
                            fontFamily="monospace"
                          >
                            {b.growth}
                          </text>
                        </g>

                        {/* Year Label */}
                        <text
                          x={b.topCenter.x}
                          y="180"
                          textAnchor="middle"
                          fontSize="8.5"
                          fontWeight="700"
                          fill={b.isPeak ? "#0052cc" : isHovered ? "#0077b6" : "#64748b"}
                          fontFamily="monospace"
                        >
                          {b.year}
                        </text>
                      </g>
                    );
                  })}
                </svg>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 3. BOTTOM GUIDANCE & BULLETS */}
        {/* ========================================================================= */}
        <div className="pt-4 sm:pt-6 border-t border-neutral-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 max-w-4xl mx-auto w-full">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#0077b6] animate-pulse" />
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
