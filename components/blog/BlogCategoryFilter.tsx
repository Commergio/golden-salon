import Link from "next/link";
import { BLOG_CATEGORY_LIST } from "@/lib/blog";

export function BlogCategoryFilter({ activeSlug = null }: { activeSlug?: string | null }) {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      <Link
        href="/blog"
        className={`rounded-full border px-4 py-2 font-cairo text-sm transition-all ${
          !activeSlug
            ? "border-gold bg-gold text-white shadow-luxury-gold"
            : "border-gold/25 bg-white/70 text-charcoal hover:border-gold/45"
        }`}
      >
        الكل
      </Link>
      {BLOG_CATEGORY_LIST.map((cat) => (
        <Link
          key={cat.id}
          href={`/blog/category/${cat.slug}`}
          className={`rounded-full border px-4 py-2 font-cairo text-sm transition-all ${
            activeSlug === cat.slug
              ? "border-gold bg-gold text-white shadow-luxury-gold"
              : "border-gold/25 bg-white/70 text-charcoal hover:border-gold/45"
          }`}
        >
          {cat.label}
        </Link>
      ))}
    </div>
  );
}
