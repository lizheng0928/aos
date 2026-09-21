import Link from "next/link";
import { playbookChapters, playbookTitle } from "./playbook-data";
import { assetPath } from "./site-paths";
import { ThemeToggle } from "./theme-toggle";

export default function HomePage() {
  return (
    <main className="book-page">
      <header className="book-topbar">
        <Link className="wordmark" href="/">
          <img src={assetPath("/brand/basil-wordmark.png")} alt="BasilAOS" />
        </Link>
        <span className="book-site">AOS Work Playbook</span>
        <div className="nav-spacer" />
        <ThemeToggle />
      </header>
      <div className="release-index">
        <header className="section-head">
          <h1 className="release-title">{playbookTitle}</h1>
        </header>
        {playbookChapters.map((chapter) => (
          <section className="release-chapter" key={chapter.id}>
            <h2>{chapter.title}</h2>
            <ul className="release-contents">
              {chapter.sections.map((section) => (
                <li key={section.id}>
                  <Link href={`/bluebook/${section.id}/`}>{section.title}</Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </main>
  );
}
