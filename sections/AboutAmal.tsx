"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AMAL_LINES } from "@/lib/data";
import { fadeUp, slideFromLeft, slideFromRight, viewportOnce } from "@/lib/motion";

function TypewriterText({ lines }: { lines: readonly string[] }) {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (done) return;
    const current = lines[lineIndex];
    if (charIndex < current.length) {
      const t = setTimeout(() => setCharIndex((c) => c + 1), 35);
      return () => clearTimeout(t);
    }
    if (lineIndex < lines.length - 1) {
      const t = setTimeout(() => {
        setLineIndex((l) => l + 1);
        setCharIndex(0);
      }, 600);
      return () => clearTimeout(t);
    }
    setDone(true);
  }, [charIndex, lineIndex, lines, done]);

  return (
    <motion.div
      variants={slideFromRight}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="space-y-5"
    >
      {lines.map((line, i) => (
        <p
          key={line}
          className={
            i === 0
              ? "font-playfair text-3xl font-semibold text-gradient-gold md:text-4xl"
              : "font-cairo text-base leading-relaxed text-warm-gray md:text-lg"
          }
        >
          {i < lineIndex
            ? line
            : i === lineIndex
              ? line.slice(0, charIndex)
              : ""}
          {i === lineIndex && !done && (
            <motion.span
              className="mr-1 inline-block h-5 w-0.5 bg-gold"
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.6, repeat: Infinity }}
            />
          )}
        </p>
      ))}
    </motion.div>
  );
}

export function AboutAmal() {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="absolute -right-20 top-20 h-72 w-72 rounded-full bg-gold/10 blur-3xl" aria-hidden />
      <div className="absolute -left-20 bottom-20 h-64 w-64 rounded-full bg-beige/50 blur-3xl" aria-hidden />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          title="عن أمال غطاس"
          subtitle="خبيرة الترتمنت والعناية العميقة بالشعر والبشرة"
          align="start"
        />

        <motion.div
          className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.div
            variants={slideFromLeft}
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
            <motion.div
              className="relative aspect-[3/4] overflow-hidden rounded-3xl border-2 border-gold/40 glow-gold"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.02 }}
            >
              <Image
                src="/images/amal-ghattas.png"
                alt="أمال غطاس — صالون اللمسة الذهبية، ترتمنت الشعر والبشرة"
                fill
                className="object-cover object-center transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-champagne/25 via-transparent to-transparent"
                initial={{ opacity: 0.4 }}
              />
            </motion.div>
            <motion.div
              className="absolute -bottom-4 -left-4 flex h-24 w-24 items-center justify-center rounded-full border border-gold/35 bg-ivory/85 shadow-luxury-gold backdrop-blur-md"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              aria-hidden
            >
              <motion.div
                className="absolute inset-1 rounded-full border border-dashed border-gold/25"
                animate={{ rotate: 360 }}
                transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                animate={{
                  scale: [1, 1.08, 1],
                  opacity: [0.85, 1, 0.85],
                }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <Sparkles className="h-9 w-9 text-gold drop-shadow-sm" strokeWidth={1.5} />
              </motion.div>
            </motion.div>
            <motion.div
              className="absolute -top-4 -right-4 font-playfair text-6xl text-gold/20"
              aria-hidden
            >
              ✦
            </motion.div>
          </motion.div>

          <div>
            <TypewriterText lines={AMAL_LINES} />
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="mt-8 flex gap-4"
            >
              <div className="h-px flex-1 self-center bg-gradient-to-l from-gold to-transparent" />
              <span className="font-playfair text-sm text-gold">اللمسة الذهبية</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
