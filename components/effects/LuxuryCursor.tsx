"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export function LuxuryCursor() {
  const [visible, setVisible] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;

    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;

    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    const onLeave = () => setVisible(false);

    window.addEventListener("mousemove", onMove);
    document.body.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.body.removeEventListener("mouseleave", onLeave);
    };
  }, [reducedMotion]);

  if (reducedMotion || !visible) return null;

  return (
    <motion.div
      className="pointer-events-none fixed z-[200] hidden mix-blend-difference md:block"
      style={{ left: pos.x, top: pos.y }}
      animate={{ x: -8, y: -8 }}
      transition={{ type: "spring", stiffness: 500, damping: 28 }}
      aria-hidden
    >
      <div className="h-4 w-4 rounded-full border border-gold bg-gold/20" />
    </motion.div>
  );
}
