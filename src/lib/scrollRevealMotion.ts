import type { Variants } from "framer-motion";

export const scrollReveal: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      y: { type: "spring", duration: 0.62, bounce: 0.12 },
      opacity: { duration: 0.32, ease: "easeOut" },
    },
  },
};

export const reducedScrollReveal: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.18, ease: "easeOut" },
  },
};

export const staggerReveal: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

export const reducedStaggerReveal: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const scrollRevealViewport = { once: true, amount: 0.14 } as const;

export function getScrollRevealVariants(reduceMotion: boolean | null) {
  return reduceMotion ? reducedScrollReveal : scrollReveal;
}

export function getStaggerRevealVariants(reduceMotion: boolean | null) {
  return reduceMotion ? reducedStaggerReveal : staggerReveal;
}
