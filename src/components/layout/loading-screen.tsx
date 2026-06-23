"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useReducedMotion } from "@/hooks/use-interactions";

interface LoadingScreenProps {
  onComplete?: () => void;
}

const MIN_DURATION = 1400;

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const reducedMotion = useReducedMotion();

  const finish = useCallback(() => {
    setProgress(100);
    setTimeout(() => {
      setIsLoading(false);
      onComplete?.();
    }, reducedMotion ? 0 : 450);
  }, [onComplete, reducedMotion]);

  useEffect(() => {
    if (reducedMotion) {
      finish();
      return;
    }

    const start = Date.now();
    let frame: number;

    const tick = () => {
      const elapsed = Date.now() - start;
      const eased = 1 - Math.pow(1 - Math.min(elapsed / MIN_DURATION, 1), 3);
      setProgress(Math.round(eased * 92));
      if (elapsed < MIN_DURATION) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);

    const onLoad = () => {
      const remaining = Math.max(0, MIN_DURATION - (Date.now() - start));
      setTimeout(finish, remaining);
    };

    if (document.readyState === "complete") {
      onLoad();
    } else {
      window.addEventListener("load", onLoad);
    }

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("load", onLoad);
    };
  }, [finish, reducedMotion]);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-background"
        >
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(79,140,255,0.12)_0%,_transparent_65%)]" />
            <div className="absolute top-1/2 left-1/2 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.04] blur-[120px]" />
            <div className="noise absolute inset-0" />
          </div>

          <motion.div
            exit={{ opacity: 0, scale: 0.96, filter: "blur(10px)" }}
            transition={{ duration: 0.45, ease: [0.76, 0, 0.24, 1] }}
            className="relative flex flex-col items-center"
          >
            <div className="relative mb-10">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-[3px] rounded-[20px] bg-[conic-gradient(from_0deg,transparent,rgba(79,140,255,0.5),transparent)] opacity-60"
              />
              <div className="relative flex h-[72px] w-[72px] items-center justify-center rounded-[18px] border border-border/80 bg-card/90 shadow-[0_0_40px_-12px_rgba(79,140,255,0.45)] backdrop-blur-xl">
                <span className="font-heading text-[22px] font-semibold tracking-tight text-gradient">
                  ASN
                </span>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="text-center"
            >
              <p className="font-heading text-sm font-medium tracking-[0.2em] text-foreground/90 uppercase">
                Crafting Experiences
              </p>
              <p className="mt-2 text-xs text-muted-foreground">Aman Singh Negi</p>
            </motion.div>

            <div className="mt-10 w-48">
              <div className="mb-2 flex items-center justify-between text-[10px] tabular-nums tracking-wider text-muted-foreground">
                <span>Loading</span>
                <span>{progress}%</span>
              </div>
              <div className="h-[2px] overflow-hidden rounded-full bg-border/60">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-accent/60 via-accent to-accent/80"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
