"use client";

import { achievements } from "@/lib/data";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { Trophy, Code, Zap, Rocket, Target } from "lucide-react";

const iconComponents = {
  trophy: Trophy,
  code: Code,
  zap: Zap,
  rocket: Rocket,
  target: Target,
};

export function Achievements() {
  return (
    <section id="achievements" className="section-padding">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeader
            label="Highlights"
            title="Achievements"
            description="Highlights from competitions, hackathons, and continuous learning."
          />
        </Reveal>

        <StaggerContainer className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((item) => {
            const Icon =
              iconComponents[item.icon as keyof typeof iconComponents] || Trophy;
            return (
              <StaggerItem key={item.title}>
                <SpotlightCard className="group h-full">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent transition-transform duration-300 group-hover:rotate-6">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-heading text-lg font-semibold">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </SpotlightCard>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
