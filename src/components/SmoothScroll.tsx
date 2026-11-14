"use client";

import React, { useEffect } from "react";

interface SmoothScrollProps {
  children: React.ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  useEffect(() => {
    // Respect user's accessibility preference
    if (typeof window === "undefined" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let isRunning = false;
    let targetY = window.scrollY;
    let currentY = window.scrollY;
    let animationFrameId: number;

    // Damping factor: 0.085 provides that signature silky, luxurious momentum glide
    const ease = 0.085;

    const updateScroll = () => {
      const diff = targetY - currentY;

      // Snap to target and stop loop once close enough
      if (Math.abs(diff) < 0.5) {
        currentY = targetY;
        window.scrollTo(0, currentY);
        isRunning = false;
        return;
      }

      currentY += diff * ease;
      window.scrollTo(0, currentY);

      if (isRunning) {
        animationFrameId = requestAnimationFrame(updateScroll);
      }
    };

    const handleWheel = (e: WheelEvent) => {
      // Allow native scrolling inside modals, scrollable menus, or dropdowns
      let target = e.target as HTMLElement | null;
      while (target && target !== document.body) {
        const style = window.getComputedStyle(target);
        const overflowY = style.overflowY;
        if (overflowY === "auto" || overflowY === "scroll") {
          const isScrollable = target.scrollHeight > target.clientHeight;
          if (isScrollable) {
            const isAtTop = target.scrollTop === 0 && e.deltaY < 0;
            const isAtBottom = target.scrollTop + target.clientHeight >= target.scrollHeight - 1 && e.deltaY > 0;
            if (!isAtTop && !isAtBottom) {
              return;
            }
          }
        }
        target = target.parentElement;
      }

      // Detect precision trackpad vs stepped mouse wheel:
      // Trackpads emit small, continuous float values with deltaMode === 0
      const isTrackpad = Math.abs(e.deltaY) < 36 && e.deltaMode === 0;
      if (isTrackpad) {
        // Let native smooth trackpad physics take over directly
        targetY = window.scrollY;
        currentY = window.scrollY;
        return;
      }

      // Stepped mouse wheel on Windows/macOS: smoothly interpolate momentum
      e.preventDefault();

      // Ensure target starts from current position if not currently in flight
      if (!isRunning) {
        currentY = window.scrollY;
        targetY = window.scrollY;
      }

      let delta = e.deltaY;
      if (e.deltaMode === 1) delta *= 40; // Lines mode
      else if (e.deltaMode === 2) delta *= window.innerHeight; // Pages mode

      // If user quickly reverses scroll direction, immediately align to current position
      if ((delta > 0 && targetY < currentY) || (delta < 0 && targetY > currentY)) {
        targetY = currentY;
      }

      const maxScroll = Math.max(
        0,
        document.documentElement.scrollHeight - window.innerHeight
      );

      // Multiplier gives responsive distance per notch
      targetY = Math.max(0, Math.min(maxScroll, targetY + delta * 1.15));

      if (!isRunning) {
        isRunning = true;
        animationFrameId = requestAnimationFrame(updateScroll);
      }
    };

    // Synchronize coordinates if user drags scrollbar or presses PageDown/Up
    const handleScroll = () => {
      if (!isRunning) {
        targetY = window.scrollY;
        currentY = window.scrollY;
      }
    };

    // Smoothly animate in-page anchor links (#network-showcase, #kerala-map, etc.)
    const handleAnchorClick = (e: MouseEvent) => {
      const link = (e.target as HTMLElement).closest("a");
      if (!link) return;

      const href = link.getAttribute("href");
      if (href && href.startsWith("#") && href.length > 1) {
        const targetElement = document.querySelector(href);
        if (targetElement) {
          e.preventDefault();
          const targetOffset =
            targetElement.getBoundingClientRect().top + window.scrollY;
          const maxScroll =
            document.documentElement.scrollHeight - window.innerHeight;
          targetY = Math.max(0, Math.min(maxScroll, targetOffset));

          if (!isRunning) {
            isRunning = true;
            currentY = window.scrollY;
            animationFrameId = requestAnimationFrame(updateScroll);
          }
        }
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("click", handleAnchorClick);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleAnchorClick);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <>{children}</>;
}
