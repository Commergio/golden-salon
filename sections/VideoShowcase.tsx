"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Play, Pause } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeUp, viewportOnce } from "@/lib/motion";

export function VideoShowcase() {
  const [playing, setPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (playing) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setPlaying(!playing);
  };

  return (
    <section id="video" className="section-padding relative">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="أجواء الصالون"
          subtitle="استمتعي بلحظة من الهدوء والفخامة قبل زيارتك"
        />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative mx-auto w-full max-w-5xl overflow-hidden rounded-2xl border border-gold/30 shadow-luxury-gold glow-gold xs:rounded-3xl"
        >
          <div className="relative aspect-video">
            <video
              ref={videoRef}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              title="فيديو أجواء صالون اللمسة الذهبية"
              aria-label="عرض فيديو لأجواء الصالون الفاخر"
              className="h-full w-full object-cover"
              poster="/images/amal-ghattas.png"
            >
              <source src="/videos/salonGolden_video.mp4" type="video/mp4" />
            </video>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-charcoal/30 to-transparent" />
            <motion.button
              onClick={togglePlay}
              className="absolute top-1/2 left-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-gold/35 bg-ivory/80 text-gold shadow-glass backdrop-blur transition-all hover:bg-gold/25 xs:h-14 xs:w-14 sm:h-16 sm:w-16"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              aria-label={playing ? "إيقاف" : "تشغيل"}
            >
              {playing ? (
                <Pause className="h-7 w-7" />
              ) : (
                <Play className="h-7 w-7 mr-0.5" />
              )}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
