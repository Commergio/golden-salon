import Link from "next/link";
import { ChevronLeft } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export function BlogBreadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="مسار التنقل" className="mb-8">
      <ol className="flex flex-wrap items-center gap-2 font-cairo text-sm text-warm-gray">
        {items.map((item, i) => (
          <li key={item.label} className="flex items-center gap-2">
            {i > 0 && <ChevronLeft className="h-3.5 w-3.5 text-gold/50" aria-hidden />}
            {item.href ? (
              <Link href={item.href} className="transition-colors hover:text-gold">
                {item.label}
              </Link>
            ) : (
              <span className="text-charcoal" aria-current="page">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
