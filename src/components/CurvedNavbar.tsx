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
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

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
    let lastY = typeof window !== "undefined" ? window.scrollY : 0;
    let touchStartY = 0;
    let ticking = false;

    const setVisibility = (visible: boolean) => {
      setIsVisible((prev) => (prev !== visible ? visible : prev));
    };

    // 1. Mouse Wheel / Trackpad (RAF-throttled to avoid redundant React renders)
    const handleWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) < 6) return;
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          if (e.deltaY > 6) {
            setVisibility(true);
          } else if (e.deltaY < -6) {
            setVisibility(false);
          }
          ticking = false;
        });
      }
    };

    // 2. Touch Swipes (Mobile and tablet gesture response)
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0]?.clientY || 0;
    };

    const handleTouchMove = (e: TouchEvent) => {
      const touchY = e.touches[0]?.clientY || 0;
      const diff = touchStartY - touchY;
      if (Math.abs(diff) > 12) {
        if (!ticking) {
          ticking = true;
          requestAnimationFrame(() => {
            if (diff > 12) {
              setVisibility(true);
            } else if (diff < -12) {
              setVisibility(false);
            }
            touchStartY = touchY;
            ticking = false;
          });
        }
      }
    };

    // 3. Scroll Events (Universal fallback)
    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          const currentY = window.scrollY;
          const diff = currentY - lastY;
          if (Math.abs(diff) > 8) {
            if (diff > 8) {
              setVisibility(true);
            } else if (diff < -8) {
              setVisibility(false);
            }
            lastY = currentY;
          }
          ticking = false;
        });
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
        if (el) {
          const targetOffset = el.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({ top: Math.max(0, targetOffset), behavior: "smooth" });
        }
      }
    }
  };

  if (!isMounted) return null;

  return (
    <nav
      aria-label="Main Navigation"
      className={`fixed bottom-5 sm:bottom-6 left-1/2 -translate-x-1/2 z-[60] w-[94%] sm:w-auto sm:min-w-[420px] max-w-[450px] select-none transition-all duration-300 ease-out ${isVisible
        ? "translate-y-0 opacity-100"
        : "translate-y-44 opacity-0 pointer-events-none"
        }`}
    >
      {/* Glassmorphism Curved Pill Container */}
      <div className="relative bg-white/75 backdrop-blur-2xl backdrop-saturate-180 rounded-[32px] shadow-[0_16px_40px_rgba(0,0,0,0.18),inset_0_1px_1px_rgba(255,255,255,0.9)] border border-white/60 px-3 py-2 flex items-center justify-between">
        {/* Smooth Sliding Active Bubble & Liquid Notch Curves */}
        <div
          className="absolute top-0 bottom-0 left-3 w-[calc((100%-24px)/5)] pointer-events-none transition-transform duration-300 ease-[cubic-bezier(0.34,1.4,0.64,1)] z-20"
          style={{ transform: `translateX(${activeIndex * 100}%)` }}
        >
          {/* Left Concave Inverted Radius Curve */}
          <span
            className="absolute -top-[16px] left-[calc(50%-44px)] w-5 h-5 bg-transparent rounded-br-[18px] shadow-[6px_6px_0_0_rgba(255,255,255,0.8)] pointer-events-none z-10"
            aria-hidden="true"
          />

          {/* Raised Floating Circular Glass Button with Subtle Turquoise Glow */}
          <div className="absolute -top-7 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-white/90 backdrop-blur-2xl border-2 border-white shadow-[0_10px_28px_rgba(0,0,0,0.18),0_0_22px_rgba(0,180,216,0.4)] flex items-center justify-center z-20 transition-all duration-200">
            <ActiveIcon className="w-6 h-6 text-neutral-900 stroke-[2.2]" />
          </div>

          {/* Right Concave Inverted Radius Curve */}
          <span
            className="absolute -top-[16px] right-[calc(50%-44px)] w-5 h-5 bg-transparent rounded-bl-[18px] shadow-[-6px_6px_0_0_rgba(255,255,255,0.8)] pointer-events-none z-10"
            aria-hidden="true"
          />

          {/* Seamless Glass Bridge Fill */}
          <span
            className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-10 h-3.5 bg-white/80 z-15 pointer-events-none"
            aria-hidden="true"
          />
        </div>

        {/* 5 Navigation Tabs (Home, Search, Explore, Franchisee, Profile) */}
        {NAV_ITEMS.map((item) => {
          const isActive = activeTab === item.id;
          const Icon = item.icon;

          return (
            <button
              key={item.id}
              onClick={() => handleTabClick(item)}
              suppressHydrationWarning
              className="relative flex-1 flex flex-col items-center justify-end py-1 group focus:outline-none z-30"
              aria-label={item.label}
            >
              {/* Inactive Icon Slot (Fades out when active tab bubble slides over) */}
              <div
                className={`w-6 h-6 flex items-center justify-center mb-0.5 transition-all duration-200 ${isActive ? "opacity-0 scale-75" : "opacity-100 scale-100 group-hover:scale-110"
                  }`}
              >
                <Icon className="w-5 h-5 text-neutral-500 stroke-[1.9] group-hover:text-neutral-900 transition-colors" />
              </div>

              {/* Label: Bold dark when active, soft charcoal when inactive */}
              <span
                className={`text-[11px] tracking-tight transition-all duration-200 ${
                  isActive
                    ? "font-extrabold text-neutral-900 pt-1"
                    : item.id === "franchisee"
                    ? "font-bold text-[#0077e6] group-hover:text-black"
                    : "font-semibold text-neutral-500 group-hover:text-neutral-900"
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
