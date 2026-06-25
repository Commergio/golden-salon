import type { Metadata } from "next";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { PageHero } from "@/components/pages/PageHero";
import { PageBreadcrumbs } from "@/components/pages/PageBreadcrumbs";
import { PageJsonLd } from "@/components/pages/PageJsonLd";
import { PageShell } from "@/components/pages/LegalLayout";
import {
  ContactCards,
  SocialContactCards,
  ContactFormPlaceholder,
} from "@/components/pages/ContactSections";
import { FaqAccordion } from "@/components/pages/FaqAccordion";
import { SITE } from "@/lib/data";
import { FULL_FAQ } from "@/lib/pages/content";
import { buildSubPageMetadata, buildBreadcrumbJsonLd, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = buildSubPageMetadata(
  "/contact",
  "تواصل معنا",
  `تواصلي مع ${SITE.name} — هاتف، واتساب، إنستغرام، تيك توك، سناب شات. الرياض، السعودية.`
);

export default function ContactPage() {
  return (
    <PageShell>
      <PageJsonLd
        data={buildBreadcrumbJsonLd([
          { name: "الرئيسية", url: SITE_URL },
          { name: "تواصل معنا", url: `${SITE_URL}/contact` },
        ])}
      />
      <PageHero
        badge="صالون اللمسة الذهبية ✨"
        title="تواصل معنا"
        subtitle="يسعدنا استقبالكِ والرد على استفساراتكِ — اختاري الطريقة الأنسب لكِ"
      />
      <div className="section-padding mx-auto max-w-7xl">
        <PageBreadcrumbs items={[{ label: "الرئيسية", href: "/" }, { label: "تواصل معنا" }]} />
        <ContactCards />
        <h2 className="mb-6 mt-16 text-center font-playfair text-2xl font-semibold text-charcoal">
          شبكات التواصل
        </h2>
        <SocialContactCards />
        <div className="mt-16">
          <ContactFormPlaceholder />
        </div>
        <div className="mt-16 overflow-hidden rounded-3xl border border-gold/25 shadow-luxury-gold">
          <iframe
            title={`موقع ${SITE.name}`}
            src={SITE.mapEmbed}
            className="h-64 w-full xs:h-72 md:h-96"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="mt-16">
          <h2 className="mb-6 text-center font-playfair text-2xl font-semibold text-charcoal">
            أسئلة سريعة
          </h2>
          <div className="mx-auto max-w-2xl">
            <FaqAccordion items={FULL_FAQ.slice(0, 4)} />
          </div>
          <p className="mt-6 text-center">
            <Link href="/faq" className="font-cairo text-sm text-gold hover:underline">
              عرض كل الأسئلة الشائعة
            </Link>
          </p>
        </div>
        <div className="mt-16 text-center">
          <a
            href={SITE.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2 px-10 py-4 text-base"
          >
            <MessageCircle className="h-5 w-5" />
            راسلينا على واتساب
          </a>
        </div>
      </div>
    </PageShell>
  );
}
