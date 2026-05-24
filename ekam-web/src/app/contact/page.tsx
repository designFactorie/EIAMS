"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FooterLight } from "@/components/FooterLight";
import { NavigationLight } from "@/components/NavigationLight";
import { SmoothScroll } from "@/components/SmoothScroll";

const ease = [0.22, 1, 0.36, 1] as const;

/* ─── Data ─── */

const contactDetails = [
  {
    icon: "pin",
    label: "Visit Us",
    primary: "EKAM Healthcare Institution",
    secondary: "Hosur, Tamil Nadu, India",
    link: "https://www.google.com/maps/place/EKAM+HEALTHCARE+INSTITUTION/@12.7746708,77.6776384,17z",
    linkLabel: "Get Directions",
  },
  {
    icon: "mail",
    label: "Email Us",
    primary: "admissions@ekaminstitute.com",
    secondary: "info@ekaminstitute.com",
    link: "mailto:admissions@ekaminstitute.com",
    linkLabel: "Send Email",
  },
  {
    icon: "phone",
    label: "Call Us",
    primary: "+91 821 XXX XXXX",
    secondary: "+91 821 XXX XXXX",
    link: "tel:+91821XXXXXXX",
    linkLabel: "Call Now",
  },
  {
    icon: "clock",
    label: "Office Hours",
    primary: "Mon – Sat: 9:00 AM – 6:00 PM",
    secondary: "Sunday: Closed",
    link: null,
    linkLabel: null,
  },
];

const departments = [
  {
    name: "Admissions Office",
    email: "admissions@ekaminstitute.com",
    description: "Fellowship applications, eligibility queries, and enrollment.",
  },
  {
    name: "Academic Affairs",
    email: "academics@ekaminstitute.com",
    description: "Programme curriculum, faculty, and research collaborations.",
  },
  {
    name: "Administration",
    email: "admin@ekaminstitute.com",
    description: "General enquiries, partnerships, and institutional matters.",
  },
  {
    name: "Student Support",
    email: "support@ekaminstitute.com",
    description: "Current fellows — accommodation, schedules, and resources.",
  },
];

/* ─── Page ─── */

