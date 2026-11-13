"use client";

import React, { useEffect, useRef, useState } from "react";
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
      {/* 1. Animated Atmospheric Radial Glow (Breathing Ambient Pulse) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_75%_55%_at_50%_35%,rgba(0,210,106,0.12),rgba(0,0,0,0))] animate-aura-pulse pointer-events-none" />

      {/* Subtle Star/Grid Ambient Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.025] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
        {/* 2. Floating Mission Eyebrow Badge with Pulse */}
        <div
          className={`inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-[11px] sm:text-xs font-semibold text-neutral-300 tracking-wider uppercase mb-8 sm:mb-10 backdrop-blur-md transition-all duration-700 ease-out ${
            isInView
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 -translate-y-4 scale-95"
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#00d26a] animate-pulse" />
          <span>The Evion Mission</span>
          <span className="text-white/20">•</span>
          <span className="text-[#00d26a] font-mono font-bold">2026</span>
        </div>

        {/* 3. Staggered Animated Headline Typography (Crisp & Sharp, Zero Blur) */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-bold tracking-tight leading-[1.14] sm:leading-[1.1] max-w-4xl text-center select-none">
          {/* Line 1: Building India's Most */}
          <span
            className={`block text-white/90 transition-all duration-700 ease-out delay-100 ${
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
            className={`block text-white/90 transition-all duration-700 ease-out delay-300 ${
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
          className={`mt-6 sm:mt-8 text-base sm:text-xl md:text-2xl font-light text-neutral-400 max-w-2xl mx-auto leading-relaxed transition-all duration-700 ease-out delay-[400ms] ${
            isInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }`}
        >
          Through{" "}
          <span className="text-white font-medium underline decoration-[#00d26a]/40 underline-offset-4 decoration-2">
            Technology
          </span>
          ,{" "}
          <span className="text-white font-medium underline decoration-[#00d26a]/40 underline-offset-4 decoration-2">
            Partnerships
          </span>
          , and{" "}
          <span className="text-white font-medium underline decoration-[#00d26a]/40 underline-offset-4 decoration-2">
            Strategic Expansion
          </span>
          .
        </p>

        {/* 5. Interactive 3-Pillar Glass Cards with Staggered Entrance & Hover Glow (Hidden on Mobile View) */}
        <div className="hidden md:grid md:grid-cols-3 gap-5 sm:gap-6 mt-14 sm:mt-18 w-full max-w-4xl">
          {/* Pillar 1: Technology */}
          <div
            className={`p-6 sm:p-7 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md text-left transition-all duration-500 ease-out hover:-translate-y-2 hover:border-[#00d26a]/50 hover:bg-white/[0.05] hover:shadow-[0_14px_35px_-10px_rgba(0,210,106,0.22)] group cursor-default ${
              isInView
                ? "opacity-100 translate-y-0 scale-100 delay-[550ms]"
                : "opacity-0 translate-y-10 scale-95"
            }`}
          >
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-[#00d26a]/15 group-hover:border-[#00d26a]/40 transition-all duration-300">
              <Zap className="w-5 h-5 text-[#00d26a] group-hover:scale-110 transition-transform" />
            </div>
            <div className="flex items-center justify-between mb-1">
              <h3 className="text-sm font-bold text-white tracking-wide group-hover:text-white transition-colors">
                Cutting-Edge Tech
              </h3>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold">
                OCPP 2.0
              </span>
            </div>
            <p className="text-xs text-neutral-400 mt-2 leading-relaxed group-hover:text-neutral-300 transition-colors">
              Smart cloud CMS, dynamic load balancing, and ultra-fast liquid-cooled DC charging hubs up to 240kW.
            </p>
          </div>

          {/* Pillar 2: Partnerships */}
          <div
            className={`p-6 sm:p-7 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md text-left transition-all duration-500 ease-out hover:-translate-y-2 hover:border-[#00d26a]/50 hover:bg-white/[0.05] hover:shadow-[0_14px_35px_-10px_rgba(0,210,106,0.22)] group cursor-default ${
              isInView
                ? "opacity-100 translate-y-0 scale-100 delay-[700ms]"
                : "opacity-0 translate-y-10 scale-95"
            }`}
          >
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-[#00d26a]/15 group-hover:border-[#00d26a]/40 transition-all duration-300">
              <Handshake className="w-5 h-5 text-[#00d26a] group-hover:scale-110 transition-transform" />
            </div>
            <div className="flex items-center justify-between mb-1">
              <h3 className="text-sm font-bold text-white tracking-wide group-hover:text-white transition-colors">
                Host Partnerships
              </h3>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold">
                85% Margin
              </span>
            </div>
            <p className="text-xs text-neutral-400 mt-2 leading-relaxed group-hover:text-neutral-300 transition-colors">
              Turn commercial real estate into high-yield recurring profit centers with turnkey setup and zero operational hassle.
            </p>
          </div>

          {/* Pillar 3: Strategic Expansion */}
          <div
            className={`p-6 sm:p-7 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md text-left transition-all duration-500 ease-out hover:-translate-y-2 hover:border-[#00d26a]/50 hover:bg-white/[0.05] hover:shadow-[0_14px_35px_-10px_rgba(0,210,106,0.22)] group cursor-default ${
              isInView
                ? "opacity-100 translate-y-0 scale-100 delay-[850ms]"
                : "opacity-0 translate-y-10 scale-95"
            }`}
          >
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-[#00d26a]/15 group-hover:border-[#00d26a]/40 transition-all duration-300">
              <TrendingUp className="w-5 h-5 text-[#00d26a] group-hover:scale-110 transition-transform" />
            </div>
            <div className="flex items-center justify-between mb-1">
              <h3 className="text-sm font-bold text-white tracking-wide group-hover:text-white transition-colors">
                Strategic Expansion
              </h3>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold">
                14 Districts
              </span>
            </div>
            <p className="text-xs text-neutral-400 mt-2 leading-relaxed group-hover:text-neutral-300 transition-colors">
              Arterial deployment along NH-66 &amp; NH-544 highway corridors across Kerala expanding nationwide.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
