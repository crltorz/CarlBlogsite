import type { Metadata } from "next";
import { FadeIn } from "@/components/FadeIn";
import { SectionHeading } from "@/components/SectionHeading";
import { SkillsGrid } from "@/components/SkillsGrid";

export const metadata: Metadata = {
  title: "Projects & Skills",
  description:
    "Skills and practice areas from Carl R. Torion's internship — assembly, diagnostics, OS work, printers, and deployments.",
};

export default function ProjectsPage() {
  return (
    <>
      <section className="border-b border-border bg-[color-mix(in_srgb,var(--surface)_55%,var(--background))]">
        <div className="container-page py-14 sm:py-20">
          <FadeIn>
            <SectionHeading
              eyebrow="Projects & Skills"
              title="Experience Built Through Practice."
              description="These sections group the real work logged during the internship — not a résumé rewrite, but the activities that filled each week."
            />
          </FadeIn>
        </div>
      </section>

      <section className="section-space">
        <div className="container-page">
          <SkillsGrid />
        </div>
      </section>
    </>
  );
}
