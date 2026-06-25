import Link from "next/link";
import { ArrowLeft, BookOpen } from "lucide-react";
import { MagazineCard } from "@/components/blog/MagazineCard";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/data";
import { getLatestPosts } from "@/lib/blog";

export function BlogPreview() {
  const posts = getLatestPosts(3);

  return (
    <section id="blog" className="section-padding relative bg-champagne/25">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="mb-3 inline-flex items-center gap-2 font-cairo text-xs text-gold">
              <BookOpen className="h-4 w-4" />
              مجلة الجمال
            </span>
            <h2 className="heading-luxury">أحدث المقالات والنصائح</h2>
            <p className="subheading-luxury mt-3 max-w-xl text-start">
              مجلة جمال فاخرة — شعر، بشرة، سبا، وأظافر من خبيرات {SITE.name}
            </p>
          </div>
          <Link href="/blog" className="btn-outline inline-flex items-center gap-2 text-sm">
            مجلة الجمال
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {posts.map((post, i) => (
            <MagazineCard key={post.slug} post={post} index={i} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button href="/blog" variant="outline">
            تصفّحي المجلة كاملة
          </Button>
        </div>
      </div>
    </section>
  );
}
