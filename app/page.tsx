import Link from "next/link";
import { site } from "@/lib/site";
import { Reveal } from "@/components/reveal";
import { GitHub, LinkedIn, Mail, MapPin } from "@/components/icons";

export default function Home() {
  return (
    <div className="container flex min-h-[calc(100dvh-8.5rem)] flex-col items-center justify-center py-16">
      <div className="flex flex-col items-center justify-center text-center">
        <Reveal variant="blur" duration={800}>
          <h1 className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text px-4 pb-2 text-4xl font-bold tracking-tighter text-transparent sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl">
            {site.name}
          </h1>
        </Reveal>

        <Reveal variant="up" delay={120} duration={600}>
          <p className="mt-4 font-mono text-base text-primary sm:text-lg md:text-xl 2xl:text-2xl">
            {site.title}
          </p>
        </Reveal>

        <Reveal variant="fade" delay={180} duration={500}>
          <div className="mt-2 flex items-center gap-3 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5" />
              {site.location}
            </span>
          </div>
        </Reveal>

        <Reveal variant="up" delay={240} duration={600}>
          <p className="mt-4 max-w-[600px] text-muted-foreground md:text-lg">
            {site.tagline}
          </p>
        </Reveal>

        <Reveal variant="up" delay={320} duration={600}>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link
              href="/apps"
              className="inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-all duration-200 hover:bg-primary/90 hover:shadow-lg active:scale-95"
            >
              View Apps
            </Link>
          </div>
        </Reveal>

        <Reveal variant="up" delay={400} duration={600}>
          <div className="mt-4 flex gap-1">
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full transition-all duration-200 hover:scale-110 hover:bg-accent hover:text-accent-foreground active:scale-95"
            >
              <GitHub className="h-5 w-5" />
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full transition-all duration-200 hover:scale-110 hover:bg-accent hover:text-accent-foreground active:scale-95"
            >
              <LinkedIn className="h-5 w-5" />
            </a>
            <Link
              href="/contact"
              aria-label="Contact"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full transition-all duration-200 hover:scale-110 hover:bg-accent hover:text-accent-foreground active:scale-95"
            >
              <Mail className="h-5 w-5" />
            </Link>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
