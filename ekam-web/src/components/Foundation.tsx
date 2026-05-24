"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

type Stat = {
  value: number;
  suffix: string;
  label: string;
};

const stats: Stat[] = [
  { value: 10, suffix: "+", label: "Programs & Fellowships" },
  { value: 1800, suffix: "+", label: "Live Procedures / Year" },
  { value: 50, suffix: "+", label: "Specialist Faculty" },
  { value: 24, suffix: "/7", label: "Cath Lab & ICU Access" },
];

const ease = [0.22, 1, 0.36, 1] as const;

function useCountUp(target: number, duration: number, start: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime: number | null = null;
    let frame: number;

    function animate(timestamp: number) {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));

      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      }
    }

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [target, duration, start]);

  return count;
}

function formatNumber(n: number): string {
  return n.toLocaleString("en-IN");
}

export function Foundation() {
  return (
    <section
      id="foundation"
      className="relative w-full bg-bg py-[140px] overflow-hidden"
    >
      {/* Ambient backdrop */}
      <div className="absolute inset-0 bg-grain opacity-70" />
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1100px] h-[600px] rounded-full opacity-40 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(94,234,212,0.12) 0%, transparent 60%)",
          filter: "blur(40px)",
        }}
      />

      <div className="relative max-w-[1440px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] gap-12 lg:gap-20 items-start">
          {/* Left: eyebrow + headline + subhead */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, ease }}
              className="flex items-center gap-3 mb-8"
            >
              <span className="w-8 h-px bg-teal" />
              <span className="text-[11px] tracking-[0.24em] uppercase text-teal font-medium">
                Chapter 01 — The Foundation
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1.1, ease, delay: 0.08 }}
              className="font-display text-[clamp(36px,5.2vw,72px)] leading-[0.96] tracking-[-0.035em] font-medium max-w-[16ch]"
            >
              <span className="text-gradient">Built for outcomes.</span>
              <br />
              <span className="serif-italic text-gradient-teal">Measured</span>{" "}
              <span className="text-gradient">by them.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1, ease, delay: 0.18 }}
              className="mt-8 max-w-[46ch] text-[15.5px] leading-[1.6] text-ink-dim"
            >
              <strong className="font-bold text-ink">EIAMS</strong>
              {" isn't a brochure of intentions. It's a working institute — defined by the volume of procedures, the depth of faculty, and the access we hand our fellows from the first week."}
            </motion.p>
          </div>

          {/* Right: stat grid */}
          <div className="grid grid-cols-2 gap-3 md:gap-4">
            {stats.map((s, i) => (
              <StatCard key={s.label} stat={s} index={i} />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom hairline */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border-strong to-transparent" />
    </section>
  );
}

function StatCard({ stat, index }: { stat: Stat; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const count = useCountUp(stat.value, 2000 + index * 300, isInView);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, ease, delay: 0.25 + index * 0.09 }}
      className="group glass relative rounded-2xl p-7 md:p-9 min-h-[180px] md:min-h-[200px] flex flex-col justify-between overflow-hidden hover:border-teal/40 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-500"
    >
      {/* Hover fill */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
        style={{
          background:
            "linear-gradient(160deg, rgba(94,234,212,0.35) 0%, rgba(34,211,238,0.2) 50%, rgba(13,148,136,0.08) 100%)",
        }}
      />

      {/* Corner mark */}
      <div className="flex items-start justify-between">
        <span className="text-[10px] tracking-[0.24em] uppercase text-ink-mute font-medium">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="w-1.5 h-1.5 rounded-full bg-teal/60 group-hover:bg-teal transition-colors" />
      </div>

      {/* Value */}
      <div>
        <div
          className="font-display tracking-[-0.04em] leading-[0.95] font-medium text-gradient-teal"
          style={{ fontSize: "clamp(40px, 4.6vw, 64px)" }}
        >
          {formatNumber(count)}{stat.suffix}
        </div>
        <div className="mt-3 text-[12px] tracking-[0.16em] uppercase text-ink-dim">
          {stat.label}
        </div>
      </div>
    </motion.div>
  );
}
