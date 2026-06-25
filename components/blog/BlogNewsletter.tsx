"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Sparkles } from "lucide-react";

export function BlogNewsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setDone(true);
  };

  return (
    <section className="relative overflow-hidden rounded-3xl border border-gold/25 bg-gradient-to-br from-ivory via-champagne/40 to-gold/10 p-8 shadow-luxury-gold md:p-12">
      <motion.div
        className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-gold/15 blur-3xl"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
        aria-hidden
      />

      <div className="relative text-center">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-white/70 px-4 py-1.5 font-cairo text-xs text-gold">
          <Sparkles className="h-3.5 w-3.5" />
          نشرة الجمال
        </span>
        <h2 className="font-playfair text-2xl font-semibold text-charcoal md:text-3xl">
          اشتركي للحصول على أحدث نصائح الجمال والعروض الخاصة
        </h2>
        <p className="mx-auto mt-3 max-w-lg font-cairo text-sm text-warm-gray">
          مقالات حصرية وعروض لا تُنشر إلا للمشتركات — بدون إزعاج.
        </p>

        {done ? (
          <p className="mt-8 font-cairo text-gold">شكراً لاشتراككِ ✨ سنرسل لكِ أجمل النصائح قريباً.</p>
        ) : (
          <form onSubmit={submit} className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
            <div className="relative flex-1">
              <Mail className="absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gold" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="بريدكِ الإلكتروني"
                className="w-full rounded-full border border-gold/30 bg-white/90 py-3.5 pr-11 pl-4 font-cairo text-sm focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
                dir="ltr"
              />
            </div>
            <motion.button
              type="submit"
              className="btn-primary shrink-0 text-sm"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              اشتراك
            </motion.button>
          </form>
        )}
      </div>
    </section>
  );
}
