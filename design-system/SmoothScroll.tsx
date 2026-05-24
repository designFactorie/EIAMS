/**
 * EKAM Design System — Smooth Scroll Wrapper
 *
 * Drop this component into your project and render it inside your layout
 * or page to enable buttery-smooth scroll physics via Lenis.
 *
 * Usage:
 *   import { SmoothScroll } from "@/components/SmoothScroll";
 *   // Inside your page/layout:
 *   <SmoothScroll />
 *
 * Requires: npm install lenis
 */

"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.4,
    });

    let raf = 0;
    function tick(time: number) {
      lenis.raf(time);
      raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);

  return null;
}
