"use client";

import { motion } from "framer-motion";
import {
  Phone,
  MessageCircle,
  Clock,
  Mail,
  Instagram,
  Music2,
  Ghost,
  type LucideIcon,
} from "lucide-react";
import { SITE, SOCIAL } from "@/lib/data";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const iconMap: Record<string, LucideIcon> = {
  Instagram,
  Music2,
  Ghost,
  MessageCircle,
};

export function ContactCards() {
  const cards = [
    {
      icon: Phone,
      title: "الهاتف",
      value: SITE.phone,
      href: `tel:${SITE.phone}`,
      external: false,
    },
    {
      icon: MessageCircle,
      title: "واتساب",
      value: "تواصلي مباشرة",
      href: SITE.whatsapp,
      external: true,
    },
    {
      icon: Mail,
      title: "البريد",
      value: SITE.email,
      href: `mailto:${SITE.email}`,
      external: false,
    },
    {
      icon: Clock,
      title: "ساعات العمل",
      value: SITE.hours,
      href: "/hours",
      external: false,
    },
  ];

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
    >
      {cards.map((card) => (
        <motion.a
          key={card.title}
          variants={fadeUp}
          href={card.href}
          target={card.external ? "_blank" : undefined}
          rel={card.external ? "noopener noreferrer" : undefined}
          className="group rounded-3xl border border-gold/25 bg-white/75 p-6 shadow-glass backdrop-blur-md transition-all hover:border-gold/45 hover:shadow-luxury-gold"
        >
          <card.icon className="mb-4 h-6 w-6 text-gold transition-transform group-hover:scale-110" />
          <h3 className="font-playfair text-lg font-semibold text-charcoal">{card.title}</h3>
          <p className="mt-2 font-cairo text-sm text-warm-gray">{card.value}</p>
        </motion.a>
      ))}
    </motion.div>
  );
}

export function SocialContactCards() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
    >
      {SOCIAL.map((s) => {
        const Icon = iconMap[s.icon] ?? MessageCircle;
        return (
          <motion.a
            key={s.name}
            variants={fadeUp}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`group rounded-3xl border border-gold/25 bg-gradient-to-br ${s.color} p-6 shadow-glass backdrop-blur-md transition-all hover:-translate-y-1 hover:border-gold/45 hover:shadow-luxury-gold`}
          >
            <Icon className="mb-4 h-7 w-7 text-gold" />
            <h3 className="font-playfair text-lg font-semibold text-charcoal">{s.name}</h3>
            <p className="mt-1 font-cairo text-sm text-warm-gray">{s.handle}</p>
          </motion.a>
        );
      })}
    </motion.div>
  );
}

export function ContactFormPlaceholder() {
  return (
    <div className="rounded-3xl border border-dashed border-gold/30 bg-white/50 p-8 text-center backdrop-blur-md md:p-12">
      <h3 className="font-playfair text-xl font-semibold text-charcoal">نموذج التواصل</h3>
      <p className="mt-3 font-cairo text-sm text-warm-gray">
        قريباً — نموذج تواصل متكامل. حالياً يمكنكِ مراسلتنا عبر واتساب للرد الفوري.
      </p>
      <div className="mt-6 grid gap-4 opacity-50 md:grid-cols-2">
        <div className="h-12 rounded-xl border border-gold/20 bg-cream/80" />
        <div className="h-12 rounded-xl border border-gold/20 bg-cream/80" />
        <div className="h-12 rounded-xl border border-gold/20 bg-cream/80 md:col-span-2" />
        <div className="h-28 rounded-xl border border-gold/20 bg-cream/80 md:col-span-2" />
      </div>
      <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-primary mt-6 inline-flex text-sm">
        <MessageCircle className="h-4 w-4" />
        تواصلي عبر واتساب
      </a>
    </div>
  );
}
