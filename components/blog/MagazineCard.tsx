"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, User, ArrowLeft, Sparkles } from "lucide-react";
import type { BlogPost } from "@/lib/blog";
import { formatBlogDate } from "@/lib/blog";

interface MagazineCardProps {
  post: BlogPost;
  featured?: boolean;
  index?: number;
}

export function MagazineCard({ post, featured = false, index = 0 }: MagazineCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.06, duration: 0.6 }}
      className={`group relative overflow-hidden rounded-3xl border border-gold/20 bg-white/70 shadow-glass backdrop-blur transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/40 hover:shadow-luxury-gold ${
        featured ? "lg:grid lg:grid-cols-2" : ""
      }`}
    >
      <Link
        href={`/blog/${post.slug}`}
        className={`relative block overflow-hidden ${featured ? "min-h-[280px] lg:min-h-full" : "aspect-[4/3]"}`}
      >
        <Image
          src={post.image}
          alt={post.imageAlt}
          fill
          className="rounded-t-3xl object-cover transition-transform duration-700 group-hover:scale-105 lg:rounded-r-none lg:rounded-l-3xl"
          sizes={featured ? "(max-width: 1024px) 100vw, 50vw" : "(max-width: 768px) 100vw, 33vw"}
        />
        <div className="image-overlay-soft absolute inset-0 opacity-80 transition-opacity group-hover:opacity-100" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

        <span className="absolute right-4 top-4 rounded-full border border-gold/35 bg-ivory/90 px-3 py-1 font-cairo text-xs text-gold shadow-sm backdrop-blur">
          {post.categoryLabel}
        </span>

        {post.trending && (
          <span className="absolute left-4 top-4 flex items-center gap-1 rounded-full bg-gold px-2.5 py-1 font-cairo text-[10px] text-white">
            <Sparkles className="h-3 w-3" /> رائج
          </span>
        )}
      </Link>

      <div className={`flex flex-col p-6 ${featured ? "justify-center lg:p-10" : ""}`}>
        <div className="mb-3 flex flex-wrap items-center gap-3 font-cairo text-xs text-warm-gray">
          <time dateTime={post.publishedAt}>{formatBlogDate(post.publishedAt)}</time>
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5 text-gold" />
            {post.readTimeMinutes} د
          </span>
        </div>

        <h2 className={`font-playfair font-semibold leading-snug text-charcoal ${featured ? "text-2xl md:text-3xl" : "text-xl"}`}>
          <Link href={`/blog/${post.slug}`} className="transition-colors hover:text-gold">
            {post.title}
          </Link>
        </h2>

        <p className={`mt-3 font-cairo leading-relaxed text-warm-gray ${featured ? "text-base" : "text-sm line-clamp-3"}`}>
          {post.excerpt}
        </p>

        <div className="mt-5 flex items-center justify-between gap-3">
          <span className="flex items-center gap-1.5 font-cairo text-xs text-warm-gray">
            <User className="h-3.5 w-3.5 text-gold" />
            {post.author}
          </span>
          <Link
            href={`/blog/${post.slug}`}
            className="inline-flex items-center gap-1 font-cairo text-sm text-gold transition-all group-hover:gap-2"
          >
            اقرئي
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
