"use client";

import { motion } from "framer-motion";
import {
  ChevronDown,
  MessageCircle,
  Sparkles,
  MapPin,
  Clock,
  CalendarCheck,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { SITE } from "@/lib/data";
import { scrollToSection } from "@/lib/utils";
import { fadeUp, staggerContainer } from "@/lib/motion";

const particles = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  left: `${5 + (i * 5.2) % 90}%`,
  delay: i * 0.22,
  size: 3 + (i % 4),
  duration: 5 + (i % 5),
}));

const highlights = [
  { icon: MapPin, label: "الرياض — موقع مميز" },
  { icon: Clock, label: SITE.hours },
  { icon: CalendarCheck, label: "حجز فوري عبر واتساب" },
] as const;

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Luxury static background */}
      <div className="absolute inset-0 bg-gradient-to-b from-champagne/90 via-cream to-ivory">
        <motion.div
          className="absolute inset-0 bg-hero-spotlight"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <div className="absolute inset-0 bg-hero-edge-glow" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-cream/90 to-transparent" />
      </div>

      {/* Floating orbs */}
      <motion.div
        className="pointer-events-none absolute -right-16 top-1/4 h-64 w-64 rounded-full bg-gold/20 blur-3xl"
        animate={{ scale: [1, 1.15, 1], opacity: [0.35, 0.55, 0.35] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      />
      <motion.div
        className="pointer-events-none absolute -left-12 bottom-1/3 h-48 w-48 rounded-full bg-beige/50 blur-3xl"
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      />

      {/* Gold particles */}
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="pointer-events-none absolute rounded-full bg-gradient-to-br from-gold-light to-gold shadow-[0_0_8px_rgba(201,168,106,0.5)]"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            bottom: `${12 + (p.id % 6) * 4}%`,
          }}
          animate={{
            y: [0, -140 - p.id * 8, 0],
            opacity: [0, 1, 0],
            scale: [0.6, 1, 0.6],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
          aria-hidden
        />
      ))}

      {/* Decorative frame lines */}
      <motion.div
        className="pointer-events-none absolute inset-8 hidden rounded-[2rem] border border-gold/15 md:block lg:inset-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1.2 }}
        aria-hidden
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto w-full max-w-5xl px-5 md:px-8"
      >
        <div className="hero-glass-panel">
          <motion.div
            variants={fadeUp}
            className="mb-8 flex justify-center"
          >
            <div className="relative">
              <div
                className="pointer-events-none absolute inset-0 -z-10 scale-110 rounded-full bg-gold/25 blur-3xl"
                aria-hidden
              />
              <BrandLogo variant="hero" priority />
            </div>
          </motion.div>

          <motion.span
            variants={fadeUp}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/90 px-5 py-2.5 font-cairo text-xs font-medium text-charcoal shadow-sm backdrop-blur-md md:text-sm"
          >
            <motion.span
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            >
              <Sparkles className="h-4 w-4 text-gold" />
            </motion.span>
            صالون نسائي فاخر بالرياض
            <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="font-playfair text-xl font-semibold leading-relaxed text-charcoal md:text-2xl lg:text-3xl"
          >
            {SITE.tagline}
          </motion.h1>

          <motion.div variants={fadeUp} className="hero-shine-line my-6" />

          <motion.p
            variants={fadeUp}
            className="mx-auto max-w-2xl font-cairo text-base font-medium leading-relaxed text-charcoal/90 md:text-lg"
          >
            نغيّر مفهوم الصالون من تجميل إلى{" "}
            <span className="font-semibold text-gold">ترميم ونتائج تدوم</span>
          </motion.p>

          <motion.ul
            variants={fadeUp}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            {highlights.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-2 rounded-full border border-gold/25 bg-white/70 px-4 py-2 font-cairo text-xs text-charcoal shadow-sm backdrop-blur-sm transition-colors hover:border-gold/45 hover:bg-gold/5 md:text-sm"
              >
                <Icon className="h-4 w-4 shrink-0 text-gold" strokeWidth={1.75} />
                {label}
              </li>
            ))}
          </motion.ul>

          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center"
          >
            <Button
              href={SITE.whatsapp}
              className="animate-pulse-glow shadow-luxury-gold sm:min-w-[180px]"
            >
              <CalendarCheck className="h-4 w-4" />
              احجزي الآن
            </Button>
            <Button
              href={SITE.whatsapp}
              variant="outline"
              className="border-gold/50 bg-white/80 sm:min-w-[180px]"
            >
              <MessageCircle className="h-4 w-4" />
              واتساب مباشر
            </Button>
            <Button
              variant="outline"
              onClick={() => scrollToSection("services")}
              className="border-gold/40 bg-white/60 sm:min-w-[160px]"
            >
              شاهد الخدمات
            </Button>
          </motion.div>
        </div>
      </motion.div>

      <motion.button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-1 rounded-full border border-gold/30 bg-ivory/80 px-4 py-2 text-gold shadow-glass backdrop-blur-md transition-colors hover:border-gold/50 hover:bg-gold/10"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        aria-label="انتقلي للأسفل"
      >
        <span className="font-cairo text-[10px] text-warm-gray">اكتشفي المزيد</span>
        <ChevronDown className="h-5 w-5" />
      </motion.button>
    </section>
  );
}
