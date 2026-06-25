"use client";

import { motion } from "framer-motion";
import {
  Instagram,
  MessageCircle,
  Music2,
  Ghost,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SOCIAL } from "@/lib/data";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const socialIcons: Record<string, LucideIcon> = {
  Instagram,
  Music2,
  Ghost,
  MessageCircle,
};

export function SocialContact() {
  return (
    <section id="contact" className="section-padding relative">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="تواصلي معنا"
          subtitle="تابعينا على منصات التواصل واحجزي موعدك بكل سهولة"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {SOCIAL.map((item) => {
            const Icon = socialIcons[item.icon] ?? Instagram;
            return (
              <motion.a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeUp}
                className={`group relative flex flex-col items-center justify-center overflow-hidden rounded-2xl border border-gold/20 bg-gradient-to-br ${item.color} p-8 backdrop-blur transition-all duration-500 hover:-translate-y-2 hover:border-gold/50 hover:shadow-luxury-gold`}
                whileHover={{ scale: 1.02 }}
              >
                <motion.div
                  className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-gold/30 bg-white/60 backdrop-blur"
                  whileHover={{
                    boxShadow: "0 0 40px rgba(201,168,106,0.4)",
                    scale: 1.1,
                  }}
                >
                  <Icon className="h-8 w-8 text-gold" />
                </motion.div>
                <span className="font-playfair text-lg font-semibold text-charcoal">
                  {item.name}
                </span>
                <span className="mt-1 font-cairo text-sm text-warm-gray">
                  @{item.handle}
                </span>
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
