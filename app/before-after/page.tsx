import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/pages/PageHero";
import { PageBreadcrumbs } from "@/components/pages/PageBreadcrumbs";
import { PageJsonLd } from "@/components/pages/PageJsonLd";
import { PageShell } from "@/components/pages/LegalLayout";
import { BeforeAfterGallery } from "@/components/pages/BeforeAfterGallery";
import { SITE } from "@/lib/data";
import { buildSubPageMetadata, buildBreadcrumbJsonLd, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = buildSubPageMetadata(
  "/before-after",
  "قبل وبعد",
  `نتائج حقيقية من ${SITE.name} — معالجات شعر وبشرة وأظافر في الرياض.`
);

export default function BeforeAfterPage() {
  return (
    <PageShell>
      <PageJsonLd
        data={buildBreadcrumbJsonLd([
          { name: "الرئيسية", url: SITE_URL },
          { name: "قبل وبعد", url: `${SITE_URL}/before-after` },
        ])}
      />
      <PageHero
        badge="صالون اللمسة الذهبية ✨"
        title="قبل وبعد"
        subtitle="اسحبي للمقارنة — نتائج حقيقية من خبيراتنا"
      />
      <div className="section-padding mx-auto max-w-7xl">
        <PageBreadcrumbs items={[{ label: "الرئيسية", href: "/" }, { label: "قبل وبعد" }]} />
        <BeforeAfterGallery />
        <p className="mt-12 text-center font-cairo text-xs text-warm-gray">
          * الصور لأغراض العرض — جاهزون لربط معرض CMS مستقبلاً
        </p>
        <div className="mt-8 text-center">
          <Link href="/booking" className="btn-primary">احجزي تجربتكِ</Link>
        </div>
      </div>
    </PageShell>
  );
}
