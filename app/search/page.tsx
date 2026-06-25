import type { Metadata } from "next";
import { Suspense } from "react";
import { PageHero } from "@/components/pages/PageHero";
import { PageBreadcrumbs } from "@/components/pages/PageBreadcrumbs";
import { PageJsonLd } from "@/components/pages/PageJsonLd";
import { PageShell } from "@/components/pages/LegalLayout";
import { SiteSearch } from "@/components/pages/SiteSearch";
import { SITE } from "@/lib/data";
import { buildSubPageMetadata, buildBreadcrumbJsonLd, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = buildSubPageMetadata(
  "/search",
  "البحث",
  `ابحثي في ${SITE.name} — مقالات، خدمات، وصفحات.`
);

function SearchContent({ q }: { q?: string }) {
  return <SiteSearch initialQuery={q ?? ""} />;
}

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;

  return (
    <PageShell>
      <PageJsonLd
        data={buildBreadcrumbJsonLd([
          { name: "الرئيسية", url: SITE_URL },
          { name: "البحث", url: `${SITE_URL}/search` },
        ])}
      />
      <PageHero
        badge="صالون اللمسة الذهبية ✨"
        title="البحث في الموقع"
        subtitle="ابحثي عن مقالات، خدمات، وصفحات"
      />
      <div className="section-padding mx-auto max-w-7xl">
        <PageBreadcrumbs items={[{ label: "الرئيسية", href: "/" }, { label: "البحث" }]} />
        <Suspense fallback={<div className="h-14 animate-pulse rounded-2xl bg-gold/10" />}>
          <SearchContent q={q} />
        </Suspense>
      </div>
    </PageShell>
  );
}
