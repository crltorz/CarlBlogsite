import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/data/internship";

type HeroProps = {
  coverImage?: string;
};

export function Hero({
  coverImage = "/images/internship/2026-06-19_pc-assembly-day3-b.jpg",
}: HeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0">
        <Image
          src={coverImage}
          alt="Desktop assembly work during the internship"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(245,244,240,0.97)_0%,rgba(245,244,240,0.9)_38%,rgba(245,244,240,0.55)_62%,rgba(32,39,45,0.28)_100%)]" />
      </div>

      <div className="container-page relative flex min-h-[82vh] items-end py-20 sm:items-center sm:py-28">
        <div className="max-w-2xl">
          <h1 className="font-heading text-5xl leading-[1.02] text-foreground sm:text-6xl lg:text-7xl">
            {siteConfig.name}
          </h1>
          <p className="mt-5 font-display text-2xl text-[color-mix(in_srgb,var(--foreground)_85%,var(--highlight))] sm:text-3xl">
            {siteConfig.tagline}
          </p>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-secondary sm:text-lg">
            A personal internship journal by {siteConfig.owner} at{" "}
            {siteConfig.company} — learning by building, fixing, and shipping
            systems week after week.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/journey"
              className="inline-flex items-center gap-2 rounded-[var(--radius-sm)] bg-foreground px-5 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              Read the Journey
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/photos"
              className="inline-flex items-center gap-2 rounded-[var(--radius-sm)] border border-border bg-[color-mix(in_srgb,var(--surface)_80%,transparent)] px-5 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              Photo Journal
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
