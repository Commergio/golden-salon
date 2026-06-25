"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const scrolled = el.scrollTop;
      const height = el.scrollHeight - el.clientHeight;
      setProgress(height > 0 ? (scrolled / height) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.div
      className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-right bg-gold shadow-[0_0_12px_rgba(201,168,106,0.6)]"
      style={{ scaleX: progress / 100 }}
      aria-hidden
    />
  );
}
