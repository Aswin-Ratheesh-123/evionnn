"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface ParkingEvReadyProps {
  onOpenCallbackModal?: () => void;
}

export default function ParkingEvReady({ onOpenCallbackModal }: ParkingEvReadyProps) {
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
        rootMargin: "0px 0px -40px 0px",
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
      id="parking-ready"
      className="bg-[#121212] pt-6 sm:pt-8 pb-16 sm:pb-24 lg:py-8 px-4 sm:px-6 lg:px-8 select-none flex flex-col justify-center w-full"
    >
      <div className="max-w-[1360px] mx-auto w-full bg-white rounded-3xl sm:rounded-[40px] p-6 sm:p-10 lg:p-12 xl:p-14 text-neutral-900 shadow-xl border border-neutral-100 overflow-hidden">
        {/* Responsive Grid: 2-Column Split on Desktop, Clean Stack on Mobile */}
        <div className="flex flex-col lg:grid lg:grid-cols-12 lg:gap-10 xl:gap-14 lg:items-center">
          
          {/* ========================================================= */}
          {/* LEFT: HEADLINE, SUBTITLE, DESCRIPTION & BUTTONS (DESKTOP) */}
          {/* ========================================================= */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-4 lg:space-y-6">
            {/* Staggered Animated Headline */}
            <h2 className="text-3xl sm:text-5xl lg:text-4xl xl:text-5xl font-bold tracking-tight max-w-2xl leading-[1.12]">
              <span
                className={`block text-neutral-900 transition-all duration-700 ease-out delay-100 ${
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              >
                Become a
              </span>

              <span
                className={`block mt-1 transition-all duration-700 ease-out delay-200 ${
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              >
                <span
                  className={
                    isInView
                      ? "inline-block animate-green-sweep-dark"
                      : "text-neutral-900"
                  }
                >
                  Franchisee
                </span>
              </span>
            </h2>

            {/* Supporting Subtitle */}
            <p
              className={`text-sm sm:text-lg lg:text-base xl:text-lg text-neutral-600 font-normal leading-relaxed pt-1 transition-all duration-700 ease-out delay-300 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              Make a smart, future-ready investment with proven Passive returns without operational headaches
            </p>

            {/* Desktop Description */}
            <p
              className={`hidden lg:block text-sm xl:text-base text-neutral-500 font-normal leading-relaxed transition-all duration-700 ease-out delay-400 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              Complete turnkey execution covering site feasibility, civil work, high-speed DC charging hardware, KSEB approvals, and automated 24/7 cloud revenue payouts.
            </p>

            {/* Desktop Action Buttons */}
            <div className="hidden lg:flex items-center gap-3 pt-2">
              <Link
                href="/franchise"
                className="px-6 py-3 rounded-full bg-neutral-900 hover:bg-black text-white font-bold text-xs sm:text-sm transition-transform hover:scale-105 active:scale-95 shadow-md inline-block cursor-pointer"
              >
                Apply for Franchise
              </Link>

              <a
                href="#kerala-map"
                className="px-6 py-3 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-800 font-semibold text-xs sm:text-sm transition-colors inline-block cursor-pointer"
              >
                Explore Locations
              </a>
            </div>
          </div>

          {/* ========================================================= */}
          {/* RIGHT: HERO VISUAL CARD (DESKTOP) & MOBILE STACK OVERLAY */}
          {/* ========================================================= */}
          <div className="lg:col-span-7 mt-6 lg:mt-0">
            <div
              className={`relative rounded-3xl overflow-hidden bg-neutral-950 aspect-[16/9] sm:aspect-[21/9] lg:aspect-[16/11] border border-neutral-200 transition-all duration-700 ease-out delay-300 shadow-md ${
                isInView ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"
              }`}
            >
              <Image
                src="/images/hero-slide-franchise-hub.jpg"
                alt="Evion EV charging franchise hub in Kerala"
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover object-center brightness-95"
              />

              {/* Mobile Overlay (Only on Mobile screens < lg) */}
              <div className="lg:hidden absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />

              <div className="lg:hidden absolute bottom-6 sm:bottom-10 left-6 sm:left-10 right-6 sm:right-10 flex flex-col sm:flex-row sm:items-end justify-between gap-6 text-white z-10">
                <div className="max-w-xl space-y-2">
                  <span className="text-xs uppercase font-bold tracking-wider text-emerald-400">
                    Evion High-Yield Franchise
                  </span>
                  <p className="text-xs sm:text-sm md:text-base text-neutral-300 font-light leading-relaxed">
                    Make a smart, future-ready investment with proven Passive returns without operational headaches. Complete turnkey execution covering site feasibility, civil work, high-speed DC charging hardware, KSEB approvals, and automated 24/7 cloud revenue payouts.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3 shrink-0">
                  <Link
                    href="/franchise"
                    className="px-6 py-3 rounded-full bg-white text-black hover:bg-neutral-100 font-bold text-xs sm:text-sm transition-transform hover:scale-105 active:scale-95 shadow-lg inline-block"
                  >
                    Apply for Franchise
                  </Link>

                  <a
                    href="#kerala-map"
                    className="px-6 py-3 rounded-full bg-black/60 hover:bg-black/80 text-white border border-white/30 backdrop-blur-md font-semibold text-xs sm:text-sm transition-colors"
                  >
                    Explore Locations
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
