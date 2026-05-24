/**
 * EKAM Design System — StaggerLine Component
 *
 * Reveals headline text line-by-line with a slide-up animation.
 * Use in hero sections for dramatic headline entrances.
 *
 * Usage:
 *   <h1 className="font-display text-[clamp(44px,7.2vw,108px)] leading-[0.94] tracking-[-0.035em] font-medium">
 *     <StaggerLine delay={0.5}>Shaping the </StaggerLine>
 *     <StaggerLine delay={0.65}>
 *       <span className="serif-italic text-gradient-teal">future</span> of
 *     </StaggerLine>
 *     <StaggerLine delay={0.8}>your headline</StaggerLine>
 *     <StaggerLine delay={0.95}>goes here.</StaggerLine>
 *   </h1>
 */

"use client";

import { motion } from "framer-motion";
import { lineReveal } from "./motion-utils";

export function StaggerLine({
  children,
  delay,
}: {
  children: React.ReactNode;
  delay: number;
}) {
  return (
    <span className="block overflow-hidden">
      <motion.span className="block" {...lineReveal(delay)}>
        {children}
      </motion.span>
    </span>
  );
}
