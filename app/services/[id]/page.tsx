import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MessageCircle } from "lucide-react";
import { PageHero } from "@/components/pages/PageHero";
import { PageBreadcrumbs } from "@/components/pages/PageBreadcrumbs";
import { PageJsonLd } from "@/components/pages/PageJsonLd";
import { PageShell } from "@/components/pages/LegalLayout";
import { FaqAccordion } from "@/components/pages/FaqAccordion";
import { SERVICES, SITE } from "@/lib/data";
import { SERVICE_DETAILS } from "@/lib/pages/content";
import {
  buildSubPageMetadata,
  buildBreadcrumbJsonLd,
  buildServiceJsonLd,
  buildFaqJsonLd,
  SITE_URL,
} from "@/lib/seo";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ id: s.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const service = SERVICES.find((s) => s.id === id);
  if (!service) return {};
  const detail = SERVICE_DETAILS[id];
  return buildSubPageMetadata(
    `/services/${id}`,
    service.title,
    detail?.longDescription ?? service.description
  );
}

export default async function ServiceDetailPage({ params }: Props) {
  const { id } = await params;
  const service = SERVICES.find((s) => s.id === id);
  if (!service) notFound();

  const detail = SERVICE_DETAILS[id];
  const url = `${SITE_URL}/services/${id}`;

  return (
    <PageShell>
      <PageJsonLd
        data={[
          buildBreadcrumbJsonLd([
            { name: "الرئيسية", url: SITE_URL },
            { name: "الخدمات", url: `${SITE_URL}/services` },
            { name: service.title, url },
          ]),
          buildServiceJsonLd({
            name: service.title,
            description: detail?.longDescription ?? service.description,
            url,
          }),
          ...(detail?.faq.length ? [buildFaqJsonLd(detail.faq)] : []),
        ]}
      />
      <PageHero badge="صالون اللمسة الذهبية ✨" title={service.title} subtitle={service.description} />
      <div className="section-padding mx-auto max-w-7xl">
        <PageBreadcrumbs
          items={[
            { label: "الرئيسية", href: "/" },
            { label: "الخدمات", href: "/services" },
            { label: service.title },
          ]}
        />
        <div className="relative mb-12 aspect-[21/9] overflow-hidden rounded-3xl border border-gold/25 shadow-luxury-gold">
          <Image src={service.image} alt={`${service.title} — ${SITE.name}`} fill className="object-cover" priority sizes="100vw" />
        </div>
        {detail && (
          <>
            <p className="mx-auto max-w-3xl text-center font-cairo text-lg leading-relaxed text-charcoal">
              {detail.longDescription}
            </p>
            <h2 className="mb-6 mt-12 text-center font-playfair text-2xl font-semibold text-charcoal">الفوائد</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {detail.benefits.map((b) => (
                <span key={b} className="rounded-full border border-gold/30 bg-gold/10 px-5 py-2 font-cairo text-sm text-charcoal">
                  {b}
                </span>
              ))}
            </div>
          </>
        )}
        <h2 className="mb-6 mt-12 text-center font-playfair text-2xl font-semibold text-charcoal">معرض الخدمة</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {service.items.map((item) => (
            <div key={item.name} className="relative aspect-square overflow-hidden rounded-2xl border border-gold/20">
              <Image src={item.image} alt={`${item.name} — ${service.title}`} fill className="object-cover" sizes="25vw" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal/70 to-transparent p-3">
                <p className="font-cairo text-sm text-white">{item.name}</p>
              </div>
            </div>
          ))}
        </div>
        {detail?.faq && detail.faq.length > 0 && (
          <div className="mx-auto mt-16 max-w-2xl">
            <h2 className="mb-6 text-center font-playfair text-2xl font-semibold text-charcoal">أسئلة شائعة</h2>
            <FaqAccordion items={detail.faq} />
          </div>
        )}
        <div className="mt-16 flex flex-wrap justify-center gap-4">
          <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-2">
            <MessageCircle className="h-4 w-4" />
            احجزي {service.title}
          </a>
          <Link href="/services" className="btn-outline">كل الخدمات</Link>
        </div>
      </div>
    </PageShell>
  );
}
