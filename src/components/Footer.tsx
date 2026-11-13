import React from "react";
import { Zap, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white text-neutral-600 border-t border-neutral-200 pt-16 pb-12 text-xs">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-neutral-200">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-xl sm:text-2xl font-black tracking-[0.2em] text-black">
                EVION
              </span>
            </div>

            <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed max-w-sm">
              Evion Power Solutions Pvt. Ltd. is Kerala’s premier electric vehicle charging station network and turnkey franchise partner. Fast DC charging connecting Kasaragod to Kanyakumari.
            </p>

            <div className="space-y-1.5 text-xs text-neutral-800 font-medium">
              <div className="flex items-center space-x-2">
                <Phone className="w-3.5 h-3.5 text-black" />
                <span>Franchise Toll-Free: 1800-889-EVION (38466)</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-3.5 h-3.5 text-black" />
                <span>franchise@evioncharging.com</span>
              </div>
            </div>
          </div>

          {/* Franchise */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-black uppercase tracking-wider">
              Franchise Models
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#franchise" className="hover:text-black transition-colors">
                  Highway Superhub (NH 66 & 544)
                </a>
              </li>
              <li>
                <a href="#franchise" className="hover:text-black transition-colors">
                  Commercial & Retail Plazas
                </a>
              </li>
              <li>
                <a href="#franchise" className="hover:text-black transition-colors">
                  Resort & Eco-Highland Hubs
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-black transition-colors">
                  Interactive ROI Calculator
                </a>
              </li>
              <li>
                <a href="#chargers" className="hover:text-black transition-colors">
                  Hardware Lineup
                </a>
              </li>
            </ul>
          </div>

          {/* Network */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-black uppercase tracking-wider">
              Kerala Grid
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#network" className="hover:text-black transition-colors">
                  Kochi (Edappally & Infopark)
                </a>
              </li>
              <li>
                <a href="#network" className="hover:text-black transition-colors">
                  Trivandrum (Technopark & Bypass)
                </a>
              </li>
              <li>
                <a href="#network" className="hover:text-black transition-colors">
                  Kozhikode (Beach Promenade)
                </a>
              </li>
              <li>
                <a href="#network" className="hover:text-black transition-colors">
                  Thrissur (Mannuthy Junction)
                </a>
              </li>
              <li>
                <a href="#network" className="hover:text-black transition-colors">
                  Munnar & Wayanad High Range
                </a>
              </li>
            </ul>
          </div>

          {/* Kerala Offices */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-black uppercase tracking-wider">
              Regional Offices
            </h4>
            <div className="space-y-2 text-[11px] leading-relaxed text-neutral-600">
              <div>
                <strong className="text-black">Kochi HQ:</strong>
                <p>Level 4, Carnival Infopark, Kakkanad, Kochi 682042</p>
              </div>
              <div>
                <strong className="text-black">Trivandrum Hub:</strong>
                <p>Ganga Building, Technopark Phase 3, Kazhakkoottam 695583</p>
              </div>
              <div>
                <strong className="text-black">Kozhikode Hub:</strong>
                <p>Cyberpark, Nellikkode, Kozhikode 673016</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500">
          <div>
            © {new Date().getFullYear()} Evion Power Solutions Pvt. Ltd. All Rights Reserved. 100% KSEB & CEA Compliant.
          </div>

          <div className="flex items-center space-x-4">
            <span className="hover:text-black cursor-pointer transition-colors">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-black cursor-pointer transition-colors">Host Terms</span>
            <span>•</span>
            <span className="hover:text-black cursor-pointer transition-colors">KSEB Tariff Guide</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
