"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FooterLight } from "@/components/FooterLight";
import { NavigationLight } from "@/components/NavigationLight";
import { SmoothScroll } from "@/components/SmoothScroll";

const ease = [0.22, 1, 0.36, 1] as const;

/* ─── Data ─── */

type Category = {
  name: string;
  hue: { from: string; to: string };
  specialties: string[];
};

const pgCategories: Category[] = [
  {
    name: "Interventional Specialties",
    hue: { from: "#0d9488", to: "#0891b2" },
    specialties: [
      "Interventional Radiology",
      "Interventional Cardiology",
      "Interventional Neurology",
      "Interventional Pain Medicine",
      "Interventional Anesthesiology",
    ],
  },
  {
    name: "Surgical Specialties",
    hue: { from: "#0891b2", to: "#6366f1" },
    specialties: [
      "Breast Surgery",
      "Head and Neck Surgery",
      "Spine Surgery",
      "Neurosurgery",
      "Plastic & Reconstructive Surgery",
      "Robotic Knee Replacement Surgery",
      "Surgical Gastroenterology & Liver Diseases",
      "Liver Transplantation",
    ],
  },
  {
    name: "Medical Super-Specialties",
    hue: { from: "#6366f1", to: "#8b5cf6" },
    specialties: [
      "Critical Care Medicine",
      "Endocrinology",
      "Reproductive Medicine",
      "Medical Gastroenterology",
      "Medical Oncology",
      "Medical Nephrology",
    ],
  },
  {
    name: "Oncology & Advanced Care",
    hue: { from: "#8b5cf6", to: "#d946ef" },
    specialties: ["Surgical Oncology", "Medical Oncology"],
  },
  {
    name: "Rehabilitation & Sports Medicine",
    hue: { from: "#d946ef", to: "#f43f5e" },
    specialties: ["Sports Medicine", "Robotic-Assisted Rehabilitation"],
  },
];

