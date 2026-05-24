"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

type Program = {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  duration: string;
  eligibility: string;
  affiliation?: string;
  description: string;
  highlights: string[];
  hue: { from: string; to: string };
};

const programs: Program[] = [
  {
    id: "bsc-nursing",
    badge: "RGUHS Affiliated",
    title: "B.Sc. Nursing",
    subtitle: "Bachelor of Science in Nursing",
    duration: "4 Years",
    eligibility: "10+2 with PCB",
    affiliation: "Rajiv Gandhi University of Health Sciences",
    description:
      "A comprehensive undergraduate nursing programme that builds clinical competence, critical thinking, and compassionate care — grounded in hospital-based training from year one.",
    highlights: [
      "Medical-Surgical Nursing",
      "Community Health Nursing",
      "Pediatric Nursing",
      "Obstetric & Gynecological Nursing",
      "Psychiatric & Mental Health Nursing",
      "Nursing Administration & Research",
    ],
    hue: { from: "#5eead4", to: "#22d3ee" },
  },
  {
    id: "bpt",
    badge: "Degree Program",
    title: "BPT",
    subtitle: "Bachelor of Physiotherapy",
    duration: "4.5 Years",
    eligibility: "10+2 with PCB",
    description:
      "An intensive physiotherapy programme combining biomechanical science with hands-on clinical rotations — producing therapists who can assess, treat, and rehabilitate across every patient population.",
    highlights: [
      "Orthopedic Physiotherapy",
      "Neurological Rehabilitation",
      "Cardiopulmonary Physiotherapy",
      "Sports Physiotherapy & Performance",
      "Pediatric Physiotherapy",
      "Community-Based Rehabilitation",
    ],
    hue: { from: "#67e8f9", to: "#818cf8" },
  },
  {
    id: "mit",
    badge: "Allied Health",
    title: "Medical Imaging Technology",
    subtitle: "B.Sc. in Medical Imaging Technology",
    duration: "3 Years",
    eligibility: "10+2 with PCB/PCM",
    description:
      "Training in the full spectrum of diagnostic imaging — from conventional radiography to advanced cross-sectional modalities — with daily clinical exposure in a multi-specialty hospital environment.",
    highlights: [
      "Diagnostic Radiography (X-ray)",
      "Computed Tomography (CT)",
      "Magnetic Resonance Imaging (MRI)",
      "Ultrasonography",
      "Nuclear Medicine Imaging",
    ],
    hue: { from: "#818cf8", to: "#c084fc" },
  },
  {
    id: "aott",
    badge: "Allied Health",
    title: "Anesthesia & OT Technology",
    subtitle: "B.Sc. in Anesthesia & Operation Theater Technology",
    duration: "3 Years",
    eligibility: "10+2 with PCB",
    description:
      "A specialised programme that prepares technologists for the operating theater and critical care units — managing anesthesia delivery, patient monitoring, and surgical instrumentation under expert supervision.",
    highlights: [
      "Anesthesia Delivery & Monitoring",
      "Operation Theater Management",
      "Pre & Post-operative Care",
      "Critical Care Unit Support",
      "Equipment Sterilization & Safety",
    ],
    hue: { from: "#c084fc", to: "#f472b6" },
  },
];

