"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect } from "react";
import type { GalleryItem } from "@/data/gallery";

type PhotoLightboxProps = {
  items: GalleryItem[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
};

export function PhotoLightbox({
  items,
  index,
  onClose,
  onPrev,
  onNext,
}: PhotoLightboxProps) {
  const item = items[index];

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") onPrev();
      if (event.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-[color-mix(in_srgb,var(--foreground)_72%,black)] p-4"
      role="dialog"
      aria-modal="true"
      aria-label={item.alt}
      onClick={onClose}
    >
      <button
        type="button"
        aria-label="Close"
        className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/30 text-white transition-colors hover:bg-black/50"
        onClick={onClose}
      >
        <X size={18} />
      </button>

      <button
        type="button"
        aria-label="Previous photo"
        className="absolute left-3 top-1/2 z-10 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/30 text-white transition-colors hover:bg-black/50 sm:left-6"
        onClick={(event) => {
          event.stopPropagation();
          onPrev();
        }}
      >
        <ChevronLeft size={20} />
      </button>

      <button
        type="button"
        aria-label="Next photo"
        className="absolute right-3 top-1/2 z-10 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/30 text-white transition-colors hover:bg-black/50 sm:right-6"
        onClick={(event) => {
          event.stopPropagation();
          onNext();
        }}
      >
        <ChevronRight size={20} />
      </button>

      <div
        className="relative w-full max-w-5xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius)] bg-black/40 sm:aspect-[16/10]">
          <Image
            src={item.src}
            alt={item.alt}
            fill
            className="object-contain"
            sizes="(max-width: 1024px) 100vw, 64rem"
            priority
          />
        </div>
        <div className="mt-4 flex flex-col gap-1 text-white sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-medium">{item.alt}</p>
            <p className="mt-1 text-xs text-white/70">
              {item.date} · {item.category}
            </p>
          </div>
          <p className="text-xs text-white/60">
            {index + 1} / {items.length}
          </p>
        </div>
      </div>
    </div>
  );
}
