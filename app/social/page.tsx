import type { Metadata } from "next";
import { PageHero } from "@/components/pages/PageHero";
import { PageBreadcrumbs } from "@/components/pages/PageBreadcrumbs";
import { PageJsonLd } from "@/components/pages/PageJsonLd";
import { PageShell } from "@/components/pages/LegalLayout";
import { SocialHubCards } from "@/components/pages/SocialHub";
import { SITE } from "@/lib/data";
import { buildSubPageMetadata, buildBreadcrumbJsonLd, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = buildSubPageMetadata(
  "/social",
  "شبكات التواصل",
  `تابعي ${SITE.name} على إنستغرام، تيك توك، سناب شات، وواتساب.`
);

export default function SocialPage() {
  return (
    <PageShell>
      <PageJsonLd
        data={buildBreadcrumbJsonLd([
          { name: "الرئيسية", url: SITE_URL },
          { name: "شبكات التواصل", url: `${SITE_URL}/social` },
        ])}
      />
      <PageHero
        badge="صالون اللمسة الذهبية ✨"
        title="شبكات التواصل"
        subtitle="تابعينا وكوني جزءاً من عالم الجمال الفاخر"
      />
      <div className="section-padding mx-auto max-w-7xl">
        <PageBreadcrumbs items={[{ label: "الرئيسية", href: "/" }, { label: "شبكات التواصل" }]} />
        <SocialHubCards />
      </div>
    </PageShell>
  );
}
