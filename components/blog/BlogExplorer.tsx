"use client";

import { useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import type { BlogPost, BlogCategoryId, BlogSort } from "@/lib/blog";
import { searchPosts, sortPosts } from "@/lib/blog";
import { MagazineCard } from "./MagazineCard";

interface BlogExplorerProps {
  initialPosts: BlogPost[];
  category?: BlogCategoryId | null;
}

export function BlogExplorer({ initialPosts, category = null }: BlogExplorerProps) {
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<BlogSort>("newest");

  const results = useMemo(() => {
    let posts = query ? searchPosts(query) : initialPosts;
    if (category) posts = posts.filter((p) => p.category === category);
    return sortPosts(posts, sort);
  }, [query, sort, initialPosts, category]);

  return (
    <div>
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center">
        <div className="relative flex-1">
          <Search className="absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gold" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="ابحثي في المقالات — عنوان، فئة، كلمات مفتاحية..."
            className="w-full rounded-full border border-gold/25 bg-white/80 py-3.5 pl-12 pr-12 font-cairo text-sm text-charcoal shadow-sm backdrop-blur transition-all placeholder:text-warm-gray/60 focus:border-gold/50 focus:outline-none focus:ring-2 focus:ring-gold/20"
            aria-label="بحث في المدونة"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-warm-gray hover:text-gold"
              aria-label="مسح البحث"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value as BlogSort)}
          className="rounded-full border border-gold/25 bg-white/80 px-5 py-3.5 font-cairo text-sm text-charcoal focus:border-gold/50 focus:outline-none"
          aria-label="ترتيب المقالات"
        >
          <option value="newest">الأحدث</option>
          <option value="oldest">الأقدم</option>
          <option value="popular">الأكثر شعبية</option>
        </select>
      </div>

      {query && (
        <p className="mb-6 font-cairo text-sm text-warm-gray">
          {results.length} نتيجة لـ «{query}»
        </p>
      )}

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {results.map((post, i) => (
          <MagazineCard key={post.slug} post={post} index={i} />
        ))}
      </div>

      {results.length === 0 && (
        <p className="py-20 text-center font-cairo text-warm-gray">
          لم نجد مقالات مطابقة — جرّبي كلمات أخرى.
        </p>
      )}
    </div>
  );
}
