"use client";

import React, { useState } from "react";
import ChargeZoneHome from "@/components/ChargeZoneHome";
import FranchiseModal from "@/components/FranchiseModal";

export default function Home() {
  const [franchiseModalOpen, setFranchiseModalOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState("Kochi");

  return (
    <main className="min-h-screen bg-white text-neutral-900 selection:bg-[#00b4d8] selection:text-white">
      {/* Redesigned Homepage with exact layout & font style from reference image in ChargeZone color scheme */}
      <ChargeZoneHome onOpenFranchiseModal={() => setFranchiseModalOpen(true)} />

      {/* Interactive Franchise & Callback Modal */}
      <FranchiseModal
        isOpen={franchiseModalOpen}
        onClose={() => setFranchiseModalOpen(false)}
        selectedCity={selectedCity}
      />
    </main>
  );
}
