"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { certificates } from "@/lib/data";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

const categories = ["All", ...new Set(certificates.map((c) => c.category))];

export function Certificates() {
  const [activeCategory, setActiveCategory] = useState("All");
  const scrollRef = useRef<HTMLDivElement>(null);

  const filtered =
    activeCategory === "All"
      ? certificates
      : certificates.filter((c) => c.category === activeCategory);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = direction === "left" ? -400 : 400;
    scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section id="certificates" className="section-padding overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeader
            label="Credentials"
            title="Certificates"
            description="Continuous learning across machine learning, cloud, and generative AI."
          />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-8 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-accent text-accent-foreground"
                    : "border border-border text-muted-foreground hover:bg-card hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="relative mt-12">
          <button
            onClick={() => scroll("left")}
            className="absolute -left-4 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card/80 backdrop-blur-sm transition-all hover:scale-105 md:flex"
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute -right-4 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card/80 backdrop-blur-sm transition-all hover:scale-105 md:flex"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-4 w-4" />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: "none" }}
          >
            {filtered.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="shine group w-[320px] flex-shrink-0 snap-start"
              >
                <div className="overflow-hidden rounded-2xl border border-border bg-card transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="320px"
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-xs font-medium text-accent">{cert.issuer}</p>
                    <h3 className="mt-1 font-heading text-base font-semibold">{cert.title}</h3>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">{cert.date}</span>
                      <Button variant="ghost" size="sm" className="h-8 gap-1 text-xs" asChild>
                        <a href={cert.link} target="_blank" rel="noopener noreferrer">
                          View
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
