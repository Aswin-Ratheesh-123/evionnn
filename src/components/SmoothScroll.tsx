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

    // Damping factor: 0.09 provides an ultra-responsive, silky-smooth momentum glide
    const ease = 0.09;

    const stopScrollAnimation = () => {
      if (isRunning) {
        isRunning = false;
        cancelAnimationFrame(animationFrameId);
        currentY = window.scrollY;
        targetY = window.scrollY;
      }
    };

    const updateScroll = () => {
      const diff = targetY - currentY;

      // Snap to target and stop loop once close enough (sub-0.5px)
      if (Math.abs(diff) < 0.5) {
        currentY = targetY;
        window.scrollTo({
          top: Math.round(currentY),
          left: 0,
          behavior: "instant" as ScrollBehavior,
        });
        isRunning = false;
        return;
      }

      currentY += diff * ease;
      window.scrollTo({
        top: Math.round(currentY),
        left: 0,
        behavior: "instant" as ScrollBehavior,
      });

      if (isRunning) {
        animationFrameId = requestAnimationFrame(updateScroll);
      }
    };

    const handleWheel = (e: WheelEvent) => {
      // Allow native scrolling inside scrollable modals, menus, or nested containers
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

      // Detect precision trackpads / touchpads vs discrete notched mouse wheels:
      // Trackpads emit continuous float numbers (e.deltaY % 1 !== 0) with deltaMode === 0.
      // Notched mouse wheels emit discrete integer steps (deltaMode === 1 lines, or 100/120 increments).
      const isTrackpad =
        e.deltaMode === 0 &&
        (Math.abs(e.deltaY) % 1 !== 0 || Math.abs(e.deltaY) < 32);

      if (isTrackpad) {
        // Let native OS / browser trackpad inertia take over with zero interference
        stopScrollAnimation();
        return;
      }

      // Discrete notched mouse wheel: intercept to provide butter-smooth momentum
      e.preventDefault();

      // Ensure target starts from current position if not currently running
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

      // Multiplier gives responsive distance per wheel click
      targetY = Math.max(0, Math.min(maxScroll, targetY + delta * 1.15));

      if (!isRunning) {
        isRunning = true;
        animationFrameId = requestAnimationFrame(updateScroll);
      }
    };

    // Synchronize coordinates if user drags scrollbar or page moves externally
    const handleScroll = () => {
      // If native scroll moved far away from current lerp (e.g. user dragged scrollbar thumb), sync immediately
      if (Math.abs(window.scrollY - currentY) > 50 && isRunning) {
        stopScrollAnimation();
      } else if (!isRunning) {
        targetY = window.scrollY;
        currentY = window.scrollY;
      }
    };

    // Immediate cancellation on touch gesture or keyboard scroll
    const handleTouchStart = () => {
      stopScrollAnimation();
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End", " "].includes(e.key)) {
        stopScrollAnimation();
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
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("keydown", handleKeyDown, { passive: true });
    document.addEventListener("click", handleAnchorClick);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("click", handleAnchorClick);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <>{children}</>;
}
