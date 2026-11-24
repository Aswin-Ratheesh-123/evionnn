"use client";

import React, { useId } from "react";

interface PaperCutBoxProps {
  children: React.ReactNode;
  fillColor?: string;
  className?: string;
  deckleColor?: string;
  onClick?: () => void;
  as?: "div" | "span" | "button";
}

// Hand-torn authentic paper cutout contour with organic micro-tears on all 4 borders
const PAPERCUT_PATH =
  "M 2,5.5 L 6,3.5 L 12,5 L 18,3 L 25,4.5 L 32,2.8 L 40,4.2 L 48,2.5 L 56,4.5 L 64,3 L 72,4.8 L 80,2.8 L 88,4.5 L 94,3.2 L 98,5.5 L 98.8,11 L 97.2,18 L 98.8,25 L 97.5,32 L 98,34.5 L 93,37.5 L 86,35.8 L 78,37.5 L 70,35.8 L 62,37.2 L 54,35.5 L 46,37.5 L 38,35.8 L 30,37.5 L 22,35.8 L 14,37.2 L 7,35.5 L 2,34.5 L 1.2,28 L 2.8,21 L 1.2,14 L 2,5.5 Z";

export default function PaperCutBox({
  children,
  fillColor = "#525252",
  className = "",
  deckleColor = "rgba(255, 255, 255, 0.95)",
  onClick,
  as = "div",
}: PaperCutBoxProps) {
  const rawId = useId();
  const filterId = `papercut-${rawId.replace(/[^a-zA-Z0-9]/g, "_")}`;
  const Component = as;

  return (
    <Component
      onClick={onClick}
      className={`relative inline-flex items-center justify-center transition-all duration-200 group select-none ${className}`}
    >
      {/* Background Authentic Paper Cut SVG Silhouette */}
      <svg
        viewBox="0 0 100 40"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
      >
        <defs>
          <filter id={filterId} x="-10%" y="-20%" width="120%" height="150%">
            <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#000000" floodOpacity="0.22" />
          </filter>
        </defs>

        {/* White Paper Pulp / Deckle Fiber Fringe on Cut Edges */}
        <path
          d={PAPERCUT_PATH}
          fill={deckleColor}
          transform="translate(0, -1)"
        />

        {/* Main Colored Paper Cut Fill with Paper Shadow */}
        <path
          d={PAPERCUT_PATH}
          fill={fillColor}
          filter={`url(#${filterId})`}
          className="transition-colors duration-200"
        />
      </svg>

      {/* Foreground Content */}
      <span className="relative z-10 w-full flex items-center justify-center pointer-events-auto">
        {children}
      </span>
    </Component>
  );
}
