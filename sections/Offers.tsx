"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, Tag } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { OFFERS, SITE } from "@/lib/data";
import { fadeUp, viewportOnce } from "@/lib/motion";

export function Offers() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % OFFERS.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + OFFERS.length) % OFFERS.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const offer = OFFERS[current];

  return (
    <section
      id="offers"
      className="section-padding relative overflow-hidden bg-champagne/40"
    >
      <motion.div
        className="absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse at 30% 50%, rgba(201,168,106,0.2) 0%, transparent 65%)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          title="عروض حصرية"
          subtitle="باقات فاخرة بأسعار استثنائية — لفترة محدودة"
        />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative mx-auto max-w-3xl"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="glass-luxury overflow-hidden rounded-3xl border border-gold/30 p-8 shadow-luxury-gold md:p-12"
            >
              <motion.span
                className="mb-4 inline-flex items-center gap-2 rounded-full bg-gold/15 px-4 py-1.5 font-cairo text-xs text-gold"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
              >
                <Tag className="h-3.5 w-3.5" />
                {offer.badge}
              </motion.span>
              <h3 className="font-playfair text-3xl font-semibold text-charcoal md:text-4xl">
                {offer.title}
              </h3>
              <p className="mt-4 font-cairo text-warm-gray md:text-lg">
                {offer.description}
              </p>
              <motion.div className="mt-8 flex flex-wrap items-end justify-between gap-4">
                <motion.span
                  className="font-playfair text-4xl text-gold md:text-5xl"
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  {offer.price}
                </motion.span>
                <span className="rounded-full border border-gold/40 bg-gold/10 px-4 py-2 font-cairo text-sm text-gold">
                  {offer.discount}
                </span>
              </motion.div>
              <motion.div className="mt-8">
                <Button href={SITE.whatsapp}>احجزي العرض الآن</Button>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          <motion.div className="mt-8 flex items-center justify-center gap-4">
            <motion.button
              onClick={prev}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/30 bg-ivory/80 text-gold transition-colors hover:bg-gold/15"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="العرض السابق"
            >
              <ChevronRight className="h-5 w-5" />
            </motion.button>
            <motion.div className="flex gap-2">
              {OFFERS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all duration-500 ${
                    i === current ? "w-8 bg-gold" : "w-2 bg-gold/30"
                  }`}
                  aria-label={`عرض ${i + 1}`}
                />
              ))}
            </motion.div>
            <motion.button
              onClick={next}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/30 bg-ivory/80 text-gold transition-colors hover:bg-gold/15"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="العرض التالي"
            >
              <ChevronLeft className="h-5 w-5" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
