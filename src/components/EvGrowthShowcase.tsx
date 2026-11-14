"use client";

import React, { useEffect, useRef, useState } from "react";
import { TrendingUp, Zap, ArrowUpRight } from "lucide-react";

interface EvGrowthShowcaseProps {
  onOpenCallbackModal?: () => void;
}

export default function EvGrowthShowcase({ onOpenCallbackModal }: EvGrowthShowcaseProps) {
  const [isInView, setIsInView] = useState(false);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToCard = (index: number) => {
    setActiveCardIndex(index);
    if (carouselRef.current) {
      const cards = carouselRef.current.children;
      if (cards[index]) {
        (cards[index] as HTMLElement).scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    }
  };

  const handleCarouselScroll = () => {
    if (!carouselRef.current) return;
    const el = carouselRef.current;
    const scrollLeft = el.scrollLeft;
    const cardWidth = el.children[0]?.clientWidth || 320;
    const newIndex = Math.round(scrollLeft / (cardWidth + 16));
    if (newIndex >= 0 && newIndex <= 1 && newIndex !== activeCardIndex) {
      setActiveCardIndex(newIndex);
    }
  };

  return (
    <section
      ref={sectionRef}
      id="ev-growth"
      className="bg-[#121212] text-white pt-6 sm:pt-14 pb-16 sm:pb-28 px-3 sm:px-6 lg:px-8 select-none relative overflow-hidden flex flex-col justify-center min-h-[100dvh]"
    >
      {/* Ambient Radial Electric Green Aura (Matching Site Theme) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_35%,rgba(0,210,106,0.09),transparent)] pointer-events-none" />

      <div className="max-w-[1360px] mx-auto w-full relative z-10 flex flex-col justify-center">
        {/* Top Header */}
        <div className="pb-4 sm:pb-8 border-b border-white/10 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            {/* Staggered Animated Headline */}
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight max-w-2xl leading-[1.15]">
              {/* Line 1 */}
              <span
                className={`block text-white/90 transition-all duration-700 ease-out delay-100 ${
                  isInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
              >
                Record Investment &amp;
              </span>

              {/* Line 2 with Green Sweep & Stop */}
              <span
                className={`block mt-0.5 sm:mt-1 transition-all duration-700 ease-out delay-200 ${
                  isInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
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

          <p
            className={`text-xs sm:text-sm text-neutral-400 max-w-md font-light leading-relaxed transition-all duration-700 ease-out delay-300 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Central government capital infusion paired with soaring year-on-year EV adoption creates an unprecedented, high-margin opportunity for charging station partners.
          </p>
        </div>

        {/* Mobile Navigation Pills (< md only: 2-tab quick switcher) */}
        <div className="flex md:hidden items-center justify-center gap-2 pt-4 pb-2">
          {[
            { label: "PM E-Drive Scheme", id: 0 },
            { label: "YoY Growth", id: 1 },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => scrollToCard(tab.id)}
              className={`px-3 py-1 rounded-full text-[11px] font-bold tracking-wide transition-all duration-200 ${
                activeCardIndex === tab.id
                  ? "bg-[#00d26a] text-black shadow-[0_0_12px_rgba(0,210,106,0.4)] scale-105"
                  : "bg-white/[0.06] text-neutral-400 border border-white/10 hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 2 Growth & Subsidy Cards (Desktop 2-Col Grid + Mobile Smooth Snap-Carousel) */}
        <div
          ref={carouselRef}
          onScroll={handleCarouselScroll}
          className="flex md:grid md:grid-cols-2 max-w-5xl mx-auto w-full overflow-x-auto md:overflow-x-visible snap-x snap-mandatory gap-5 sm:gap-8 lg:gap-10 pt-4 sm:pt-10 pb-4 px-2 md:px-0 no-scrollbar touch-pan-x"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {/* ========================================================= */}
          {/* CARD 1: ₹4,000+cr PM E-DRIVE SCHEME ALLOCATION */}
          {/* ========================================================= */}
          <div
            className={`w-[88vw] max-w-[360px] sm:max-w-[440px] shrink-0 snap-center md:w-auto md:shrink relative rounded-3xl bg-neutral-900/90 border border-white/10 hover:border-[#00d26a]/40 p-6 sm:p-9 flex flex-col justify-between min-h-[400px] sm:min-h-[460px] overflow-hidden group transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,210,106,0.18)] ${
              isInView
                ? "opacity-100 translate-y-0 delay-[350ms]"
                : "opacity-0 translate-y-8"
            }`}
          >
            {/* Ambient Bottom Green Glow */}
            <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-72 h-36 bg-[radial-gradient(ellipse_at_bottom,rgba(0,210,106,0.3),transparent_70%)] pointer-events-none group-hover:opacity-100 transition-opacity" />

            {/* Top Text Section */}
            <div className="relative z-10">
              {/* Stat Value */}
              <div className="flex items-baseline tracking-tight">
                <span className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-white leading-none">
                  ₹4,000+
                </span>
                <span className="text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold text-[#00d26a] ml-1.5 leading-none font-sans">
                  cr
                </span>
              </div>

              {/* Subtitle Description */}
              <p className="text-sm sm:text-base lg:text-lg text-neutral-300 font-normal leading-snug mt-3 sm:mt-4 max-w-[280px]">
                allocated to EV infra under PM E-Drive Scheme
              </p>
            </div>

            {/* Bottom Graphic: Indian Rupee Symbol + Rising Zigzag Arrow in Brand Green */}
            <div className="relative w-full h-44 sm:h-52 md:h-56 mt-4 overflow-hidden flex items-end">
              {/* Vertical Chart Gridlines in Background */}
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
                {/* Indian Rupee ₹ Symbol (Bottom Left) */}
                <g
                  transform="translate(14, 75)"
                  className="group-hover:scale-105 transition-transform duration-500 origin-bottom-left"
                >
                  {/* Top Bar */}
                  <rect x="0" y="0" width="56" height="8.5" rx="2" fill="#00d26a" />
                  {/* Mid Bar */}
                  <rect x="0" y="17" width="46" height="8.5" rx="2" fill="#00d26a" />
                  {/* Vertical Spine */}
                  <rect x="11" y="0" width="8.5" height="52" rx="1.5" fill="#00d26a" />
                  {/* Upper Loop */}
                  <path
                    d="M 11 0 L 11 39 C 29 39 39 29 39 19.5 C 39 9 29 0 11 0 Z"
                    fill="none"
                    stroke="#00d26a"
                    strokeWidth="8.5"
                  />
                  {/* Diagonal Leg */}
                  <path
                    d="M 21 34 L 54 86"
                    stroke="#00d26a"
                    strokeWidth="9.5"
                    strokeLinecap="round"
                  />
                </g>

                {/* Rising Zigzag Arrow */}
                {/* Points: (52, 175) -> (90, 142) -> (130, 172) -> (182, 122) -> (225, 155) -> (325, 45) */}
                <path
                  d="M 52 175 L 90 142 L 130 172 L 182 122 L 225 155 L 325 45"
                  stroke="#00d26a"
                  strokeWidth="7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="group-hover:stroke-[#00ff88] transition-colors duration-300 drop-shadow-[0_0_12px_rgba(0,210,106,0.35)]"
                />

                {/* Arrowhead at (325, 45) pointing Up-Right */}
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

          {/* ========================================================= */}
          {/* CARD 2: 17.1% YoY GROWTH AREA CHART */}
          {/* ========================================================= */}
          <div
            className={`w-[88vw] max-w-[360px] sm:max-w-[440px] shrink-0 snap-center md:w-auto md:shrink relative rounded-3xl bg-neutral-900/90 border border-white/10 hover:border-[#00d26a]/40 p-6 sm:p-9 flex flex-col justify-between min-h-[400px] sm:min-h-[460px] overflow-hidden group transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,210,106,0.18)] ${
              isInView
                ? "opacity-100 translate-y-0 delay-[450ms]"
                : "opacity-0 translate-y-8"
            }`}
          >
            {/* Ambient Bottom Green Glow */}
            <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-72 h-36 bg-[radial-gradient(ellipse_at_bottom,rgba(0,210,106,0.3),transparent_70%)] pointer-events-none group-hover:opacity-100 transition-opacity" />

            {/* Top Text Section */}
            <div className="relative z-10">
              {/* Stat Value */}
              <div className="flex items-baseline tracking-tight">
                <span className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-white leading-none">
                  17.1%
                </span>
                <span className="text-3xl sm:text-4xl lg:text-[3rem] font-bold text-[#00d26a] ml-2.5 leading-none font-sans">
                  YoY
                </span>
              </div>

              {/* Subtitle Description */}
              <p className="text-sm sm:text-base lg:text-lg text-neutral-300 font-normal leading-snug mt-3 sm:mt-4">
                growth
              </p>
            </div>

            {/* Bottom Graphic: Multi-peak Area Chart with Green Fill & Dots */}
            <div className="relative w-full h-44 sm:h-52 md:h-56 mt-4 overflow-hidden flex items-end">
              {/* Vertical Chart Gridlines in Background */}
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
                    <stop offset="0%" stopColor="#00d26a" stopOpacity="0.5" />
                    <stop offset="45%" stopColor="#00d26a" stopOpacity="0.22" />
                    <stop offset="90%" stopColor="#00d26a" stopOpacity="0.04" />
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
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="group-hover:stroke-[#00ff88] transition-colors duration-300 drop-shadow-[0_0_8px_rgba(0,210,106,0.3)]"
                />

                {/* Data Point Dots (Green Solid Circles Matching Brand Aesthetic) */}
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

        {/* Mobile Swipe Guidance & Dot Indicators (< md only) */}
        <div className="flex md:hidden items-center justify-between px-2 pt-2 text-[11px] text-neutral-400">
          <span className="flex items-center gap-1.5 text-[#00d26a] font-medium text-[11px]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00d26a] animate-pulse" />
            <span>Swipe to view market growth</span>
          </span>

          <div className="flex items-center gap-1.5">
            {[0, 1].map((i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => scrollToCard(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeCardIndex === i ? "w-6 bg-[#00d26a]" : "w-1.5 bg-white/20"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
