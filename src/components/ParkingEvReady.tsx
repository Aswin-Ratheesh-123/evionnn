"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface ParkingEvReadyProps {
  onOpenCallbackModal: () => void;
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
      className="bg-[#121212] pt-8 pb-20 sm:pb-28 px-4 sm:px-6 lg:px-8 select-none"
    >
      <div className="max-w-[1360px] mx-auto bg-white rounded-3xl sm:rounded-[40px] p-6 sm:p-12 lg:p-16 text-neutral-900 shadow-xl border border-neutral-100 overflow-hidden">
        {/* Header with Staggered Entrance & Green Sweep */}
        <div className="space-y-3 mb-8 sm:mb-10">
          {/* Staggered Animated Headline */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight max-w-2xl leading-[1.12]">
            {/* Line 1: Become a */}
            <span
              className={`block text-neutral-900 transition-all duration-700 ease-out delay-100 ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              Become a
            </span>

            {/* Line 2: Franchisee with Green Sweep & Stop */}
            <span
              className={`block mt-1 transition-all duration-700 ease-out delay-200 ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
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
            className={`text-sm sm:text-lg md:text-xl text-neutral-600 font-normal max-w-2xl leading-relaxed pt-1 transition-all duration-700 ease-out delay-300 ${
              isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            Make a smart, future-ready investment with proven Passive returns without operational headaches
          </p>
        </div>

        {/* Hero Visual Card (Ather Neighbourhood style) */}
        <div
          className={`relative rounded-3xl overflow-hidden bg-neutral-950 aspect-[16/9] sm:aspect-[21/9] border border-neutral-200 transition-all duration-700 ease-out delay-300 ${
            isInView ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"
          }`}
        >
          <Image
            src="/images/hero-slide-franchise-hub.jpg"
            alt="Evion EV charging franchise hub in Kerala"
            fill
            className="object-cover object-center brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

          {/* Overlay details */}
          <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 right-6 sm:right-10 flex flex-col sm:flex-row sm:items-end justify-between gap-6 text-white">
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
    </section>
  );
}
