import { experience } from "@/lib/site";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";

export default function ExperiencePage() {
  return (
    <div className="container py-8">
      <PageHeader
        title="Experience"
        subtitle="Where I've worked and what I've learned along the way."
      />

      <div className="relative space-y-8 border-l pl-8">
        {experience.map((job, i) => (
          <Reveal key={job.company} delay={i * 80}>
            <div className="relative">
              <span className="absolute -left-[37px] top-1.5 h-3 w-3 rounded-full border-2 border-background bg-primary" />
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h2 className="text-lg font-semibold tracking-tight">
                  {job.role}
                </h2>
                <span className="font-mono text-sm text-muted-foreground">
                  {job.period}
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                {job.company} · {job.location}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                {job.description}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {job.tech.map((t) => (
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
