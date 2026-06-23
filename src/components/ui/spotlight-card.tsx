"use client";

import { useSpotlight } from "@/hooks/use-interactions";
import { cn } from "@/lib/utils";

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
}

export function SpotlightCard({ children, className }: SpotlightCardProps) {
  const { handleMouseMove } = useSpotlight<HTMLDivElement>();

  return (
    <div
      onMouseMove={handleMouseMove}
      className={cn(
        "spotlight-card rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg",
        className
      )}
    >
      {children}
    </div>
  );
}
