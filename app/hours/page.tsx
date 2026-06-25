import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/pages/PageHero";
import { PageBreadcrumbs } from "@/components/pages/PageBreadcrumbs";
import { PageJsonLd } from "@/components/pages/PageJsonLd";
import { PageShell } from "@/components/pages/LegalLayout";
import { HoursTimeline } from "@/components/pages/HoursTimeline";
import { SITE } from "@/lib/data";
import { buildSubPageMetadata, buildBreadcrumbJsonLd, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = buildSubPageMetadata(
  "/hours",
  "ساعات العمل",
  `مواعيد ${SITE.name} — من 1 ظهرًا حتى 11 مساءً، الأحد إجازة. الرياض.`
);

export default function HoursPage() {
  return (
    <PageShell>
      <PageJsonLd
        data={buildBreadcrumbJsonLd([
          { name: "الرئيسية", url: SITE_URL },
          { name: "ساعات العمل", url: `${SITE_URL}/hours` },
        ])}
      />
      <PageHero
        badge="صالون اللمسة الذهبية ✨"
        title="ساعات العمل"
        subtitle={`${SITE.hours} — ${SITE.closedDay}`}
      />
      <div className="section-padding mx-auto max-w-7xl">
        <PageBreadcrumbs items={[{ label: "الرئيسية", href: "/" }, { label: "ساعات العمل" }]} />
        <HoursTimeline />
        <p className="mt-12 text-center font-cairo text-sm text-warm-gray">
          <Link href="/booking" className="text-gold hover:underline">احجزي موعدكِ الآن</Link>
          {" · "}
          <Link href="/contact" className="text-gold hover:underline">تواصل معنا</Link>
        </p>
      </div>
    </PageShell>
  );
}
