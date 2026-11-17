"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Zap, Handshake, TrendingUp, Sparkles } from "lucide-react";

export default function StatementSection() {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-white text-neutral-900 min-h-[100dvh] pt-20 pb-24 sm:py-24 px-4 sm:px-6 lg:px-8 text-center rounded-t-[32px] sm:rounded-t-[48px] lg:rounded-t-[56px] overflow-hidden flex flex-col justify-start sm:justify-center items-center"
    >
      {/* 0. Cinematic Background Station Imagery (Responsive: Dedicated Mobile Portrait + Desktop Landscape with Clean White Overlay) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Mobile View (< md): Dedicated 9:16 Portrait Fast Charging Station Shot */}
        <div className="block md:hidden absolute inset-0">
          <Image
            src="/images/statement-accessible-network-mobile.jpg"
            alt="EVION DC Fast Charging Network Hub - Ultra-modern accessible EV charging station"
            fill
            priority
            quality={95}
            sizes="100vw"
            className="object-cover object-bottom opacity-75 brightness-100"
          />
          {/* Luminous multi-stop gradient: ensures 100% crystal clear text legibility while keeping the station & EV car dramatic and vivid below */}
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/95 via-35% via-white/80 via-55% to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white via-white/40 to-transparent" />
        </div>

        {/* Desktop & Tablet View (>= md): 16:9 Landscape EV Charging Station Hub */}
        <div className="hidden md:block absolute inset-0">
          <Image
            src="/images/statement-accessible-network-desktop.jpg"
            alt="EVION Highway Superhub - India's most accessible fast EV charging station network"
            fill
            priority
            quality={95}
            sizes="100vw"
            className="object-cover object-center scale-100 opacity-15 brightness-110 contrast-95 transition-transform duration-1000 ease-out"
          />
          {/* Desktop White Wash Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/80 to-white" />
        </div>
      </div>

      {/* 1. Static Atmospheric Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_75%_55%_at_50%_35%,rgba(0,180,216,0.08),transparent)] pointer-events-none z-0" />

      {/* Subtle Star/Grid Ambient Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#0077b6_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.035] pointer-events-none z-0" />

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
        {/* Luminous Ambient Aura behind text: ensures sharp contrast against background visuals on all viewports */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[500px] h-[340px] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.95)_0%,rgba(255,255,255,0.8)_50%,transparent_80%)] sm:w-[680px] sm:h-[320px] sm:bg-[radial-gradient(ellipse_at_center,rgba(0,180,216,0.12),transparent_70%)] pointer-events-none -z-10" />

        {/* Kinetic Masked Headline Typography with Optical Deblur */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-[4.75rem] font-extrabold tracking-[-0.03em] leading-[1.12] sm:leading-[1.06] max-w-5xl text-center select-none drop-shadow-[0_1px_2px_rgba(255,255,255,0.85)]">
          {/* Line 1: Building India's Most Accessible */}
          <span className="block overflow-hidden py-1">
            <span
              className={`block text-neutral-950 transition-all duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)] delay-150 ${isInView
                  ? "opacity-100 translate-y-0 blur-0"
                  : "opacity-0 translate-y-full blur-[8px]"
                }`}
            >
              Building India&apos;s Most Accessible
            </span>
          </span>

          {/* Line 2: EV Charging Network with Vibrant Brand Gradient */}
          <span className="block overflow-hidden py-1 mt-0.5 sm:mt-1">
            <span
              className={`block transition-all duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)] delay-300 ${isInView
                  ? "opacity-100 translate-y-0 blur-0"
                  : "opacity-0 translate-y-full blur-[8px]"
                }`}
            >
              <span className="inline-block bg-gradient-to-r from-[#0047ba] via-[#0077e6] to-[#00b4d8] bg-clip-text text-transparent drop-shadow-[0_4px_24px_rgba(0,180,216,0.22)]">
                EV Charging Network
              </span>
            </span>
          </span>
        </h2>

        {/* 4. Animated Supporting Subline with Optical Rack Focus */}
        <p
          className={`mt-5 sm:mt-8 text-base sm:text-xl md:text-2xl font-medium sm:font-normal text-neutral-800 sm:text-neutral-600 max-w-2xl mx-auto leading-relaxed drop-shadow-[0_1px_3px_rgba(255,255,255,0.9)] transition-all duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)] delay-[500ms] ${isInView
              ? "opacity-100 translate-y-0 blur-0"
              : "opacity-0 translate-y-6 blur-[6px]"
            }`}
        >
          Through{" "}
          <span className="text-neutral-950 font-bold sm:font-semibold underline decoration-[#0077b6] underline-offset-4 decoration-2">
            Technology
          </span>
          ,{" "}
          <span className="text-neutral-950 font-bold sm:font-semibold underline decoration-[#0077b6] underline-offset-4 decoration-2">
            Partnerships
          </span>
          , and{" "}
          <span className="text-neutral-950 font-bold sm:font-semibold underline decoration-[#0077b6] underline-offset-4 decoration-2">
            Strategic Expansion
          </span>
          .
        </p>

        {/* 5. Interactive 3-Pillar Glass Cards with Staggered Entrance & Hover Glow (Hidden on Mobile View) */}
        <div className="hidden md:grid md:grid-cols-3 gap-5 sm:gap-6 mt-14 sm:mt-18 w-full max-w-4xl">
          {/* Pillar 1: Technology */}
          <div
            className={`p-6 sm:p-7 rounded-2xl bg-white border border-neutral-200/90 text-left transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 hover:border-[#00b4d8]/60 hover:shadow-[0_16px_40px_rgba(0,180,216,0.18)] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)] group cursor-default ${isInView
                ? "opacity-100 translate-y-0 scale-100 delay-[750ms]"
                : "opacity-0 translate-y-10 scale-95"
              }`}
          >
            <div className="w-10 h-10 rounded-xl bg-neutral-100 border border-neutral-200 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-[#0077b6]/10 group-hover:border-[#0077b6]/40 transition-all duration-300">
              <Zap className="w-5 h-5 text-[#0077b6] group-hover:scale-110 transition-transform" />
            </div>
            <div className="flex items-center justify-between mb-1">
              <h3 className="text-sm font-bold text-neutral-900 tracking-wide group-hover:text-black transition-colors">
                Cutting-Edge Tech
              </h3>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-blue-50 text-[#0077b6] border border-[#0077b6]/30 font-bold shadow-sm">
                OCPP 2.0
              </span>
            </div>
            <p className="text-xs text-neutral-600 mt-2 leading-relaxed group-hover:text-neutral-900 transition-colors">
              Smart cloud CMS, dynamic power sharing, and EVION DC Dual Gun CCS fast charging hubs up to 180kW.
            </p>
          </div>

          {/* Pillar 2: Partnerships */}
          <div
            className={`p-6 sm:p-7 rounded-2xl bg-white border border-neutral-200/90 text-left transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 hover:border-[#00b4d8]/60 hover:shadow-[0_16px_40px_rgba(0,180,216,0.18)] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)] group cursor-default ${isInView
                ? "opacity-100 translate-y-0 scale-100 delay-[900ms]"
                : "opacity-0 translate-y-10 scale-95"
              }`}
          >
            <div className="w-10 h-10 rounded-xl bg-neutral-100 border border-neutral-200 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-[#0077b6]/10 group-hover:border-[#0077b6]/40 transition-all duration-300">
              <Handshake className="w-5 h-5 text-[#0077b6] group-hover:scale-110 transition-transform" />
            </div>
            <div className="flex items-center justify-between mb-1">
              <h3 className="text-sm font-bold text-neutral-900 tracking-wide group-hover:text-black transition-colors">
                Host Partnerships
              </h3>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-blue-50 text-[#0077b6] border border-[#0077b6]/30 font-bold shadow-sm">
                85% Margin
              </span>
            </div>
            <p className="text-xs text-neutral-600 mt-2 leading-relaxed group-hover:text-neutral-900 transition-colors">
              Turn commercial real estate into high-yield recurring profit centers with turnkey setup and zero operational hassle.
            </p>
          </div>

          {/* Pillar 3: Strategic Expansion */}
          <div
            className={`p-6 sm:p-7 rounded-2xl bg-white border border-neutral-200/90 text-left transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 hover:border-[#00b4d8]/60 hover:shadow-[0_16px_40px_rgba(0,180,216,0.18)] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)] group cursor-default ${isInView
                ? "opacity-100 translate-y-0 scale-100 delay-[1050ms]"
                : "opacity-0 translate-y-10 scale-95"
              }`}
          >
            <div className="w-10 h-10 rounded-xl bg-neutral-100 border border-neutral-200 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-[#0077b6]/10 group-hover:border-[#0077b6]/40 transition-all duration-300">
              <TrendingUp className="w-5 h-5 text-[#0077b6] group-hover:scale-110 transition-transform" />
            </div>
            <div className="flex items-center justify-between mb-1">
              <h3 className="text-sm font-bold text-neutral-900 tracking-wide group-hover:text-black transition-colors">
                Strategic Expansion
              </h3>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-blue-50 text-[#0077b6] border border-[#0077b6]/30 font-bold shadow-sm">
                14 Districts
              </span>
            </div>
            <p className="text-xs text-neutral-600 mt-2 leading-relaxed group-hover:text-neutral-900 transition-colors">
              Arterial deployment along NH-66 &amp; NH-544 highway corridors across Kerala expanding nationwide.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
