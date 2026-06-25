"use client";

import type { BlogPost } from "@/lib/blog";
import { BlogPostContent } from "./BlogPostContent";

interface ArticleTOCProps {
  post: BlogPost;
}

export function ArticleTOC({ post }: ArticleTOCProps) {
  const headings = post.blocks.filter((b) => b.type === "h2");

  if (headings.length < 2) return null;

  return (
    <nav
      aria-label="جدول المحتويات"
      className="rounded-2xl border border-gold/20 bg-white/70 p-5 shadow-glass backdrop-blur"
    >
      <p className="mb-3 font-playfair text-sm font-semibold text-gold">في هذا المقال</p>
      <ul className="space-y-2">
        {headings.map((h) => {
          if (h.type !== "h2") return null;
          const id = h.id ?? h.text;
          return (
            <li key={id}>
              <a
                href={`#${id}`}
                className="block font-cairo text-sm text-warm-gray transition-colors hover:text-gold"
              >
                {h.text}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export function ArticleBody({ post }: { post: BlogPost }) {
  return <BlogPostContent blocks={post.blocks} />;
}
