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
          className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-gold/30 shadow-luxury-gold glow-gold"
        >
          <div className="relative aspect-video">
            <video
              ref={videoRef}
              autoPlay
              muted
              loop
              playsInline
              title="فيديو أجواء صالون اللمسة الذهبية"
              aria-label="عرض فيديو لأجواء الصالون الفاخر"
              className="h-full w-full object-cover"
              poster="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200&q=80"
            >
              <source
                src="https://videos.pexels.com/video-files/853189/853189-hd_1920_1080_25fps.mp4"
                type="video/mp4"
              />
            </video>
            <motion.div
              className="absolute inset-0 bg-ivory/40 backdrop-blur-[1px]"
              initial={{ opacity: 0.3 }}
            />
            <motion.p
              className="absolute bottom-8 right-8 left-8 text-center font-playfair text-2xl text-charcoal drop-shadow-sm md:text-3xl"
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              حيث يلتقي الجمال بالاسترخاء
            </motion.p>
            <motion.button
              onClick={togglePlay}
              className="absolute top-1/2 left-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-gold/35 bg-ivory/80 text-gold shadow-glass backdrop-blur transition-all hover:bg-gold/25"
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
