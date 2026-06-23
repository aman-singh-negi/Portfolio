"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { LoadingScreen } from "@/components/layout/loading-screen";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Dock } from "@/components/layout/dock";
import { ScrollProgress, ReadingProgress } from "@/components/layout/scroll-progress";
import { BackToTop } from "@/components/layout/back-to-top";
import { CustomCursor } from "@/components/layout/custom-cursor";
import { CommandPalette, TerminalModal } from "@/components/layout/command-palette";
import { SmoothScroll } from "@/components/providers/smooth-scroll";
import { Hero } from "@/components/sections/hero";
import { QuickOverview } from "@/components/sections/quick-overview";
import { About } from "@/components/sections/about";
import { JourneyTimeline } from "@/components/sections/timeline";
import { Achievements } from "@/components/sections/achievements";
import { Certificates } from "@/components/sections/certificates";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { GitHubActivity } from "@/components/sections/github-activity";
import { CodingProfiles } from "@/components/sections/coding-profiles";
import { StatsDashboard } from "@/components/sections/stats-dashboard";
import { CurrentlyExploring } from "@/components/sections/currently-exploring";
import { FunFacts } from "@/components/sections/fun-facts";
import { Testimonials } from "@/components/sections/testimonials";
import { Contact } from "@/components/sections/contact";
import { useKonamiCode, useSecretCommand } from "@/hooks/use-interactions";

export function ClientShell() {
  const [introReady, setIntroReady] = useState(false);
  const [commandOpen, setCommandOpen] = useState(false);
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [konamiActive, setKonamiActive] = useState(false);
  const [rotated, setRotated] = useState(false);

  useSecretCommand("sudo hire aman", useCallback(() => setTerminalOpen(true), []));

  useKonamiCode(
    useCallback(() => {
      setKonamiActive(true);
      setTimeout(() => setKonamiActive(false), 3000);
    }, [])
  );

  const handleLogoDoubleClick = useCallback(() => {
    setRotated(true);
    setTimeout(() => setRotated(false), 1000);
  }, []);

  return (
    <SmoothScroll>
      <motion.div
        animate={{
          rotate: rotated ? 360 : konamiActive ? [0, 5, -5, 5, 0] : 0,
        }}
        transition={{
          duration: rotated ? 1 : 0.5,
          ease: [0.21, 0.47, 0.32, 0.98],
        }}
      >
        <LoadingScreen onComplete={() => setIntroReady(true)} />
        <ScrollProgress />
        <ReadingProgress />
        <CustomCursor />
        <Navbar
          introReady={introReady}
          onOpenCommand={() => setCommandOpen(true)}
          onLogoDoubleClick={handleLogoDoubleClick}
        />
        <CommandPalette open={commandOpen} onOpenChange={setCommandOpen} />
        <TerminalModal open={terminalOpen} onClose={() => setTerminalOpen(false)} />

        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: introReady ? 1 : 0 }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <Hero introReady={introReady} />
          <div className="section-divider mx-auto max-w-7xl" />
          <QuickOverview />
          <About />
          <JourneyTimeline />
          <Achievements />
          <Certificates />
          <Projects />
          <Skills />
          <GitHubActivity />
          <CodingProfiles />
          <StatsDashboard />
          <CurrentlyExploring />
          <FunFacts />
          <Testimonials />
          <Contact />
        </motion.main>

        <Footer />
        {introReady && <Dock />}
        <BackToTop />

        {konamiActive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pointer-events-none fixed inset-0 z-[70] flex items-center justify-center"
          >
            <div className="rounded-2xl border border-accent/30 bg-accent/10 px-8 py-4 backdrop-blur-xl">
              <p className="font-heading text-lg font-semibold text-accent">
                Secret unlocked — you found the Konami code!
              </p>
            </div>
          </motion.div>
        )}
      </motion.div>
    </SmoothScroll>
  );
}
