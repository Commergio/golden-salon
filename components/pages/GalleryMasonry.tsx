"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import { GALLERY_CATEGORIES, GALLERY_IMAGES } from "@/lib/pages/content";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export function GalleryMasonry() {
  const [filter, setFilter] = useState<string>("all");
  const [lightbox, setLightbox] = useState<(typeof GALLERY_IMAGES)[0] | null>(null);

  const filtered =
    filter === "all" ? GALLERY_IMAGES : GALLERY_IMAGES.filter((img) => img.category === filter);

  return (
    <>
      <div className="mb-10 flex flex-wrap justify-center gap-2">
        <button
          type="button"
          onClick={() => setFilter("all")}
          className={`rounded-full px-4 py-2 font-cairo text-sm transition-all ${
            filter === "all" ? "bg-gold text-white shadow-luxury-gold" : "border border-gold/25 bg-white/70 text-charcoal hover:border-gold"
          }`}
        >
          الكل
        </button>
        {GALLERY_CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setFilter(cat.id)}
            className={`rounded-full px-4 py-2 font-cairo text-sm transition-all ${
              filter === cat.id ? "bg-gold text-white shadow-luxury-gold" : "border border-gold/25 bg-white/70 text-charcoal hover:border-gold"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="columns-1 gap-4 sm:columns-2 lg:columns-3"
      >
        {filtered.map((img) => (
          <motion.button
            key={img.id}
            type="button"
            variants={fadeUp}
            onClick={() => setLightbox(img)}
            className="group relative mb-4 block w-full break-inside-avoid overflow-hidden rounded-2xl border border-gold/20 shadow-glass"
            aria-label={`عرض ${img.alt}`}
          >
            <div className="relative aspect-[4/5]">
              <Image src={img.src} alt={img.alt} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width:768px) 100vw, 33vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <span className="absolute bottom-3 right-3 flex items-center gap-1 rounded-full bg-white/90 px-3 py-1 font-cairo text-xs text-charcoal opacity-0 transition-opacity group-hover:opacity-100">
                <ZoomIn className="h-3.5 w-3.5" />
                {img.categoryLabel}
              </span>
            </div>
          </motion.button>
        ))}
      </motion.div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-charcoal/80 p-4 backdrop-blur-sm"
            onClick={() => setLightbox(null)}
            role="dialog"
            aria-modal="true"
            aria-label={lightbox.alt}
          >
            <button
              type="button"
              onClick={() => setLightbox(null)}
              className="absolute top-6 left-6 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white"
              aria-label="إغلاق"
            >
              <X className="h-5 w-5" />
            </button>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-h-[85vh] w-full max-w-4xl overflow-hidden rounded-3xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[4/3]">
                <Image src={lightbox.src} alt={lightbox.alt} fill className="object-contain" sizes="100vw" priority />
              </div>
              <p className="bg-cream px-4 py-3 text-center font-cairo text-sm text-charcoal">{lightbox.alt}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
