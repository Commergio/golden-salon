import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/pages/PageHero";
import { PageBreadcrumbs } from "@/components/pages/PageBreadcrumbs";
import { PageJsonLd } from "@/components/pages/PageJsonLd";
import { PageShell } from "@/components/pages/LegalLayout";
import { CAREERS } from "@/lib/pages/content";
import { SITE } from "@/lib/data";
import { buildSubPageMetadata, buildBreadcrumbJsonLd, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = buildSubPageMetadata(
  "/careers",
  "الوظائف",
  `انضمي لفريق ${SITE.name} — فرص عمل في صالون نسائي فاخر بالرياض.`
);

export default function CareersPage() {
  return (
    <PageShell>
      <PageJsonLd
        data={buildBreadcrumbJsonLd([
          { name: "الرئيسية", url: SITE_URL },
          { name: "الوظائف", url: `${SITE_URL}/careers` },
        ])}
      />
      <PageHero
        badge="صالون اللمسة الذهبية ✨"
        title="الوظائف"
        subtitle={CAREERS.intro}
      />
      <div className="section-padding mx-auto max-w-3xl">
        <PageBreadcrumbs items={[{ label: "الرئيسية", href: "/" }, { label: "الوظائف" }]} />
        <div className="space-y-6">
          {CAREERS.positions.map((job) => (
            <article
              key={job.title}
              className="rounded-3xl border border-gold/25 bg-white/75 p-6 shadow-glass backdrop-blur-md md:p-8"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <h2 className="font-playfair text-xl font-semibold text-charcoal">{job.title}</h2>
                <span className="rounded-full border border-gold/30 bg-gold/10 px-3 py-1 font-cairo text-xs text-gold">
                  {job.type}
                </span>
              </div>
              <p className="mt-3 font-cairo text-sm leading-relaxed text-warm-gray">{job.description}</p>
            </article>
          ))}
        </div>
        <div className="mt-12 rounded-3xl border border-dashed border-gold/30 bg-cream/50 p-8 text-center">
          <p className="font-playfair text-lg text-charcoal">أرسلي سيرتكِ الذاتية</p>
          <p className="mt-2 font-cairo text-sm text-warm-gray">قريباً — نموذج توظيف إلكتروني</p>
          <a href={`mailto:${SITE.email}?subject=طلب توظيف - ${SITE.name}`} className="btn-primary mt-6 inline-flex text-sm">
            {SITE.email}
          </a>
        </div>
        <p className="mt-8 text-center">
          <Link href="/contact" className="font-cairo text-sm text-gold hover:underline">تواصل معنا</Link>
        </p>
      </div>
    </PageShell>
  );
}
