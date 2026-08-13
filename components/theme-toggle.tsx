"use client";

import { Moon, Sun } from "@/components/icons";

export function ThemeToggle() {
  function toggle() {
    const el = document.documentElement;
    const isDark = el.classList.contains("dark");
    const next = isDark ? "light" : "dark";
    el.classList.toggle("dark", next === "dark");
    el.classList.toggle("light", next === "light");
    el.style.colorScheme = next;
    window.localStorage.setItem("theme", next);
  }

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={toggle}
      className="relative inline-flex h-9 w-9 items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
