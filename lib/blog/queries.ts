import type { BlogPost, BlogCategoryId } from "./types";
import { BLOG_POSTS } from "./articles/registry";

function allPosts(): BlogPost[] {
  return [...BLOG_POSTS].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function getAllPosts(): BlogPost[] {
  return allPosts();
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return getAllPosts().find((p) => p.slug === slug);
}

export function getPostsByCategory(categoryId: BlogCategoryId): BlogPost[] {
  return getAllPosts().filter((p) => p.category === categoryId);
}

export function getPostsByCategorySlug(slug: string): BlogPost[] {
  return getAllPosts().filter((p) => p.categorySlug === slug);
}

export function getFeaturedPost(): BlogPost {
  return getAllPosts().find((p) => p.featured) ?? getAllPosts()[0];
}

export function getEditorsPick(): BlogPost | undefined {
  return getAllPosts().find((p) => p.editorsPick);
}

export function getTrendingPosts(limit = 4): BlogPost[] {
  return getAllPosts().filter((p) => p.trending).slice(0, limit);
}

export function getPopularPosts(limit = 6): BlogPost[] {
  return [...getAllPosts()]
    .sort((a, b) => b.views - a.views)
    .slice(0, limit);
}

export function getLatestPosts(limit = 9): BlogPost[] {
  return getAllPosts().slice(0, limit);
}

export function getRelatedPosts(slug: string, limit = 3): BlogPost[] {
  const current = getPostBySlug(slug);
  if (!current) return getLatestPosts(limit);
  return getAllPosts()
    .filter((p) => p.slug !== slug && p.category === current.category)
    .slice(0, limit);
}

export function searchPosts(query: string): BlogPost[] {
  const q = query.trim().toLowerCase();
  if (!q) return getAllPosts();

  return getAllPosts().filter((post) => {
    const haystack = [
      post.title,
      post.excerpt,
      post.metaDescription,
      post.categoryLabel,
      post.author,
      ...post.keywords,
      ...post.blocks.map((b) => ("text" in b ? b.text : "items" in b ? b.items.join(" ") : "")),
    ]
      .join(" ")
      .toLowerCase();
    return haystack.includes(q);
  });
}

export function sortPosts(
  posts: BlogPost[],
  sort: "newest" | "oldest" | "popular"
): BlogPost[] {
  const copy = [...posts];
  if (sort === "oldest") {
    return copy.sort(
      (a, b) => new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime()
    );
  }
  if (sort === "popular") {
    return copy.sort((a, b) => b.views - a.views);
  }
  return copy.sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

const blogDateFormatter = new Intl.DateTimeFormat("ar-SA-u-ca-gregory", {
  year: "numeric",
  month: "long",
  day: "numeric",
  timeZone: "UTC",
});

export function formatBlogDate(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  return blogDateFormatter.format(new Date(Date.UTC(y, m - 1, d)));
}

export function getPostPlainText(post: BlogPost): string {
  return post.blocks
    .map((b) => {
      if (b.type === "ul") return b.items.join(" ");
      if (b.type === "gallery") return "";
      return b.text;
    })
    .join("\n");
}

export function getTableOfContents(post: BlogPost) {
  return post.blocks
    .filter((b): b is Extract<typeof b, { type: "h2" }> => b.type === "h2")
    .map((b) => ({ id: b.id ?? b.text, title: b.text }));
}
