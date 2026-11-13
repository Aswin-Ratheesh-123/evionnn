"use client";

import React, { useState, useEffect } from "react";
import { PhoneCall } from "lucide-react";

interface FloatingCallbackButtonProps {
  onOpen: () => void;
}

export default function FloatingCallbackButton({ onOpen }: FloatingCallbackButtonProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 250);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed right-4 sm:right-6 bottom-6 z-40 animate-in fade-in slide-in-from-bottom-3 duration-300">
      <button
        onClick={onOpen}
        className="flex items-center space-x-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-full bg-white text-black font-bold text-xs shadow-2xl border border-neutral-300 hover:border-black hover:bg-neutral-50 transition-all hover:scale-105 active:scale-95 group"
      >
        <span className="w-2 h-2 rounded-full bg-[#00d26a] animate-pulse" />
        <PhoneCall className="w-3.5 h-3.5 text-neutral-800 group-hover:rotate-12 transition-transform" />
        <span className="tracking-tight">Request a callback</span>
      </button>
    </div>
  );
}

