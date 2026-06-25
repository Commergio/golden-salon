"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { TESTIMONIALS } from "@/lib/data";
import { fadeUp, viewportOnce } from "@/lib/motion";

export function Testimonials() {
  const [index, setIndex] = useState(0);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % TESTIMONIALS.length);
  }, []);

  useEffect(() => {
    const t = setInterval(next, 4500);
    return () => clearInterval(t);
  }, [next]);

  const t = TESTIMONIALS[index];

  return (
    <section id="testimonials" className="section-padding relative bg-champagne/25">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="آراء عملائنا"
          subtitle="ثقة آلاف السيدات في الرياض — تجارب حقيقية ونتائج مبهرة"
        />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative mx-auto max-w-2xl"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <GlassCard className="relative p-8 md:p-10" hover={false}>
                <Quote className="absolute top-6 left-6 h-10 w-10 text-gold/20" />
                <motion.div
                  className="mb-4 flex justify-center gap-1"
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-gold text-gold"
                    />
                  ))}
                </motion.div>
                <p className="text-center font-cairo text-lg leading-relaxed text-charcoal md:text-xl">
                  &ldquo;{t.text}&rdquo;
                </p>
                <p className="mt-6 text-center font-playfair text-lg font-semibold text-gold">
                  — {t.name}
                </p>
              </GlassCard>
            </motion.div>
          </AnimatePresence>

          <motion.div className="mt-6 flex justify-center gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition-all duration-500 ${
                  i === index ? "w-8 bg-gold" : "w-2 bg-gold/30"
                }`}
                aria-label={`رأي ${i + 1}`}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
