import Link from "next/link";
import { weeks } from "@/data/weeks";
import { FadeIn } from "@/components/FadeIn";

export function Timeline() {
  return (
    <ol className="relative space-y-0 border-l border-border pl-8">
      {weeks.map((week, index) => (
        <FadeIn key={week.id} delayMs={index * 40}>
          <li className="relative pb-10 last:pb-0">
            <span className="absolute -left-[2.4rem] top-1.5 flex h-5 w-5 items-center justify-center rounded-full border border-accent bg-background">
              <span className="h-2 w-2 rounded-full bg-accent" />
            </span>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
              Week {week.weekNumber} · {week.dateLabel}
            </p>
            <Link
              href={`/journey/${week.slug}`}
              className="mt-2 block font-heading text-xl text-foreground transition-colors hover:text-accent sm:text-2xl"
            >
              {week.title}
            </Link>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-secondary sm:text-base">
              {week.summary}
            </p>
          </li>
        </FadeIn>
      ))}
    </ol>
  );
}