export default function ContactPage() {
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
                Contact Us
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, ease, delay: 0.3 }}
              className="font-display text-[clamp(40px,6.5vw,96px)] leading-[0.94] tracking-[-0.035em] font-medium max-w-[18ch]"
            >
              <span className="text-gradient">We&apos;re here to </span>
              <span className="serif-italic text-gradient-teal">help.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease, delay: 0.5 }}
              className="mt-10 max-w-[54ch] text-[17px] md:text-[18px] leading-[1.6] text-ink-dim"
            >
              Whether you&apos;re a prospective fellow, a referring institution,
              or simply curious about{" "}
              <strong className="font-bold text-ink">EKAM</strong> — reach out.
              We respond within 48 hours.
            </motion.p>
          </div>

          <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border-strong to-transparent" />
        </section>

        {/* ═══ Contact Cards ═══ */}
        <section className="relative w-full py-[100px] md:py-[120px] overflow-hidden">
          <div className="absolute inset-0 bg-grain opacity-30" />

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
                Reach Out
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1.1, ease, delay: 0.08 }}
              className="font-display text-[clamp(28px,3.8vw,52px)] leading-[0.96] tracking-[-0.035em] font-medium max-w-[18ch] mb-14 md:mb-16"
            >
              <span className="text-gradient">Every way to </span>
              <span className="serif-italic text-gradient-teal">find us.</span>
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
              {contactDetails.map((c, i) => (
                <motion.div
                  key={c.label}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.8,
                    ease,
                    delay: 0.1 + i * 0.07,
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
                    <div className="flex items-center gap-3 mb-5">
                      <ContactIcon type={c.icon} />
                      <span className="text-[10px] tracking-[0.24em] uppercase text-teal font-medium">
                        {c.label}
                      </span>
                    </div>

                    <p className="text-[15px] font-medium text-ink leading-[1.4] mb-1">
                      {c.primary}
                    </p>
                    <p className="text-[13.5px] text-ink-dim leading-[1.4]">
                      {c.secondary}
                    </p>

                    {c.link && (
                      <a
                        href={c.link}
                        target={c.icon === "pin" ? "_blank" : undefined}
                        rel={c.icon === "pin" ? "noopener noreferrer" : undefined}
                        className="inline-flex items-center gap-1.5 mt-5 text-[13px] text-teal font-medium hover:underline"
                      >
                        {c.linkLabel}
                        <svg
                          width="11"
                          height="11"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M5 12H19M13 6l6 6-6 6"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border-strong to-transparent" />
        </section>

        {/* ═══ Map + Form ═══ */}
        <section id="enquiry-form" className="relative w-full py-[100px] md:py-[120px] overflow-hidden scroll-mt-20">
          <div className="absolute inset-0 bg-grain opacity-20" />

          <div className="relative max-w-[1440px] mx-auto px-6 lg:px-10">
            <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-8 lg:gap-12">
              {/* Left — Map */}
              <motion.div
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 1, ease }}
                className="flex flex-col gap-6"
              >
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="w-8 h-px bg-teal" />
                    <span className="text-[11px] tracking-[0.24em] uppercase text-teal font-medium">
                      Our Location
                    </span>
                  </div>

                  <h2 className="font-display text-[clamp(28px,3.8vw,52px)] leading-[0.96] tracking-[-0.035em] font-medium max-w-[16ch] mb-4">
                    <span className="text-gradient">Find us on </span>
                    <span className="serif-italic text-gradient-teal">
                      the map.
                    </span>
                  </h2>

                  <p className="max-w-[44ch] text-[15.5px] leading-[1.6] text-ink-dim mb-8">
                    EKAM Healthcare Institution is located in Hosur, Tamil Nadu —
                    well connected by road and close to Bengaluru International
                    Airport.
                  </p>
                </div>

                {/* Google Maps embed */}
                <div className="relative rounded-2xl overflow-hidden border border-border aspect-[4/3] lg:aspect-auto lg:flex-1 min-h-[360px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.204!2d77.6776384!3d12.7746708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6f0067ba19ff%3A0xa050ae9c41e20d84!2sEKAM%20HEALTHCARE%20INSTITUTION!5e0!3m2!1sen!2sin!4v1716000000000"
                    width="100%"
                    height="100%"
                    style={{ border: 0, position: "absolute", inset: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="EKAM Healthcare Institution Location"
                  />
                </div>
              </motion.div>

              {/* Right — Quick Contact Form */}
              <motion.div
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 1, ease, delay: 0.12 }}
                className="flex flex-col gap-6"
              >
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="w-8 h-px bg-teal" />
                    <span className="text-[11px] tracking-[0.24em] uppercase text-teal font-medium">
                      Send a Message
                    </span>
                  </div>

                  <h2 className="font-display text-[clamp(28px,3.8vw,52px)] leading-[0.96] tracking-[-0.035em] font-medium max-w-[16ch] mb-4">
                    <span className="text-gradient">Drop us </span>
                    <span className="serif-italic text-gradient-teal">
                      a line.
                    </span>
                  </h2>

                  <p className="max-w-[42ch] text-[15.5px] leading-[1.6] text-ink-dim mb-8">
                    Questions, feedback, or partnership enquiries — we&apos;d
                    love to hear from you.
                  </p>
                </div>

                <ContactForm />
              </motion.div>
            </div>
          </div>

          <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border-strong to-transparent" />
        </section>

        {/* ═══ Departments ═══ */}
        <section className="relative w-full py-[100px] md:py-[120px] overflow-hidden">
          <div className="absolute inset-0 bg-grain opacity-20" />
          <div
            className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(99,102,241,0.04) 0%, transparent 70%)",
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
                Departments
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1.1, ease, delay: 0.08 }}
              className="font-display text-[clamp(28px,3.8vw,52px)] leading-[0.96] tracking-[-0.035em] font-medium max-w-[18ch] mb-6"
            >
              <span className="text-gradient">Know who to </span>
              <span className="serif-italic text-gradient-teal">reach.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1, ease, delay: 0.16 }}
              className="max-w-[50ch] text-[15.5px] leading-[1.6] text-ink-dim mb-14 md:mb-16"
            >
              Direct your query to the right department for the fastest
              response.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
              {departments.map((dept, i) => (
                <motion.div
                  key={dept.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.8,
                    ease,
                    delay: 0.1 + i * 0.07,
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
                    <h3 className="font-display text-[17px] leading-[1.12] tracking-[-0.02em] font-medium text-ink mb-2">
                      {dept.name}
                    </h3>
                    <p className="text-[13.5px] leading-[1.55] text-ink-dim mb-4">
                      {dept.description}
                    </p>
                    <a
                      href={`mailto:${dept.email}`}
                      className="inline-flex items-center gap-1.5 text-[13px] text-teal font-medium hover:underline"
                    >
                      {dept.email}
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
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
              <span className="text-gradient">Ready to take the </span>
              <span className="serif-italic text-gradient-teal">
                first step?
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1, ease, delay: 0.12 }}
              className="mt-6 max-w-[44ch] mx-auto text-[16px] md:text-[17px] leading-[1.6] text-ink-dim"
            >
              Explore our fellowship programmes or start your application today.
              Your future in advanced medicine begins here.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1, ease, delay: 0.22 }}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <a
                href="/programs"
                className="btn-glow inline-flex items-center justify-center h-[52px] px-8 rounded-full bg-ink text-bg-elevated text-[14px] font-semibold tracking-[-0.01em] transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
              >
                Explore Programs
              </a>
              <a
                href="#enquiry-form"
                className="inline-flex items-center justify-center h-[52px] px-8 rounded-full border border-border-strong text-ink text-[14px] font-medium tracking-[-0.01em] transition-all duration-300 hover:border-teal hover:text-teal hover:scale-[1.03] active:scale-[0.98]"
              >
                Apply Now
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      <FooterLight />
    </div>
  );
}

