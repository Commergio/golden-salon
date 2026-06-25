"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Gem,
  Droplets,
  Flower2,
  Sun,
  ChevronLeft,
  ChevronRight,
  ArrowLeft,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { SERVICES, SITE } from "@/lib/data";
import { fadeUp, luxuryEase, viewportOnce } from "@/lib/motion";

const iconMap: Record<string, LucideIcon> = {
  Sparkles,
  Gem,
  Droplets,
  Flower2,
  Sun,
};

const totalItems = SERVICES.reduce((sum, s) => sum + s.items.length, 0);

export function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const active = SERVICES[activeIndex];
  const Icon = iconMap[active.icon] ?? Sparkles;
  const activeItem = active.items[activeItemIndex];
  const previewImage = activeItem?.image ?? active.image;

  const goTo = useCallback((index: number) => {
    setActiveIndex((index + SERVICES.length) % SERVICES.length);
    setActiveItemIndex(0);
  }, []);

  const next = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);
  const prev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveIndex((i) => (i + 1) % SERVICES.length);
      setActiveItemIndex(0);
    }, 7000);
    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <section
      id="services"
      className="section-padding relative z-10 overflow-hidden bg-ivory/60"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      <motion.div
        className="pointer-events-none absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-gold/10 blur-3xl"
        animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
        aria-hidden
      />
      <motion.div
        className="pointer-events-none absolute -right-24 bottom-1/4 h-64 w-64 rounded-full bg-champagne/60 blur-3xl"
        animate={{ scale: [1.1, 1, 1.1] }}
        transition={{ duration: 10, repeat: Infinity }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          title="خدماتنا الفاخرة"
          subtitle="عناية متكاملة من الشعر إلى البشرة — اكتشفي كل تجربة بتفاصيلها"
        />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mb-8 flex flex-wrap items-center justify-center gap-3"
        >
          <span className="rounded-full border border-gold/30 bg-white/70 px-4 py-1.5 font-cairo text-xs text-gold">
            {SERVICES.length} فئات رئيسية
          </span>
          <span className="rounded-full border border-gold/20 bg-gold/10 px-4 py-1.5 font-cairo text-xs text-charcoal">
            +{totalItems} خدمة فرعية
          </span>
        </motion.div>

        {/* Category tabs */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mb-10 flex gap-2 overflow-x-auto pb-2 scrollbar-thin"
          role="tablist"
          aria-label="فئات الخدمات"
        >
          {SERVICES.map((service, i) => {
            const TabIcon = iconMap[service.icon] ?? Sparkles;
            const selected = i === activeIndex;
            return (
              <motion.button
                key={service.id}
                type="button"
                role="tab"
                aria-selected={selected}
                aria-controls={`service-panel-${service.id}`}
                onClick={() => goTo(i)}
                className={`relative flex shrink-0 items-center gap-2 rounded-full border px-4 py-2.5 font-cairo text-sm transition-all duration-300 md:px-5 md:py-3 ${
                  selected
                    ? "border-gold bg-gold text-white shadow-luxury-gold"
                    : "border-gold/25 bg-white/70 text-charcoal hover:border-gold/45 hover:bg-gold/10"
                }`}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <TabIcon className="h-4 w-4" strokeWidth={1.75} />
                {service.title}
                {selected && (
                  <motion.span
                    layoutId="service-tab-glow"
                    className="absolute inset-0 rounded-full ring-2 ring-gold/30"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Main showcase */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            id={`service-panel-${active.id}`}
            role="tabpanel"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.55, ease: luxuryEase }}
            className="overflow-hidden rounded-3xl border border-gold/25 bg-white/60 shadow-luxury-gold backdrop-blur-md"
          >
            <div className="grid lg:grid-cols-2">
              {/* Image preview */}
              <div className="relative min-h-[280px] overflow-hidden md:min-h-[360px] lg:min-h-[440px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={previewImage}
                    className="absolute inset-0"
                    initial={{ opacity: 0, scale: 1.06 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.6, ease: luxuryEase }}
                  >
                    <Image
                      src={previewImage}
                      alt={`${active.title} — ${activeItem?.name ?? "خدماتنا"}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      priority={activeIndex === 0}
                    />
                    <div className="image-overlay-soft absolute inset-0" />
                  </motion.div>
                </AnimatePresence>

                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/25 via-transparent to-transparent" />

                <motion.div
                  className="absolute right-4 top-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-gold/40 bg-ivory/90 shadow-glass backdrop-blur"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 6, repeat: Infinity }}
                >
                  <Icon className="h-6 w-6 text-gold" />
                </motion.div>

                <motion.div
                  className="absolute bottom-4 right-4 left-4"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <span className="inline-block rounded-full bg-ivory/90 px-4 py-1.5 font-cairo text-xs text-gold shadow-sm backdrop-blur">
                    {activeItem?.name ?? active.title}
                  </span>
                </motion.div>
              </div>

              {/* Content */}
              <div className="flex flex-col justify-between p-6 md:p-8 lg:p-10">
                <div>
                  <div className="mb-3 flex items-center gap-2 font-cairo text-xs text-gold">
                    <span className="font-playfair text-2xl font-bold text-gold/30">
                      {String(activeIndex + 1).padStart(2, "0")}
                    </span>
                    <span>/ {String(SERVICES.length).padStart(2, "0")}</span>
                  </div>

                  <h3 className="font-playfair text-3xl font-semibold text-charcoal md:text-4xl">
                    {active.title}
                  </h3>
                  <p className="mt-4 font-cairo text-base leading-relaxed text-warm-gray">
                    {active.description}
                  </p>

                  <p className="mt-6 font-cairo text-xs font-medium text-gold">
                    اختاري الخدمة لمعاينة التفاصيل
                  </p>

                  <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                    {active.items.map((item, i) => {
                      const selected = i === activeItemIndex;
                      return (
                        <motion.li key={item.name}>
                          <button
                            type="button"
                            onClick={() => setActiveItemIndex(i)}
                            className={`group/item flex w-full items-center gap-3 rounded-xl border p-2.5 text-start transition-all duration-300 ${
                              selected
                                ? "border-gold bg-gold/15 shadow-luxury"
                                : "border-gold/15 bg-white/50 hover:border-gold/35 hover:bg-gold/5"
                            }`}
                          >
                            <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg">
                              <Image
                                src={item.image}
                                alt={item.name}
                                fill
                                className="object-cover transition-transform duration-500 group-hover/item:scale-110"
                                sizes="48px"
                              />
                            </div>
                            <span
                              className={`font-cairo text-sm ${
                                selected ? "font-semibold text-charcoal" : "text-warm-gray"
                              }`}
                            >
                              {item.name}
                            </span>
                            {selected && (
                              <ArrowLeft className="mr-auto h-3.5 w-3.5 text-gold" />
                            )}
                          </button>
                        </motion.li>
                      );
                    })}
                  </ul>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <Button href={SITE.whatsapp} className="text-sm">
                    احجزي {active.title}
                  </Button>
                  <div className="flex items-center gap-2">
                    <motion.button
                      type="button"
                      onClick={prev}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 bg-white/80 text-gold transition-colors hover:bg-gold/15"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label="الفئة السابقة"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </motion.button>
                    <motion.button
                      type="button"
                      onClick={next}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 bg-white/80 text-gold transition-colors hover:bg-gold/15"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label="الفئة التالية"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Progress dots */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-8 flex items-center justify-center gap-2"
        >
          {SERVICES.map((service, i) => (
            <button
              key={service.id}
              type="button"
              onClick={() => goTo(i)}
              className={`h-2 rounded-full transition-all duration-500 ${
                i === activeIndex ? "w-10 bg-gold" : "w-2 bg-gold/25 hover:bg-gold/40"
              }`}
              aria-label={`عرض ${service.title}`}
            />
          ))}
        </motion.div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-10 text-center font-cairo text-sm text-warm-gray"
        >
          اكتشفي نصائح الخبراء في{" "}
          <Link href="/blog" className="font-medium text-gold underline-offset-4 hover:underline">
            مجلة الجمال
          </Link>
        </motion.p>
      </div>
    </section>
  );
}
