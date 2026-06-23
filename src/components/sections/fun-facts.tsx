"use client";

import { funFacts } from "@/lib/data";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/ui/reveal";
import { motion } from "framer-motion";

export function FunFacts() {
  return (
    <section id="fun-facts" className="section-padding">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <h2 className="section-heading">Fun Facts</h2>
          <p className="section-subheading">
            A few things that make me, me.
          </p>
        </Reveal>

        <StaggerContainer className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {funFacts.map((fact, index) => (
            <StaggerItem key={fact.title}>
              <motion.div
                whileHover={{ rotate: index % 2 === 0 ? 2 : -2, y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="rounded-2xl border border-border bg-card p-6 text-center transition-shadow duration-300 hover:shadow-lg"
              >
                <span className="text-3xl">{fact.emoji}</span>
                <h3 className="mt-4 font-heading text-base font-semibold">
                  {fact.title}
                </h3>
                <p className="mt-2 text-xs text-muted-foreground">
                  {fact.description}
                </p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
