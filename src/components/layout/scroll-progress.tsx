"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[60] h-[2px] origin-left bg-accent"
      style={{ scaleX }}
    />
  );
}

export function ReadingProgress() {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);
  const strokeDashoffset = useSpring(0, { stiffness: 100, damping: 30 });
  const circumference = 2 * Math.PI * 18;

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => {
      setVisible(v > 0.05);
      strokeDashoffset.set(circumference - v * circumference);
    });
    return () => unsubscribe();
  }, [scrollYProgress, strokeDashoffset, circumference]);

  if (!visible) return null;

  return (
    <div className="fixed bottom-24 right-6 z-50 hidden lg:block">
      <svg width="44" height="44" className="-rotate-90">
        <circle
          cx="22"
          cy="22"
          r="18"
          fill="none"
          stroke="var(--border)"
          strokeWidth="2"
        />
        <motion.circle
          cx="22"
          cy="22"
          r="18"
          fill="none"
          stroke="var(--accent)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray={circumference}
          style={{ strokeDashoffset }}
        />
      </svg>
    </div>
  );
}
