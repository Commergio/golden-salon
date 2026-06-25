import { buildBlogListingJsonLd } from "@/lib/seo";

export function BlogListingJsonLd() {
  const schema = buildBlogListingJsonLd();
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
