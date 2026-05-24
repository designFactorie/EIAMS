"use client";

import { motion } from "framer-motion";
import { useCallback, useRef, useState } from "react";

const PATH =
  "M 0 60 L 200 60 L 220 60 L 240 55 L 260 65 L 280 60 L 320 60 L 340 20 L 360 100 L 380 35 L 400 60 L 460 60 L 480 50 L 500 70 L 520 60 L 600 60 L 620 60 L 640 55 L 660 65 L 680 60 L 720 60 L 740 20 L 760 100 L 780 35 L 800 60 L 900 60 L 920 50 L 940 70 L 960 60 L 1100 60 L 1120 60 L 1140 55 L 1160 65 L 1180 60 L 1220 60 L 1240 20 L 1260 100 L 1280 35 L 1300 60 L 1440 60";

const DRAW_MS = 7000;

export function EcgLine({ className = "" }: { className?: string }) {
  const [run, setRun] = useState(0);
  const lockedUntil = useRef(0);

  const replay = useCallback(() => {
    if (performance.now() < lockedUntil.current) return;
    lockedUntil.current = performance.now() + DRAW_MS;
    setRun((r) => r + 1);
  }, []);

  return (
    <div
      className={`relative w-full ${className}`}
      onMouseEnter={replay}
      onTouchStart={replay}
    >
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="w-full h-full"
        aria-hidden
      >
        <defs>
          <linearGradient id="ecg-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#5eead4" stopOpacity="0" />
            <stop offset="20%" stopColor="#5eead4" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#67e8f9" stopOpacity="1" />
            <stop offset="80%" stopColor="#5eead4" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#5eead4" stopOpacity="0" />
          </linearGradient>
          <filter id="ecg-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Wide invisible hit target so the hover lands anywhere along the strip */}
        <path
          d={PATH}
          stroke="transparent"
          strokeWidth="48"
          fill="none"
          pointerEvents="stroke"
          vectorEffect="non-scaling-stroke"
        />

        <motion.path
          key={run}
          d={PATH}
          stroke="url(#ecg-grad)"
          strokeWidth="1.5"
          fill="none"
          filter="url(#ecg-glow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            pathLength: { duration: DRAW_MS / 1000, ease: [0.22, 1, 0.36, 1] },
            opacity: { duration: 0.8 },
          }}
          pointerEvents="none"
        />
      </svg>
    </div>
  );
}
