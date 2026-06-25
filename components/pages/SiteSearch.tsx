"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Search, FileText, Sparkles, Layout } from "lucide-react";
import { getAllPosts } from "@/lib/blog";
import { SERVICES, SITE } from "@/lib/data";
import { ALL_STATIC_PAGES } from "@/lib/pages/routes";

export function SiteSearch({ initialQuery = "" }: { initialQuery?: string }) {
  const [query, setQuery] = useState(initialQuery);
  const posts = useMemo(() => getAllPosts(), []);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return { pages: [], services: [], articles: [] };

    const pages = ALL_STATIC_PAGES.filter(
      (p) => p.label.toLowerCase().includes(q) || p.href.includes(q)
    );
    const services = SERVICES.filter(
      (s) => s.title.includes(q) || s.description.includes(q)
    );
    const articles = posts.filter(
      (p) =>
        p.title.includes(q) ||
        p.excerpt.includes(q) ||
        p.keywords.some((k) => k.includes(q))
    );

    return { pages, services, articles };
  }, [query, posts]);

  return (
    <div className="mx-auto max-w-3xl">
      <div className="relative">
        <Search className="absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gold" />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={`ابحثي في ${SITE.name}...`}
          className="w-full rounded-2xl border border-gold/25 bg-white/80 py-4 pr-12 pl-5 font-cairo text-charcoal shadow-glass backdrop-blur-md transition-all focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
          aria-label="بحث في الموقع"
        />
      </div>

      {query.trim() && (
        <div className="mt-10 space-y-8">
          {results.articles.length > 0 && (
            <section>
              <h2 className="mb-4 flex items-center gap-2 font-playfair text-lg text-gold">
                <FileText className="h-5 w-5" />
                المقالات ({results.articles.length})
              </h2>
              <ul className="space-y-2">
                {results.articles.slice(0, 8).map((a) => (
                  <li key={a.slug}>
                    <Link href={`/blog/${a.slug}`} className="block rounded-xl border border-gold/15 bg-white/60 px-4 py-3 font-cairo text-sm text-charcoal transition-colors hover:border-gold hover:text-gold">
                      {a.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}
          {results.services.length > 0 && (
            <section>
              <h2 className="mb-4 flex items-center gap-2 font-playfair text-lg text-gold">
                <Sparkles className="h-5 w-5" />
                الخدمات ({results.services.length})
              </h2>
              <ul className="space-y-2">
                {results.services.map((s) => (
                  <li key={s.id}>
                    <Link href={`/services/${s.id}`} className="block rounded-xl border border-gold/15 bg-white/60 px-4 py-3 font-cairo text-sm text-charcoal transition-colors hover:border-gold hover:text-gold">
                      {s.title} — {s.description.slice(0, 60)}...
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}
          {results.pages.length > 0 && (
            <section>
              <h2 className="mb-4 flex items-center gap-2 font-playfair text-lg text-gold">
                <Layout className="h-5 w-5" />
                الصفحات ({results.pages.length})
              </h2>
              <ul className="space-y-2">
                {results.pages.map((p) => (
                  <li key={p.href}>
                    <Link href={p.href} className="block rounded-xl border border-gold/15 bg-white/60 px-4 py-3 font-cairo text-sm text-charcoal transition-colors hover:border-gold hover:text-gold">
                      {p.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}
          {!results.articles.length && !results.services.length && !results.pages.length && (
            <p className="text-center font-cairo text-warm-gray">لم نجد نتائج لـ «{query}»</p>
          )}
        </div>
      )}
    </div>
  );
}
