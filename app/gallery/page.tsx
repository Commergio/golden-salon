import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/pages/PageHero";
import { PageBreadcrumbs } from "@/components/pages/PageBreadcrumbs";
import { PageJsonLd } from "@/components/pages/PageJsonLd";
import { PageShell } from "@/components/pages/LegalLayout";
import { GalleryMasonry } from "@/components/pages/GalleryMasonry";
import { SITE } from "@/lib/data";
import { buildSubPageMetadata, buildBreadcrumbJsonLd, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = buildSubPageMetadata(
  "/gallery",
  "معرض الصور",
  `معرض ${SITE.name} — شعر، بشرة، سبا، حمام مغربي، مساج، وأظافر.`
);

export default function GalleryPage() {
  return (
    <PageShell>
      <PageJsonLd
        data={buildBreadcrumbJsonLd([
          { name: "الرئيسية", url: SITE_URL },
          { name: "معرض الصور", url: `${SITE_URL}/gallery` },
        ])}
      />
      <PageHero
        badge="صالون اللمسة الذهبية ✨"
        title="معرض الصور"
        subtitle="لحظات الجمال والفخامة في صالون اللمسة الذهبية"
      />
      <div className="section-padding mx-auto max-w-7xl">
        <PageBreadcrumbs items={[{ label: "الرئيسية", href: "/" }, { label: "معرض الصور" }]} />
        <GalleryMasonry />
        <div className="mt-12 text-center">
          <Link href="/booking" className="btn-primary">احجزي موعدكِ</Link>
        </div>
      </div>
    </PageShell>
  );
}
