"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import {
  galleryCategories,
  galleryItems,
  type GalleryCategory,
  type GalleryItem,
} from "@/data/gallery";
import { PhotoLightbox } from "@/components/PhotoLightbox";

type PhotoGalleryProps = {
  items?: GalleryItem[];
  showFilters?: boolean;
  limit?: number;
};

export function PhotoGallery({
  items = galleryItems,
  showFilters = true,
  limit,
}: PhotoGalleryProps) {
  const [filter, setFilter] = useState<"All" | GalleryCategory>("All");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const filtered = useMemo(() => {
    const list =
      filter === "All" ? items : items.filter((item) => item.category === filter);
    return typeof limit === "number" ? list.slice(0, limit) : list;
  }, [items, filter, limit]);

  return (
    <div>
      {showFilters ? (
        <div className="mb-8 flex flex-wrap gap-2">
          {(["All", ...galleryCategories] as const).map((category) => {
            const selected = filter === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setFilter(category)}
                className={`rounded-[var(--radius-sm)] border px-3 py-2 text-sm transition-colors ${
                  selected
                    ? "border-accent bg-[color-mix(in_srgb,var(--accent)_14%,transparent)] text-foreground"
                    : "border-border text-secondary hover:border-accent/50 hover:text-foreground"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      ) : null}

      <div className="masonry-gallery">
        {filtered.map((item, index) => (
          <button
            key={item.id}
            type="button"
            className="group relative block w-full overflow-hidden rounded-[var(--radius-sm)] border border-border text-left transition-transform duration-300 hover:-translate-y-0.5"
            onClick={() => setActiveIndex(index)}
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={800}
              height={600}
              className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-[rgba(32,39,45,0.72)] to-transparent p-3 pt-10 text-xs text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              {item.category} · {item.date}
            </span>
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="text-sm text-secondary">No photos in this category yet.</p>
      ) : null}

      {activeIndex !== null ? (
        <PhotoLightbox
          items={filtered}
          index={activeIndex}
          onClose={() => setActiveIndex(null)}
          onPrev={() =>
            setActiveIndex((current) =>
              current === null
                ? null
                : (current - 1 + filtered.length) % filtered.length,
            )
          }
          onNext={() =>
            setActiveIndex((current) =>
              current === null ? null : (current + 1) % filtered.length,
            )
          }
        />
      ) : null}
    </div>
  );
}
