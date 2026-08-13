"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks, site } from "@/lib/site";
import { Close, Menu } from "@/components/icons";
import { ThemeToggle } from "@/components/theme-toggle";

function normalizePath(path: string) {
  if (path === "/") return "/";
  return path.replace(/\/+$/, "");
}

export function Navbar() {
  const rawPathname = usePathname() ?? "";
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const pathname =
    basePath && rawPathname.startsWith(basePath)
      ? rawPathname.slice(basePath.length) || "/"
      : rawPathname;
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      const down = y > lastY && y > 140;
      lastY = y;
      setHidden((prev) => (down === prev ? prev : down));
      setScrolled((prev) => {
        const next = y > 8;
        return next === prev ? prev : next;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isHidden = hidden && !open;

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm transition-[transform,box-shadow] duration-300 ${
        isHidden ? "-translate-y-full" : "translate-y-0"
      } ${scrolled ? "shadow-sm" : ""}`}
    >
      <div className="container flex h-14 items-center">
        <div className="hidden w-full items-center justify-between md:flex">
          <Link
            href="/"
            aria-label="Home"
            className="group flex items-center space-x-2"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground transition-all duration-300 group-hover:scale-110 group-hover:shadow-md">
              <span className="text-xs font-semibold leading-none tracking-tight">
                {site.initials}
              </span>
            </div>
          </Link>

          <nav className="absolute left-1/2 flex -translate-x-1/2 items-center space-x-1 text-sm font-medium">
            {navLinks.map((link) => {
              const active =
                normalizePath(pathname) === normalizePath(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3 py-1.5 transition-colors hover:text-foreground ${
                    active ? "text-foreground" : "text-foreground/60"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-1/2 h-0.5 -translate-x-1/2 rounded-full bg-foreground transition-all duration-300 ${
                      active ? "w-4/5" : "w-0"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          <ThemeToggle />
        </div>

        <div className="flex flex-1 items-center justify-between md:hidden">
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md transition-colors hover:bg-accent"
          >
            {open ? <Close className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
          <Link
            href="/"
            aria-label="Home"
            className="group flex items-center space-x-2"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <span className="text-xs font-semibold leading-none tracking-tight">
                {site.initials}
              </span>
            </div>
          </Link>
          <ThemeToggle />
        </div>
      </div>

      {open && (
        <nav className="border-t md:hidden">
          <div className="container flex flex-col py-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent ${
                  normalizePath(pathname) === normalizePath(link.href)
                    ? "text-foreground"
                    : "text-foreground/60"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
