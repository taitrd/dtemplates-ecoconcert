"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

/**
 * Background Component
 * Provides a stage-like radial gradient background using primary and indigo colors.
 * Features a scroll-linked 'flip' effect where the spotlight center shifts as the user scrolls.
 */
export const BackgroundSnippet = ({
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  // Smoothing the scroll progress for a 'slow' feel
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Transform focal point Y coordinate from 10% (top) to 90% (bottom)
  const focalPointY = useTransform(smoothProgress, [0, 1], ["10%", "90%"]);

  return (
    <div
      className={cn(
        "w-full dark:flex flex-col items-center justify-center overflow-hidden inset-0 fixed -z-10 !my-0 hidden",
        className,
      )}
    >
      {/* Background Pattern - Animated Stage Gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute inset-0 -z-10 h-full w-full"
          style={{
            background: useTransform(
              focalPointY,
              (y) =>
                `radial-gradient(125% 125% at 50% ${y}, #0a0b2e 40%, #63e 100%)`,
            ),
          }}
        />
        {/* Subtle Grain or Overlay for depth */}
        <div className="absolute inset-0 dark:bg-black/5 mix-blend-overlay -z-10" />
      </div>
    </div>
  );
};
