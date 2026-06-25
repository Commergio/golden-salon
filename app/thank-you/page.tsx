import type { Metadata } from "next";
import Link from "next/link";
import { MessageCircle, Home, Sparkles } from "lucide-react";
import { PageShell } from "@/components/pages/LegalLayout";
import { SITE } from "@/lib/data";
import { buildSubPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildSubPageMetadata(
  "/thank-you",
  "شكراً لكِ",
  `شكراً لاختياركِ ${SITE.name} — سنتواصل معكِ قريباً.`,
  { noIndex: true }
);

export default function ThankYouPage() {
  return (
    <PageShell>
      <div className="flex min-h-[80vh] flex-col items-center justify-center px-5 text-center">
        <div className="rounded-full border border-gold/30 bg-white/80 p-6 shadow-luxury-gold backdrop-blur-md">
          <Sparkles className="mx-auto h-12 w-12 text-gold" />
        </div>
        <h1 className="mt-8 font-playfair text-3xl font-bold text-charcoal md:text-4xl">
          شكراً لاختياركِ {SITE.name} 🤍
        </h1>
        <p className="mt-4 max-w-md font-cairo text-lg text-warm-gray">
          We will contact you shortly.
        </p>
        <p className="mt-2 font-cairo text-sm text-warm-gray">
          سنتواصل معكِ في أقرب وقت لتأكيد موعدكِ.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link href="/" className="btn-primary inline-flex items-center gap-2">
            <Home className="h-4 w-4" />
            العودة للرئيسية
          </Link>
          <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-outline inline-flex items-center gap-2">
            <MessageCircle className="h-4 w-4" />
            واتساب
          </a>
        </div>
      </div>
    </PageShell>
  );
}
