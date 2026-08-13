import { Reveal } from "@/components/reveal";

export function PageHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <Reveal>
      <div className="mb-10 mt-8">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {title}
        </h1>
        {subtitle ? (
          <p className="mt-2 max-w-2xl text-muted-foreground">{subtitle}</p>
        ) : null}
      </div>
    </Reveal>
  );
}
