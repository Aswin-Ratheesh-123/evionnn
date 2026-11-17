"use client";

import React, { useEffect, useState } from "react";
import { Zap, ShieldCheck } from "lucide-react";

export default function ChargingPlugAnimation() {
  const [kw, setKw] = useState(180.4);
  const [addedKm, setAddedKm] = useState(256);
  const [isPlugged, setIsPlugged] = useState(true);

  // Dynamic real-time charging telemetry
  useEffect(() => {
    const timer = setInterval(() => {
      setKw((prev) => {
        const delta = (Math.random() - 0.48) * 1.8;
        return Number(Math.max(177.4, Math.min(182.8, prev + delta)).toFixed(1));
      });
      setAddedKm((prev) => (prev >= 380 ? 256 : prev + 1));
    }, 1300);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-[280px] sm:w-[320px] lg:w-[340px] h-[200px] sm:h-[230px] rounded-2xl overflow-hidden border border-[#00b4d8]/40 shadow-[0_0_35px_rgba(0,180,216,0.22)] bg-gradient-to-b from-[#080d19] via-[#050811] to-[#03050a] select-none flex flex-col justify-between p-3.5 sm:p-4 group hover:border-[#00b4d8]/70 transition-all duration-300">
      {/* Background High-Tech Ambient Aura & Radial Grid */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-52 h-52 bg-[#00b4d8]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#00b4d8_1px,transparent_1px)] [background-size:18px_18px] opacity-[0.06] pointer-events-none" />

      {/* Embedded CSS for 3D Docking Motion, Halo Ring Breathing, and High-Energy Laser Cable */}
      <style>{`
        @keyframes haloPulseGlow {
          0%, 100% {
            filter: drop-shadow(0 0 6px #00E676) drop-shadow(0 0 12px #00b4d8);
            opacity: 0.85;
          }
          50% {
            filter: drop-shadow(0 0 18px #00E676) drop-shadow(0 0 28px #00b4d8);
            opacity: 1;
          }
        }
        @keyframes haloShockwave {
          0% {
            transform: scale(0.9);
            opacity: 0.8;
          }
          100% {
            transform: scale(1.45);
            opacity: 0;
          }
        }
        @keyframes cableLaserFlow {
          from { stroke-dashoffset: 40; }
          to { stroke-dashoffset: 0; }
        }
        @keyframes sparkFlicker {
          0%, 100% { opacity: 0.85; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.25); filter: drop-shadow(0 0 10px #ffffff); }
        }
        .animate-halo-ring {
          animation: haloPulseGlow 2.2s ease-in-out infinite;
        }
        .animate-halo-shockwave {
          transform-origin: 236px 75px;
          animation: haloShockwave 1.8s ease-out infinite;
        }
        .animate-cable-flow {
          stroke-dasharray: 6 8;
          animation: cableLaserFlow 0.8s linear infinite;
        }
        .animate-spark {
          transform-origin: 218px 84px;
          animation: sparkFlicker 1.4s ease-in-out infinite;
        }
      `}</style>

      {/* Top Header Bar: Status Badge + Live Power Telemetry */}
      <div className="relative z-20 flex items-center justify-between">
        <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-[9px] sm:text-[10px] font-bold tracking-wider uppercase font-mono">
            {isPlugged ? "CCS2 DOCKED • CHARGING" : "DISCONNECTED"}
          </span>
        </div>

        <div className="flex items-center gap-1.5 text-[9.5px] sm:text-[10.5px] font-mono text-cyan-300 bg-cyan-950/70 border border-cyan-500/30 px-2.5 py-0.5 rounded-full shadow-inner">
          <Zap className="w-3 h-3 text-cyan-400 animate-pulse" />
          <span className="font-bold">{kw} kW</span>
        </div>
      </div>

      {/* Center Hero: Close-Up Physical CCS2 Plug Docked into Vehicle Halo Port */}
      <div className="relative z-10 flex-1 flex items-center justify-center my-auto w-full overflow-hidden">
        <svg
          viewBox="0 0 320 150"
          className="w-full h-full max-h-[155px]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* 3D Metallic Vehicle Quarter Panel Gradient */}
            <linearGradient id="panelGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#2c3747" />
              <stop offset="45%" stopColor="#151d28" />
              <stop offset="100%" stopColor="#080c12" />
            </linearGradient>

            {/* Gun Body Industrial High-Density Composite */}
            <linearGradient id="gunChassisGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3d4d63" />
              <stop offset="40%" stopColor="#212a38" />
              <stop offset="100%" stopColor="#0e141c" />
            </linearGradient>

            {/* Glowing Halo Ring Gradient (Cyan to Emerald) */}
            <linearGradient id="haloRingGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#00E676" />
              <stop offset="50%" stopColor="#00b4d8" />
              <stop offset="100%" stopColor="#00E676" />
            </linearGradient>

            {/* Laser Energy Stream Gradient */}
            <linearGradient id="cableLaserGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#0052cc" />
              <stop offset="50%" stopColor="#00b4d8" />
              <stop offset="100%" stopColor="#00E676" />
            </linearGradient>
          </defs>

          {/* ================================================================= */}
          {/* 1. VEHICLE BODY & RECESSED PORT INLET (Right Section) */}
          {/* ================================================================= */}
          {/* Outer Car Quarter Panel Surface */}
          <path
            d="M 218 6 C 226 6, 235 15, 240 28 L 268 116 C 271 126, 267 138, 256 145 L 320 145 L 320 6 Z"
            fill="url(#panelGrad)"
            stroke="#3a4b60"
            strokeWidth="1.3"
          />
          {/* Subtle Car Panel Crease Line */}
          <line x1="238" y1="6" x2="270" y2="145" stroke="#485c75" strokeWidth="0.8" opacity="0.35" strokeDasharray="4 3" />

          {/* Motorized Port Cover Flap (Opened Angle at Top) */}
          <path
            d="M 240 18 L 285 10 L 287 22 L 244 30 Z"
            fill="#182330"
            stroke="#00b4d8"
            strokeWidth="1.2"
            opacity="0.9"
          />

          {/* Concentric Energy Shockwaves Radiating from Socket */}
          {isPlugged && (
            <>
              <ellipse cx="236" cy="75" rx="38" ry="46" stroke="#00E676" strokeWidth="1.6" className="animate-halo-shockwave" opacity="0.6" />
              <ellipse cx="236" cy="75" rx="38" ry="46" stroke="#00b4d8" strokeWidth="1.2" className="animate-halo-shockwave" opacity="0.4" style={{ animationDelay: "0.9s" }} />
            </>
          )}

          {/* Deep Recessed Socket Outer Housing Bezel */}
          <ellipse cx="236" cy="75" rx="35" ry="44" fill="#070b12" stroke="#223042" strokeWidth="2.2" />

          {/* THE PULSING HALO LED STATUS RING */}
          <ellipse
            cx="236"
            cy="75"
            rx="30"
            ry="39"
            fill="none"
            stroke="url(#haloRingGrad)"
            strokeWidth="3.6"
            className={isPlugged ? "animate-halo-ring" : ""}
            opacity={isPlugged ? 1 : 0.35}
          />

          {/* Inner Dark Cavity */}
          <ellipse cx="236" cy="75" rx="25" ry="33" fill="#030508" />

          {/* Receptacle Terminal Pins */}
          {/* Upper AC / Communication Pins */}
          <circle cx="231" cy="58" r="3.2" fill="#0f1722" stroke="#00b4d8" strokeWidth="0.8" />
          <circle cx="241" cy="58" r="3.2" fill="#0f1722" stroke="#00b4d8" strokeWidth="0.8" />
          <circle cx="236" cy="67" r="2.4" fill="#0f1722" stroke="#00b4d8" strokeWidth="0.6" />

          {/* Lower Heavy-Duty DC Fast-Charging Terminals (Intense High-Voltage Glow) */}
          <circle cx="230" cy="85" r="5.2" fill={isPlugged ? "#00E676" : "#172333"} opacity={isPlugged ? 0.95 : 0.4} filter={isPlugged ? "drop-shadow(0 0 8px #00E676)" : ""} />
          <circle cx="242" cy="85" r="5.2" fill={isPlugged ? "#00E676" : "#172333"} opacity={isPlugged ? 0.95 : 0.4} filter={isPlugged ? "drop-shadow(0 0 8px #00E676)" : ""} />
          {isPlugged && (
            <>
              <circle cx="230" cy="85" r="2.5" fill="#ffffff" />
              <circle cx="242" cy="85" r="2.5" fill="#ffffff" />
            </>
          )}

          {/* ================================================================= */}
          {/* 2. PHYSICAL CCS2 FAST CHARGING GUN & HEAVY CABLE (Left Section) */}
          {/* ================================================================= */}
          <g
            className="transition-transform duration-700 ease-out"
            style={{ transform: isPlugged ? "translateX(0px)" : "translateX(-35px)" }}
          >
            {/* Heavy-Duty Flexible Cable Entering From Bottom-Left */}
            <path
              d="M -10 138 C 48 142, 80 116, 112 88"
              stroke="#06090e"
              strokeWidth="20"
              strokeLinecap="round"
            />
            <path
              d="M -10 138 C 48 142, 80 116, 112 88"
              stroke="#151e2b"
              strokeWidth="15"
              strokeLinecap="round"
            />
            <path
              d="M -10 138 C 48 142, 80 116, 112 88"
              stroke="#212e40"
              strokeWidth="11"
              strokeLinecap="round"
            />

            {/* Glowing Laser Energy Pulse Stream Through Cable */}
            {isPlugged && (
              <path
                d="M -10 138 C 48 142, 80 116, 112 88"
                stroke="url(#cableLaserGrad)"
                strokeWidth="3.6"
                strokeLinecap="round"
                className="animate-cable-flow"
                filter="drop-shadow(0 0 6px #00b4d8)"
              />
            )}

            {/* Cable Strain-Relief Ribbed Collar */}
            <rect
              x="100"
              y="84"
              width="13"
              height="16"
              rx="2.5"
              transform="rotate(-34 100 84)"
              fill="#111720"
              stroke="#2b394d"
              strokeWidth="1"
            />

            {/* Ergonomic Charging Gun Chassis */}
            <path
              d="M 104 98 C 110 81, 122 64, 138 58 L 174 51 C 185 49, 196 53, 201 62 L 230 64 L 230 89 L 200 93 C 193 99, 184 103, 172 105 L 132 109 C 119 111, 107 107, 104 98 Z"
              fill="url(#gunChassisGrad)"
              stroke="#3e5068"
              strokeWidth="1.4"
            />

            {/* Ergonomic Cyan Power Inlay Stripe */}
            <path
              d="M 130 69 C 143 64, 160 62, 173 64 L 170 72 C 158 70, 144 72, 133 76 Z"
              fill="#00b4d8"
              opacity="0.95"
              filter="drop-shadow(0 0 5px #00b4d8)"
            />

            {/* EVION Laser-Etched Wordmark on Gun Handle */}
            <text
              x="144"
              y="84"
              fill="#ffffff"
              fontSize="7.5"
              fontWeight="900"
              fontFamily="system-ui, sans-serif"
              letterSpacing="1"
            >
              EVION
            </text>

            {/* Top Auto-Lock Spring Latch Mechanism */}
            <path d="M 188 49 L 222 49 L 226 56 L 192 56 Z" fill="#090e15" stroke={isPlugged ? "#00E676" : "#64748b"} strokeWidth="0.9" />
            {/* Latch Status Indicator Pill (Vivid Emerald Green) */}
            <rect
              x="198"
              y="50.5"
              width="16"
              height="3.2"
              rx="1.6"
              fill={isPlugged ? "#00E676" : "#475569"}
              filter={isPlugged ? "drop-shadow(0 0 6px #00E676)" : ""}
            />

            {/* Gun Mating Barrel (Seated firmly inside vehicle inlet) */}
            <path d="M 220 58 L 236 60 L 236 91 L 220 89 Z" fill="#0d141e" stroke="#00b4d8" strokeWidth="1.3" />

            {/* Active Contact Sparks & Corona Flash at Interface */}
            {isPlugged && (
              <>
                <line x1="233" y1="65" x2="239" y2="65" stroke="#ffffff" strokeWidth="2.2" filter="drop-shadow(0 0 5px #00E676)" />
                <line x1="233" y1="84" x2="240" y2="84" stroke="#ffffff" strokeWidth="3" filter="drop-shadow(0 0 8px #00E676)" />
                <circle cx="236" cy="85" r="3.5" fill="#ffffff" className="animate-spark" filter="drop-shadow(0 0 10px #00E676)" />
              </>
            )}
          </g>
        </svg>
      </div>

      {/* ===================================================================== */}
      {/* 3. BOTTOM TELEMETRY HUD BAR */}
      {/* ===================================================================== */}
      <div className="relative z-20 flex items-center justify-between pt-2 border-t border-white/10 px-1 text-[8px] sm:text-[9px] font-mono">
        <div className="flex items-center gap-1.5 text-neutral-300">
          <ShieldCheck className="w-3 h-3 text-[#00b4d8]" />
          <span>ISO 15118 PROTOCOL</span>
        </div>

        <div className="text-cyan-300 font-bold flex items-center gap-1">
          <Zap className="w-2.5 h-2.5 text-cyan-400 animate-pulse" />
          <span>+{addedKm} KM ADDED</span>
        </div>

        {/* Interactive Click to Test Plug-In / Disconnect Action */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            setIsPlugged((prev) => !prev);
          }}
          className="text-emerald-400 hover:text-emerald-300 font-bold flex items-center gap-1 bg-emerald-950/60 border border-emerald-500/40 px-2 py-0.5 rounded cursor-pointer transition-colors shadow-sm"
          title="Click to test plug-in / lock action"
        >
          <span className={`w-1.5 h-1.5 rounded-full ${isPlugged ? "bg-emerald-400" : "bg-neutral-500"}`} />
          <span>{isPlugged ? "LOCKED" : "PLUG IN"}</span>
        </button>
      </div>
    </div>
  );
}