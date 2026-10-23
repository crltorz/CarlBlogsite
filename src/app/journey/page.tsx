import type { Metadata } from "next";
import { FadeIn } from "@/components/FadeIn";
import { SectionHeading } from "@/components/SectionHeading";
import { Timeline } from "@/components/Timeline";
import { WeeklyJournalCard } from "@/components/WeeklyJournalCard";
import { weeks } from "@/data/weeks";

export const metadata: Metadata = {
  title: "My Journey",
  description:
    "Seven weekly internship entries from Carl R. Torion's OJT at Miles Computer Ventures.",
};

export default function JourneyPage() {
  return (
    <>
      <section className="border-b border-border bg-[color-mix(in_srgb,var(--surface)_55%,var(--background))]">
        <div className="container-page py-14 sm:py-20">
          <FadeIn>
            <SectionHeading
              eyebrow="My Journey"
              title="Seven weeks. One build log."
              description="Follow the internship from first-day familiarization through remaining hours at zero — each week grounded in the accomplishment reports."
            />
          </FadeIn>
        </div>
      </section>

      <section className="section-space border-b border-border">
        <div className="container-page">
          <h2 className="mb-8 font-heading text-2xl text-foreground">
            Timeline
          </h2>
          <Timeline />
        </div>
      </section>

      <section className="section-space">
        <div className="container-page">
          <h2 className="mb-8 font-heading text-2xl text-foreground">
            Weekly Journal
          </h2>
          <div className="grid gap-6 lg:grid-cols-2">
            {weeks.map((week) => (
              <FadeIn key={week.id}>
                <WeeklyJournalCard week={week} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
