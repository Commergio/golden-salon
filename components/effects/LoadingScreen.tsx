"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { SITE } from "@/lib/data";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const SPLASH_MS = 1200;

export function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (reducedMotion) {
      setLoading(false);
      return;
    }
    const timer = setTimeout(() => setLoading(false), SPLASH_MS);
    return () => clearTimeout(timer);
  }, [reducedMotion]);

  if (!loading) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-cream"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: reducedMotion ? 0 : 0.5, ease: [0.22, 1, 0.36, 1] }}
        role="status"
        aria-live="polite"
        aria-label={`جاري تحميل ${SITE.name}`}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: reducedMotion ? 0 : 0.4 }}
          className="text-center"
        >
          <BrandLogo variant="splash" priority />
          <p className="mt-4 font-cairo text-sm text-warm-gray">{SITE.tagline}</p>
        </motion.div>
        <div className="mt-10 h-0.5 w-32 overflow-hidden rounded-full bg-beige/50" aria-hidden>
          <motion.div
            className="h-full bg-gold"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: reducedMotion ? 0 : SPLASH_MS / 1000, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
