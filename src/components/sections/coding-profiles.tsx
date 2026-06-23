"use client";

import { codingProfiles } from "@/lib/data";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/ui/reveal";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { ExternalLink } from "lucide-react";

export function CodingProfiles() {
  return (
    <section id="profiles" className="section-padding">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <h2 className="section-heading">Coding Profiles</h2>
          <p className="section-subheading">
            Competitive programming stats across major platforms.
          </p>
        </Reveal>

        <StaggerContainer className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-2 lg:max-w-3xl lg:mx-auto">
          {codingProfiles.map((profile) => (
            <StaggerItem key={profile.platform}>
              <a href={profile.link} target="_blank" rel="noopener noreferrer">
                <SpotlightCard className="group h-full transition-all hover:-translate-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-heading text-lg font-semibold">
                      {profile.platform}
                    </h3>
                    <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 transition-all group-hover:opacity-100 group-hover:rotate-12" />
                  </div>

                  <div
                    className="mt-4 inline-flex rounded-full px-3 py-1 text-xs font-medium"
                    style={{
                      backgroundColor: `${profile.color}15`,
                      color: profile.color,
                    }}
                  >
                    {profile.badge}
                  </div>

                  <div className="mt-6 space-y-3">
                    <div>
                      <p className="text-xs text-muted-foreground">Rating</p>
                      <p className="font-heading text-xl font-semibold">
                        {profile.rating}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Solved</p>
                      <p className="text-sm font-medium">{profile.solved}</p>
                    </div>
                  </div>
                </SpotlightCard>
              </a>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
