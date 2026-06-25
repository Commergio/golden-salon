import { pexels } from "@/lib/service-images";

export const SITE = {
  name: "صالون اللمسة الذهبية",
  shortName: "اللمسة الذهبية",
  tagline: "جمالك يتحول لتجربة دلال واسترخاء متكاملة",
  url: "https://goldensalon.sa",
  phone: "+966577888256",
  whatsapp: "https://wa.me/966577888256",
  email: "info@goldensalon.sa",
  address: "صالون اللمسة الذهبية النسائي — الرياض، المملكة العربية السعودية",
  streetAddress: "الرياض",
  locality: "الرياض",
  region: "منطقة الرياض",
  country: "SA",
  coordinates: { latitude: 24.7136, longitude: 46.6753 },
  hours: "1 ظهرًا — 11 مساءً",
  closedDay: "الأحد إجازة",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.0!2d46.6753!3d24.7136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDQyJzQ5LjAiTiA0NsKwNDAnMzEuMSJF!5e0!3m2!1sar!2ssa!4v1",
  logo: "/images/golden-logo.png",
  logoAlt: "شعار صالون اللمسة الذهبية — Golden Touch Salon",
} as const;

export const NAV_LINKS = [
  { href: "/", label: "الرئيسية" },
  { href: "/about", label: "عن الصالون" },
  { href: "/services", label: "الخدمات" },
  { href: "/booking", label: "الحجز" },
  { href: "/blog", label: "مجلة الجمال" },
  { href: "/contact", label: "تواصل معنا" },
] as const;

export const SERVICES = [
  {
    id: "hair",
    title: "الشعر",
    icon: "Sparkles",
    description:
      "تسريحات احترافية، صبغات دقيقة، ومعالجات عميقة لشعر صحي ولمعان يدوم.",
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80",
    items: [
      {
        name: "تسريحات",
        image:
          "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&q=80",
      },
      {
        name: "صبغات",
        image: pexels(3992853, 400),
      },
      {
        name: "معالجات",
        image: pexels(3738341, 400),
      },
    ] as const,
  },
  {
    id: "nails",
    title: "الأظافر",
    icon: "Gem",
    description:
      "عناية كاملة باليدين والقدمين مع جودة جل وتركيب يناسب ذوقكِ.",
    image: pexels(3997380, 800),
    items: [
      {
        name: "بدكير ومناكير",
        image: pexels(3997983, 400),
      },
      {
        name: "جل",
        image: pexels(4467687, 400),
      },
      {
        name: "تركيب",
        image: pexels(12487868, 400),
      },
    ] as const,
  },
  {
    id: "hammam",
    title: "الحمام المغربي",
    icon: "Droplets",
    description:
      "تقاليد مغربية أصيلة — من الكلاسيكي إلى الملكي وحمام الأعشاب.",
    image: pexels(6620992, 800),
    items: [
      {
        name: "كلاسيكي",
        image: pexels(3757942, 400),
      },
      {
        name: "ملكي",
        image: pexels(6620992, 400),
      },
      {
        name: "أعشاب",
        image: pexels(3865677, 400),
      },
    ] as const,
  },
  {
    id: "massage",
    title: "المساج",
    icon: "Flower2",
    description:
      "جلسات استرخاء وعلاجية مع تقنيات الأحجار الساخنة والأخشاب.",
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80",
    items: [
      {
        name: "ريلاكس",
        image:
          "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&q=80",
      },
      {
        name: "علاجي",
        image: pexels(6620992, 400),
      },
      {
        name: "أحجار",
        image: pexels(3757942, 400),
      },
      {
        name: "أخشاب",
        image: pexels(3865677, 400),
      },
    ] as const,
  },
  {
    id: "skin",
    title: "البشرة",
    icon: "Sun",
    description:
      "تنظيف عميق، ترتمنت متخصص، وفحص دقيق لبشرة متوهجة وموحدة.",
    image: pexels(5069432, 800),
    items: [
      {
        name: "تنظيف",
        image: pexels(5069432, 400),
      },
      {
        name: "ترتمنت",
        image: pexels(4046314, 400),
      },
      {
        name: "فحص دقيق",
        image: pexels(3992219, 400),
      },
    ] as const,
  },
] as const;

export const OFFERS = [
  {
    title: "باقة العروس الملكية",
    description: "شعر + بشرة + أظافر + حمام مغربي ملكي",
    discount: "خصم 25%",
    price: "١٬٩٩٩ ر.س",
    badge: "الأكثر طلباً",
  },
  {
    title: "عرض الشتاء",
    description: "معالجة شعر عميقة + ترتمنت بشرة",
    discount: "خصم 30%",
    price: "٧٩٩ ر.س",
    badge: "موسمي",
  },
  {
    title: "باقة الاسترخاء",
    description: "مساج + حمام مغربي + عناية بالأظافر",
    discount: "خصم 20%",
    price: "٥٩٩ ر.س",
    badge: "جديد",
  },
  {
    title: "باقة الصديقتين",
    description: "جلسة كاملة لشخصين بسعر واحد",
    discount: "خصم 35%",
    price: "١٬٢٩٩ ر.س",
    badge: "محدود",
  },
] as const;

export const TESTIMONIALS = [
  {
    name: "نورة العتيبي",
    text: "تجربة فاخرة من أول دقيقة. أمال غطاس غيّرت شعري بالكامل — النتيجة دامت لأشهر!",
    rating: 5,
  },
  {
    name: "ريم السعيد",
    text: "أفضل صالون نسائي بالرياض. الجو هادئ والخدمة احترافية جداً. أنصح بباقة الحمام المغربي.",
    rating: 5,
  },
  {
    name: "هند المطيري",
    text: "الأظافر عند آيزا روعة، والمساج كان من أجمل تجاربي. مكان يستحق كل ريال.",
    rating: 5,
  },
  {
    name: "سارة القحطاني",
    text: "صبغة الشعر عند آرا طلعت بالضبط اللون اللي أبيه. فريق محترف وودود.",
    rating: 5,
  },
] as const;

export const SOCIAL = [
  {
    name: "Instagram",
    handle: "golden.salon.sa",
    href: "https://instagram.com/golden.salon.sa",
    icon: "Instagram",
    color: "from-pink-500/20 to-purple-500/20",
  },
  {
    name: "TikTok",
    handle: "golden.salon.com",
    href: "https://tiktok.com/@golden.salon.com",
    icon: "Music2",
    color: "from-charcoal/10 to-gold/20",
  },
  {
    name: "Snapchat",
    handle: "golden.salon26",
    href: "https://snapchat.com/add/golden.salon26",
    icon: "Ghost",
    color: "from-yellow-400/20 to-gold/30",
  },
  {
    name: "WhatsApp",
    handle: "تواصلي مباشرة",
    href: "https://wa.me/966577888256",
    icon: "MessageCircle",
    color: "from-green-500/20 to-emerald-500/10",
  },
] as const;

export const AMAL_LINES = [
  "أمال غطاس",
  "متخصصة في ترتمنت الشعر والبشرة",
  "خبرة في إعادة حيوية الشعر ومعالجة التلف والعناية العميقة بالبشرة",
  "نهتم بالتفاصيل الدقيقة للحصول على نتائج تدوم وتظهر الفرق الحقيقي",
] as const;
