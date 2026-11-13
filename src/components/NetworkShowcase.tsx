"use client";

import React, { useEffect, useRef, useState } from "react";
import { Zap, Radio } from "lucide-react";

interface NetworkShowcaseProps {
  onOpenCallbackModal: () => void;
}

export default function NetworkShowcase({ onOpenCallbackModal }: NetworkShowcaseProps) {
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
    const cardWidth = el.children[0]?.clientWidth || 280;
    const newIndex = Math.round(scrollLeft / (cardWidth + 16));
    if (newIndex >= 0 && newIndex <= 2 && newIndex !== activeCardIndex) {
      setActiveCardIndex(newIndex);
    }
  };

  return (
    <section
      ref={sectionRef}
      id="network-showcase"
      className="bg-[#121212] text-white pt-6 sm:pt-14 pb-16 sm:pb-28 px-3 sm:px-6 lg:px-8 select-none relative overflow-hidden flex flex-col justify-center min-h-[100dvh]"
    >
      {/* Ambient Radial Electric Green Aura */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_35%,rgba(0,210,106,0.08),transparent)] pointer-events-none" />

      <div className="max-w-[1360px] mx-auto w-full relative z-10 flex flex-col justify-center">
        {/* Top Header */}
        <div className="pb-4 sm:pb-8 border-b border-white/10">
          {/* Staggered Animated Headline */}
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight max-w-2xl leading-[1.15]">
            {/* Line 1: The Easiest & */}
            <span
              className={`block text-white/90 transition-all duration-700 ease-out delay-100 ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              The Easiest &amp;
            </span>

            {/* Line 2: Smarter Way to Charge with Green Sweep & Stop */}
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
                Smarter Way to Charge.
              </span>
            </span>
          </h2>
        </div>

        {/* Mobile Navigation Pills (< md only: 3-tab quick switcher) */}
        <div className="flex md:hidden items-center justify-center gap-2 pt-4 pb-2">
          {[
            { label: "Mobile App", id: 0 },
            { label: "Plug & Charge", id: 1 },
            { label: "RFID Key", id: 2 },
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

        {/* 3 Interactive Ways to Charge (Desktop Grid + Mobile Smooth Snap-Carousel) */}
        <div
          ref={carouselRef}
          onScroll={handleCarouselScroll}
          className="flex md:grid md:grid-cols-3 overflow-x-auto md:overflow-x-visible snap-x snap-mandatory gap-4 sm:gap-6 lg:gap-8 pt-3 sm:pt-8 pb-3 px-2 md:px-0 no-scrollbar touch-pan-x"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {/* Card 1: MOBILE APP */}
          <div
            className={`w-[85vw] max-w-[320px] shrink-0 snap-center md:w-auto md:shrink relative rounded-3xl bg-neutral-900/90 border border-white/10 hover:border-[#00d26a]/40 p-5 sm:p-8 flex flex-col items-center text-center justify-between min-h-[380px] sm:min-h-[460px] overflow-hidden group transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,210,106,0.18)] ${
              isInView
                ? "opacity-100 translate-y-0 delay-[350ms]"
                : "opacity-0 translate-y-8"
            }`}
          >
            {/* Ambient Bottom Green Glow */}
            <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-64 h-32 bg-[radial-gradient(ellipse_at_bottom,rgba(0,210,106,0.3),transparent_70%)] pointer-events-none group-hover:opacity-100 transition-opacity" />

            {/* Top Visual: Smartphone Mockup with Evion Green Gradient */}
            <div className="relative w-full h-36 sm:h-48 flex items-center justify-center">
              <div className="relative w-24 sm:w-32 h-36 sm:h-48 rounded-[22px] sm:rounded-[28px] bg-neutral-950 border-2 border-neutral-700/80 shadow-2xl p-1 flex flex-col items-center justify-between overflow-hidden group-hover:scale-105 transition-transform duration-500">
                {/* Dynamic Island Notch */}
                <div className="w-7 sm:w-9 h-2 sm:h-2.5 rounded-full bg-neutral-900 border border-neutral-800 z-20 mt-0.5 sm:mt-1" />

                {/* Evion Green Phone Screen */}
                <div className="absolute inset-1 rounded-[18px] sm:rounded-[24px] bg-gradient-to-b from-[#00d26a] via-[#00a852] to-[#042816] flex flex-col items-center justify-center p-2 text-white shadow-inner">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/15 backdrop-blur-md flex items-center justify-center mb-1 shadow-lg border border-white/25">
                    <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-white fill-white" />
                  </div>
                  <div className="text-white font-black tracking-widest text-[10px] sm:text-xs">
                    EVION
                  </div>
                  <div className="text-[6px] sm:text-[7px] tracking-[0.25em] text-white/80 font-mono font-bold">
                    CHARGING
                  </div>
                </div>

                {/* Bottom Home Indicator Bar */}
                <div className="w-10 sm:w-12 h-1 rounded-full bg-white/40 z-20 mb-1" />
              </div>
            </div>

            {/* Middle Content */}
            <div className="my-auto py-2">
              <h3 className="text-base sm:text-xl font-bold tracking-wider text-white uppercase mb-1.5 sm:mb-2">
                MOBILE APP
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 font-normal leading-relaxed max-w-[240px] mx-auto">
                Select The Charger Connect Your Vehicle Click Start Charging
              </p>
            </div>

            {/* Bottom Badges: Google Play & App Store */}
            <div className="flex items-center justify-center gap-2 sm:gap-2.5 pt-2 sm:pt-4 w-full">
              {/* Google Play */}
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 rounded-xl bg-black border border-white/15 hover:border-[#00d26a]/50 hover:bg-neutral-950 transition-all cursor-pointer">
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
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 rounded-xl bg-black border border-white/15 hover:border-[#00d26a]/50 hover:bg-neutral-950 transition-all cursor-pointer">
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

          {/* Card 2: JUST – PLUG & CHARGE */}
          <div
            className={`w-[85vw] max-w-[320px] shrink-0 snap-center md:w-auto md:shrink relative rounded-3xl bg-neutral-900/90 border border-white/10 hover:border-[#00d26a]/40 p-5 sm:p-8 flex flex-col items-center text-center justify-between min-h-[380px] sm:min-h-[460px] overflow-hidden group transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,210,106,0.18)] ${
              isInView
                ? "opacity-100 translate-y-0 delay-[450ms]"
                : "opacity-0 translate-y-8"
            }`}
          >
            {/* Ambient Bottom Green Glow */}
            <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-64 h-32 bg-[radial-gradient(ellipse_at_bottom,rgba(0,210,106,0.3),transparent_70%)] pointer-events-none group-hover:opacity-100 transition-opacity" />

            {/* Top Visual: AUTO CHARGE Illuminated Badge */}
            <div className="relative w-full h-36 sm:h-48 flex flex-col items-center justify-center">
              {/* Radial Glow Pulse */}
              <div className="absolute w-28 sm:w-36 h-28 sm:h-36 bg-[#00d26a]/25 rounded-full blur-2xl group-hover:bg-[#00d26a]/40 transition-colors pointer-events-none" />

              {/* Little EVION Tag on Top Right */}
              <div className="flex items-center gap-1 px-2 py-0.5 rounded-md bg-neutral-800/90 border border-[#00d26a]/40 text-[#00d26a] text-[8px] sm:text-[9px] font-mono font-bold tracking-widest uppercase mb-1.5 self-end mr-4 sm:mr-6 -rotate-3 shadow-md">
                <Zap className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-[#00d26a]" />
                <span>EVION</span>
              </div>

              {/* Main Slanted Glowing Auto Charge Pill */}
              <div className="relative -skew-x-12 px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg bg-gradient-to-r from-[#00d26a] via-[#00ff88] to-[#00d26a] text-black shadow-[0_0_35px_rgba(0,210,106,0.55)] border border-white/60 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                <span className="font-black italic text-base sm:text-xl tracking-wider text-neutral-950 select-none flex items-center gap-1.5">
                  <Zap className="w-4 h-4 sm:w-5 sm:h-5 fill-black stroke-black -skew-x-6" />
                  AUTO CHARGE
                </span>
              </div>

              {/* Active Indicator Tag */}
              <div className="mt-3 sm:mt-4 inline-flex items-center gap-1.5 text-[9px] sm:text-[10px] uppercase font-mono tracking-widest text-[#00d26a] bg-[#00d26a]/10 border border-[#00d26a]/30 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00d26a] animate-ping" />
                <span>Smart Autostart</span>
              </div>
            </div>

            {/* Middle Content */}
            <div className="my-auto py-2">
              <h3 className="text-base sm:text-xl font-bold tracking-wider text-white uppercase mb-1.5 sm:mb-2">
                JUST – PLUG &amp; CHARGE
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 font-normal leading-relaxed max-w-[240px] mx-auto">
                Avoid The Hassle Just Start Charging!
              </p>
            </div>

            {/* Bottom Status / Micro Action */}
            <div className="pt-2 sm:pt-4 flex items-center justify-center gap-2 text-[11px] sm:text-xs font-semibold text-emerald-400">
              <span>Ready in 3 seconds upon plug-in</span>
            </div>
          </div>

          {/* Card 3: RFID KEY */}
          <div
            className={`w-[85vw] max-w-[320px] shrink-0 snap-center md:w-auto md:shrink relative rounded-3xl bg-neutral-900/90 border border-white/10 hover:border-[#00d26a]/40 p-5 sm:p-8 flex flex-col items-center text-center justify-between min-h-[380px] sm:min-h-[460px] overflow-hidden group transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,210,106,0.18)] ${
              isInView
                ? "opacity-100 translate-y-0 delay-[550ms]"
                : "opacity-0 translate-y-8"
            }`}
          >
            {/* Ambient Bottom Green Glow */}
            <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-64 h-32 bg-[radial-gradient(ellipse_at_bottom,rgba(0,210,106,0.3),transparent_70%)] pointer-events-none group-hover:opacity-100 transition-opacity" />

            {/* Top Visual: RFID Key Fob with Lanyard Cord */}
            <div className="relative w-full h-36 sm:h-48 flex flex-col items-center justify-center">
              {/* Lanyard Cord from top */}
              <div className="absolute top-1 sm:top-2 w-1 sm:w-1.5 h-10 sm:h-14 bg-gradient-to-b from-neutral-600 via-neutral-700 to-neutral-800 -rotate-12 rounded-full shadow-lg" />

              {/* RFID Key Tag with Evion Green Gradient */}
              <div className="relative mt-6 sm:mt-8 w-16 sm:w-20 h-26 sm:h-32 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#00d26a] via-[#00a852] to-[#024021] shadow-[0_16px_36px_rgba(0,210,106,0.38)] border-2 border-white/30 flex flex-col items-center justify-between p-2 sm:p-2.5 -rotate-12 group-hover:rotate-0 group-hover:scale-105 transition-all duration-500">
                {/* Keyhole eyelet at top */}
                <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-neutral-950 border border-white/40 shadow-inner" />

                {/* Center Branding */}
                <div className="flex flex-col items-center text-center my-auto">
                  <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-white fill-white mb-0.5 sm:mb-1 drop-shadow" />
                  <div className="text-white font-black text-[10px] sm:text-[11px] tracking-wider leading-none">
                    EVION
                  </div>
                  <div className="text-[5px] sm:text-[6px] text-white/80 font-mono tracking-widest mt-0.5">
                    RFID
                  </div>
                </div>

                {/* Contactless Radio Icon */}
                <Radio className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white/90" />
              </div>
            </div>

            {/* Middle Content */}
            <div className="my-auto py-2">
              <h3 className="text-base sm:text-xl font-bold tracking-wider text-white uppercase mb-1.5 sm:mb-2">
                RFID KEY
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 font-normal leading-relaxed max-w-[240px] mx-auto">
                Connect Your Vehicle Tap Your RFID Key To Start
              </p>
            </div>

            {/* Bottom Status */}
            <div className="pt-2 sm:pt-4 flex items-center justify-center gap-2 text-[11px] sm:text-xs font-semibold text-neutral-400">
              <Radio className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-[#00d26a]" />
              <span>Tap to start • Offline ready</span>
            </div>
          </div>
        </div>

        {/* Mobile Swipe Guidance & Dot Indicators (< md only) */}
        <div className="flex md:hidden items-center justify-between px-2 pt-2 text-[11px] text-neutral-400">
          <span className="flex items-center gap-1.5 text-[#00d26a] font-medium text-[11px]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00d26a] animate-pulse" />
            <span>Swipe to explore all 3</span>
          </span>

          <div className="flex items-center gap-1.5">
            {[0, 1, 2].map((i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => scrollToCard(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeCardIndex === i
                    ? "w-6 bg-[#00d26a]"
                    : "w-1.5 bg-white/20"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
