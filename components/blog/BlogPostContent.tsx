import type { BlogBlock } from "@/lib/blog";

export function BlogPostContent({ blocks }: { blocks: BlogBlock[] }) {
  return (
    <div className="article-prose space-y-7">
      {blocks.map((block, i) => {
        if (block.type === "h2") {
          const id = block.id ?? block.text.replace(/\s+/g, "-").slice(0, 48);
          return (
            <h2
              key={i}
              id={id}
              className="scroll-mt-32 font-playfair text-2xl font-semibold text-charcoal md:text-3xl"
            >
              {block.text}
            </h2>
          );
        }
        if (block.type === "quote") {
          return (
            <blockquote
              key={i}
              className="relative rounded-2xl border-r-4 border-gold bg-gold/5 px-6 py-5 font-playfair text-xl italic leading-relaxed text-charcoal"
            >
              «{block.text}»
              {block.author && (
                <footer className="mt-3 font-cairo text-sm not-italic text-gold">— {block.author}</footer>
              )}
            </blockquote>
          );
        }
        if (block.type === "p") {
          return (
            <p key={i} className="font-cairo text-base leading-[2] text-charcoal/90 md:text-lg md:leading-[2.1]">
              {block.text}
            </p>
          );
        }
        if (block.type === "gallery") {
          return (
            <div key={i} className="grid gap-4 sm:grid-cols-2">
              {block.images.map((img) => (
                <figure key={img.src} className="overflow-hidden rounded-2xl border border-gold/15">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={img.src} alt={img.alt} className="h-48 w-full object-cover" loading="lazy" />
                  <figcaption className="px-3 py-2 font-cairo text-xs text-warm-gray">{img.alt}</figcaption>
                </figure>
              ))}
            </div>
          );
        }
        return (
          <ul key={i} className="space-y-3 font-cairo text-base leading-relaxed text-charcoal/90 md:text-lg">
            {block.items.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        );
      })}
    </div>
  );
}
