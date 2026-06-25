import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { PageHero } from "@/components/pages/PageHero";
import { PageBreadcrumbs } from "@/components/pages/PageBreadcrumbs";
import { PageJsonLd } from "@/components/pages/PageJsonLd";
import { PageShell } from "@/components/pages/LegalLayout";
import { SERVICES, SITE } from "@/lib/data";
import { buildSubPageMetadata, buildBreadcrumbJsonLd, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = buildSubPageMetadata(
  "/services",
  "دليل الخدمات",
  `خدمات ${SITE.name} — شعر، بشرة، حمام مغربي، مساج، وأظافر في الرياض.`
);

export default function ServicesPage() {
  return (
    <PageShell>
      <PageJsonLd
        data={buildBreadcrumbJsonLd([
          { name: "الرئيسية", url: SITE_URL },
          { name: "دليل الخدمات", url: `${SITE_URL}/services` },
        ])}
      />
      <PageHero
        badge="صالون اللمسة الذهبية ✨"
        title="دليل الخدمات"
        subtitle="تجارب فاخرة مصممة لجمالكِ واسترخائكِ"
      />
      <div className="section-padding mx-auto max-w-7xl">
        <PageBreadcrumbs items={[{ label: "الرئيسية", href: "/" }, { label: "دليل الخدمات" }]} />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <Link
              key={service.id}
              href={`/services/${service.id}`}
              className="group overflow-hidden rounded-3xl border border-gold/25 bg-white/75 shadow-glass backdrop-blur-md transition-all hover:-translate-y-1 hover:border-gold/45 hover:shadow-luxury-gold"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={service.image}
                  alt={`${service.title} — ${SITE.name}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width:768px) 100vw, 33vw"
                />
                <div className="image-overlay-soft absolute inset-0" />
              </div>
              <div className="p-6">
                <h2 className="font-playfair text-xl font-semibold text-charcoal">{service.title}</h2>
                <p className="mt-2 font-cairo text-sm text-warm-gray line-clamp-2">{service.description}</p>
                <span className="mt-4 inline-flex items-center gap-1 font-cairo text-sm text-gold">
                  اكتشفي المزيد
                  <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Link href="/booking" className="btn-primary">احجزي موعدكِ</Link>
        </div>
      </div>
    </PageShell>
  );
}
