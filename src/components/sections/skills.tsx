"use client";

import { skills } from "@/lib/data";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/ui/reveal";
import { motion } from "framer-motion";

export function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <h2 className="section-heading">Skills & Toolbox</h2>
          <p className="section-subheading">
            Technologies and tools I use to bring ideas to life.
          </p>
        </Reveal>

        <div className="mt-16 space-y-12">
          {Object.entries(skills).map(([category, items], catIndex) => (
            <Reveal key={category} delay={catIndex * 0.1}>
              <div>
                <h3 className="mb-6 text-sm font-medium uppercase tracking-wider text-muted-foreground">
                  {category}
                </h3>
                <StaggerContainer className="flex flex-wrap gap-3">
                  {items.map((skill) => (
                    <StaggerItem key={skill}>
                      <motion.span
                        whileHover={{ y: -4, scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        className="inline-block rounded-full border border-border bg-card px-4 py-2 text-sm transition-colors hover:border-accent/30 hover:bg-accent/5"
                      >
                        {skill}
                      </motion.span>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
