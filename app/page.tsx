import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { playbookSections } from "./playbook-data";
import { assetPath } from "./site-paths";

export const metadata: Metadata = {
  title: "AOS Work Playbook",
  description:
    "The official AOS Work Playbook landing page and reading path.",
};

const firstPlaybookHref = `/bluebook/${playbookSections[0].id}`;

type QuickPickIconName = "mail" | "data" | "todo" | "deck" | "role" | "auto";

const tracks = [
  {
    href: "/bluebook/1-1-meet-workbench-it-s-not-just-another-chat-box",
    part: "Part 01",
    title: "Meet AOS Work",
    body: "Meet the interface, fire off your first task, plug in a Skill and a Connector, and find out exactly what AOS Work can and can't do.",
    tags: ["Best for beginners", "Finish one task first"],
  },
  {
    href: "/bluebook/scenario-1-email-management-structured-follow-ups",
    part: "Part 02",
    title: "Office Work, Solved",
    body: "Email, docs, spreadsheets, reports, research, meetings: six real scenarios you'll recognize instantly.",
    tags: ["6 scenarios", "Task-driven"],
  },
  {
    href: "/bluebook/scenario-1-hr-jd-generation-resume-screening-candidate-management",
    part: "Part 03",
    title: "Built for Your Role",
    body: "HR, Legal, Finance, Design, E-commerce, Marketing, Sales. Find your role, skip the rest.",
    tags: ["7 roles", "Find by role"],
  },
  {
    href: "/bluebook/4-1-project-a-permanent-home-for-ongoing-work",
    part: "Part 04",
    title: "Chain It, Automate It",
    body: "From one-off runs to real automation, to Skills and workflows that are entirely yours: each level covers more ground.",
    tags: ["Advanced systems", "Reliable automation"],
  },
];

const quickPicks = [
  {
    icon: "mail" as const,
    title: "Email & Follow-ups",
    body: "Turn inbox chaos into a tracked, structured record.",
  },
  {
    icon: "data" as const,
    title: "Spreadsheets & Data",
    body: "Cross-file spreadsheets with thousands of rows and formulas, handled directly.",
  },
  {
    icon: "todo" as const,
    title: "Meetings & Action Items",
    body: "Notes in, action items out: owners and due dates included.",
  },
  {
    icon: "deck" as const,
    title: "Reports & Decks",
    body: "From analysis results to a PPT or HTML you can actually present.",
  },
  {
    icon: "role" as const,
    title: "Find by Role",
    body: "HR, Legal, Finance, Design, E-commerce, Marketing, Sales.",
  },
  {
    icon: "auto" as const,
    title: "Automation",
    body: "Add a trigger, and Monday morning's report is already there.",
  },
];

const levels = [
  {
    label: "Curious -> Interested",
    title: "Use it",
    body: "Run three scenarios a week. Prove to yourself this thing actually works.",
  },
  {
    label: "Habit -> Reliant",
    title: "Make it a habit",
    body: "General scenarios turn into daily moves. Stack your role-specific ones on top.",
  },
  {
    label: "Reliant -> Creative",
    title: "Chain it",
    body: "Connect two scenarios, add a trigger, and let it run without you.",
  },
  {
    label: "Creative -> Benchmark",
    title: "Make it stick",
    body: "Turn your know-how into a Skill. Build a workflow the whole team runs on.",
  },
];

function QuickPickIcon({ name }: { name: QuickPickIconName }) {
  const paths: Record<QuickPickIconName, ReactNode> = {
    mail: (
      <>
        <rect x="4" y="6.25" width="16" height="11.5" rx="1.4" />
        <path d="m5 7.4 7 5.5 7-5.5" />
      </>
    ),
    data: (
      <>
        <path d="M4.5 18.25h15" />
        <path d="M7 6h10" />
        <path d="M12 6v12" />
        <path d="M7.25 18.25v-5.5" />
        <path d="M16.75 18.25v-5.5" />
      </>
    ),
    todo: (
      <>
        <path d="m4.5 12 4 4 7.5-8" />
        <path d="M18 8h2.5" />
        <path d="M18 12h2.5" />
        <path d="M18 16h2.5" />
      </>
    ),
    deck: (
      <>
        <rect x="5" y="5.5" width="14" height="11" rx="1.4" />
        <path d="M8.75 9h6.5" />
        <path d="M8.75 12.75h6.5" />
        <path d="M12 16.5v3" />
        <path d="M8.5 19.5h7" />
      </>
    ),
    role: (
      <>
        <circle cx="9.25" cy="8.5" r="2.75" />
        <circle cx="15.75" cy="9.75" r="2.35" />
        <path d="M4.5 19c.55-3.7 2.65-5.75 5.5-5.75S14.95 15.3 15.5 19" />
        <path d="M13.75 15.1c.75-.7 1.65-1.05 2.75-1.05 2.1 0 3.55 1.55 4 4.45" />
      </>
    ),
    auto: (
      <>
        <path d="M15.75 3.75 7.25 13h5.1l-4.1 7.25 8.75-9.5h-5.1l3.85-7Z" />
        <path d="M17.25 7.25c2.2 1.2 3.3 3.3 3.05 5.55-.3 2.8-2.45 5.15-5.3 5.65" />
      </>
    ),
  };

  return (
    <span className="quick-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" focusable="false">
        {paths[name]}
      </svg>
    </span>
  );
}

