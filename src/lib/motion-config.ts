import type { Transition, Variants } from "motion/react";

/**
 * Consistent motion configuration for smooth, natural animations.
 * 
 * Guidelines:
 * - Use expo easing for entrances (feels refined, decisive)
 * - Use spring for interactive elements (feels alive)
 * - Exit animations should be ~75% of entrance duration
 * - Stagger delays: 60-100ms for lists, 150ms for sections
 */

// Refined expo easing - smooth deceleration that feels decisive
export const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;

// Slightly snappier variant
export const EASE_OUT_QUINT = [0.22, 1, 0.36, 1] as const;

// Standard durations by purpose
export const DURATION = {
  instant: 0.15, // Button press, toggle
  fast: 0.25, // State changes, hover
  normal: 0.4, // Layout changes, reveals
  slow: 0.6, // Entrance animations
  hero: 0.8, // Page load, hero
} as const;

// Spring presets for different use cases
export const SPRING = {
  // Gentle spring for large elements
  gentle: {
    type: "spring" as const,
    stiffness: 100,
    damping: 20,
    mass: 1,
  },
  // Snappy spring for buttons and interactive elements
  snappy: {
    type: "spring" as const,
    stiffness: 400,
    damping: 30,
  },
  // Bouncy spring for playful interactions
  bouncy: {
    type: "spring" as const,
    stiffness: 300,
    damping: 15,
  },
} satisfies Record<string, Transition>;

// Standard tween transition
export const TWEEN = {
  normal: {
    type: "tween" as const,
    duration: DURATION.normal,
    ease: EASE_OUT_EXPO,
  },
  fast: {
    type: "tween" as const,
    duration: DURATION.fast,
    ease: EASE_OUT_EXPO,
  },
  slow: {
    type: "tween" as const,
    duration: DURATION.slow,
    ease: EASE_OUT_EXPO,
  },
  hero: {
    type: "tween" as const,
    duration: DURATION.hero,
    ease: EASE_OUT_EXPO,
  },
} satisfies Record<string, Transition>;

// Stagger configuration
export const STAGGER = {
  fast: 0.06,
  normal: 0.08,
  slow: 0.12,
  section: 0.15,
} as const;

// Common animation variants
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0 },
};

// Container variant that staggers children
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: STAGGER.normal,
      delayChildren: 0.1,
    },
  },
};

// For step-by-step reveals (like the cease & desist flow)
export const stepReveal: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "tween",
      duration: DURATION.normal,
      ease: EASE_OUT_EXPO,
    },
  },
};
