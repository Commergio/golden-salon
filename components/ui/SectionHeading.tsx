"use client";

import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "center" | "start";
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={cn(
        "mb-14 md:mb-16",
        align === "center" ? "text-center" : "text-start",
        className
      )}
    >
      <div className="section-divider mb-6" />
      <h2 className="heading-luxury">{title}</h2>
      {subtitle && (
        <p className="subheading-luxury mt-4 max-w-2xl mx-auto">{subtitle}</p>
      )}
    </motion.div>
  );
}
