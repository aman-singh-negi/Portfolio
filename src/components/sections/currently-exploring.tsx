"use client";

import { exploring } from "@/lib/data";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/ui/reveal";
import { useInView } from "@/hooks/use-interactions";
import { motion } from "framer-motion";

function ProgressBar({ topic, progress }: { topic: string; progress: number }) {
  const { ref, inView } = useInView(0.3);

  return (
    <div ref={ref}>
      <div className="mb-2 flex justify-between text-sm">
        <span className="font-medium">{topic}</span>
        <span className="text-muted-foreground">{progress}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-border">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: inView ? `${progress}%` : 0 }}
          transition={{ duration: 1.2, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="h-full rounded-full bg-gradient-to-r from-accent/80 to-accent"
        />
      </div>
    </div>
  );
}

export function CurrentlyExploring() {
  return (
    <section id="exploring" className="section-padding">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <h2 className="section-heading">Currently Exploring</h2>
          <p className="section-subheading">
            Areas I&apos;m actively deepening my expertise in.
          </p>
        </Reveal>

        <StaggerContainer className="mt-16 max-w-2xl space-y-8">
          {exploring.map((item) => (
            <StaggerItem key={item.topic}>
              <ProgressBar topic={item.topic} progress={item.progress} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
