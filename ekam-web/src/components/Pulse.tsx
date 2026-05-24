"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

type Card = {
  tag: string;
  title: string;
  description: string;
  hue: { from: string; to: string };
  art: "target" | "vessel" | "constellation";
  offset: string; // tailwind translate-y class for desktop stagger
};

const cards: Card[] = [
  {
    tag: "Simulation",
    title: "Skills Lab",
    description:
      "High-fidelity simulators for cardiac, robotic, and laparoscopic procedures. Rehearse the case before you ever walk into the live suite.",
    hue: { from: "#5eead4", to: "#22d3ee" },
    art: "target",
    offset: "lg:translate-y-0",
  },
  {
    tag: "Procedures",
    title: "Live Theatres",
    description:
      "Daily console hours in cath labs, hybrid suites, and ORs — alongside working interventionists, surgeons, and intensivists.",
    hue: { from: "#67e8f9", to: "#818cf8" },
    art: "vessel",
    offset: "lg:translate-y-14",
  },
  {
    tag: "Research",
    title: "Boards & Trials",
    description:
      "Weekly tumour boards and multi-disciplinary case reviews, a structured publication pathway, and protocol-track research from year one.",
    hue: { from: "#a5b4fc", to: "#c084fc" },
    art: "constellation",
    offset: "lg:translate-y-4",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export function Pulse() {
  return (
    <section
      id="pulse"
      className="relative w-full bg-bg py-[140px] overflow-hidden"
    >
      {/* Top hairline */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border-strong to-transparent" />

      {/* Ambient backdrop */}
      <div className="absolute inset-0 bg-grain opacity-60" />

      <div className="relative max-w-[1440px] mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="mb-20 max-w-[920px]">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="w-8 h-px bg-teal" />
            <span className="text-[11px] tracking-[0.24em] uppercase text-teal font-medium">
              Chapter 05 — The Pulse
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.1, ease, delay: 0.08 }}
            className="font-display text-[clamp(36px,5.2vw,72px)] leading-[0.96] tracking-[-0.035em] font-medium max-w-[18ch]"
          >
            <span className="text-gradient">Three modes of training.</span>{" "}
            <span className="serif-italic text-gradient-teal">One</span>{" "}
            <span className="text-gradient">unbroken rhythm.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease, delay: 0.18 }}
            className="mt-8 max-w-[60ch] text-[15.5px] leading-[1.6] text-ink-dim"
          >
            {"A fellowship at "}
            <strong className="font-bold text-ink">EIAMS</strong>
            {" doesn’t move in semesters — it moves in shifts. Simulator hours, procedural floors, and research rounds run in parallel from the first week. This is what the rhythm looks like."}
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6">
          {cards.map((c, i) => (
            <PulseCard key={c.title} card={c} index={i} />
          ))}
        </div>
      </div>

      {/* Bottom hairline */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border-strong to-transparent" />
    </section>
  );
}

function PulseCard({ card, index }: { card: Card; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.95, ease, delay: 0.25 + index * 0.1 }}
      className={`group relative ${card.offset}`}
    >
      <div className="relative rounded-2xl overflow-hidden border border-border hover:border-border-strong transition-colors duration-700 h-[440px] sm:h-[540px] lg:h-[580px]">
        {/* Hue wash */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(170deg, ${card.hue.from}55 0%, ${card.hue.to}35 45%, var(--color-surface) 100%)`,
          }}
        />

        {/* Subtle grid */}
        <div className="absolute inset-0 bg-grid opacity-50" />

        {/* Artwork */}
        <div className="absolute inset-0">
          {card.art === "target" && <TargetArt hue={card.hue} />}
          {card.art === "vessel" && <VesselArt hue={card.hue} />}
          {card.art === "constellation" && (
            <ConstellationArt hue={card.hue} />
          )}
        </div>

        {/* Bottom gradient for legibility */}
        <div className="absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-bg via-bg/80 to-transparent" />

        {/* Lift glow on hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at top, ${card.hue.from}30 0%, transparent 55%)`,
          }}
        />

        {/* Content */}
        <div className="absolute inset-0 p-7 md:p-8 flex flex-col">
          {/* Tag */}
          <div className="flex items-center gap-2">
            <span
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10.5px] tracking-[0.18em] uppercase font-medium"
              style={{
                color: card.hue.from,
                background: `${card.hue.from}30`,
                border: `1px solid ${card.hue.from}55`,
              }}
            >
              <span
                className="w-1 h-1 rounded-full"
                style={{ background: card.hue.from }}
              />
              {card.tag}
            </span>
            <span className="text-[10.5px] tracking-[0.18em] uppercase text-ink-mute">
              0{index + 1} / 03
            </span>
          </div>

          {/* Title + description anchored to bottom */}
          <div className="mt-auto">
            <h3 className="font-display text-[clamp(28px,2.6vw,36px)] leading-[1.04] tracking-[-0.025em] font-medium text-ink">
              {card.title}
            </h3>
            <p className="mt-4 max-w-[36ch] text-[14px] leading-[1.55] text-ink-dim">
              {card.description}
            </p>

            <div className="mt-6 flex items-center gap-2 text-[12px] text-ink hover:text-teal transition-colors cursor-pointer">
              <span>Inside this mode</span>
              <svg
                width="11"
                height="11"
                viewBox="0 0 24 24"
                fill="none"
                className="transition-transform duration-500 group-hover:translate-x-1"
              >
                <path
                  d="M5 12 H19 M13 6 L19 12 L13 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

