"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { fadeUp, luxuryEase } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  badge?: string;
  className?: string;
  children?: ReactNode;
}

export function PageHero({ title, subtitle, badge, className, children }: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-gradient-to-b from-champagne/40 via-cream to-cream pt-32 pb-16 md:pt-40 md:pb-20",
        className
      )}
    >
      <motion.div
        className="pointer-events-none absolute -right-20 top-10 h-72 w-72 rounded-full bg-gold/15 blur-3xl"
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      />
      <motion.div
        className="pointer-events-none absolute -left-16 bottom-0 h-56 w-56 rounded-full bg-beige/40 blur-3xl"
        animate={{ scale: [1.1, 1, 1.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-4xl px-5 text-center md:px-8">
        {badge && (
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: luxuryEase }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/35 bg-white/80 px-4 py-2 font-cairo text-xs text-gold backdrop-blur-md md:text-sm"
          >
            <Sparkles className="h-4 w-4" />
            {badge}
          </motion.span>
        )}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="font-playfair text-3xl font-bold text-charcoal md:text-5xl lg:text-[3rem]"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7, ease: luxuryEase }}
            className="mx-auto mt-5 max-w-2xl font-cairo text-base leading-relaxed text-warm-gray md:text-lg"
          >
            {subtitle}
          </motion.p>
        )}
        <div className="hero-shine-line mx-auto mt-8 max-w-xs" />
        {children}
      </div>
    </section>
  );
}
