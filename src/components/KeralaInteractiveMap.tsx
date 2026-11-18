"use client";

import React, { useState, useEffect, useRef } from "react";
import { Zap } from "lucide-react";

interface KeralaInteractiveMapProps {
  selectedCity?: string;
  onSelectCity?: (city: string) => void;
  onOpenCallbackModal?: () => void;
}

interface Station {
  id: string;
  name: string;
  city: string;
  coords: { x: number; y: number }; // Percentage on SVG Kerala map
  power: string;
  guns: number;
  available: number;
  address: string;
}

const KERALA_STATIONS: Station[] = [
  {
    id: "kochi-edappally",
    name: "Evion Superhub Edappally",
    city: "Kochi",
    coords: { x: 44, y: 55 },
    power: "180kW DC",
    guns: 4,
    available: 3,
    address: "Near Lulu Mall & Metro Pillar 382, NH-66 Kochi",
  },
  {
    id: "kochi-infopark",
    name: "Evion Tech Corridor",
    city: "Kochi",
    coords: { x: 48, y: 56 },
    power: "120kW DC",
    guns: 2,
    available: 2,
    address: "Infopark Phase 1 Entrance, Kakkanad, Kochi",
  },
  {
    id: "tvm-technopark",
    name: "Evion Flagship Technopark",
    city: "Thiruvananthapuram",
    coords: { x: 62, y: 88 },
    power: "180kW DC",
    guns: 4,
    available: 3,
    address: "Opposite Technopark Phase 3 Gate, NH-66 Trivandrum",
  },
  {
    id: "calicut-beach",
    name: "Evion Malabar Coast Hub",
    city: "Kozhikode",
    coords: { x: 32, y: 36 },
    power: "120kW DC",
    guns: 2,
    available: 1,
    address: "South Beach Promenade, Kozhikode",
  },
  {
    id: "thrissur-nh544",
    name: "Evion Mannuthy Superhub",
    city: "Thrissur",
    coords: { x: 46, y: 46 },
    power: "180kW DC",
    guns: 4,
    available: 4,
    address: "Highway Food Street Complex, NH-544 Mannuthy",
  },
  {
    id: "alappuzha-nh66",
    name: "Evion Cherthala Waypoint",
    city: "Alappuzha",
    coords: { x: 46, y: 64 },
    power: "120kW DC",
    guns: 2,
    available: 2,
    address: "Indian Oil Highway Plaza, Cherthala, NH-66",
  },
  {
    id: "munnar-highlands",
    name: "Evion Tea Highlands Hub",
    city: "Munnar",
    coords: { x: 65, y: 52 },
    power: "60kW DC + 22kW AC",
    guns: 3,
    available: 2,
    address: "Valley View Luxury Retreat, Pallivasal, Munnar",
  },
  {
    id: "wayanad-foothills",
    name: "Evion Wayanad Forest Gateway",
    city: "Wayanad",
    coords: { x: 38, y: 24 },
    power: "120kW DC",
    guns: 2,
    available: 2,
    address: "Adivaram Highway Junction, NH-766 Wayanad",
  },
];

