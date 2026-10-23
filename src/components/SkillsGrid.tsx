import Image from "next/image";
import { skillSections } from "@/data/skills";
import { FadeIn } from "@/components/FadeIn";

export function SkillsGrid() {
  return (
    <div className="space-y-10">
      {skillSections.map((section, index) => (
        <FadeIn key={section.id} delayMs={index * 50}>
          <article
            className={`grid items-center gap-8 overflow-hidden rounded-[var(--radius)] border border-border bg-surface lg:grid-cols-2 ${
              index % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
            }`}
          >
            <div className="relative aspect-[5/4] min-h-[240px]">
              <Image
                src={section.image}
                alt={section.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="px-6 py-8 sm:px-8">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                Practice Area
              </p>
              <h3 className="mt-3 font-heading text-2xl text-foreground sm:text-3xl">
                {section.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-secondary sm:text-base">
                {section.description}
              </p>
              <ul className="mt-6 space-y-2">
                {section.activities.map((activity) => (
                  <li
                    key={activity}
                    className="flex gap-3 text-sm leading-relaxed text-secondary"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-highlight" />
                    <span>{activity}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </FadeIn>
      ))}
    </div>
  );
}
