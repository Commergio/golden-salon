import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogBreadcrumbs } from "@/components/blog/BlogBreadcrumbs";
import { BlogExplorer } from "@/components/blog/BlogExplorer";
import { BLOG_CATEGORY_LIST, getCategoryBySlug, getPostsByCategorySlug } from "@/lib/blog";
import { SITE_URL, buildPageMetadata } from "@/lib/seo";

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_CATEGORY_LIST.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return {};
  return buildPageMetadata({
    title: category.seoTitle,
    description: category.seoDescription,
    alternates: { canonical: `${SITE_URL}/blog/category/${slug}` },
    openGraph: {
      url: `${SITE_URL}/blog/category/${slug}`,
      title: category.seoTitle,
      description: category.seoDescription,
    },
  });
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  const posts = getPostsByCategorySlug(slug);

  return (
    <div className="section-padding relative min-h-screen bg-section-light pt-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <BlogBreadcrumbs
          items={[
            { label: "الرئيسية", href: "/" },
            { label: "مجلة الجمال", href: "/blog" },
            { label: category.label },
          ]}
        />
        <header className="mb-12 text-center">
          <h1 className="font-playfair text-4xl font-bold text-charcoal">{category.label}</h1>
          <p className="mx-auto mt-4 max-w-xl font-cairo text-warm-gray">{category.description}</p>
        </header>
        <BlogExplorer initialPosts={posts} category={category.id} />
      </div>
    </div>
  );
}
