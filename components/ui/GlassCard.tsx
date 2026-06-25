"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  dark?: boolean;
  hover?: boolean;
}

export function GlassCard({
  children,
  className,
  dark = false,
  hover = true,
}: GlassCardProps) {
  return (
    <motion.div
      className={cn(
        dark ? "glass-luxury" : "glass-card",
        "gold-border",
        hover && "transition-all duration-500 hover:-translate-y-1 hover:shadow-luxury-gold",
        className
      )}
      whileHover={hover ? { y: -4 } : undefined}
    >
      {children}
    </motion.div>
  );
}