export default function HomePage() {
  return (
    <main className="home-page">
      <header className="home-hero">
        <nav className="home-nav" aria-label="Primary navigation">
          <Link className="wordmark" href="/">
            <img src={assetPath("/brand/basil-wordmark.png")} alt="BasilAOS Work" />
            <img className="home-wordmark-symbol" src={assetPath("/brand/basil-icon.svg")} alt="" aria-hidden="true" />
          </Link>
          <div className="home-nav-spacer" />
          <Link href="/">Home</Link>
          <Link href={firstPlaybookHref}>Start Reading</Link>
          <div className="home-search" aria-label="Search placeholder">
            Search the playbook
            <span>CMD K</span>
          </div>
        </nav>

        <section className="home-hero-inner">
          <div className="home-hero-copy">
            <h1>AOS Work Playbook</h1>
            <p>
              What can AOS Work actually do for you? A playbook built from real
              work, not theory. Start with one task — get it running today. Then
              turn every win into a system your whole team runs on.
            </p>
            <div className="home-actions">
              <Link className="home-primary" href={firstPlaybookHref}>
                Start Reading
              </Link>
              <a className="home-secondary" href="#tracks">
                See the 4 Tracks
              </a>
            </div>
            <small>No code, no jargon. Just tell it what you need.</small>
            <div className="home-stats" aria-label="Playbook stats">
              <span>
                <strong>29</strong>
                Chapters
              </span>
              <span>
                <strong>4</strong>
                Tracks
              </span>
            </div>
          </div>
        </section>
      </header>

      <section className="home-section home-section-light" id="tracks">
        <div className="home-section-head">
          <p>BasilAOS / Reading Path</p>
          <span>02</span>
        </div>
        <h2>Four Tracks</h2>
        <div className="track-grid">
          {tracks.map((track) => (
            <Link className="track-card" href={track.href} key={track.title}>
              <p>{track.part}</p>
              <h3>{track.title}</h3>
              <p className="track-body">{track.body}</p>
              <div className="tag-row">
                {track.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="home-section home-section-light home-quick">
        <div className="home-section-head">
          <p>BasilAOS / Quick Picks</p>
          <span>03</span>
        </div>
        <h2>What do you want it to help with right now?</h2>
        <p className="home-section-dek">
          Pick one real thing on your plate this week. Jump straight in, run it,
          then knock out the next one.
        </p>
        <div className="quick-grid">
          {quickPicks.map((pick) => (
            <article className="quick-card" key={pick.title}>
              <QuickPickIcon name={pick.icon} />
              <h3>{pick.title}</h3>
              <p>{pick.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="home-section home-section-dark">
        <div className="home-section-head">
          <p>BasilAOS / Four Levels</p>
          <span>04</span>
        </div>
        <h2>One win shouldn&apos;t only happen once.</h2>
        <p className="home-section-dek">
          Four tracks, four levels of skill. Level up, and the same hour covers
          a whole lot more ground.
        </p>
        <div className="level-grid">
          {levels.map((level, index) => (
            <article className="level-card" key={level.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{level.label}</p>
              <h3>{level.title}</h3>
              <p>{level.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="home-footer-cta">
        <div>
          <p>Continuously updated / Keep going</p>
          <h2>This playbook never stops growing.</h2>
          <span>
            New scenarios and techniques, always in the works. Got a real case
            worth covering? Tell us.
          </span>
        </div>
        <div className="footer-actions">
          <Link href={firstPlaybookHref}>Start Reading</Link>
        </div>
      </section>

      <footer className="home-footer">
        <span>AOS Work Playbook v0.1</span>
        <span>2026-09 / support@basilos.ai</span>
      </footer>
    </main>
  );
}
