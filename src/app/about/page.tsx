import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import { SectionHeading } from "@/components/SectionHeading";
import { siteConfig } from "@/data/internship";

export const metadata: Metadata = {
  title: "About Me",
  description: `Meet Carl R. Torion — NEMSU student intern at Miles Computer Ventures.`,
};

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-border bg-[color-mix(in_srgb,var(--surface)_55%,var(--background))]">
        <div className="container-page py-14 sm:py-20">
          <FadeIn>
            <SectionHeading
              eyebrow="About Me"
              title="Meet Carl."
              description="A short introduction grounded in the internship record — no invented biography beyond what the reports support."
            />
          </FadeIn>
        </div>
      </section>

      <section className="section-space">
        <div className="container-page grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <FadeIn>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius)] border border-border">
              <Image
                src="/images/internship/2026-06-15_workplace-day1.jpg"
                alt="Carl at Miles Computer Ventures during the internship"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
              />
            </div>
          </FadeIn>

          <FadeIn delayMs={80}>
            <div className="max-w-2xl">
              <p className="font-display text-3xl text-foreground sm:text-4xl">
                {siteConfig.owner}
              </p>
              <p className="mt-3 text-sm font-semibold uppercase tracking-[0.14em] text-accent">
                {siteConfig.role}
              </p>

              <div className="prose-blog mt-8">
                <p>
                  I am a student at {siteConfig.university} (NEMSU). From{" "}
                  {siteConfig.startLabel} to {siteConfig.endLabel}, I completed
                  my on-the-job training at {siteConfig.company} as an intern
                  focused on technical and computer services activities.
                </p>
                <p>
                  This site — {siteConfig.name} — is my personal journal of that
                  internship. The weekly stories follow the accomplishment
                  reports: familiarization and sales support, PC assembly,
                  printer setup, diagnostics, on-site installs, deployments, and
                  the day-to-day operations that kept orders moving.
                </p>
                <p>
                  I logged the work as it happened — including team efforts like
                  the 40-PC deployment, field deliveries, warranty trips, and the
                  final stretch when remaining hours reached zero. What you read
                  here is meant to stay honest to that record.
                </p>
              </div>

              <dl className="mt-10 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[var(--radius-sm)] border border-border bg-surface p-4">
                  <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                    University
                  </dt>
                  <dd className="mt-2 text-sm text-foreground">
                    {siteConfig.university}
                  </dd>
                </div>
                <div className="rounded-[var(--radius-sm)] border border-border bg-surface p-4">
                  <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                    Host Company
                  </dt>
                  <dd className="mt-2 text-sm text-foreground">
                    {siteConfig.company}
                  </dd>
                </div>
                <div className="rounded-[var(--radius-sm)] border border-border bg-surface p-4">
                  <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                    Internship Window
                  </dt>
                  <dd className="mt-2 text-sm text-foreground">
                    {siteConfig.startLabel} – {siteConfig.endLabel}
                  </dd>
                </div>
                <div className="rounded-[var(--radius-sm)] border border-border bg-surface p-4">
                  <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                    Journal
                  </dt>
                  <dd className="mt-2 text-sm text-foreground">
                    <Link
                      href="/journey"
                      className="transition-colors hover:text-accent"
                    >
                      Read the weekly journey →
                    </Link>
                  </dd>
                </div>
              </dl>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
