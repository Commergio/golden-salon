"use client";

import Link from "next/link";
import { MessageCircle, Link2, Share2, Sparkles } from "lucide-react";
import { SITE } from "@/lib/data";
import type { BlogPost } from "@/lib/blog";
import { CATEGORY_SERVICE_LINKS } from "@/lib/internal-links";

export function ArticleShare({ post }: { post: BlogPost }) {
  const url = typeof window !== "undefined" ? `${window.location.origin}/blog/${post.slug}` : "";

  const share = async () => {
    if (navigator.share) {
      await navigator.share({ title: post.title, text: post.excerpt, url });
    } else if (url) {
      await navigator.clipboard.writeText(url);
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="font-cairo text-xs text-warm-gray">شاركي:</span>
      <button
        type="button"
        onClick={share}
        className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/25 bg-white/80 text-gold transition-colors hover:bg-gold/10"
        aria-label="مشاركة المقال"
      >
        <Share2 className="h-4 w-4" />
      </button>
      <a
        href={`https://wa.me/?text=${encodeURIComponent(`${post.title} ${url}`)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/25 bg-white/80 text-gold transition-colors hover:bg-gold/10"
        aria-label="مشاركة عبر واتساب"
      >
        <MessageCircle className="h-4 w-4" />
      </a>
      <button
        type="button"
        onClick={() => url && navigator.clipboard.writeText(url)}
        className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/25 bg-white/80 text-gold transition-colors hover:bg-gold/10"
        aria-label="نسخ الرابط"
      >
        <Link2 className="h-4 w-4" />
      </button>
    </div>
  );
}

export function ArticleCTA({ post }: { post?: BlogPost }) {
  const serviceLink = post ? CATEGORY_SERVICE_LINKS[post.category] : null;

  return (
    <aside className="relative overflow-hidden rounded-3xl border border-gold/30 bg-gradient-to-br from-gold/15 via-ivory to-champagne/50 p-8 text-center shadow-luxury-gold md:p-10">
      <p className="font-playfair text-2xl font-semibold text-charcoal md:text-3xl">
        ✨ هل ترغبين في تطبيق هذه النصائح على يد مختصات؟
      </p>
      <p className="mx-auto mt-3 max-w-lg font-cairo text-sm text-warm-gray">
        احجزي موعدكِ في {SITE.name} — خبيرات ينتظرنكِ في الرياض.
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm">
          احجزي موعدكِ الآن
        </a>
        {serviceLink && (
          <Link href={serviceLink.href} className="btn-outline inline-flex items-center gap-2 text-sm">
            <Sparkles className="h-4 w-4" />
            {serviceLink.label}
          </Link>
        )}
        <a
          href={SITE.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline inline-flex items-center gap-2 text-sm"
        >
          <MessageCircle className="h-4 w-4" />
          واتساب
        </a>
      </div>
    </aside>
  );
}