export default function KeralaInteractiveMap({
  selectedCity,
  onSelectCity,
  onOpenCallbackModal,
}: KeralaInteractiveMapProps) {
  const [activeStation, setActiveStation] = useState<Station>(KERALA_STATIONS[0]);
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
      id="kerala-map"
      className="bg-[#121212] pt-8 pb-20 sm:pb-28 px-4 sm:px-6 lg:px-8 select-none"
    >
      <div
        className={`max-w-[1360px] mx-auto bg-white rounded-3xl sm:rounded-[40px] p-6 sm:p-12 lg:p-16 text-neutral-900 shadow-xl border border-neutral-100 transition-all duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${isInView
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-12 sm:translate-y-16 scale-[0.98]"
          }`}
      >
        {/* Header with Staggered Entrance & Green Sweep */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 pb-8 border-b border-neutral-100">
          <div className="space-y-3">
            {/* Staggered Animated Headline */}
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-black max-w-2xl leading-[1.14]">
              {/* Line 1: Find an Evion Grid */}
              <span className="block overflow-hidden py-0.5">
                <span
                  className={`block text-neutral-900 transition-all duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)] delay-150 ${isInView
                      ? "opacity-100 translate-y-0 blur-0"
                      : "opacity-0 translate-y-full blur-[6px]"
                    }`}
                >
                  Find an Evion Grid
                </span>
              </span>

              {/* Line 2: near you with Green Sweep & Stop */}
              <span className="block overflow-hidden py-0.5 mt-0.5 sm:mt-1">
                <span
                  className={`block transition-all duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)] delay-300 ${isInView
                      ? "opacity-100 translate-y-0 blur-0"
                      : "opacity-0 translate-y-full blur-[6px]"
                    }`}
                >
                  <span
                    className={
                      isInView
                        ? "inline-block animate-green-sweep-dark"
                        : "text-neutral-900"
                    }
                  >
                    near you
                  </span>
                </span>
              </span>
            </h2>

            <p
              className={`text-xs sm:text-sm text-neutral-500 max-w-xl transition-all duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)] delay-[450ms] ${isInView ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-4 blur-[4px]"
                }`}
            >
              Live charger status across Kerala National Highways &amp; key city commercial centers.
            </p>
          </div>
        </div>

        {/* Full-Width Map Visualization Container */}
        <div className="relative w-full h-[460px] sm:h-[540px] lg:h-[600px] bg-neutral-900 rounded-3xl overflow-hidden flex items-center justify-center p-4 select-none shadow-inner">
            {/* Kerala Outline Graphic Background */}
            <svg
              viewBox="0 0 100 100"
              className="absolute inset-0 w-full h-full opacity-35 stroke-neutral-700 fill-neutral-800"
            >
              {/* Abstract Kerala coastal curved line */}
              <path
                d="M 28,15 Q 36,30 38,40 Q 42,50 46,65 Q 52,78 64,92 Q 62,95 56,92 Q 44,75 38,60 Q 30,45 22,25 Z"
                fill="#1f242d"
                stroke="#374151"
                strokeWidth="1"
              />
            </svg>

            {/* Highway Routes Overlay */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
              <svg viewBox="0 0 100 100" className="w-full h-full stroke-emerald-500 fill-none stroke-[0.8] stroke-dasharray-[2 2]">
                <path d="M 28,18 L 34,35 L 46,55 L 48,65 L 62,88" />
                <path d="M 46,55 L 50,48 L 65,52" />
              </svg>
            </div>

            {/* Interactive Pins */}
            {KERALA_STATIONS.map((station) => {
              const isSelected = activeStation.id === station.id;
              return (
                <button
                  key={station.id}
                  onClick={() => setActiveStation(station)}
                  suppressHydrationWarning
                  style={{ left: `${station.coords.x}%`, top: `${station.coords.y}%` }}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 group z-20 focus:outline-none cursor-pointer"
                >
                  <div className="relative flex items-center justify-center">
                    <span
                      className={`absolute w-6 h-6 rounded-full transition-transform ${isSelected ? "bg-[#00b4d8] animate-ping opacity-60" : "bg-[#00b4d8]/30"
                        }`}
                    />
                    <div
                      className={`w-4 h-4 rounded-full flex items-center justify-center transition-all ${isSelected
                          ? "bg-gradient-to-r from-[#0052cc] to-[#00b4d8] ring-4 ring-white scale-125 shadow-[0_0_12px_#00b4d8]"
                          : "bg-gradient-to-r from-[#0052cc] to-[#00b4d8] group-hover:scale-110"
                        }`}
                    >
                      <Zap className="w-2.5 h-2.5 text-white fill-current" />
                    </div>
                  </div>

                  {/* Rich Pin Tooltip on hover/active */}
                  <div
                    className={`absolute bottom-full mb-2 left-1/2 -translate-x-1/2 whitespace-nowrap px-3 py-1.5 rounded-xl text-xs text-white bg-black/95 border border-white/20 backdrop-blur-md shadow-2xl pointer-events-none transition-all duration-200 z-30 ${isSelected ? "opacity-100 scale-100 -translate-y-1" : "opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100"
                      }`}
                  >
                    <div className="text-[11px] font-black text-white">{station.name}</div>
                    <div className="text-[9px] font-mono text-[#00b4d8] mt-0.5">{station.city} • {station.power} • Dual CCS2</div>
                  </div>
                </button>
              );
            })}

            {/* Map Legend & Active Details */}
            <div className="absolute bottom-3 left-3 bg-black/75 backdrop-blur-md px-3.5 py-1.5 rounded-full text-[10px] text-white flex items-center space-x-2 border border-white/10 shadow-lg">
              <span className="w-2 h-2 rounded-full bg-[#00b4d8]" />
              <span className="font-semibold">Evion DC Fast Hubs</span>
            </div>
        </div>
      </div>
    </section>
  );
}

