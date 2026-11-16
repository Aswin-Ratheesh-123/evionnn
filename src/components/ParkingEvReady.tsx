"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

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
      className="bg-[#121212] py-4 sm:py-6 lg:py-8 px-4 sm:px-6 lg:px-8 select-none w-full flex items-center justify-center"
    >
      <div className="max-w-[1360px] w-full mx-auto bg-white rounded-3xl sm:rounded-[36px] lg:rounded-[40px] p-6 sm:p-8 lg:p-10 xl:p-12 text-neutral-900 shadow-2xl border border-neutral-100 overflow-hidden">
        {/* Desktop Split Grid / Mobile Stack */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-center">
          
          {/* Left Column: Heading, Value Props, Stats, CTAs */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Headline with Staggered Entrance & Green Sweep */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-neutral-900 leading-[1.1] mb-3">
              <span
                className={`block transition-all duration-700 ease-out delay-100 ${
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

            {/* Subtitle */}
            <p
              className={`text-sm sm:text-base lg:text-lg text-neutral-600 font-normal leading-relaxed mb-6 max-w-xl transition-all duration-700 ease-out delay-300 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              Make a smart, future-ready investment with proven passive returns without operational headaches. 100% turnkey execution from KSEB approvals to automated revenue payouts.
            </p>

            {/* Key Investment Metrics Chips (Clean 4-stat grid) */}
            <div
              className={`grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-2.5 sm:gap-3 mb-6 sm:mb-8 transition-all duration-700 ease-out delay-400 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <div className="bg-neutral-50 rounded-2xl p-3 border border-neutral-100 flex flex-col">
                <span className="text-[11px] text-neutral-500 font-medium">Starting At</span>
                <span className="text-lg sm:text-xl font-bold text-neutral-900 tracking-tight">₹24L +</span>
              </div>
              <div className="bg-neutral-50 rounded-2xl p-3 border border-neutral-100 flex flex-col">
                <span className="text-[11px] text-neutral-500 font-medium">Payback</span>
                <span className="text-lg sm:text-xl font-bold text-[#009e4f] tracking-tight">18–24 Mo.</span>
              </div>
              <div className="bg-neutral-50 rounded-2xl p-3 border border-neutral-100 flex flex-col">
                <span className="text-[11px] text-neutral-500 font-medium">Space Needed</span>
                <span className="text-lg sm:text-xl font-bold text-neutral-900 tracking-tight">550 sq.ft</span>
              </div>
              <div className="bg-neutral-50 rounded-2xl p-3 border border-neutral-100 flex flex-col">
                <span className="text-[11px] text-neutral-500 font-medium">Fast DC Guns</span>
                <span className="text-lg sm:text-xl font-bold text-neutral-900 tracking-tight">30-120 kW</span>
              </div>
            </div>

            {/* CTAs */}
            <div
              className={`flex flex-wrap items-center gap-3 transition-all duration-700 ease-out delay-500 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <Link
                href="/franchise"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-[#00d26a] hover:bg-[#00bc5e] text-black font-bold text-sm sm:text-base transition-all duration-200 hover:scale-[1.02] active:scale-95 shadow-md shadow-emerald-500/15"
              >
                <span>Apply for Franchise</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </Link>

              <a
                href="#kerala-map"
                className="inline-flex items-center justify-center px-5 sm:px-6 py-3 sm:py-3.5 rounded-full bg-white hover:bg-neutral-100 text-neutral-800 border border-neutral-300 font-semibold text-sm sm:text-base transition-all duration-200 active:scale-95"
              >
                Explore Locations
              </a>
            </div>
          </div>

          {/* Right Column: Visual Station Showcase Card (Clean Image, Zero Text Overlays) */}
          <div
            className={`lg:col-span-6 relative transition-all duration-700 ease-out delay-300 ${
              isInView ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"
            }`}
          >
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-neutral-950 aspect-[16/10] sm:aspect-[16/9] lg:aspect-[4/3] xl:aspect-[16/11] border border-neutral-200 shadow-xl group">
              <Image
                src="/images/hero-slide-franchise-hub.jpg"
                alt="Evion EV charging franchise hub in Kerala"
                fill
                className="object-cover object-center brightness-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}