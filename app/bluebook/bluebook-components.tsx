import Link from "next/link";
import { type ReactNode } from "react";
import { ThemeToggle } from "../theme-toggle";
import { assetPath } from "../site-paths";
import { getSectionById, playbookChapters, playbookSections } from "../playbook-data";
import { SourceBlockView } from "./source-block";
type PlaybookShellProps = { activeId: string; children: ReactNode };

function sectionNumber(title: string, fallback: number) {
  const match = title.match(/^(\d+\.\d+|Scenario\s+\d+)/);
  return match ? match[1] : String(fallback).padStart(2, "0");
}

function sectionLabel(title: string) {
  return title.replace(/^(\d+\.\d+|Scenario\s+\d+)\s*[:·]?\s*/, "");
}

function PagerLink({ id, label }: { id: string | null; label: string }) {
  if (!id) {
    return null;
  }

  const section = getSectionById(id);

  return (
    <Link className="pager-link" href={`/bluebook/${id}`}>
      <small>{label}</small>
      <span>{section?.title ?? id}</span>
    </Link>
  );
}

export function PlaybookShell({ activeId, children }: PlaybookShellProps) {
  return (
    <main className="book-page">
      <header className="book-topbar">
        <Link className="wordmark" href="/">
          <img src={assetPath("/brand/basil-wordmark.png")} alt="BasilAOS Work" />
        </Link>
        <span className="book-site">AOS Work Playbook</span>
        <div className="nav-spacer" />
        <ThemeToggle />
      </header>

      <div className="book-shell">
        <aside className="book-side" aria-label="Playbook sections">
          <div className="guide-brand">
            <span className="guide-icon-frame" aria-hidden="true">
              <svg viewBox="0 0 40 40" fill="none">
                <rect
                  x="9"
                  y="10"
                  width="22"
                  height="17"
                  rx="2.8"
                  stroke="currentColor"
                />
                <path d="M16 32H24" stroke="currentColor" />
              </svg>
            </span>
            <strong>AOS Work Playbook</strong>
          </div>

          {playbookChapters.map((chapter) => (
            <nav className="side-group" key={chapter.id}>
              <p className="side-part">{chapter.title}</p>
              {chapter.sections.map((section, sectionIndex) => (
                <Link
                  className={activeId === section.id ? "is-active" : ""}
                  href={`/bluebook/${section.id}`}
                  key={section.id}
                >
                  <small>{sectionNumber(section.title, sectionIndex + 1)}</small>
                  {sectionLabel(section.title)}
                </Link>
              ))}
            </nav>
          ))}
        </aside>

        <article className="book-main">{children}</article>

        <aside className="book-toc" aria-label="Section contents">
          <p className="side-part">Contents</p>
          <a href="#top">Top</a>
          <a href="#content">Content</a>
          <a href="#pager">Continue Reading</a>
        </aside>
      </div>
    </main>
  );
}

export function SectionArticle({
  section,
}: {
  section: (typeof playbookSections)[number];
}) {
  return (
    <>
      <section className="section-head" id="top">
        <p className="mono-kicker">{section.chapterTitle}</p>
        <h1>{section.title}</h1>
      </section>

      <section className="section-content" id="content">
        {section.blocks.map((block, index) => (
          <SourceBlockView block={block} index={index} key={`${block.type}-${index}`} />
        ))}
      </section>

      <nav className="section-pager" id="pager" aria-label="Section navigation">
        <PagerLink id={section.prev} label="Previous" />
        <PagerLink id={section.next} label="Next" />
      </nav>
    </>
  );
}

