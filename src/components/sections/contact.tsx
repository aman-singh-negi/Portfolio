"use client";

import { siteConfig } from "@/lib/data";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { Mail, Github, Linkedin, Globe, Phone, ArrowUpRight } from "lucide-react";

const socialLinks = [
  { icon: Mail, label: "Email", href: `mailto:${siteConfig.email}` },
  { icon: Phone, label: "Phone", href: `tel:${siteConfig.phone.replace(/\s/g, "")}` },
  { icon: Github, label: "GitHub", href: siteConfig.links.github },
  { icon: Linkedin, label: "LinkedIn", href: siteConfig.links.linkedin },
  { icon: Globe, label: "Website", href: siteConfig.links.website },
];

export function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="mx-auto max-w-7xl text-center">
        <Reveal>
          <SectionHeader
            label="Contact"
            title="Let's build something meaningful."
            description="Have a project in mind or just want to say hello? I'd love to hear from you."
            align="center"
          />
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-12">
            <MagneticButton
              as="a"
              href={`mailto:${siteConfig.email}`}
              className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-accent px-10 text-base font-medium text-accent-foreground shadow-lg transition-all hover:brightness-110 hover:shadow-xl"
            >
              <Mail className="h-5 w-5" />
              Get in Touch
            </MagneticButton>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-16 flex flex-wrap items-center justify-center gap-4">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              const isExternal = link.label !== "Email" && link.label !== "Phone";
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm text-muted-foreground transition-all hover:border-accent/30 hover:bg-card hover:text-foreground hover:scale-[1.03]"
                >
                  <Icon className="h-4 w-4 transition-transform group-hover:rotate-12" />
                  {link.label}
                  {isExternal && (
                    <ArrowUpRight className="h-3 w-3 opacity-0 transition-all group-hover:opacity-100" />
                  )}
                </a>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
