import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, Clock, User, Tag } from "lucide-react";
import { ArticleJsonLd } from "@/components/blog/ArticleJsonLd";
import { BlogBreadcrumbs } from "@/components/blog/BlogBreadcrumbs";
import { MagazineCard } from "@/components/blog/MagazineCard";
import { ArticleTOC, ArticleBody } from "@/components/blog/ArticleLayout";
import { ArticleShare, ArticleCTA } from "@/components/blog/ArticleShare";
import { ArticleFAQ } from "@/components/blog/ArticleFAQ";
import { ReadingProgress } from "@/components/blog/ReadingProgress";
import { BackToTop } from "@/components/blog/BackToTop";
import {
  getAllPosts,
  getPostBySlug,
  getRelatedPosts,
  formatBlogDate,
} from "@/lib/blog";
import { buildArticleMetadata } from "@/lib/seo";

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return buildArticleMetadata(post);
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(slug, 3);

  return (
    <>
      <ArticleJsonLd post={post} />
      <ReadingProgress />
      <BackToTop />

      <article className="relative min-h-screen bg-section-light pt-24 xs:pt-28 md:pt-32">
        <div className="mx-auto max-w-7xl px-4 xs:px-5 md:px-8 lg:px-12">
          <BlogBreadcrumbs
            items={[
              { label: "الرئيسية", href: "/" },
              { label: "مجلة الجمال", href: "/blog" },
              { label: post.title },
            ]}
          />

          <header className="mx-auto max-w-4xl text-center">
            <Link
              href={`/blog/category/${post.categorySlug}`}
              className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-gold/30 bg-gold/10 px-3 py-1 font-cairo text-xs text-gold"
            >
              <Tag className="h-3.5 w-3.5" />
              {post.categoryLabel}
            </Link>
            <h1 className="font-playfair text-2xl font-bold leading-tight text-charcoal xs:text-3xl md:text-4xl lg:text-5xl">
              {post.title}
            </h1>
            <p className="mt-5 font-cairo text-lg leading-relaxed text-warm-gray">{post.excerpt}</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 border-y border-gold/15 py-4 font-cairo text-sm text-warm-gray">
              <span className="flex items-center gap-1.5">
                <User className="h-4 w-4 text-gold" />
                {post.author}
              </span>
              <time dateTime={post.publishedAt} className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4 text-gold" />
                {formatBlogDate(post.publishedAt)}
              </time>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-gold" />
                {post.readTimeMinutes} دقائق قراءة
              </span>
            </div>
            <div className="mt-6 flex justify-center">
              <ArticleShare post={post} />
            </div>
          </header>

          <div className="relative mx-auto mt-10 max-w-5xl overflow-hidden rounded-3xl border border-gold/25 shadow-luxury-gold">
            <div className="relative aspect-[21/9]">
              <Image
                src={post.image}
                alt={post.imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 1024px"
                priority
              />
              <div className="image-overlay-soft absolute inset-0" />
            </div>
          </div>

          <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-10 lg:grid-cols-[240px_1fr]">
            <aside className="min-w-0 lg:sticky lg:top-28 lg:self-start">
              <div className="space-y-6">
                <ArticleTOC post={post} />
              </div>
            </aside>
            <div className="min-w-0">
              <ArticleBody post={post} />
              <ArticleFAQ post={post} />
              <div className="mt-12">
                <ArticleCTA post={post} />
              </div>
            </div>
          </div>

          {related.length > 0 && (
            <section className="mx-auto mt-20 max-w-6xl border-t border-gold/15 pt-16" aria-labelledby="related">
              <h2 id="related" className="mb-8 font-playfair text-2xl font-semibold text-charcoal">
                مقالات ذات صلة
              </h2>
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((p, i) => (
                  <MagazineCard key={p.slug} post={p} index={i} />
                ))}
              </div>
            </section>
          )}
        </div>
        <div className="h-24" />
      </article>
    </>
  );
}
