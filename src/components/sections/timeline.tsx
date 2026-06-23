"use client";

import { timeline } from "@/lib/data";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/ui/reveal";
import { motion } from "framer-motion";

export function JourneyTimeline() {
  return (
    <section id="journey" className="section-padding">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <h2 className="section-heading">Journey</h2>
          <p className="section-subheading">
            Milestones that shaped my path as a developer and designer.
          </p>
        </Reveal>

        <div className="relative mt-16 md:mt-24">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px">
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="w-full bg-accent origin-top"
            />
          </div>

          <StaggerContainer className="space-y-12 md:space-y-16">
            {timeline.map((item, index) => (
              <StaggerItem key={item.year}>
                <div
                  className={`relative flex flex-col md:flex-row ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } gap-8 md:gap-0`}
                >
                  <div className="hidden md:block md:w-1/2" />

                  <div className="absolute left-4 md:left-1/2 top-6 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-accent bg-background z-10" />

                  <div
                    className={`ml-12 md:ml-0 md:w-1/2 ${
                      index % 2 === 0 ? "md:pl-12" : "md:pr-12 md:text-right"
                    }`}
                  >
                    <div className="rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                      <span className="text-sm font-medium text-accent">
                        {item.year}
                      </span>
                      <h3 className="mt-2 font-heading text-xl font-semibold">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
