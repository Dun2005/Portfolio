import { projects } from "@/lib/site";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";
import { ExternalLink, GitHub } from "@/components/icons";

export default function ProjectsPage() {
  return (
    <div className="container py-8">
      <PageHeader
        title="Projects"
        subtitle="A selection of things I've designed and built."
      />

      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.name} delay={(i % 2) * 80}>
            <div className="flex h-full flex-col rounded-lg border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-ring hover:shadow-lg">
              <div className="flex items-start justify-between gap-4">
                <h2 className="text-lg font-semibold tracking-tight">
                  {project.name}
                </h2>
                <div className="flex shrink-0 gap-1">
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.name} on GitHub`}
                      className="inline-flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                    >
                      <GitHub className="h-4 w-4" />
                    </a>
                  ) : null}
                  {project.demo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.name} demo`}
                      className="inline-flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  ) : null}
                </div>
              </div>

              <p className="mt-2 flex-1 text-sm text-muted-foreground">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-md bg-muted px-2 py-1 font-mono text-xs text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
