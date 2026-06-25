export interface PageLink {
  href: string;
  label: string;
  description?: string;
}

export const PRIMARY_NAV: PageLink[] = [
  { href: "/", label: "الرئيسية" },
  { href: "/about", label: "عن الصالون" },
  { href: "/services", label: "الخدمات" },
  { href: "/booking", label: "الحجز" },
  { href: "/blog", label: "مجلة الجمال" },
  { href: "/contact", label: "تواصل معنا" },
];

export const MEGA_MENU = {
  salon: {
    label: "الصالون",
    links: [
      { href: "/about", label: "عن الصالون", description: "قصتنا ورؤيتنا وقيمنا" },
      { href: "/amal", label: "أمال غطاس", description: "خبيرة الترتمنت والعناية" },
      { href: "/hours", label: "ساعات العمل", description: "مواعيدنا طوال الأسبوع" },
      { href: "/gallery", label: "معرض الصور", description: "لحظات الجمال والفخامة" },
      { href: "/before-after", label: "قبل وبعد", description: "نتائج حقيقية ملموسة" },
    ],
  },
  services: {
    label: "الخدمات",
    links: [
      { href: "/services", label: "دليل الخدمات", description: "شعر، بشرة، سبا وأظافر" },
      { href: "/booking", label: "احجزي موعدكِ", description: "حجز فوري عبر واتساب" },
      { href: "/#offers", label: "العروض", description: "باقات وعروض حصرية" },
      { href: "/faq", label: "الأسئلة الشائعة", description: "إجابات سريعة وواضحة" },
    ],
  },
  discover: {
    label: "اكتشفي",
    links: [
      { href: "/blog", label: "مجلة الجمال", description: "مقالات ونصائح الخبراء" },
      { href: "/social", label: "شبكاتنا", description: "تابعينا على السوشيال" },
      { href: "/careers", label: "الوظائف", description: "انضمي لفريقنا" },
      { href: "/search", label: "البحث", description: "ابحثي في الموقع" },
    ],
  },
} as const;

export const FOOTER_SECTIONS = {
  pages: {
    label: "الصفحات",
    links: [
      { href: "/about", label: "عن الصالون" },
      { href: "/amal", label: "أمال غطاس" },
      { href: "/services", label: "دليل الخدمات" },
      { href: "/booking", label: "الحجز" },
      { href: "/gallery", label: "المعرض" },
      { href: "/before-after", label: "قبل وبعد" },
      { href: "/hours", label: "ساعات العمل" },
      { href: "/careers", label: "الوظائف" },
    ],
  },
  support: {
    label: "المساعدة",
    links: [
      { href: "/contact", label: "تواصل معنا" },
      { href: "/faq", label: "الأسئلة الشائعة" },
      { href: "/social", label: "شبكات التواصل" },
      { href: "/search", label: "البحث" },
      { href: "/site-map", label: "خريطة الموقع" },
      { href: "/thank-you", label: "شكراً لكِ" },
    ],
  },
  legal: {
    label: "قانوني",
    links: [
      { href: "/privacy", label: "سياسة الخصوصية" },
      { href: "/terms", label: "الشروط والأحكام" },
      { href: "/cookies", label: "سياسة الكوكيز" },
    ],
  },
} as const;

export const ALL_STATIC_PAGES: PageLink[] = [
  ...PRIMARY_NAV,
  ...FOOTER_SECTIONS.pages.links,
  ...FOOTER_SECTIONS.support.links,
  ...FOOTER_SECTIONS.legal.links,
];
