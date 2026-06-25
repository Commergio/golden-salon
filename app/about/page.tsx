import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PageHero } from "@/components/pages/PageHero";
import { PageBreadcrumbs } from "@/components/pages/PageBreadcrumbs";
import { PageJsonLd } from "@/components/pages/PageJsonLd";
import { PageShell } from "@/components/pages/LegalLayout";
import { ABOUT_SALON } from "@/lib/pages/content";
import { SITE } from "@/lib/data";
import { buildSubPageMetadata, buildBreadcrumbJsonLd, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = buildSubPageMetadata(
  "/about",
  "عن الصالون",
  `قصة ${SITE.name} — رؤيتنا، قيمنا، وفلسفة الجمال الفاخر في الرياض.`
);

export default function AboutPage() {
  return (
    <PageShell>
      <PageJsonLd
        data={buildBreadcrumbJsonLd([
          { name: "الرئيسية", url: SITE_URL },
          { name: "عن الصالون", url: `${SITE_URL}/about` },
        ])}
      />
      <PageHero
        badge="صالون اللمسة الذهبية ✨"
        title="عن الصالون"
        subtitle={ABOUT_SALON.story}
      />
      <div className="section-padding mx-auto max-w-7xl">
        <PageBreadcrumbs items={[{ label: "الرئيسية", href: "/" }, { label: "عن الصالون" }]} />
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-gold/30 shadow-luxury-gold">
            <Image src="/images/amal-ghattas.png" alt={`${SITE.name} — صالون نسائي فاخر`} fill className="object-cover" sizes="(max-width:1024px) 100vw, 50vw" />
          </div>
          <div className="space-y-6">
            <div>
              <h2 className="font-playfair text-2xl font-semibold text-gold">رؤيتنا</h2>
              <p className="mt-2 font-cairo text-warm-gray">{ABOUT_SALON.vision}</p>
            </div>
            <div>
              <h2 className="font-playfair text-2xl font-semibold text-gold">رسالتنا</h2>
              <p className="mt-2 font-cairo text-warm-gray">{ABOUT_SALON.mission}</p>
            </div>
            <p className="font-cairo leading-relaxed text-charcoal">{ABOUT_SALON.philosophy}</p>
          </div>
        </div>
        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ABOUT_SALON.stats.map((s) => (
            <div key={s.label} className="rounded-2xl border border-gold/25 bg-white/75 p-6 text-center shadow-glass">
              <p className="font-playfair text-3xl font-bold text-gold">{s.value}</p>
              <p className="mt-1 font-cairo text-sm text-warm-gray">{s.label}</p>
            </div>
          ))}
        </div>
        <h2 className="mb-8 mt-20 text-center font-playfair text-2xl font-semibold text-charcoal">قيمنا</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {ABOUT_SALON.values.map((v) => (
            <div key={v.title} className="rounded-2xl border border-gold/20 bg-white/70 p-6 backdrop-blur-md">
              <h3 className="font-playfair text-lg font-semibold text-gold">{v.title}</h3>
              <p className="mt-2 font-cairo text-sm text-warm-gray">{v.text}</p>
            </div>
          ))}
        </div>
        <h2 className="mb-8 mt-20 text-center font-playfair text-2xl font-semibold text-charcoal">لماذا نحن؟</h2>
        <ul className="mx-auto max-w-2xl space-y-3">
          {ABOUT_SALON.whyUs.map((w) => (
            <li key={w} className="flex items-start gap-3 font-cairo text-charcoal">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
              {w}
            </li>
          ))}
        </ul>
        <h2 className="mb-10 mt-20 text-center font-playfair text-2xl font-semibold text-charcoal">رحلتنا</h2>
        <div className="relative mx-auto max-w-2xl space-y-8">
          <div className="absolute right-4 top-0 bottom-0 w-px bg-gold/30" aria-hidden />
          {ABOUT_SALON.timeline.map((t) => (
            <div key={t.year} className="relative pr-12">
              <span className="absolute right-2 top-1 h-4 w-4 rounded-full border-2 border-gold bg-cream" />
              <span className="font-playfair text-sm font-semibold text-gold">{t.year}</span>
              <h3 className="font-playfair text-lg font-semibold text-charcoal">{t.title}</h3>
              <p className="font-cairo text-sm text-warm-gray">{t.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Link href="/booking" className="btn-primary">احجزي تجربتكِ</Link>
        </div>
      </div>
    </PageShell>
  );
}
