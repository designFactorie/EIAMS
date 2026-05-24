"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FooterLight } from "@/components/FooterLight";
import { NavigationLight } from "@/components/NavigationLight";
import { SmoothScroll } from "@/components/SmoothScroll";

const ease = [0.22, 1, 0.36, 1] as const;

/* ─── Data ─── */

const steps = [
  {
    number: "01",
    title: "Choose Your Program",
    description:
      "Browse our Postgraduate or Allied Healthcare fellowship tracks and identify the specialty that aligns with your qualifications and career goals.",
    accent: "#0d9488",
  },
  {
    number: "02",
    title: "Submit Your Application",
    description:
      "Complete the online enquiry form with your personal details, academic background, and preferred programme. Our team will review your profile.",
    accent: "#0891b2",
  },
  {
    number: "03",
    title: "Document Verification",
    description:
      "Upload the required documents for verification. Our admissions team will review your credentials and confirm eligibility for your chosen fellowship.",
    accent: "#6366f1",
  },
  {
    number: "04",
    title: "Interview & Selection",
    description:
      "Shortlisted candidates will be invited for an interview — either in-person or virtual — with the programme faculty and admissions panel.",
    accent: "#8b5cf6",
  },
  {
    number: "05",
    title: "Offer & Enrollment",
    description:
      "Successful candidates receive an offer letter. Complete the enrollment formalities, pay the programme fee, and begin your fellowship journey at EKAM.",
    accent: "#d946ef",
  },
];

const documents = [
  {
    category: "Identity & Personal",
    items: [
      "Passport-size photographs (4 copies)",
      "Government-issued photo ID (Aadhaar / Passport)",
      "Date of birth certificate",
    ],
  },
  {
    category: "Academic Records",
    items: [
      "MBBS / BDS degree certificate (for PG track)",
      "MD / MS / DNB degree certificate (for PG track)",
      "BSc / MSc / BPT / MPT degree certificate (for Allied track)",
      "10+2 mark sheet with PCB/PCM (for Degree programs)",
      "Mark sheets of all academic years",
      "Internship completion certificate (if applicable)",
    ],
  },
  {
    category: "Registration & Experience",
    items: [
      "Medical Council registration certificate (MCI / State)",
      "Experience certificates (if applicable)",
      "No Objection Certificate from current employer (if applicable)",
    ],
  },
  {
    category: "Additional",
    items: [
      "Statement of purpose / letter of intent",
      "Two letters of recommendation",
      "Updated curriculum vitae (CV)",
      "Research publications list (if any)",
    ],
  },
];

/* ─── Page ─── */

