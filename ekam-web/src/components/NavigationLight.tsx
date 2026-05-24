"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const links = [
  { label: "About Us", href: "/about" },
  { label: "Our Programs", href: "/programs" },
  { label: "Admissions", href: "/contact#enquiry-form" },
  { label: "Contact Us", href: "/contact" },
];

export function NavigationLight() {
  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 120], [0, 1]);
  const blur = useTransform(scrollY, [0, 120], [0, 20]);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
    >
      <motion.div
        style={{
          backgroundColor: useTransform(
            bgOpacity,
            (v) => `rgba(250, 251, 253, ${v * 0.85})`
          ),
          backdropFilter: useTransform(
            blur,
            (v) => `blur(${v}px) saturate(140%)`
          ),
          WebkitBackdropFilter: useTransform(
            blur,
            (v) => `blur(${v}px) saturate(140%)`
          ),
          borderBottomColor: useTransform(
            bgOpacity,
            (v) => `rgba(15, 23, 42, ${v * 0.08})`
          ),
        }}
        className="border-b border-transparent"
      >
        <nav className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 h-[72px] flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 sm:gap-3 group">
            <img
              src="/ekam-logo.png"
              alt="EKAM Institute"
              className="h-8 sm:h-10 w-auto object-contain"
            />
            <div className="flex flex-col leading-none">
              <span className="text-[14px] sm:text-[15px] font-bold tracking-tight text-ink">
                EKAM
              </span>
              <span className="text-[9px] sm:text-[10px] text-ink-dim tracking-[0.14em] uppercase mt-0.5">
                Institute of Advanced Medical Studies
              </span>
            </div>
          </Link>

          <ul className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="px-4 py-2 text-[13.5px] text-ink-dim hover:text-ink transition-colors rounded-full"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <Link
              href="/contact#enquiry-form"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ink text-bg-elevated text-[13px] font-medium hover:bg-teal transition-colors"
            >
              Apply
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 12 H19 M13 6 L19 12 L13 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden flex flex-col items-center justify-center w-10 h-10 rounded-lg"
              aria-label="Toggle menu"
            >
              <span
                className={`block w-5 h-0.5 bg-ink transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[3px]" : ""}`}
              />
              <span
                className={`block w-5 h-0.5 bg-ink mt-1 transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[3px]" : ""}`}
              />
            </button>
          </div>
        </nav>
      </motion.div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="md:hidden absolute top-[72px] inset-x-0 bg-[#fafbfd]/95 backdrop-blur-xl border-b border-border shadow-lg"
          >
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 py-4 flex flex-col gap-1">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 text-[15px] font-medium text-ink-dim hover:text-ink hover:bg-surface rounded-xl transition-colors"
                >
                  {l.label}
                </Link>
              ))}
              <Link
                href="/contact#enquiry-form"
                onClick={() => setMobileOpen(false)}
                className="sm:hidden mt-2 flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-ink text-bg-elevated text-[14px] font-medium"
              >
                Apply Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
