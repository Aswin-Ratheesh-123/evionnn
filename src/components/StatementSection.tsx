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
      className="relative bg-[#121212] text-white min-h-[100dvh] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 text-center rounded-t-[32px] sm:rounded-t-[48px] lg:rounded-t-[56px] overflow-hidden flex flex-col justify-center items-center"
    >
      {/* 0. Cinematic Background Station Imagery (Responsive: Dedicated Mobile Portrait + Desktop Landscape) */}
      <div className="absolute inset-0 z-0">
        {/* Mobile View (< md): Dedicated 9:16 Portrait Fast Charging Station Shot */}
        <div className="block md:hidden absolute inset-0">
          <Image
            src="/images/hero-slide-mobile.jpg"
            alt="Evion Fast EV Charging Network Mobile Portrait"
            fill
            priority
            quality={95}
            sizes="100vw"
            className="object-cover object-bottom brightness-[0.85] contrast-[1.05]"
          />
          {/* Mobile Light Gradient Overlay for Top Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#121212]/65 via-black/25 to-[#121212]/75" />
        </div>

        {/* Desktop & Tablet View (>= md): 16:9 Landscape Evion Hyperbolt Station */}
        <div className="hidden md:block absolute inset-0">
          <Image
            src="/images/hero-slide-hyperbolt.jpg"
            alt="Evion Hyperbolt 240kW Fast EV Charging Network in Kerala"
            fill
            priority
            quality={95}
            sizes="100vw"
            className="object-cover object-center scale-100 brightness-[0.88] contrast-[1.05] transition-transform duration-1000 ease-out"
          />
          {/* Subtle Gradient Overlays for Ambient Balance without Darkness */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#121212]/45 via-black/20 to-[#121212]/60" />
        </div>
      </div>

      {/* 1. Animated Atmospheric Radial Glow (Breathing Ambient Pulse) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_75%_55%_at_50%_35%,rgba(0,210,106,0.15),transparent)] animate-aura-pulse pointer-events-none z-0" />

      {/* Subtle Star/Grid Ambient Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.025] pointer-events-none z-0" />

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
        {/* 2. Floating Mission Eyebrow Badge with Pulse */}
        <div
          className={`inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-black/45 border border-white/20 text-[11px] sm:text-xs font-semibold text-neutral-200 tracking-wider uppercase mb-8 sm:mb-10 backdrop-blur-md shadow-lg transition-all duration-700 ease-out ${
            isInView
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 -translate-y-4 scale-95"
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#00d26a] animate-pulse" />
          <span>The Evion Mission</span>
          <span className="text-white/30">•</span>
          <span className="text-[#00d26a] font-mono font-bold">2026</span>
        </div>

        {/* 3. Staggered Animated Headline Typography (Crisp & Sharp, Zero Blur) */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-bold tracking-tight leading-[1.14] sm:leading-[1.1] max-w-4xl text-center select-none drop-shadow-[0_4px_28px_rgba(0,0,0,0.85)]">
          {/* Line 1: Building India's Most */}
          <span
            className={`block text-white transition-all duration-700 ease-out delay-100 ${
              isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            Building India&apos;s Most
          </span>

          {/* Line 2: Accessible EV Charging with Electric Green Sweep & Stop */}
          <span
            className={`block my-1 sm:my-1.5 transition-all duration-700 ease-out delay-200 ${
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
              Accessible EV Charging
            </span>
          </span>

          {/* Line 3: Network */}
          <span
            className={`block text-white transition-all duration-700 ease-out delay-300 ${
              isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            Network
          </span>
        </h2>

        {/* 4. Animated Supporting Subline */}
        <p
          className={`mt-6 sm:mt-8 text-base sm:text-xl md:text-2xl font-light text-neutral-200 max-w-2xl mx-auto leading-relaxed drop-shadow-[0_2px_14px_rgba(0,0,0,0.8)] transition-all duration-700 ease-out delay-[400ms] ${
            isInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }`}
        >
          Through{" "}
          <span className="text-white font-medium underline decoration-[#00d26a]/60 underline-offset-4 decoration-2">
            Technology
          </span>
          ,{" "}
          <span className="text-white font-medium underline decoration-[#00d26a]/60 underline-offset-4 decoration-2">
            Partnerships
          </span>
          , and{" "}
          <span className="text-white font-medium underline decoration-[#00d26a]/60 underline-offset-4 decoration-2">
            Strategic Expansion
          </span>
          .
        </p>

        {/* 5. Interactive 3-Pillar Glass Cards with Staggered Entrance & Hover Glow (Hidden on Mobile View) */}
        <div className="hidden md:grid md:grid-cols-3 gap-5 sm:gap-6 mt-14 sm:mt-18 w-full max-w-4xl">
          {/* Pillar 1: Technology */}
          <div
            className={`p-6 sm:p-7 rounded-2xl bg-neutral-950/70 border border-white/15 backdrop-blur-xl text-left transition-all duration-500 ease-out hover:-translate-y-2 hover:border-[#00d26a]/60 hover:bg-neutral-950/85 hover:shadow-[0_16px_40px_rgba(0,210,106,0.22)] shadow-xl group cursor-default ${
              isInView
                ? "opacity-100 translate-y-0 scale-100 delay-[550ms]"
                : "opacity-0 translate-y-10 scale-95"
            }`}
          >
            <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-[#00d26a]/20 group-hover:border-[#00d26a]/50 transition-all duration-300">
              <Zap className="w-5 h-5 text-[#00d26a] group-hover:scale-110 transition-transform" />
            </div>
            <div className="flex items-center justify-between mb-1">
              <h3 className="text-sm font-bold text-white tracking-wide group-hover:text-white transition-colors">
                Cutting-Edge Tech
              </h3>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 font-bold">
                OCPP 2.0
              </span>
            </div>
            <p className="text-xs text-neutral-300 mt-2 leading-relaxed group-hover:text-white transition-colors">
              Smart cloud CMS, dynamic load balancing, and ultra-fast liquid-cooled DC charging hubs up to 240kW.
            </p>
          </div>

          {/* Pillar 2: Partnerships */}
          <div
            className={`p-6 sm:p-7 rounded-2xl bg-neutral-950/70 border border-white/15 backdrop-blur-xl text-left transition-all duration-500 ease-out hover:-translate-y-2 hover:border-[#00d26a]/60 hover:bg-neutral-950/85 hover:shadow-[0_16px_40px_rgba(0,210,106,0.22)] shadow-xl group cursor-default ${
              isInView
                ? "opacity-100 translate-y-0 scale-100 delay-[700ms]"
                : "opacity-0 translate-y-10 scale-95"
            }`}
          >
            <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-[#00d26a]/20 group-hover:border-[#00d26a]/50 transition-all duration-300">
              <Handshake className="w-5 h-5 text-[#00d26a] group-hover:scale-110 transition-transform" />
            </div>
            <div className="flex items-center justify-between mb-1">
              <h3 className="text-sm font-bold text-white tracking-wide group-hover:text-white transition-colors">
                Host Partnerships
              </h3>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 font-bold">
                85% Margin
              </span>
            </div>
            <p className="text-xs text-neutral-300 mt-2 leading-relaxed group-hover:text-white transition-colors">
              Turn commercial real estate into high-yield recurring profit centers with turnkey setup and zero operational hassle.
            </p>
          </div>

          {/* Pillar 3: Strategic Expansion */}
          <div
            className={`p-6 sm:p-7 rounded-2xl bg-neutral-950/70 border border-white/15 backdrop-blur-xl text-left transition-all duration-500 ease-out hover:-translate-y-2 hover:border-[#00d26a]/60 hover:bg-neutral-950/85 hover:shadow-[0_16px_40px_rgba(0,210,106,0.22)] shadow-xl group cursor-default ${
              isInView
                ? "opacity-100 translate-y-0 scale-100 delay-[850ms]"
                : "opacity-0 translate-y-10 scale-95"
            }`}
          >
            <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-[#00d26a]/20 group-hover:border-[#00d26a]/50 transition-all duration-300">
              <TrendingUp className="w-5 h-5 text-[#00d26a] group-hover:scale-110 transition-transform" />
            </div>
            <div className="flex items-center justify-between mb-1">
              <h3 className="text-sm font-bold text-white tracking-wide group-hover:text-white transition-colors">
                Strategic Expansion
              </h3>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 font-bold">
                14 Districts
              </span>
            </div>
            <p className="text-xs text-neutral-300 mt-2 leading-relaxed group-hover:text-white transition-colors">
              Arterial deployment along NH-66 &amp; NH-544 highway corridors across Kerala expanding nationwide.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
