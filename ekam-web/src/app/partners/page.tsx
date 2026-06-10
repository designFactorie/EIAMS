"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FooterLight } from "@/components/FooterLight";
import { NavigationLight } from "@/components/NavigationLight";
import { SmoothScroll } from "@/components/SmoothScroll";

const ease = [0.22, 1, 0.36, 1] as const;

const healthnobsServices = [
  {
    icon: "staffing",
    title: "Healthcare Staffing",
    description:
      "Rapid deployment of pre-screened nurses, physicians, and allied health professionals within 24–48 hours.",
  },
  {
    icon: "recruitment",
    title: "Talent Recruitment",
    description:
      "End-to-end recruitment pipeline connecting EKAM graduates with top hospitals and healthcare facilities pan-India.",
  },
  {
    icon: "hr",
    title: "HR & Compliance",
    description:
      "Comprehensive workforce management — contracts, payroll, PF/ESI compliance, and performance tracking.",
  },
  {
    icon: "marketing",
    title: "Industry Marketing",
    description:
      "Strategic marketing partnerships to amplify EKAM's reach across the healthcare industry and attract top talent.",
  },
];

export default function PartnersPage() {
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
                Our Partners
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, ease, delay: 0.3 }}
              className="font-display text-[clamp(36px,5.5vw,72px)] leading-[0.96] tracking-[-0.035em] font-medium max-w-[900px]"
            >
              <span className="text-gradient">Building the Future</span>
              <br />
              <span className="serif-italic text-gradient-teal">
                Together
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease, delay: 0.4 }}
              className="mt-8 max-w-[58ch] text-[16px] md:text-[17px] leading-[1.65] text-ink-dim"
            >
              EKAM Institute collaborates with industry leaders who share our
              commitment to transforming healthcare education and workforce
              development. Our partners extend our impact beyond the classroom
              and into the industry.
            </motion.p>
          </div>
        </section>

        {/* ═══ Healthnobs — Industry & Marketing Partner ═══ */}
        <section className="relative w-full py-[120px] md:py-[140px] overflow-hidden">
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border-strong to-transparent" />
          <div className="absolute inset-0 bg-grain opacity-40" />

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
            {/* Section label */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, ease }}
              className="flex items-center gap-3 mb-12"
            >
              <span className="w-8 h-px bg-teal" />
              <span className="text-[11px] tracking-[0.24em] uppercase text-teal font-medium">
                Industry &amp; Marketing Partner
              </span>
            </motion.div>

            {/* Partner card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1, ease, delay: 0.08 }}
              className="glass rounded-2xl p-8 md:p-12 relative overflow-hidden"
            >
              {/* Subtle gradient wash */}
              <div
                className="absolute inset-0 opacity-30 pointer-events-none rounded-2xl"
                style={{
                  background:
                    "linear-gradient(160deg, rgba(94,234,212,0.12) 0%, rgba(34,211,238,0.06) 50%, transparent 100%)",
                }}
              />

              <div className="relative">
                {/* Logo + intro row */}
                <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12 mb-12">
                  {/* Logo */}
                  <div className="flex-shrink-0 w-[160px] h-[160px] md:w-[200px] md:h-[200px] rounded-2xl border border-border bg-white flex items-center justify-center p-4 overflow-hidden">
                    <Image
                      src="/healthnobs-logo.jpeg"
                      alt="Healthnobs"
                      width={180}
                      height={180}
                      className="object-contain"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <h2 className="font-display text-[clamp(28px,3.8vw,48px)] leading-[1] tracking-[-0.035em] font-medium">
                        <span className="text-gradient">Healthnobs</span>
                      </h2>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] tracking-[0.14em] uppercase font-medium border border-teal/30 text-teal bg-teal/[0.06]">
                        Industry &amp; Marketing
                      </span>
                    </div>
                    <p className="max-w-[54ch] text-[15px] md:text-[16px] leading-[1.65] text-ink-dim">
                      India&apos;s leading healthcare staffing and recruitment
                      company, headquartered in Bangalore. Healthnobs bridges
                      the gap between trained healthcare professionals and
                      the institutions that need them — deploying verified
                      staff across hospitals pan-India.
                    </p>
                    <a
                      href="https://healthnobs.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-5 text-[13px] font-medium text-teal hover:text-teal-bright transition-colors"
                    >
                      Visit healthnobs.com
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M7 17L17 7M17 7H7M17 7V17"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Partnership value heading */}
                <motion.h3
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.8, ease, delay: 0.1 }}
                  className="font-display text-[clamp(20px,2.5vw,28px)] leading-[1.1] tracking-[-0.02em] font-medium mb-8"
                >
                  <span className="text-gradient">What this partnership</span>{" "}
                  <span className="serif-italic text-gradient-teal">
                    delivers
                  </span>
                </motion.h3>

                {/* Service cards grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {healthnobsServices.map((s, i) => (
                    <motion.div
                      key={s.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{
                        duration: 0.8,
                        ease,
                        delay: 0.15 + i * 0.08,
                      }}
                      className="group rounded-xl p-6 border border-border bg-bg-elevated/50 hover:border-teal/40 hover:-translate-y-0.5 transition-all duration-500 relative overflow-hidden"
                    >
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-xl"
                        style={{
                          background:
                            "linear-gradient(160deg, rgba(94,234,212,0.25) 0%, rgba(34,211,238,0.12) 50%, transparent 100%)",
                        }}
                      />
                      <div className="relative">
                        <ServiceIcon type={s.icon} />
                        <h4 className="mt-4 font-display text-[15px] leading-[1.2] tracking-[-0.01em] font-medium text-ink">
                          {s.title}
                        </h4>
                        <p className="mt-2 text-[13px] leading-[1.55] text-ink-dim">
                          {s.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border-strong to-transparent" />
        </section>

        {/* ═══ CTA ═══ */}
        <section className="relative w-full py-[100px] md:py-[120px] overflow-hidden">
          <div className="absolute inset-0 bg-grain opacity-40" />

          <div className="relative max-w-[1440px] mx-auto px-6 lg:px-10 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1, ease }}
              className="font-display text-[clamp(28px,3.8vw,48px)] leading-[1] tracking-[-0.035em] font-medium"
            >
              <span className="text-gradient">Interested in partnering</span>
              <br />
              <span className="serif-italic text-gradient-teal">
                with EKAM?
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, ease, delay: 0.1 }}
              className="mt-6 max-w-[48ch] mx-auto text-[15px] md:text-[16px] leading-[1.6] text-ink-dim"
            >
              We&apos;re always looking for organizations that share our vision
              for advancing healthcare education and workforce development.
            </motion.p>
            <motion.a
              href="/contact"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease, delay: 0.2 }}
              className="btn-glow inline-flex items-center justify-center h-[52px] px-8 mt-10 rounded-full bg-ink text-bg-elevated text-[14px] font-semibold transition-transform duration-300 hover:scale-[1.03]"
            >
              Get in Touch
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                className="ml-2"
              >
                <path
                  d="M5 12H19M13 6L19 12L13 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.a>
          </div>
        </section>
      </main>

      <FooterLight />
    </div>
  );
}

function ServiceIcon({ type }: { type: string }) {
  const iconClass =
    "w-9 h-9 rounded-lg flex items-center justify-center border border-teal/20 bg-teal/[0.06]";

  switch (type) {
    case "staffing":
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
    case "recruitment":
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
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      );
    case "hr":
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
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2M12 12h.01M8 16h8"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      );
    case "marketing":
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
    default:
      return null;
  }
}
