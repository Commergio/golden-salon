import type { Metadata } from "next";
import { PageHero } from "@/components/pages/PageHero";
import { PageBreadcrumbs } from "@/components/pages/PageBreadcrumbs";
import { PageJsonLd } from "@/components/pages/PageJsonLd";
import { LegalLayout, PageShell } from "@/components/pages/LegalLayout";
import { PRIVACY_SECTIONS } from "@/lib/pages/legal";
import { SITE } from "@/lib/data";
import { buildSubPageMetadata, buildBreadcrumbJsonLd, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = buildSubPageMetadata(
  "/privacy",
  "سياسة الخصوصية",
  `سياسة خصوصية ${SITE.name} — كيف نجمع ونحمي بياناتكِ في الرياض.`
);

export default function PrivacyPage() {
  return (
    <PageShell>
      <PageJsonLd
        data={buildBreadcrumbJsonLd([
          { name: "الرئيسية", url: SITE_URL },
          { name: "سياسة الخصوصية", url: `${SITE_URL}/privacy` },
        ])}
      />
      <PageHero title="سياسة الخصوصية" subtitle={`${SITE.name} — حماية بياناتكِ أولويتنا`} />
      <div className="section-padding mx-auto max-w-7xl">
        <PageBreadcrumbs items={[{ label: "الرئيسية", href: "/" }, { label: "سياسة الخصوصية" }]} />
        <LegalLayout sections={PRIVACY_SECTIONS} />
      </div>
    </PageShell>
  );
}
