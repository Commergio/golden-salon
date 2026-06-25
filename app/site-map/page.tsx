import type { Metadata } from "next";
import Link from "next/link";
import { SERVICES, SITE } from "@/lib/data";
import { FOOTER_SECTIONS, PRIMARY_NAV } from "@/lib/pages/routes";
import { getAllPosts, BLOG_CATEGORY_LIST } from "@/lib/blog";
import { PageHero } from "@/components/pages/PageHero";
import { PageBreadcrumbs } from "@/components/pages/PageBreadcrumbs";
import { PageJsonLd } from "@/components/pages/PageJsonLd";
import { PageShell } from "@/components/pages/LegalLayout";
import { buildSubPageMetadata, buildBreadcrumbJsonLd, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = buildSubPageMetadata(
  "/site-map",
  "خريطة الموقع",
  `خريطة موقع ${SITE.name} — كل الصفحات والخدمات والمقالات.`
);

export default function SiteMapPage() {
  const posts = getAllPosts();

  const sections = [
    { title: "الصفحات الرئيسية", links: PRIMARY_NAV },
    { title: FOOTER_SECTIONS.pages.label, links: [...FOOTER_SECTIONS.pages.links] },
    { title: FOOTER_SECTIONS.support.label, links: [...FOOTER_SECTIONS.support.links] },
    { title: FOOTER_SECTIONS.legal.label, links: [...FOOTER_SECTIONS.legal.links] },
    {
      title: "الخدمات",
      links: SERVICES.map((s) => ({ href: `/services/${s.id}`, label: s.title })),
    },
    {
      title: "تصنيفات المدونة",
      links: BLOG_CATEGORY_LIST.map((c) => ({ href: `/blog/category/${c.slug}`, label: c.label })),
    },
  ];

  return (
    <PageShell>
      <PageJsonLd
        data={buildBreadcrumbJsonLd([
          { name: "الرئيسية", url: SITE_URL },
          { name: "خريطة الموقع", url: `${SITE_URL}/site-map` },
        ])}
      />
      <PageHero title="خريطة الموقع" subtitle={`دليل شامل لموقع ${SITE.name}`} />
      <div className="section-padding mx-auto max-w-7xl">
        <PageBreadcrumbs items={[{ label: "الرئيسية", href: "/" }, { label: "خريطة الموقع" }]} />
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {sections.map((section) => (
            <div key={section.title} className="rounded-2xl border border-gold/20 bg-white/70 p-6 shadow-glass">
              <h2 className="mb-4 font-playfair text-lg font-semibold text-gold">{section.title}</h2>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="font-cairo text-sm text-warm-gray transition-colors hover:text-gold">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="rounded-2xl border border-gold/20 bg-white/70 p-6 shadow-glass md:col-span-2 lg:col-span-3">
            <h2 className="mb-4 font-playfair text-lg font-semibold text-gold">مقالات المدونة</h2>
            <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <li key={post.slug}>
                  <Link href={`/blog/${post.slug}`} className="font-cairo text-sm text-warm-gray transition-colors hover:text-gold">
                    {post.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
