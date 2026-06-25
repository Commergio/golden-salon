import type { Metadata } from "next";
import { SITE, SERVICES, OFFERS, SOCIAL, TESTIMONIALS, NAV_LINKS } from "@/lib/data";
import type { BlogPost } from "@/lib/blog";
import { getAllPosts, getPostPlainText } from "@/lib/blog";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://goldensalon.sa";

export const SEO_TITLE =
  "صالون اللمسة الذهبية | صالون نسائي فاخر بالرياض — عناية شعر وبشرة";

export const SEO_DESCRIPTION =
  "صالون نسائي فاخر في الرياض يقدّم ترتمنت الشعر والبشرة، صبغات، حمام مغربي ملكي، مساج، وأظافر مع أمال غطاس. احجزي عبر واتساب من 1 ظهرًا حتى 11 مساءً.";

export const SEO_KEYWORDS = [
  "صالون نسائي بالرياض",
  "صالون تجميل نسائي الرياض",
  "صالون فاخر بالرياض",
  "ترتمنت الشعر والبشرة",
  "عناية بالشعر الرياض",
  "حمام مغربي نسائي",
  "سبا نسائي الرياض",
  "مساج واسترخاء",
  "عناية بالأظافر",
  "صبغات شعر احترافية",
  "اللمسة الذهبية",
  "أمال غطاس",
  "صالون اللمسة الذهبية",
  "حجز صالون نسائي واتساب",
] as const;

export const OG_IMAGE = {
  url: "/images/amal-ghattas.png",
  width: 1200,
  height: 630,
  alt: "أمال غطاس — صالون اللمسة الذهبية للعناية بالشعر والبشرة في الرياض",
} as const;

export const SEO_FAQ = [
  {
    question: "كيف أحجز في صالون اللمسة الذهبية؟",
    answer:
      "يمكنكِ الحجز مباشرة عبر واتساب أو زر «احجزي الآن» في الموقع. نعمل من 1 ظهرًا حتى 11 مساءً، والأحد إجازة.",
  },
  {
    question: "ما هي خدمات الصالون؟",
    answer:
      "نقدّم عناية الشعر، الصبغات والمعالجات، الحمام المغربي الملكي، المساج، العناية بالبشرة، والأظافر بخبرة أمال غطاس وخبيرات متخصصات.",
  },
  {
    question: "هل يوجد عروض وباقات؟",
    answer:
      "نعم، لدينا باقات موسمية وعروض حصرية على خدمات الشعر والبشرة والاسترخاء. تفضّلي بزيارة قسم العروض في الموقع.",
  },
  {
    question: "أين يقع الصالون؟",
    answer: SITE.address,
  },
  {
    question: "من هي أمال غطاس؟",
    answer:
      "أمال غطاس متخصصة في ترتمنت الشعر والبشرة، بخبرة في إعادة حيوية الشعر ومعالجة التلف والعناية العميقة بالبشرة.",
  },
] as const;

const socialUrls = SOCIAL.filter((s) => s.name !== "WhatsApp").map((s) => s.href);

const avgRating =
  TESTIMONIALS.reduce((sum, t) => sum + t.rating, 0) / TESTIMONIALS.length;

export function buildPageMetadata(overrides?: Partial<Metadata>): Metadata {
  const ogImageUrl = new URL(OG_IMAGE.url, SITE_URL).toString();

  const base: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: {
      default: SEO_TITLE,
      template: `%s | ${SITE.name}`,
    },
    description: SEO_DESCRIPTION,
    keywords: [...SEO_KEYWORDS],
    applicationName: SITE.name,
    authors: [{ name: SITE.name, url: SITE_URL }],
    creator: SITE.name,
    publisher: SITE.name,
    category: "beauty",
    classification: "Beauty Salon",
    formatDetection: {
      telephone: true,
      email: true,
      address: true,
    },
    referrer: "origin-when-cross-origin",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: SITE_URL,
      languages: {
        "ar-SA": SITE_URL,
      },
    },
    openGraph: {
      type: "website",
      locale: "ar_SA",
      url: SITE_URL,
      siteName: SITE.name,
      title: SEO_TITLE,
      description: SEO_DESCRIPTION,
      images: [
        {
          url: ogImageUrl,
          width: OG_IMAGE.width,
          height: OG_IMAGE.height,
          alt: OG_IMAGE.alt,
          type: "image/png",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: SEO_TITLE,
      description: SEO_DESCRIPTION,
      images: [ogImageUrl],
    },
    icons: {
      icon: [
        { url: SITE.logo, type: "image/png" },
        { url: "/images/amal-ghattas.png", type: "image/png" },
      ],
      apple: [{ url: SITE.logo, type: "image/png" }],
    },
    appleWebApp: {
      capable: true,
      title: SITE.shortName,
      statusBarStyle: "default",
    },
    other: {
      "geo.region": "SA-01",
      "geo.placename": SITE.locality,
      "geo.position": `${SITE.coordinates.latitude};${SITE.coordinates.longitude}`,
      ICBM: `${SITE.coordinates.latitude}, ${SITE.coordinates.longitude}`,
      "msapplication-config": "/browserconfig.xml",
    },
  };

  return { ...base, ...overrides };
}

