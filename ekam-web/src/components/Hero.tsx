"use client";

import { motion } from "framer-motion";
import { useRef, useEffect, useState, useCallback } from "react";

const TOTAL_FRAMES = 163;

// Keyframe stops: each scroll snaps to the next target frame
// Phase 0 → frame 0   (hero content)
// Phase 1 → frame 65  (building settles)
// Phase 2 → frame 105 (body expands left)
// Phase 3 → frame 162 (end of animation)
// Phase 4 → released, scroll to next section
const KEYFRAMES = [0, 65, 105, 162];
const TRANSITION_MS = 1200; // smooth, slow animation between keyframes

const specialtyChips = [
  "Interventional Sciences",
  "Robotic Surgery",
  "Cardiac Care",
  "Neurosciences",
  "Critical Care",
  "Medical Imaging",
  "B.Sc. Nursing",
  "Physiotherapy",
  "Allied Health Sciences",
];

const ease = [0.22, 1, 0.36, 1] as const;

function getFrameSrc(index: number): string {
  const num = String(index + 1).padStart(3, "0");
  return `/ezgif-573d758478e019a1-jpg/ezgif-frame-${num}.jpg`;
}

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [currentFrame, setCurrentFrame] = useState(0);
  const [preloaded, setPreloaded] = useState(false);

  const [released, setReleased] = useState(false);

  const phaseRef = useRef(0);
  const releasedRef = useRef(false);
  const isAnimatingRef = useRef(false);
  const frameRef = useRef(0);
  const animId = useRef(0);
  const cooldownRef = useRef(false);

  // Preload all frames in background
  useEffect(() => {
    let count = 0;
    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = getFrameSrc(i);
      img.onload = () => {
        count++;
        if (count === TOTAL_FRAMES) setPreloaded(true);
      };
    }
  }, []);

  // Smooth frame animation with ease-out cubic
  const animateToFrame = useCallback((target: number) => {
    const start = frameRef.current;
    if (start === target) {
      isAnimatingRef.current = false;
      return;
    }

    const startTime = performance.now();
    isAnimatingRef.current = true;
    cancelAnimationFrame(animId.current);

    const tick = (now: number) => {
      const t = Math.min((now - startTime) / TRANSITION_MS, 1);
      const eased = 1 - Math.pow(1 - t, 3); // ease-out cubic
      const frame = Math.round(start + (target - start) * eased);
      frameRef.current = frame;
      setCurrentFrame(frame);

      if (t < 1) {
        animId.current = requestAnimationFrame(tick);
      } else {
        frameRef.current = target;
        setCurrentFrame(target);
        isAnimatingRef.current = false;
      }
    };

    animId.current = requestAnimationFrame(tick);
  }, []);

  // Core logic: advance or retreat one phase
  const step = useCallback(
    (direction: 1 | -1): boolean => {
      const section = sectionRef.current;
      if (!section) return false;

      const rect = section.getBoundingClientRect();

      // Haven't reached hero yet — let page scroll normally
      if (rect.top > 5 && direction === 1) return false;

      // Re-engage when scrolling up back to the hero from below
      if (releasedRef.current && direction === -1) {
        if (window.scrollY <= 5) {
          releasedRef.current = false;
          setReleased(false);
          phaseRef.current = KEYFRAMES.length - 1;
          return true;
        }
        return false;
      }

      // Already released, scrolling down — let page scroll
      if (releasedRef.current) return false;

      // At phase 0 scrolling up — let page scroll naturally
      if (phaseRef.current <= 0 && direction === -1) return false;

      // During animation or cooldown, block scroll but don't advance
      if (isAnimatingRef.current || cooldownRef.current) return true;

      if (direction === 1) {
        if (phaseRef.current < KEYFRAMES.length - 1) {
          phaseRef.current++;
          animateToFrame(KEYFRAMES[phaseRef.current]);
          cooldownRef.current = true;
          setTimeout(() => {
            cooldownRef.current = false;
          }, TRANSITION_MS + 300);
        } else {
          // All keyframes done — release to next section
          releasedRef.current = true;
          setReleased(true);
          return false;
        }
      } else {
        if (phaseRef.current > 0) {
          phaseRef.current--;
          animateToFrame(KEYFRAMES[phaseRef.current]);
          cooldownRef.current = true;
          setTimeout(() => {
            cooldownRef.current = false;
          }, TRANSITION_MS + 300);
        }
      }

      return true;
    },
    [animateToFrame],
  );

  // Wheel + touch event listeners
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (step(e.deltaY > 0 ? 1 : -1)) {
        e.preventDefault();
      }
    };

    let touchStartY = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      // Prevent scroll while hero is locked
      if (
        !releasedRef.current &&
        phaseRef.current > 0 &&
        sectionRef.current
      ) {
        const rect = sectionRef.current.getBoundingClientRect();
        if (rect.top <= 5) e.preventDefault();
      }
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const deltaY = touchStartY - e.changedTouches[0].clientY;
      if (Math.abs(deltaY) < 30) return;
      step(deltaY > 0 ? 1 : -1);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
      cancelAnimationFrame(animId.current);
    };
  }, [step]);

  // ── Derived visual states ──

  // Hero content: visible at frame 0, fades out during 30–50
  const contentVisible = currentFrame < 50;
  const contentFade =
    currentFrame < 30 ? 1 : currentFrame < 50 ? 1 - (currentFrame - 30) / 20 : 0;
  const contentShift = currentFrame < 50 ? -(currentFrame / 50) * 30 : -30;

  // Dark overlay intensity
  const overlayFade =
    currentFrame < 30
      ? 1
      : currentFrame < 55
        ? 1 - ((currentFrame - 30) / 25) * 0.4
        : currentFrame > 130
          ? 0.6 + ((currentFrame - 130) / 33) * 0.2
          : 0.6;

  // Partnership panel: visible around frame 65 (phase 1)
  // Fades in 48–56, full 56–78, fades out 78–88
  const partnershipOpacity =
    currentFrame >= 48 && currentFrame <= 88
      ? currentFrame < 56
        ? (currentFrame - 48) / 8
        : currentFrame > 78
          ? 1 - (currentFrame - 78) / 10
          : 1
      : 0;

  // Clinical panel: visible around frame 105 (phase 2)
  // Fades in 90–98, full 98–135, fades out 135–148
  const clinicalOpacity =
    currentFrame >= 90 && currentFrame <= 148
      ? currentFrame < 98
        ? (currentFrame - 90) / 8
        : currentFrame > 135
          ? 1 - (currentFrame - 135) / 13
          : 1
      : 0;

  return (
    <>
      {/* Spacer: reserves space in the document flow while hero is fixed */}
      {!released && <div className="h-screen w-full" />}

      <section
        ref={sectionRef}
        id="top"
        className={`w-full bg-bg h-screen ${released ? "relative" : "fixed inset-0 z-50"}`}
      >
        {/* Full viewport container */}
        <div className="h-screen w-full overflow-hidden">
        {/* Layer 0: Frame sequence image */}
        <img
          src={getFrameSrc(currentFrame)}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          draggable={false}
        />

        {/* Layer 1: Dark gradient overlay */}
        <div
          className="absolute inset-0 transition-opacity duration-300"
          style={{
            opacity: overlayFade,
            background:
              "linear-gradient(180deg, rgba(5,8,16,0.6) 0%, rgba(5,8,16,0.25) 35%, rgba(5,8,16,0.35) 65%, rgba(5,8,16,0.85) 100%)",
          }}
        />

        {/* Layer 1b: Side vignette */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300"
          style={{
            opacity: overlayFade,
            background:
              "radial-gradient(ellipse at center, transparent 40%, rgba(5,8,16,0.5) 100%)",
          }}
        />

        {/* Layer 2: Grain + grid texture */}
        <div
          className="absolute inset-0 bg-grain transition-opacity duration-300"
          style={{ opacity: overlayFade * 0.3 }}
        />
        <div
          className="absolute inset-0 bg-grid transition-opacity duration-300"
          style={{ opacity: overlayFade * 0.2 }}
        />

        {/* Layer 4: Hero content (phase 0) */}
        <div
          className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 pt-[120px] sm:pt-[160px] pb-[80px] sm:pb-[120px] h-full flex flex-col transition-all duration-200"
          style={{
            opacity: contentFade,
            transform: `translateY(${contentShift}%)`,
            pointerEvents: contentVisible ? "auto" : "none",
          }}
        >
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.4 }}
            className="flex items-center gap-3 mb-10"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-teal opacity-75 animate-ping" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-teal" />
            </span>
            <span className="text-[11px] tracking-[0.24em] uppercase text-white/60 font-medium">
              <strong className="font-bold text-white">EIAMS</strong>
              {" Institute "}&nbsp;&middot;&nbsp;
              {" Established for the next generation of specialists"}
            </span>
          </motion.div>

          {/* Headline */}
          <h1 className="font-display text-[clamp(44px,7.2vw,108px)] leading-[0.94] tracking-[-0.035em] font-medium max-w-[14ch]">
            <StaggerLine delay={0.55}>Shaping the </StaggerLine>
            <StaggerLine delay={0.7}>
              <span className="serif-italic text-gradient-teal-light">
                future
              </span>{" "}
              of
            </StaggerLine>
            <StaggerLine delay={0.85}>advanced medical</StaggerLine>
            <StaggerLine delay={1.0}>education.</StaggerLine>
          </h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 1.25 }}
            className="mt-10 max-w-[52ch] text-[17px] md:text-[18px] leading-[1.55] text-white/60"
          >
            {"Where medicine meets advanced technology. "}
            <strong className="font-bold text-white">EIAMS</strong>
            {" trains the interventionists, surgeons, and clinical scientists shaping tomorrow's healthcare — through fellowships built around live procedures, simulation, and research."}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 1.4 }}
            className="mt-12 flex flex-wrap items-center gap-3"
          >
            <a
              href="#programs"
              className="btn-glow group inline-flex items-center gap-3 px-6 h-12 rounded-full bg-white text-[#0f172a] text-[14px] font-medium tracking-tight hover:bg-teal hover:text-white transition-colors"
            >
              Explore Programs
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                className="transition-transform duration-500 group-hover:translate-x-1"
              >
                <path
                  d="M5 12 H19 M13 6 L19 12 L13 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a
              href="/contact#enquiry-form"
              className="inline-flex items-center gap-2 px-6 h-12 rounded-full border border-white/20 text-white text-[14px] font-medium tracking-tight hover:bg-white/[0.06] hover:border-teal/40 transition-all backdrop-blur-sm"
            >
              Apply Now
            </a>
          </motion.div>

          {/* Spacer */}
          <div className="flex-1" />

          {/* Floating specialty chips */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease, delay: 1.7 }}
            className="mt-16 flex flex-wrap items-center gap-x-2 gap-y-2 max-w-[720px]"
          >
            {specialtyChips.map((chip, i) => (
              <motion.span
                key={chip}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  ease,
                  delay: 1.8 + i * 0.08,
                }}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[12px] text-white/70 hover:text-white transition-colors backdrop-blur-md bg-white/[0.06] border border-white/[0.08]"
              >
                <span className="w-1 h-1 rounded-full bg-teal" />
                {chip}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* ── Scroll-triggered content panels ── */}

        {/* Phase 1: Partnership reveal (centered on frame 65) */}
        <div
          className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none"
          style={{ opacity: partnershipOpacity }}
        >
          <div className="max-w-[640px] backdrop-blur-xl bg-black/60 rounded-2xl p-8 md:p-12 border border-white/10 shadow-2xl text-center">
            <div className="text-[11px] tracking-[0.3em] uppercase text-teal font-medium mb-8">
              A Strategic Partnership
            </div>
            <div className="flex items-center justify-center gap-6 md:gap-10 mb-8">
              <div className="rounded-xl bg-white/90 p-3 md:p-4">
                <img
                  src="/ekam-logo.png"
                  alt="EKAM Institute"
                  className="h-12 md:h-16 object-contain"
                />
              </div>
              <div className="flex flex-col items-center gap-1">
                <svg
                  width="24"
                  height="24"
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
                <span className="text-[10px] tracking-[0.2em] uppercase text-white/40">
                  &times;
                </span>
              </div>
              <div className="rounded-xl bg-white/90 p-3 md:p-4">
                <img
                  src="/sakra-logo.png"
                  alt="Sakra World Hospital"
                  className="h-12 md:h-16 object-contain"
                />
              </div>
            </div>
            <h2 className="font-display text-[clamp(24px,3.5vw,48px)] leading-[1.1] tracking-[-0.03em] font-medium text-white max-w-[24ch] mx-auto">
              EKAM Institute of Advanced Medical Studies{" "}
              <span className="serif-italic text-gradient-teal-light">&amp;</span>{" "}
              Sakra World Hospital
            </h2>
            <p className="mt-5 max-w-[48ch] mx-auto text-[15px] md:text-[16px] leading-[1.6] text-white/70">
              World-class clinical infrastructure meets advanced medical
              education — training the next generation inside a working
              multi-specialty hospital.
            </p>
          </div>
        </div>

        {/* Phase 2: Clinical training partner (centered on frame 105) */}
        <div
          className="absolute inset-0 z-10 flex items-end pb-[10%] justify-start pointer-events-none"
          style={{ opacity: clinicalOpacity }}
        >
          <div className="max-w-[1440px] w-full mx-auto px-6 lg:px-10">
            <div className="max-w-[560px] backdrop-blur-xl bg-black/60 rounded-2xl p-8 md:p-10 border border-white/10 shadow-2xl">
              <div className="flex items-center gap-3 mb-5">
                <span className="w-8 h-px bg-teal" />
                <span className="text-[11px] tracking-[0.24em] uppercase text-teal font-medium">
                  Clinical Training Partner
                </span>
              </div>
              <h3 className="font-display text-[clamp(22px,2.8vw,36px)] leading-[1.05] tracking-[-0.02em] font-medium text-white mb-4">
                Training inside a{" "}
                <span className="serif-italic text-gradient-teal-light">
                  live hospital.
                </span>
              </h3>
              <ul className="flex flex-col gap-3">
                {[
                  "1,800+ live procedures per year",
                  "24/7 access to cath labs, ICUs & OTs",
                  "Multi-specialty rotations from week one",
                  "50+ specialist faculty across disciplines",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 text-[14px] text-white/70"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-teal shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 inset-x-0 h-[120px] bg-gradient-to-t from-bg to-transparent pointer-events-none z-20" />

        {/* Scroll cue — only visible at phase 0 */}
        <div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 z-30 transition-opacity duration-500"
          style={{ opacity: currentFrame < 5 ? 1 : 0 }}
        >
          <span className="text-[10px] tracking-[0.3em] uppercase">
            Scroll
          </span>
          <motion.div
            className="w-px h-10 bg-gradient-to-b from-white/50 to-transparent"
            animate={{ scaleY: [0.3, 1, 0.3] }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ transformOrigin: "top" }}
          />
        </div>
      </div>
    </section>
    </>
  );
}

function StaggerLine({
  children,
  delay,
}: {
  children: React.ReactNode;
  delay: number;
}) {
  return (
    <span className="block overflow-hidden">
      <motion.span
        className="block text-gradient-light"
        initial={{ y: "110%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1.1, ease, delay }}
      >
        {children}
      </motion.span>
    </span>
  );
}
