import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import type { LegalSection } from "@/lib/pages/legal";

export function LegalLayout({ sections }: { sections: LegalSection[] }) {
  return (
    <div className="mx-auto max-w-3xl space-y-10">
      {sections.map((section) => (
        <section key={section.title} className="rounded-3xl border border-gold/20 bg-white/70 p-6 shadow-glass backdrop-blur-md md:p-8">
          <h2 className="font-playfair text-xl font-semibold text-charcoal md:text-2xl">
            {section.title}
          </h2>
          <div className="mt-4 space-y-3 font-cairo text-sm leading-relaxed text-warm-gray md:text-base">
            {section.paragraphs.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
            {section.bullets && (
              <ul className="list-inside list-disc space-y-2 pr-2">
                {section.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            )}
          </div>
        </section>
      ))}
    </div>
  );
}

export function PageShell({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("min-h-screen bg-section-light", className)}>{children}</div>
  );
}
