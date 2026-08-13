import { PageHeader } from "@/components/page-header";
import { site } from "@/lib/site";

export default function PrivacyPage() {
  return (
    <div className="container py-8">
      <PageHeader title="Privacy" />
      <div className="max-w-2xl space-y-4 text-sm text-muted-foreground">
        <p>
          This is a personal portfolio website. It is a static site and does
          not collect, store, or process personal information.
        </p>
        <p>
          If you contact {site.name} directly via email or a linked profile,
          any information you choose to share will be used solely to respond to
          your message.
        </p>
        <p>
          This page is a placeholder. Replace it with a privacy policy that
          reflects your actual data practices before deploying.
        </p>
      </div>
    </div>
  );
}
