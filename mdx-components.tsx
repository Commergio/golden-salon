import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h2: ({ children }) => (
      <h2 className="scroll-mt-32 font-playfair text-2xl font-semibold text-charcoal md:text-3xl">
        {children}
      </h2>
    ),
    p: ({ children }) => (
      <p className="font-cairo text-base leading-[2] text-charcoal/90 md:text-lg">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="rounded-2xl border-r-4 border-gold bg-gold/5 px-6 py-5 font-playfair text-xl italic text-charcoal">
        {children}
      </blockquote>
    ),
    ...components,
  };
}
