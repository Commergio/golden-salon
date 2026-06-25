import type { Metadata } from "next";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { PageHero } from "@/components/pages/PageHero";
import { PageBreadcrumbs } from "@/components/pages/PageBreadcrumbs";
import { PageJsonLd } from "@/components/pages/PageJsonLd";
import { PageShell } from "@/components/pages/LegalLayout";
import { FaqAccordion } from "@/components/pages/FaqAccordion";
import { FULL_FAQ } from "@/lib/pages/content";
import { SITE } from "@/lib/data";
import { buildSubPageMetadata, buildBreadcrumbJsonLd, buildFaqJsonLd, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = buildSubPageMetadata(
  "/faq",
  "الأسئلة الشائعة",
  `إجابات على أسئلتكِ حول ${SITE.name} — الحجز، المواعيد، الخدمات، والدفع في الرياض.`
);

export default function FaqPage() {
  return (
    <PageShell>
      <PageJsonLd
        data={[
          buildBreadcrumbJsonLd([
            { name: "الرئيسية", url: SITE_URL },
            { name: "الأسئلة الشائعة", url: `${SITE_URL}/faq` },
          ]),
          buildFaqJsonLd(FULL_FAQ),
        ]}
      />
      <PageHero
        badge="صالون اللمسة الذهبية ✨"
        title="الأسئلة الشائعة"
        subtitle="كل ما تحتاجين معرفته قبل زيارتنا"
      />
      <div className="section-padding mx-auto max-w-3xl">
        <PageBreadcrumbs items={[{ label: "الرئيسية", href: "/" }, { label: "الأسئلة الشائعة" }]} />
        <FaqAccordion items={FULL_FAQ} />
        <div className="mt-12 rounded-3xl border border-gold/25 bg-gradient-to-br from-gold/10 to-ivory p-8 text-center">
          <p className="font-playfair text-xl text-charcoal">لم تجدي إجابتكِ؟</p>
          <p className="mt-2 font-cairo text-sm text-warm-gray">فريقنا جاهز لمساعدتكِ</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="btn-outline text-sm">تواصل معنا</Link>
            <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-2 text-sm">
              <MessageCircle className="h-4 w-4" />
              واتساب
            </a>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
