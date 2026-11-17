"use client";

import React from "react";
import Image from "next/image";

interface HeroProps {
  onOpenFranchiseModal: () => void;
  selectedCity: string;
}

export default function HeroSlider({ onOpenFranchiseModal, selectedCity }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative w-full h-[100dvh] min-h-[100dvh] md:h-screen md:min-h-screen overflow-hidden bg-neutral-950 select-none"
    >
      {/* 1. Clean Background Image (Full Viewport, Zero Navigation Overlays, No White Strips) */}
      <div className="absolute inset-0 z-0">
        {/* Mobile View: Dedicated Portrait EV Fast Charger Station Hero Shot */}
        <div className="block md:hidden absolute inset-0">
          <Image
            src="/images/hero-station-charger-mobile-v4.jpg"
            alt="EVION DC Dual Gun CCS Fast Charging Station - Daylight mobile hero shot in Kerala with canopy and fast charging EV"
            fill
            priority
            quality={92}
            sizes="100vw"
            className="object-cover object-center scale-100"
          />
        </div>

        {/* Desktop & Tablet View: 16:9 Landscape Station Architecture Shot */}
        <div className="hidden md:block absolute inset-0">
          <Image
            src="/images/evion-station-family-desktop-wide.jpg"
            alt="EVION DC Dual Gun CCS Fast Charging Station Hub - High-speed EV charging canopy with illuminated halo logo"
            fill
            priority
            quality={95}
            sizes="100vw"
            className="object-cover object-center scale-100"
          />
        </div>

        {/* Subtle Top Vignette (Navbar legibility, zero bottom black blur or haze) */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/25 to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
