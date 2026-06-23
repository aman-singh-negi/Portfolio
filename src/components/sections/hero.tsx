"use client";

import { useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/data";

interface HeroProps {
  introReady?: boolean;
}

export function Hero({ introReady = false }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const blob1X = useTransform(mouseX, [-500, 500], [-20, 20]);
  const blob1Y = useTransform(mouseY, [-500, 500], [-20, 20]);
  const blob2X = useTransform(mouseX, [-500, 500], [15, -15]);
  const blob2Y = useTransform(mouseY, [-500, 500], [15, -15]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  const scrollToWork = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const name = "AMAN SINGH NEGI";
  const words = name.split(" ");
  const baseDelay = introReady ? 0.1 : 99;

  return (
    <section
      id="hero"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(79,140,255,0.1)_0%,_transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(79,140,255,0.06)_0%,_transparent_45%)]" />
        <motion.div
          style={{ x: blob1X, y: blob1Y }}
          className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-accent/[0.06] blur-[100px]"
        />
        <motion.div
          style={{ x: blob2X, y: blob2Y }}
          className="absolute bottom-1/4 right-1/4 h-80 w-80 rounded-full bg-accent/[0.08] blur-[80px]"
        />
        <div className="noise absolute inset-0" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-24 text-center md:px-12">
        {introReady && (
          <motion.div
            initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: baseDelay, duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/40 px-4 py-1.5 text-xs text-muted-foreground backdrop-blur-md"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-40" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green-500" />
            </span>
            B.Tech CSE · CGPA {siteConfig.education.cgpa}
          </motion.div>
        )}

        <h1 className="font-heading text-4xl font-semibold tracking-[-0.03em] sm:text-6xl md:text-7xl lg:text-[80px] leading-[0.95]">
          {words.map((word, wordIndex) => (
            <span key={wordIndex} className="inline-block mr-[0.2em] last:mr-0">
              {word.split("").map((char, charIndex) => (
                <motion.span
                  key={charIndex}
                  initial={{ opacity: 0, y: 40, filter: "blur(6px)" }}
                  animate={
                    introReady
                      ? { opacity: 1, y: 0, filter: "blur(0px)" }
                      : { opacity: 0, y: 40, filter: "blur(6px)" }
                  }
                  transition={{
                    delay: baseDelay + 0.08 + wordIndex * 0.06 + charIndex * 0.02,
                    duration: 0.55,
                    ease: [0.21, 0.47, 0.32, 0.98],
                  }}
                  className="hero-gradient-text inline-block"
                >
                  {char}
                </motion.span>
              ))}
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={introReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ delay: baseDelay + 0.45, duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mx-auto mt-8 max-w-2xl text-lg text-muted-foreground md:text-xl leading-relaxed"
        >
          {siteConfig.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={introReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ delay: baseDelay + 0.6, duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <MagneticButton
            onClick={scrollToWork}
            className="glow-accent inline-flex h-12 items-center justify-center rounded-full bg-accent px-8 text-sm font-medium text-accent-foreground shadow-sm transition-all hover:brightness-110"
          >
            View Work
          </MagneticButton>
          <MagneticButton
            onClick={scrollToContact}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-border/80 bg-card/40 px-8 text-sm font-medium backdrop-blur-md transition-all hover:border-accent/25 hover:bg-card/70"
          >
            <Mail className="h-4 w-4" />
            Get in Touch
          </MagneticButton>
        </motion.div>

        {introReady && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: baseDelay + 1, duration: 0.5 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
          >
            <Button
              variant="ghost"
              size="icon"
              onClick={scrollToWork}
              className="rounded-full border border-transparent hover:border-border/60"
              aria-label="Scroll down"
            >
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowDown className="h-5 w-5 text-muted-foreground" />
              </motion.div>
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