/* ---------- Card artworks (SVG) ---------- */

function TargetArt({ hue }: { hue: { from: string; to: string } }) {
  return (
    <div className="absolute inset-0 [mask-image:linear-gradient(180deg,black_25%,transparent_80%)]">
      <svg
        viewBox="0 0 400 400"
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden
      >
        <defs>
          <radialGradient id="target-glow" cx="50%" cy="40%" r="50%">
            <stop offset="0%" stopColor={hue.from} stopOpacity="0.35" />
            <stop offset="100%" stopColor={hue.from} stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="200" cy="170" r="180" fill="url(#target-glow)" />
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 60, ease: "linear", repeat: Infinity }}
          style={{ transformOrigin: "200px 170px" }}
        >
          {[40, 70, 100, 130, 160].map((r, i) => (
            <circle
              key={r}
              cx="200"
              cy="170"
              r={r}
              fill="none"
              stroke={hue.from}
              strokeOpacity={0.18 - i * 0.025}
              strokeWidth={i === 2 ? 0.9 : 0.5}
              strokeDasharray={i % 2 ? "4 6" : undefined}
            />
          ))}
          {/* Crosshair */}
          <line
            x1="20"
            y1="170"
            x2="380"
            y2="170"
            stroke={hue.from}
            strokeOpacity="0.18"
            strokeWidth="0.6"
          />
          <line
            x1="200"
            y1="0"
            x2="200"
            y2="360"
            stroke={hue.from}
            strokeOpacity="0.18"
            strokeWidth="0.6"
          />
          <line
            x1="60"
            y1="30"
            x2="340"
            y2="310"
            stroke={hue.from}
            strokeOpacity="0.1"
            strokeWidth="0.4"
          />
          <line
            x1="340"
            y1="30"
            x2="60"
            y2="310"
            stroke={hue.from}
            strokeOpacity="0.1"
            strokeWidth="0.4"
          />
        </motion.g>
        {/* Center marker */}
        <motion.circle
          cx="200"
          cy="170"
          r="3"
          fill={hue.from}
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        />
        <circle
          cx="200"
          cy="170"
          r="10"
          fill="none"
          stroke={hue.from}
          strokeOpacity="0.6"
        />
      </svg>
    </div>
  );
}

