"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Instagram,
  Phone,
  Clock,
  MapPin,
  Music2,
  Ghost,
  MessageCircle,
  type LucideIcon,
} from "lucide-react";
import { SITE, SOCIAL } from "@/lib/data";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { FOOTER_SECTIONS } from "@/lib/pages/routes";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const socialIcons: Record<string, LucideIcon> = {
  Instagram,
  Music2,
  Ghost,
  MessageCircle,
};

export function Footer() {
  return (
    <footer className="relative bg-footer-light text-charcoal">
      <motion.div
        className="absolute top-0 right-0 left-0 h-px bg-gradient-to-l from-transparent via-gold to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={viewportOnce}
        transition={{ duration: 1.2 }}
      />

      <div className="section-padding mx-auto max-w-7xl">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid gap-10 md:grid-cols-2 lg:grid-cols-5"
        >
          <motion.div variants={fadeUp} className="lg:col-span-2">
            <Link href="/" className="mb-5 inline-block transition-transform hover:scale-[1.02]">
              <BrandLogo variant="footer" />
            </Link>
            <p className="font-cairo text-sm leading-relaxed text-warm-gray">
              {SITE.tagline} — تجربة فاخرة للعناية بالجمال والاسترخاء في قلب الرياض.
            </p>
            <motion.a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-6 inline-flex text-sm"
              whileHover={{ scale: 1.03 }}
            >
              احجزي موعدك
            </motion.a>
          </motion.div>

          {Object.values(FOOTER_SECTIONS).map((section) => (
            <motion.div key={section.label} variants={fadeUp}>
              <h3 className="mb-4 font-playfair text-lg text-gold">{section.label}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group inline-block font-cairo text-sm text-warm-gray transition-colors hover:text-gold"
                    >
                      <span className="relative">
                        {link.label}
                        <span className="absolute -bottom-0.5 right-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-12 grid gap-8 border-t border-gold/20 pt-10 md:grid-cols-2"
        >
          <div className="space-y-3 font-cairo text-sm text-warm-gray">
            <p className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-gold" />
              {SITE.hours} — {SITE.closedDay}
            </p>
            <p className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              {SITE.address}
            </p>
            <a href={`tel:${SITE.phone}`} className="flex items-center gap-2 transition-colors hover:text-gold">
              <Phone className="h-4 w-4 text-gold" />
              {SITE.phone}
            </a>
          </div>
          <div>
            <h3 className="mb-4 font-playfair text-lg text-gold">تابعينا</h3>
            <div className="flex gap-3">
              {SOCIAL.map((s) => {
                const Icon = socialIcons[s.icon] ?? Instagram;
                return (
                  <motion.a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 text-gold transition-all hover:border-gold hover:bg-gold/10"
                    whileHover={{ y: -3, scale: 1.05 }}
                    aria-label={s.name}
                  >
                    <Icon className="h-4 w-4" />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-10 border-t border-gold/20 pt-8 text-center"
        >
          <p className="font-cairo text-xs text-warm-gray/80">
            © {new Date().getFullYear()} {SITE.name}. جميع الحقوق محفوظة.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
