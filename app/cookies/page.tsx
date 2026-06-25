import type { Metadata } from "next";
import { PageHero } from "@/components/pages/PageHero";
import { PageBreadcrumbs } from "@/components/pages/PageBreadcrumbs";
import { PageJsonLd } from "@/components/pages/PageJsonLd";
import { LegalLayout, PageShell } from "@/components/pages/LegalLayout";
import { COOKIE_SECTIONS } from "@/lib/pages/legal";
import { SITE } from "@/lib/data";
import { buildSubPageMetadata, buildBreadcrumbJsonLd, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = buildSubPageMetadata(
  "/cookies",
  "سياسة الكوكيز",
  `سياسة ملفات تعريف الارتباط لموقع ${SITE.name} — التحكم والموافقة.`
);

export default function CookiesPage() {
  return (
    <PageShell>
      <PageJsonLd
        data={buildBreadcrumbJsonLd([
          { name: "الرئيسية", url: SITE_URL },
          { name: "سياسة الكوكيز", url: `${SITE_URL}/cookies` },
        ])}
      />
      <PageHero title="سياسة الكوكيز" subtitle="كيف نستخدم ملفات تعريف الارتباط وكيف تتحكمين بها" />
      <div className="section-padding mx-auto max-w-7xl">
        <PageBreadcrumbs items={[{ label: "الرئيسية", href: "/" }, { label: "سياسة الكوكيز" }]} />
        <LegalLayout sections={COOKIE_SECTIONS} />
      </div>
    </PageShell>
  );
}
