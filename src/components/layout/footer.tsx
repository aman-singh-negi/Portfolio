import { siteConfig } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-12 md:px-12 lg:px-24">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-sm text-muted-foreground">
          Designed and developed by{" "}
          <span className="text-foreground">{siteConfig.name}</span>
        </p>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} · Crafted with intention
        </p>
      </div>
    </footer>
  );
}
