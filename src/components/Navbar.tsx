"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  MapPin,
  ChevronDown,
  PhoneCall,
  X,
  ArrowRight,
  TrendingUp,
  Building2,
  Navigation,
  ShieldCheck,
  Check,
  Zap,
  Download
} from "lucide-react";

interface NavbarProps {
  onOpenCallbackModal: () => void;
  selectedCity: string;
  onSelectCity: (city: string) => void;
}

const KERALA_HUBS = [
  { city: "Kochi", guns: "48 Guns", tag: "Superhub • NH-66 / 544", type: "Ultra-Fast 240kW" },
  { city: "Thiruvananthapuram", guns: "36 Guns", tag: "Technopark Bypass", type: "Dual 120kW" },
  { city: "Kozhikode", guns: "24 Guns", tag: "Malabar Beach Corridor", type: "Ultra-Fast 240kW" },
  { city: "Thrissur", guns: "18 Guns", tag: "Mannuthy Junction NH-544", type: "Dual 120kW" },
  { city: "Alappuzha", guns: "16 Guns", tag: "Coastal Route NH-66", type: "Dual 120kW" },
  { city: "Palakkad", guns: "14 Guns", tag: "Coimbatore Gateway", type: "Highway Hub" },
  { city: "Munnar", guns: "12 Guns", tag: "Highland Eco-Corridor", type: "Resort Node" },
  { city: "Wayanad", guns: "10 Guns", tag: "Thamarassery Churam Hub", type: "Resort Node" },
  { city: "Kannur", guns: "12 Guns", tag: "North Coast Corridor", type: "Dual 120kW" },
  { city: "Kottayam", guns: "10 Guns", tag: "MC Road Hub", type: "Commercial Node" },
  { city: "Kollam", guns: "10 Guns", tag: "NH-66 Bypass Hub", type: "Highway Hub" },
  { city: "Malappuram", guns: "8 Guns", tag: "Calicut Airport Junction", type: "Commercial Node" }
];

