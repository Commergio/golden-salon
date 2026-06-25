"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export function MouseGlow() {
  const reducedMotion = usePrefersReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 80, damping: 25 });
  const springY = useSpring(y, { stiffness: 80, damping: 25 });

  useEffect(() => {
    if (reducedMotion) return;

    const handleMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [x, y, reducedMotion]);

  if (reducedMotion) return null;

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-[1] hidden md:block"
      aria-hidden
    >
      <motion.div
        className="absolute h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30"
        style={{
          left: springX,
          top: springY,
          background:
            "radial-gradient(circle, rgba(201,168,106,0.15) 0%, transparent 70%)",
        }}
      />
    </motion.div>
  );
}
