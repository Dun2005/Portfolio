import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative z-10 border-t bg-background/80 backdrop-blur-sm">
      <div className="container flex items-center justify-center gap-2.5 py-6 text-xs text-muted-foreground">
        <span>
          © {new Date().getFullYear()} {site.name}
        </span>
        <span aria-hidden="true">·</span>
        <Link
          href="/privacy"
          className="underline-offset-4 transition-colors hover:text-foreground hover:underline"
        >
          Privacy
        </Link>
      </div>
    </footer>
  );
}
