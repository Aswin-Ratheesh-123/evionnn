"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
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

    // Active card determination
    let newIndex = 0;
    if (p >= 0.33 && p < 0.67) {
      newIndex = 1;
    } else if (p >= 0.67) {
      newIndex = 2;
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

    // Organic cubic easing for each segment so elements linger in center before sliding
    const easeInOut = (t: number) =>
      t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

    const t = easeInOut(p);
    const currentX = startX - t * (2 * stride);

    // Direct hardware-accelerated transform without CSS transition interference
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
      className="bg-[#121212] text-white pt-6 sm:pt-10 pb-8 sm:pb-12 px-3 sm:px-6 lg:px-8 select-none relative overflow-hidden flex flex-col justify-between h-full min-h-[100dvh]"
    >
      {/* Ambient Radial Electric Green Aura */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_35%,rgba(0,210,106,0.1),transparent)] pointer-events-none" />

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
                The Easiest &amp;
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
                  Smarter Way to Charge.
                </span>
              </span>
            </h2>
          </div>

          {/* Header Navigation: Pills & Progress Bar (Centered) */}
          <div className="flex flex-col items-center justify-center gap-2.5 w-full md:w-auto">
            {/* Pills Container (Centered) */}
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

            {/* Micro Progress Bar (Centered) */}
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

          {/* Sliding Track Translated Horizontally with Hardware Acceleration */}
          <div
            ref={trackRef}
            className="relative flex items-center gap-5 sm:gap-8 lg:gap-10 w-max will-change-transform"
          >
            {/* ------------------------------------------------------------- */}
            {/* CARD 1: MOBILE APP */}
            {/* ------------------------------------------------------------- */}
            <div
              onClick={() => scrollToCard(0)}
              className={`w-[85vw] max-w-[340px] sm:w-[380px] lg:w-[420px] shrink-0 relative rounded-3xl bg-neutral-900/95 border p-5 sm:p-7 flex flex-col items-center text-center justify-between min-h-[420px] sm:min-h-[480px] overflow-hidden group cursor-pointer transition-all duration-300 ease-out ${
                activeCardIndex === 0
                  ? "border-[#00d26a] ring-2 ring-[#00d26a]/30 shadow-[0_0_50px_rgba(0,210,106,0.25)] scale-[1.02] opacity-100"
                  : "border-white/10 opacity-55 scale-95 hover:opacity-80 hover:border-white/25"
              }`}
            >
              {/* Top Visual: Smartphone Mockup with Evion Green Gradient */}
              <div className="relative w-full h-40 sm:h-52 flex items-center justify-center my-2">
                <div className="relative w-28 sm:w-36 h-40 sm:h-52 rounded-[24px] sm:rounded-[30px] bg-neutral-950 border-2 border-neutral-700/80 shadow-2xl p-1 flex flex-col items-center justify-between overflow-hidden group-hover:scale-105 transition-transform duration-500">
                  {/* Dynamic Island Notch */}
                  <div className="w-8 sm:w-11 h-2 sm:h-2.5 rounded-full bg-neutral-900 border border-neutral-800 z-20 mt-1 flex items-center justify-end px-1.5">
                    <span className="w-1 h-1 rounded-full bg-[#00d26a] animate-ping" />
                  </div>

                  {/* Evion Green Phone Screen */}
                  <div className="absolute inset-1 rounded-[20px] sm:rounded-[26px] bg-gradient-to-b from-[#00d26a] via-[#00a852] to-[#042816] flex flex-col items-center justify-between p-2.5 text-white shadow-inner pt-6">
                    <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/15 backdrop-blur-md flex items-center justify-center mb-1 shadow-lg border border-white/25">
                      <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-white fill-white" />
                    </div>
                    <div>
                      <div className="text-white font-black tracking-widest text-xs sm:text-sm">
                        EVION
                      </div>
                      <div className="text-[7px] sm:text-[8px] tracking-[0.25em] text-white/80 font-mono font-bold">
                        CHARGING ACTIVE
                      </div>
                    </div>
                    {/* Mini Session Pill */}
                    <div className="px-2 py-0.5 rounded-full bg-black/40 border border-white/20 text-[8px] font-mono">
                      84% • 150 kW
                    </div>
                  </div>

                  {/* Bottom Home Indicator Bar */}
                  <div className="w-12 sm:w-14 h-1 rounded-full bg-white/40 z-20 mb-1" />
                </div>
              </div>

              {/* Middle Content */}
              <div className="my-auto py-2">
                <h3 className="text-base sm:text-xl font-bold tracking-wider text-white uppercase mb-1.5 sm:mb-2">
                  MOBILE APP
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 font-normal leading-relaxed max-w-[260px] mx-auto">
                  Select The Charger Connect Your Vehicle Click Start Charging
                </p>
              </div>

              {/* Bottom Badges: Google Play & App Store */}
              <div className="flex items-center justify-center gap-2 sm:gap-2.5 pt-2 sm:pt-4 w-full">
                {/* Google Play */}
                <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 rounded-xl bg-black border border-white/15 hover:border-[#00d26a]/50 hover:bg-neutral-950 transition-all">
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
                <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 rounded-xl bg-black border border-white/15 hover:border-[#00d26a]/50 hover:bg-neutral-950 transition-all">
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
              className={`w-[85vw] max-w-[340px] sm:w-[380px] lg:w-[420px] shrink-0 relative rounded-3xl bg-neutral-900/95 border p-5 sm:p-7 flex flex-col items-center text-center justify-between min-h-[420px] sm:min-h-[480px] overflow-hidden group cursor-pointer transition-all duration-300 ease-out ${
                activeCardIndex === 1
                  ? "border-[#00d26a] ring-2 ring-[#00d26a]/30 shadow-[0_0_50px_rgba(0,210,106,0.25)] scale-[1.02] opacity-100"
                  : "border-white/10 opacity-55 scale-95 hover:opacity-80 hover:border-white/25"
              }`}
            >
              {/* Top Visual: AUTO CHARGE Illuminated Badge */}
              <div className="relative w-full h-40 sm:h-52 flex flex-col items-center justify-center my-2">
                {/* Radial Glow Pulse */}
                <div className="absolute w-32 sm:w-44 h-32 sm:h-44 bg-[#00d26a]/25 rounded-full blur-2xl group-hover:bg-[#00d26a]/40 transition-colors pointer-events-none" />

                {/* Little EVION Tag on Top Right */}
                <div className="flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-neutral-800/90 border border-[#00d26a]/40 text-[#00d26a] text-[9px] sm:text-[10px] font-mono font-bold tracking-widest uppercase mb-2 self-end mr-6 -rotate-3 shadow-md">
                  <Zap className="w-3 h-3 fill-[#00d26a]" />
                  <span>EVION</span>
                </div>

                {/* Main Slanted Glowing Auto Charge Pill */}
                <div className="relative -skew-x-12 px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl bg-gradient-to-r from-[#00d26a] via-[#00ff88] to-[#00d26a] text-black shadow-[0_0_40px_rgba(0,210,106,0.6)] border border-white/60 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                  <span className="font-black italic text-lg sm:text-2xl tracking-wider text-neutral-950 select-none flex items-center gap-2">
                    <Zap className="w-5 h-5 sm:w-6 sm:h-6 fill-black stroke-black -skew-x-6" />
                    AUTO CHARGE
                  </span>
                </div>

                {/* Active Indicator Tag */}
                <div className="mt-4 inline-flex items-center gap-1.5 text-[9px] sm:text-[10px] uppercase font-mono tracking-widest text-[#00d26a] bg-[#00d26a]/10 border border-[#00d26a]/30 px-3 py-1 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00d26a] animate-ping" />
                  <span>ISO 15118 Autostart</span>
                </div>
              </div>

              {/* Middle Content */}
              <div className="my-auto py-2">
                <h3 className="text-base sm:text-xl font-bold tracking-wider text-white uppercase mb-1.5 sm:mb-2">
                  JUST – PLUG &amp; CHARGE
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 font-normal leading-relaxed max-w-[260px] mx-auto">
                  Avoid The Hassle Just Start Charging!
                </p>
              </div>

              {/* Bottom Status / Micro Action */}
              <div className="pt-2 sm:pt-4 flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold text-emerald-400">
                <CheckCircle2 className="w-4 h-4 text-[#00d26a]" />
                <span>Ready in 3 seconds upon plug-in</span>
              </div>
            </div>

            {/* ------------------------------------------------------------- */}
            {/* CARD 3: RFID KEY */}
            {/* ------------------------------------------------------------- */}
            <div
              onClick={() => scrollToCard(2)}
              className={`w-[85vw] max-w-[340px] sm:w-[380px] lg:w-[420px] shrink-0 relative rounded-3xl bg-neutral-900/95 border p-5 sm:p-7 flex flex-col items-center text-center justify-between min-h-[420px] sm:min-h-[480px] overflow-hidden group cursor-pointer transition-all duration-300 ease-out ${
                activeCardIndex === 2
                  ? "border-[#00d26a] ring-2 ring-[#00d26a]/30 shadow-[0_0_50px_rgba(0,210,106,0.25)] scale-[1.02] opacity-100"
                  : "border-white/10 opacity-55 scale-95 hover:opacity-80 hover:border-white/25"
              }`}
            >
              {/* Top Visual: RFID Key Fob with Lanyard Cord */}
              <div className="relative w-full h-40 sm:h-52 flex flex-col items-center justify-center my-2">
                {/* Lanyard Cord from top */}
                <div className="absolute top-0 sm:top-1 w-1 sm:w-1.5 h-12 sm:h-16 bg-gradient-to-b from-neutral-600 via-neutral-700 to-neutral-800 -rotate-12 rounded-full shadow-lg" />

                {/* RFID Key Tag with Evion Green Gradient */}
                <div className="relative mt-8 sm:mt-10 w-20 sm:w-24 h-28 sm:h-34 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#00d26a] via-[#00a852] to-[#024021] shadow-[0_16px_36px_rgba(0,210,106,0.4)] border-2 border-white/35 flex flex-col items-center justify-between p-2.5 sm:p-3 -rotate-12 group-hover:rotate-0 group-hover:scale-105 transition-all duration-500">
                  {/* Keyhole eyelet at top */}
                  <div className="w-3 sm:w-3.5 h-3 sm:h-3.5 rounded-full bg-neutral-950 border border-white/40 shadow-inner" />

                  {/* Center Branding */}
                  <div className="flex flex-col items-center text-center my-auto">
                    <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-white fill-white mb-1 drop-shadow" />
                    <div className="text-white font-black text-xs sm:text-sm tracking-wider leading-none">
                      EVION
                    </div>
                    <div className="text-[6px] sm:text-[7px] text-white/80 font-mono tracking-widest mt-0.5">
                      KEY FOB
                    </div>
                  </div>

                  {/* Contactless Radio Icon */}
                  <Radio className="w-4 h-4 text-white/90" />
                </div>
              </div>

              {/* Middle Content */}
              <div className="my-auto py-2">
                <h3 className="text-base sm:text-xl font-bold tracking-wider text-white uppercase mb-1.5 sm:mb-2">
                  RFID KEY
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 font-normal leading-relaxed max-w-[260px] mx-auto">
                  Connect Your Vehicle Tap Your RFID Key To Start
                </p>
              </div>

              {/* Bottom Status */}
              <div className="pt-2 sm:pt-4 flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold text-neutral-300">
                <Radio className="w-4 h-4 text-[#00d26a]" />
                <span>Tap to start • Offline ready</span>
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
