import { site } from "@/lib/site";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";
import { GitHub, LinkedIn, Mail, XSocial } from "@/components/icons";

const channels = [
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    icon: Mail,
  },
  {
    label: "GitHub",
    value: site.github.replace("https://github.com/", "@"),
    href: site.github,
    icon: GitHub,
  },
  {
    label: "LinkedIn",
    value: site.linkedin.replace("https://www.linkedin.com/in/", "@"),
    href: site.linkedin,
    icon: LinkedIn,
  },
  {
    label: "X / Twitter",
    value: site.twitter.replace("https://twitter.com/", "@"),
    href: site.twitter,
    icon: XSocial,
  },
];

export default function ContactPage() {
  return (
    <div className="container py-8">
      <PageHeader
        title="Contact"
        subtitle="Have a project in mind or just want to say hi? I'd love to hear from you."
      />

      <div className="max-w-md space-y-4">
        {channels.map((channel, i) => {
          const Icon = channel.icon;
          const external = channel.href.startsWith("http");
          return (
            <Reveal key={channel.label} delay={i * 70} variant="up">
              <a
                href={channel.href}
                {...(external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="flex items-center gap-3 rounded-lg border bg-card p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-ring hover:shadow-md"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <Icon className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-sm font-medium">
                    {channel.label}
                  </span>
                  <span className="block text-sm text-muted-foreground">
                    {channel.value}
                  </span>
                </span>
              </a>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