export function buildJsonLdGraph() {
  const ogImageUrl = new URL(OG_IMAGE.url, SITE_URL).toString();

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE.name,
        alternateName: SITE.shortName,
        description: SEO_DESCRIPTION,
        inLanguage: "ar-SA",
        publisher: { "@id": `${SITE_URL}/#organization` },
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${SITE_URL}/blog?q={search_term_string}`,
          },
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: SITE.name,
        url: SITE_URL,
        logo: {
          "@type": "ImageObject",
          url: new URL(SITE.logo, SITE_URL).toString(),
          width: 560,
          height: 210,
        },
        image: ogImageUrl,
        email: SITE.email,
        telephone: SITE.phone,
        sameAs: socialUrls,
        contactPoint: {
          "@type": "ContactPoint",
          telephone: SITE.phone,
          contactType: "customer service",
          availableLanguage: ["Arabic", "ar"],
          areaServed: "SA",
        },
      },
      {
        "@type": ["BeautySalon", "HairSalon", "HealthAndBeautyBusiness"],
        "@id": `${SITE_URL}/#salon`,
        name: SITE.name,
        description: SEO_DESCRIPTION,
        url: SITE_URL,
        image: [ogImageUrl],
        telephone: SITE.phone,
        email: SITE.email,
        priceRange: "$$$",
        currenciesAccepted: "SAR",
        paymentAccepted: "Cash, Credit Card",
        address: {
          "@type": "PostalAddress",
          streetAddress: SITE.streetAddress,
          addressLocality: SITE.locality,
          addressRegion: SITE.region,
          addressCountry: SITE.country,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: SITE.coordinates.latitude,
          longitude: SITE.coordinates.longitude,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ],
            opens: "13:00",
            closes: "23:00",
          },
        ],
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: avgRating.toFixed(1),
          reviewCount: TESTIMONIALS.length,
          bestRating: "5",
          worstRating: "1",
        },
        review: TESTIMONIALS.map((t) => ({
          "@type": "Review",
          author: { "@type": "Person", name: t.name },
          reviewRating: {
            "@type": "Rating",
            ratingValue: t.rating,
            bestRating: "5",
          },
          reviewBody: t.text,
        })),
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "عروض وخدمات الصالون",
          itemListElement: OFFERS.map((offer, index) => ({
            "@type": "Offer",
            position: index + 1,
            name: offer.title,
            description: offer.description,
            priceCurrency: "SAR",
            availability: "https://schema.org/InStock",
            seller: { "@id": `${SITE_URL}/#salon` },
          })),
        },
        makesOffer: SERVICES.map((service) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service.title,
            description: service.description,
            provider: { "@id": `${SITE_URL}/#salon` },
            areaServed: "الرياض",
          },
        })),
        sameAs: socialUrls,
        founder: {
          "@type": "Person",
          name: "أمال غطاس",
          jobTitle: "متخصصة ترتمنت الشعر والبشرة",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/#breadcrumb`,
        itemListElement: NAV_LINKS.map((link, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: link.label,
          item: link.href.startsWith("/")
            ? `${SITE_URL}${link.href}`
            : `${SITE_URL}/#${link.href}`,
        })),
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/#faq`,
        mainEntity: SEO_FAQ.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
      {
        "@type": "ItemList",
        "@id": `${SITE_URL}/#services`,
        name: "خدمات الصالون",
        itemListElement: SERVICES.map((service, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: service.title,
          description: service.description,
          url: `${SITE_URL}/#services`,
        })),
      },
    ],
  };
}

export const BLOG_SEO_TITLE = "مجلة الجمال والعناية | صالون اللمسة الذهبية بالرياض";

export const BLOG_SEO_DESCRIPTION =
  "مجلة جمال فاخرة — نصائح العناية بالشعر والبشرة، الحمام المغربي، المساج، والأظافر من خبيرات صالون اللمسة الذهبية في الرياض.";

