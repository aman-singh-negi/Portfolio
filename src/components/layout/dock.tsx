"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  Trophy,
  Mail,
  Home,
  Github,
  Award,
} from "lucide-react";
import { cn } from "@/lib/utils";

const dockItems = [
  { icon: Home, href: "#hero", label: "Home" },
  { icon: Briefcase, href: "#projects", label: "Work" },
  { icon: Trophy, href: "#achievements", label: "Achievements" },
  { icon: Award, href: "#certificates", label: "Certificates" },
  { icon: Github, href: "#github", label: "GitHub" },
  { icon: Mail, href: "#contact", label: "Contact" },
];

export function Dock() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleClick = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="fixed bottom-6 left-1/2 z-50 hidden -translate-x-1/2 lg:block"
    >
      <div className="flex items-end gap-1 rounded-2xl border border-border bg-card/80 px-3 py-2 backdrop-blur-xl shadow-2xl">
        {dockItems.map((item, index) => {
          const Icon = item.icon;
          const isHovered = hoveredIndex === index;
          const distance =
            hoveredIndex !== null ? Math.abs(hoveredIndex - index) : 999;
          const scale =
            isHovered ? 1.4 : distance === 1 ? 1.2 : distance === 2 ? 1.1 : 1;

          return (
            <button
              key={item.label}
              onClick={() => handleClick(item.href)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative flex flex-col items-center"
              aria-label={item.label}
            >
              <motion.div
                animate={{ scale, y: isHovered ? -8 : 0 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className={cn(
                  "flex h-10 w-10 items-center justify-center rounded-xl transition-colors",
                  isHovered
                    ? "bg-accent/10 text-accent"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <Icon className="h-5 w-5" />
              </motion.div>
              {isHovered && (
                <motion.span
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute -top-8 whitespace-nowrap rounded-md bg-foreground px-2 py-1 text-[10px] text-background"
                >
                  {item.label}
                </motion.span>
              )}
            </button>
          );
        })}
      </div>
    </motion.div>
  );
}
