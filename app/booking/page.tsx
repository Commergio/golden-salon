import type { Metadata } from "next";
import { PageHero } from "@/components/pages/PageHero";
import { PageBreadcrumbs } from "@/components/pages/PageBreadcrumbs";
import { PageJsonLd } from "@/components/pages/PageJsonLd";
import { PageShell } from "@/components/pages/LegalLayout";
import { BookingInterface } from "@/components/pages/BookingInterface";
import { SITE } from "@/lib/data";
import { buildSubPageMetadata, buildBreadcrumbJsonLd, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = buildSubPageMetadata(
  "/booking",
  "احجزي موعدكِ",
  `احجزي في ${SITE.name} عبر واتساب — صالون نسائي فاخر بالرياض. حجز فوري وسهل.`
);

export default function BookingPage() {
  return (
    <PageShell>
      <PageJsonLd
        data={buildBreadcrumbJsonLd([
          { name: "الرئيسية", url: SITE_URL },
          { name: "الحجز", url: `${SITE_URL}/booking` },
        ])}
      />
      <PageHero
        badge="صالون اللمسة الذهبية ✨"
        title="احجزي موعدكِ"
        subtitle="تجربة فاخرة تبدأ بحجز بسيط — واتساب الآن أو انتظري نظام الحجز الإلكتروني قريباً"
      />
      <div className="section-padding mx-auto max-w-7xl">
        <PageBreadcrumbs items={[{ label: "الرئيسية", href: "/" }, { label: "الحجز" }]} />
        <BookingInterface />
      </div>
    </PageShell>
  );
}
