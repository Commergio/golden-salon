import type { BlogCategory, BlogCategoryId } from "./types";

export const BLOG_CATEGORIES: Record<BlogCategoryId, BlogCategory> = {
  hair: {
    id: "hair",
    slug: "hair-care",
    label: "العناية بالشعر",
    description: "ترتمنت، صبغات، بروتين، ومعالجات الشعر الاحترافية",
    seoTitle: "مقالات العناية بالشعر | مجلة اللمسة الذهبية",
    seoDescription:
      "نصائح ودلائل العناية بالشعر، الترتمنت، الصبغات، والبروتين من خبيرات صالون اللمسة الذهبية بالرياض.",
  },
  skin: {
    id: "skin",
    slug: "skin-care",
    label: "العناية بالبشرة",
    description: "تنظيف عميق، ترتمنت، وروتين بشرة متوهجة",
    seoTitle: "مقالات العناية بالبشرة | مجلة اللمسة الذهبية",
    seoDescription:
      "دليل العناية بالبشرة، التنظيف العميق، والترتمنت قبل المناسبات من صالون نسائي فاخر بالرياض.",
  },
  moroccan: {
    id: "moroccan",
    slug: "moroccan-bath",
    label: "الحمام المغربي",
    description: "تجارب الحمام المغربي الكلاسيكي والملكي",
    seoTitle: "الحمام المغربي | أفضل المقالات والنصائح بالرياض",
    seoDescription:
      "كل ما تحتاجين معرفته عن الحمام المغربي الملكي وفوائده من صالون اللمسة الذهبية.",
  },
  massage: {
    id: "massage",
    slug: "massage",
    label: "المساج",
    description: "جلسات استرخاء وعلاجية وأحجار ساخنة",
    seoTitle: "مقالات المساج والاسترخاء | سبا نسائي الرياض",
    seoDescription:
      "فوائد المساج وأفضل الجلسات العلاجية في سبا نسائي فاخر بالرياض.",
  },
  nails: {
    id: "nails",
    slug: "nails",
    label: "الأظافر",
    description: "جل، مناكير، باديكير، وعناية طبيعية",
    seoTitle: "العناية بالأظافر | مقالات ونصائح احترافية",
    seoDescription:
      "دليل العناية بالأظافر، الجل، والباديكير من خبيرات صالون اللمسة الذهبية.",
  },
  beauty: {
    id: "beauty",
    slug: "beauty",
    label: "التجميل",
    description: "تسريحات، صبغات، وإطلالات المناسبات",
    seoTitle: "مقالات التجميل والإطلالات | مجلة الجمال",
    seoDescription:
      "أحدث صيحات التجميل، التسريحات، وأفضل صبغات الشعر في الرياض.",
  },
  offers: {
    id: "offers",
    slug: "offers",
    label: "العروض",
    description: "باقات وعروض حصرية من الصالون",
    seoTitle: "عروض الصالون وباقات الجمال | اللمسة الذهبية",
    seoDescription:
      "اكتشفي أحدث عروض وباقات صالون اللمسة الذهبية في الرياض.",
  },
  expert: {
    id: "expert",
    slug: "expert-tips",
    label: "نصائح الخبراء",
    description: "إرشادات من أمال غطاس وفريق الصالون",
    seoTitle: "نصائح خبراء الجمال | أمال غطاس والفريق",
    seoDescription:
      "نصائح احترافية من خبيرات صالون اللمسة الذهبية لاختيار الخدمات والعناية اليومية.",
  },
};

export const BLOG_CATEGORY_LIST = Object.values(BLOG_CATEGORIES);

export function getCategoryBySlug(slug: string): BlogCategory | undefined {
  return BLOG_CATEGORY_LIST.find((c) => c.slug === slug);
}

export function getCategoryById(id: BlogCategoryId): BlogCategory {
  return BLOG_CATEGORIES[id];
}
