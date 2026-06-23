"use client";

import { useCountUp, useInView } from "@/hooks/use-interactions";
import { cn } from "@/lib/utils";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  className?: string;
}

export function AnimatedCounter({ value, suffix = "", className }: AnimatedCounterProps) {
  const { ref, inView } = useInView(0.3);
  const count = useCountUp(value, 2000, inView);

  return (
    <span ref={ref} className={cn(className)}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}