export function DegreePrograms() {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section
      id="degree-programs"
      className="relative w-full bg-bg py-[140px] overflow-hidden"
    >
      {/* Top hairline */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border-strong to-transparent" />

      {/* Ambient */}
      <div className="absolute inset-0 bg-grain opacity-60" />
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div
        className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full opacity-40 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(99,102,241,0.10) 0%, transparent 60%)",
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
              Chapter 04 — Degree Programs
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.1, ease, delay: 0.08 }}
            className="font-display text-[clamp(36px,5.2vw,72px)] leading-[0.96] tracking-[-0.035em] font-medium max-w-[18ch]"
          >
            <span className="text-gradient">Undergraduate programs.</span>{" "}
            <span className="serif-italic text-gradient-teal">
              Career-defining
            </span>{" "}
            <span className="text-gradient">foundations.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease, delay: 0.18 }}
            className="mt-8 max-w-[60ch] text-[15.5px] leading-[1.6] text-ink-dim"
          >
            {"From nursing to physiotherapy to allied health sciences — "}
            <strong className="font-bold text-ink">EIAMS</strong>
            {" offers university-affiliated degree programmes that pair rigorous academics with hospital-based clinical training from the very first year."}
          </motion.p>
        </div>

        {/* Program cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {programs.map((p, i) => (
            <ProgramCard
              key={p.id}
              program={p}
              index={i}
              isOpen={activeId === p.id}
              onToggle={() =>
                setActiveId(activeId === p.id ? null : p.id)
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
                label: "Programs",
                value: "04",
                sub: "Undergraduate degrees",
              },
              {
                label: "Affiliation",
                value: "RGUHS",
                sub: "University affiliated",
              },
              {
                label: "Eligibility",
                value: "10+2",
                sub: "PCB / PCM stream",
              },
              {
                label: "Clinical",
                value: "Day 1",
                sub: "Hospital training begins",
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

function ProgramCard({
  program,
  index,
  isOpen,
  onToggle,
}: {
  program: Program;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.9, ease, delay: 0.15 + index * 0.08 }}
      className="group glass relative rounded-2xl overflow-hidden cursor-pointer hover:shadow-lg hover:-translate-y-0.5 transition-all duration-500"
      onClick={onToggle}
      onMouseEnter={(e) => { e.currentTarget.style.borderColor = `${program.hue.from}60`; }}
      onMouseLeave={(e) => { e.currentTarget.style.borderColor = ''; }}
    >
      {/* Hover fill */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
        style={{
          background: `linear-gradient(160deg, ${program.hue.from}40 0%, ${program.hue.to}28 50%, ${program.hue.from}0a 100%)`,
        }}
      />

      <div className="relative p-7 md:p-8">
        {/* Badge row */}
        <div className="flex items-center justify-between gap-4 mb-4">
          <span
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] tracking-[0.16em] uppercase font-medium"
            style={{
              color: program.hue.from,
              background: `${program.hue.from}30`,
              border: `1px solid ${program.hue.from}55`,
            }}
          >
            <span
              className="w-1 h-1 rounded-full"
              style={{ background: program.hue.from }}
            />
            {program.badge}
          </span>

          {/* Toggle icon */}
          <motion.div
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.3, ease }}
            className="w-7 h-7 rounded-full border border-border-strong flex items-center justify-center shrink-0"
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

        {/* Title */}
        <h3 className="font-display text-[clamp(22px,2.2vw,28px)] leading-[1.08] tracking-[-0.02em] font-medium text-ink">
          {program.title}
        </h3>
        <p className="mt-1 text-[13px] text-ink-dim">{program.subtitle}</p>

        {/* Quick stats */}
        <div className="mt-4 flex items-center gap-4 text-[12px] text-ink-mute">
          <span className="flex items-center gap-1.5">
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: program.hue.from }}
            />
            {program.duration}
          </span>
          <span className="w-px h-3 bg-border-strong" />
          <span>{program.eligibility}</span>
        </div>

        {/* Expandable content */}
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
                {program.affiliation && (
                  <div className="mb-4 flex items-center gap-2 text-[12px] text-teal">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="tracking-wide">
                      {program.affiliation}
                    </span>
                  </div>
                )}

                <p className="text-[14px] leading-[1.6] text-ink-dim mb-5">
                  {program.description}
                </p>

                <div className="text-[10px] tracking-[0.2em] uppercase text-ink-mute mb-3 font-medium">
                  Key Areas
                </div>
                <ul className="flex flex-col gap-2">
                  {program.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-center gap-2.5 text-[13.5px] leading-[1.45] text-ink"
                    >
                      <span
                        className="w-1 h-1 rounded-full shrink-0"
                        style={{ background: program.hue.from }}
                      />
                      {h}
                    </li>
                  ))}
                </ul>

                <a
                  href="/programs"
                  className="mt-6 inline-flex items-center gap-2 text-[13px] text-ink hover:text-teal transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  View full curriculum
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M5 12 H19 M13 6 L19 12 L13 18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.article>
  );
}
