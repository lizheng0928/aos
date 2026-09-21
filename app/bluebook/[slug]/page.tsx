import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PlaybookShell, SectionArticle } from "../bluebook-components";
import { getSectionById, playbookSections } from "../../playbook-data";

type SectionPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return playbookSections.map((section) => ({
    slug: section.id,
  }));
}

export async function generateMetadata({
  params,
}: SectionPageProps): Promise<Metadata> {
  const { slug } = await params;
  const section = getSectionById(slug);

  return {
    title: section
      ? `${section.title} | AOS Work Playbook`
      : "AOS Work Playbook",
    description: "AOS Work Playbook section.",
  };
}

export default async function SectionPage({ params }: SectionPageProps) {
  const { slug } = await params;
  const section = getSectionById(slug);

  if (!section) {
    notFound();
  }

  return (
    <PlaybookShell activeId={section.id}>
      <SectionArticle section={section} />
    </PlaybookShell>
  );
}
