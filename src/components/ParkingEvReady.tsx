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
      <div
        className={`max-w-[1360px] w-full mx-auto bg-white rounded-3xl sm:rounded-[36px] lg:rounded-[40px] p-6 sm:p-8 lg:p-10 xl:p-12 text-neutral-900 shadow-2xl border border-neutral-100 overflow-hidden transition-all duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${isInView
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-12 sm:translate-y-16 scale-[0.98]"
          }`}
      >
        {/* Desktop Split Grid / Mobile Stack */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-center">

          {/* Left Column: Heading, Value Props, Stats, CTAs */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Kinetic Masked Headline with Optical Deblur */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-neutral-900 leading-[1.1] mb-3">
              <span className="block overflow-hidden py-1">
                <span
                  className={`block transition-all duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)] delay-150 ${isInView ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-full blur-[8px]"
                    }`}
                >
                  Become a
                </span>
              </span>
              <span className="block overflow-hidden py-1 mt-0.5 sm:mt-1">
                <span
                  className={`block transition-all duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)] delay-300 ${isInView ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-full blur-[8px]"
                    }`}
                >
                  <span
                    className={
                      isInView
                        ? "inline-block animate-green-sweep-dark drop-shadow-[0_2px_14px_rgba(0,180,216,0.35)]"
                        : "text-neutral-900"
                    }
                  >
                    Franchisee
                  </span>
                </span>
              </span>
            </h2>

            {/* Subtitle with Lens Rack Focus */}
            <p
              className={`text-sm sm:text-base lg:text-lg text-neutral-600 font-normal leading-relaxed mb-8 max-w-xl transition-all duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)] delay-[450ms] ${isInView ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-4 blur-[6px]"
                }`}
            >
              Make a smart, <span className="text-neutral-900 font-semibold">future-ready investment</span> with proven <span className="text-[#0077e6] font-semibold underline decoration-[#00b4d8]/50 underline-offset-2">passive returns</span> without operational headaches. <span className="text-neutral-900 font-semibold">100% turnkey execution</span> from KSEB approvals to automated revenue payouts.
            </p>

            {/* CTAs */}
            <div
              className={`flex flex-wrap items-center gap-3 transition-all duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)] delay-[600ms] ${isInView ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-6 scale-95"
                }`}
            >
              <Link
                href="/franchise"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-gradient-to-r from-[#0052cc] via-[#0084e8] to-[#00b4d8] hover:from-[#0047b3] hover:to-[#009dc2] text-white font-bold text-sm sm:text-base transition-all duration-200 hover:scale-[1.03] active:scale-95 shadow-[0_0_24px_rgba(0,180,216,0.35)] ring-2 ring-[#00b4d8]/30"
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
            className={`lg:col-span-6 relative transition-all duration-700 ease-out delay-300 ${isInView ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"
              }`}
          >
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-neutral-950 aspect-[16/10] sm:aspect-[16/9] lg:aspect-[4/3] xl:aspect-[16/11] border border-neutral-200 shadow-xl group">
              <Image
                src="/images/evion-station-family-hub.jpg"
                alt="EVION DC Dual Gun CCS fast charging franchise hub in Kerala"
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