"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import { Zap, Radio, CheckCircle2, Smartphone, ArrowDown } from "lucide-react";

interface NetworkShowcaseProps {
  onOpenCallbackModal: () => void;
}

export default function NetworkShowcase({ onOpenCallbackModal }: NetworkShowcaseProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const [isInView, setIsInView] = useState(false);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [phoneScreenTab, setPhoneScreenTab] = useState<"dashboard" | "map">("dashboard");
  const [rfidStyle, setRfidStyle] = useState<"fob" | "card">("fob");

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
      document.getElementById("network-showcase-wrapper") ||
      sectionRef.current?.parentElement?.parentElement;
    if (!wrapper || !containerRef.current || !trackRef.current) return;

    const rect = wrapper.getBoundingClientRect();
    // The horizontal card progression completes in exactly 1 screen height of scrolling (0.95 * innerHeight)
    // After this finishes, Layer 4 (Record Investments) enters from the bottom and overlays Layer 3!
    const animDistance = window.innerHeight * 0.95;
    if (animDistance <= 0) return;

    // Normalized progress 0.0 to 1.0 during the active card progression phase
    const scrolled = -rect.top;
    const p = Math.min(1, Math.max(0, scrolled / animDistance));
    setScrollProgress(p);

    // Discrete active card determination (no halfway resting states - full container only)
    let newIndex = 0;
    if (p >= 0.60) {
      newIndex = 2;
    } else if (p >= 0.25) {
      newIndex = 1;
    } else {
      newIndex = 0;
    }
    setActiveCardIndex(newIndex);

    // Dynamic card centering calculation
    const cards = Array.from(trackRef.current.children) as HTMLElement[];
    if (cards.length < 3) return;

    const containerWidth = containerRef.current.clientWidth;
    const cardWidth = cards[0].offsetWidth;
    // With trackRef position: relative, offsetLeft is rock-solid and independent of transforms
    const stride = cards[1].offsetLeft - cards[0].offsetLeft;
    const startX = (containerWidth - cardWidth) / 2;

    // Discrete full container snap: snaps cleanly to Card 0, 1, or 2 without halfway resting positions
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
      document.getElementById("network-showcase-wrapper") ||
      sectionRef.current?.parentElement?.parentElement;
    if (!wrapper) return;

    const rect = wrapper.getBoundingClientRect();
    const animDistance = window.innerHeight * 0.95;
    const currentScrollY = window.scrollY;
    const wrapperStart = currentScrollY + rect.top;

    let targetP = 0;
    if (index === 1) targetP = 0.5;
    if (index === 2) targetP = 1.0;

    const targetY = wrapperStart + targetP * animDistance;
    window.scrollTo({
      top: targetY,
      behavior: "smooth",
    });
  };

  const steps = [
    { id: 0, label: "Mobile App" },
    { id: 1, label: "Plug & Charge" },
    { id: 2, label: "RFID Key" },
  ];

  return (
    <section
      ref={sectionRef}
      id="network-showcase"
      className="bg-white text-neutral-900 pt-6 sm:pt-10 pb-8 sm:pb-12 px-3 sm:px-6 lg:px-8 select-none relative overflow-hidden flex flex-col justify-between h-full min-h-[100dvh]"
    >
      {/* Ambient Radial Electric Green Aura */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_35%,rgba(64, 224, 208,0.06),transparent)] pointer-events-none" />

      <div className="max-w-[1360px] mx-auto w-full relative z-10 flex flex-col justify-between h-full">
        {/* ========================================================================= */}
        {/* 1. TOP HEADER & STEP INDICATOR */}
        {/* ========================================================================= */}
        <div className="pb-3 sm:pb-6 border-b border-neutral-200 flex flex-col md:flex-row items-start md:items-end justify-between gap-4">
          <div className="text-left w-full md:w-auto">
            {/* Kinetic Masked Animated Headline with Optical Deblur */}
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight max-w-2xl leading-[1.15] text-left">
              <span className="block overflow-hidden py-0.5">
                <span
                  className={`block text-neutral-900 transition-all duration-800 ease-[cubic-bezier(0.16,1,0.3,1)] delay-100 ${
                    isInView ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-full blur-[6px]"
                  }`}
                >
                  The Easiest &amp;
                </span>
              </span>

              <span className="block overflow-hidden py-0.5 mt-0.5 sm:mt-1">
                <span
                  className={`block transition-all duration-800 ease-[cubic-bezier(0.16,1,0.3,1)] delay-200 ${
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
                    Smarter Way to Charge.
                  </span>
                </span>
              </span>
            </h2>
          </div>

          {/* Header Navigation: Pills (Centered) */}
          <div className="flex flex-col items-center justify-center w-full md:w-auto">
            {/* Pills Container (Centered) */}
            <div className="inline-flex items-center justify-center gap-1.5 sm:gap-2 p-1 rounded-full bg-neutral-100 border border-neutral-200/80 mx-auto">
              {steps.map((step) => {
                const isActive = activeCardIndex === step.id;
                return (
                  <button
                    key={step.id}
                    onClick={() => scrollToCard(step.id)}
                    className={`px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-bold tracking-wide transition-all duration-300 cursor-pointer flex items-center gap-1.5 ${
                      isActive
                        ? "bg-[#40E0D0] text-black shadow-sm scale-105"
                        : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-200/60"
                    }`}
                  >
                    <span>{step.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2. PINNED HORIZONTAL CAROUSEL WINDOW (SCROLL-DRIVEN LEFT TO RIGHT) */}
        {/* ========================================================================= */}
        <div ref={containerRef} className="relative w-full overflow-hidden my-auto py-2 sm:py-6">
          {/* Subtle Left & Right Edge Vignette Masks for Smooth Fade */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 sm:w-20 bg-gradient-to-r from-white to-transparent z-20" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 sm:w-20 bg-gradient-to-l from-white to-transparent z-20" />

          {/* Sliding Track Translated Horizontally with Hardware Acceleration & Smooth Snapping */}
          <div
            ref={trackRef}
            className="relative flex items-center gap-5 sm:gap-8 lg:gap-10 w-max will-change-transform transition-transform duration-500 ease-out"
          >
            {/* ------------------------------------------------------------- */}
            {/* CARD 1: MOBILE APP */}
            {/* ------------------------------------------------------------- */}
            <div
              onClick={() => scrollToCard(0)}
              className={`w-[85vw] max-w-[340px] sm:w-[380px] lg:w-[420px] shrink-0 relative rounded-3xl bg-white border p-5 sm:p-7 flex flex-col items-center text-center justify-between min-h-[420px] sm:min-h-[480px] overflow-hidden group cursor-pointer transition-all duration-500 ease-out shadow-lg ${
                activeCardIndex === 0
                  ? "border-[#40E0D0] ring-2 ring-[#40E0D0]/30 shadow-2xl scale-[1.02] opacity-100"
                  : "border-neutral-200 opacity-50 sm:opacity-60 scale-95 hover:opacity-90 hover:border-neutral-300"
              }`}
            >
              {/* Top Visual: Real Clean EV Charging App Interface (Luxora / Tesla Inspired from Reference Image) */}
              <div className="relative w-full h-52 sm:h-64 flex items-center justify-center my-1 sm:my-2">
                {/* Phone Outer Chassis with Sleek Bezel & Ambient Shadow */}
                <div className="relative w-[162px] sm:w-[192px] h-[246px] sm:h-[286px] rounded-[32px] sm:rounded-[36px] bg-neutral-950 border-[2.5px] border-neutral-700/80 shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_25px_rgba(64, 224, 208,0.15)] p-1.5 flex flex-col justify-between overflow-hidden group-hover:scale-105 transition-transform duration-500">
                  {/* Clean App Screen (Static, High-Res Clean Design, No Blinking) */}
                  <div className="relative w-full h-full rounded-[26px] sm:rounded-[30px] bg-[#f4f6f8] text-neutral-900 overflow-hidden flex flex-col justify-between p-2 sm:p-2.5 select-none shadow-inner">
                    
                    {/* 1. iOS Status Bar with Dynamic Island */}
                    <div className="w-full flex items-center justify-between text-[7px] sm:text-[8px] font-medium text-neutral-600 px-0.5 pt-0.5">
                      <span className="font-semibold tracking-tight">9:40 PM</span>
                      {/* Dynamic Island Capsule */}
                      <div className="w-7 sm:w-9 h-1.5 bg-black rounded-full mx-auto" />
                      <div className="flex items-center gap-1 text-[7px]">
                        <svg className="w-2.5 h-2" viewBox="0 0 12 10" fill="currentColor">
                          <rect x="0" y="6" width="2" height="4" rx="0.5" />
                          <rect x="3" y="4" width="2" height="6" rx="0.5" />
                          <rect x="6" y="2" width="2" height="8" rx="0.5" />
                          <rect x="9" y="0" width="2" height="10" rx="0.5" />
                        </svg>
                        <div className="w-3.5 h-1.5 border border-neutral-600 rounded-[2px] p-[1px] flex items-center">
                          <div className="w-2.5 h-full bg-neutral-900 rounded-[0.5px]" />
                        </div>
                      </div>
                    </div>

                    {/* ========================================================= */}
                    {/* VIEW A: DASHBOARD (CENTER SCREEN IN REFERENCE IMAGE) */}
                    {/* ========================================================= */}
                    {phoneScreenTab === "dashboard" && (
                      <div className="flex-1 flex flex-col justify-between pt-0.5">
                        {/* App Header (Menu, Notification Bell, User Avatar) */}
                        <div className="w-full flex items-center justify-between px-0.5 mt-0.5">
                          <div className="w-4 h-4 rounded-md bg-white shadow-xs border border-neutral-200/80 flex flex-col items-center justify-center gap-[2px] p-0.5">
                            <span className="w-2.5 h-[1.5px] bg-neutral-800 rounded-full" />
                            <span className="w-2.5 h-[1.5px] bg-neutral-800 rounded-full" />
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="w-4 h-4 rounded-md bg-white shadow-xs border border-neutral-200/80 flex items-center justify-center text-[7px] text-neutral-600">
                              🔔
                            </div>
                            <div className="w-4 h-4 rounded-full bg-gradient-to-tr from-amber-400 to-orange-500 border border-white shadow-xs flex items-center justify-center text-[6px] font-bold text-white overflow-hidden">
                              <span className="text-[7px]">👦</span>
                            </div>
                          </div>
                        </div>

                        {/* Vehicle Headline */}
                        <div className="text-left px-0.5 mt-0.5">
                          <div className="text-[9px] sm:text-[10px] font-black text-neutral-900 tracking-tight leading-tight">
                            Tesla Model S Plaid
                          </div>
                          <div className="text-[5px] sm:text-[5.5px] font-mono text-neutral-400 leading-none mt-0.5">
                            Evion Fast Network • Stall 02
                          </div>
                        </div>

                        {/* Realistic Tesla Model S Plaid 3/4 Perspective Vector Render */}
                        <div className="relative w-full h-11 sm:h-14 my-0.5 flex items-center justify-center">
                          <svg viewBox="0 0 190 70" className="w-full h-full drop-shadow-sm select-none" fill="none">
                            {/* Ambient Floor Shadows */}
                            <ellipse cx="95" cy="62" rx="80" ry="5.5" fill="rgba(15,23,42,0.18)" />
                            <ellipse cx="95" cy="61" rx="60" ry="3.5" fill="rgba(15,23,42,0.28)" />

                            {/* Aerodynamic Sleek Car Body Shell */}
                            <path
                              d="M 12 47 C 18 39, 32 35, 54 32 C 74 24, 104 19, 140 22 C 164 24, 175 32, 182 43 C 186 49, 184 53, 176 56 C 168 58, 24 58, 12 52 Z"
                              fill="url(#teslaBodyMetallic)"
                            />

                            {/* Hood Crease & Aerodynamic Highlight */}
                            <path
                              d="M 50 33 C 70 29, 98 26, 136 28"
                              stroke="rgba(255,255,255,0.75)"
                              strokeWidth="1.2"
                              strokeLinecap="round"
                            />
                            <path
                              d="M 20 46 C 36 42, 58 41, 90 41"
                              stroke="rgba(255,255,255,0.5)"
                              strokeWidth="1"
                              strokeLinecap="round"
                            />

                            {/* Tinted Panoramic Glass Roof & Windshield */}
                            <path
                              d="M 60 31 C 74 22, 100 19, 136 22 C 150 23, 160 29, 164 38 L 60 38 Z"
                              fill="url(#windshieldTint)"
                            />

                            {/* Windshield Reflection */}
                            <path
                              d="M 72 30 C 88 23, 112 22, 142 24"
                              stroke="rgba(255,255,255,0.4)"
                              strokeWidth="1"
                            />

                            {/* Window Pillar */}
                            <path d="M 102 20 L 100 38" stroke="#1e293b" strokeWidth="2.5" />
                            <path d="M 138 22 L 141 38" stroke="#1e293b" strokeWidth="2" />

                            {/* Side Mirror */}
                            <path
                              d="M 60 34 C 56 34, 52 36, 54 39 C 56 40, 61 39, 62 36 Z"
                              fill="#334155"
                            />

                            {/* Signature Swept-Back LED Projector Headlight */}
                            <path
                              d="M 14 47 C 22 44, 30 44, 36 46 C 30 49, 20 49, 14 47 Z"
                              fill="#ffffff"
                              stroke="#40E0D0"
                              strokeWidth="1.2"
                            />
                            <path
                              d="M 16 46 C 24 44, 32 44, 36 45"
                              stroke="#5eead4"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                            />

                            {/* Lower Bumper Splitter */}
                            <path
                              d="M 12 49 C 16 54, 24 56, 42 56 L 42 53 C 26 53, 16 51, 12 48 Z"
                              fill="#0f172a"
                            />

                            {/* Front Sport Turbine Wheel & Red Brembo Caliper */}
                            <g transform="translate(42, 55)">
                              <circle cx="0" cy="0" r="10.5" fill="#090d16" />
                              <circle cx="0" cy="0" r="9" fill="#1e293b" stroke="#334155" strokeWidth="1" />
                              <rect x="-3" y="-7.5" width="6" height="3" rx="1" fill="#ef4444" />
                              <circle cx="0" cy="0" r="6" fill="#0f172a" stroke="#cbd5e1" strokeWidth="1.2" />
                              <line x1="-4" y1="-4" x2="4" y2="4" stroke="#94a3b8" strokeWidth="1" />
                              <line x1="4" y1="-4" x2="-4" y2="4" stroke="#94a3b8" strokeWidth="1" />
                              <circle cx="0" cy="0" r="2.5" fill="#e2e8f0" />
                            </g>

                            {/* Rear Sport Turbine Wheel & Red Brembo Caliper */}
                            <g transform="translate(148, 55)">
                              <circle cx="0" cy="0" r="10.5" fill="#090d16" />
                              <circle cx="0" cy="0" r="9" fill="#1e293b" stroke="#334155" strokeWidth="1" />
                              <rect x="-3" y="-7.5" width="6" height="3" rx="1" fill="#ef4444" />
                              <circle cx="0" cy="0" r="6" fill="#0f172a" stroke="#cbd5e1" strokeWidth="1.2" />
                              <line x1="-4" y1="-4" x2="4" y2="4" stroke="#94a3b8" strokeWidth="1" />
                              <line x1="4" y1="-4" x2="-4" y2="4" stroke="#94a3b8" strokeWidth="1" />
                              <circle cx="0" cy="0" r="2.5" fill="#e2e8f0" />
                            </g>

                            <defs>
                              <linearGradient id="teslaBodyMetallic" x1="0" y1="0" x2="1" y2="1">
                                <stop offset="0%" stopColor="#ffffff" />
                                <stop offset="25%" stopColor="#f8fafc" />
                                <stop offset="55%" stopColor="#e2e8f0" />
                                <stop offset="85%" stopColor="#cbd5e1" />
                                <stop offset="100%" stopColor="#94a3b8" />
                              </linearGradient>
                              <linearGradient id="windshieldTint" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#0f172a" />
                                <stop offset="60%" stopColor="#1e293b" />
                                <stop offset="100%" stopColor="#020617" />
                              </linearGradient>
                            </defs>
                          </svg>
                        </div>

                        {/* Telemetry Cards Grid (Battery & Climate) */}
                        <div className="grid grid-cols-2 gap-1 w-full">
                          {/* Battery Card */}
                          <div className="bg-white rounded-xl p-1.5 shadow-xs border border-neutral-200/80 flex flex-col justify-between text-left">
                            <div className="flex items-center justify-between text-[5px] text-neutral-400 font-semibold leading-none">
                              <span className="flex items-center gap-0.5">
                                <span className="w-1.5 h-1 border border-neutral-400 rounded-[1px] inline-block" />
                                Battery
                              </span>
                              <span className="text-[4.5px]">charge 1w ago</span>
                            </div>
                            <div className="flex items-center gap-1 my-0.5">
                              {/* 4 Segmented Battery Bars (3 Green, 1 Grey) */}
                              <div className="flex items-center gap-[2px]">
                                <span className="w-1.5 h-3 rounded-[1px] bg-[#40E0D0]" />
                                <span className="w-1.5 h-3 rounded-[1px] bg-[#40E0D0]" />
                                <span className="w-1.5 h-3 rounded-[1px] bg-[#40E0D0]" />
                                <span className="w-1.5 h-3 rounded-[1px] bg-neutral-200" />
                              </div>
                              <span className="text-[10px] sm:text-[11px] font-black text-neutral-900 font-mono leading-none ml-auto">
                                80%
                              </span>
                            </div>
                            <div className="flex items-center justify-between text-[4.5px] font-medium leading-none">
                              <span className="text-neutral-400">92% 180kw</span>
                              <span className="text-[#008b7e] font-bold">Locate ↗</span>
                            </div>
                          </div>

                          {/* Climate Card */}
                          <div className="bg-white rounded-xl p-1.5 shadow-xs border border-neutral-200/80 flex flex-col justify-between text-left">
                            <div className="flex items-center justify-between text-[5px] text-neutral-400 font-semibold leading-none">
                              <span>❄ Climate</span>
                              <span className="text-[4.5px]">Interior 33°</span>
                            </div>
                            <div className="flex items-center justify-between my-0.5">
                              {/* Mint Green Fan Glyph (Clean, Solid, No Blinking) */}
                              <div className="w-4 h-4 rounded-full bg-[#40E0D0]/15 text-[#008b7e] flex items-center justify-center text-[8px] font-bold">
                                ❄
                              </div>
                              {/* Stepper Pill */}
                              <div className="flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-neutral-100 text-[6px] font-bold text-neutral-800">
                                <span>−</span>
                                <span>33°</span>
                                <span>+</span>
                              </div>
                            </div>
                            <div className="text-[4.5px] text-[#008b7e] font-semibold leading-none">
                              Cooling
                            </div>
                          </div>
                        </div>

                        {/* Charging Port Row */}
                        <div className="w-full bg-white rounded-xl p-1.5 shadow-xs border border-neutral-200/80 flex items-center justify-between mt-1">
                          <div className="flex items-center gap-1.5">
                            <div className="w-4 h-4 rounded-md bg-[#40E0D0]/15 flex items-center justify-center text-[8px] text-[#008b7e]">
                              🔌
                            </div>
                            <div className="text-left">
                              <div className="text-[6.5px] sm:text-[7px] font-bold text-neutral-900 leading-tight">
                                Charging port
                              </div>
                              <div className="text-[5px] text-neutral-400 leading-none">
                                Type 2 / J1772 Fast
                              </div>
                            </div>
                          </div>
                          <span className="text-[7px] text-neutral-400 font-bold">↗</span>
                        </div>
                      </div>
                    )}

                    {/* ========================================================= */}
                    {/* VIEW B: MAP & BOOST CHARGE (RIGHT SCREEN IN REFERENCE) */}
                    {/* ========================================================= */}
                    {phoneScreenTab === "map" && (
                      <div className="flex-1 flex flex-col justify-between pt-0.5 text-left">
                        {/* Map Header */}
                        <div className="flex items-center justify-between px-0.5">
                          <span className="text-[7px] font-bold text-neutral-700 flex items-center gap-1">
                            <span>‹</span> Details
                          </span>
                          <span className="text-[7px] text-neutral-400">♡</span>
                        </div>

                        {/* Interactive Road Map Graphic */}
                        <div className="relative w-full h-18 sm:h-22 bg-[#e8edf2] rounded-xl overflow-hidden my-0.5 border border-neutral-200">
                          {/* Road Lines */}
                          <svg viewBox="0 0 160 80" className="w-full h-full" fill="none">
                            <path d="M 0 35 Q 60 15 160 45" stroke="#ffffff" strokeWidth="8" />
                            <path d="M 40 0 Q 70 50 120 80" stroke="#ffffff" strokeWidth="6" />
                            {/* Navigation Path */}
                            <path d="M 25 38 Q 65 24 130 52" stroke="#40E0D0" strokeWidth="2.5" strokeDasharray="3 2" />
                            {/* Destination Pin */}
                            <circle cx="130" cy="52" r="5" fill="#ef4444" />
                            <circle cx="130" cy="52" r="2" fill="#ffffff" />
                            {/* Current Vehicle Location */}
                            <rect x="20" y="32" width="10" height="7" rx="2" fill="#40E0D0" />
                          </svg>
                        </div>

                        {/* Boost Charge Card */}
                        <div className="bg-white rounded-xl p-1.5 shadow-xs border border-neutral-200/80">
                          <div className="flex items-center justify-between text-[6.5px] font-bold text-neutral-900 mb-0.5">
                            <span>Boost Charge</span>
                            <span className="text-[5.5px] text-[#008b7e] font-mono">80% • 180kW</span>
                          </div>
                          <div className="grid grid-cols-2 gap-1 text-[5px] text-neutral-500 mb-1">
                            <div className="bg-neutral-50 p-1 rounded-md">
                              <span className="font-bold text-neutral-900 block text-[6px]">5.2 km</span>
                              Distance
                            </div>
                            <div className="bg-neutral-50 p-1 rounded-md">
                              <span className="font-bold text-neutral-900 block text-[6px]">30 Mins</span>
                              Avg Time
                            </div>
                          </div>
                          <div className="flex items-center justify-between pt-0.5 border-t border-neutral-100">
                            <span className="text-[7px] font-bold text-neutral-900">₹300</span>
                            <span className="px-2 py-0.5 rounded-full bg-[#40E0D0] text-black font-bold text-[5.5px]">
                              Direction
                            </span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* 7. Bottom Navigation Icon Dock (Interactive Tab Switcher) */}
                    <div className="w-full bg-white rounded-full p-1 shadow-xs border border-neutral-200/80 flex items-center justify-around mt-1">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setPhoneScreenTab("dashboard");
                        }}
                        aria-label="Dashboard Screen"
                        className={`w-5 h-5 rounded-full flex items-center justify-center text-[8px] transition-all cursor-pointer ${
                          phoneScreenTab === "dashboard"
                            ? "bg-[#40E0D0] text-white shadow-xs scale-105"
                            : "text-neutral-400 hover:text-neutral-700"
                        }`}
                      >
                        ⚡
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setPhoneScreenTab("dashboard");
                        }}
                        aria-label="Vehicle Screen"
                        className={`w-5 h-5 rounded-full flex items-center justify-center text-[8px] transition-all cursor-pointer ${
                          phoneScreenTab === "dashboard"
                            ? "text-[#008b7e]"
                            : "text-neutral-400 hover:text-neutral-700"
                        }`}
                      >
                        🚗
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setPhoneScreenTab("map");
                        }}
                        aria-label="Map Screen"
                        className={`w-5 h-5 rounded-full flex items-center justify-center text-[8px] transition-all cursor-pointer ${
                          phoneScreenTab === "map"
                            ? "bg-[#40E0D0] text-white shadow-xs scale-105"
                            : "text-neutral-400 hover:text-neutral-700"
                        }`}
                      >
                        📍
                      </button>
                    </div>

                    {/* 8. Bottom Home Indicator Bar */}
                    <div className="w-10 h-0.5 rounded-full bg-neutral-300 mx-auto mt-0.5" />

                  </div>
                </div>
              </div>

              {/* Middle Content */}
              <div className="my-auto py-2">
                <h3 className="text-base sm:text-xl font-bold tracking-wider text-neutral-900 uppercase mb-1.5 sm:mb-2">
                  MOBILE APP
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 font-normal leading-relaxed max-w-[260px] mx-auto">
                  Select The Charger Connect Your Vehicle Click Start Charging
                </p>
              </div>

              {/* Bottom Badges: Google Play & App Store */}
              <div className="flex items-center justify-center gap-2 sm:gap-2.5 pt-2 sm:pt-4 w-full">
                {/* Google Play */}
                <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 rounded-xl bg-black border border-white/15 hover:border-[#40E0D0]/50 hover:bg-neutral-950 transition-all">
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" viewBox="0 0 24 24" fill="none">
                    <path d="M3.609 1.814L13.793 12 3.61 22.186A1.854 1.854 0 0 1 3 20.88V3.12c0-.528.225-.996.609-1.306z" fill="#00E676" />
                    <path d="M17.18 8.613l-3.387 3.387 3.387 3.387 3.82-2.17a1.69 1.69 0 0 0 0-2.434l-3.82-2.17z" fill="#FFD600" />
                    <path d="M13.793 12L3.609 1.814A1.85 1.85 0 0 1 4.887 1.5c.57 0 1.13.167 1.61.44l10.683 6.073-3.387 3.387z" fill="#00B0FF" />
                    <path d="M13.793 12l3.387 3.387L6.497 21.46a2.825 2.825 0 0 1-1.61.44 1.85 1.85 0 0 1-1.278-.314L13.793 12z" fill="#FF3D00" />
                  </svg>
                  <div className="text-left">
                    <div className="text-[6px] sm:text-[7px] uppercase tracking-wider text-neutral-400 font-semibold leading-none">
                      GET IT ON
                    </div>
                    <div className="text-[9px] sm:text-[10px] font-bold text-white tracking-tight leading-tight mt-0.5">
                      Google Play
                    </div>
                  </div>
                </div>

                {/* App Store */}
                <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 rounded-xl bg-black border border-white/15 hover:border-[#40E0D0]/50 hover:bg-neutral-950 transition-all">
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 fill-white" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.38c.62-.75 1.04-1.8 0.93-2.85-.9.04-1.99.6-2.63 1.35-.57.65-1.06 1.71-.93 2.73 1 .08 2.02-.48 2.63-1.23z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-[6px] sm:text-[7px] uppercase tracking-wider text-neutral-400 font-semibold leading-none">
                      Download on
                    </div>
                    <div className="text-[9px] sm:text-[10px] font-bold text-white tracking-tight leading-tight mt-0.5">
                      App Store
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ------------------------------------------------------------- */}
            {/* CARD 2: JUST – PLUG & CHARGE */}
            {/* ------------------------------------------------------------- */}
            <div
              onClick={() => scrollToCard(1)}
              className={`w-[85vw] max-w-[340px] sm:w-[380px] lg:w-[420px] shrink-0 relative rounded-3xl bg-white border p-5 sm:p-7 flex flex-col items-center text-center justify-between min-h-[420px] sm:min-h-[480px] overflow-hidden group cursor-pointer transition-all duration-500 ease-out shadow-lg ${
                activeCardIndex === 1
                  ? "border-[#40E0D0] ring-2 ring-[#40E0D0]/30 shadow-2xl scale-[1.02] opacity-100"
                  : "border-neutral-200 opacity-50 sm:opacity-60 scale-95 hover:opacity-90 hover:border-neutral-300"
              }`}
            >
              {/* Top Visual: Real-World Vehicle Plug & Charge Photograph */}
              <div className="relative w-full h-52 sm:h-64 flex flex-col items-center justify-center my-1 sm:my-2">
                <div className="relative w-[260px] sm:w-[310px] h-[190px] sm:h-[225px] rounded-2xl overflow-hidden border border-neutral-200 shadow-md bg-neutral-950 select-none group-hover:scale-105 transition-transform duration-500">
                  <Image
                    src="/images/hero-slide-hyperbolt.jpg"
                    alt="Real EV Connected to Evion Fast Charger with CCS2 Gun"
                    fill
                    className="object-cover object-[62%_55%]"
                  />
                  {/* Dark Vignette Overlay for Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

                  {/* Floating Station Specs Overlay */}
                  <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-white">
                    <div className="text-left">
                      <div className="text-[8px] sm:text-[9px] font-black uppercase tracking-wider text-emerald-400 leading-tight">
                        Evion Hyperbolt 240kW
                      </div>
                      <div className="text-[6.5px] sm:text-[7px] text-neutral-300 font-mono">
                        Connected • ISO 15118 Autostart
                      </div>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#40E0D0] text-black font-black text-[7px] tracking-wide shrink-0">
                      PLUGGED IN
                    </span>
                  </div>
                </div>
              </div>

              {/* Middle Content */}
              <div className="my-auto py-2">
                <h3 className="text-base sm:text-xl font-bold tracking-wider text-neutral-900 uppercase mb-1.5 sm:mb-2">
                  JUST – PLUG &amp; CHARGE
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 font-normal leading-relaxed max-w-[260px] mx-auto">
                  Avoid The Hassle Just Start Charging!
                </p>
              </div>

              {/* Bottom Status / Micro Action */}
              <div className="pt-2 sm:pt-4 flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold text-[#008b7e]">
                <CheckCircle2 className="w-4 h-4 text-[#008b7e]" />
                <span>Ready in 3 seconds upon plug-in</span>
              </div>
            </div>

            {/* ------------------------------------------------------------- */}
            {/* CARD 3: RFID KEY */}
            {/* ------------------------------------------------------------- */}
            <div
              onClick={() => scrollToCard(2)}
              className={`w-[85vw] max-w-[340px] sm:w-[380px] lg:w-[420px] shrink-0 relative rounded-3xl bg-white border p-5 sm:p-7 flex flex-col items-center text-center justify-between min-h-[420px] sm:min-h-[480px] overflow-hidden group cursor-pointer transition-all duration-500 ease-out shadow-lg ${
                activeCardIndex === 2
                  ? "border-[#40E0D0] ring-2 ring-[#40E0D0]/30 shadow-2xl scale-[1.02] opacity-100"
                  : "border-neutral-200 opacity-50 sm:opacity-60 scale-95 hover:opacity-90 hover:border-neutral-300"
              }`}
            >
              {/* Top Visual: Simple, Minimalist RFID Key (Pebble Fob / Tesla-Style Card) */}
              <div className="relative w-full h-48 sm:h-60 flex flex-col items-center justify-center my-1 sm:my-2">
                {/* Micro Switcher Pills (Simple Minimalist Toggle) */}
                <div className="flex items-center justify-center gap-1.5 mb-2 z-10">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setRfidStyle("fob");
                    }}
                    className={`px-3 py-0.5 rounded-full text-[9px] font-bold tracking-wide transition-all cursor-pointer ${
                      rfidStyle === "fob"
                        ? "bg-[#40E0D0] text-black shadow-xs font-black scale-105"
                        : "bg-neutral-100 text-neutral-600 hover:text-neutral-900"
                    }`}
                  >
                    Minimal Fob
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setRfidStyle("card");
                    }}
                    className={`px-3 py-0.5 rounded-full text-[9px] font-bold tracking-wide transition-all cursor-pointer ${
                      rfidStyle === "card"
                        ? "bg-[#40E0D0] text-black shadow-xs font-black scale-105"
                        : "bg-neutral-100 text-neutral-600 hover:text-neutral-900"
                    }`}
                  >
                    Smart Card
                  </button>
                </div>

                {/* ----------------------------------------------------------- */}
                {/* OPTION 1: MINIMALIST MATTE BLACK PEBBLE FOB */}
                {/* ----------------------------------------------------------- */}
                {rfidStyle === "fob" && (
                  <svg
                    viewBox="0 0 160 180"
                    className="w-full h-full max-h-[190px] select-none filter drop-shadow-[0_16px_30px_rgba(0,0,0,0.85)] group-hover:scale-105 transition-transform duration-500 ease-out"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <linearGradient id="simpleSteelRing" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#ffffff" />
                        <stop offset="35%" stopColor="#cbd5e1" />
                        <stop offset="70%" stopColor="#64748b" />
                        <stop offset="100%" stopColor="#334155" />
                      </linearGradient>
                      <linearGradient id="simpleMatteFob" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#222630" />
                        <stop offset="40%" stopColor="#13161c" />
                        <stop offset="100%" stopColor="#0a0c10" />
                      </linearGradient>
                    </defs>

                    {/* Soft Contact Floor Shadow */}
                    <ellipse cx="80" cy="162" rx="46" ry="6" fill="rgba(0,0,0,0.55)" />

                    {/* Polished Stainless Steel Split Key Ring */}
                    <circle
                      cx="80"
                      cy="30"
                      r="17"
                      stroke="url(#simpleSteelRing)"
                      strokeWidth="2.8"
                      fill="none"
                    />

                    {/* Clean Metal Attachment Eyelet */}
                    <rect x="76" y="40" width="8" height="10" rx="2" fill="url(#simpleSteelRing)" />

                    {/* Smooth Matte Black Pebble Body */}
                    <rect
                      x="46"
                      y="46"
                      width="68"
                      height="106"
                      rx="24"
                      fill="url(#simpleMatteFob)"
                      stroke="rgba(255,255,255,0.12)"
                      strokeWidth="1.2"
                    />

                    {/* Reinforced Lanyard Hole */}
                    <circle cx="80" cy="58" r="4" fill="#090b0e" stroke="url(#simpleSteelRing)" strokeWidth="1" />

                    {/* Minimalist EVION Wordmark */}
                    <text
                      x="80"
                      y="92"
                      textAnchor="middle"
                      fill="#ffffff"
                      fontSize="9.5"
                      fontWeight="900"
                      letterSpacing="2.2"
                      fontFamily="system-ui, -apple-system, sans-serif"
                    >
                      EVION
                    </text>

                    {/* Clean Mint Green Contactless Wave Symbol */}
                    <g transform="translate(80, 114)">
                      <path
                        d="M -3 -1.5 A 3.5 3.5 0 0 1 -3 1.5"
                        stroke="#40E0D0"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        fill="none"
                        transform="rotate(90)"
                      />
                      <path
                        d="M -6 -3 A 7 7 0 0 1 -6 3"
                        stroke="#40E0D0"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        fill="none"
                        transform="rotate(90)"
                      />
                      <path
                        d="M -9 -4.5 A 10.5 10.5 0 0 1 -9 4.5"
                        stroke="#40E0D0"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        fill="none"
                        transform="rotate(90)"
                      />
                    </g>

                    {/* Simple Monospace Subtitle */}
                    <text
                      x="80"
                      y="136"
                      textAnchor="middle"
                      fill="#64748b"
                      fontSize="4.5"
                      fontWeight="700"
                      letterSpacing="1.6"
                      fontFamily="monospace"
                    >
                      RFID KEY
                    </text>
                  </svg>
                )}

                {/* ----------------------------------------------------------- */}
                {/* OPTION 2: MINIMALIST TESLA-STYLE SMART KEY CARD */}
                {/* ----------------------------------------------------------- */}
                {rfidStyle === "card" && (
                  <svg
                    viewBox="0 0 200 150"
                    className="w-full h-full max-h-[190px] select-none filter drop-shadow-[0_16px_30px_rgba(0,0,0,0.85)] group-hover:scale-105 transition-transform duration-500 ease-out"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <linearGradient id="simpleMatteCard" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#1e222b" />
                        <stop offset="50%" stopColor="#111318" />
                        <stop offset="100%" stopColor="#08090c" />
                      </linearGradient>
                      <linearGradient id="cardSteelRing" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#ffffff" />
                        <stop offset="50%" stopColor="#94a3b8" />
                        <stop offset="100%" stopColor="#475569" />
                      </linearGradient>
                    </defs>

                    {/* Soft Contact Floor Shadow */}
                    <ellipse cx="100" cy="136" rx="72" ry="7" fill="rgba(0,0,0,0.55)" />

                    {/* Corner Stainless Steel Key Ring */}
                    <circle
                      cx="28"
                      cy="28"
                      r="14"
                      stroke="url(#cardSteelRing)"
                      strokeWidth="2.2"
                      fill="none"
                    />

                    {/* Minimalist Matte Obsidian Card Body */}
                    <rect
                      x="16"
                      y="18"
                      width="168"
                      height="106"
                      rx="12"
                      fill="url(#simpleMatteCard)"
                      stroke="rgba(255,255,255,0.12)"
                      strokeWidth="1.2"
                    />

                    {/* Corner Keyhole Grommet */}
                    <circle cx="28" cy="28" r="3.5" fill="#08090c" stroke="url(#cardSteelRing)" strokeWidth="1" />

                    {/* Top-Left: EVION Wordmark */}
                    <text
                      x="42"
                      y="42"
                      fill="#ffffff"
                      fontSize="9"
                      fontWeight="900"
                      letterSpacing="2"
                      fontFamily="system-ui, -apple-system, sans-serif"
                    >
                      EVION
                    </text>

                    {/* Top-Right: Clean Electric Green Contactless Waves */}
                    <g transform="translate(162, 38)">
                      <path
                        d="M -2.5 -1.5 A 3 3 0 0 1 -2.5 1.5"
                        stroke="#40E0D0"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        fill="none"
                        transform="rotate(90)"
                      />
                      <path
                        d="M -5 -3 A 6 6 0 0 1 -5 3"
                        stroke="#40E0D0"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        fill="none"
                        transform="rotate(90)"
                      />
                      <path
                        d="M -7.5 -4.5 A 9 9 0 0 1 -7.5 4.5"
                        stroke="#40E0D0"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        fill="none"
                        transform="rotate(90)"
                      />
                    </g>

                    {/* Center: Subtle Embossed Contactless Target Circle */}
                    <circle
                      cx="100"
                      cy="71"
                      r="16"
                      stroke="rgba(255,255,255,0.06)"
                      strokeWidth="1"
                      fill="none"
                    />
                    <circle
                      cx="100"
                      cy="71"
                      r="2.5"
                      fill="#40E0D0"
                    />

                    {/* Bottom-Left: Micro Label */}
                    <text
                      x="28"
                      y="108"
                      fill="#94a3b8"
                      fontSize="4.5"
                      fontWeight="700"
                      letterSpacing="1.2"
                      fontFamily="monospace"
                    >
                      SMARTPASS RFID
                    </text>

                    {/* Bottom-Right: ISO Frequency Spec */}
                    <text
                      x="172"
                      y="108"
                      textAnchor="end"
                      fill="#64748b"
                      fontSize="4"
                      fontWeight="600"
                      letterSpacing="0.8"
                      fontFamily="monospace"
                    >
                      13.56 MHz
                    </text>
                  </svg>
                )}
              </div>

              {/* Middle Content */}
              <div className="my-auto py-2">
                <h3 className="text-base sm:text-xl font-bold tracking-wider text-neutral-900 uppercase mb-1.5 sm:mb-2">
                  RFID KEY
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 font-normal leading-relaxed max-w-[260px] mx-auto">
                  Connect Your Vehicle Tap Your RFID Key To Start
                </p>
              </div>

              {/* Bottom Status */}
              <div className="pt-2 sm:pt-4 flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold text-neutral-600">
                <Radio className="w-4 h-4 text-[#008b7e]" />
                <span>Tap to start • Offline ready</span>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 3. BOTTOM GUIDANCE & BULLETS */}
        {/* ========================================================================= */}
        <div className="pt-3 border-t border-neutral-200 flex items-center justify-between text-xs text-neutral-500">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#40E0D0]" />
            <span className="font-semibold text-neutral-900">
              {activeCardIndex === 0 && "Open App → Scan QR or Select Stall"}
              {activeCardIndex === 1 && "Plug Cable into EV → Auto Authenticates"}
              {activeCardIndex === 2 && "Tap Contactless RFID Fob → Start Instantly"}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {steps.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollToCard(s.id)}
                aria-label={`Jump to ${s.label}`}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  activeCardIndex === s.id ? "w-8 bg-[#40E0D0]" : "w-2 bg-neutral-300 hover:bg-neutral-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
