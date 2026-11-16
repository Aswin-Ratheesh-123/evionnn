"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Radio, CheckCircle2 } from "lucide-react";

interface NetworkShowcaseProps {
  onOpenCallbackModal: () => void;
}

export default function NetworkShowcase({ onOpenCallbackModal }: NetworkShowcaseProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const card0Ref = useRef<HTMLDivElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);

  const [isInView, setIsInView] = useState(false);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [cardsInView, setCardsInView] = useState([false, false, false]);
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

  // IntersectionObserver to detect which card is active as user scrolls through vertically & trigger smooth slide-in
  useEffect(() => {
    const cardRefs = [card0Ref, card1Ref, card2Ref];
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

  // Smooth scroll directly to card when clicking pill or dot
  const scrollToCard = (index: number) => {
    setActiveCardIndex(index);
    const cardRefs = [card0Ref, card1Ref, card2Ref];
    const target = cardRefs[index]?.current;
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "center" });
    }
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
      className="bg-white text-neutral-900 pt-8 sm:pt-14 pb-12 sm:pb-20 px-3 sm:px-6 lg:px-8 select-none relative overflow-hidden flex flex-col justify-between w-full"
    >
      {/* Ambient Radial Electric Green Aura */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_35%,rgba(64,224,208,0.06),transparent)] pointer-events-none" />

      <div className="max-w-[1360px] mx-auto w-full relative z-10 flex flex-col justify-between h-full">
        {/* ========================================================================= */}
        {/* 1. TOP HEADER */}
        {/* ========================================================================= */}
        <div className="pb-4 sm:pb-6 border-b border-neutral-200">
          <div className="text-left max-w-4xl mx-auto w-full">
            {/* Kinetic Masked Animated Headline with Optical Deblur */}
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight max-w-2xl leading-[1.15] text-left">
              <span className="block overflow-hidden py-0.5">
                <span
                  className={`block text-neutral-900 transition-all duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)] delay-150 ${isInView ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-full blur-[6px]"
                    }`}
                >
                  The Easiest &amp;
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
                    Smarter Way to Charge.
                  </span>
                </span>
              </span>
            </h2>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2. VERTICAL CARDS CONTAINER (ONE BELOW THE OTHER NOT SIDEWAYS) */}
        {/* ========================================================================= */}
        <div className="flex flex-col gap-8 sm:gap-10 lg:gap-12 w-full max-w-4xl mx-auto my-8 sm:my-12">
          {/* ------------------------------------------------------------- */}
          {/* CARD 1: MOBILE APP */}
          {/* ------------------------------------------------------------- */}
          <div
            ref={card0Ref}
            id="card-mobile-app"
            onClick={() => setActiveCardIndex(0)}
            className={`w-full rounded-3xl bg-white border p-6 sm:p-8 lg:p-10 flex flex-col md:flex-row items-center justify-between gap-8 sm:gap-12 shadow-lg transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
              cardsInView[0]
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-12 sm:translate-y-16 scale-[0.98]"
            } ${
              activeCardIndex === 0
                ? "border-[#40E0D0] ring-2 ring-[#40E0D0]/30 shadow-2xl"
                : "border-neutral-200 hover:border-neutral-300 hover:shadow-xl"
            }`}
          >
            {/* Left / Top Visual: Real Clean EV Charging App Interface */}
            <div className="relative w-full md:w-auto flex items-center justify-center shrink-0">
              {/* Phone Outer Chassis with Sleek Bezel & Ambient Shadow */}
              <div className="relative w-[182px] sm:w-[204px] h-[276px] sm:h-[308px] rounded-[32px] sm:rounded-[36px] bg-neutral-950 border-[2.5px] border-neutral-700/80 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_25px_rgba(64,224,208,0.15)] p-1.5 flex flex-col justify-between overflow-hidden group hover:scale-[1.02] transition-transform duration-500">
                {/* Clean App Screen */}
                <div className="relative w-full h-full rounded-[26px] sm:rounded-[30px] bg-[#f4f6f8] text-neutral-900 overflow-hidden flex flex-col justify-between p-2 sm:p-2.5 select-none shadow-inner">
                  {/* iOS Status Bar with Dynamic Island */}
                  <div className="w-full flex items-center justify-between text-[7px] sm:text-[8px] font-medium text-neutral-600 px-0.5 pt-0.5">
                    <span className="font-semibold tracking-tight">9:40 PM</span>
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

                  {/* VIEW A: DASHBOARD */}
                  {phoneScreenTab === "dashboard" && (
                    <div className="flex-1 flex flex-col justify-between pt-0.5">
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

                      <div className="text-left px-0.5 mt-0.5">
                        <div className="text-[9px] sm:text-[10px] font-black text-neutral-900 tracking-tight leading-tight">
                          Tesla Model S Plaid
                        </div>
                        <div className="text-[5px] sm:text-[5.5px] font-mono text-neutral-400 leading-none mt-0.5">
                          Evion Fast Network • Stall 02
                        </div>
                      </div>

                      <div className="relative w-full h-11 sm:h-14 my-0.5 flex items-center justify-center">
                        <svg viewBox="0 0 190 70" className="w-full h-full drop-shadow-sm select-none" fill="none">
                          <ellipse cx="95" cy="62" rx="80" ry="5.5" fill="rgba(15,23,42,0.18)" />
                          <ellipse cx="95" cy="61" rx="60" ry="3.5" fill="rgba(15,23,42,0.28)" />
                          <path
                            d="M 12 47 C 18 39, 32 35, 54 32 C 74 24, 104 19, 140 22 C 164 24, 175 32, 182 43 C 186 49, 184 53, 176 56 C 168 58, 24 58, 12 52 Z"
                            fill="url(#teslaBodyMetallicVertical)"
                          />
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
                          <path
                            d="M 60 31 C 74 22, 100 19, 136 22 C 150 23, 160 29, 164 38 L 60 38 Z"
                            fill="url(#windshieldTintVertical)"
                          />
                          <path d="M 102 20 L 100 38" stroke="#1e293b" strokeWidth="2.5" />
                          <path d="M 138 22 L 141 38" stroke="#1e293b" strokeWidth="2" />
                          <path
                            d="M 14 47 C 22 44, 30 44, 36 46 C 30 49, 20 49, 14 47 Z"
                            fill="#ffffff"
                            stroke="#40E0D0"
                            strokeWidth="1.2"
                          />
                          <g transform="translate(42, 55)">
                            <circle cx="0" cy="0" r="10.5" fill="#090d16" />
                            <circle cx="0" cy="0" r="9" fill="#1e293b" stroke="#334155" strokeWidth="1" />
                            <rect x="-3" y="-7.5" width="6" height="3" rx="1" fill="#ef4444" />
                            <circle cx="0" cy="0" r="6" fill="#0f172a" stroke="#cbd5e1" strokeWidth="1.2" />
                            <circle cx="0" cy="0" r="2.5" fill="#e2e8f0" />
                          </g>
                          <g transform="translate(148, 55)">
                            <circle cx="0" cy="0" r="10.5" fill="#090d16" />
                            <circle cx="0" cy="0" r="9" fill="#1e293b" stroke="#334155" strokeWidth="1" />
                            <rect x="-3" y="-7.5" width="6" height="3" rx="1" fill="#ef4444" />
                            <circle cx="0" cy="0" r="6" fill="#0f172a" stroke="#cbd5e1" strokeWidth="1.2" />
                            <circle cx="0" cy="0" r="2.5" fill="#e2e8f0" />
                          </g>
                          <defs>
                            <linearGradient id="teslaBodyMetallicVertical" x1="0" y1="0" x2="1" y2="1">
                              <stop offset="0%" stopColor="#ffffff" />
                              <stop offset="25%" stopColor="#f8fafc" />
                              <stop offset="55%" stopColor="#e2e8f0" />
                              <stop offset="85%" stopColor="#cbd5e1" />
                              <stop offset="100%" stopColor="#94a3b8" />
                            </linearGradient>
                            <linearGradient id="windshieldTintVertical" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="#0f172a" />
                              <stop offset="60%" stopColor="#1e293b" />
                              <stop offset="100%" stopColor="#020617" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>

                      <div className="grid grid-cols-2 gap-1 w-full">
                        <div className="bg-white rounded-xl p-1.5 shadow-xs border border-neutral-200/80 flex flex-col justify-between text-left">
                          <div className="flex items-center justify-between text-[5px] text-neutral-400 font-semibold leading-none">
                            <span>Battery</span>
                            <span className="text-[4.5px]">live</span>
                          </div>
                          <div className="flex items-center gap-1 my-0.5">
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
                            <span className="text-neutral-400">180kW</span>
                            <span className="text-[#008b7e] font-bold">Fast ↗</span>
                          </div>
                        </div>

                        <div className="bg-white rounded-xl p-1.5 shadow-xs border border-neutral-200/80 flex flex-col justify-between text-left">
                          <div className="flex items-center justify-between text-[5px] text-neutral-400 font-semibold leading-none">
                            <span>❄ Climate</span>
                            <span className="text-[4.5px]">21°C</span>
                          </div>
                          <div className="flex items-center justify-between my-0.5">
                            <div className="w-4 h-4 rounded-full bg-[#40E0D0]/15 text-[#008b7e] flex items-center justify-center text-[8px] font-bold">
                              ❄
                            </div>
                            <div className="flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-neutral-100 text-[6px] font-bold text-neutral-800">
                              <span>−</span>
                              <span>21°</span>
                              <span>+</span>
                            </div>
                          </div>
                          <div className="text-[4.5px] text-[#008b7e] font-semibold leading-none">
                            Active
                          </div>
                        </div>
                      </div>

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
                              CCS2 Fast DC Gun
                            </div>
                          </div>
                        </div>
                        <span className="text-[7px] text-[#008b7e] font-bold">Active</span>
                      </div>
                    </div>
                  )}

                  {/* VIEW B: MAP */}
                  {phoneScreenTab === "map" && (
                    <div className="flex-1 flex flex-col justify-between pt-0.5 text-left">
                      <div className="flex items-center justify-between px-0.5">
                        <span className="text-[7px] font-bold text-neutral-700 flex items-center gap-1">
                          <span>‹</span> Grid Map
                        </span>
                        <span className="text-[7px] text-neutral-400">♡</span>
                      </div>

                      <div className="relative w-full h-20 sm:h-24 bg-[#e8edf2] rounded-xl overflow-hidden my-0.5 border border-neutral-200">
                        <svg viewBox="0 0 160 80" className="w-full h-full" fill="none">
                          <path d="M 0 35 Q 60 15 160 45" stroke="#ffffff" strokeWidth="8" />
                          <path d="M 40 0 Q 70 50 120 80" stroke="#ffffff" strokeWidth="6" />
                          <path d="M 25 38 Q 65 24 130 52" stroke="#40E0D0" strokeWidth="2.5" strokeDasharray="3 2" />
                          <circle cx="130" cy="52" r="5" fill="#ef4444" />
                          <circle cx="130" cy="52" r="2" fill="#ffffff" />
                          <rect x="20" y="32" width="10" height="7" rx="2" fill="#40E0D0" />
                        </svg>
                      </div>

                      <div className="bg-white rounded-xl p-1.5 shadow-xs border border-neutral-200/80">
                        <div className="flex items-center justify-between text-[6.5px] font-bold text-neutral-900 mb-0.5">
                          <span>Boost Charge</span>
                          <span className="text-[5.5px] text-[#008b7e] font-mono">180kW • Available</span>
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
                      </div>
                    </div>
                  )}

                  {/* Tab Switcher */}
                  <div className="w-full bg-white rounded-full p-1 shadow-xs border border-neutral-200/80 flex items-center justify-around mt-1">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setPhoneScreenTab("dashboard");
                      }}
                      aria-label="Dashboard Screen"
                      className={`w-5 h-5 rounded-full flex items-center justify-center text-[8px] transition-all cursor-pointer ${phoneScreenTab === "dashboard"
                        ? "bg-[#40E0D0] text-black shadow-xs scale-105"
                        : "text-neutral-400 hover:text-neutral-700"
                        }`}
                    >
                      ⚡
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setPhoneScreenTab("map");
                      }}
                      aria-label="Map Screen"
                      className={`w-5 h-5 rounded-full flex items-center justify-center text-[8px] transition-all cursor-pointer ${phoneScreenTab === "map"
                        ? "bg-[#40E0D0] text-black shadow-xs scale-105"
                        : "text-neutral-400 hover:text-neutral-700"
                        }`}
                    >
                      📍
                    </button>
                  </div>

                  <div className="w-10 h-0.5 rounded-full bg-neutral-300 mx-auto mt-0.5" />
                </div>
              </div>
            </div>

            {/* Right / Content */}
            <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left justify-center space-y-3.5 sm:space-y-4">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-neutral-900 uppercase">
                MOBILE APP
              </h3>

              <p className="text-sm sm:text-base text-neutral-600 font-normal leading-relaxed max-w-md">
                Select The Charger Connect Your Vehicle Click Start Charging
              </p>

              {/* Bottom Badges: Google Play & App Store */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5 pt-2">
                <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-black border border-white/15 hover:border-[#40E0D0]/50 hover:bg-neutral-950 transition-all cursor-pointer">
                  <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none">
                    <path d="M3.609 1.814L13.793 12 3.61 22.186A1.854 1.854 0 0 1 3 20.88V3.12c0-.528.225-.996.609-1.306z" fill="#00E676" />
                    <path d="M17.18 8.613l-3.387 3.387 3.387 3.387 3.82-2.17a1.69 1.69 0 0 0 0-2.434l-3.82-2.17z" fill="#FFD600" />
                    <path d="M13.793 12L3.609 1.814A1.85 1.85 0 0 1 4.887 1.5c.57 0 1.13.167 1.61.44l10.683 6.073-3.387 3.387z" fill="#00B0FF" />
                    <path d="M13.793 12l3.387 3.387L6.497 21.46a2.825 2.825 0 0 1-1.61.44 1.85 1.85 0 0 1-1.278-.314L13.793 12z" fill="#FF3D00" />
                  </svg>
                  <div className="text-left">
                    <div className="text-[7px] uppercase tracking-wider text-neutral-400 font-semibold leading-none">
                      GET IT ON
                    </div>
                    <div className="text-[10px] font-bold text-white tracking-tight leading-tight mt-0.5">
                      Google Play
                    </div>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-black border border-white/15 hover:border-[#40E0D0]/50 hover:bg-neutral-950 transition-all cursor-pointer">
                  <svg className="w-4 h-4 shrink-0 fill-white" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.38c.62-.75 1.04-1.8 0.93-2.85-.9.04-1.99.6-2.63 1.35-.57.65-1.06 1.71-.93 2.73 1 .08 2.02-.48 2.63-1.23z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-[7px] uppercase tracking-wider text-neutral-400 font-semibold leading-none">
                      Download on
                    </div>
                    <div className="text-[10px] font-bold text-white tracking-tight leading-tight mt-0.5">
                      App Store
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ------------------------------------------------------------- */}
          {/* CARD 2: JUST – PLUG & CHARGE */}
          {/* ------------------------------------------------------------- */}
          <div
            ref={card1Ref}
            id="card-plug-charge"
            onClick={() => setActiveCardIndex(1)}
            className={`w-full rounded-3xl bg-white border p-6 sm:p-8 lg:p-10 flex flex-col md:flex-row items-center justify-between gap-8 sm:gap-12 shadow-lg transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
              cardsInView[1]
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-12 sm:translate-y-16 scale-[0.98]"
            } ${
              activeCardIndex === 1
                ? "border-[#40E0D0] ring-2 ring-[#40E0D0]/30 shadow-2xl"
                : "border-neutral-200 hover:border-neutral-300 hover:shadow-xl"
            }`}
          >
            {/* Left / Top Visual: Real-World Vehicle Plug & Charge Photograph */}
            <div className="relative w-full md:w-auto flex flex-col items-center justify-center shrink-0">
              <div className="relative w-[280px] sm:w-[320px] lg:w-[340px] h-[200px] sm:h-[230px] rounded-2xl overflow-hidden border border-neutral-200 shadow-md bg-neutral-950 select-none group hover:scale-[1.02] transition-transform duration-500">
                <Image
                  src="/images/hero-slide-hyperbolt.jpg"
                  alt="Real EV Connected to Evion Fast Charger with CCS2 Gun"
                  fill
                  className="object-cover object-[62%_55%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

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

            {/* Right / Content */}
            <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left justify-center space-y-3.5 sm:space-y-4">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-neutral-900 uppercase">
                JUST – PLUG &amp; CHARGE
              </h3>

              <p className="text-sm sm:text-base text-neutral-600 font-normal leading-relaxed max-w-md">
                Avoid The Hassle Just Start Charging!
              </p>

              <div className="pt-2 flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#008b7e]">
                <CheckCircle2 className="w-4 h-4 text-[#008b7e]" />
                <span>Ready in 3 seconds upon plug-in</span>
              </div>
            </div>
          </div>

          {/* ------------------------------------------------------------- */}
          {/* CARD 3: RFID KEY */}
          {/* ------------------------------------------------------------- */}
          <div
            ref={card2Ref}
            id="card-rfid-key"
            onClick={() => setActiveCardIndex(2)}
            className={`w-full rounded-3xl bg-white border p-6 sm:p-8 lg:p-10 flex flex-col md:flex-row items-center justify-between gap-8 sm:gap-12 shadow-lg transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
              cardsInView[2]
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-12 sm:translate-y-16 scale-[0.98]"
            } ${
              activeCardIndex === 2
                ? "border-[#40E0D0] ring-2 ring-[#40E0D0]/30 shadow-2xl"
                : "border-neutral-200 hover:border-neutral-300 hover:shadow-xl"
            }`}
          >
            {/* Left / Top Visual: Simple, Minimalist RFID Key */}
            <div className="relative w-full md:w-auto flex flex-col items-center justify-center shrink-0 min-w-[280px]">
              {/* Micro Switcher Pills */}
              <div className="flex items-center justify-center gap-1.5 mb-2 z-10">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setRfidStyle("fob");
                  }}
                  className={`px-3 py-0.5 rounded-full text-[9px] font-bold tracking-wide transition-all cursor-pointer ${rfidStyle === "fob"
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
                  className={`px-3 py-0.5 rounded-full text-[9px] font-bold tracking-wide transition-all cursor-pointer ${rfidStyle === "card"
                    ? "bg-[#40E0D0] text-black shadow-xs font-black scale-105"
                    : "bg-neutral-100 text-neutral-600 hover:text-neutral-900"
                    }`}
                >
                  Smart Card
                </button>
              </div>

              {/* Option 1: Minimalist Fob */}
              {rfidStyle === "fob" && (
                <svg
                  viewBox="0 0 160 180"
                  className="w-full h-full max-h-[190px] select-none filter drop-shadow-[0_16px_30px_rgba(0,0,0,0.85)] group-hover:scale-105 transition-transform duration-500 ease-out"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="simpleSteelRingVertical" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#ffffff" />
                      <stop offset="35%" stopColor="#cbd5e1" />
                      <stop offset="70%" stopColor="#64748b" />
                      <stop offset="100%" stopColor="#334155" />
                    </linearGradient>
                    <linearGradient id="simpleMatteFobVertical" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#222630" />
                      <stop offset="40%" stopColor="#13161c" />
                      <stop offset="100%" stopColor="#0a0c10" />
                    </linearGradient>
                  </defs>

                  <ellipse cx="80" cy="162" rx="46" ry="6" fill="rgba(0,0,0,0.55)" />

                  <circle
                    cx="80"
                    cy="30"
                    r="17"
                    stroke="url(#simpleSteelRingVertical)"
                    strokeWidth="2.8"
                    fill="none"
                  />

                  <rect x="76" y="40" width="8" height="10" rx="2" fill="url(#simpleSteelRingVertical)" />

                  <rect
                    x="46"
                    y="46"
                    width="68"
                    height="106"
                    rx="24"
                    fill="url(#simpleMatteFobVertical)"
                    stroke="rgba(255,255,255,0.12)"
                    strokeWidth="1.2"
                  />

                  <circle cx="80" cy="58" r="4" fill="#090b0e" stroke="url(#simpleSteelRingVertical)" strokeWidth="1" />

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

              {/* Option 2: Smart Card */}
              {rfidStyle === "card" && (
                <svg
                  viewBox="0 0 200 150"
                  className="w-full h-full max-h-[190px] select-none filter drop-shadow-[0_16px_30px_rgba(0,0,0,0.85)] group-hover:scale-105 transition-transform duration-500 ease-out"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="simpleMatteCardVertical" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#1e222b" />
                      <stop offset="50%" stopColor="#111318" />
                      <stop offset="100%" stopColor="#08090c" />
                    </linearGradient>
                    <linearGradient id="cardSteelRingVertical" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#ffffff" />
                      <stop offset="50%" stopColor="#94a3b8" />
                      <stop offset="100%" stopColor="#475569" />
                    </linearGradient>
                  </defs>

                  <ellipse cx="100" cy="136" rx="72" ry="7" fill="rgba(0,0,0,0.55)" />

                  <circle
                    cx="28"
                    cy="28"
                    r="14"
                    stroke="url(#cardSteelRingVertical)"
                    strokeWidth="2.2"
                    fill="none"
                  />

                  <rect
                    x="16"
                    y="18"
                    width="168"
                    height="106"
                    rx="12"
                    fill="url(#simpleMatteCardVertical)"
                    stroke="rgba(255,255,255,0.12)"
                    strokeWidth="1.2"
                  />

                  <circle cx="28" cy="28" r="3.5" fill="#08090c" stroke="url(#cardSteelRingVertical)" strokeWidth="1" />

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

            {/* Right / Content */}
            <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left justify-center space-y-3.5 sm:space-y-4">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-neutral-900 uppercase">
                RFID KEY
              </h3>

              <p className="text-sm sm:text-base text-neutral-600 font-normal leading-relaxed max-w-md">
                Connect Your Vehicle Tap Your RFID Key To Start
              </p>

              <div className="pt-2 flex items-center gap-2 text-xs sm:text-sm font-semibold text-neutral-700">
                <Radio className="w-4 h-4 text-[#008b7e]" />
                <span>Tap to start • Offline ready</span>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 3. BOTTOM GUIDANCE & BULLETS */}
        {/* ========================================================================= */}
        <div className="pt-4 sm:pt-6 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 max-w-4xl mx-auto w-full">
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
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${activeCardIndex === s.id ? "w-8 bg-[#40E0D0]" : "w-2 bg-neutral-300 hover:bg-neutral-400"
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}