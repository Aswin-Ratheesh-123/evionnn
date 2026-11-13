"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Home, Search, Compass, Handshake, User } from "lucide-react";

interface CurvedNavbarProps {
  onOpenCallbackModal: () => void;
}

interface NavItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  targetId?: string;
  action?: "scroll" | "modal" | "link";
  href?: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: "home", label: "Home", icon: Home, action: "scroll", targetId: "hero" },
  { id: "search", label: "Search", icon: Search, action: "scroll", targetId: "kerala-map" },
  { id: "explore", label: "Explore", icon: Compass, action: "scroll", targetId: "network-showcase" },
  { id: "franchisee", label: "Franchisee", icon: Handshake, action: "link", href: "/franchise" },
  { id: "profile", label: "Profile", icon: User, action: "modal" },
];

export default function CurvedNavbar({ onOpenCallbackModal }: CurvedNavbarProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState("home");
  const [isVisible, setIsVisible] = useState(true);

  // Sync active tab with current page route
  useEffect(() => {
    if (pathname === "/franchise") {
      setActiveTab("franchisee");
    } else {
      setActiveTab("home");
    }
  }, [pathname]);

  // Ultra-responsive Directional Auto-Hide on Scroll:
  // - Scroll down -> navbar slides UP into view
  // - Scroll up -> navbar slides DOWN off-screen
  useEffect(() => {
    let lastY = typeof window !== "undefined" ? (window.pageYOffset || document.documentElement.scrollTop || 0) : 0;
    let touchStartY = 0;

    // 1. Mouse Wheel / Trackpad (Immediate instant response)
    const handleWheel = (e: WheelEvent) => {
      // deltaY > 0 -> scrolling down the page -> slide navbar UP (come up)
      if (e.deltaY > 5) {
        setIsVisible(true);
      }
      // deltaY < 0 -> scrolling up the page -> slide navbar DOWN (go down)
      else if (e.deltaY < -5) {
        setIsVisible(false);
      }
    };

    // 2. Touch Swipes (Mobile and tablet gesture response)
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      const touchY = e.touches[0].clientY;
      const diff = touchStartY - touchY;
      // Finger swiping UP (scrolling page down) -> come up
      if (diff > 8) {
        setIsVisible(true);
        touchStartY = touchY;
      }
      // Finger swiping DOWN (scrolling page up) -> go down
      else if (diff < -8) {
        setIsVisible(false);
        touchStartY = touchY;
      }
    };

    // 3. Scroll Events (Universal fallback for momentum, keyboard arrows, scrollbar)
    const handleScroll = () => {
      const currentY = window.pageYOffset || document.documentElement.scrollTop || window.scrollY || 0;
      const diff = currentY - lastY;

      if (currentY < 0) return;

      if (diff > 6) {
        // Scrolling down -> come up
        setIsVisible(true);
        lastY = currentY;
      } else if (diff < -6) {
        // Scrolling up -> go down
        setIsVisible(false);
        lastY = currentY;
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: true });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const activeIndex = Math.max(
    0,
    NAV_ITEMS.findIndex((item) => item.id === activeTab)
  );

  const ActiveIcon = NAV_ITEMS[activeIndex]?.icon || Home;

  const handleTabClick = (item: NavItem) => {
    setActiveTab(item.id);

    if (item.action === "link" && item.href) {
      router.push(item.href);
      return;
    }

    if (item.action === "modal") {
      onOpenCallbackModal();
    } else if (item.targetId) {
      if (pathname !== "/") {
        router.push(`/#${item.targetId === "hero" ? "" : item.targetId}`);
        return;
      }
      if (item.targetId === "hero") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const el = document.getElementById(item.targetId);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav
      aria-label="Main Navigation"
      className={`fixed bottom-5 sm:bottom-6 left-1/2 -translate-x-1/2 z-50 w-[94%] sm:w-auto sm:min-w-[420px] max-w-[450px] select-none transition-all duration-300 ease-out ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-44 opacity-0 pointer-events-none"
      }`}
    >
      {/* Reference Curved Pill Container */}
      <div className="relative bg-white rounded-[32px] shadow-[0_12px_40px_rgba(0,0,0,0.15)] border border-neutral-200/90 px-3 py-2 flex items-center justify-between">
        {/* Smooth Sliding Active Bubble & Liquid Notch Curves */}
        <div
          className="absolute top-0 bottom-0 left-3 w-[calc((100%-24px)/5)] pointer-events-none transition-transform duration-300 ease-[cubic-bezier(0.34,1.4,0.64,1)] z-20"
          style={{ transform: `translateX(${activeIndex * 100}%)` }}
        >
          {/* Left Concave Inverted Radius Curve */}
          <span
            className="absolute -top-[16px] left-[calc(50%-44px)] w-5 h-5 bg-transparent rounded-br-[18px] shadow-[6px_6px_0_0_#ffffff] pointer-events-none z-10"
            aria-hidden="true"
          />

          {/* Raised Floating Circular White Button */}
          <div className="absolute -top-7 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-white border-[2.5px] border-neutral-300 shadow-[0_6px_18px_rgba(0,0,0,0.14)] flex items-center justify-center z-20 transition-all duration-200">
            <ActiveIcon className="w-6 h-6 text-neutral-900 stroke-[2.2]" />
          </div>

          {/* Right Concave Inverted Radius Curve */}
          <span
            className="absolute -top-[16px] right-[calc(50%-44px)] w-5 h-5 bg-transparent rounded-bl-[18px] shadow-[-6px_6px_0_0_#ffffff] pointer-events-none z-10"
            aria-hidden="true"
          />

          {/* Seamless White Bridge Fill */}
          <span
            className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-10 h-3.5 bg-white z-15 pointer-events-none"
            aria-hidden="true"
          />
        </div>

        {/* 5 Navigation Tabs (Home, Search, Explore, Message, Profile) */}
        {NAV_ITEMS.map((item) => {
          const isActive = activeTab === item.id;
          const Icon = item.icon;

          return (
            <button
              key={item.id}
              onClick={() => handleTabClick(item)}
              className="relative flex-1 flex flex-col items-center justify-end py-1 group focus:outline-none z-30"
              aria-label={item.label}
            >
              {/* Inactive Icon Slot (Fades out when active tab bubble slides over) */}
              <div
                className={`w-6 h-6 flex items-center justify-center mb-0.5 transition-all duration-200 ${
                  isActive ? "opacity-0 scale-75" : "opacity-100 scale-100 group-hover:scale-110"
                }`}
              >
                <Icon className="w-5 h-5 text-neutral-400 stroke-[1.8] group-hover:text-neutral-700 transition-colors" />
              </div>

              {/* Label: Bold dark when active, light gray when inactive */}
              <span
                className={`text-[11px] tracking-tight transition-all duration-200 ${
                  isActive
                    ? "font-bold text-neutral-900 pt-1"
                    : "font-medium text-neutral-400 group-hover:text-neutral-700"
                }`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
