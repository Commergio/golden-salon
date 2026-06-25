import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PageHero } from "@/components/pages/PageHero";
import { PageBreadcrumbs } from "@/components/pages/PageBreadcrumbs";
import { PageJsonLd } from "@/components/pages/PageJsonLd";
import { PageShell } from "@/components/pages/LegalLayout";
import { ABOUT_AMAL } from "@/lib/pages/content";
import { SITE } from "@/lib/data";
import { buildSubPageMetadata, buildBreadcrumbJsonLd, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = buildSubPageMetadata(
  "/amal",
  "أمال غطاس",
  `تعرفي على أمال غطاس — خبيرة ترتمنت الشعر والبشرة في ${SITE.name} بالرياض.`
);

export default function AmalPage() {
  return (
    <PageShell>
      <PageJsonLd
        data={[
          buildBreadcrumbJsonLd([
            { name: "الرئيسية", url: SITE_URL },
            { name: "أمال غطاس", url: `${SITE_URL}/amal` },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "Person",
            name: ABOUT_AMAL.title,
            jobTitle: ABOUT_AMAL.role,
            worksFor: { "@type": "BeautySalon", name: SITE.name, url: SITE_URL },
            image: `${SITE_URL}/images/amal-ghattas.png`,
          },
        ]}
      />
      <PageHero
        badge="صالون اللمسة الذهبية ✨"
        title={ABOUT_AMAL.title}
        subtitle={ABOUT_AMAL.role}
      />
      <div className="section-padding mx-auto max-w-7xl">
        <PageBreadcrumbs items={[{ label: "الرئيسية", href: "/" }, { label: "أمال غطاس" }]} />
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden rounded-3xl border-2 border-gold/40 shadow-luxury-gold lg:max-w-none">
            <Image src="/images/amal-ghattas.png" alt={`${ABOUT_AMAL.title} — ${SITE.name}`} fill className="object-cover" priority sizes="(max-width:1024px) 100vw, 50vw" />
          </div>
          <div className="space-y-6">
            <p className="font-cairo text-lg leading-relaxed text-charcoal">{ABOUT_AMAL.bio}</p>
            <p className="font-cairo italic text-warm-gray">{ABOUT_AMAL.philosophy}</p>
          </div>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-gold/25 bg-white/75 p-6 shadow-glass">
            <h2 className="font-playfair text-xl font-semibold text-gold">خبرة الشعر</h2>
            <ul className="mt-4 space-y-2">
              {ABOUT_AMAL.hairExpertise.map((e) => (
                <li key={e} className="font-cairo text-sm text-warm-gray">• {e}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-gold/25 bg-white/75 p-6 shadow-glass">
            <h2 className="font-playfair text-xl font-semibold text-gold">خبرة البشرة</h2>
            <ul className="mt-4 space-y-2">
              {ABOUT_AMAL.skinExpertise.map((e) => (
                <li key={e} className="font-cairo text-sm text-warm-gray">• {e}</li>
              ))}
            </ul>
          </div>
        </div>
        <h2 className="mb-6 mt-16 font-playfair text-2xl font-semibold text-charcoal">المسيرة المهنية</h2>
        <ul className="space-y-3">
          {ABOUT_AMAL.experience.map((e) => (
            <li key={e} className="flex gap-3 font-cairo text-charcoal">
              <span className="text-gold">✦</span> {e}
            </li>
          ))}
        </ul>
        <h2 className="mb-6 mt-12 font-playfair text-2xl font-semibold text-charcoal">الشهادات</h2>
        <ul className="space-y-2">
          {ABOUT_AMAL.certificates.map((c) => (
            <li key={c} className="rounded-xl border border-gold/15 bg-cream/50 px-4 py-3 font-cairo text-sm text-warm-gray">{c}</li>
          ))}
        </ul>
        <h2 className="mb-8 mt-16 text-center font-playfair text-2xl font-semibold text-charcoal">المعرض</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {ABOUT_AMAL.gallery.map((img) => (
            <div key={img.src} className="relative aspect-square overflow-hidden rounded-2xl border border-gold/20">
              <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="33vw" />
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link href="/booking" className="btn-primary">احجزي مع أمال</Link>
        </div>
      </div>
    </PageShell>
  );
}
