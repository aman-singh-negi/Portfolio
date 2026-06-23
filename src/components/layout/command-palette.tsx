"use client";

import { useEffect, useState, useCallback } from "react";
import { Command } from "cmdk";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Briefcase,
  Trophy,
  Award,
  Mail,
  Github,
  Linkedin,
  ExternalLink,
} from "lucide-react";
import { commandItems, siteConfig } from "@/lib/data";

interface CommandPaletteProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const iconMap: Record<string, React.ReactNode> = {
  Projects: <Briefcase className="h-4 w-4" />,
  Achievements: <Trophy className="h-4 w-4" />,
  Certificates: <Award className="h-4 w-4" />,
  Contact: <Mail className="h-4 w-4" />,
  GitHub: <Github className="h-4 w-4" />,
  LinkedIn: <Linkedin className="h-4 w-4" />,
  CodeChef: <Trophy className="h-4 w-4" />,
};

export function CommandPalette({ open, onOpenChange }: CommandPaletteProps) {
  const [search, setSearch] = useState("");

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        onOpenChange(!open);
      }
      if (e.key === "Escape") onOpenChange(false);
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [open, onOpenChange]);

  const handleSelect = useCallback(
    (href: string, external?: boolean) => {
      onOpenChange(false);
      setSearch("");
      if (external) {
        window.open(href, "_blank");
      } else {
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      }
    },
    [onOpenChange]
  );

  const groups = [...new Set(commandItems.map((item) => item.group))];

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => onOpenChange(false)}
            className="fixed inset-0 z-[80] bg-background/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -20 }}
            transition={{ duration: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="fixed left-1/2 top-[20%] z-[90] w-[90vw] max-w-lg -translate-x-1/2"
          >
            <Command
              className="overflow-hidden rounded-2xl border border-border bg-card shadow-2xl"
              shouldFilter={true}
            >
              <div className="flex items-center gap-3 border-b border-border px-4">
                <Search className="h-4 w-4 text-muted-foreground" />
                <Command.Input
                  value={search}
                  onValueChange={setSearch}
                  placeholder="Search navigation..."
                  className="flex h-12 w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                />
              </div>
              <Command.List className="max-h-72 overflow-y-auto p-2">
                <Command.Empty className="py-6 text-center text-sm text-muted-foreground">
                  No results found.
                </Command.Empty>
                {groups.map((group) => (
                  <Command.Group
                    key={group}
                    heading={group}
                    className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground"
                  >
                    {commandItems
                      .filter((item) => item.group === group)
                      .map((item) => (
                        <Command.Item
                          key={item.label}
                          value={item.label}
                          onSelect={() =>
                            handleSelect(item.href, item.external)
                          }
                          className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors aria-selected:bg-accent/10 aria-selected:text-accent"
                        >
                          {iconMap[item.label]}
                          <span className="flex-1">{item.label}</span>
                          {item.external && (
                            <ExternalLink className="h-3 w-3 text-muted-foreground" />
                          )}
                        </Command.Item>
                      ))}
                  </Command.Group>
                ))}
              </Command.List>
              <div className="border-t border-border px-4 py-2 text-xs text-muted-foreground">
                Navigate with ↑↓ · Select with ↵ · Close with Esc
              </div>
            </Command>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export function TerminalModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[80] bg-background/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed left-1/2 top-1/2 z-[90] w-[90vw] max-w-md -translate-x-1/2 -translate-y-1/2"
          >
            <div className="overflow-hidden rounded-2xl border border-border bg-[#1a1a1a] shadow-2xl">
              <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                <div className="h-3 w-3 rounded-full bg-red-500" />
                <div className="h-3 w-3 rounded-full bg-yellow-500" />
                <div className="h-3 w-3 rounded-full bg-green-500" />
                <span className="ml-2 text-xs text-white/50">terminal</span>
              </div>
              <div className="space-y-2 p-6 font-mono text-sm">
                <p className="text-green-400">$ sudo hire aman</p>
                <p className="text-white/70">Processing request...</p>
                <p className="text-accent">✓ Access granted</p>
                <p className="text-white">Thank you for visiting :)</p>
                <p className="text-white/50">
                  Contact: {siteConfig.email}
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
