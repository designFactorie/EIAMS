"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

type Specialty = {
  id: string;
  index: string;
  name: string;
  tagline: string;
  description: string;
  procedures: string[];
  stats: { value: string; label: string }[];
  hue: { from: string; to: string };
};

const specialties: Specialty[] = [
  {
    id: "interventional",
    index: "01",
    name: "Interventional Specialties",
    tagline: "Precision medicine, delivered through the catheter and the needle",
    description:
      "Fellowships spanning cardiology, radiology, neurology, pain medicine, and anesthesiology — built around live procedural volume in cath labs, hybrid suites, and interventional theatres.",
    procedures: [
      "Interventional Radiology",
      "Interventional Cardiology",
      "Interventional Neurology",
      "Interventional Pain Medicine",
      "Interventional Anesthesiology",
    ],
    stats: [
      { value: "05", label: "Fellowships" },
      { value: "1–2 yr", label: "Duration" },
    ],
    hue: { from: "#5eead4", to: "#22d3ee" },
  },
  {
    id: "surgical",
    index: "02",
    name: "Surgical Specialties",
    tagline: "Where technique meets technology at the operating table",
    description:
      "Advanced surgical fellowships across eight sub-specialties — from robotic knee replacement and spine surgery to liver transplantation and head-and-neck oncology.",
    procedures: [
      "Breast Surgery",
      "Head and Neck Surgery",
      "Spine Surgery",
      "Neurosurgery",
      "Plastic & Reconstructive Surgery",
      "Robotic Knee Replacement Surgery",
      "Surgical Gastroenterology & Liver Diseases",
      "Liver Transplantation",
    ],
    stats: [
      { value: "08", label: "Fellowships" },
      { value: "1–2 yr", label: "Duration" },
    ],
    hue: { from: "#67e8f9", to: "#818cf8" },
  },
  {
    id: "medical-super",
    index: "03",
    name: "Medical Super-Specialties",
    tagline: "The deepest layers of internal medicine, mastered",
    description:
      "Super-specialty training in critical care, endocrinology, reproductive medicine, gastroenterology, oncology, and nephrology — where clinical complexity demands subspecialist depth.",
    procedures: [
      "Critical Care Medicine",
      "Endocrinology",
      "Reproductive Medicine",
      "Medical Gastroenterology",
      "Medical Oncology",
      "Medical Nephrology",
    ],
    stats: [
      { value: "06", label: "Fellowships" },
      { value: "1–2 yr", label: "Duration" },
    ],
    hue: { from: "#818cf8", to: "#c084fc" },
  },
  {
    id: "oncology",
    index: "04",
    name: "Oncology & Advanced Care",
    tagline: "Multi-disciplinary cancer care, from diagnosis to decision",
    description:
      "Fellowships anchored in tumour boards, molecular profiling, and complex resections — training oncologists who think across surgical and medical boundaries.",
    procedures: [
      "Surgical Oncology",
      "Medical Oncology",
    ],
    stats: [
      { value: "02", label: "Fellowships" },
      { value: "Weekly", label: "Tumour boards" },
    ],
    hue: { from: "#c084fc", to: "#f472b6" },
  },
  {
    id: "rehab",
    index: "05",
    name: "Rehabilitation & Sports Medicine",
    tagline: "Returning athletes — and everyone else — to motion",
    description:
      "Fellowships in sports medicine and robotic-assisted rehabilitation — combining arthroscopy, biologics, and advanced rehab technology with elite athletic care pathways.",
    procedures: [
      "Sports Medicine",
      "Robotic-Assisted Rehabilitation",
    ],
    stats: [
      { value: "02", label: "Fellowships" },
      { value: "On-site", label: "Performance lab" },
    ],
    hue: { from: "#f472b6", to: "#fb923c" },
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export function SpecialtyShowcase() {
  const [active, setActive] = useState<string>(specialties[0].id);

  return (
    <section
      id="specialties"
      className="relative w-full bg-bg py-[140px] overflow-hidden"
    >
      {/* Top divider — subtle */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border-strong to-transparent" />

      {/* Section header */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="w-8 h-px bg-teal" />
          <span className="text-[11px] tracking-[0.24em] uppercase text-teal font-medium">
            Chapter 02 — Postgraduate Fellowships
          </span>
        </motion.div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.1, ease, delay: 0.1 }}
            className="font-display text-[clamp(36px,5.4vw,76px)] leading-[0.96] tracking-[-0.035em] font-medium max-w-[20ch]"
          >
            <span className="text-gradient">Five PG tracks.</span>
            <br />
            <span className="serif-italic text-gradient-teal">
              One institution
            </span>{" "}
            <span className="text-gradient">built for them.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease, delay: 0.2 }}
            className="max-w-[44ch] text-[15px] leading-[1.6] text-ink-dim"
          >
            {"Each postgraduate fellowship at "}
            <strong className="font-bold text-ink">EIAMS</strong>
            {" is engineered around advanced clinical training, procedural expertise, and research exposure — designed for doctors who've completed their MD, MS, or DNB. Hover a track to explore."}
          </motion.p>
        </div>
      </div>

      {/* Horizontal panel system */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row h-auto lg:h-[640px] w-full gap-2.5">
          {specialties.map((s) => {
            const isActive = s.id === active;
            return (
              <SpecialtyPanel
                key={s.id}
                specialty={s}
                isActive={isActive}
                onActivate={() => setActive(s.id)}
              />
            );
          })}
        </div>
      </div>

      {/* Hint */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 mt-8 flex items-center justify-between text-[11px] tracking-[0.18em] uppercase text-ink-mute">
        <span className="hidden lg:inline">Hover to expand</span>
        <span className="lg:hidden">Tap to expand</span>
        <span className="hidden md:inline">
          {specialties.length} disciplines · {specialties.find((s) => s.id === active)?.name}
        </span>
      </div>
    </section>
  );
}

function SpecialtyPanel({
  specialty,
  isActive,
  onActivate,
}: {
  specialty: Specialty;
  isActive: boolean;
  onActivate: () => void;
}) {
  return (
    <motion.div
      onMouseEnter={onActivate}
      onFocus={onActivate}
      tabIndex={0}
      role="button"
      aria-expanded={isActive}
      aria-label={specialty.name}
      animate={{ flexGrow: isActive ? 7 : 1 }}
      transition={{ duration: 0.9, ease }}
      className="relative h-[280px] lg:h-full min-w-0 lg:min-w-[88px] rounded-2xl overflow-hidden cursor-pointer outline-none ring-0 focus-visible:ring-2 focus-visible:ring-teal/60"
      style={{ flexBasis: 0 }}
    >
      {/* Background fill */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(160deg, ${specialty.hue.from}60 0%, ${specialty.hue.to}40 60%, var(--color-surface) 100%)`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg/80" />

      {/* Subtle grid texture inside */}
      <div className="absolute inset-0 bg-grid opacity-40" />

      {/* Border */}
      <div className="absolute inset-0 rounded-2xl border border-border" />
      <motion.div
        className="absolute inset-0 rounded-2xl"
        animate={{
          borderColor: isActive
            ? "rgba(13, 148, 136, 0.6)"
            : "rgba(15, 23, 42, 0.15)",
        }}
        transition={{ duration: 0.6, ease }}
        style={{ borderWidth: 1, borderStyle: "solid" }}
      />

      {/* Glow when active */}
      <motion.div
        className="absolute -inset-px rounded-2xl pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: isActive ? 1 : 0 }}
        transition={{ duration: 0.8, ease }}
        style={{
          background: `radial-gradient(ellipse at top, ${specialty.hue.from}50 0%, transparent 60%)`,
        }}
      />

      {/* Vertical index + collapsed name */}
      <div className="absolute top-6 left-6 right-6 flex items-start justify-between">
        <span
          className="text-[11px] tracking-[0.24em] uppercase font-medium"
          style={{ color: isActive ? specialty.hue.from : "#94a3b8" }}
        >
          {specialty.index}
        </span>
        <motion.span
          animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : 8 }}
          transition={{ duration: 0.4, ease }}
          className="text-[11px] tracking-[0.24em] uppercase text-ink-dim"
        >
          Fellowship
        </motion.span>
      </div>

      {/* Collapsed: vertical-rotated name */}
      <AnimatePresence>
        {!isActive && (
          <motion.div
            key="collapsed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <span
              className="block whitespace-nowrap font-display text-[15px] tracking-tight font-medium text-ink"
              style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
            >
              {specialty.name}
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Expanded content */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            key="expanded"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease, delay: 0.2 }}
            className="absolute inset-0 p-8 md:p-10 flex flex-col"
          >
            {/* Top spacer for index */}
            <div className="h-8" />

            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.25 }}
              className="mt-auto"
            >
              <div className="serif-italic text-[15px] text-ink-dim mb-3 max-w-[40ch]">
                {specialty.tagline}
              </div>
              <h3 className="font-display text-[clamp(28px,3.2vw,42px)] leading-[1.02] tracking-[-0.025em] font-medium max-w-[16ch] text-ink">
                {specialty.name}
              </h3>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.32 }}
              className="mt-6 max-w-[52ch] text-[14.5px] leading-[1.55] text-ink-dim"
            >
              {specialty.description}
            </motion.p>

            {/* Procedures + stats */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.4 }}
              className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[640px]"
            >
              <div>
                <div className="text-[10px] tracking-[0.24em] uppercase text-ink-mute mb-3">
                  Core procedures
                </div>
                <ul className="space-y-1.5">
                  {specialty.procedures.map((p, i) => (
                    <motion.li
                      key={p}
                      initial={{ opacity: 0, x: -6 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.5,
                        ease,
                        delay: 0.5 + i * 0.05,
                      }}
                      className="flex items-center gap-2 text-[13.5px] text-ink"
                    >
                      <span
                        className="w-1 h-1 rounded-full"
                        style={{ background: specialty.hue.from }}
                      />
                      {p}
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="text-[10px] tracking-[0.24em] uppercase text-ink-mute mb-3">
                  Programme
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {specialty.stats.map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.6,
                        ease,
                        delay: 0.55 + i * 0.08,
                      }}
                      className="glass rounded-xl p-4"
                    >
                      <div
                        className="font-display text-[24px] tracking-tight font-medium leading-none"
                        style={{ color: specialty.hue.from }}
                      >
                        {stat.value}
                      </div>
                      <div className="mt-2 text-[11px] tracking-[0.16em] uppercase text-ink-mute">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
                <motion.a
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease, delay: 0.72 }}
                  href="#programs"
                  className="mt-6 inline-flex items-center gap-2 text-[13px] text-ink hover:text-teal transition-colors group"
                >
                  View fellowship details
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="transition-transform group-hover:translate-x-1"
                  >
                    <path
                      d="M5 12 H19 M13 6 L19 12 L13 18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
