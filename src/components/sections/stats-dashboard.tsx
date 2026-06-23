"use client";

import { stats } from "@/lib/data";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/ui/reveal";
import { AnimatedCounter } from "@/components/ui/animated-counter";

export function StatsDashboard() {
  return (
    <section id="stats" className="section-padding">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <h2 className="section-heading">By the Numbers</h2>
          <p className="section-subheading">Quantifying the journey so far.</p>
        </Reveal>

        <StaggerContainer className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
          {stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <div className="rounded-2xl border border-border bg-card p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <p className="font-heading text-3xl font-semibold md:text-4xl">
                  {"decimal" in stat && stat.decimal ? (
                    <>
                      {stat.value}
                      {"suffix" in stat ? stat.suffix : ""}
                    </>
                  ) : (
                    <AnimatedCounter value={stat.value as number} suffix="+" />
                  )}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
