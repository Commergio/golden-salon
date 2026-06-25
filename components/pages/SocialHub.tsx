"use client";

import { motion } from "framer-motion";
import {
  Instagram,
  Music2,
  Ghost,
  MessageCircle,
  ArrowLeft,
  type LucideIcon,
} from "lucide-react";
import { SOCIAL } from "@/lib/data";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const icons: Record<string, LucideIcon> = {
  Instagram,
  Music2,
  Ghost,
  MessageCircle,
};

export function SocialHubCards() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="mx-auto grid max-w-3xl gap-6"
    >
      {SOCIAL.map((s) => {
        const Icon = icons[s.icon] ?? MessageCircle;
        return (
          <motion.a
            key={s.name}
            variants={fadeUp}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`group flex items-center justify-between rounded-3xl border border-gold/25 bg-gradient-to-l ${s.color} p-6 shadow-glass backdrop-blur-md transition-all hover:-translate-y-1 hover:border-gold/45 hover:shadow-luxury-gold md:p-8`}
            whileHover={{ scale: 1.01 }}
          >
            <div className="flex items-center gap-5">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-gold/30 bg-white/60">
                <Icon className="h-7 w-7 text-gold" />
              </div>
              <div>
                <h3 className="font-playfair text-xl font-semibold text-charcoal">{s.name}</h3>
                <p className="mt-1 font-cairo text-sm text-warm-gray">{s.handle}</p>
              </div>
            </div>
            <ArrowLeft className="h-5 w-5 text-gold opacity-0 transition-all group-hover:opacity-100" />
          </motion.a>
        );
      })}
    </motion.div>
  );
}
