"use client";

import { useEffect, useState } from "react";

type ThemeMode = "dark" | "light";

function readTheme(): ThemeMode {
  if (typeof window === "undefined") {
    return "dark";
  }

  try {
    return window.localStorage?.getItem("basil-theme") === "light" ? "light" : "dark";
  } catch {
    return document.documentElement.dataset.theme === "light" ? "light" : "dark";
  }
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<ThemeMode>("dark");

  useEffect(() => {
    const stored = readTheme();
    document.documentElement.dataset.theme = stored;
    const timer = window.setTimeout(() => setTheme(stored), 0);

    return () => window.clearTimeout(timer);
  }, []);

  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    try {
      window.localStorage?.setItem("basil-theme", next);
    } catch {
      // Theme still changes for the active page when storage is unavailable.
    }
  }

  return (
    <button
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
      className="theme-toggle"
      onClick={toggleTheme}
      type="button"
    >
      <span className="theme-toggle__track" aria-hidden="true">
        <span className="theme-toggle__knob" />
      </span>
      {theme === "dark" ? "Light" : "Dark"}
    </button>
  );
}
