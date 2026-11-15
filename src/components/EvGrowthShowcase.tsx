"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { TrendingUp, Zap, ArrowUpRight, CheckCircle2, Sparkles } from "lucide-react";

interface EvGrowthShowcaseProps {
  onOpenCallbackModal?: () => void;
}

export default function EvGrowthShowcase({ onOpenCallbackModal }: EvGrowthShowcaseProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const [isInView, setIsInView] = useState(false);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

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

  // Compute smooth horizontal translation based on scroll position within pinned wrapper
  const updatePosition = useCallback(() => {
    const wrapper =
      document.getElementById("ev-growth-wrapper") ||
      sectionRef.current?.parentElement?.parentElement;
    if (!wrapper || !containerRef.current || !trackRef.current) return;

    const rect = wrapper.getBoundingClientRect();
    // The horizontal card progression completes in 0.75 * innerHeight
    // After this finishes, Layer 5 (ParkingEvReady) enters from the bottom and overlays Layer 4!
    const animDistance = window.innerHeight * 0.75;
    if (animDistance <= 0) return;

    // Normalized progress 0.0 to 1.0 during active card progression phase
    const scrolled = -rect.top;
    const p = Math.min(1, Math.max(0, scrolled / animDistance));
    setScrollProgress(p);

    // Discrete active card determination (no halfway resting states - full container only)
    const newIndex = p >= 0.45 ? 1 : 0;
    setActiveCardIndex(newIndex);

    // Dynamic card centering calculation
    const cards = Array.from(trackRef.current.children) as HTMLElement[];
    if (cards.length < 2) return;

    const containerWidth = containerRef.current.clientWidth;
    const cardWidth = cards[0].offsetWidth;
    // With trackRef position: relative, offsetLeft is rock-solid and independent of transforms
    const stride = cards[1].offsetLeft - cards[0].offsetLeft;
    const startX = (containerWidth - cardWidth) / 2;

    // Discrete full container snap: snaps cleanly to Card 0 or 1 without halfway resting positions
    const currentX = startX - newIndex * stride;

    // Direct hardware-accelerated transform with smooth CSS transition
    trackRef.current.style.transform = `translate3d(${currentX}px, 0, 0)`;
  }, []);

  // Listen to window scroll & resize events
  useEffect(() => {
    let rafId: number | null = null;
    const onScroll = () => {
      if (rafId !== null) return;
      rafId = requestAnimationFrame(() => {
        updatePosition();
        rafId = null;
      });
    };

    const onResize = () => {
      updatePosition();
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    // Run initially & shortly after mount
    updatePosition();
    const timer = setTimeout(updatePosition, 50);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      if (rafId !== null) cancelAnimationFrame(rafId);
      clearTimeout(timer);
    };
  }, [updatePosition]);

  // Direct click on pill or card to scroll smoothly to that item
  const scrollToCard = (index: number) => {
    const wrapper =
      document.getElementById("ev-growth-wrapper") ||
      sectionRef.current?.parentElement?.parentElement;
    if (!wrapper) return;

    const rect = wrapper.getBoundingClientRect();
    const animDistance = window.innerHeight * 0.75;
    const currentScrollY = window.scrollY;
    const wrapperStart = currentScrollY + rect.top;

    const targetP = index === 1 ? 1.0 : 0.0;
    const targetY = wrapperStart + targetP * animDistance;
    window.scrollTo({
      top: targetY,
      behavior: "smooth",
    });
  };

  const steps = [
    { id: 0, label: "PM E-Drive Scheme" },
    { id: 1, label: "YoY Market Growth" },
  ];

  return (
    <section
      ref={sectionRef}
      id="ev-growth"
      className="bg-[#121212] text-white pt-6 sm:pt-10 pb-8 sm:pb-12 px-3 sm:px-6 lg:px-8 select-none relative overflow-hidden flex flex-col justify-between h-full min-h-[100dvh]"
    >
      {/* Ambient Radial Electric Green Aura (Matching Site Theme) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_35%,rgba(0,210,106,0.09),transparent)] pointer-events-none" />

      <div className="max-w-[1360px] mx-auto w-full relative z-10 flex flex-col justify-between h-full">
        {/* ========================================================================= */}
        {/* 1. TOP HEADER & STEP INDICATOR */}
        {/* ========================================================================= */}
        <div className="pb-3 sm:pb-6 border-b border-white/10 flex flex-col md:flex-row items-start md:items-end justify-between gap-4">
          <div className="text-left w-full md:w-auto">
            {/* Staggered Animated Headline (Strictly Left-Aligned) */}
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight max-w-2xl leading-[1.15] text-left">
              <span
                className={`block text-white/90 transition-all duration-700 ease-out delay-100 ${
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              >
                Record Investment &amp;
              </span>

              <span
                className={`block mt-0.5 sm:mt-1 transition-all duration-700 ease-out delay-200 ${
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              >
                <span
                  className={
                    isInView
                      ? "inline-block animate-green-sweep-stop"
                      : "text-white"
                  }
                >
                  Explosive EV Growth.
                </span>
              </span>
            </h2>
          </div>

          {/* Right Header Navigation: Pills & Progress Bar */}
          <div className="flex flex-col items-center justify-center gap-2.5 w-full md:w-auto">
            {/* Step Pills */}
            <div className="inline-flex items-center justify-center gap-1.5 sm:gap-2 p-1 rounded-full bg-white/[0.05] border border-white/10 backdrop-blur-md mx-auto">
              {steps.map((step) => {
                const isActive = activeCardIndex === step.id;
                return (
                  <button
                    key={step.id}
                    onClick={() => scrollToCard(step.id)}
                    className={`px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-bold tracking-wide transition-all duration-300 cursor-pointer flex items-center gap-1.5 ${
                      isActive
                        ? "bg-[#00d26a] text-black shadow-[0_0_16px_rgba(0,210,106,0.45)] scale-105"
                        : "text-neutral-400 hover:text-white hover:bg-white/[0.06]"
                    }`}
                  >
                    <span>{step.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Micro Progress Bar */}
            <div className="flex items-center justify-center w-full">
              <div className="w-24 sm:w-32 h-1 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#00d26a] to-[#34d399] transition-all duration-150 rounded-full"
                  style={{ width: `${Math.round(scrollProgress * 100)}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2. PINNED HORIZONTAL CAROUSEL WINDOW (SCROLL-DRIVEN LEFT TO RIGHT) */}
        {/* ========================================================================= */}
        <div ref={containerRef} className="relative w-full overflow-hidden my-auto py-2 sm:py-6">
          {/* Subtle Left & Right Edge Vignette Masks for Cinema Transition */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 sm:w-20 bg-gradient-to-r from-[#121212] to-transparent z-20" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 sm:w-20 bg-gradient-to-l from-[#121212] to-transparent z-20" />

          {/* Sliding Track Translated Horizontally with Hardware Acceleration & Smooth Snapping */}
          <div
            ref={trackRef}
            className="relative flex items-center gap-5 sm:gap-8 lg:gap-12 w-max will-change-transform transition-transform duration-500 ease-out"
          >
            {/* ------------------------------------------------------------- */}
            {/* CARD 1: ₹4,000+cr PM E-DRIVE SCHEME ALLOCATION */}
            {/* ------------------------------------------------------------- */}
            <div
              onClick={() => scrollToCard(0)}
              className={`w-[85vw] max-w-[360px] sm:w-[440px] lg:w-[480px] shrink-0 relative rounded-3xl bg-neutral-900/95 border p-6 sm:p-9 flex flex-col justify-between min-h-[420px] sm:min-h-[480px] overflow-hidden group cursor-pointer transition-all duration-500 ease-out ${
                activeCardIndex === 0
                  ? "border-[#00d26a] ring-2 ring-[#00d26a]/30 shadow-[0_0_50px_rgba(0,210,106,0.25)] scale-[1.02] opacity-100"
                  : "border-white/10 opacity-20 sm:opacity-40 scale-95 hover:opacity-75 hover:border-white/25"
              }`}
            >
              {/* Ambient Bottom Green Glow */}
              <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-72 h-36 bg-[radial-gradient(ellipse_at_bottom,rgba(0,210,106,0.3),transparent_70%)] pointer-events-none group-hover:opacity-100 transition-opacity" />

              {/* Stat Value & Title */}
              <div className="relative z-10">
                <div className="flex items-baseline tracking-tight">
                  <span className="text-4xl sm:text-5xl lg:text-[3.75rem] font-bold text-white leading-none">
                    ₹4,000+
                  </span>
                  <span className="text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold text-[#00d26a] ml-2 leading-none font-sans">
                    cr
                  </span>
                </div>

                <p className="text-sm sm:text-base lg:text-lg text-neutral-300 font-normal leading-snug mt-3 sm:mt-4 max-w-[320px]">
                  allocated to EV infra under PM E-Drive Scheme
                </p>
              </div>

              {/* Bottom Graphic: Indian Rupee Symbol + Rising Zigzag Arrow */}
              <div className="relative w-full h-44 sm:h-52 md:h-56 mt-4 overflow-hidden flex items-end">
                {/* Vertical Chart Gridlines */}
                <div className="absolute inset-0 grid grid-cols-5 pointer-events-none">
                  <div className="border-r border-white/[0.06]" />
                  <div className="border-r border-white/[0.06]" />
                  <div className="border-r border-white/[0.06]" />
                  <div className="border-r border-white/[0.06]" />
                  <div className="border-r border-transparent" />
                </div>

                {/* SVG Graphic */}
                <svg
                  viewBox="0 0 380 200"
                  className="w-full h-full relative z-10 overflow-visible"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Indian Rupee ₹ Symbol */}
                  <g
                    transform="translate(14, 75)"
                    className="group-hover:scale-105 transition-transform duration-500 origin-bottom-left"
                  >
                    <rect x="0" y="0" width="56" height="8.5" rx="2" fill="#00d26a" />
                    <rect x="0" y="17" width="46" height="8.5" rx="2" fill="#00d26a" />
                    <rect x="11" y="0" width="8.5" height="52" rx="1.5" fill="#00d26a" />
                    <path
                      d="M 11 0 L 11 39 C 29 39 39 29 39 19.5 C 39 9 29 0 11 0 Z"
                      fill="none"
                      stroke="#00d26a"
                      strokeWidth="8.5"
                    />
                    <path
                      d="M 21 34 L 54 86"
                      stroke="#00d26a"
                      strokeWidth="9.5"
                      strokeLinecap="round"
                    />
                  </g>

                  {/* Rising Zigzag Arrow */}
                  <path
                    d="M 52 175 L 90 142 L 130 172 L 182 122 L 225 155 L 325 45"
                    stroke="#00d26a"
                    strokeWidth="7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="group-hover:stroke-[#00ff88] transition-colors duration-300 drop-shadow-[0_0_12px_rgba(0,210,106,0.35)]"
                  />

                  {/* Arrowhead pointing Up-Right */}
                  <path
                    d="M 282 43 L 332 38 L 327 88"
                    stroke="#00d26a"
                    strokeWidth="7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    className="group-hover:stroke-[#00ff88] transition-colors duration-300 drop-shadow-[0_0_12px_rgba(0,210,106,0.35)]"
                  />
                </svg>
              </div>
            </div>

            {/* ------------------------------------------------------------- */}
            {/* CARD 2: 17.1% YoY GROWTH AREA CHART */}
            {/* ------------------------------------------------------------- */}
            <div
              onClick={() => scrollToCard(1)}
              className={`w-[85vw] max-w-[360px] sm:w-[440px] lg:w-[480px] shrink-0 relative rounded-3xl bg-neutral-900/95 border p-6 sm:p-9 flex flex-col justify-between min-h-[420px] sm:min-h-[480px] overflow-hidden group cursor-pointer transition-all duration-500 ease-out ${
                activeCardIndex === 1
                  ? "border-[#00d26a] ring-2 ring-[#00d26a]/30 shadow-[0_0_50px_rgba(0,210,106,0.25)] scale-[1.02] opacity-100"
                  : "border-white/10 opacity-20 sm:opacity-40 scale-95 hover:opacity-75 hover:border-white/25"
              }`}
            >
              {/* Ambient Bottom Green Glow */}
              <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-72 h-36 bg-[radial-gradient(ellipse_at_bottom,rgba(0,210,106,0.3),transparent_70%)] pointer-events-none group-hover:opacity-100 transition-opacity" />

              {/* Stat Value & Title */}
              <div className="relative z-10">
                <div className="flex items-baseline tracking-tight">
                  <span className="text-4xl sm:text-5xl lg:text-[3.75rem] font-bold text-white leading-none">
                    17.1%
                  </span>
                  <span className="text-3xl sm:text-4xl lg:text-[3rem] font-bold text-[#00d26a] ml-3 leading-none font-sans">
                    YoY
                  </span>
                </div>

                <p className="text-sm sm:text-base lg:text-lg text-neutral-300 font-normal leading-snug mt-3 sm:mt-4">
                  growth in national electric vehicle registrations
                </p>
              </div>

              {/* Bottom Graphic: Multi-peak Area Chart with Green Fill & Dots */}
              <div className="relative w-full h-44 sm:h-52 md:h-56 mt-4 overflow-hidden flex items-end">
                {/* Vertical Chart Gridlines */}
                <div className="absolute inset-0 grid grid-cols-6 pointer-events-none">
                  <div className="border-r border-white/[0.06]" />
                  <div className="border-r border-white/[0.06]" />
                  <div className="border-r border-white/[0.06]" />
                  <div className="border-r border-white/[0.06]" />
                  <div className="border-r border-white/[0.06]" />
                  <div className="border-r border-transparent" />
                </div>

                {/* Area Chart SVG */}
                <svg
                  viewBox="0 0 380 200"
                  className="w-full h-full relative z-10 overflow-visible"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="evionGreenGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#00d26a" stopOpacity="0.55" />
                      <stop offset="45%" stopColor="#00d26a" stopOpacity="0.25" />
                      <stop offset="90%" stopColor="#00d26a" stopOpacity="0.05" />
                      <stop offset="100%" stopColor="#00d26a" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>

                  {/* Filled Area Mountain Gradient */}
                  <path
                    d="M 0 95 L 45 135 L 95 34 L 142 120 L 188 88 L 235 145 L 288 102 L 350 16 L 380 0 L 380 200 L 0 200 Z"
                    fill="url(#evionGreenGradient)"
                    className="transition-opacity duration-500"
                  />

                  {/* Top Polyline Boundary */}
                  <path
                    d="M 0 95 L 45 135 L 95 34 L 142 120 L 188 88 L 235 145 L 288 102 L 350 16 L 380 0"
                    stroke="#00d26a"
                    strokeWidth="2.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="group-hover:stroke-[#00ff88] transition-colors duration-300 drop-shadow-[0_0_8px_rgba(0,210,106,0.35)]"
                  />

                  {/* Data Point Dots */}
                  {[
                    [45, 135],
                    [95, 34],
                    [142, 120],
                    [188, 88],
                    [235, 145],
                    [288, 102],
                    [350, 16],
                  ].map(([cx, cy], i) => (
                    <g key={i} className="transition-transform duration-300 group-hover:scale-125 origin-center">
                      <circle
                        cx={cx}
                        cy={cy}
                        r="4.5"
                        fill="#00d26a"
                        className="cursor-pointer"
                      />
                      <circle
                        cx={cx}
                        cy={cy}
                        r="2"
                        fill="#ffffff"
                      />
                    </g>
                  ))}
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 3. BOTTOM GUIDANCE & BULLETS */}
        {/* ========================================================================= */}
        <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-neutral-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00d26a]" />
            <span className="font-semibold text-white">
              {activeCardIndex === 0 && "Central Subsidy → ₹4,000+ Cr Dedicated EV Infra Allocation"}
              {activeCardIndex === 1 && "Rapid Market Adoption → 17.1% YoY Commercial Fleet & Passenger Expansion"}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {steps.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollToCard(s.id)}
                aria-label={`Jump to ${s.label}`}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  activeCardIndex === s.id ? "w-8 bg-[#00d26a]" : "w-2 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