export function buildBlogListingMetadata(): Metadata {
  const canonical = `${SITE_URL}/blog`;
  return buildPageMetadata({
    title: BLOG_SEO_TITLE,
    description: BLOG_SEO_DESCRIPTION,
    keywords: [
      ...SEO_KEYWORDS,
      "مدونة جمال",
      "نصائح عناية بالشعر",
      "مقالات سبا نسائي",
      "مدونة صالون نسائي الرياض",
    ],
    alternates: {
      canonical,
      languages: { "ar-SA": canonical },
    },
    openGraph: {
      type: "website",
      locale: "ar_SA",
      url: canonical,
      siteName: SITE.name,
      title: BLOG_SEO_TITLE,
      description: BLOG_SEO_DESCRIPTION,
      images: [
        {
          url: new URL(OG_IMAGE.url, SITE_URL).toString(),
          width: OG_IMAGE.width,
          height: OG_IMAGE.height,
          alt: OG_IMAGE.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: BLOG_SEO_TITLE,
      description: BLOG_SEO_DESCRIPTION,
    },
  });
}

export function buildArticleMetadata(post: BlogPost): Metadata {
  const canonical = `${SITE_URL}/blog/${post.slug}`;
  const ogImage = post.image.startsWith("http")
    ? post.image
    : new URL(post.image, SITE_URL).toString();

  return buildPageMetadata({
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: [...post.keywords, ...SEO_KEYWORDS],
    authors: [{ name: post.author, url: `${SITE_URL}/#about` }],
    alternates: {
      canonical,
      languages: { "ar-SA": canonical },
    },
    openGraph: {
      type: "article",
      locale: "ar_SA",
      url: canonical,
      siteName: SITE.name,
      title: post.title,
      description: post.metaDescription,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author],
      section: post.categoryLabel,
      tags: post.keywords,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: post.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.metaDescription,
      images: [ogImage],
    },
  });
}

export function buildBlogListingJsonLd() {
  const posts = getAllPosts();
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Blog",
        "@id": `${SITE_URL}/blog#blog`,
        name: "مجلة الجمال والعناية",
        description: BLOG_SEO_DESCRIPTION,
        url: `${SITE_URL}/blog`,
        inLanguage: "ar-SA",
        publisher: { "@id": `${SITE_URL}/#organization` },
        blogPost: posts.map((post) => ({
          "@type": "BlogPosting",
          "@id": `${SITE_URL}/blog/${post.slug}#article`,
          headline: post.title,
          description: post.metaDescription,
          url: `${SITE_URL}/blog/${post.slug}`,
          datePublished: post.publishedAt,
          dateModified: post.updatedAt,
          author: { "@type": "Person", name: post.author },
          image: post.image,
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/blog#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "الرئيسية",
            item: SITE_URL,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "المدونة",
            item: `${SITE_URL}/blog`,
          },
        ],
      },
      {
        "@type": "ItemList",
        name: "أحدث المقالات",
        itemListElement: posts.map((post, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: post.title,
          url: `${SITE_URL}/blog/${post.slug}`,
        })),
      },
    ],
  };
}

export function buildArticleJsonLd(post: BlogPost) {
  const url = `${SITE_URL}/blog/${post.slug}`;
  const image = post.image.startsWith("http")
    ? post.image
    : new URL(post.image, SITE_URL).toString();

  const articleBody = getPostPlainText(post);

  const graph: Record<string, unknown>[] = [
      {
        "@type": "BlogPosting",
        "@id": `${url}#article`,
        headline: post.title,
        description: post.metaDescription,
        articleBody,
        image: [image],
        url,
        mainEntityOfPage: { "@type": "WebPage", "@id": url },
        datePublished: post.publishedAt,
        dateModified: post.updatedAt,
        author: {
          "@type": "Person",
          name: post.author,
          jobTitle: post.authorRole,
          worksFor: { "@id": `${SITE_URL}/#organization` },
        },
        publisher: {
          "@type": "Organization",
          name: SITE.name,
          logo: {
            "@type": "ImageObject",
            url: new URL(OG_IMAGE.url, SITE_URL).toString(),
          },
        },
        inLanguage: "ar-SA",
        keywords: post.keywords.join(", "),
        articleSection: post.categoryLabel,
        wordCount: articleBody.split(/\s+/).length,
        timeRequired: `PT${post.readTimeMinutes}M`,
        isPartOf: { "@id": `${SITE_URL}/blog#blog` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "الرئيسية",
            item: SITE_URL,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "المدونة",
            item: `${SITE_URL}/blog`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: post.title,
            item: url,
          },
        ],
      },
    ];

  if (post.faq.length > 0) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      mainEntity: post.faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    });
  }

  return { "@context": "https://schema.org", "@graph": graph };
}

export function buildSubPageMetadata(
  path: string,
  title: string,
  description: string,
  options?: { keywords?: string[]; noIndex?: boolean }
): Metadata {
  const canonical = `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
  const ogImageUrl = new URL(OG_IMAGE.url, SITE_URL).toString();

  return buildPageMetadata({
    title,
    description,
    keywords: options?.keywords ? [...SEO_KEYWORDS, ...options.keywords] : [...SEO_KEYWORDS],
    alternates: {
      canonical,
      languages: { "ar-SA": canonical },
    },
    openGraph: {
      type: "website",
      locale: "ar_SA",
      url: canonical,
      siteName: SITE.name,
      title,
      description,
      images: [
        {
          url: ogImageUrl,
          width: OG_IMAGE.width,
          height: OG_IMAGE.height,
          alt: OG_IMAGE.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImageUrl],
    },
    robots: options?.noIndex ? { index: false, follow: true } : undefined,
  });
}

export function buildBreadcrumbJsonLd(
  items: { name: string; url?: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      ...(item.url ? { item: item.url } : {}),
    })),
  };
}

export function buildFaqJsonLd(faq: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

export function buildServiceJsonLd(service: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    url: service.url,
    provider: {
      "@type": "BeautySalon",
      name: SITE.name,
      url: SITE_URL,
      telephone: SITE.phone,
      address: {
        "@type": "PostalAddress",
        addressLocality: SITE.locality,
        addressCountry: SITE.country,
      },
    },
    areaServed: SITE.locality,
  };
}
