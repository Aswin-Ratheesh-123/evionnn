"use client";

import React, { useState, useEffect, useRef } from "react";
import { MapPin, Navigation, Search, CheckCircle, Zap } from "lucide-react";

interface KeralaInteractiveMapProps {
  selectedCity: string;
  onSelectCity: (city: string) => void;
  onOpenCallbackModal: () => void;
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
    power: "240kW DC",
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
    power: "240kW DC",
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
    power: "240kW DC",
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
  const [search, setSearch] = useState("");
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

  const filtered = KERALA_STATIONS.filter(
    (s) =>
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.city.toLowerCase().includes(search.toLowerCase()) ||
      s.address.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section
      ref={sectionRef}
      id="kerala-map"
      className="bg-[#121212] pt-8 pb-20 sm:pb-28 px-4 sm:px-6 lg:px-8 select-none"
    >
      <div className="max-w-[1360px] mx-auto bg-white rounded-3xl sm:rounded-[40px] p-6 sm:p-12 lg:p-16 text-neutral-900 shadow-xl border border-neutral-100">
        {/* Header with Staggered Entrance & Green Sweep */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 pb-8 border-b border-neutral-100">
          <div className="space-y-3">
            {/* Animated Eyebrow Badge */}
            <div
              className={`inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-neutral-100 border border-neutral-200/80 text-xs font-semibold uppercase tracking-wider text-neutral-700 transition-all duration-700 ease-out ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#00d26a] animate-pulse" />
              <span>Live Kerala Grid</span>
              <span className="text-neutral-300">•</span>
              <span className="text-[#009e4f] font-bold">140+ Fast Guns</span>
            </div>

            {/* Staggered Animated Headline */}
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-black max-w-2xl leading-[1.14]">
              {/* Line 1: Find an Evion Grid */}
              <span
                className={`block text-neutral-900 transition-all duration-700 ease-out delay-100 ${
                  isInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
              >
                Find an Evion Grid
              </span>

              {/* Line 2: near you with Green Sweep & Stop */}
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
                  near you
                </span>
              </span>
            </h2>

            <p
              className={`text-xs sm:text-sm text-neutral-500 max-w-xl transition-all duration-700 ease-out delay-300 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Live charger status across Kerala National Highways &amp; key city commercial centers.
            </p>
          </div>

          {/* Quick city dropdown */}
          <div
            className={`flex items-center space-x-2 shrink-0 transition-all duration-700 ease-out delay-300 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <span className="text-xs font-semibold text-neutral-500 hidden sm:inline">Region:</span>
            <select
              value={selectedCity}
              onChange={(e) => {
                onSelectCity(e.target.value);
                const match = KERALA_STATIONS.find((s) => s.city.toLowerCase() === e.target.value.toLowerCase());
                if (match) setActiveStation(match);
              }}
              className="px-4 py-2.5 rounded-full border border-neutral-300 bg-[#f7f7f8] text-xs font-semibold text-black focus:outline-none shadow-xs"
            >
              <option value="Kochi">Kochi</option>
              <option value="Thiruvananthapuram">Thiruvananthapuram</option>
              <option value="Kozhikode">Kozhikode</option>
              <option value="Thrissur">Thrissur</option>
              <option value="Alappuzha">Alappuzha</option>
              <option value="Munnar">Munnar</option>
              <option value="Wayanad">Wayanad</option>
            </select>
          </div>
        </div>

        {/* Map Visualization Container (Ather Energy Style) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#f8f9fa] rounded-3xl p-6 sm:p-10 border border-neutral-200">
          {/* Left 7 cols: Stylized SVG Map of Kerala with Glowing Green Pins */}
          <div className="lg:col-span-7 relative h-[380px] sm:h-[460px] bg-neutral-900 rounded-2xl overflow-hidden flex items-center justify-center p-4 select-none">
            {/* Kerala Outline Graphic Background */}
            <svg
              viewBox="0 0 100 100"
              className="absolute inset-0 w-full h-full opacity-30 stroke-neutral-700 fill-neutral-800"
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
                  style={{ left: `${station.coords.x}%`, top: `${station.coords.y}%` }}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 group z-20 focus:outline-none"
                >
                  <div className="relative flex items-center justify-center">
                    <span
                      className={`absolute w-6 h-6 rounded-full transition-transform ${
                        isSelected ? "bg-[#00d26a] animate-ping opacity-60" : "bg-[#00d26a]/30"
                      }`}
                    />
                    <div
                      className={`w-4 h-4 rounded-full flex items-center justify-center transition-all ${
                        isSelected
                          ? "bg-[#00d26a] ring-4 ring-white scale-125"
                          : "bg-[#00d26a] group-hover:scale-110"
                      }`}
                    >
                      <Zap className="w-2.5 h-2.5 text-black fill-current" />
                    </div>
                  </div>

                  {/* Tooltip on hover/active */}
                  <div
                    className={`absolute bottom-full mb-2 left-1/2 -translate-x-1/2 whitespace-nowrap px-2.5 py-1 rounded-md text-[10px] font-bold text-white bg-black/90 backdrop-blur-md shadow-lg pointer-events-none transition-opacity ${
                      isSelected ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                    }`}
                  >
                    {station.name}
                  </div>
                </button>
              );
            })}

            {/* Map Legend */}
            <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-full text-[10px] text-white flex items-center space-x-2 border border-white/10">
              <span className="w-2 h-2 rounded-full bg-[#00d26a]" />
              <span>Evion DC Fast Hubs (140+ Guns)</span>
            </div>
          </div>

          {/* Right 5 cols: Active Station Detail Card */}
          <div className="lg:col-span-5 bg-white rounded-2xl p-6 sm:p-8 border border-neutral-200 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-neutral-500 uppercase tracking-wider">
                  Selected Hub
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">
                  {activeStation.available} of {activeStation.guns} Guns Available
                </span>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-black">
                  {activeStation.name}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 mt-1">
                  {activeStation.address}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2 text-xs">
                <div className="p-3 rounded-xl bg-[#f7f7f8] border border-neutral-200">
                  <span className="text-neutral-500 text-[10px] uppercase font-bold">Speed</span>
                  <div className="text-black font-bold mt-0.5">{activeStation.power}</div>
                </div>
                <div className="p-3 rounded-xl bg-[#f7f7f8] border border-neutral-200">
                  <span className="text-neutral-500 text-[10px] uppercase font-bold">Plugs</span>
                  <div className="text-black font-bold mt-0.5">Dual CCS2</div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-neutral-100 flex flex-col sm:flex-row gap-3">
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  activeStation.name + " " + activeStation.address
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-full bg-black text-white hover:bg-neutral-800 text-xs font-bold text-center flex items-center justify-center space-x-2 transition-colors"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Navigate in Maps</span>
              </a>

              <button
                onClick={onOpenCallbackModal}
                className="py-3 px-4 rounded-full border border-neutral-300 hover:border-black text-black text-xs font-bold bg-white transition-colors"
              >
                Host an EV Hub
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

