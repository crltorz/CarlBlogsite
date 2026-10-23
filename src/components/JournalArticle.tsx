import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { WeekEntry } from "@/data/weeks";

type JournalArticleProps = {
  week: WeekEntry;
  prev: WeekEntry | null;
  next: WeekEntry | null;
};

export function JournalArticle({ week, prev, next }: JournalArticleProps) {
  return (
    <article>
      <div className="border-b border-border bg-[color-mix(in_srgb,var(--surface)_55%,var(--background))]">
        <div className="container-page py-12 sm:py-16">
          <Link
            href="/journey"
            className="inline-flex items-center gap-2 text-sm text-secondary transition-colors hover:text-accent"
          >
            <ArrowLeft size={16} />
            Back to Journey
          </Link>
          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            Week {week.weekNumber} · {week.dateLabel}
          </p>
          <h1 className="mt-4 max-w-3xl font-heading text-4xl text-foreground sm:text-5xl text-balance">
            {week.title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-secondary">
            {week.summary}
          </p>
        </div>
      </div>

      <div className="container-page py-10 sm:py-14">
        <div className="relative mb-12 aspect-[21/9] overflow-hidden rounded-[var(--radius)] border border-border">
          <Image
            src={week.coverImage}
            alt={week.title}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 72rem"
          />
        </div>

        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_18rem]">
          <div className="prose-blog max-w-3xl">
            {week.story.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </div>

          <aside className="space-y-8 lg:sticky lg:top-24 lg:self-start">
            <MetaList title="Activities" items={week.activities} />
            <MetaList title="Technical Skills" items={week.technicalSkills} />
            <MetaList title="Challenges" items={week.challenges} />
            <MetaList title="Lessons" items={week.lessons} />
          </aside>
        </div>

        {week.galleryImages.length > 0 ? (
          <section className="mt-16">
            <h2 className="font-heading text-2xl text-foreground">
              Week in Photos
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {week.galleryImages.map((src) => (
                <div
                  key={src}
                  className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-sm)] border border-border"
                >
                  <Image
                    src={src}
                    alt={`Documentation photo from week ${week.weekNumber}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              ))}
            </div>
          </section>
        ) : null}

        <nav
          className="mt-16 grid gap-4 border-t border-border pt-10 sm:grid-cols-2"
          aria-label="Week navigation"
        >
          {prev ? (
            <Link
              href={`/journey/${prev.slug}`}
              className="group rounded-[var(--radius)] border border-border bg-surface p-5 transition-colors hover:border-accent"
            >
              <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-secondary">
                <ArrowLeft size={14} /> Previous
              </p>
              <p className="mt-2 font-heading text-lg text-foreground group-hover:text-accent">
                {prev.title}
              </p>
            </Link>
          ) : (
            <div />
          )}
          {next ? (
            <Link
              href={`/journey/${next.slug}`}
              className="group rounded-[var(--radius)] border border-border bg-surface p-5 text-right transition-colors hover:border-accent sm:justify-self-end sm:text-right"
            >
              <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-secondary sm:justify-end">
                Next <ArrowRight size={14} />
              </p>
              <p className="mt-2 font-heading text-lg text-foreground group-hover:text-accent">
                {next.title}
              </p>
            </Link>
          ) : null}
        </nav>
      </div>
    </article>
  );
}

function MetaList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
        {title}
      </h2>
      <ul className="mt-3 space-y-2">
        {items.map((item) => (
          <li
            key={item}
            className="border-l-2 border-[color-mix(in_srgb,var(--accent)_45%,transparent)] pl-3 text-sm leading-relaxed text-secondary"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
