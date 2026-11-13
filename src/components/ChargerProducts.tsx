"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Zap, CheckCircle2, ArrowRight } from "lucide-react";

interface ChargerProductsProps {
  onOpenModal: () => void;
}

export default function ChargerProducts({ onOpenModal }: ChargerProductsProps) {
  const [activeCharger, setActiveCharger] = useState<number>(0);

  const chargers = [
    {
      name: "Evion HyperBolt 240kW",
      category: "Ultra-Fast DC Supercharger",
      badge: "Flagship Highway Totem",
      tagline: "20% to 80% charge in 15 minutes.",
      image: "/images/hero-slide-hyperbolt.jpg",
      power: "240 kW",
      connector: "Dual CCS2 (Liquid Cooled Option)",
      voltage: "200V – 1000V DC Architecture",
      efficiency: "> 96.5% Peak Efficiency",
      weatherproof: "IP65 (Engineered for Heavy Kerala Monsoons)",
      features: [
        "Dynamic Power Sharing: 240kW single car or 120kW + 120kW dual car",
        "10-inch sunlight-readable touch display with English/Malayalam UI",
        "OCPP 1.6J & OCPP 2.0.1 certified backend connectivity",
        "Integrated surge protection, ground fault detector & emergency stop",
        "RFID tap reader, QR payment & Plug & Charge (ISO 15118)"
      ]
    },
    {
      name: "Evion CityCharge 120kW / 60kW",
      category: "Commercial DC Fast Charger",
      badge: "Most Popular Franchise Model",
      tagline: "The workhorse of Kerala city plazas and highway pitstops.",
      image: "/images/hero-slide-ather-style.jpg",
      power: "120 kW / 60 kW",
      connector: "Dual CCS2 Guns",
      voltage: "150V – 1000V Wide Voltage",
      efficiency: "> 95.8% Efficiency",
      weatherproof: "IP55 / IP65 Corrosion Resistant",
      features: [
        "Charges a standard EV (Tata Nexon, MG ZS) in 35-45 minutes",
        "Compact footprint occupying less than 6 sq.ft floor area",
        "4G LTE + Ethernet dual redundancy for 99.9% online uptime",
        "Real-time remote diagnostics and OTA firmware upgrades",
        "Custom vinyl branding with your franchise business name"
      ]
    },
    {
      name: "Evion Destination AC 22kW Pro",
      category: "Smart Destination Wallbox",
      badge: "Hospitality & Eco-Resorts",
      tagline: "Premium overnight charging for Kerala’s luxury tourist retreats.",
      image: "/images/hero-slide-franchise-hub.jpg",
      power: "22 kW 3-Phase",
      connector: "Type 2 Socket / Tethered Cable",
      voltage: "415V AC ± 15%",
      efficiency: "> 99% Efficiency",
      weatherproof: "IP65 Weatherproof & IK10 Impact Proof",
      features: [
        "Adds ~100 km of driving range in under 2 hours",
        "Low capital expenditure and minimal electrical modifications",
        "Guest access control via QR code, RFID, or hotel room key card",
        "Dynamic load management prevents tripping resort transformers",
        "Silent fanless cooling with ambient LED halo indicators"
      ]
    }
  ];

  return (
    <section id="chargers" className="py-20 md:py-28 bg-[#f7f7f8] text-neutral-900 border-b border-neutral-200">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-neutral-800 text-xs font-bold uppercase tracking-wider mb-4 border border-neutral-200">
            <Zap className="w-3.5 h-3.5 text-[#00d26a]" />
            <span>Industrial Hardware Lineup</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-black mb-4">
            Engineered for High Reliability & Tropical Monsoon Durability
          </h2>
          <p className="text-base sm:text-lg text-neutral-600">
            Certified to Indian & international automotive standards. IP65 enclosures specifically sealed against Kerala’s humidity and heavy monsoon rains.
          </p>
        </div>

        {/* Ather Style Tab Selector */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {chargers.map((charger, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCharger(idx)}
              className={`px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-bold transition-all ${
                activeCharger === idx
                  ? "bg-black text-white shadow-md scale-105"
                  : "bg-white text-neutral-700 hover:text-black border border-neutral-200 hover:border-neutral-400"
              }`}
            >
              <span>{charger.name}</span>
            </button>
          ))}
        </div>

        {/* Showcase Card */}
        <div className="bg-white border border-neutral-200 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Image Box */}
            <div className="lg:col-span-6 relative aspect-video rounded-2xl overflow-hidden border border-neutral-200 bg-neutral-900">
              <Image
                src={chargers[activeCharger].image}
                alt={chargers[activeCharger].name}
                fill
                className="object-cover object-center"
              />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs">
                <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-white font-mono font-bold">
                  {chargers[activeCharger].power}
                </span>
                <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-white font-medium">
                  {chargers[activeCharger].weatherproof}
                </span>
              </div>
            </div>

            {/* Specs */}
            <div className="lg:col-span-6 space-y-5">
              <div className="flex items-center gap-2">
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-neutral-100 text-neutral-800 font-bold border border-neutral-200">
                  {chargers[activeCharger].badge}
                </span>
                <span className="text-xs text-neutral-500 font-medium">
                  {chargers[activeCharger].category}
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-black">
                  {chargers[activeCharger].name}
                </h3>
                <p className="text-sm text-neutral-600 mt-1">
                  {chargers[activeCharger].tagline}
                </p>
              </div>

              {/* 4 Pills */}
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 rounded-xl bg-[#f7f7f8] border border-neutral-200/60">
                  <div className="text-neutral-500 text-[10px] uppercase font-bold">Connector Type</div>
                  <div className="text-black font-bold mt-0.5">{chargers[activeCharger].connector}</div>
                </div>
                <div className="p-3.5 rounded-xl bg-[#f7f7f8] border border-neutral-200/60">
                  <div className="text-neutral-500 text-[10px] uppercase font-bold">Voltage Range</div>
                  <div className="text-black font-bold mt-0.5">{chargers[activeCharger].voltage}</div>
                </div>
                <div className="p-3.5 rounded-xl bg-[#f7f7f8] border border-neutral-200/60">
                  <div className="text-neutral-500 text-[10px] uppercase font-bold">Efficiency</div>
                  <div className="text-black font-bold mt-0.5">{chargers[activeCharger].efficiency}</div>
                </div>
                <div className="p-3.5 rounded-xl bg-[#f7f7f8] border border-neutral-200/60">
                  <div className="text-neutral-500 text-[10px] uppercase font-bold">Enclosure Protection</div>
                  <div className="text-emerald-700 font-bold mt-0.5">{chargers[activeCharger].weatherproof}</div>
                </div>
              </div>

              {/* Technical features */}
              <div className="space-y-2 pt-1">
                {chargers[activeCharger].features.map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-2 text-xs text-neutral-700">
                    <CheckCircle2 className="w-4 h-4 text-[#00d26a] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="pt-2">
                <button
                  onClick={onOpenModal}
                  className="px-6 py-3 rounded-full bg-black text-white hover:bg-neutral-800 font-bold text-xs shadow-sm flex items-center space-x-2 transition-transform hover:scale-105 active:scale-95"
                >
                  <span>Request Hardware Quotation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
