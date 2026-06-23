"use client";

import { githubStats } from "@/lib/data";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/ui/reveal";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { AnimatedCounter } from "@/components/ui/animated-counter";

export function GitHubActivity() {
  return (
    <section id="github" className="section-padding">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <h2 className="section-heading">GitHub Activity</h2>
          <p className="section-subheading">
            A snapshot of my open-source contributions and coding activity.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          <Reveal className="lg:col-span-2">
            <SpotlightCard className="p-6">
              <h3 className="mb-4 text-sm font-medium text-muted-foreground">
                Contribution Graph
              </h3>
              <div className="overflow-x-auto">
                <div className="flex gap-[3px] min-w-max">
                  {githubStats.contributions.map((week, wi) => (
                    <div key={wi} className="flex flex-col gap-[3px]">
                      {week.map((level, di) => (
                        <div
                          key={di}
                          className="h-[11px] w-[11px] rounded-sm"
                          style={{
                            backgroundColor:
                              level === 0
                                ? "var(--border)"
                                : level === 1
                                  ? "rgba(79, 140, 255, 0.2)"
                                  : level === 2
                                    ? "rgba(79, 140, 255, 0.4)"
                                    : "rgba(79, 140, 255, 0.7)",
                          }}
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </SpotlightCard>
          </Reveal>

          <StaggerContainer className="space-y-4">
            {[
              { label: "Commits", value: githubStats.commits },
              { label: "Repositories", value: githubStats.repositories },
              { label: "Stars", value: githubStats.stars },
            ].map((stat) => (
              <StaggerItem key={stat.label}>
                <SpotlightCard className="p-5">
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                  <p className="mt-1 font-heading text-2xl font-semibold">
                    <AnimatedCounter value={stat.value} suffix="+" />
                  </p>
                </SpotlightCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        <Reveal delay={0.2}>
          <SpotlightCard className="mt-8 p-6">
            <h3 className="mb-6 text-sm font-medium text-muted-foreground">
              Top Languages
            </h3>
            <div className="space-y-4">
              {githubStats.languages.map((lang) => (
                <div key={lang.name}>
                  <div className="mb-1.5 flex justify-between text-sm">
                    <span>{lang.name}</span>
                    <span className="text-muted-foreground">{lang.percentage}%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-border">
                    <div
                      className="h-full rounded-full bg-accent transition-all duration-1000"
                      style={{ width: `${lang.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </SpotlightCard>
        </Reveal>
      </div>
    </section>
  );
}
