"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const highlights = [
  {
    icon: "building" as const,
    title: "Multi-Specialty Infrastructure",
    description:
      "Training inside a 300+ bed multi-specialty hospital with full surgical suites, cath labs, and hybrid operating theaters.",
  },
  {
    icon: "procedures" as const,
    title: "Live Procedural Volume",
    description:
      "1,800+ live procedures per year across interventional, surgical, and critical care disciplines — from day one.",
  },
  {
    icon: "faculty" as const,
    title: "Expert Faculty Network",
    description:
      "50+ specialist consultants across disciplines serve as mentors, co-operators, and research guides throughout training.",
  },
  {
    icon: "access" as const,
    title: "24/7 Clinical Access",
    description:
      "Round-the-clock access to cath labs, ICUs, operation theaters, and simulation centers — no waiting, no observation-only rotations.",
  },
];

export function Partnership() {
  return (
    <section className="relative w-full bg-bg py-[140px] overflow-hidden">
      {/* Top hairline */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border-strong to-transparent" />

      {/* Ambient */}
      <div className="absolute inset-0 bg-grain opacity-60" />
      <div className="absolute inset-0 bg-grid opacity-40" />

      {/* Teal glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full opacity-40 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(94,234,212,0.10) 0%, transparent 60%)",
          filter: "blur(60px)",
        }}
      />

      <div className="relative max-w-[1440px] mx-auto px-6 lg:px-10">
        {/* Centered layout */}
        <div className="text-center max-w-[800px] mx-auto">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease }}
            className="flex items-center justify-center gap-3 mb-10"
          >
            <span className="w-8 h-px bg-teal" />
            <span className="text-[11px] tracking-[0.24em] uppercase text-teal font-medium">
              Powered by Partnership
            </span>
            <span className="w-8 h-px bg-teal" />
          </motion.div>

          {/* Logos */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease, delay: 0.08 }}
            className="flex items-center justify-center gap-6 md:gap-10 mb-10"
          >
            <img
              src="/ekam-logo.png"
              alt="EKAM Institute"
              className="h-16 md:h-24 object-contain drop-shadow-2xl"
            />
            <div className="flex flex-col items-center gap-1">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                className="text-teal"
              >
                <path
                  d="M18 8h1a4 4 0 010 8h-1M6 8H5a4 4 0 000 8h1M8 12h8"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <img
              src="/sakra-logo.png"
              alt="Sakra World Hospital"
              className="h-16 md:h-24 object-contain drop-shadow-2xl"
            />
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.1, ease, delay: 0.12 }}
            className="font-display text-[clamp(32px,4.8vw,64px)] leading-[0.96] tracking-[-0.035em] font-medium"
          >
            <span className="text-gradient">EKAM Institute</span>{" "}
            <span className="serif-italic text-gradient-teal">&</span>
            <br />
            <span className="text-gradient">Sakra World Hospital</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease, delay: 0.2 }}
            className="mt-8 max-w-[56ch] mx-auto text-[16px] md:text-[17px] leading-[1.6] text-ink-dim"
          >
            World-class clinical infrastructure meets advanced medical
            education.{" "}
            <strong className="font-bold text-ink">
              EIAMS
            </strong>{" "}
            is strategically partnered with{" "}
            <strong className="font-bold text-ink">
              Sakra World Hospital
            </strong>{" "}
            — training the next generation of specialists inside a working
            multi-specialty hospital in Bangalore.
          </motion.p>
        </div>

        {/* Video + Highlights grid */}
        <div className="mt-20 grid lg:grid-cols-2 gap-6 lg:gap-8 items-start">
          {/* Video card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease, delay: 0.1 }}
            className="relative rounded-2xl overflow-hidden border border-border aspect-[16/10]"
          >
            <video
              src="/ekam-sakra.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] tracking-[0.18em] uppercase font-medium bg-black/50 backdrop-blur-md text-white/80 border border-white/10">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-teal opacity-75 animate-ping" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-teal" />
                </span>
                Sakra World Hospital, Bangalore
              </span>
            </div>
          </motion.div>

          {/* Highlight cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((h, i) => (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, ease, delay: 0.2 + i * 0.08 }}
                className="group glass rounded-2xl p-6 relative overflow-hidden hover:shadow-lg hover:-translate-y-0.5 hover:border-teal/40 transition-all duration-500"
              >
                {/* Hover fill */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                  style={{
                    background:
                      "linear-gradient(160deg, rgba(94,234,212,0.35) 0%, rgba(34,211,238,0.2) 50%, rgba(13,148,136,0.06) 100%)",
                  }}
                />
                <div className="relative">
                  <HighlightIcon type={h.icon} />
                  <h3 className="mt-4 font-display text-[15px] leading-[1.2] tracking-[-0.01em] font-medium text-ink">
                    {h.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-[1.5] text-ink-dim">
                    {h.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom hairline */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border-strong to-transparent" />
    </section>
  );
}

function HighlightIcon({ type }: { type: string }) {
  const iconClass =
    "w-9 h-9 rounded-lg flex items-center justify-center border border-teal/20 bg-teal/[0.06]";

  switch (type) {
    case "building":
      return (
        <div className={iconClass}>
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            className="text-teal"
          >
            <path
              d="M3 21h18M5 21V7l8-4v18M13 21V3l6 3v15M9 9v.01M9 13v.01M9 17v.01M17 9v.01M17 13v.01M17 17v.01"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      );
    case "procedures":
      return (
        <div className={iconClass}>
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            className="text-teal"
          >
            <path
              d="M22 12h-4l-3 9L9 3l-3 9H2"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      );
    case "faculty":
      return (
        <div className={iconClass}>
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            className="text-teal"
          >
            <path
              d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      );
    case "access":
      return (
        <div className={iconClass}>
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            className="text-teal"
          >
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M12 6v6l4 2"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      );
    default:
      return null;
  }
}
