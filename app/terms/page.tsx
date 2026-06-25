import type { Metadata } from "next";
import { PageHero } from "@/components/pages/PageHero";
import { PageBreadcrumbs } from "@/components/pages/PageBreadcrumbs";
import { PageJsonLd } from "@/components/pages/PageJsonLd";
import { LegalLayout, PageShell } from "@/components/pages/LegalLayout";
import { TERMS_SECTIONS } from "@/lib/pages/legal";
import { SITE } from "@/lib/data";
import { buildSubPageMetadata, buildBreadcrumbJsonLd, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = buildSubPageMetadata(
  "/terms",
  "الشروط والأحكام",
  `شروط وأحكام ${SITE.name} — الحجز، الإلغاء، والدفع في الرياض.`
);

export default function TermsPage() {
  return (
    <PageShell>
      <PageJsonLd
        data={buildBreadcrumbJsonLd([
          { name: "الرئيسية", url: SITE_URL },
          { name: "الشروط والأحكام", url: `${SITE_URL}/terms` },
        ])}
      />
      <PageHero title="الشروط والأحكام" subtitle="يرجى قراءة الشروط قبل استخدام خدماتنا" />
      <div className="section-padding mx-auto max-w-7xl">
        <PageBreadcrumbs items={[{ label: "الرئيسية", href: "/" }, { label: "الشروط والأحكام" }]} />
        <LegalLayout sections={TERMS_SECTIONS} />
      </div>
    </PageShell>
  );
}
