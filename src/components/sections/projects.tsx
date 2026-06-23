"use client";

import Image from "next/image";
import { projects } from "@/lib/data";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

const statusStyles: Record<string, string> = {
  Completed: "bg-green-500/10 text-green-500",
  "SIH Final": "bg-accent/10 text-accent",
  Live: "bg-green-500/10 text-green-500",
  Beta: "bg-yellow-500/10 text-yellow-500",
};

export function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeader
            label="Work"
            title="Selected Work"
            description="AI/ML systems, full-stack platforms, and security tools built with measurable impact."
          />
        </Reveal>

        <div className="mt-16 space-y-24 md:space-y-32">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.1}>
              <div
                className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-16 ${
                  index % 2 !== 0 ? "lg:[direction:rtl]" : ""
                }`}
              >
                <div className="group relative overflow-hidden rounded-2xl border border-border lg:[direction:ltr]">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  </div>
                </div>

                <div className="lg:[direction:ltr]">
                  <div className="flex flex-wrap items-center gap-3">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-medium ${
                        statusStyles[project.status] ?? "bg-muted text-muted-foreground"
                      }`}
                    >
                      {project.status}
                    </span>
                    <span className="text-xs text-muted-foreground">{project.period}</span>
                  </div>

                  <h3 className="mt-4 font-heading text-2xl font-semibold md:text-3xl">
                    {project.title}
                  </h3>

                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 flex gap-3">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                        GitHub
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
