"use client";

import { motion } from "framer-motion";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  year: string;
  hue: { from: string; to: string };
};

const testimonials: Testimonial[] = [
  {
    quote:
      "You don’t observe your way to a complex PCI here. By month three I was scrubbed in for chronic total occlusions with consultants who treat me like a colleague, not an intern.",
    name: "Dr. Aditya Rao",
    role: "Interventional Cardiology",
    year: "Fellow, 2024",
    hue: { from: "#5eead4", to: "#22d3ee" },
  },
  {
    quote:
      "The hybrid suite is the difference. Where else do you get TARE in the morning, an embolization in the afternoon, and a tumour board to defend the case the next day?",
    name: "Dr. Priya Menon",
    role: "Interventional Radiology",
    year: "Fellow, 2025",
    hue: { from: "#67e8f9", to: "#818cf8" },
  },
  {
    quote:
      "Console hours are uncapped. I logged 140 hours on the simulator before my first live robotic prostatectomy. Try finding that anywhere else in the country.",
    name: "Dr. Rohan Iyer",
    role: "Robotic Surgery",
    year: "Fellow, 2024",
    hue: { from: "#818cf8", to: "#c084fc" },
  },
  {
    quote:
      "Every Friday is a tumour board. Pathology, surgery, medical and radiation oncology — all in one room, defending every case. It rewired how I think about cancer.",
    name: "Dr. Anita Kulkarni",
    role: "Surgical Oncology",
    year: "Fellow, 2025",
    hue: { from: "#c084fc", to: "#f472b6" },
  },
  {
    quote:
      "ECMO is taught here, not just talked about. By week six I was running the circuit. By month nine I was teaching the new intake. Nothing about EKAM is ceremonial.",
    name: "Dr. Vikram Singh",
    role: "Critical Care",
    year: "Fellow, 2025",
    hue: { from: "#fb923c", to: "#fbbf24" },
  },
  {
    quote:
      "I came in wanting arthroscopy hours. I left with two PRP protocols I’d helped publish and a job offer from a Premier League club’s medical staff.",
    name: "Dr. Kavya Reddy",
    role: "Sports & Regenerative",
    year: "Fellow, 2024",
    hue: { from: "#f472b6", to: "#fb923c" },
  },
  {
    quote:
      "Mentorship at EKAM isn’t an HR slide. My consultant calls me after midnight to discuss a borderline case. That is the standard the institute sets.",
    name: "Dr. Arjun Bhatt",
    role: "Interventional Cardiology",
    year: "Fellow, 2023",
    hue: { from: "#5eead4", to: "#22d3ee" },
  },
  {
    quote:
      "Six months in I was performing biliary drainages independently. I never thought I’d say that about fellowship year one — but the volume here makes it inevitable.",
    name: "Dr. Sneha Patil",
    role: "Interventional Radiology",
    year: "Fellow, 2024",
    hue: { from: "#67e8f9", to: "#818cf8" },
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export function Voice() {
  // Two rows running in opposite directions
  const rowA = testimonials.slice(0, 4);
  const rowB = testimonials.slice(4, 8);

  return (
    <section
      id="voice"
      className="relative w-full bg-bg py-[140px] overflow-hidden"
    >
      {/* Hairlines + ambient */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border-strong to-transparent" />
      <div className="absolute inset-0 bg-grain opacity-50" />

      {/* Section header */}
      <div className="relative max-w-[1440px] mx-auto px-6 lg:px-10 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="w-8 h-px bg-teal" />
          <span className="text-[11px] tracking-[0.24em] uppercase text-teal font-medium">
            Chapter 06 — The Voice
          </span>
        </motion.div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.1, ease, delay: 0.08 }}
            className="font-display text-[clamp(36px,5.2vw,72px)] leading-[0.96] tracking-[-0.035em] font-medium max-w-[18ch]"
          >
            <span className="text-gradient">From the people</span>
            <br />
            <span className="text-gradient">actually </span>
            <span className="serif-italic text-gradient-teal">becoming</span>
            <span className="text-gradient"> specialists.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease, delay: 0.18 }}
            className="max-w-[42ch] text-[15px] leading-[1.6] text-ink-dim"
          >
            No PR voices. No edited testimonials. These are fellows who walked
            into the suite, the lab, and the boardroom — and walked out with a
            different career.
          </motion.p>
        </div>
      </div>

      {/* Marquee rows */}
      <div className="relative flex flex-col gap-4">
        <div
          className="marquee"
          style={{ ["--marquee-duration" as string]: "85s" }}
        >
          <div className="marquee-track marquee-track-left">
            {[...rowA, ...rowA].map((t, i) => (
              <Card key={`a-${i}`} t={t} />
            ))}
          </div>
        </div>

        <div
          className="marquee"
          style={{ ["--marquee-duration" as string]: "105s" }}
        >
          <div className="marquee-track marquee-track-right">
            {[...rowB, ...rowB].map((t, i) => (
              <Card key={`b-${i}`} t={t} />
            ))}
          </div>
        </div>
      </div>

      {/* Hint */}
      <div className="relative max-w-[1440px] mx-auto px-6 lg:px-10 mt-10 text-[11px] tracking-[0.18em] uppercase text-ink-mute">
        Hover to pause
      </div>

      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border-strong to-transparent" />
    </section>
  );
}

function Card({ t }: { t: Testimonial }) {
  const initials = t.name
    .replace("Dr.", "")
    .trim()
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2);

  return (
    <article
      className="group glass relative rounded-2xl p-5 sm:p-7 md:p-8 w-[300px] sm:w-[340px] md:w-[400px] shrink-0 overflow-hidden hover:shadow-lg transition-all duration-500"
      style={{ minHeight: 250 }}
    >
      {/* hover fill */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
        style={{
          background: `linear-gradient(160deg, ${t.hue.from}38 0%, ${t.hue.to}22 50%, ${t.hue.from}08 100%)`,
        }}
      />

      {/* quote glyph */}
      <div
        className="absolute top-5 right-6 font-serif text-[64px] leading-none opacity-30"
        style={{ color: t.hue.from }}
      >
        “
      </div>

      <p className="relative text-[14.5px] leading-[1.55] text-ink">
        {t.quote}
      </p>

      <div className="relative mt-6 flex items-center gap-3">
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center text-[11px] font-medium tracking-tight"
          style={{
            background: `linear-gradient(135deg, ${t.hue.from}40, ${t.hue.to}20)`,
            border: `1px solid ${t.hue.from}40`,
            color: t.hue.from,
          }}
        >
          {initials}
        </div>
        <div className="flex flex-col leading-tight">
          <span className="text-[13px] text-ink font-medium tracking-tight">
            {t.name}
          </span>
          <span className="text-[11px] tracking-[0.06em] text-ink-dim">
            {t.role} · {t.year}
          </span>
        </div>
      </div>
    </article>
  );
}
