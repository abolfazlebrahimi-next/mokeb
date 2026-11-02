"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** delay in seconds */
  delay?: number;
  /** translateY distance in px */
  y?: number;
  as?: "div" | "section" | "li" | "span";
  once?: boolean;
};

/**
 * Lightweight scroll-reveal wrapper using framer-motion.
 * Respects prefers-reduced-motion and falls back gracefully.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
  as = "div",
  once = true,
}: RevealProps) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] as typeof motion.div;

  return (
    <MotionTag
      initial={{ opacity: 0, y: reduce ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.2 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={cn(className)}
    >
      {children}
    </MotionTag>
  );
}

/** A reusable calligraphic section divider with brushstroke aesthetics. */
export function InkDivider({ className }: { className?: string }) {
  return (
    <div
      className={cn("flex items-center justify-center gap-4 py-6", className)}
      aria-hidden
    >
      <span className="h-px w-16 sm:w-24 bg-gradient-to-l from-primary/60 to-transparent" />
      <span className="text-gold/70 text-lg leading-none">❖</span>
      <span className="h-px w-16 sm:w-24 bg-gradient-to-r from-primary/60 to-transparent" />
    </div>
  );
}

/** Small section eyebrow label above titles. */
export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 text-sm font-medium tracking-wide text-muted-foreground",
        className,
      )}
    >
      <span className="h-px w-6 bg-primary/40" />
      {children}
      <span className="h-px w-6 bg-primary/40" />
    </span>
  );
}