export default function AdmissionsPage() {
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
                Admissions
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, ease, delay: 0.3 }}
              className="font-display text-[clamp(40px,6.5vw,96px)] leading-[0.94] tracking-[-0.035em] font-medium max-w-[18ch]"
            >
              <span className="text-gradient">Your path to</span>
              <br />
              <span className="serif-italic text-gradient-teal">EKAM </span>
              <span className="text-gradient">starts here.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease, delay: 0.5 }}
              className="mt-10 max-w-[56ch] text-[17px] md:text-[18px] leading-[1.6] text-ink-dim"
            >
              A clear, five-step process from application to enrollment. No
              ambiguity, no unnecessary delays — just a structured pathway into
              the fellowship that fits your career.
            </motion.p>
          </div>

          <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border-strong to-transparent" />
        </section>

        {/* ═══ Admission Steps ═══ */}
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
                How It Works
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1.1, ease, delay: 0.08 }}
              className="font-display text-[clamp(28px,3.8vw,52px)] leading-[0.96] tracking-[-0.035em] font-medium max-w-[18ch] mb-16 md:mb-20"
            >
              <span className="text-gradient">Five steps. </span>
              <span className="serif-italic text-gradient-teal">
                One destination.
              </span>
            </motion.h2>

            {/* Steps timeline */}
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-[19px] md:left-[23px] top-0 bottom-0 w-px bg-border hidden sm:block" />

              <div className="flex flex-col gap-6 md:gap-8">
                {steps.map((step, i) => (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{
                      duration: 0.8,
                      ease,
                      delay: 0.1 + i * 0.08,
                    }}
                    className="group relative flex gap-6 md:gap-8"
                  >
                    {/* Number circle */}
                    <div
                      className="relative z-10 shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-[13px] md:text-[14px] font-bold text-white"
                      style={{ background: step.accent }}
                    >
                      {step.number}
                    </div>

                    {/* Content card */}
                    <div className="glass relative rounded-2xl p-7 md:p-8 flex-1 overflow-hidden">
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                        style={{
                          background: `radial-gradient(ellipse at top left, ${step.accent}10 0%, transparent 60%)`,
                        }}
                      />
                      <div className="relative">
                        <h3 className="font-display text-[clamp(18px,1.8vw,22px)] leading-[1.12] tracking-[-0.02em] font-medium text-ink mb-3">
                          {step.title}
                        </h3>
                        <p className="text-[14.5px] leading-[1.6] text-ink-dim max-w-[52ch]">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border-strong to-transparent" />
        </section>

        {/* ═══ Documents Required ═══ */}
        <section className="relative w-full py-[100px] md:py-[120px] overflow-hidden">
          <div className="absolute inset-0 bg-grain opacity-20" />
          <div
            className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(13,148,136,0.04) 0%, transparent 70%)",
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
                Documents Required
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1.1, ease, delay: 0.08 }}
              className="font-display text-[clamp(28px,3.8vw,52px)] leading-[0.96] tracking-[-0.035em] font-medium max-w-[18ch] mb-6"
            >
              <span className="text-gradient">What you&apos;ll </span>
              <span className="serif-italic text-gradient-teal">need.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1, ease, delay: 0.16 }}
              className="max-w-[52ch] text-[15.5px] leading-[1.6] text-ink-dim mb-14 md:mb-16"
            >
              Keep the following documents ready before you begin your
              application. All documents should be self-attested scanned copies.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
              {documents.map((doc, i) => (
                <motion.div
                  key={doc.category}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.8,
                    ease,
                    delay: 0.12 + i * 0.08,
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
                      <DocIcon />
                      <h3 className="font-display text-[17px] leading-[1.1] tracking-[-0.02em] font-medium text-ink">
                        {doc.category}
                      </h3>
                    </div>
                    <ul className="flex flex-col gap-2.5">
                      {doc.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 text-[14px] leading-[1.5] text-ink-dim"
                        >
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            className="mt-[3px] shrink-0"
                          >
                            <path
                              d="M20 6L9 17l-5-5"
                              stroke="var(--color-teal)"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border-strong to-transparent" />
        </section>

        {/* ═══ Enquiry Form ═══ */}
        <section className="relative w-full py-[100px] md:py-[120px] overflow-hidden">
          <div className="absolute inset-0 bg-grain opacity-30" />
          <div
            className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(99,102,241,0.04) 0%, transparent 70%)",
            }}
          />

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
                    Get In Touch
                  </span>
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 1.1, ease, delay: 0.08 }}
                  className="font-display text-[clamp(28px,3.8vw,52px)] leading-[0.96] tracking-[-0.035em] font-medium max-w-[16ch]"
                >
                  <span className="text-gradient">Start the</span>
                  <br />
                  <span className="serif-italic text-gradient-teal">
                    conversation.
                  </span>
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 1, ease, delay: 0.18 }}
                  className="mt-8 max-w-[40ch] text-[15.5px] leading-[1.6] text-ink-dim"
                >
                  Have questions about eligibility, programme details, or the
                  application timeline? Fill in your details and our admissions
                  team will get back to you within 48 hours.
                </motion.p>

                {/* Contact info */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 1, ease, delay: 0.26 }}
                  className="mt-10 flex flex-col gap-4"
                >
                  {[
                    { icon: "mail", text: "admissions@ekaminstitute.com" },
                    { icon: "phone", text: "+91 821 XXX XXXX" },
                    { icon: "pin", text: "Bengaluru, Karnataka, India" },
                  ].map((info) => (
                    <div
                      key={info.icon}
                      className="flex items-center gap-3 text-[14px] text-ink-dim"
                    >
                      <ContactIcon type={info.icon} />
                      <span>{info.text}</span>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Right — Form */}
              <motion.div
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 1, ease, delay: 0.14 }}
              >
                <EnquiryForm />
              </motion.div>
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
              <span className="text-gradient">The next cohort is </span>
              <span className="serif-italic text-gradient-teal">forming.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1, ease, delay: 0.12 }}
              className="mt-6 max-w-[46ch] mx-auto text-[16px] md:text-[17px] leading-[1.6] text-ink-dim"
            >
              Don&apos;t wait for the deadline. Early applications receive
              priority review and access to limited-seat specialties.
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
                href="#enquiry"
                className="inline-flex items-center justify-center h-[52px] px-8 rounded-full border border-border-strong text-ink text-[14px] font-medium tracking-[-0.01em] transition-all duration-300 hover:border-teal hover:text-teal hover:scale-[1.03] active:scale-[0.98]"
              >
                Download Brochure
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      <FooterLight />
    </div>
  );
}

/* ─── Enquiry Form ─── */

