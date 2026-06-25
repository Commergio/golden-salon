import type { BlogCategoryId } from "@/lib/blog/types";

/** Maps blog categories to homepage service anchors for internal linking. */
export const CATEGORY_SERVICE_LINKS: Record<
  BlogCategoryId,
  { label: string; href: string }
> = {
  hair: { label: "خدمات الشعر", href: "/#services" },
  skin: { label: "عناية البشرة", href: "/#services" },
  moroccan: { label: "الحمام المغربي", href: "/#services" },
  massage: { label: "جلسات المساج", href: "/#services" },
  nails: { label: "عناية الأظافر", href: "/#services" },
  beauty: { label: "خدمات التجميل", href: "/#services" },
  offers: { label: "عروض الصالون", href: "/#offers" },
  expert: { label: "عن أمال غطاس", href: "/#about" },
};

export const FOOTER_QUICK_LINKS = [
  { label: "احجزي الآن", href: "contact" as const, external: false },
  { label: "مجلة الجمال", href: "/blog", external: false },
  { label: "العروض الحصرية", href: "offers" as const, external: false },
  { label: "موقع الصالون", href: "location" as const, external: false },
] as const;
