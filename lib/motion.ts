import type { Variants, Transition } from "framer-motion";

export const luxuryEase = [0.22, 1, 0.36, 1] as const;

export const luxuryTransition: Transition = {
  duration: 0.8,
  ease: luxuryEase,
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: luxuryTransition,
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.9, ease: luxuryEase },
  },
};

/** Parent only orchestrates stagger — no opacity on parent (avoids whole grid staying invisible). */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: luxuryTransition,
  },
};

export const slideFromRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: luxuryTransition,
  },
};

export const slideFromLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: luxuryTransition,
  },
};

/** Lenient root so sections still animate when partially on screen (RTL / tall layouts). */
export const viewportOnce = {
  once: true,
  margin: "0px 0px 12% 0px" as const,
  amount: 0.08 as const,
};
