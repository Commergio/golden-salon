"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { SITE } from "@/lib/data";

export function FloatingWhatsApp() {
  return (
    <motion.a
      href={SITE.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2.5, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1, boxShadow: "0 8px 32px rgba(37,211,102,0.5)" }}
      whileTap={{ scale: 0.95 }}
      aria-label="تواصلي عبر واتساب"
    >
      <MessageCircle className="h-7 w-7" fill="currentColor" />
      <motion.span
        className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-gold"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </motion.a>
  );
}
