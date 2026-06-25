"use client";

import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import { WORKING_HOURS } from "@/lib/pages/content";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export function HoursTimeline() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="relative mx-auto max-w-xl"
    >
      <div className="absolute right-6 top-0 bottom-0 w-px bg-gradient-to-b from-gold/50 via-gold/20 to-transparent md:right-8" aria-hidden />
      <ul className="space-y-4">
        {WORKING_HOURS.map((day) => (
          <motion.li
            key={day.day}
            variants={fadeUp}
            className="relative flex items-center gap-6 pr-14 md:pr-16"
          >
            <span
              className={`absolute right-4 flex h-5 w-5 items-center justify-center rounded-full border-2 md:right-6 ${
                day.open ? "border-gold bg-gold/20" : "border-warm-gray/30 bg-cream"
              }`}
              aria-hidden
            >
              {day.open && <span className="h-2 w-2 rounded-full bg-gold" />}
            </span>
            <div
              className={`flex flex-1 items-center justify-between rounded-2xl border px-5 py-4 backdrop-blur-md transition-all ${
                day.open
                  ? "border-gold/25 bg-white/75 shadow-glass hover:border-gold/40"
                  : "border-warm-gray/15 bg-white/40 opacity-70"
              }`}
            >
              <span className="font-playfair text-base font-semibold text-charcoal md:text-lg">
                {day.day}
              </span>
              <span className="flex items-center gap-2 font-cairo text-sm text-warm-gray">
                <Clock className="h-4 w-4 text-gold" />
                {day.hours}
              </span>
            </div>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}
