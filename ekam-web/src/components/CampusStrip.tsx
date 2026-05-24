"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const facilities = [
  { label: "Cath Labs", count: "3" },
  { label: "Hybrid Suites", count: "2" },
  { label: "ICU Beds", count: "120+" },
  { label: "Operation Theaters", count: "12" },
  { label: "Simulation Center", count: "1" },
  { label: "Research Wing", count: "1" },
];

export function CampusStrip() {
  return (
    <section className="relative w-full bg-bg py-20 overflow-hidden">
      {/* Top hairline */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border-strong to-transparent" />

      <div className="absolute inset-0 bg-grain opacity-40" />

      <div className="relative max-w-[1440px] mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, ease }}
          className="glass rounded-2xl p-8 md:p-12 relative overflow-hidden"
        >
          {/* Ambient glow inside card */}
          <div
            className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full opacity-30 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse, rgba(94,234,212,0.12) 0%, transparent 60%)",
              filter: "blur(40px)",
            }}
          />

          <div className="relative flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Left: logos + message */}
            <div className="flex-1 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-4 mb-5">
                <img
                  src="/ekam-logo.png"
                  alt="EKAM"
                  className="h-8 md:h-10 object-contain"
                />
                <span className="text-[10px] tracking-[0.2em] uppercase text-ink-mute">
                  at
                </span>
                <img
                  src="/sakra-logo.png"
                  alt="Sakra World Hospital"
                  className="h-8 md:h-10 object-contain"
                />
              </div>

              <h3 className="font-display text-[clamp(22px,2.8vw,32px)] leading-[1.05] tracking-[-0.02em] font-medium text-ink">
                Every program delivered inside{" "}
                <span className="serif-italic text-gradient-teal">
                  Sakra World Hospital.
                </span>
              </h3>

              <p className="mt-3 max-w-[50ch] text-[14px] leading-[1.55] text-ink-dim mx-auto lg:mx-0">
                From undergraduate degrees to advanced fellowships — all
                clinical training happens inside a fully-operational
                multi-specialty hospital. No affiliated centers. No satellite
                campuses. One institution, one hospital.
              </p>
            </div>

            {/* Right: facility chips */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 shrink-0">
              {facilities.map((f, i) => (
                <motion.div
                  key={f.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, ease, delay: 0.1 + i * 0.06 }}
                  className="flex flex-col items-center gap-1 px-4 py-3 rounded-xl bg-surface border border-border min-w-[100px]"
                >
                  <span className="font-display text-[20px] md:text-[24px] tracking-[-0.03em] font-medium text-gradient-teal leading-none">
                    {f.count}
                  </span>
                  <span className="text-[10px] tracking-[0.14em] uppercase text-ink-mute text-center whitespace-nowrap">
                    {f.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom hairline */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border-strong to-transparent" />
    </section>
  );
}
