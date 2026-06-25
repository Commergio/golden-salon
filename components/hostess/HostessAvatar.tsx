"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { HOSTESS } from "@/lib/hostess";

interface HostessAvatarProps {
  compact?: boolean;
  onClick?: () => void;
}

const particles = [
  { x: -8, y: -12, delay: 0 },
  { x: 12, y: -18, delay: 0.5 },
  { x: -14, y: 8, delay: 1 },
];

export function HostessAvatar({ compact = false, onClick }: HostessAvatarProps) {
  const size = compact ? 56 : 88;

  return (
    <motion.button
      type="button"
      onClick={onClick}
      className="relative shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/50 focus-visible:ring-offset-2 focus-visible:ring-offset-cream rounded-full"
      aria-label="فتح محادثة المضيفة"
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
    >
      {!compact &&
        particles.map((p, i) => (
          <motion.span
            key={i}
            className="pointer-events-none absolute text-gold/40"
            style={{ left: `calc(50% + ${p.x}px)`, top: `calc(50% + ${p.y}px)` }}
            animate={{ opacity: [0.2, 0.7, 0.2], scale: [0.8, 1.1, 0.8] }}
            transition={{
              duration: 2.8,
              repeat: Infinity,
              delay: p.delay,
            }}
            aria-hidden
          >
            <Sparkles className="h-2.5 w-2.5" />
          </motion.span>
        ))}

      <motion.div
        className="relative rounded-full p-[3px]"
        animate={{
          scale: [1, 1.015, 1],
          boxShadow: "0 8px 32px rgba(201,168,106,0.2)",
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          background:
            "linear-gradient(145deg, #C9A86A 0%, #D8CBB8 45%, #C9A86A 100%)",
        }}
      >
        <motion.div
          className="relative overflow-hidden rounded-full bg-cream ring-2 ring-white/80"
          style={{ width: size, height: size }}
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src={HOSTESS.avatar}
            alt={`${HOSTESS.name} — مضيفة الصالون`}
            fill
            className="object-cover object-[center_20%]"
            sizes={compact ? "56px" : "88px"}
            priority
          />
          <motion.div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-champagne/30 via-transparent to-white/20"
            aria-hidden
          />
          <motion.div
            className="pointer-events-none absolute inset-x-[18%] top-[38%] h-[2px] rounded-full bg-gold/30"
            animate={{ scaleY: [0, 1, 0] }}
            transition={{
              duration: 0.12,
              repeat: Infinity,
              repeatDelay: 4.2,
              times: [0, 0.5, 1],
            }}
            aria-hidden
          />
        </motion.div>
      </motion.div>

      {!compact && (
        <motion.span
          className="absolute -bottom-0.5 -left-0.5 flex h-5 w-5 items-center justify-center rounded-full border border-gold/40 bg-cream text-[10px] shadow-sm"
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          aria-hidden
        >
          ✨
        </motion.span>
      )}
    </motion.button>
  );
}
