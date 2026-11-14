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
    <main className="min-h-screen bg-[#121212] text-neutral-900 selection:bg-[#00d26a] selection:text-black">
      {/* Reference Curved Bottom Navbar (Positioned at Bottom Center) */}
      <CurvedNavbar onOpenCallbackModal={() => setCallbackModalOpen(true)} />

      {/* 1. Static Sticky Hero (Remains pinned at the top while Layer 2 rolls over it) */}
      <div className="sticky top-0 z-0 h-[100dvh] min-h-[100dvh] w-full overflow-hidden">
        <HeroSlider
          onOpenFranchiseModal={() => setCallbackModalOpen(true)}
          selectedCity={selectedCity}
        />
      </div>

      {/* 2. Statement Section (Sticky Layer 1: slides up over Hero, then stays pinned & static) */}
      <div className="sticky top-0 z-10 min-h-[100dvh] w-full bg-[#121212] rounded-t-[32px] sm:rounded-t-[48px] lg:rounded-t-[56px] border-t border-x border-white/10 overflow-hidden flex flex-col justify-center">
        {/* Never run out of charge statement */}
        <StatementSection />
      </div>

      {/* 3. Network Showcase Section (Sticky Layer 2: slides up over Statement, then stays pinned & static) */}
      <div className="sticky top-0 z-20 min-h-[100dvh] w-full bg-[#121212] rounded-t-[32px] sm:rounded-t-[48px] lg:rounded-t-[56px] border-t border-x border-white/10 overflow-hidden flex flex-col justify-center">
        {/* Charge on the go / The Easiest & Smarter Way to Charge */}
        <NetworkShowcase onOpenCallbackModal={() => setCallbackModalOpen(true)} />
      </div>

      {/* 4. EV Growth Showcase Section (Sticky Layer 3: slides up over Network Showcase, then stays pinned & static) */}
      <div className="sticky top-0 z-30 min-h-[100dvh] w-full bg-[#121212] rounded-t-[32px] sm:rounded-t-[48px] lg:rounded-t-[56px] border-t border-x border-white/10 overflow-hidden flex flex-col justify-center">
        {/* Record Investment & Explosive EV Growth */}
        <EvGrowthShowcase onOpenCallbackModal={() => setCallbackModalOpen(true)} />
      </div>

      {/* 5. Parking EV Ready Section (Sticky Layer 4: slides up over EV Growth Showcase, then stays pinned & static) */}
      <div className="sticky top-0 z-40 min-h-[100dvh] w-full bg-[#121212] rounded-t-[32px] sm:rounded-t-[48px] lg:rounded-t-[56px] border-t border-x border-white/10 overflow-hidden flex flex-col justify-center">
        {/* Become a Franchisee */}
        <ParkingEvReady onOpenCallbackModal={() => setCallbackModalOpen(true)} />
      </div>

      {/* 6. Kerala Map & Subsequent Sections (Layer 5: slides up over static Parking EV Ready) */}
      <div className="relative z-50 bg-[#121212] rounded-t-[32px] sm:rounded-t-[48px] lg:rounded-t-[56px] border-t border-x border-white/10 overflow-hidden">
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
