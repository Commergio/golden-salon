export type BlogCategoryId =
  | "hair"
  | "skin"
  | "moroccan"
  | "massage"
  | "nails"
  | "beauty"
  | "offers"
  | "expert";

export type BlogBlock =
  | { type: "h2"; text: string; id?: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "quote"; text: string; author?: string }
  | { type: "gallery"; images: { src: string; alt: string }[] };

export type BlogFAQ = {
  question: string;
  answer: string;
};

export type BlogPostFlags = {
  featured?: boolean;
  trending?: boolean;
  editorsPick?: boolean;
  popular?: boolean;
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  category: BlogCategoryId;
  categoryLabel: string;
  categorySlug: string;
  author: string;
  authorRole: string;
  publishedAt: string;
  updatedAt: string;
  readTimeMinutes: number;
  image: string;
  imageAlt: string;
  views: number;
  blocks: BlogBlock[];
  faq: BlogFAQ[];
  mdxPath?: string;
} & BlogPostFlags;

export type BlogCategory = {
  id: BlogCategoryId;
  slug: string;
  label: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
};

export type BlogSort = "newest" | "oldest" | "popular";

export type ArticleSectionDef = {
  h2: string;
  paragraphs: string[];
  bullets?: string[];
};

export type ArticleDef = {
  slug: string;
  title: string;
  excerpt: string;
  metaDescription: string;
  keywords: string[];
  category: BlogCategoryId;
  image: string;
  imageAlt: string;
  publishedAt: string;
  sections: ArticleSectionDef[];
  faq: BlogFAQ[];
  quote?: string;
  views?: number;
} & BlogPostFlags;
