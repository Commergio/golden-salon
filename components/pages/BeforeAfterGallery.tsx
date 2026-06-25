"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { BEFORE_AFTER } from "@/lib/pages/content";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

function ComparisonCard({
  item,
}: {
  item: (typeof BEFORE_AFTER)[number];
}) {
  const [position, setPosition] = useState(50);

  return (
    <motion.article
      variants={fadeUp}
      className="overflow-hidden rounded-3xl border border-gold/25 bg-white/75 shadow-luxury-gold backdrop-blur-md"
    >
      <div className="border-b border-gold/15 px-5 py-4">
        <span className="font-cairo text-xs text-gold">{item.category}</span>
        <h3 className="font-playfair text-lg font-semibold text-charcoal">{item.title}</h3>
      </div>
      <div className="relative aspect-[16/10] select-none">
        <Image src={item.after} alt={`بعد — ${item.title}`} fill className="object-cover" sizes="(max-width:768px) 100vw, 50vw" />
        <div className="absolute inset-0 overflow-hidden" style={{ width: `${position}%` }}>
          <div
            className="relative h-full"
            style={{ width: position > 0 ? `${(100 / position) * 100}%` : "100%" }}
          >
            <Image src={item.before} alt={`قبل — ${item.title}`} fill className="object-cover" sizes="(max-width:768px) 100vw, 50vw" />
          </div>
        </div>
        <div
          className="absolute inset-y-0 w-1 bg-gold shadow-[0_0_12px_rgba(201,168,106,0.6)]"
          style={{ right: `${position}%` }}
        />
        <input
          type="range"
          min={10}
          max={90}
          value={position}
          onChange={(e) => setPosition(Number(e.target.value))}
          className="absolute inset-0 z-10 w-full cursor-ew-resize opacity-0"
          aria-label={`مقارنة قبل وبعد — ${item.title}`}
        />
        <span className="absolute bottom-3 right-3 rounded-full bg-charcoal/60 px-3 py-1 font-cairo text-xs text-white">قبل</span>
        <span className="absolute bottom-3 left-3 rounded-full bg-gold/90 px-3 py-1 font-cairo text-xs text-white">بعد</span>
      </div>
    </motion.article>
  );
}

export function BeforeAfterGallery() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="grid gap-8 lg:grid-cols-2"
    >
      {BEFORE_AFTER.map((item) => (
        <ComparisonCard key={item.id} item={item} />
      ))}
    </motion.div>
  );
}