export default function Navbar({
  onOpenCallbackModal,
  selectedCity,
  onSelectCity
}: NavbarProps) {
  const [cityDropdownOpen, setCityDropdownOpen] = useState(false);
  const [investorMenuOpen, setInvestorMenuOpen] = useState(false);
  const [ecosystemMenuOpen, setEcosystemMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const cityDropdownRef = useRef<HTMLDivElement>(null);
  const investorRef = useRef<HTMLDivElement>(null);
  const ecosystemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (cityDropdownRef.current && !cityDropdownRef.current.contains(e.target as Node)) {
        setCityDropdownOpen(false);
      }
      if (investorRef.current && !investorRef.current.contains(e.target as Node)) {
        setInvestorMenuOpen(false);
      }
      if (ecosystemRef.current && !ecosystemRef.current.contains(e.target as Node)) {
        setEcosystemMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const scrollTo = (id: string) => {
    setInvestorMenuOpen(false);
    setEcosystemMenuOpen(false);
    setCityDropdownOpen(false);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Ather Energy Signature Floating Island Header */}
      <header
        className={`fixed top-2.5 sm:top-4 left-2.5 sm:left-6 right-2.5 sm:right-6 z-50 max-w-[1400px] mx-auto bg-white/95 backdrop-blur-md rounded-2xl border border-neutral-200/90 transition-all duration-300 ${
          isScrolled
            ? "shadow-[0_12px_32px_rgba(0,0,0,0.12)] border-neutral-300/80"
            : "shadow-[0_6px_24px_rgba(0,0,0,0.08)]"
        }`}
      >
        <div className="h-14 sm:h-16 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Left: Ather Wordmark & Minimal Text Nav Links */}
          <div className="flex items-center space-x-8 lg:space-x-12">
            {/* Logo */}
            <a href="#" className="flex items-center group">
              <span className="text-lg sm:text-xl font-extrabold tracking-[0.24em] text-black group-hover:opacity-80 transition-opacity">
                EVION
              </span>
            </a>

            {/* Product Links - Clean Ather Typography */}
            <nav className="hidden lg:flex items-center space-x-8 text-[13px] font-medium text-neutral-800">
              <button
                onClick={() => scrollTo("network-showcase")}
                className="inline-flex items-center space-x-1.5 hover:text-black transition-colors"
              >
                <span>HyperBolt</span>
                <span className="inline-flex items-center text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#f5a623] text-white tracking-wide shadow-2xs">
                  New
                </span>
              </button>

              <button
                onClick={() => scrollTo("parking-ready")}
                className="hover:text-black transition-colors"
              >
                CityCharge
              </button>

              <button
                onClick={() => scrollTo("parking-ready")}
                className="hover:text-black transition-colors"
              >
                Evion Node
              </button>
            </nav>
          </div>

          {/* Right: Investor Relations, Evion Ecosystem, City Pill [ Kochi 📍 ], Ather [ = ] */}
          <div className="flex items-center space-x-5 sm:space-x-7 text-[13px] font-medium text-neutral-800">
            {/* 1. Investor Relations with Chevron */}
            <div className="relative hidden md:block" ref={investorRef}>
              <button
                onClick={() => {
                  setInvestorMenuOpen(!investorMenuOpen);
                  setEcosystemMenuOpen(false);
                  setCityDropdownOpen(false);
                }}
                className="inline-flex items-center space-x-1 hover:text-black transition-colors py-1"
              >
                <span>Investor Relations</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 text-neutral-500 transition-transform ${
                    investorMenuOpen ? "rotate-180 text-black" : ""
                  }`}
                />
              </button>

              {investorMenuOpen && (
                <div className="absolute right-0 mt-3 w-80 rounded-2xl bg-white border border-neutral-200/90 shadow-2xl p-3 z-50 animate-in fade-in slide-in-from-top-2">
                  <div className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider px-3 py-1.5 border-b border-neutral-100 mb-1">
                    Franchise & Investor Programs
                  </div>
                  <div className="space-y-1">
                    <button
                      onClick={() => scrollTo("great-power")}
                      className="w-full text-left p-2.5 rounded-xl hover:bg-neutral-50 transition-colors flex items-start space-x-3"
                    >
                      <div className="p-2 rounded-lg bg-neutral-100 text-black shrink-0 mt-0.5">
                        <Building2 className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-black">Highway Superhub Franchise</div>
                        <div className="text-[11px] text-neutral-500">NH-66 / NH-544 high volume corridors</div>
                      </div>
                    </button>

                    <button
                      onClick={() => scrollTo("great-power")}
                      className="w-full text-left p-2.5 rounded-xl hover:bg-neutral-50 transition-colors flex items-start space-x-3"
                    >
                      <div className="p-2 rounded-lg bg-neutral-100 text-black shrink-0 mt-0.5">
                        <TrendingUp className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-black">Commercial Plaza Model</div>
                        <div className="text-[11px] text-neutral-500">Shopping complexes & mall parking</div>
                      </div>
                    </button>

                    <div className="pt-2 border-t border-neutral-100 px-1">
                      <button
                        onClick={() => {
                          setInvestorMenuOpen(false);
                          onOpenCallbackModal();
                        }}
                        className="w-full py-2.5 px-3 rounded-xl bg-black text-white text-xs font-bold flex items-center justify-between hover:bg-neutral-800 transition-colors"
                      >
                        <span>Apply for Kerala Franchise</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 2. Evion Ecosystem with Chevron */}
            <div className="relative hidden md:block" ref={ecosystemRef}>
              <button
                onClick={() => {
                  setEcosystemMenuOpen(!ecosystemMenuOpen);
                  setInvestorMenuOpen(false);
                  setCityDropdownOpen(false);
                }}
                className="inline-flex items-center space-x-1 hover:text-black transition-colors py-1"
              >
                <span>Evion Ecosystem</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 text-neutral-500 transition-transform ${
                    ecosystemMenuOpen ? "rotate-180 text-black" : ""
                  }`}
                />
              </button>

              {ecosystemMenuOpen && (
                <div className="absolute right-0 mt-3 w-72 rounded-2xl bg-white border border-neutral-200/90 shadow-2xl p-3 z-50 animate-in fade-in slide-in-from-top-2">
                  <div className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider px-3 py-1.5 border-b border-neutral-100 mb-1">
                    Network & Infrastructure
                  </div>
                  <div className="space-y-1">
                    <button
                      onClick={() => scrollTo("kerala-map")}
                      className="w-full text-left p-2.5 rounded-xl hover:bg-neutral-50 transition-colors flex items-center space-x-3"
                    >
                      <Navigation className="w-4 h-4 text-neutral-700 shrink-0" />
                      <div>
                        <div className="text-xs font-bold text-black">Kerala Live Grid Map</div>
                        <div className="text-[11px] text-neutral-500">140+ active guns across Kerala</div>
                      </div>
                    </button>

                    <button
                      onClick={() => scrollTo("faq")}
                      className="w-full text-left p-2.5 rounded-xl hover:bg-neutral-50 transition-colors flex items-center space-x-3"
                    >
                      <ShieldCheck className="w-4 h-4 text-neutral-700 shrink-0" />
                      <div>
                        <div className="text-xs font-bold text-black">KSEB Regulatory Compliance</div>
                        <div className="text-[11px] text-neutral-500">Power sanction & EV tariff guides</div>
                      </div>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* 3. Ather Location Pill [ Kochi 📍 ] */}
            <div className="relative" ref={cityDropdownRef}>
              <button
                onClick={() => {
                  setCityDropdownOpen(!cityDropdownOpen);
                  setInvestorMenuOpen(false);
                  setEcosystemMenuOpen(false);
                }}
                className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full border border-neutral-300 hover:border-black transition-colors bg-white text-[13px] font-medium text-neutral-800 shadow-2xs group"
                aria-label="Select City"
              >
                <span>{selectedCity}</span>
                <MapPin className="w-3.5 h-3.5 text-neutral-500 group-hover:text-black transition-colors" />
              </button>

              {cityDropdownOpen && (
                <div className="absolute right-0 mt-3 w-72 rounded-2xl bg-white border border-neutral-200/90 shadow-2xl py-2 z-50 animate-in fade-in slide-in-from-top-2">
                  <div className="px-3.5 py-1.5 text-[10px] font-bold text-neutral-400 uppercase tracking-wider border-b border-neutral-100 flex items-center justify-between">
                    <span>Select Kerala EV Hub</span>
                    <span className="text-[#00d26a]">Live Status</span>
                  </div>
                  <div className="max-h-64 overflow-y-auto py-1">
                    {KERALA_HUBS.map((hub) => {
                      const isSelected = selectedCity === hub.city;
                      return (
                        <button
                          key={hub.city}
                          onClick={() => {
                            onSelectCity(hub.city);
                            setCityDropdownOpen(false);
                            scrollTo("kerala-map");
                          }}
                          className={`w-full text-left px-3.5 py-2.5 text-xs flex items-center justify-between hover:bg-neutral-50 transition-colors ${
                            isSelected ? "bg-neutral-50 font-bold" : ""
                          }`}
                        >
                          <div>
                            <div className="font-bold text-black flex items-center gap-1.5">
                              <span>{hub.city}</span>
                              {isSelected && <Check className="w-3.5 h-3.5 text-[#00d26a]" />}
                            </div>
                            <div className="text-[10px] text-neutral-400 font-normal">
                              {hub.tag}
                            </div>
                          </div>

                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 font-mono">
                            {hub.guns}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* 4. Ather Signature Two-Bar Hamburger Button [ = ] */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-9 h-9 rounded-xl border border-neutral-300 hover:border-black flex flex-col justify-center items-center gap-1 p-2 text-neutral-800 hover:text-black transition-colors shrink-0"
              aria-label="Navigation Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-4 h-4 text-black" />
              ) : (
                <>
                  <span className="w-4 h-[1.75px] bg-black rounded-full" />
                  <span className="w-4 h-[1.75px] bg-black rounded-full" />
                </>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer (Clean Ather Full Overlay) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-24 px-6 flex flex-col justify-between pb-8 md:hidden animate-in fade-in duration-200">
          <div className="space-y-4">
            <div className="flex items-center justify-between py-3 border-b border-neutral-200">
              <span className="text-xs text-neutral-500 uppercase tracking-wider font-semibold">
                Kerala Region
              </span>
              <div className="flex items-center gap-1 text-black text-xs font-bold px-3 py-1 rounded-full bg-neutral-100">
                <MapPin className="w-3.5 h-3.5 text-[#00d26a]" />
                <span>{selectedCity}, Kerala</span>
              </div>
            </div>

            <nav className="flex flex-col space-y-4 text-base font-bold text-neutral-900 pt-2">
              <button
                onClick={() => scrollTo("hero")}
                className="text-left py-1 hover:text-[#00d26a] transition-colors"
              >
                Overview & Hero
              </button>

              <button
                onClick={() => scrollTo("network-showcase")}
                className="text-left py-1 hover:text-[#00d26a] transition-colors flex items-center justify-between"
              >
                <span>HyperBolt 240kW</span>
                <span className="text-[10px] bg-[#f5a623] text-white px-2 py-0.5 rounded-full font-bold">
                  New
                </span>
              </button>

              <button
                onClick={() => scrollTo("parking-ready")}
                className="text-left py-1 hover:text-[#00d26a] transition-colors"
              >
                CityCharge 120
              </button>

              <button
                onClick={() => scrollTo("parking-ready")}
                className="text-left py-1 hover:text-[#00d26a] transition-colors"
              >
                Evion Node™
              </button>

              <button
                onClick={() => scrollTo("great-power")}
                className="text-left py-1 hover:text-[#00d26a] transition-colors"
              >
                Franchise Hubs & Host Program
              </button>

              <button
                onClick={() => scrollTo("kerala-map")}
                className="text-left py-1 hover:text-[#00d26a] transition-colors"
              >
                Kerala Live Grid Map
              </button>

              <button
                onClick={() => scrollTo("faq")}
                className="text-left py-1 hover:text-[#00d26a] transition-colors"
              >
                Frequently Asked Questions
              </button>
            </nav>
          </div>

          <div className="pt-6 border-t border-neutral-200 space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCallbackModal();
              }}
              className="w-full py-3.5 rounded-full bg-black text-white font-bold text-sm text-center shadow-sm hover:bg-neutral-800 transition-colors"
            >
              Request a Callback / Franchise Form
            </button>
            <div className="flex items-center justify-center space-x-2 text-xs text-neutral-500 font-medium">
              <PhoneCall className="w-3.5 h-3.5 text-neutral-700" />
              <span>Toll-Free Helpline: 1800-889-EVION</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
