import Link from "next/link";
import { siteConfig } from "@/data/internship";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-[color-mix(in_srgb,var(--surface)_70%,var(--background))]">
      <div className="container-page grid gap-10 py-14 md:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="font-heading text-2xl text-foreground">{siteConfig.name}</p>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-secondary">
            A personal internship journal by {siteConfig.owner} at{" "}
            {siteConfig.company}. Documented from weekly accomplishment reports
            — {siteConfig.startLabel} to {siteConfig.endLabel}.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6 text-sm">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-accent">
              Explore
            </p>
            <ul className="space-y-2 text-secondary">
              {siteConfig.nav.slice(0, 3).map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-accent">
              More
            </p>
            <ul className="space-y-2 text-secondary">
              {siteConfig.nav.slice(3).map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-page flex flex-col gap-2 py-5 text-xs text-secondary sm:flex-row sm:items-center sm:justify-between">
          <p>
            © 2026 {siteConfig.owner}. {siteConfig.name}.
          </p>
          <p>{siteConfig.university}</p>
        </div>
      </div>
    </footer>
  );
}