function VesselArt({ hue }: { hue: { from: string; to: string } }) {
  const path =
    "M 30 60 C 90 60 110 100 170 110 C 230 120 260 180 320 200 C 360 215 380 260 380 320";
  const branch1 = "M 170 110 C 210 80 240 40 290 30";
  const branch2 = "M 260 180 C 220 220 200 260 220 330";

  return (
    <div className="absolute inset-0 [mask-image:linear-gradient(180deg,black_25%,transparent_80%)]">
      <svg
        viewBox="0 0 400 400"
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden
      >
        <defs>
          <linearGradient id="vessel-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={hue.from} stopOpacity="0.05" />
            <stop offset="50%" stopColor={hue.from} stopOpacity="0.55" />
            <stop offset="100%" stopColor={hue.to} stopOpacity="0.2" />
          </linearGradient>
          <radialGradient id="vessel-glow" cx="40%" cy="35%" r="60%">
            <stop offset="0%" stopColor={hue.from} stopOpacity="0.3" />
            <stop offset="100%" stopColor={hue.from} stopOpacity="0" />
          </radialGradient>
          <filter id="vessel-blur">
            <feGaussianBlur stdDeviation="1.6" />
          </filter>
        </defs>
        <rect width="400" height="400" fill="url(#vessel-glow)" />

        {/* Faint branch context */}
        <path
          d={branch1}
          stroke={hue.from}
          strokeOpacity="0.18"
          strokeWidth="1.4"
          fill="none"
        />
        <path
          d={branch2}
          stroke={hue.from}
          strokeOpacity="0.18"
          strokeWidth="1.4"
          fill="none"
        />

        {/* Main vessel */}
        <path
          d={path}
          stroke={hue.from}
          strokeOpacity="0.35"
          strokeWidth="2.2"
          fill="none"
          filter="url(#vessel-blur)"
        />
        <path
          d={path}
          stroke="url(#vessel-grad)"
          strokeWidth="1.2"
          fill="none"
        />

        {/* Traveling catheter dot */}
        <motion.circle
          r="3.5"
          fill={hue.from}
          animate={{ offsetDistance: ["0%", "100%"] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            repeatDelay: 0.6,
          }}
          style={{
            offsetPath: `path("${path}")`,
            offsetRotate: "0deg",
            filter: `drop-shadow(0 0 8px ${hue.from})`,
          }}
        />

        {/* Scan-line sweep */}
        <motion.line
          x1="0"
          y1="0"
          x2="400"
          y2="0"
          stroke={hue.from}
          strokeOpacity="0.4"
          strokeWidth="0.6"
          animate={{ y1: [0, 240], y2: [0, 240] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            repeatType: "reverse",
          }}
        />
      </svg>
    </div>
  );
}

function ConstellationArt({ hue }: { hue: { from: string; to: string } }) {
  const { nodes, edges } = useMemo(() => {
    const rand = mulberry32(13);
    const N = 22;
    const nodes = Array.from({ length: N }, () => ({
      x: 40 + rand() * 320,
      y: 30 + rand() * 280,
      r: 1.2 + rand() * 1.4,
    }));
    const edges: [number, number][] = [];
    for (let i = 0; i < N; i++) {
      const nearest = nodes
        .map((n, j) => ({ j, d: Math.hypot(nodes[i].x - n.x, nodes[i].y - n.y) }))
        .filter((e) => e.j !== i)
        .sort((a, b) => a.d - b.d)
        .slice(0, 2);
      for (const { j } of nearest) {
        if (!edges.some(([a, b]) => (a === i && b === j) || (a === j && b === i)))
          edges.push([i, j]);
      }
    }
    return { nodes, edges };
  }, []);

  return (
    <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_50%,transparent_85%)]">
      <svg
        viewBox="0 0 400 380"
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden
      >
        <defs>
          <radialGradient id="const-glow" cx="50%" cy="40%" r="55%">
            <stop offset="0%" stopColor={hue.from} stopOpacity="0.25" />
            <stop offset="100%" stopColor={hue.from} stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="400" height="380" fill="url(#const-glow)" />
        {edges.map(([a, b], i) => (
          <line
            key={i}
            x1={nodes[a].x}
            y1={nodes[a].y}
            x2={nodes[b].x}
            y2={nodes[b].y}
            stroke={hue.from}
            strokeOpacity={0.18}
            strokeWidth="0.5"
          />
        ))}
        {nodes.map((n, i) => (
          <motion.circle
            key={i}
            cx={n.x}
            cy={n.y}
            r={n.r}
            fill={hue.from}
            animate={{ opacity: [0.35, 1, 0.35] }}
            transition={{
              duration: 2.2 + (i % 5) * 0.4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: (i % 7) * 0.25,
            }}
          />
        ))}
      </svg>
    </div>
  );
}

function mulberry32(a: number) {
  return function () {
    let t = (a += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
