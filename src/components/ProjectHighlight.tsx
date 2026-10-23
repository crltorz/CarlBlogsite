import Image from "next/image";
import Link from "next/link";
import { experienceCategories } from "@/data/internship";
import { FadeIn } from "@/components/FadeIn";

export function ProjectHighlight() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {experienceCategories.map((category, index) => (
        <FadeIn key={category.title} delayMs={index * 40}>
          <article className="group h-full overflow-hidden rounded-[var(--radius)] border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-accent/40">
            <div className="relative aspect-[16/11] overflow-hidden">
              <Image
                src={category.image}
                alt={category.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="p-5">
              <h3 className="font-heading text-xl text-foreground">
                {category.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-secondary">
                {category.description}
              </p>
            </div>
          </article>
        </FadeIn>
      ))}
      <FadeIn delayMs={experienceCategories.length * 40}>
        <div className="flex h-full min-h-[240px] flex-col justify-between rounded-[var(--radius)] border border-dashed border-border bg-[color-mix(in_srgb,var(--accent)_6%,var(--background))] p-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
              See more
            </p>
            <h3 className="mt-3 font-heading text-2xl text-foreground">
              Skills shaped by daily practice
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-secondary">
              Explore the full breakdown of assembly, diagnostics, printers,
              software, and deployment work.
            </p>
          </div>
          <Link
            href="/projects"
            className="mt-6 inline-flex text-sm font-medium text-foreground transition-colors hover:text-accent"
          >
            View Projects & Skills →
          </Link>
        </div>
      </FadeIn>
    </div>
  );
}