function EnquiryForm() {
  const [submitted, setSubmitted] = useState(false);

  const inputCls =
    "w-full h-12 px-4 rounded-xl border border-border bg-bg-elevated text-ink text-[14px] placeholder:text-ink-mute/70 focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal/30 transition-colors duration-200";
  const labelCls =
    "block text-[12px] tracking-[0.12em] uppercase text-ink-dim font-medium mb-2";

  if (submitted) {
    return (
      <div className="glass rounded-2xl p-10 md:p-12 text-center">
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
          Enquiry Submitted
        </h3>
        <p className="text-[15px] text-ink-dim max-w-[36ch] mx-auto">
          Thank you for your interest. Our admissions team will reach out within
          48 hours.
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
      className="glass rounded-2xl p-8 md:p-10"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        <div>
          <label className={labelCls}>Full Name</label>
          <input
            type="text"
            placeholder="Dr. Aditya Rao"
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
            required
            className={inputCls}
          />
        </div>
        <div>
          <label className={labelCls}>Qualification</label>
          <select required className={inputCls + " appearance-none"}>
            <option value="">Select qualification</option>
            <optgroup label="Postgraduate">
              <option value="md">MD</option>
              <option value="ms">MS</option>
              <option value="dnb">DNB</option>
            </optgroup>
            <optgroup label="Allied Healthcare">
              <option value="bsc">BSc (Allied Health)</option>
              <option value="msc">MSc (Allied Health)</option>
              <option value="bpt">BPT</option>
              <option value="mpt">MPT</option>
            </optgroup>
            <optgroup label="Undergraduate">
              <option value="10+2">10+2 (PCB/PCM)</option>
              <option value="12th">Higher Secondary</option>
            </optgroup>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <div className="mb-5">
        <label className={labelCls}>Interested Program</label>
        <select required className={inputCls + " appearance-none"}>
          <option value="">Select program track</option>
          <optgroup label="Postgraduate Fellowships">
            <option value="interventional">Interventional Specialties</option>
            <option value="surgical">Surgical Specialties</option>
            <option value="medical-super">Medical Super-Specialties</option>
            <option value="oncology">Oncology & Advanced Care</option>
            <option value="rehab">Rehabilitation & Sports Medicine</option>
          </optgroup>
          <optgroup label="Allied Healthcare Fellowships">
            <option value="cardiac-care">Cardiac Care</option>
            <option value="anesthesia-tech">Anesthesia Technology</option>
            <option value="imaging-fellowship">Medical Imaging</option>
            <option value="respiratory">Respiratory Therapy</option>
            <option value="physio">Physiotherapy</option>
            <option value="neuro-tech">Neurosciences Technology</option>
            <option value="perfusion">Perfusion Technology</option>
            <option value="ot">Occupational Therapy</option>
            <option value="hyperbaric">Hyperbaric Medicine</option>
          </optgroup>
          <optgroup label="Degree Programs">
            <option value="bsc-nursing">B.Sc. Nursing (RGUHS)</option>
            <option value="bpt">Bachelor of Physiotherapy (BPT)</option>
            <option value="mit">Medical Imaging Technology</option>
            <option value="aott">Anesthesia & OT Technology</option>
          </optgroup>
        </select>
      </div>

      <div className="mb-7">
        <label className={labelCls}>Message (Optional)</label>
        <textarea
          rows={4}
          placeholder="Tell us about your background, goals, or any questions..."
          className={inputCls + " h-auto py-3 resize-none"}
        />
      </div>

      <button
        type="submit"
        className="btn-glow w-full h-[52px] rounded-full bg-ink text-bg-elevated text-[15px] font-semibold tracking-[-0.01em] transition-transform duration-300 hover:scale-[1.01] active:scale-[0.99]"
      >
        Submit Enquiry
      </button>

      <p className="mt-4 text-[12px] text-ink-mute text-center">
        By submitting, you agree to be contacted by the EKAM admissions team.
      </p>
    </form>
  );
}

/* ─── Icons ─── */

function DocIcon() {
  return (
    <div className="w-8 h-8 rounded-lg border border-border flex items-center justify-center">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
        <path
          d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
          stroke="var(--color-teal)"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <polyline
          points="14 2 14 8 20 8"
          stroke="var(--color-teal)"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

function ContactIcon({ type }: { type: string }) {
  const cls =
    "w-8 h-8 rounded-lg border border-border flex items-center justify-center shrink-0";

  if (type === "mail")
    return (
      <div className={cls}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
          <rect
            x="2"
            y="4"
            width="20"
            height="16"
            rx="2"
            stroke="var(--color-teal)"
            strokeWidth="1.6"
          />
          <path
            d="M22 7l-10 6L2 7"
            stroke="var(--color-teal)"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
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
        <path
          d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"
          stroke="var(--color-teal)"
          strokeWidth="1.6"
        />
        <circle
          cx="12"
          cy="10"
          r="3"
          stroke="var(--color-teal)"
          strokeWidth="1.6"
        />
      </svg>
    </div>
  );
}
