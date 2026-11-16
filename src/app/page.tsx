"use client";

import React, { useState } from "react";
import HeroSlider from "@/components/HeroSlider";
import StatementSection from "@/components/StatementSection";
import NetworkShowcase from "@/components/NetworkShowcase";
import EvGrowthShowcase from "@/components/EvGrowthShowcase";
import ParkingEvReady from "@/components/ParkingEvReady";
import KeralaInteractiveMap from "@/components/KeralaInteractiveMap";
import CallbackBanner from "@/components/CallbackBanner";
import FaqSection from "@/components/FaqSection";
import AtherFooter from "@/components/AtherFooter";
import FranchiseModal from "@/components/FranchiseModal";
import CurvedNavbar from "@/components/CurvedNavbar";

export default function Home() {
  const [callbackModalOpen, setCallbackModalOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState("Kochi");

  return (
    <main className="min-h-screen bg-[#121212] text-neutral-900 selection:bg-[#40E0D0] selection:text-black">
      {/* Reference Curved Bottom Navbar (Positioned at Bottom Center) */}
      <CurvedNavbar onOpenCallbackModal={() => setCallbackModalOpen(true)} />

      {/* 1. Static Sticky Hero (Remains pinned at the top while Layer 2 rolls over it) */}
      <div className="sticky top-0 z-0 h-[100dvh] min-h-[100dvh] w-full overflow-hidden transform-gpu will-change-transform">
        <HeroSlider
          onOpenFranchiseModal={() => setCallbackModalOpen(true)}
          selectedCity={selectedCity}
        />
      </div>

      {/* 2. Statement Section (slides up over Hero, then scrolls naturally in document flow) */}
      <div className="relative z-10 min-h-[100dvh] w-full bg-[#121212] rounded-t-[32px] sm:rounded-t-[48px] lg:rounded-t-[56px] border-t border-x border-white/10 overflow-hidden flex flex-col justify-center transform-gpu will-change-transform">
        {/* Building India's Most Accessible EV Charging Network */}
        <StatementSection />
      </div>

      {/* 3. Network Showcase Section (White background showcase - directly UNDER Statement Section) */}
      <div id="network-showcase-wrapper" className="relative z-20 w-full h-[220vh] bg-white border-x border-neutral-200">
        <div className="sticky top-0 min-h-[100dvh] h-[100dvh] w-full bg-white overflow-hidden flex flex-col justify-center transform-gpu will-change-transform">
          {/* Charge on the go / The Easiest & Smarter Way to Charge */}
          <NetworkShowcase onOpenCallbackModal={() => setCallbackModalOpen(true)} />
        </div>
      </div>

      {/* 4. EV Growth Showcase Section (Directly UNDER Network Showcase - seamless continuous flow, does NOT overlay it) */}
      <div id="ev-growth-wrapper" className="relative z-20 w-full h-[190vh] bg-[#121212] border-x border-white/10">
        <div className="sticky top-0 min-h-[100dvh] h-[100dvh] w-full bg-[#121212] overflow-hidden flex flex-col justify-center transform-gpu will-change-transform">
          {/* Record Investment & Explosive EV Growth */}
          <EvGrowthShowcase onOpenCallbackModal={() => setCallbackModalOpen(true)} />
        </div>
      </div>

      {/* 5. Parking EV Ready Section (Directly UNDER EV Growth Showcase - seamless continuous flow, does NOT overlay it) */}
      <div className="relative z-20 min-h-[100dvh] w-full bg-[#121212] border-x border-white/10 overflow-hidden flex flex-col justify-center transform-gpu will-change-transform">
        {/* Become a Franchisee */}
        <ParkingEvReady onOpenCallbackModal={() => setCallbackModalOpen(true)} />
      </div>

      {/* 6. Kerala Map & Subsequent Sections */}
      <div className="relative z-20 bg-[#121212] border-t border-x border-white/10 overflow-hidden">
        {/* Find an Evion Grid near you (Interactive Kerala Map) */}
        <KeralaInteractiveMap
          selectedCity={selectedCity}
          onSelectCity={(city) => setSelectedCity(city)}
          onOpenCallbackModal={() => setCallbackModalOpen(true)}
        />

        {/* Wish to know more about Evion ? */}
        <CallbackBanner />

        {/* Frequently asked questions */}
        <FaqSection />

        {/* Ather Signature Footer */}
        <AtherFooter />
      </div>

      {/* Callback & Franchise Inquiry Modal */}
      <FranchiseModal
        isOpen={callbackModalOpen}
        onClose={() => setCallbackModalOpen(false)}
        selectedCity={selectedCity}
      />
    </main>
  );
}
