"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Radio, CheckCircle2, Zap } from "lucide-react";

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
  const [rfidStyle, setRfidStyle] = useState<"card" | "fob">("card");

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
      {/* Ambient Radial Electric Cyan Aura */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_35%,rgba(0,180,216,0.08),transparent)] pointer-events-none" />

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
            className={`w-full rounded-3xl bg-white border p-6 sm:p-8 lg:p-10 flex flex-col md:flex-row items-center justify-between gap-8 sm:gap-12 shadow-lg transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${cardsInView[0]
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-12 sm:translate-y-16 scale-[0.98]"
              } ${activeCardIndex === 0
                ? "border-[#00b4d8] ring-2 ring-[#00b4d8]/30 shadow-2xl"
                : "border-neutral-200 hover:border-neutral-300 hover:shadow-xl"
              }`}
          >
            {/* Left / Top Visual: Real Clean EV Charging App Interface with Authentic iPhone Aspect Ratio & Live Animations */}
            <div className="relative w-full md:w-auto flex items-center justify-center shrink-0 py-1 sm:py-2">
              {/* Phone Outer Chassis with Balanced Height & True iPhone Styling */}
              <div className="relative w-[172px] sm:w-[184px] h-[330px] sm:h-[352px] rounded-[34px] sm:rounded-[38px] bg-[#121316] border-[2.5px] border-neutral-800 ring-1 ring-white/20 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5),0_0_28px_rgba(0,180,216,0.2)] p-1.5 sm:p-2 flex flex-col justify-between overflow-hidden group hover:scale-[1.02] transition-transform duration-500">
                {/* Physical Side Buttons for Realistic iPhone Chassis */}
                <div className="absolute -left-[3.5px] top-16 w-[2px] h-3 bg-neutral-700 rounded-l-xs pointer-events-none" />
                <div className="absolute -left-[3.5px] top-22 w-[2px] h-6 bg-neutral-700 rounded-l-xs pointer-events-none" />
                <div className="absolute -left-[3.5px] top-30 w-[2px] h-6 bg-neutral-700 rounded-l-xs pointer-events-none" />
                <div className="absolute -right-[3.5px] top-22 w-[2px] h-9 bg-neutral-700 rounded-r-xs pointer-events-none" />

                {/* Clean App Screen with True iPhone Bezels */}
                <div className="relative w-full h-full rounded-[28px] sm:rounded-[32px] bg-[#f4f6f8] text-neutral-900 overflow-hidden flex flex-col justify-between p-1.5 sm:p-2 select-none shadow-inner">
                  {/* iOS Status Bar with Dynamic Island */}
                  <div className="w-full flex items-center justify-between text-[6.5px] sm:text-[7px] font-semibold text-neutral-800 px-0.5 pt-0.5">
                    <span className="tracking-tight font-medium">9:40 PM</span>

                    {/* Dynamic Island Pill with Camera & Sensor */}
                    <div className="w-12 sm:w-14 h-3 sm:h-3.5 bg-black rounded-full mx-auto shadow-sm flex items-center justify-between px-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#181829] ring-1 ring-[#282845] relative">
                        <div className="w-0.5 h-0.5 bg-[#40407a] rounded-full absolute top-0.5 left-0.5" />
                      </div>
                      <div className="w-1 h-1 rounded-full bg-[#0a0a0a]" />
                    </div>

                    <div className="flex items-center gap-1 text-[6.5px]">
                      <svg className="w-2.5 h-2" viewBox="0 0 12 10" fill="currentColor">
                        <rect x="0" y="7" width="2" height="3" rx="0.5" />
                        <rect x="3" y="5" width="2" height="5" rx="0.5" />
                        <rect x="6" y="3" width="2" height="7" rx="0.5" />
                        <rect x="9" y="0" width="2" height="10" rx="0.5" />
                      </svg>
                      {/* Live Animated Battery Icon */}
                      <div className="w-3 h-1.5 border border-neutral-700 rounded-[2px] p-[1px] flex items-center relative">
                        <div className="w-1.5 h-full bg-[#00b4d8] rounded-[0.5px] animate-pulse" />
                        <div className="w-[1px] h-1 bg-neutral-700 rounded-r-[0.5px] absolute -right-[1.5px] top-1/2 -translate-y-1/2" />
                      </div>
                    </div>
                  </div>

                  {/* VIEW A: DASHBOARD */}
                  {phoneScreenTab === "dashboard" && (
                    <div className="flex-1 flex flex-col justify-between pt-0.5">
                      {/* Top App Header with Notification & Profile */}
                      <div className="w-full flex items-center justify-between px-0.5 mt-0.5">
                        <div className="w-3.5 h-3.5 rounded-md bg-white shadow-xs border border-neutral-200/80 flex flex-col items-center justify-center gap-[1.5px] p-0.5 cursor-pointer hover:bg-neutral-50 transition-colors">
                          <span className="w-2 h-[1px] bg-neutral-800 rounded-full" />
                          <span className="w-2 h-[1px] bg-neutral-800 rounded-full" />
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="relative w-3.5 h-3.5 rounded-md bg-white shadow-xs border border-neutral-200/80 flex items-center justify-center text-[7px] text-neutral-600 cursor-pointer hover:bg-neutral-50">
                            🔔
                            <span className="absolute top-0.5 right-0.5 w-1 h-1 bg-amber-500 rounded-full ring-1 ring-white animate-pulse" />
                          </div>
                          <div className="w-3.5 h-3.5 rounded-full bg-gradient-to-tr from-amber-400 to-orange-500 border border-white shadow-xs flex items-center justify-center text-[6px] font-bold text-white overflow-hidden cursor-pointer">
                            <span>👦</span>
                          </div>
                        </div>
                      </div>

                      {/* Vehicle Title & Live Stall */}
                      <div className="text-left px-0.5 mt-0.5">
                        <div className="text-[8.5px] sm:text-[9.5px] font-black text-neutral-900 tracking-tight leading-tight">
                          Tesla Model S Plaid
                        </div>
                        <div className="text-[5px] sm:text-[5.5px] font-mono text-neutral-400 leading-none mt-0.5">
                          Evion Fast Network • Stall 02
                        </div>
                      </div>

                      {/* Vehicle Graphic with Animated Live Electric Charging Cable */}
                      <div className="relative w-full h-12 sm:h-14 my-0.5 flex items-center justify-center">
                        <svg viewBox="0 0 190 70" className="w-full h-full drop-shadow-sm select-none" fill="none">
                          <ellipse cx="95" cy="62" rx="80" ry="5.5" fill="rgba(15,23,42,0.18)" />
                          <ellipse cx="95" cy="61" rx="60" ry="3.5" fill="rgba(15,23,42,0.28)" />

                          {/* Animated High-Voltage Charging Cable & Electric Current */}
                          {/* 1. Ambient Glow Aura Cable */}
                          <path
                            d="M 10 47 C 22 43, 34 43, 44 47"
                            stroke="#00b4d8"
                            strokeWidth="4"
                            strokeLinecap="round"
                            opacity="0.35"
                            className="animate-pulse"
                          />
                          {/* 2. Solid Base Cable */}
                          <path
                            d="M 10 47 C 22 43, 34 43, 44 47"
                            stroke="#0077b6"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                          />
                          {/* 3. Animated High-Speed Electric Pulse Stream */}
                          <path
                            d="M 10 47 C 22 43, 34 43, 44 47"
                            stroke="#ffffff"
                            strokeWidth="1.5"
                            strokeDasharray="3 3"
                            strokeLinecap="round"
                            className="animate-electric-cable"
                          />
                          {/* 4. Active Charge Port Spark & Radar Pulse */}
                          <circle cx="44" cy="47" r="4.5" fill="#00b4d8" className="animate-ping opacity-80" />
                          <circle cx="44" cy="47" r="3" fill="#38bdf8" />
                          <circle cx="44" cy="47" r="1.5" fill="#ffffff" />

                          {/* Car Body */}
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
                            stroke="#00b4d8"
                            strokeWidth="1.2"
                          />
                          {/* Front Wheel with Caliper */}
                          <g transform="translate(42, 55)">
                            <circle cx="0" cy="0" r="10.5" fill="#090d16" />
                            <circle cx="0" cy="0" r="9" fill="#1e293b" stroke="#334155" strokeWidth="1" />
                            <rect x="-3" y="-7.5" width="6" height="3" rx="1" fill="#ef4444" />
                            <circle cx="0" cy="0" r="6" fill="#0f172a" stroke="#cbd5e1" strokeWidth="1.2" />
                            <circle cx="0" cy="0" r="2.5" fill="#e2e8f0" />
                          </g>
                          {/* Rear Wheel with Caliper */}
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

                      {/* 2-Column Live Widgets: Battery & Climate */}
                      <div className="grid grid-cols-2 gap-1 w-full">
                        {/* Battery Widget with Live Pulse & Sequential Charging Indicator */}
                        <div className="bg-white rounded-lg p-1.5 shadow-xs border border-neutral-200/80 flex flex-col justify-between text-left relative overflow-hidden group/battery">
                          <div className="absolute top-0 right-0 w-8 h-8 bg-[#00b4d8]/10 rounded-full blur-md pointer-events-none" />
                          <div className="flex items-center justify-between text-[5px] text-neutral-400 font-bold leading-none">
                            <span>Battery</span>
                            <div className="flex items-center gap-0.5">
                              <span className="relative flex h-1 w-1">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                                <span className="relative inline-flex rounded-full h-1 w-1 bg-emerald-500" />
                              </span>
                              <span className="text-[4.5px] font-bold text-emerald-600 font-mono tracking-wider">LIVE</span>
                            </div>
                          </div>

                          <div className="flex items-center gap-1 my-0.5">
                            <div className="flex items-center gap-[2px]">
                              <span className="w-1.5 h-3 rounded-[1px] bg-[#00b4d8] shadow-[0_0_4px_rgba(0,180,216,0.35)]" />
                              <span className="w-1.5 h-3 rounded-[1px] bg-[#00b4d8] shadow-[0_0_4px_rgba(0,180,216,0.35)]" />
                              <span className="w-1.5 h-3 rounded-[1px] bg-[#00b4d8] shadow-[0_0_4px_rgba(0,180,216,0.35)]" />
                              {/* Pulsing Active 4th Charging Segment */}
                              <span className="w-1.5 h-3 rounded-[1px] bg-[#00b4d8]/35 border border-[#00b4d8]/60 animate-pulse" />
                            </div>
                            <div className="flex items-baseline ml-auto">
                              <span className="text-[10px] sm:text-[11px] font-black text-neutral-900 font-mono leading-none">
                                80%
                              </span>
                            </div>
                          </div>

                          <div className="flex items-center justify-between text-[4.5px] font-medium leading-none pt-0.5 border-t border-neutral-100">
                            <span className="text-neutral-500 font-mono">180kW</span>
                            <span className="text-[#0077b6] font-bold flex items-center gap-0.5">
                              Fast ↗
                            </span>
                          </div>
                        </div>

                        {/* Climate Widget with Animated Continuous Slow Spinning Snowflake */}
                        <div className="bg-white rounded-lg p-1.5 shadow-xs border border-neutral-200/80 flex flex-col justify-between text-left relative overflow-hidden group/climate">
                          <div className="flex items-center justify-between text-[5px] text-neutral-400 font-bold leading-none">
                            <span className="flex items-center gap-0.5">❄ Climate</span>
                            <span className="text-[5px] text-neutral-600 font-mono">21°C</span>
                          </div>

                          <div className="flex items-center justify-between my-0.5">
                            {/* Animated Rotating Snowflake */}
                            <div className="w-4 h-4 rounded-full bg-[#00b4d8]/15 text-[#0077b6] flex items-center justify-center text-[7.5px] font-bold shadow-xs">
                              <span className="inline-block animate-slow-spin">❄</span>
                            </div>
                            <div className="flex items-center gap-1 px-1 py-0.5 rounded-full bg-neutral-100 text-[5.5px] font-bold text-neutral-800 shadow-inner">
                              <span className="text-neutral-400">−</span>
                              <span className="font-mono">21°</span>
                              <span className="text-neutral-400">+</span>
                            </div>
                          </div>

                          <div className="flex items-center justify-between text-[4.5px] font-semibold leading-none pt-0.5 border-t border-neutral-100">
                            <span className="text-[#0077b6] flex items-center gap-0.5">
                              <span className="w-1 h-1 rounded-full bg-[#00b4d8] animate-pulse" />
                              Active
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Charging Port Widget with Active Radar Ping Animation */}
                      <div className="w-full bg-white rounded-lg p-1.5 shadow-xs border border-neutral-200/80 flex items-center justify-between mt-0.5 hover:border-[#00b4d8]/40 transition-colors">
                        <div className="flex items-center gap-1">
                          <div className="w-4 h-4 rounded-md bg-[#00b4d8]/15 flex items-center justify-center text-[7.5px] text-[#0077b6] shadow-xs">
                            🔌
                          </div>
                          <div className="text-left">
                            <div className="text-[6.5px] sm:text-[7px] font-bold text-neutral-900 leading-tight">
                              Charging port
                            </div>
                            <div className="text-[4.5px] sm:text-[5px] text-neutral-400 leading-none mt-0.5 font-mono">
                              CCS2 Fast DC Gun
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="relative flex h-1.5 w-1.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00b4d8] opacity-75" />
                            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#0077b6]" />
                          </span>
                          <span className="text-[6px] text-[#0077b6] font-bold">Active</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* VIEW B: MAP */}
                  {phoneScreenTab === "map" && (
                    <div className="flex-1 flex flex-col justify-between pt-0.5 text-left">
                      <div className="flex items-center justify-between px-0.5">
                        <span className="text-[7px] font-bold text-neutral-800 flex items-center gap-1">
                          <span>‹</span> Grid Map
                        </span>
                        <span className="text-[7px] text-neutral-400">♡</span>
                      </div>

                      <div className="relative w-full h-18 sm:h-20 bg-[#e8edf2] rounded-lg overflow-hidden my-0.5 border border-neutral-200">
                        <svg viewBox="0 0 160 80" className="w-full h-full" fill="none">
                          <path d="M 0 35 Q 60 15 160 45" stroke="#ffffff" strokeWidth="8" />
                          <path d="M 40 0 Q 70 50 120 80" stroke="#ffffff" strokeWidth="6" />
                          {/* Animated Dashed Route Line */}
                          <path
                            d="M 25 38 Q 65 24 130 52"
                            stroke="#00b4d8"
                            strokeWidth="2.5"
                            strokeDasharray="4 3"
                            className="animate-electric-cable"
                          />
                          {/* Destination Station Pin with Radar Pulse */}
                          <circle cx="130" cy="52" r="6" fill="#ef4444" className="animate-ping opacity-60" />
                          <circle cx="130" cy="52" r="4.5" fill="#ef4444" />
                          <circle cx="130" cy="52" r="1.5" fill="#ffffff" />
                          <rect x="20" y="32" width="10" height="7" rx="2" fill="#0077b6" />
                        </svg>
                      </div>

                      <div className="bg-white rounded-lg p-1.5 shadow-xs border border-neutral-200/80">
                        <div className="flex items-center justify-between text-[6.5px] font-bold text-neutral-900 mb-0.5">
                          <span>Boost Charge</span>
                          <span className="text-[5.5px] text-[#0077e6] font-mono">180kW • Available</span>
                        </div>
                        <div className="grid grid-cols-2 gap-1 text-[5px] text-neutral-500">
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

                  {/* Tab Switcher & Dynamic Control Bar */}
                  <div className="w-full bg-white rounded-full p-1 shadow-xs border border-neutral-200/80 flex items-center justify-around mt-1">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setPhoneScreenTab("dashboard");
                      }}
                      aria-label="Dashboard Screen"
                      className={`w-5 h-5 rounded-full flex items-center justify-center text-[8px] transition-all cursor-pointer relative ${
                        phoneScreenTab === "dashboard"
                          ? "bg-gradient-to-r from-[#0052cc] to-[#00b4d8] text-white shadow-md scale-105"
                          : "text-neutral-400 hover:text-neutral-700"
                      }`}
                    >
                      {phoneScreenTab === "dashboard" && (
                        <span className="animate-ping absolute inset-0 rounded-full bg-[#00b4d8] opacity-35" />
                      )}
                      <span className="relative z-10">⚡</span>
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setPhoneScreenTab("map");
                      }}
                      aria-label="Map Screen"
                      className={`w-5 h-5 rounded-full flex items-center justify-center text-[8px] transition-all cursor-pointer relative ${
                        phoneScreenTab === "map"
                          ? "bg-gradient-to-r from-[#0052cc] to-[#00b4d8] text-white shadow-md scale-105"
                          : "text-neutral-400 hover:text-neutral-700"
                      }`}
                    >
                      <span className="relative z-10">📍</span>
                    </button>
                  </div>

                  {/* iOS Home Indicator Bar */}
                  <div className="w-12 sm:w-16 h-0.5 rounded-full bg-neutral-900/35 mx-auto mt-0.5" />
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

              {/* Feature Highlights */}
              <div className="flex flex-col gap-2 pt-1 text-left text-xs sm:text-sm text-neutral-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00b4d8] shrink-0" />
                  <span>Real-time battery SOC monitoring &amp; 180kW speed telemetry</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00b4d8] shrink-0" />
                  <span>Interactive station locator with instant stall reservation</span>
                </div>
              </div>

              {/* Bottom Badges: Google Play & App Store */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5 pt-2">
                <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-black border border-white/15 hover:border-[#00b4d8]/50 hover:bg-neutral-950 transition-all cursor-pointer">
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

                <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-black border border-white/15 hover:border-[#00b4d8]/50 hover:bg-neutral-950 transition-all cursor-pointer">
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
            className={`w-full rounded-3xl bg-white border p-6 sm:p-8 lg:p-10 flex flex-col md:flex-row items-center justify-between gap-8 sm:gap-12 shadow-lg transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${cardsInView[1]
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-12 sm:translate-y-16 scale-[0.98]"
              } ${activeCardIndex === 1
                ? "border-[#00b4d8] ring-2 ring-[#00b4d8]/30 shadow-2xl"
                : "border-neutral-200 hover:border-neutral-300 hover:shadow-xl"
              }`}
          >
            {/* Left / Top Visual: Real-World Evion Fast Charging Scene */}
            <div className="relative w-full md:w-auto flex flex-col items-center justify-center shrink-0">
              <div className="relative w-[280px] sm:w-[320px] lg:w-[340px] h-[210px] sm:h-[240px] rounded-2xl overflow-hidden border border-neutral-200/90 shadow-xl bg-neutral-950 select-none group hover:scale-[1.02] transition-transform duration-500">
                <Image
                  src="/images/evion-family-fast-charging-1.jpg"
                  alt="Real EV Connected to Evion DC Fast Charger with Family"
                  fill
                  sizes="(max-width: 640px) 280px, (max-width: 1024px) 320px, 340px"
                  className="object-cover object-center"
                  priority
                />
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

              <div className="pt-2 flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#0077e6]">
                <CheckCircle2 className="w-4 h-4 text-[#0077e6]" />
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
            className={`w-full rounded-3xl bg-white border p-6 sm:p-8 lg:p-10 flex flex-col md:flex-row items-center justify-between gap-8 sm:gap-12 shadow-lg transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${cardsInView[2]
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-12 sm:translate-y-16 scale-[0.98]"
              } ${activeCardIndex === 2
                ? "border-[#00b4d8] ring-2 ring-[#00b4d8]/30 shadow-2xl"
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
                    setRfidStyle("card");
                  }}
                  className={`px-3 py-0.5 rounded-full text-[9px] font-bold tracking-wide transition-all cursor-pointer ${rfidStyle === "card"
                    ? "bg-gradient-to-r from-[#0052cc] to-[#00b4d8] text-white shadow-xs font-black scale-105"
                    : "bg-neutral-100 text-neutral-600 hover:text-neutral-900"
                    }`}
                >
                  Evion Card
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setRfidStyle("fob");
                  }}
                  className={`px-3 py-0.5 rounded-full text-[9px] font-bold tracking-wide transition-all cursor-pointer ${rfidStyle === "fob"
                    ? "bg-gradient-to-r from-[#0052cc] to-[#00b4d8] text-white shadow-xs font-black scale-105"
                    : "bg-neutral-100 text-neutral-600 hover:text-neutral-900"
                    }`}
                >
                  Minimal Fob
                </button>
              </div>

              {/* Option 1: Smart Card (Default - Official EVION Dual RFID Smart Cards) */}
              {rfidStyle === "card" && (
                <div className="relative w-[280px] sm:w-[320px] h-[210px] sm:h-[230px] flex items-center justify-center select-none group-hover:scale-105 transition-transform duration-500 ease-out">
                  {/* Subtle Ambient Electric Cyan Glow */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,180,216,0.15),transparent_70%)] blur-lg pointer-events-none" />
                  <Image
                    src="/images/evion-rfid-card-transparent.png"
                    alt="Official EVION Dual RFID Smart Cards"
                    width={1024}
                    height={652}
                    className="w-auto h-full max-h-[190px] sm:max-h-[210px] object-contain drop-shadow-[0_16px_28px_rgba(0,0,0,0.18)] relative z-10"
                    priority
                  />
                </div>
              )}

              {/* Option 2: Minimalist Fob (Official EVION Dual RFID Fobs) */}
              {rfidStyle === "fob" && (
                <div className="relative w-[240px] sm:w-[270px] h-[210px] sm:h-[230px] flex items-center justify-center select-none group-hover:scale-105 transition-transform duration-500 ease-out">
                  {/* Subtle Ambient Electric Cyan Glow */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,180,216,0.15),transparent_70%)] blur-lg pointer-events-none" />
                  <Image
                    src="/images/evion-rfid-fob-transparent.png"
                    alt="Official EVION Dual RFID Key Fobs"
                    width={731}
                    height={931}
                    className="w-auto h-full max-h-[200px] sm:max-h-[220px] object-contain drop-shadow-[0_16px_28px_rgba(0,0,0,0.15)] relative z-10"
                    priority
                  />
                </div>
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
                <Radio className="w-4 h-4 text-[#0077e6]" />
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
            <span className="w-2 h-2 rounded-full bg-[#00b4d8]" />
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
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${activeCardIndex === s.id ? "w-8 bg-gradient-to-r from-[#0052cc] to-[#00b4d8]" : "w-2 bg-neutral-300 hover:bg-neutral-400"
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}