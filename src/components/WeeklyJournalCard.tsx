import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { WeekEntry } from "@/data/weeks";

type WeeklyJournalCardProps = {
  week: WeekEntry;
};

export function WeeklyJournalCard({ week }: WeeklyJournalCardProps) {
  return (
    <article className="group overflow-hidden rounded-[var(--radius)] border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[var(--shadow-soft)]">
      <Link href={`/journey/${week.slug}`} className="block">
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={week.coverImage}
            alt={week.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className="p-5 sm:p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
            Week {week.weekNumber} · {week.dateLabel}
          </p>
          <h3 className="mt-3 flex items-start justify-between gap-3 font-heading text-xl text-foreground sm:text-2xl">
            <span>{week.title}</span>
            <ArrowUpRight
              size={18}
              className="mt-1 shrink-0 text-secondary transition-colors group-hover:text-accent"
            />
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-secondary">
            {week.summary}
          </p>
        </div>
      </Link>
    </article>
  );
}
