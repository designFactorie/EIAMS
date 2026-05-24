"use client";

import { motion } from "framer-motion";
import { FooterLight } from "@/components/FooterLight";
import { NavigationLight } from "@/components/NavigationLight";
import { SmoothScroll } from "@/components/SmoothScroll";

const ease = [0.22, 1, 0.36, 1] as const;

const values = [
  {
    number: "01",
    title: "Procedural Mastery",
    description:
      "Knowledge without technique is theory. Our fellows learn by doing — live cases, real patients, high-stakes decisions from week one.",
  },
  {
    number: "02",
    title: "Mentorship Over Hierarchy",
    description:
      "Faculty don't supervise from a distance. They scrub in beside you, challenge your reasoning, and answer the phone at midnight.",
  },
  {
    number: "03",
    title: "Research as Practice",
    description:
      "Publication isn't a checkbox. It's woven into clinical routine — tumour boards, protocol design, and peer review are part of the rhythm.",
  },
  {
    number: "04",
    title: "Technology as a Given",
    description:
      "Hybrid suites, robotic consoles, high-fidelity simulation — these aren't marketing points. They're the baseline our fellows start from.",
  },
];

export default function AboutPage() {
  return (
    <div className="theme-light bg-[#fafbfd] min-h-screen">
      <SmoothScroll />
      <NavigationLight />

      <main className="relative bg-bg text-ink">
        {/* ═══ Hero ═══ */}
        <section className="relative w-full pt-[160px] pb-[120px] overflow-hidden">
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
                About EKAM
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, ease, delay: 0.3 }}
              className="font-display text-[clamp(40px,6.5vw,96px)] leading-[0.94] tracking-[-0.035em] font-medium max-w-[18ch]"
            >
              <span className="text-gradient">Medicine deserves</span>
              <br />
              <span className="text-gradient">a better </span>
              <span className="serif-italic text-gradient-teal">
                classroom.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease, delay: 0.5 }}
              className="mt-10 max-w-[56ch] text-[17px] md:text-[18px] leading-[1.6] text-ink-dim"
            >
              <strong className="font-bold text-ink">EKAM</strong> Institute of
              Advanced Medical Studies was founded on a single conviction: that
              the next generation of specialists should be trained in
              environments that match the complexity of the medicine they will
              practice.
            </motion.p>
          </div>

          <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border-strong to-transparent" />
        </section>

        {/* ═══ Vision ═══ */}
        <section className="relative w-full py-[120px] md:py-[140px] overflow-hidden">
          <div className="absolute inset-0 bg-grain opacity-30" />

          <div className="relative max-w-[1440px] mx-auto px-6 lg:px-10">
            <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] gap-16 lg:gap-24 items-start">
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
                    Our Vision
                  </span>
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 1.1, ease, delay: 0.08 }}
                  className="font-display text-[clamp(32px,4.5vw,64px)] leading-[0.96] tracking-[-0.035em] font-medium max-w-[16ch]"
                >
                  <span className="text-gradient">To redefine what</span>
                  <br />
                  <span className="serif-italic text-gradient-teal">
                    medical education
                  </span>
                  <br />
                  <span className="text-gradient">looks like.</span>
                </motion.h2>
              </div>

              {/* Right */}
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 1, ease, delay: 0.16 }}
                className="lg:pt-14"
              >
                <p className="text-[16px] md:text-[17px] leading-[1.7] text-ink-dim">
                  We envision an India where advanced medical training is not
                  constrained by geography, institutional inertia, or outdated
                  pedagogy. Where a fellowship means daily procedural exposure,
                  not observation from the gallery. Where simulation hours are
                  unlimited and research is embedded in the clinical cycle — not
                  bolted on after.
                </p>
                <p className="mt-6 text-[16px] md:text-[17px] leading-[1.7] text-ink-dim">
                  <strong className="font-bold text-ink">EKAM</strong> exists to
                  close the gap between how specialists are trained and how
                  medicine is actually practised — at the highest level, with the
                  latest technology, under mentors who are still operating at the
                  frontier.
                </p>

                {/* Decorative quote */}
                <div className="mt-12 pl-6 border-l-2 border-teal/40">
                  <p className="serif-italic text-[clamp(18px,2vw,24px)] leading-[1.4] tracking-[-0.01em] text-ink">
                    &ldquo;The future of medicine is interventional, precise, and
                    technology-driven. Training should be no different.&rdquo;
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border-strong to-transparent" />
        </section>

        {/* ═══ Mission ═══ */}
        <section className="relative w-full py-[120px] md:py-[140px] overflow-hidden">
          <div className="absolute inset-0 bg-grain opacity-30" />
          {/* Subtle accent glow */}
          <div
            className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(13,148,136,0.05) 0%, transparent 70%)",
            }}
          />

          <div className="relative max-w-[1440px] mx-auto px-6 lg:px-10">
            <div className="grid lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] gap-16 lg:gap-24 items-start">
              {/* Left — text */}
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
                    Our Mission
                  </span>
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 1.1, ease, delay: 0.08 }}
                  className="font-display text-[clamp(32px,4.5vw,64px)] leading-[0.96] tracking-[-0.035em] font-medium max-w-[18ch]"
                >
                  <span className="text-gradient">Train specialists</span>
                  <br />
                  <span className="text-gradient">who </span>
                  <span className="serif-italic text-gradient-teal">
                    change
                  </span>
                  <span className="text-gradient"> the standard.</span>
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 1, ease, delay: 0.18 }}
                  className="mt-8 max-w-[52ch] text-[16px] md:text-[17px] leading-[1.7] text-ink-dim"
                >
                  Our mission is to deliver fellowship programmes where
                  procedural volume, mentorship depth, and research rigour are
                  not aspirations — they are the operating standard. Every
                  programme is designed so that when a fellow completes training,
                  they are not just certified — they are capable.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 1, ease, delay: 0.26 }}
                  className="mt-6 max-w-[52ch] text-[16px] md:text-[17px] leading-[1.7] text-ink-dim"
                >
                  Capable of walking into any cath lab, any robotic suite, any
                  ICU in the world — and performing at the level that patients
                  deserve.
                </motion.p>
              </div>

              {/* Right — stat highlights */}
              <div className="grid grid-cols-2 gap-3 md:gap-4 lg:mt-14">
                {[
                  { value: "10+", label: "Programs & Fellowships" },
                  { value: "1,800+", label: "Live Procedures / Year" },
                  { value: "50+", label: "Specialist Faculty" },
                  { value: "24/7", label: "Cath Lab & ICU Access" },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{
                      duration: 0.9,
                      ease,
                      delay: 0.25 + i * 0.09,
                    }}
                    className="group glass relative rounded-2xl p-6 md:p-8 min-h-[160px] md:min-h-[180px] flex flex-col justify-between overflow-hidden"
                  >
                    <div className="flex items-start justify-between">
                      <span className="text-[10px] tracking-[0.24em] uppercase text-ink-mute font-medium">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-teal/60 group-hover:bg-teal transition-colors" />
                    </div>
                    <div>
                      <div
                        className="font-display tracking-[-0.04em] leading-[0.95] font-medium text-gradient-teal"
                        style={{ fontSize: "clamp(36px, 4vw, 56px)" }}
                      >
                        {stat.value}
                      </div>
                      <div className="mt-2 text-[12px] tracking-[0.16em] uppercase text-ink-dim">
                        {stat.label}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border-strong to-transparent" />
        </section>

        {/* ═══ Values ═══ */}
        <section className="relative w-full py-[120px] md:py-[140px] overflow-hidden">
          <div className="absolute inset-0 bg-grain opacity-20" />

          <div className="relative max-w-[1440px] mx-auto px-6 lg:px-10">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, ease }}
              className="flex items-center gap-3 mb-8"
            >
              <span className="w-8 h-px bg-teal" />
              <span className="text-[11px] tracking-[0.24em] uppercase text-teal font-medium">
                What We Stand For
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1.1, ease, delay: 0.08 }}
              className="font-display text-[clamp(32px,4.5vw,64px)] leading-[0.96] tracking-[-0.035em] font-medium max-w-[18ch] mb-16 md:mb-20"
            >
              <span className="text-gradient">Principles, not </span>
              <span className="serif-italic text-gradient-teal">
                platitudes.
              </span>
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
              {values.map((v, i) => (
                <motion.article
                  key={v.number}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 0.9,
                    ease,
                    delay: 0.15 + i * 0.08,
                  }}
                  className="group glass relative rounded-2xl p-8 md:p-10 overflow-hidden"
                >
                  {/* Hover wash */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                    style={{
                      background:
                        "radial-gradient(ellipse at top left, rgba(13,148,136,0.06) 0%, transparent 60%)",
                    }}
                  />

                  <div className="relative">
                    <div className="flex items-center gap-3 mb-5">
                      <span className="text-[11px] tracking-[0.24em] text-teal font-medium">
                        {v.number}
                      </span>
                      <span className="flex-1 h-px bg-border" />
                    </div>
                    <h3 className="font-display text-[clamp(20px,2vw,26px)] leading-[1.1] tracking-[-0.02em] font-medium text-ink">
                      {v.title}
                    </h3>
                    <p className="mt-4 text-[14.5px] leading-[1.6] text-ink-dim max-w-[44ch]">
                      {v.description}
                    </p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>

          <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border-strong to-transparent" />
        </section>

        {/* ═══ Management Team ═══ */}
        <section className="relative w-full py-[120px] md:py-[140px] overflow-hidden">
          <div className="absolute inset-0 bg-grain opacity-20" />
          <div
            className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(13,148,136,0.05) 0%, transparent 70%)",
            }}
          />

          <div className="relative max-w-[1440px] mx-auto px-6 lg:px-10">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, ease }}
              className="flex items-center gap-3 mb-8"
            >
              <span className="w-8 h-px bg-teal" />
              <span className="text-[11px] tracking-[0.24em] uppercase text-teal font-medium">
                Leadership
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1.1, ease, delay: 0.08 }}
              className="font-display text-[clamp(32px,4.5vw,64px)] leading-[0.96] tracking-[-0.035em] font-medium max-w-[18ch] mb-6"
            >
              <span className="text-gradient">The team behind </span>
              <span className="serif-italic text-gradient-teal">EIAMS.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1, ease, delay: 0.16 }}
              className="max-w-[52ch] text-[15.5px] leading-[1.6] text-ink-dim mb-16 md:mb-20"
            >
              Guided by decades of experience in healthcare, education, and
              clinical excellence — the leadership at EIAMS sets the vision and
              the standard.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
              {[
                {
                  name: "Ashok Gowda",
                  role: "Chairman",
                  initials: "AG",
                  photo: "/chairman.png",
                  description:
                    "Providing strategic vision and institutional direction, ensuring EIAMS remains at the forefront of advanced medical education in India.",
                  hue: { from: "#0d9488", to: "#0891b2" },
                },
                {
                  name: "Punya Gopal",
                  role: "Director",
                  initials: "PG",
                  photo: null,
                  description:
                    "Overseeing institutional operations, partnerships, and the execution of EIAMS's mission to deliver world-class clinical training.",
                  hue: { from: "#0891b2", to: "#6366f1" },
                },
                {
                  name: "Tamil Selvan",
                  role: "Program Director",
                  initials: "TS",
                  photo: "/ProgramDirector.jpeg",
                  description:
                    "Leading curriculum design, fellowship structuring, and academic quality across all programmes — ensuring every cohort meets the highest clinical standards.",
                  hue: { from: "#6366f1", to: "#8b5cf6" },
                },
              ].map((member, i) => (
                <motion.article
                  key={member.name}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 0.9,
                    ease,
                    delay: 0.15 + i * 0.1,
                  }}
                  className="group glass relative rounded-2xl p-8 md:p-10 overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all duration-500"
                >
                  {/* Hover fill */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                    style={{
                      background: `linear-gradient(160deg, ${member.hue.from}35 0%, ${member.hue.to}20 50%, transparent 100%)`,
                    }}
                  />

                  <div className="relative">
                    {/* Avatar */}
                    {member.photo ? (
                      <div
                        className="w-20 h-20 rounded-2xl overflow-hidden mb-6"
                        style={{
                          border: `2px solid ${member.hue.from}40`,
                        }}
                      >
                        <img
                          src={member.photo}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : (
                      <div
                        className="w-20 h-20 rounded-2xl flex items-center justify-center text-[22px] font-bold tracking-tight mb-6"
                        style={{
                          background: `linear-gradient(135deg, ${member.hue.from}30, ${member.hue.to}18)`,
                          border: `2px solid ${member.hue.from}40`,
                          color: member.hue.from,
                        }}
                      >
                        {member.initials}
                      </div>
                    )}

                    {/* Role badge */}
                    <span
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] tracking-[0.16em] uppercase font-medium mb-4"
                      style={{
                        color: member.hue.from,
                        background: `${member.hue.from}18`,
                        border: `1px solid ${member.hue.from}35`,
                      }}
                    >
                      <span
                        className="w-1 h-1 rounded-full"
                        style={{ background: member.hue.from }}
                      />
                      {member.role}
                    </span>

                    <h3 className="font-display text-[clamp(22px,2.2vw,28px)] leading-[1.08] tracking-[-0.02em] font-medium text-ink">
                      {member.name}
                    </h3>

                    <p className="mt-4 text-[14.5px] leading-[1.6] text-ink-dim">
                      {member.description}
                    </p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>

          <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border-strong to-transparent" />
        </section>

        {/* ═══ CTA ═══ */}
        <section className="relative w-full py-[120px] md:py-[140px] overflow-hidden">
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
              className="font-display text-[clamp(32px,4.8vw,68px)] leading-[0.96] tracking-[-0.035em] font-medium"
            >
              <span className="text-gradient">Ready to see it </span>
              <span className="serif-italic text-gradient-teal">
                firsthand?
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1, ease, delay: 0.12 }}
              className="mt-6 max-w-[44ch] mx-auto text-[16px] md:text-[17px] leading-[1.6] text-ink-dim"
            >
              Explore our fellowship programmes or speak with the admissions
              team. The next cohort is forming.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1, ease, delay: 0.22 }}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <a
                href="/#programs"
                className="btn-glow inline-flex items-center justify-center h-[52px] px-8 rounded-full bg-ink text-bg-elevated text-[14px] font-semibold tracking-[-0.01em] transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
              >
                Explore Programs
              </a>
              <a
                href="/contact#enquiry-form"
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
