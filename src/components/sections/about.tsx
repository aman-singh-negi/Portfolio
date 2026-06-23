"use client";

import { aboutContent } from "@/lib/data";
import { Reveal } from "@/components/ui/reveal";

export function About() {
  return (
    <section id="about" className="section-padding">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
          <Reveal>
            <blockquote className="font-heading text-3xl font-medium leading-snug tracking-tight md:text-4xl lg:text-5xl">
              &ldquo;{aboutContent.quote}&rdquo;
            </blockquote>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              {aboutContent.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
