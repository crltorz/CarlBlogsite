import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { Hero } from "@/components/Hero";
import { PhotoGallery } from "@/components/PhotoGallery";
import { ProjectHighlight } from "@/components/ProjectHighlight";
import { ReflectionSection } from "@/components/ReflectionSection";
import { SectionHeading } from "@/components/SectionHeading";
import { WeeklyJournalCard } from "@/components/WeeklyJournalCard";
import { homeHighlights, siteConfig } from "@/data/internship";
import { weeks } from "@/data/weeks";

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="section-space border-b border-border">
        <div className="container-page">
          <FadeIn>
            <SectionHeading
              eyebrow="The Internship"
              title="Seven weeks of learning by doing."
              description={`${siteConfig.owner} trained at ${siteConfig.company} as a student intern from ${siteConfig.university}, documenting technical and computer services work from the first familiarization day through remaining hours at zero.`}
            />
          </FadeIn>
          <div className="grid gap-4 sm:grid-cols-3">
            {homeHighlights.map((item, index) => (
              <FadeIn key={item.label} delayMs={index * 60}>
                <div className="rounded-[var(--radius)] border border-border bg-surface px-5 py-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">
                    {item.label}
                  </p>
                  <p className="mt-3 font-heading text-2xl text-foreground">
                    {item.value}
                  </p>
                  <p className="mt-2 text-sm text-secondary">{item.detail}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space border-b border-border">
        <div className="container-page">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="My Journey"
              title="Week by week in the workshop."
              description="Each entry follows the weekly accomplishment reports — activities, challenges, and lessons without invented drama."
            />
            <Link
              href="/journey"
              className="inline-flex shrink-0 items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-accent"
            >
              Full timeline
              <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {weeks.slice(0, 4).map((week) => (
              <FadeIn key={week.id}>
                <WeeklyJournalCard week={week} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space border-b border-border">
        <div className="container-page">
          <SectionHeading
            eyebrow="Projects & Skills"
            title="Experience built through practice."
            description="Assembly, diagnostics, printers, software, customer support, and deployments — the work that filled the log."
          />
          <ProjectHighlight />
        </div>
      </section>

      <section className="section-space border-b border-border">
        <div className="container-page">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Photo Journal"
              title="Behind every build."
              description="Sixty-six photos from the internship floor, field deliveries, and workshop days."
            />
            <Link
              href="/photos"
              className="inline-flex shrink-0 items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-accent"
            >
              Open gallery
              <ArrowRight size={16} />
            </Link>
          </div>
          <PhotoGallery showFilters={false} limit={9} />
        </div>
      </section>

      <section className="section-space">
        <div className="container-page">
          <div className="mb-10 grid items-center gap-8 lg:grid-cols-[1fr_0.9fr]">
            <SectionHeading
              eyebrow="Reflections"
              title="More than just technical skills."
              description="Themes drawn from real days on the job — patience, teamwork, clear explanations, and the operations behind every fix."
            />
            <div className="relative aspect-[5/4] overflow-hidden rounded-[var(--radius)] border border-border">
              <Image
                src="/images/internship/2026-07-15_forty-pc-complete-day24.jpg"
                alt="Completed deployment units ready after team assembly"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </div>
          <ReflectionSection compact />
        </div>
      </section>
    </>
  );
}