/* ─── Contact Form ─── */

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const inputCls =
    "w-full h-12 px-4 rounded-xl border border-border bg-bg-elevated text-ink text-[14px] placeholder:text-ink-mute/70 focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal/30 transition-colors duration-200";
  const labelCls =
    "block text-[12px] tracking-[0.12em] uppercase text-ink-dim font-medium mb-2";

  if (submitted) {
    return (
      <div className="glass rounded-2xl p-10 md:p-12 text-center flex-1 flex flex-col items-center justify-center">
        <div className="w-14 h-14 rounded-full bg-teal/10 border border-teal/30 flex items-center justify-center mx-auto mb-6">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M20 6L9 17l-5-5"
              stroke="var(--color-teal)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h3 className="font-display text-[22px] font-medium text-ink mb-3">
          Message Sent
        </h3>
        <p className="text-[15px] text-ink-dim max-w-[36ch] mx-auto">
          Thank you for reaching out. We&apos;ll get back to you within 48
          hours.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="glass rounded-2xl p-8 md:p-10 flex-1"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        <div>
          <label className={labelCls}>Full Name</label>
          <input
            type="text"
            placeholder="Your full name"
            required
            className={inputCls}
          />
        </div>
        <div>
          <label className={labelCls}>Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            required
            className={inputCls}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        <div>
          <label className={labelCls}>Phone</label>
          <input
            type="tel"
            placeholder="+91 98XXX XXXXX"
            className={inputCls}
          />
        </div>
        <div>
          <label className={labelCls}>Subject</label>
          <select required className={inputCls + " appearance-none"}>
            <option value="">Select subject</option>
            <option value="admissions">Admissions Enquiry</option>
            <option value="programs">Program Information</option>
            <option value="partnership">Institutional Partnership</option>
            <option value="careers">Careers at EKAM</option>
            <option value="media">Media & Press</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <div className="mb-7">
        <label className={labelCls}>Message</label>
        <textarea
          rows={5}
          placeholder="How can we help you?"
          required
          className={inputCls + " h-auto py-3 resize-none"}
        />
      </div>

      <button
        type="submit"
        className="btn-glow w-full h-[52px] rounded-full bg-ink text-bg-elevated text-[15px] font-semibold tracking-[-0.01em] transition-transform duration-300 hover:scale-[1.01] active:scale-[0.99]"
      >
        Send Message
      </button>

      <p className="mt-4 text-[12px] text-ink-mute text-center">
        We typically respond within 1–2 business days.
      </p>
    </form>
  );
}

/* ─── Icons ─── */

function ContactIcon({ type }: { type: string }) {
  const cls =
    "w-8 h-8 rounded-lg border border-border flex items-center justify-center shrink-0";

  if (type === "pin")
    return (
      <div className={cls}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
          <path
            d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"
            stroke="var(--color-teal)"
            strokeWidth="1.6"
          />
          <circle cx="12" cy="10" r="3" stroke="var(--color-teal)" strokeWidth="1.6" />
        </svg>
      </div>
    );

  if (type === "mail")
    return (
      <div className={cls}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
          <rect x="2" y="4" width="20" height="16" rx="2" stroke="var(--color-teal)" strokeWidth="1.6" />
          <path d="M22 7l-10 6L2 7" stroke="var(--color-teal)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    );

  if (type === "phone")
    return (
      <div className={cls}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
          <path
            d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"
            stroke="var(--color-teal)"
            strokeWidth="1.6"
          />
        </svg>
      </div>
    );

  return (
    <div className={cls}>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="var(--color-teal)" strokeWidth="1.6" />
        <polyline points="12 6 12 12 16 14" stroke="var(--color-teal)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}
