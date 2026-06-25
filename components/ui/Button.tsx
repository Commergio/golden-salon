"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "outline" | "ghost";
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
}

export function Button({
  children,
  variant = "primary",
  href,
  onClick,
  className,
  type = "button",
}: ButtonProps) {
  const baseClass = cn(
    variant === "primary" && "btn-primary",
    variant === "outline" && "btn-outline",
    variant === "ghost" &&
      "inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm text-gold transition-colors hover:bg-gold/10",
    className
  );

  const content = (
    <motion.span
      className="relative z-10 flex items-center gap-2"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className={baseClass}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button type={type} onClick={onClick} className={baseClass}>
      {content}
    </motion.button>
  );
}
