/**
 * EKAM Design System — Motion Utilities
 *
 * Reusable animation constants and helpers for Framer Motion.
 * Import these instead of redefining easing/transition values everywhere.
 *
 * Usage:
 *   import { ease, fadeUp, staggerChild, sectionReveal } from "@/lib/motion-utils";
 *
 *   <motion.div {...fadeUp(0.2)}>
 *   <motion.div {...sectionReveal}>
 *   <motion.div {...staggerChild(index)}>
 */

/* ── Signature easing curve ── */
export const ease = [0.22, 1, 0.36, 1] as const;

/* ── Standard fade + slide up entrance ── */
export function fadeUp(delay = 0, duration = 0.8) {
  return {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    transition: { duration, ease, delay },
  };
}

/* ── Scroll-triggered section reveal ── */
export const sectionReveal = {
  initial: { opacity: 0, y: 10 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.9, ease },
};

/* ── Staggered child (use inside a list/grid) ── */
export function staggerChild(index: number, baseDelay = 0.25, stagger = 0.08) {
  return {
    initial: { opacity: 0, y: 10 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease, delay: baseDelay + index * stagger },
  };
}

/* ── Headline word-by-word reveal (use with StaggerLine component) ── */
export function lineReveal(delay: number) {
  return {
    initial: { y: "100%" },
    animate: { y: 0 },
    transition: { duration: 1.1, ease, delay },
  };
}
