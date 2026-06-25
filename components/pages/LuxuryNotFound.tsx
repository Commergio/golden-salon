"use client";

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, Home, MessageCircle } from "lucide-react";
import { SITE } from "@/lib/data";
import { luxuryEase } from "@/lib/motion";

export function LuxuryNotFound() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-cream px-5 text-center">
      <motion.div
        className="pointer-events-none absolute inset-0"
        aria-hidden
      >
        {[...Array(6)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute rounded-full bg-gold/20 blur-xl"
            style={{
              width: 80 + i * 40,
              height: 80 + i * 40,
              left: `${10 + i * 15}%`,
              top: `${20 + (i % 3) * 20}%`,
            }}
            animate={{ y: [0, -30, 0], opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 5 + i, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: luxuryEase }}
        className="relative z-10"
      >
        <motion.div
          animate={{ rotate: [0, 8, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full border border-gold/30 bg-white/80 shadow-luxury-gold backdrop-blur-md"
        >
          <Sparkles className="h-10 w-10 text-gold" />
        </motion.div>
        <p className="font-playfair text-7xl font-bold text-gold/30 md:text-8xl">404</p>
        <h1 className="mt-4 font-playfair text-3xl font-semibold text-charcoal md:text-4xl">
          عذرًا...
        </h1>
        <p className="mx-auto mt-4 max-w-md font-cairo text-lg text-warm-gray">
          الصفحة التي تبحثين عنها غير موجودة.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link href="/" className="btn-primary inline-flex items-center gap-2">
            <Home className="h-4 w-4" />
            العودة للرئيسية
          </Link>
          <a
            href={SITE.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-2"
          >
            <MessageCircle className="h-4 w-4" />
            احجزي الآن
          </a>
        </div>
      </motion.div>
    </div>
  );
}
