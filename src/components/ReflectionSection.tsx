import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";

const themes = [
  {
    title: "Patience under pressure",
    body: "An undetected SSD delayed an OS install for about two hours. Staying methodical mattered more than rushing the next attempt.",
  },
  {
    title: "Team over solo credit",
    body: "The 40-PC deployment finished because the team completed assembly together. Individual quotas were real; claiming the whole project alone would not be.",
  },
  {
    title: "Explain the fix",
    body: "Diagnosing malware, poor SSD health, or a damaged HDD only helps if the customer understands what failed and what comes next.",
  },
  {
    title: "Ops is part of the craft",
    body: "Invoices, Active One receipts, RMA updates, packing checks, and branch pickups were as much of the internship as turning screws.",
  },
];

type ReflectionSectionProps = {
  compact?: boolean;
};

export function ReflectionSection({ compact = false }: ReflectionSectionProps) {
  const list = compact ? themes.slice(0, 3) : themes;

  return (
    <div>
      <div className="grid gap-5 md:grid-cols-2">
        {list.map((theme, index) => (
          <FadeIn key={theme.title} delayMs={index * 40}>
            <article className="h-full rounded-[var(--radius)] border border-border bg-surface p-6">
              <h3 className="font-heading text-xl text-foreground">
                {theme.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-secondary">
                {theme.body}
              </p>
            </article>
          </FadeIn>
        ))}
      </div>

      {compact ? (
        <div className="mt-8">
          <Link
            href="/reflections"
            className="text-sm font-medium text-foreground transition-colors hover:text-accent"
          >
            Read full reflections →
          </Link>
        </div>
      ) : (
        <FadeIn>
          <div className="mt-12 rounded-[var(--radius)] border border-border bg-[color-mix(in_srgb,var(--highlight)_10%,var(--background))] px-6 py-10 text-center sm:px-10">
            <p className="font-display text-3xl text-foreground sm:text-4xl">
              The Journey Doesn&apos;t End Here.
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-secondary sm:text-base">
              Remaining hours hit zero on August 1, 2026 — but the habits from
              every build, delivery, and diagnosis continue into the next chapter
              of practice.
            </p>
          </div>
        </FadeIn>
      )}
    </div>
  );
}
