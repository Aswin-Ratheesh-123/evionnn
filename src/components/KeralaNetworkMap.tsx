"use client";

import React, { useState } from "react";
import {
  MapPin,
  Zap,
  Navigation,
  Search
} from "lucide-react";

interface KeralaNetworkMapProps {
  onOpenModal: () => void;
  selectedCity: string;
}

interface Station {
  id: string;
  name: string;
  city: string;
  highway: string;
  address: string;
  power: string;
  guns: number;
  availableGuns: number;
  connectors: string[];
  status: "available" | "busy" | "maintenance";
  amenities: string[];
  googleMapsQuery: string;
}

const STATIONS: Station[] = [
  {
    id: "kochi-edappally",
    name: "Evion Superhub Edappally",
    city: "Kochi",
    highway: "NH 66 / NH 544 Junction",
    address: "Near Lulu Mall & Metro Pillar 382, Edappally, Kochi",
    power: "240 kW HyperBolt",
    guns: 4,
    availableGuns: 3,
    connectors: ["CCS2", "Type 2"],
    status: "available",
    amenities: ["Café", "Restroom", "24/7 Security", "Free Wi-Fi"],
    googleMapsQuery: "Edappally, Kochi, Kerala EV Charging",
  },
  {
    id: "kochi-infopark",
    name: "Evion Tech Corridor Hub",
    city: "Kochi",
    highway: "Seaport-Airport Road",
    address: "Infopark Phase 1 Entrance, Kakkanad, Kochi",
    power: "120 kW Fast DC",
    guns: 2,
    availableGuns: 2,
    connectors: ["CCS2"],
    status: "available",
    amenities: ["Restroom", "Cafeteria", "24/7 CCTV"],
    googleMapsQuery: "Infopark Kakkanad, Kochi EV Charging",
  },
  {
    id: "tvm-technopark",
    name: "Evion Flagship Technopark",
    city: "Thiruvananthapuram",
    highway: "NH 66 Kazhakkoottam Bypass",
    address: "Opposite Technopark Phase 3 Gate, Trivandrum",
    power: "240 kW HyperBolt",
    guns: 4,
    availableGuns: 2,
    connectors: ["CCS2", "Type 2"],
    status: "available",
    amenities: ["Food Court", "Restroom", "24/7 Security", "EV Lounge"],
    googleMapsQuery: "Technopark Kazhakkoottam, Trivandrum EV Charging",
  },
  {
    id: "alappuzha-nh66",
    name: "Evion Coastal Waypoint",
    city: "Alappuzha",
    highway: "NH 66 Cherthala Bypass",
    address: "Indian Oil Highway Plaza, Cherthala, Alappuzha",
    power: "120 kW Fast DC",
    guns: 2,
    availableGuns: 1,
    connectors: ["CCS2"],
    status: "available",
    amenities: ["Restaurant", "Clean Restrooms", "24/7 Store"],
    googleMapsQuery: "Cherthala, NH 66, Kerala EV Charging",
  },
  {
    id: "calicut-beach",
    name: "Evion Malabar Coast Hub",
    city: "Kozhikode",
    highway: "Beach Road & Mini Bypass",
    address: "South Beach Promenade, Kozhikode",
    power: "120 kW Fast DC",
    guns: 2,
    availableGuns: 2,
    connectors: ["CCS2", "Type 2"],
    status: "available",
    amenities: ["Seaside Cafe", "Restroom", "24/7 Security"],
    googleMapsQuery: "Calicut Beach, Kozhikode EV Charging",
  },
  {
    id: "thrissur-nh544",
    name: "Evion Cultural Capital Superhub",
    city: "Thrissur",
    highway: "NH 544 Mannuthy Bypass",
    address: "Highway Food Street Complex, Mannuthy, Thrissur",
    power: "240 kW HyperBolt",
    guns: 4,
    availableGuns: 3,
    connectors: ["CCS2"],
    status: "available",
    amenities: ["Drive-Thru Dining", "Restrooms", "Kids Play Area"],
    googleMapsQuery: "Mannuthy, Thrissur EV Charging",
  },
  {
    id: "munnar-resort",
    name: "Evion Tea Highlands Hub",
    city: "Munnar",
    highway: "Kochi-Dhanushkodi NH 85",
    address: "Valley View Luxury Retreat, Pallivasal, Munnar",
    power: "60 kW Fast DC + 22kW AC",
    guns: 3,
    availableGuns: 2,
    connectors: ["CCS2", "Type 2"],
    status: "available",
    amenities: ["Highland Lounge", "Artisan Tea Bar", "Scenic Viewpoint"],
    googleMapsQuery: "Pallivasal Munnar EV Charging",
  },
  {
    id: "wayanad-gateway",
    name: "Evion Wayanad Forest Gateway",
    city: "Wayanad",
    highway: "NH 766 Thamarassery Churam Pass",
    address: "Adivaram Highway Junction, Wayanad Foothills",
    power: "120 kW Fast DC",
    guns: 2,
    availableGuns: 2,
    connectors: ["CCS2"],
    status: "available",
    amenities: ["Rest Stop", "Coffee Shop", "24/7 Assistance"],
    googleMapsQuery: "Adivaram, Wayanad EV Charging",
  },
];

