"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

type Fellowship = {
  name: string;
  fellowships: string[];
  hue: { from: string; to: string };
};

const categories: Fellowship[] = [
  {
    name: "Cardiac Care",
    hue: { from: "#0d9488", to: "#0891b2" },
    fellowships: [
      "Interventional Cardiac Care",
      "Echocardiography",
      "Cardiac Physiology",
    ],
  },
  {
    name: "Anesthesia Technology",
    hue: { from: "#0891b2", to: "#6366f1" },
    fellowships: [
      "Physician Assistant",
      "Pain Medicine Technology",
      "Oncology Surgery Technology",
      "Robotic Assisted Surgery Technology",
    ],
  },
  {
    name: "Medical Imaging",
    hue: { from: "#6366f1", to: "#8b5cf6" },
    fellowships: [
      "Interventional Radiology Technology",
      "MRI",
      "Cardiac Imaging",
    ],
  },
  {
    name: "Respiratory Therapy",
    hue: { from: "#8b5cf6", to: "#d946ef" },
    fellowships: [
      "Intensive Care Therapy",
      "Interventional Pulmonary Care",
      "Pulmonary Rehabilitation",
    ],
  },
  {
    name: "Hyperbaric Medicine",
    hue: { from: "#d946ef", to: "#f43f5e" },
    fellowships: ["Hyperbaric Oxygen Therapy"],
  },
  {
    name: "Physiotherapy",
    hue: { from: "#0d9488", to: "#0891b2" },
    fellowships: [
      "Pulmonary Therapy",
      "Sports Therapy",
      "Neuro Physiotherapy",
      "Cardiac Physiotherapy",
      "Advanced Wireless Electrotherapy",
      "Geriatric Rehabilitation",
      "Oncology Physiotherapy",
    ],
  },
  {
    name: "Neurosciences Technology",
    hue: { from: "#0891b2", to: "#6366f1" },
    fellowships: [
      "IONM (Intraoperative Neuro Monitoring)",
      "Neuro Interventional Technology",
    ],
  },
  {
    name: "Perfusion Technology",
    hue: { from: "#6366f1", to: "#8b5cf6" },
    fellowships: ["ECMO (Extracorporeal Membrane Oxygenation)"],
  },
  {
    name: "Occupational Therapy",
    hue: { from: "#8b5cf6", to: "#d946ef" },
    fellowships: [
      "Neuro Occupational Therapy",
      "Cardiac Occupational Therapy",
      "Pulmonary Occupational Therapy",
      "Oncology Occupational Therapy",
      "Sports Occupational Therapy",
    ],
  },
];

const totalFellowships = categories.reduce(
  (sum, c) => sum + c.fellowships.length,
  0
);

export function AlliedHealthcare() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section
      id="allied-healthcare"
      className="relative w-full bg-bg py-[140px] overflow-hidden"
    >
      {/* Top hairline */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border-strong to-transparent" />

      {/* Ambient */}
      <div className="absolute inset-0 bg-grain opacity-60" />
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div
        className="absolute bottom-0 left-0 w-[700px] h-[700px] rounded-full opacity-40 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(13,148,136,0.10) 0%, transparent 60%)",
          filter: "blur(40px)",
        }}
      />

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
              Chapter 03 — Allied Healthcare Fellowships
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.1, ease, delay: 0.08 }}
            className="font-display text-[clamp(36px,5.2vw,72px)] leading-[0.96] tracking-[-0.035em] font-medium max-w-[20ch]"
          >
            <span className="text-gradient">Specialized skills</span>
            <br />
            <span className="text-gradient">for </span>
            <span className="serif-italic text-gradient-teal">
              allied professionals.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease, delay: 0.18 }}
            className="mt-8 max-w-[60ch] text-[15.5px] leading-[1.6] text-ink-dim"
          >
            {"One-year structured programmes for BSc, MSc, BPT, and MPT graduates at "}
            <strong className="font-bold text-ink">EIAMS</strong>
            {" — enhancing specialized clinical skills and employability in advanced healthcare settings across nine disciplines."}
          </motion.p>
        </div>

        {/* Category grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {categories.map((cat, i) => (
            <CategoryCard
              key={cat.name}
              category={cat}
              index={i}
              isOpen={openId === cat.name}
              onToggle={() =>
                setOpenId(openId === cat.name ? null : cat.name)
              }
            />
          ))}
        </div>

        {/* Summary bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, ease, delay: 0.1 }}
          className="mt-10 glass rounded-2xl p-8 md:p-10"
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {[
              {
                label: "Disciplines",
                value: String(categories.length).padStart(2, "0"),
                sub: "Specialty areas",
              },
              {
                label: "Fellowships",
                value: `${totalFellowships}+`,
                sub: "Individual programmes",
              },
              {
                label: "Eligibility",
                value: "BSc/MSc",
                sub: "BPT / MPT graduates",
              },
              {
                label: "Duration",
                value: "1 Year",
                sub: "Theory + clinical + practice",
              },
            ].map((item) => (
              <div key={item.label}>
                <span className="text-[10px] tracking-[0.24em] uppercase text-teal font-medium">
                  {item.label}
                </span>
                <div className="mt-2 font-display text-[clamp(22px,2.5vw,32px)] leading-[1] tracking-[-0.03em] font-medium text-gradient-teal">
                  {item.value}
                </div>
                <span className="mt-1 block text-[12px] text-ink-mute">
                  {item.sub}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom hairline */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border-strong to-transparent" />
    </section>
  );
}

function CategoryCard({
  category,
  index,
  isOpen,
  onToggle,
}: {
  category: Fellowship;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, ease, delay: 0.08 + index * 0.06 }}
      className="group glass relative rounded-2xl overflow-hidden cursor-pointer hover:shadow-lg hover:-translate-y-0.5 transition-all duration-500"
      onClick={onToggle}
      style={{
        borderColor: undefined,
      }}
      onMouseEnter={(e) => { e.currentTarget.style.borderColor = `${category.hue.from}60`; }}
      onMouseLeave={(e) => { e.currentTarget.style.borderColor = ''; }}
    >
      {/* Hover fill */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
        style={{
          background: `linear-gradient(160deg, ${category.hue.from}40 0%, ${category.hue.to}28 50%, ${category.hue.from}0a 100%)`,
        }}
      />

      <div className="relative p-7 md:p-8">
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span
                className="w-2 h-2 rounded-full"
                style={{ background: category.hue.from }}
              />
              <span className="text-[10px] tracking-[0.2em] uppercase text-ink-mute font-medium">
                {category.fellowships.length}{" "}
                {category.fellowships.length === 1
                  ? "Fellowship"
                  : "Fellowships"}
              </span>
            </div>
            <h3 className="font-display text-[clamp(18px,1.8vw,22px)] leading-[1.12] tracking-[-0.02em] font-medium text-ink">
              {category.name}
            </h3>
          </div>

          {/* Toggle icon */}
          <motion.div
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.3, ease }}
            className="mt-1 w-7 h-7 rounded-full border border-border-strong flex items-center justify-center shrink-0"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              className="text-ink-dim"
            >
              <path
                d="M6 1v10M1 6h10"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </motion.div>
        </div>

        {/* Expandable list */}
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease }}
              className="overflow-hidden"
            >
              <div className="pt-5 mt-5 border-t border-border">
                <ul className="flex flex-col gap-2.5">
                  {category.fellowships.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2.5 text-[13.5px] leading-[1.45] text-ink-dim"
                    >
                      <span
                        className="w-1 h-1 rounded-full mt-[7px] shrink-0"
                        style={{ background: category.hue.from }}
                      />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.article>
  );
}
