import { blogPosts } from "@/lib/site";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";

export default function BlogsPage() {
  return (
    <div className="container py-8">
      <PageHeader
        title="Blogs"
        subtitle="Thoughts on software, career, and the craft of building."
      />

      <div className="grid gap-4">
        {blogPosts.map((post, i) => (
          <Reveal key={post.title} delay={i * 80}>
            <article className="group rounded-lg border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-ring hover:shadow-lg">
              <div className="flex items-baseline justify-between gap-4">
                <h2 className="text-lg font-semibold tracking-tight transition-colors group-hover:text-foreground">
                  {post.title}
                </h2>
                <span className="shrink-0 font-mono text-xs text-muted-foreground">
                  {post.date}
                </span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                {post.description}
              </p>
              <p className="mt-3 font-mono text-xs text-muted-foreground/70">
                {post.readingTime}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
