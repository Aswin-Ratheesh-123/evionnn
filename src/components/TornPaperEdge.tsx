"use client";

import React, { useId } from "react";

interface TornPaperEdgeProps {
  fillColor?: string; // Color of the torn paper body below the tear (e.g., "#7ec8e3", "#ffffff", "#00b4d8")
  flipY?: boolean; // Flip upside down (tear at bottom vs tear at top)
  flipX?: boolean; // Mirror left-right
  heightClass?: string; // Tailwind height class, default: "h-8 sm:h-14"
  className?: string;
}

// Exact 1:1 contour extracted from the authentic torn paper cutting image
const TORN_PATH =
  "M0,62 L0,30 L3,28 L6,29 L9,27 L12,26 L15,24 L18,23 L21,21 L24,22 L27,22 L30,22 L33,22 L36,22 L39,23 L42,25 L45,26 L48,28 L51,29 L54,29 L57,28 L60,28 L63,29 L66,28 L69,27 L72,27 L75,29 L78,29 L81,29 L84,26 L87,28 L90,28 L93,26 L96,23 L99,24 L102,23 L105,26 L108,26 L111,26 L114,25 L117,26 L120,26 L123,26 L126,26 L129,26 L132,26 L135,27 L138,26 L141,26 L144,29 L147,30 L150,30 L153,31 L156,29 L159,27 L162,27 L165,28 L168,29 L171,30 L174,31 L177,30 L180,30 L183,28 L186,26 L189,28 L192,27 L195,26 L198,25 L201,25 L204,25 L207,25 L210,28 L213,30 L216,30 L219,30 L222,35 L225,35 L228,35 L231,33 L234,32 L237,33 L240,33 L243,34 L246,28 L249,28 L252,28 L255,28 L258,27 L261,30 L264,30 L267,28 L270,26 L273,26 L276,24 L279,22 L282,21 L285,21 L288,20 L291,20 L294,19 L297,18 L300,20 L303,20 L306,19 L309,20 L312,20 L315,21 L318,20 L321,19 L324,19 L327,20 L330,20 L333,20 L336,25 L339,25 L342,20 L345,20 L348,21 L351,24 L354,26 L357,27 L360,28 L363,28 L366,29 L369,27 L372,26 L375,26 L378,25 L381,23 L384,21 L387,20 L390,19 L393,19 L396,19 L399,21 L402,20 L405,20 L408,22 L411,24 L414,25 L417,26 L420,27 L423,26 L426,25 L429,26 L432,26 L435,25 L438,25 L441,24 L444,26 L447,27 L450,25 L453,25 L456,27 L459,25 L462,22 L465,22 L468,21 L471,23 L474,24 L477,24 L480,23 L483,24 L486,24 L489,24 L492,24 L495,24 L498,24 L501,25 L504,25 L507,23 L510,26 L513,28 L516,28 L519,28 L522,27 L525,25 L528,25 L531,25 L534,26 L537,27 L540,28 L543,28 L546,27 L549,26 L552,24 L555,26 L558,25 L561,25 L564,23 L567,23 L570,24 L573,25 L576,30 L579,32 L582,32 L585,32 L588,37 L591,38 L594,37 L597,36 L600,35 L603,35 L606,36 L609,37 L612,31 L615,31 L618,30 L621,30 L624,30 L627,31 L630,32 L633,31 L636,29 L639,28 L642,27 L645,25 L648,24 L651,23 L654,23 L657,22 L660,22 L663,21 L666,21 L669,23 L672,22 L675,22 L678,23 L681,23 L684,23 L687,22 L690,22 L693,22 L696,22 L699,22 L702,27 L705,27 L708,25 L711,23 L714,23 L717,25 L720,27 L723,29 L726,30 L729,30 L732,31 L735,31 L738,28 L741,29 L744,28 L747,26 L750,25 L753,23 L756,22 L759,22 L762,22 L765,22 L768,23 L771,22 L774,23 L777,24 L780,26 L783,27 L786,29 L789,30 L792,29 L795,28 L798,29 L801,28 L804,27 L807,27 L810,29 L813,29 L816,30 L819,27 L822,27 L825,29 L828,27 L831,24 L834,24 L837,23 L840,26 L843,26 L846,26 L849,25 L852,26 L855,26 L858,26 L861,26 L864,26 L867,26 L870,27 L873,27 L876,26 L879,28 L882,30 L885,30 L888,31 L891,29 L894,27 L897,27 L900,28 L903,29 L906,30 L909,30 L912,30 L915,30 L918,29 L921,27 L924,28 L927,27 L930,29 L933,25 L936,25 L939,25 L942,24 L945,28 L948,30 L951,30 L954,30 L957,34 L960,36 L963,35 L966,33 L969,32 L972,33 L975,33 L978,34 L981,29 L984,28 L987,28 L990,28 L993,27 L996,28 L999,30 L1002,29 L1005,26 L1008,26 L1011,25 L1014,24 L1017,25 L1020,26 L1024,26 L1024,62 Z";

export default function TornPaperEdge({
  fillColor = "#7ec8e3",
  flipY = false,
  flipX = false,
  heightClass = "h-8 sm:h-14",
  className = "",
}: TornPaperEdgeProps) {
  const rawId = useId();
  const filterId = `torn-shadow-${rawId.replace(/[^a-zA-Z0-9]/g, "_")}`;
  const transform = `${flipX ? "scaleX(-1)" : ""} ${flipY ? "scaleY(-1)" : ""}`.trim();

  return (
    <div
      className={`w-full overflow-hidden leading-none z-20 relative pointer-events-none ${className}`}
      style={transform ? { transform } : undefined}
    >
      <svg
        viewBox="0 0 1024 62"
        fill="none"
        preserveAspectRatio="none"
        className={`w-full ${heightClass} block`}
      >
        <defs>
          <filter id={filterId} x="-2%" y="-35%" width="104%" height="170%">
            <feDropShadow dx="0" dy="-2.5" stdDeviation="2.5" floodColor="#000000" floodOpacity="0.12" />
          </filter>
        </defs>

        {/* Realistic Ambient Paper Shadow onto surface behind/above */}
        <path
          d={TORN_PATH}
          fill={fillColor}
          filter={`url(#${filterId})`}
        />

        {/* Authentic Multi-Layer White Paper Fiber Pulp / Deckle Fringe */}
        <path
          d={TORN_PATH}
          fill="rgba(255, 255, 255, 0.95)"
          transform="translate(0, -1.2)"
        />

        <path
          d={TORN_PATH}
          fill="rgba(255, 255, 255, 0.55)"
          transform="translate(0, -0.6)"
        />

        {/* Main Torn Paper Surface Body */}
        <path d={TORN_PATH} fill={fillColor} />
      </svg>
    </div>
  );
}
