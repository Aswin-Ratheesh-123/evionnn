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
      className="bg-[#121212] text-white pt-8 sm:pt-14 pb-12 sm:pb-20 px-3 sm:px-6 lg:px-8 select-none relative overflow-hidden flex flex-col justify-between w-full"
    >
      {/* Ambient Radial Electric Green Aura */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_35%,rgba(64,224,208,0.09),transparent)] pointer-events-none" />

      <div className="max-w-[1360px] mx-auto w-full relative z-10 flex flex-col justify-between h-full">
        {/* ========================================================================= */}
        {/* 1. TOP HEADER */}
        {/* ========================================================================= */}
        <div className="pb-4 sm:pb-6 border-b border-white/10">
          <div className="text-left max-w-4xl mx-auto w-full">
            {/* Kinetic Masked Animated Headline with Optical Deblur */}
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight max-w-2xl leading-[1.15] text-left">
              <span className="block overflow-hidden py-0.5">
                <span
                  className={`block text-white transition-all duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)] delay-150 ${
                    isInView ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-full blur-[6px]"
                  }`}
                >
                  <span className="text-[#40E0D0] font-extrabold drop-shadow-[0_0_24px_rgba(64,224,208,0.45)]">Record Investment</span> &amp;
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
                        ? "inline-block animate-green-sweep-stop"
                        : "text-white"
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
            className={`w-full rounded-3xl bg-neutral-900/95 border border-white/10 hover:border-[#40E0D0]/50 p-6 sm:p-9 lg:p-10 flex flex-col justify-between min-h-[420px] sm:min-h-[460px] overflow-hidden group shadow-2xl relative transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
              cardsInView[0]
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-12 sm:translate-y-16 scale-[0.98]"
            }`}
          >
            {/* Ambient Bottom Green Glow */}
            <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-96 h-44 bg-[radial-gradient(ellipse_at_bottom,rgba(64,224,208,0.3),transparent_70%)] pointer-events-none group-hover:opacity-100 transition-opacity" />

            {/* Stat Value & Title */}
            <div className="relative z-10">
              <div className="flex items-baseline tracking-tight">
                <span className="text-4xl sm:text-5xl lg:text-[4.25rem] font-bold text-white leading-none drop-shadow-[0_0_24px_rgba(64,224,208,0.35)]">
                  ₹4,000+
                </span>
                <span className="text-3xl sm:text-4xl lg:text-[3rem] font-semibold text-[#40E0D0] ml-3 leading-none font-sans drop-shadow-[0_0_20px_rgba(64,224,208,0.5)]">
                  cr
                </span>
              </div>

              <p className="text-sm sm:text-base lg:text-lg text-neutral-300 font-normal leading-snug mt-3 sm:mt-4 max-w-xl">
                allocated to EV infra under <span className="text-white font-semibold underline decoration-[#40E0D0] underline-offset-4 decoration-2">PM E-Drive Scheme</span>
              </p>
            </div>

            {/* Bottom Graphic: Indian Rupee Symbol + Rising Zigzag Arrow */}
            <div className="relative w-full h-48 sm:h-56 md:h-64 mt-6 overflow-hidden flex items-end">
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
                  <rect x="0" y="0" width="56" height="8.5" rx="2" fill="#40E0D0" />
                  <rect x="0" y="17" width="46" height="8.5" rx="2" fill="#40E0D0" />
                  <rect x="11" y="0" width="8.5" height="52" rx="1.5" fill="#40E0D0" />
                  <path
                    d="M 11 0 L 11 39 C 29 39 39 29 39 19.5 C 39 9 29 0 11 0 Z"
                    fill="none"
                    stroke="#40E0D0"
                    strokeWidth="8.5"
                  />
                  <path
                    d="M 21 34 L 54 86"
                    stroke="#40E0D0"
                    strokeWidth="9.5"
                    strokeLinecap="round"
                  />
                </g>

                {/* Rising Zigzag Arrow */}
                <path
                  d="M 52 175 L 90 142 L 130 172 L 182 122 L 225 155 L 325 45"
                  stroke="#40E0D0"
                  strokeWidth="7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="group-hover:stroke-[#5eead4] transition-colors duration-300 drop-shadow-[0_0_12px_rgba(64,224,208,0.35)]"
                />

                {/* Arrowhead pointing Up-Right */}
                <path
                  d="M 282 43 L 332 38 L 327 88"
                  stroke="#40E0D0"
                  strokeWidth="7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  className="group-hover:stroke-[#5eead4] transition-colors duration-300 drop-shadow-[0_0_12px_rgba(64,224,208,0.35)]"
                />
              </svg>
            </div>
          </div>

          {/* ------------------------------------------------------------- */}
          {/* CARD 2: 17.1% YoY GROWTH AREA CHART */}
          {/* ------------------------------------------------------------- */}
          <div
            ref={card1Ref}
            id="card-yoy-growth"
            className={`w-full rounded-3xl bg-neutral-900/95 border border-white/10 hover:border-[#40E0D0]/50 p-6 sm:p-9 lg:p-10 flex flex-col justify-between min-h-[420px] sm:min-h-[460px] overflow-hidden group shadow-2xl relative transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
              cardsInView[1]
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-12 sm:translate-y-16 scale-[0.98]"
            }`}
          >
            {/* Ambient Bottom Green Glow */}
            <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-96 h-44 bg-[radial-gradient(ellipse_at_bottom,rgba(64,224,208,0.3),transparent_70%)] pointer-events-none group-hover:opacity-100 transition-opacity" />

            {/* Stat Value & Title */}
            <div className="relative z-10">
              <div className="flex items-baseline tracking-tight">
                <span className="text-4xl sm:text-5xl lg:text-[4.25rem] font-bold text-white leading-none drop-shadow-[0_0_24px_rgba(64,224,208,0.35)]">
                  17.1%
                </span>
                <span className="text-3xl sm:text-4xl lg:text-[3.25rem] font-bold text-[#40E0D0] ml-3 leading-none font-sans drop-shadow-[0_0_20px_rgba(64,224,208,0.5)]">
                  YoY
                </span>
              </div>

              <p className="text-sm sm:text-base lg:text-lg text-neutral-300 font-normal leading-snug mt-3 sm:mt-4 max-w-xl">
                growth in <span className="text-white font-semibold underline decoration-[#40E0D0] underline-offset-4 decoration-2">national electric vehicle</span> registrations
              </p>
            </div>

            {/* Bottom Graphic: Multi-peak Area Chart with Green Fill & Dots */}
            <div className="relative w-full h-48 sm:h-56 md:h-64 mt-6 overflow-hidden flex items-end">
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
                  <linearGradient id="evionGreenGradientVertical" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#40E0D0" stopOpacity="0.55" />
                    <stop offset="45%" stopColor="#40E0D0" stopOpacity="0.25" />
                    <stop offset="90%" stopColor="#40E0D0" stopOpacity="0.05" />
                    <stop offset="100%" stopColor="#40E0D0" stopOpacity="0.0" />
                  </linearGradient>
                </defs>

                {/* Filled Area Mountain Gradient */}
                <path
                  d="M 0 95 L 45 135 L 95 34 L 142 120 L 188 88 L 235 145 L 288 102 L 350 16 L 380 0 L 380 200 L 0 200 Z"
                  fill="url(#evionGreenGradientVertical)"
                  className="transition-opacity duration-500"
                />

                {/* Top Polyline Boundary */}
                <path
                  d="M 0 95 L 45 135 L 95 34 L 142 120 L 188 88 L 235 145 L 288 102 L 350 16 L 380 0"
                  stroke="#40E0D0"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="group-hover:stroke-[#5eead4] transition-colors duration-300 drop-shadow-[0_0_8px_rgba(64,224,208,0.35)]"
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
                      fill="#40E0D0"
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

        {/* ========================================================================= */}
        {/* 3. BOTTOM GUIDANCE & BULLETS */}
        {/* ========================================================================= */}
        <div className="pt-4 sm:pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400 max-w-4xl mx-auto w-full">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#40E0D0]" />
            <span className="font-semibold text-white">
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