"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { SITE } from "@/lib/data";
import { fadeUp, viewportOnce } from "@/lib/motion";

export function Location() {
  return (
    <section id="location" className="section-padding relative bg-ivory/50">
      <motion.div className="mx-auto max-w-7xl">
        <SectionHeading
          title="موقعنا"
          subtitle="زورينا في قلب الرياض — تجربة فاخرة تنتظرك"
        />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid gap-8 lg:grid-cols-5"
        >
          <GlassCard className="flex flex-col justify-center p-8 lg:col-span-2">
            <MapPin className="mb-4 h-8 w-8 text-gold" />
            <h3 className="font-playfair text-2xl font-semibold text-charcoal">
              {SITE.name}
            </h3>
            <p className="mt-3 font-cairo text-warm-gray">{SITE.address}</p>
            <p className="mt-2 font-cairo text-sm text-warm-gray">
              الرياض — المملكة العربية السعودية
            </p>
            <motion.a
              href="https://maps.google.com/?q=Riyadh+Saudi+Arabia"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline mt-6 inline-flex w-fit text-sm"
              whileHover={{ scale: 1.02 }}
            >
              <Navigation className="h-4 w-4" />
              احصلي على الاتجاهات
            </motion.a>
          </GlassCard>

          <GlassCard className="overflow-hidden p-0 lg:col-span-3 glow-gold">
            <motion.div
              className="relative aspect-[4/3] w-full md:aspect-video"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.5 }}
            >
              <iframe
                src={SITE.mapEmbed}
                className="absolute inset-0 h-full w-full border-0 grayscale-[20%] contrast-[1.05]"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="موقع صالون اللمسة الذهبية"
              />
            </motion.div>
          </GlassCard>
        </motion.div>
      </motion.div>
    </section>
  );
}