const ugCategories: Category[] = [
  {
    name: "Cardiac Care",
    hue: { from: "#0d9488", to: "#0891b2" },
    specialties: [
      "Interventional Cardiac Care",
      "Echocardiography",
      "Cardiac Physiology",
    ],
  },
  {
    name: "Anesthesia Technology",
    hue: { from: "#0891b2", to: "#6366f1" },
    specialties: [
      "Physician Assistant",
      "Pain Medicine Technology",
      "Oncology Surgery Technology",
      "Robotic Assisted Surgery Technology",
    ],
  },
  {
    name: "Medical Imaging",
    hue: { from: "#6366f1", to: "#8b5cf6" },
    specialties: [
      "Interventional Radiology Technology",
      "MRI",
      "Cardiac Imaging",
    ],
  },
  {
    name: "Respiratory Therapy",
    hue: { from: "#8b5cf6", to: "#d946ef" },
    specialties: [
      "Intensive Care Therapy",
      "Interventional Pulmonary Care",
      "Pulmonary Rehabilitation",
    ],
  },
  {
    name: "Hyperbaric Medicine",
    hue: { from: "#d946ef", to: "#f43f5e" },
    specialties: ["Hyperbaric Oxygen Therapy"],
  },
  {
    name: "Physiotherapy",
    hue: { from: "#0d9488", to: "#0891b2" },
    specialties: [
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
    specialties: [
      "IONM (Intraoperative Neuro Monitoring)",
      "Neuro Interventional Technology",
    ],
  },
  {
    name: "Perfusion Technology",
    hue: { from: "#6366f1", to: "#8b5cf6" },
    specialties: ["ECMO (Extracorporeal Membrane Oxygenation)"],
  },
  {
    name: "Occupational Therapy",
    hue: { from: "#8b5cf6", to: "#d946ef" },
    specialties: [
      "Neuro Occupational Therapy",
      "Cardiac Occupational Therapy",
      "Pulmonary Occupational Therapy",
      "Oncology Occupational Therapy",
      "Sports Occupational Therapy",
    ],
  },
];

const degreeCategories: Category[] = [
  {
    name: "B.Sc. Nursing (RGUHS)",
    hue: { from: "#0d9488", to: "#0891b2" },
    specialties: [
      "Medical-Surgical Nursing",
      "Community Health Nursing",
      "Pediatric Nursing",
      "Obstetric & Gynecological Nursing",
      "Psychiatric & Mental Health Nursing",
      "Nursing Administration & Research",
    ],
  },
  {
    name: "Bachelor of Physiotherapy (BPT)",
    hue: { from: "#0891b2", to: "#6366f1" },
    specialties: [
      "Orthopedic Physiotherapy",
      "Neurological Rehabilitation",
      "Cardiopulmonary Physiotherapy",
      "Sports Physiotherapy & Performance",
      "Pediatric Physiotherapy",
      "Community-Based Rehabilitation",
    ],
  },
  {
    name: "Medical Imaging Technology",
    hue: { from: "#6366f1", to: "#8b5cf6" },
    specialties: [
      "Diagnostic Radiography (X-ray)",
      "Computed Tomography (CT)",
      "Magnetic Resonance Imaging (MRI)",
      "Ultrasonography",
      "Nuclear Medicine Imaging",
    ],
  },
  {
    name: "Anesthesia & Operation Theater Technology",
    hue: { from: "#8b5cf6", to: "#d946ef" },
    specialties: [
      "Anesthesia Delivery & Monitoring",
      "Operation Theater Management",
      "Pre & Post-operative Care",
      "Critical Care Unit Support",
      "Equipment Sterilization & Safety",
    ],
  },
];

/* ─── Page ─── */

export default function ProgramsPage() {
  const [activeTrack, setActiveTrack] = useState<"pg" | "ug" | "degree">("pg");
  const categories =
    activeTrack === "pg"
      ? pgCategories
      : activeTrack === "ug"
        ? ugCategories
        : degreeCategories;

  return (
    <div className="theme-light bg-[#fafbfd] min-h-screen">
      <SmoothScroll />
      <NavigationLight />

      <main className="relative bg-bg text-ink">
        {/* ═══ Hero ═══ */}
        <section className="relative w-full pt-[160px] pb-[100px] overflow-hidden">
          <div className="absolute inset-0 bg-grain opacity-60" />
          <div className="absolute inset-0 bg-grid opacity-40" />

          <div className="relative max-w-[1440px] mx-auto px-6 lg:px-10">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.2 }}
              className="flex items-center gap-3 mb-10"
            >
              <span className="w-8 h-px bg-teal" />
              <span className="text-[11px] tracking-[0.24em] uppercase text-teal font-medium">
                Our Programs
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, ease, delay: 0.3 }}
              className="font-display text-[clamp(40px,6.5vw,96px)] leading-[0.94] tracking-[-0.035em] font-medium max-w-[18ch]"
            >
              <span className="text-gradient">Fellowships built</span>
              <br />
              <span className="text-gradient">for </span>
              <span className="serif-italic text-gradient-teal">
                specialists.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease, delay: 0.5 }}
              className="mt-10 max-w-[58ch] text-[17px] md:text-[18px] leading-[1.6] text-ink-dim"
            >
              From postgraduate super-specialty tracks and allied healthcare
              fellowships to undergraduate degree programmes — every offering at{" "}
              <strong className="font-bold text-ink">EKAM</strong> is structured
              around clinical exposure, procedural volume, and academic rigour.
            </motion.p>
          </div>

          <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border-strong to-transparent" />
        </section>

        {/* ═══ Track Toggle ═══ */}
        <section className="relative w-full py-[80px] md:py-[100px] overflow-hidden">
          <div className="absolute inset-0 bg-grain opacity-30" />

          <div className="relative max-w-[1440px] mx-auto px-6 lg:px-10">
            {/* Toggle */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9, ease }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8 mb-16"
            >
              <div className="flex flex-wrap rounded-full border border-border-strong p-1 bg-bg-elevated">
                <button
                  onClick={() => setActiveTrack("pg")}
                  className={`relative px-5 sm:px-7 py-3 rounded-full text-[14px] sm:text-[16px] font-medium tracking-tight transition-all duration-300 ${
                    activeTrack === "pg"
                      ? "bg-ink text-bg-elevated"
                      : "text-ink-dim hover:text-ink"
                  }`}
                >
                  PG Fellowships
                </button>
                <button
                  onClick={() => setActiveTrack("ug")}
                  className={`relative px-5 sm:px-7 py-3 rounded-full text-[14px] sm:text-[16px] font-medium tracking-tight transition-all duration-300 ${
                    activeTrack === "ug"
                      ? "bg-ink text-bg-elevated"
                      : "text-ink-dim hover:text-ink"
                  }`}
                >
                  Allied Healthcare
                </button>
                <button
                  onClick={() => setActiveTrack("degree")}
                  className={`relative px-5 sm:px-7 py-3 rounded-full text-[14px] sm:text-[16px] font-medium tracking-tight transition-all duration-300 ${
                    activeTrack === "degree"
                      ? "bg-ink text-bg-elevated"
                      : "text-ink-dim hover:text-ink"
                  }`}
                >
                  Degree Programs
                </button>
              </div>

              <div className="flex items-center gap-4 text-[14px] text-ink-mute">
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal" />
                  {activeTrack === "pg"
                    ? "Post MD/MS/DNB"
                    : activeTrack === "ug"
                      ? "Post BSc/MSc/BPT"
                      : "10+2 with PCB/PCM"}
                </span>
                <span className="w-px h-3 bg-border-strong" />
                <span>
                  {activeTrack === "pg"
                    ? "1–2 Year Duration"
                    : activeTrack === "ug"
                      ? "1 Year Duration"
                      : "3–4.5 Year Duration"}
                </span>
              </div>
            </motion.div>

            {/* Track header */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9, ease }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-px bg-teal" />
                <span className="text-[11px] tracking-[0.24em] uppercase text-teal font-medium">
                  {activeTrack === "pg"
                    ? "Postgraduate Fellowship Programs"
                    : activeTrack === "ug"
                      ? "Allied Healthcare Fellowship Programs"
                      : "Undergraduate Degree Programs"}
                </span>
              </div>

              <h2 className="font-display text-[clamp(28px,3.8vw,52px)] leading-[0.96] tracking-[-0.035em] font-medium max-w-[20ch]">
                {activeTrack === "pg" ? (
                  <>
                    <span className="text-gradient">
                      Super-specialty training
                    </span>
                    <br />
                    <span className="text-gradient">for the </span>
                    <span className="serif-italic text-gradient-teal">
                      next frontier.
                    </span>
                  </>
                ) : activeTrack === "ug" ? (
                  <>
                    <span className="text-gradient">
                      Specialized skills
                    </span>
                    <br />
                    <span className="text-gradient">for </span>
                    <span className="serif-italic text-gradient-teal">
                      allied professionals.
                    </span>
                  </>
                ) : (
                  <>
                    <span className="text-gradient">
                      Career-defining
                    </span>
                    <br />
                    <span className="text-gradient">academic </span>
                    <span className="serif-italic text-gradient-teal">
                      foundations.
                    </span>
                  </>
                )}
              </h2>

              <p className="mt-6 max-w-[56ch] text-[15.5px] leading-[1.6] text-ink-dim">
                {activeTrack === "pg"
                  ? "Advanced clinical training, procedural expertise, and research exposure in high-demand subspecialties — designed for doctors who've completed their MD, MS, or DNB."
                  : activeTrack === "ug"
                    ? "One-year structured programmes for BSc, MSc, BPT, and MPT graduates — enhancing specialized clinical skills and employability in advanced healthcare settings."
                    : "University-affiliated undergraduate programmes in nursing, physiotherapy, and allied health sciences — combining rigorous academics with hospital-based clinical training from year one."}
              </p>
            </motion.div>

            {/* Category grid */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTrack}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.5, ease }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5"
              >
                {categories.map((cat, i) => (
                  <CategoryCard key={cat.name} category={cat} index={i} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border-strong to-transparent" />
        </section>

        {/* ═══ Program Structure ═══ */}
        <section className="relative w-full py-[100px] md:py-[120px] overflow-hidden">
          <div className="absolute inset-0 bg-grain opacity-20" />
          <div
            className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(13,148,136,0.04) 0%, transparent 70%)",
            }}
          />

          <div className="relative max-w-[1440px] mx-auto px-6 lg:px-10">
            <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] gap-16 lg:gap-24 items-start">
              {/* Left */}
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
                    Program Structure
                  </span>
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 1.1, ease, delay: 0.08 }}
                  className="font-display text-[clamp(28px,3.8vw,52px)] leading-[0.96] tracking-[-0.035em] font-medium max-w-[16ch]"
                >
                  <span className="text-gradient">How every</span>
                  <br />
                  <span className="text-gradient">fellowship </span>
                  <span className="serif-italic text-gradient-teal">
                    works.
                  </span>
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 1, ease, delay: 0.18 }}
                  className="mt-8 max-w-[42ch] text-[15.5px] leading-[1.6] text-ink-dim"
                >
                  Every programme combines three pillars — clinical immersion,
                  procedural training, and academic rigour — running in parallel
                  from the first week.
                </motion.p>
              </div>

              {/* Right — structure cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                {[
                  {
                    icon: "rotate",
                    title: "Clinical Rotations",
                    description:
                      "Daily ward rounds, OPD exposure, and cross-departmental rotations across affiliated hospital networks.",
                  },
                  {
                    icon: "hands",
                    title: "Procedural Training",
                    description:
                      "Hands-on training in cath labs, hybrid suites, robotic consoles, and high-fidelity simulation centres.",
                  },
                  {
                    icon: "book",
                    title: "Academic Sessions",
                    description:
                      "Weekly case presentations, journal clubs, tumour boards, and structured teaching by specialist faculty.",
                  },
                  {
                    icon: "research",
                    title: "Research Track",
                    description:
                      "Protocol design, data collection, and publication pathway — embedded in the clinical cycle from day one.",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{
                      duration: 0.9,
                      ease,
                      delay: 0.2 + i * 0.08,
                    }}
                    className="group glass relative rounded-2xl p-7 md:p-8 overflow-hidden"
                  >
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                      style={{
                        background:
                          "radial-gradient(ellipse at top left, rgba(13,148,136,0.06) 0%, transparent 60%)",
                      }}
                    />
                    <div className="relative">
                      <div className="flex items-center gap-3 mb-4">
                        <StructureIcon type={item.icon} />
                        <span className="text-[10px] tracking-[0.24em] uppercase text-ink-mute font-medium">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <h3 className="font-display text-[18px] leading-[1.1] tracking-[-0.02em] font-medium text-ink mb-3">
                        {item.title}
                      </h3>
                      <p className="text-[13.5px] leading-[1.55] text-ink-dim">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Eligibility bar */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9, ease, delay: 0.1 }}
              className="mt-16 glass rounded-2xl p-8 md:p-10"
            >
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
                {[
                  {
                    label: "PG Duration",
                    value: "1–2 Years",
                    sub: "Depending on specialty",
                  },
                  {
                    label: "Allied Duration",
                    value: "1 Year",
                    sub: "Theory + clinical + practice",
                  },
                  {
                    label: "Degree Duration",
                    value: "3–4.5 Yrs",
                    sub: "Including internship",
                  },
                  {
                    label: "PG Eligibility",
                    value: "MD / MS / DNB",
                    sub: "In relevant specialty",
                  },
                  {
                    label: "Allied Eligibility",
                    value: "BSc / MSc / BPT",
                    sub: "In allied healthcare",
                  },
                  {
                    label: "Degree Eligibility",
                    value: "10+2 PCB",
                    sub: "Science stream",
                  },
                ].map((item) => (
                  <div key={item.label}>
                    <span className="text-[10px] tracking-[0.24em] uppercase text-teal font-medium">
                      {item.label}
                    </span>
                    <div className="mt-2 font-display text-[clamp(24px,2.5vw,32px)] leading-[1] tracking-[-0.03em] font-medium text-ink">
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

          <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border-strong to-transparent" />
        </section>

        {/* ═══ CTA ═══ */}
        <section className="relative w-full py-[100px] md:py-[120px] overflow-hidden">
          <div className="absolute inset-0 bg-grain opacity-30" />
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(13,148,136,0.05) 0%, transparent 70%)",
            }}
          />

          <div className="relative max-w-[1440px] mx-auto px-6 lg:px-10 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1.1, ease }}
              className="font-display text-[clamp(28px,4.2vw,60px)] leading-[0.96] tracking-[-0.035em] font-medium"
            >
              <span className="text-gradient">Find your </span>
              <span className="serif-italic text-gradient-teal">
                specialty.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1, ease, delay: 0.12 }}
              className="mt-6 max-w-[44ch] mx-auto text-[16px] md:text-[17px] leading-[1.6] text-ink-dim"
            >
              Speak with the admissions team to find the programme that matches
              your background and ambition.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1, ease, delay: 0.22 }}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <a
                href="/contact#enquiry-form"
                className="btn-glow inline-flex items-center justify-center h-[52px] px-8 rounded-full bg-ink text-bg-elevated text-[14px] font-semibold tracking-[-0.01em] transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
              >
                Apply Now
              </a>
              <a
                href="/#contact"
                className="inline-flex items-center justify-center h-[52px] px-8 rounded-full border border-border-strong text-ink text-[14px] font-medium tracking-[-0.01em] transition-all duration-300 hover:border-teal hover:text-teal hover:scale-[1.03] active:scale-[0.98]"
              >
                Talk to Admissions
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      <FooterLight />
    </div>
  );
}

