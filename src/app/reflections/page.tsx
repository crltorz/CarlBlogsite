import type { Metadata } from "next";
import { FadeIn } from "@/components/FadeIn";
import { ReflectionSection } from "@/components/ReflectionSection";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Reflections",
  description:
    "Reflections from Carl R. Torion's internship — themes drawn from real builds, fixes, and team deployments.",
};

const personalNotes = [
  {
    label: "Personal voice — optional note",
    body: "[Personal reflection placeholder: add a short note in your own words about how the internship changed how you approach technical work. Keep it honest; leave blank if you prefer the report-based themes alone.]",
  },
  {
    label: "Personal voice — optional note",
    body: "[Personal reflection placeholder: if you want, describe one moment from the reports that still sticks with you — motherboard recovery, SSD detection delay, Los Amigos pickup, or another day — without inventing events that did not happen.]",
  },
];

export default function ReflectionsPage() {
  return (
    <>
      <section className="border-b border-border bg-[color-mix(in_srgb,var(--surface)_55%,var(--background))]">
        <div className="container-page py-14 sm:py-20">
          <FadeIn>
            <SectionHeading
              eyebrow="Reflections"
              title="More Than Just Technical Skills."
              description="These themes come from the work itself — diagnostics that took patience, deployments that required a team, and operations that sat beside every build."
            />
          </FadeIn>
        </div>
      </section>

      <section className="section-space border-b border-border">
        <div className="container-page">
          <ReflectionSection />
        </div>
      </section>

      <section className="section-space">
        <div className="container-page max-w-3xl">
          <FadeIn>
            <h2 className="font-heading text-2xl text-foreground">
              Personal notes
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-secondary">
              The blocks below are clearly marked placeholders for first-person
              voice you may want to write later. They are not claims from the
              OJT reports.
            </p>
          </FadeIn>
          <div className="mt-8 space-y-4">
            {personalNotes.map((note) => (
              <FadeIn key={note.body}>
                <aside className="rounded-[var(--radius)] border border-dashed border-highlight/50 bg-[color-mix(in_srgb,var(--highlight)_8%,var(--background))] p-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-highlight">
                    {note.label}
                  </p>
                  <p className="mt-3 text-sm italic leading-relaxed text-secondary">
                    {note.body}
                  </p>
                </aside>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