export default function KeralaNetworkMap({ onOpenModal, selectedCity }: KeralaNetworkMapProps) {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filterOptions = ["All", "Kochi", "Thiruvananthapuram", "Kozhikode", "Thrissur", "Alappuzha", "Munnar", "Wayanad"];

  const filteredStations = STATIONS.filter((st) => {
    const matchesFilter = activeFilter === "All" || st.city.toLowerCase() === activeFilter.toLowerCase();
    const matchesSearch =
      st.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      st.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      st.highway.toLowerCase().includes(searchQuery.toLowerCase()) ||
      st.address.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <section id="network" className="py-20 md:py-28 bg-white text-neutral-900 border-b border-neutral-200">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-100 text-neutral-800 text-xs font-bold uppercase tracking-wider mb-4 border border-neutral-200">
            <MapPin className="w-3.5 h-3.5 text-neutral-800" />
            <span>Evion Grid Network</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-black mb-4">
            Fast Charging Stations Across Kerala
          </h2>
          <p className="text-base sm:text-lg text-neutral-600">
            Stations located every 35-50 km along Kerala’s primary national highways and major city centers.
          </p>
        </div>

        {/* Toolbar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 bg-[#f7f7f8] p-4 rounded-2xl border border-neutral-200">
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search city, highway, or landmark..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-white border border-neutral-300 rounded-xl text-xs text-black placeholder-neutral-400 focus:outline-none focus:border-black transition-colors"
            />
          </div>

          <div className="flex items-center space-x-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none">
            {filterOptions.map((opt) => (
              <button
                key={opt}
                onClick={() => setActiveFilter(opt)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-colors ${
                  activeFilter === opt
                    ? "bg-black text-white shadow-sm"
                    : "bg-white text-neutral-700 hover:text-black border border-neutral-200"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        {/* Stations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStations.map((station) => (
            <div
              key={station.id}
              className="bg-[#f7f7f8] border border-neutral-200 rounded-2xl p-5 hover:border-black transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="text-base font-bold text-black tracking-tight">
                      {station.name}
                    </h3>
                    <div className="flex items-center space-x-1.5 text-xs text-neutral-600 font-medium mt-0.5">
                      <MapPin className="w-3.5 h-3.5 text-neutral-500 shrink-0" />
                      <span>{station.city} • {station.highway}</span>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[11px] font-bold text-emerald-800 shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00d26a]" />
                    <span>{station.availableGuns}/{station.guns} Available</span>
                  </span>
                </div>

                <p className="text-xs text-neutral-600 line-clamp-2">
                  {station.address}
                </p>

                <div className="flex items-center space-x-2 text-xs">
                  <span className="px-2.5 py-1 rounded-lg bg-white border border-neutral-200 text-black font-mono font-bold">
                    ⚡ {station.power}
                  </span>
                  <div className="flex space-x-1">
                    {station.connectors.map((conn, i) => (
                      <span key={i} className="px-2 py-1 rounded-lg bg-white border border-neutral-200 text-neutral-700 text-[11px] font-semibold">
                        {conn}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {station.amenities.map((amenity, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] px-2 py-0.5 rounded-full bg-white text-neutral-600 border border-neutral-200 font-medium"
                    >
                      {amenity}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-5 mt-4 border-t border-neutral-200/80 flex items-center justify-between">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    station.googleMapsQuery
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 text-xs font-bold text-black hover:text-neutral-700 transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Navigate with Maps</span>
                </a>

                <span className="text-[10px] text-neutral-500 font-medium">
                  Open 24/7
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Ather Host Callout */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-[#f7f7f8] border border-neutral-200 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg sm:text-xl font-bold text-black">
              Own commercial space or highway frontage in Kerala?
            </h4>
            <p className="text-xs sm:text-sm text-neutral-600">
              Apply to become an authorized Evion Station Host and tap into regular EV footfall.
            </p>
          </div>

          <button
            onClick={onOpenModal}
            className="px-6 py-3 rounded-full bg-black text-white hover:bg-neutral-800 font-bold text-xs whitespace-nowrap transition-transform hover:scale-105"
          >
            Apply to Host an Evion Station
          </button>
        </div>
      </div>
    </section>
  );
}
