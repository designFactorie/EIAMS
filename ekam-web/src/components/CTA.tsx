"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export function CTA() {
  return (
    <section className="relative w-full py-[140px] md:py-[180px] bg-bg overflow-hidden">
      {/* Top hairline */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border-strong to-transparent" />

      {/* Ambient glow */}
      <div className="absolute inset-0 bg-grain opacity-40" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(94,234,212,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-[1440px] mx-auto px-6 lg:px-10 text-center">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease }}
          className="flex items-center justify-center gap-3 mb-10"
        >
          <span className="w-8 h-px bg-teal" />
          <span className="text-[11px] tracking-[0.24em] uppercase text-teal font-medium">
            Begin
          </span>
          <span className="w-8 h-px bg-teal" />
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.1, ease, delay: 0.06 }}
          className="font-display text-[clamp(36px,5.6vw,76px)] leading-[0.96] tracking-[-0.035em] font-medium"
        >
          <span className="text-gradient">The Journey Begins</span>
          <br />
          <span className="text-gradient">with </span>
          <span className="serif-italic text-gradient-teal">You.</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease, delay: 0.16 }}
          className="mt-8 max-w-[48ch] mx-auto text-[16px] md:text-[18px] leading-[1.6] text-ink-dim"
        >
          You&apos;ve seen the vision, the legacy, and the potential. Now, take
          the first step towards your own success story.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease, delay: 0.26 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="/contact#enquiry-form"
            className="btn-glow inline-flex items-center justify-center h-[56px] px-10 rounded-full bg-ink text-bg text-[15px] font-semibold tracking-[-0.01em] transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
          >
            Apply Now
          </a>
          <a
            href="/contact#enquiry-form"
            className="inline-flex items-center justify-center h-[56px] px-10 rounded-full border border-border-strong text-ink text-[15px] font-medium tracking-[-0.01em] transition-all duration-300 hover:border-teal hover:text-teal hover:scale-[1.03] active:scale-[0.98]"
          >
            Talk to Admissions
          </a>
        </motion.div>
      </div>
    </section>
  );
}
