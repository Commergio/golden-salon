import type { MetadataRoute } from "next";
import { SITE_URL, OG_IMAGE } from "@/lib/seo";
import { getAllPosts, BLOG_CATEGORY_LIST } from "@/lib/blog";
import { SERVICES } from "@/lib/data";
import { ALL_STATIC_PAGES } from "@/lib/pages/routes";

const STATIC_PATHS = [
  ...new Set([
    ...ALL_STATIC_PAGES.map((p) => p.href),
    "/thank-you",
  ]),
].filter((href) => href.startsWith("/") && href !== "/");

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();

  const staticPages: MetadataRoute.Sitemap = STATIC_PATHS.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: path.includes("blog") ? ("daily" as const) : ("weekly" as const),
    priority: ["/contact", "/booking", "/services", "/about", "/faq"].includes(path) ? 0.9 : 0.75,
  }));

  const servicePages: MetadataRoute.Sitemap = SERVICES.map((s) => ({
    url: `${SITE_URL}/services/${s.id}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  const blogEntries: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.95,
    },
    {
      url: `${SITE_URL}/blog/rss.xml`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.5,
    },
    ...BLOG_CATEGORY_LIST.map((cat) => ({
      url: `${SITE_URL}/blog/category/${cat.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.85,
    })),
    ...posts.map((post) => ({
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified: new Date(post.updatedAt),
      changeFrequency: "monthly" as const,
      priority: 0.8,
      images: [post.image.startsWith("http") ? post.image : `${SITE_URL}${post.image}`],
    })),
  ];

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
      images: [`${SITE_URL}${OG_IMAGE.url}`],
    },
    ...staticPages,
    ...servicePages,
    ...blogEntries,
  ];
}
