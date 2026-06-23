import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  label,
  title,
  description,
  className,
  align = "left",
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        align === "center" && "text-center mx-auto",
        className
      )}
    >
      <div
        className={cn(
          "mb-5 inline-flex items-center gap-3",
          align === "center" && "justify-center"
        )}
      >
        <span className="h-px w-8 bg-accent/40" />
        <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-accent">
          {label}
        </span>
        <span className="h-px w-8 bg-accent/40" />
      </div>
      <h2 className="section-heading">{title}</h2>
      {description && (
        <p
          className={cn(
            "section-subheading",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
