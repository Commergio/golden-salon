import type { BlogPost } from "@/lib/blog";

export function ArticleFAQ({ post }: { post: BlogPost }) {
  if (!post.faq.length) return null;

  return (
    <section className="mt-12" aria-labelledby="article-faq">
      <h2 id="article-faq" className="mb-6 font-playfair text-2xl font-semibold text-charcoal">
        أسئلة شائعة
      </h2>
      <div className="space-y-3">
        {post.faq.map((item) => (
          <details
            key={item.question}
            className="group rounded-2xl border border-gold/20 bg-white/60 p-5 backdrop-blur transition-colors open:border-gold/35 open:bg-gold/5"
          >
            <summary className="cursor-pointer list-none font-cairo font-medium text-charcoal marker:content-none">
              {item.question}
            </summary>
            <p className="mt-3 font-cairo text-sm leading-relaxed text-warm-gray">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
