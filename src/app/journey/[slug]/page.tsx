import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JournalArticle } from "@/components/JournalArticle";
import { getAdjacentWeeks, weeks } from "@/data/weeks";

export async function generateStaticParams() {
  return weeks.map((week) => ({ slug: week.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/journey/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const week = weeks.find((entry) => entry.slug === slug);
  if (!week) {
    return { title: "Week not found" };
  }
  return {
    title: `Week ${week.weekNumber}: ${week.title}`,
    description: week.summary,
  };
}

export default async function JourneyWeekPage({
  params,
}: PageProps<"/journey/[slug]">) {
  const { slug } = await params;
  const { current, prev, next } = getAdjacentWeeks(slug);

  if (!current) {
    notFound();
  }

  return <JournalArticle week={current} prev={prev} next={next} />;
}
