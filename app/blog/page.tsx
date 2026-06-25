import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BookOpen, TrendingUp, Star, Flame } from "lucide-react";
import { BlogListingJsonLd } from "@/components/blog/BlogListingJsonLd";
import { BlogBreadcrumbs } from "@/components/blog/BlogBreadcrumbs";
import { MagazineCard } from "@/components/blog/MagazineCard";
import { BlogExplorer } from "@/components/blog/BlogExplorer";
import { BlogNewsletter } from "@/components/blog/BlogNewsletter";
import { BlogCategoryFilter } from "@/components/blog/BlogCategoryFilter";
import {
  getAllPosts,
  getFeaturedPost,
  getPopularPosts,
  getTrendingPosts,
  getLatestPosts,
  getEditorsPick,
} from "@/lib/blog";
import { buildBlogListingMetadata } from "@/lib/seo";

export const metadata: Metadata = buildBlogListingMetadata();

export default function BlogMagazinePage() {
  const featured = getFeaturedPost();
  const latest = getLatestPosts(6);
  const popular = getPopularPosts(4);
  const trending = getTrendingPosts(3);
  const editorsPick = getEditorsPick();
  const allPosts = getAllPosts();

  return (
    <>
      <BlogListingJsonLd />

      <div className="relative min-h-dvh bg-section-light pt-24 xs:pt-28">
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
          <div className="absolute -right-32 top-20 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
          <div className="absolute -left-24 bottom-40 h-80 w-80 rounded-full bg-champagne/60 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 xs:px-5 md:px-8 lg:px-12">
          <BlogBreadcrumbs items={[{ label: "الرئيسية", href: "/" }, { label: "مجلة الجمال" }]} />

          {/* Hero */}
          <header className="relative mb-16 overflow-hidden rounded-3xl border border-gold/25 shadow-luxury-gold">
            <div className="absolute inset-0">
              <Image
                src={featured.image}
                alt={featured.imageAlt}
                fill
                className="object-cover"
                priority
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-charcoal/75 via-charcoal/40 to-charcoal/20" />
            </div>
            <div className="relative px-4 py-12 xs:px-6 xs:py-16 md:px-12 md:py-24">
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-ivory/20 px-4 py-1.5 font-cairo text-xs text-ivory backdrop-blur">
                <BookOpen className="h-4 w-4 text-gold-light" />
                مجلة الجمال والعناية
              </span>
              <h1 className="max-w-3xl font-playfair text-3xl font-bold leading-tight text-ivory xs:text-4xl md:text-5xl lg:text-6xl">
                مجلة الجمال والعناية
              </h1>
              <p className="mt-5 max-w-2xl font-cairo text-base leading-relaxed text-ivory/90 md:text-xl">
                كل ما تحتاجينه للعناية بالشعر والبشرة والجمال بأحدث النصائح من خبراء
                الصالون.
              </p>
              <Link href={`/blog/${featured.slug}`} className="btn-primary mt-8 inline-flex text-sm">
                اقرئي المقال المميز
              </Link>
            </div>
          </header>

          {/* Featured */}
          <section className="mb-16" aria-labelledby="featured-heading">
            <div className="mb-6 flex items-center gap-2">
              <Star className="h-5 w-5 text-gold" />
              <h2 id="featured-heading" className="font-playfair text-2xl font-semibold text-charcoal">
                مقال مميز
              </h2>
            </div>
            <MagazineCard post={featured} featured />
          </section>

          {/* Editor's pick + Trending row */}
          <div className="mb-16 grid gap-8 lg:grid-cols-2">
            {editorsPick && (
              <section aria-labelledby="editors-pick">
                <div className="mb-4 flex items-center gap-2">
                  <BookOpen className="h-4 w-4 text-gold" />
                  <h2 id="editors-pick" className="font-playfair text-xl font-semibold text-charcoal">
                    اختيار المحرر
                  </h2>
                </div>
                <MagazineCard post={editorsPick} />
              </section>
            )}
            <section aria-labelledby="trending-heading">
              <div className="mb-4 flex items-center gap-2">
                <Flame className="h-4 w-4 text-gold" />
                <h2 id="trending-heading" className="font-playfair text-xl font-semibold text-charcoal">
                  الأكثر رواجاً
                </h2>
              </div>
              <div className="space-y-4">
                {trending.map((post, i) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="flex items-center gap-4 rounded-2xl border border-gold/15 bg-white/60 p-4 transition-all hover:border-gold/35 hover:shadow-luxury"
                  >
                    <span className="font-playfair text-2xl font-bold text-gold/40">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="font-cairo text-sm font-medium text-charcoal line-clamp-2">{post.title}</p>
                      <p className="mt-1 font-cairo text-xs text-warm-gray">{post.categoryLabel}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          </div>

          {/* Categories */}
          <section className="mb-12">
            <h2 className="mb-6 text-center font-playfair text-2xl font-semibold text-charcoal">
              التصنيفات
            </h2>
            <BlogCategoryFilter />
          </section>

          {/* Latest */}
          <section className="mb-16" aria-labelledby="latest-heading">
            <h2 id="latest-heading" className="mb-8 font-playfair text-2xl font-semibold text-charcoal">
              أحدث المقالات
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {latest.map((post, i) => (
                <MagazineCard key={post.slug} post={post} index={i} />
              ))}
            </div>
          </section>

          {/* Popular */}
          <section className="mb-16" aria-labelledby="popular-heading">
            <div className="mb-8 flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-gold" />
              <h2 id="popular-heading" className="font-playfair text-2xl font-semibold text-charcoal">
                الأكثر قراءة
              </h2>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {popular.map((post, i) => (
                <MagazineCard key={post.slug} post={post} index={i} />
              ))}
            </div>
          </section>

          {/* Search + all articles */}
          <section className="mb-16" aria-labelledby="all-articles">
            <h2 id="all-articles" className="mb-8 font-playfair text-2xl font-semibold text-charcoal">
              استكشفي كل المقالات
            </h2>
            <BlogExplorer initialPosts={allPosts} />
          </section>

          <BlogNewsletter />
        </div>

        <div className="h-20" />
      </div>
    </>
  );
}
