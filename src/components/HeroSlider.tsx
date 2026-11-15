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
            src="/images/hero-station-charger-mobile-v3.jpg"
            alt="Evion EV Fast Charger Station in Kerala - Sunset golden hour charging under illuminated canopy with coconut palms"
            fill
            priority
            quality={95}
            sizes="100vw"
            className="object-cover object-center scale-100"
          />
        </div>

        {/* Desktop & Tablet View: 16:9 Landscape Station Architecture Shot */}
        <div className="hidden md:block absolute inset-0">
          <Image
            src="/images/hero-station-desktop.jpg"
            alt="Evion EV Fast Charging Station Hub in Kerala - Highway charging stop with electric vehicles charging under canopy with coconut palms"
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
