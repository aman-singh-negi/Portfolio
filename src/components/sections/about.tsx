"use client";

import { aboutContent } from "@/lib/data";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";

export function About() {
  return (
    <section id="about" className="section-padding">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeader
            label="About"
            title="Professional Summary"
            description={aboutContent.summary}
          />
        </Reveal>

        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-24">
          <Reveal>
            <blockquote className="font-heading text-3xl font-medium leading-snug tracking-tight md:text-4xl lg:text-[42px]">
              &ldquo;{aboutContent.quote}&rdquo;
            </blockquote>
            <p className="mt-8 text-sm text-muted-foreground leading-relaxed">
              Proficient in{" "}
              <span className="text-foreground">Python, C++, React.js, JavaScript, and SQL</span>
              . Focused on scalable applications, complex problem-solving, and agile collaboration.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="space-y-4">
              <p className="text-xs font-medium uppercase tracking-[0.15em] text-accent">
                Education
              </p>
              {aboutContent.education.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-border bg-card/50 p-5 backdrop-blur-sm transition-all hover:border-accent/20 hover:shadow-lg"
                >
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <h3 className="font-heading text-base font-semibold">{item.title}</h3>
                    <span className="text-xs text-muted-foreground">{item.period}</span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">{item.institution}</p>
                  <p className="mt-2 text-sm font-medium text-foreground">{item.detail}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{item.note}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
