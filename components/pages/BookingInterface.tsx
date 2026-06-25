"use client";

import { motion } from "framer-motion";
import {
  MessageCircle,
  Calendar,
  CreditCard,
  User,
  Clock,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { SITE } from "@/lib/data";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const futureFeatures = [
  { icon: Calendar, label: "تقويم مواعيد", status: "قريباً" },
  { icon: CreditCard, label: "دفع إلكتروني", status: "قريباً" },
  { icon: User, label: "حساب عميلة", status: "قريباً" },
  { icon: Clock, label: "حجز فوري", status: "قريباً" },
];

export function BookingInterface() {
  const whatsappMessage = encodeURIComponent(
    `مرحباً، أود حجز موعد في ${SITE.name} ✨`
  );

  return (
    <div className="mx-auto max-w-4xl">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="grid gap-8 lg:grid-cols-2"
      >
        <motion.div
          variants={fadeUp}
          className="rounded-3xl border border-gold/30 bg-gradient-to-br from-gold/10 via-ivory to-champagne/40 p-8 shadow-luxury-gold backdrop-blur-md md:p-10"
        >
          <Sparkles className="mb-4 h-8 w-8 text-gold" />
          <h2 className="font-playfair text-2xl font-semibold text-charcoal">احجزي عبر واتساب</h2>
          <p className="mt-4 font-cairo text-sm leading-relaxed text-warm-gray">
            الطريقة الأسرع والأكثر راحة — راسلينا الآن وسنؤكد موعدكِ خلال ساعات العمل.
          </p>
          <ul className="mt-6 space-y-3 font-cairo text-sm text-charcoal">
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              اختاري الخدمة والتاريخ المفضل
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              نرد عليكِ بالتأكيد والتفاصيل
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              استمتعي بتجربة فاخرة
            </li>
          </ul>
          <a
            href={`${SITE.whatsapp}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-8 flex w-full items-center justify-center gap-2 text-base"
          >
            <MessageCircle className="h-5 w-5" />
            احجزي الآن عبر واتساب
          </a>
          <Link href="/thank-you" className="mt-3 block text-center font-cairo text-xs text-warm-gray hover:text-gold">
            صفحة الشكر بعد الحجز
          </Link>
        </motion.div>

        <motion.div variants={fadeUp} className="space-y-4">
          <div className="rounded-3xl border border-dashed border-gold/30 bg-white/50 p-6 backdrop-blur-md">
            <h3 className="font-playfair text-lg font-semibold text-charcoal">الحجز الإلكتروني</h3>
            <p className="mt-2 font-cairo text-sm text-warm-gray">
              نعمل على نظام حجز متكامل. قريباً ستتمكنين من:
            </p>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {futureFeatures.map((f) => (
                <li
                  key={f.label}
                  className="flex items-center gap-3 rounded-xl border border-gold/15 bg-cream/50 px-4 py-3"
                >
                  <f.icon className="h-5 w-5 text-gold" />
                  <div>
                    <p className="font-cairo text-sm text-charcoal">{f.label}</p>
                    <p className="font-cairo text-xs text-gold/80">{f.status}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-gold/20 bg-white/60 p-5 font-cairo text-sm text-warm-gray">
            <p>{SITE.hours} — {SITE.closedDay}</p>
            <Link href="/hours" className="mt-2 inline-block text-gold hover:underline">
              عرض جدول الأسبوع
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
