import type { Metadata } from "next";
import { FadeIn } from "@/components/FadeIn";
import { PhotoGallery } from "@/components/PhotoGallery";
import { SectionHeading } from "@/components/SectionHeading";
import { galleryItems } from "@/data/gallery";

export const metadata: Metadata = {
  title: "Photo Journal",
  description:
    "Behind every build — internship photos from Carl R. Torion's OJT at Miles Computer Ventures.",
};

export default function PhotosPage() {
  return (
    <>
      <section className="border-b border-border bg-[color-mix(in_srgb,var(--surface)_55%,var(--background))]">
        <div className="container-page py-14 sm:py-20">
          <FadeIn>
            <SectionHeading
              eyebrow="Photo Journal"
              title="Behind Every Build."
              description={`${galleryItems.length} photos from workshop days, customer setups, troubleshooting benches, and field deployments. Filter by category or open any image in the lightbox.`}
            />
          </FadeIn>
        </div>
      </section>

      <section className="section-space">
        <div className="container-page">
          <PhotoGallery />
        </div>
      </section>
    </>
  );
}
