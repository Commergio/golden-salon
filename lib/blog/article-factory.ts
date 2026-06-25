import type { ArticleDef, BlogBlock, BlogPost } from "./types";
import { getCategoryById } from "./categories";

const SALON = "صالون اللمسة الذهبية";
const AUTHOR = "أمال غطاس";
const AUTHOR_ROLE = "متخصصة ترتمنت الشعر والبشرة";

function slugifyHeading(text: string): string {
  return text
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\u0600-\u06FFa-z0-9-]/gi, "")
    .slice(0, 48);
}

function estimateReadTime(blocks: BlogBlock[]): number {
  const words = blocks
    .map((b) => {
      if (b.type === "ul") return b.items.join(" ");
      if (b.type === "gallery") return "";
      return b.text;
    })
    .join(" ")
    .split(/\s+/).length;
  return Math.max(4, Math.ceil(words / 180));
}

export function createArticle(def: ArticleDef): BlogPost {
  const category = getCategoryById(def.category);
  const blocks: BlogBlock[] = [];

  if (def.quote) {
    blocks.push({ type: "quote", text: def.quote, author: AUTHOR });
  }

  for (const section of def.sections) {
    blocks.push({ type: "h2", text: section.h2, id: slugifyHeading(section.h2) });
    for (const p of section.paragraphs) {
      blocks.push({ type: "p", text: p });
    }
    if (section.bullets?.length) {
      blocks.push({ type: "ul", items: section.bullets });
    }
  }

  blocks.push({
    type: "p",
    text: `في ${SALON} بالرياض، نُخصّص كل جلسة حسب احتياجكِ الفعلي — احجزي عبر واتساب واستشيري خبيراتنا قبل اختيار الخدمة الأنسب لكِ.`,
  });

  const readTimeMinutes = estimateReadTime(blocks);

  return {
    slug: def.slug,
    title: def.title,
    excerpt: def.excerpt,
    metaTitle: `${def.title} | ${SALON}`,
    metaDescription: def.metaDescription,
    keywords: def.keywords,
    category: def.category,
    categoryLabel: category.label,
    categorySlug: category.slug,
    author: AUTHOR,
    authorRole: AUTHOR_ROLE,
    publishedAt: def.publishedAt,
    updatedAt: def.publishedAt,
    readTimeMinutes,
    image: def.image,
    imageAlt: def.imageAlt,
    views: def.views ?? 1200 + def.slug.length * 37,
    blocks,
    faq: def.faq,
    featured: def.featured,
    trending: def.trending,
    editorsPick: def.editorsPick,
    popular: def.popular,
  };
}
