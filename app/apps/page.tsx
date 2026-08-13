import { apps } from "@/lib/site";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";
import { ArrowRight } from "@/components/icons";

export default function AppsPage() {
  return (
    <div className="container py-8">
      <PageHeader
        title="Apps"
        subtitle="Small tools and applications I've shipped."
      />

      <div className="grid gap-4">
        {apps.map((app, i) => (
          <Reveal key={app.name} delay={i * 80}>
            <div className="flex items-center justify-between gap-4 rounded-lg border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-ring hover:shadow-lg">
              <div>
                <h2 className="text-lg font-semibold tracking-tight">
                  {app.name}
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  {app.description}
                </p>
              </div>
              {app.link ? (
                <a
                  href={app.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 shrink-0 items-center justify-center gap-2 rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground transition-all duration-200 hover:bg-primary/90 active:scale-95"
                >
                  Open
                  <ArrowRight className="h-4 w-4" />
                </a>
              ) : null}
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
