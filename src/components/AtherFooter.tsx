import React from "react";
import { Zap, Phone, Mail, ArrowUpRight } from "lucide-react";

export default function AtherFooter() {
  return (
    <footer className="bg-[#121212] text-neutral-400 text-xs">
      {/* Top Banner Ticker (Exact Ather Footer Ticker in Screenshot) */}
      <div className="bg-[#1c1c1e] border-b border-neutral-800 py-3.5 px-4 sm:px-8">
        <div className="max-w-[1440px] mx-auto flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-300 gap-2">
          <div className="flex items-center space-x-2 font-medium">
            <span className="w-2 h-2 rounded-full bg-[#00d26a] animate-pulse" />
            <span className="text-white font-semibold">Electrifying Kerala</span>
            <span>—</span>
            <span>140+ HyperBolt DC Fast Chargers Live on NH-66 & Cities</span>
          </div>

          <a
            href="#parking-ready"
            className="flex items-center space-x-1 text-white hover:text-emerald-400 font-semibold transition-colors"
          >
            <span>Learn more about Franchise</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Main Multi-Column Section */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12 pb-14 border-b border-neutral-800">
          {/* Col 1: Brand */}
          <div className="col-span-2 md:col-span-1 space-y-3">
            <span className="text-xl font-black tracking-[0.2em] text-white">
              EVION
            </span>
            <p className="text-[11px] text-neutral-400 leading-relaxed">
              Evion Power Solutions Pvt. Ltd. Kerala’s premier electric car charging network and turnkey franchise partner.
            </p>
            <div className="text-[11px] space-y-1 text-neutral-300 pt-1">
              <div>Toll-Free: 1800-889-EVION</div>
              <div>support@evioncharging.com</div>
            </div>
          </div>

          {/* Col 2: Chargers */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              EV Chargers
            </h4>
            <ul className="space-y-2 text-[11px]">
              <li><a href="#network-showcase" className="hover:text-white transition-colors">HyperBolt 240kW</a></li>
              <li><a href="#network-showcase" className="hover:text-white transition-colors">CityCharge 120kW</a></li>
              <li><a href="#parking-ready" className="hover:text-white transition-colors">Evion Node™</a></li>
              <li><a href="#network-showcase" className="hover:text-white transition-colors">CCS2 Dual Gun</a></li>
            </ul>
          </div>

          {/* Col 3: Franchise */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Franchise Grid
            </h4>
            <ul className="space-y-2 text-[11px]">
              <li><a href="#parking-ready" className="hover:text-white transition-colors">Host a Station</a></li>
              <li><a href="#network-showcase" className="hover:text-white transition-colors">Highway Superhub</a></li>
              <li><a href="#parking-ready" className="hover:text-white transition-colors">Commercial Malls</a></li>
              <li><a href="#kerala-map" className="hover:text-white transition-colors">Kerala Map Grid</a></li>
            </ul>
          </div>

          {/* Col 4: Kerala Network */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Kerala Grid
            </h4>
            <ul className="space-y-2 text-[11px]">
              <li><a href="#kerala-map" className="hover:text-white transition-colors">Kochi (Edappally)</a></li>
              <li><a href="#kerala-map" className="hover:text-white transition-colors">Trivandrum (Technopark)</a></li>
              <li><a href="#kerala-map" className="hover:text-white transition-colors">Kozhikode Beach</a></li>
              <li><a href="#kerala-map" className="hover:text-white transition-colors">Thrissur Mannuthy</a></li>
              <li><a href="#kerala-map" className="hover:text-white transition-colors">Munnar Highlands</a></li>
            </ul>
          </div>

          {/* Col 5: Kerala Hubs */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Regional Hubs
            </h4>
            <div className="space-y-2 text-[11px] text-neutral-400">
              <div>
                <strong className="text-white">Kochi HQ:</strong>
                <p>Level 4, Carnival Infopark, Kakkanad, Kochi 682042</p>
              </div>
              <div>
                <strong className="text-white">Trivandrum:</strong>
                <p>Ganga, Technopark Phase 3, Kazhakkoottam</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500">
          <div>
            © {new Date().getFullYear()} Evion Power Solutions Pvt. Ltd. All rights reserved. 100% KSEB & CEA Approved.
          </div>

          <div className="flex items-center space-x-4">
            <span className="hover:text-neutral-300 cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-neutral-300 cursor-pointer">Franchise Terms</span>
            <span>•</span>
            <span className="hover:text-neutral-300 cursor-pointer">KSEB EV Tariff Code</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

