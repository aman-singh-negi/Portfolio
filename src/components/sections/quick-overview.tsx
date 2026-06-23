"use client";

import { quickOverview } from "@/lib/data";
import { StaggerContainer, StaggerItem } from "@/components/ui/reveal";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { AnimatedCounter } from "@/components/ui/animated-counter";

export function QuickOverview() {
  return (
    <section className="section-padding">
      <div className="mx-auto max-w-7xl">
        <StaggerContainer className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {quickOverview.map((item) => (
            <StaggerItem key={`${item.label}-${item.suffix}`}>
              <SpotlightCard className="flex flex-col items-center justify-center p-6 text-center">
                <span className="font-heading text-2xl font-semibold md:text-3xl">
                  {item.numeric && typeof item.value === "number" ? (
                    <AnimatedCounter value={item.value} suffix={item.suffix} />
                  ) : (
                    <>
                      {item.value}
                      {item.suffix}
                    </>
                  )}
                </span>
                <span className="mt-2 text-xs text-muted-foreground md:text-sm">
                  {item.label}
                </span>
              </SpotlightCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