/* ─── Category Card ─── */

function CategoryCard({
  category,
  index,
}: {
  category: Category;
  index: number;
}) {
  const [open, setOpen] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, ease, delay: 0.08 + index * 0.06 }}
      className="group glass relative rounded-2xl overflow-hidden cursor-pointer"
      onClick={() => setOpen(!open)}
    >
      {/* Hover wash */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at top left, ${category.hue.from}12 0%, transparent 60%)`,
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
                {category.specialties.length}{" "}
                {category.specialties.length === 1
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
            animate={{ rotate: open ? 45 : 0 }}
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
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease }}
              className="overflow-hidden"
            >
              <div className="pt-5 mt-5 border-t border-border">
                <ul className="flex flex-col gap-2.5">
                  {category.specialties.map((s) => (
                    <li
                      key={s}
                      className="flex items-start gap-2.5 text-[13.5px] leading-[1.45] text-ink-dim"
                    >
                      <span
                        className="w-1 h-1 rounded-full mt-[7px] shrink-0"
                        style={{ background: category.hue.from }}
                      />
                      {s}
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

/* ─── Structure Icons ─── */

function StructureIcon({ type }: { type: string }) {
  const cls = "w-8 h-8 rounded-lg border border-border flex items-center justify-center";

  if (type === "rotate")
    return (
      <div className={cls}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
          <path
            d="M21 12a9 9 0 1 1-2.64-6.36"
            stroke="var(--color-teal)"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path
            d="M21 3v6h-6"
            stroke="var(--color-teal)"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    );

  if (type === "hands")
    return (
      <div className={cls}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
            stroke="var(--color-teal)"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    );

  if (type === "book")
    return (
      <div className={cls}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
          <path
            d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"
            stroke="var(--color-teal)"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"
            stroke="var(--color-teal)"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    );

  return (
    <div className={cls}>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
        <circle
          cx="11"
          cy="11"
          r="8"
          stroke="var(--color-teal)"
          strokeWidth="1.6"
        />
        <path
          d="M21 21l-4.35-4.35"
          stroke="var(--color-teal)"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
