"use client";

import { useState, useEffect, useCallback } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { Moon, Sun, Command, Menu, X } from "lucide-react";
import { navLinks } from "@/lib/data";
import { cn } from "@/lib/utils";
import { useActiveSection } from "@/hooks/use-interactions";

interface NavbarProps {
  introReady?: boolean;
  onOpenCommand: () => void;
  onLogoDoubleClick: () => void;
}

export function Navbar({ introReady = false, onOpenCommand, onLogoDoubleClick }: NavbarProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useActiveSection(
    navLinks.map((l) => l.href.replace("#", ""))
  );

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleNavClick = useCallback((href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={introReady ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
      transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-border/80 bg-background/75 backdrop-blur-2xl shadow-[0_1px_0_0_rgba(255,255,255,0.03)]"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-12">
        <button
          onDoubleClick={onLogoDoubleClick}
          className="group flex h-9 w-9 items-center justify-center rounded-xl border border-border/60 bg-card/40 font-heading text-sm font-semibold tracking-tight backdrop-blur-sm transition-all hover:border-accent/30 hover:bg-card/80"
          aria-label="Logo — double click for easter egg"
        >
          <span className="transition-transform group-hover:scale-105">AN</span>
        </button>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = activeSection === id;
            return (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={cn(
                  "animated-underline relative px-4 py-2 text-sm transition-colors",
                  isActive
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {link.label}
                {isActive && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-px left-4 right-4 h-px bg-accent"
                  />
                )}
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onOpenCommand}
            className="hidden items-center gap-2 rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground transition-all hover:bg-card hover:text-foreground sm:flex"
          >
            <Command className="h-3 w-3" />
            <span>Search</span>
            <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 text-[10px]">
              ⌘K
            </kbd>
          </button>

          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border transition-all hover:bg-card hover:scale-105"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </button>
          )}

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border md:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="border-b border-border bg-background/95 backdrop-blur-xl md:hidden"
        >
          <div className="flex flex-col gap-1 px-6 py-4">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="rounded-lg px-4 py-3 text-left text-sm text-muted-foreground transition-colors hover:bg-card hover:text-foreground"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => {
                setMobileOpen(false);
                onOpenCommand();
              }}
              className="rounded-lg px-4 py-3 text-left text-sm text-muted-foreground transition-colors hover:bg-card hover:text-foreground"
            >
              Command Menu
            </button>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
