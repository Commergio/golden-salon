"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, X, Sparkles } from "lucide-react";
import { HOSTESS, QUICK_QUESTIONS, type HostessMessage } from "@/lib/hostess";
import { SITE } from "@/lib/data";
import { luxuryEase } from "@/lib/motion";

interface HostessChatProps {
  open: boolean;
  onClose: () => void;
  messages: HostessMessage[];
  onSend: (text: string) => void;
  isTyping: boolean;
}

function TypingIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex justify-start"
    >
      <motion.div className="flex gap-1 rounded-2xl border border-gold/20 bg-white/70 px-4 py-3 backdrop-blur">
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="h-2 w-2 rounded-full bg-gold/70"
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}

export function HostessChat({
  open,
  onClose,
  messages,
  onSend,
  isTyping,
}: HostessChatProps) {
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping, open]);

  const submit = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;
    onSend(trimmed);
    setInput("");
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-label="محادثة المضيفة"
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.96 }}
          transition={{ duration: 0.55, ease: luxuryEase }}
          className="fixed bottom-28 right-4 z-[46] flex w-[min(100vw-2rem,380px)] flex-col overflow-hidden rounded-3xl border border-gold/25 bg-[#FDFBF8]/95 shadow-[0_24px_64px_rgba(17,17,17,0.12),0_0_0_1px_rgba(255,255,255,0.5)_inset] backdrop-blur-xl sm:bottom-32 sm:right-6"
        >
          <div className="relative border-b border-gold/15 bg-gradient-to-l from-gold/10 via-cream to-beige/30 px-5 py-4">
            <div className="flex items-center justify-between gap-3">
              <motion.div
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                <motion.div className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 bg-gold/15">
                  <Sparkles className="h-4 w-4 text-gold" />
                </motion.div>
                <div className="text-start">
                  <p className="font-playfair text-lg font-semibold text-charcoal">
                    {HOSTESS.name}
                  </p>
                  <p className="font-cairo text-xs text-warm-gray">
                    {HOSTESS.role}
                  </p>
                </div>
              </motion.div>
              <button
                type="button"
                onClick={onClose}
                className="flex h-9 w-9 items-center justify-center rounded-full text-warm-gray transition-colors hover:bg-gold/10 hover:text-charcoal"
                aria-label="إغلاق المحادثة"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          <motion.div
            ref={scrollRef}
            className="flex max-h-[min(50vh,320px)] flex-col gap-3 overflow-y-auto px-4 py-4"
          >
            {messages.map((msg) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: luxuryEase }}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[88%] rounded-2xl px-4 py-2.5 font-cairo text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "bg-gold/20 text-charcoal"
                      : "border border-gold/15 bg-white/80 text-charcoal shadow-sm"
                  }`}
                >
                  {msg.text.split("\n").map((line, i) => (
                    <span key={i}>
                      {line}
                      {i < msg.text.split("\n").length - 1 && <br />}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
            {isTyping && <TypingIndicator />}
          </motion.div>

          <div className="border-t border-gold/10 bg-cream/50 px-3 py-3">
            <div className="mb-2 flex flex-wrap gap-1.5">
              {QUICK_QUESTIONS.map((q) => (
                <button
                  key={q}
                  type="button"
                  onClick={() => submit(q)}
                  className="rounded-full border border-gold/25 bg-white/60 px-3 py-1 font-cairo text-[11px] text-warm-gray transition-all hover:border-gold/50 hover:bg-gold/10 hover:text-charcoal"
                >
                  {q}
                </button>
              ))}
            </div>
            <form
              className="flex gap-2"
              onSubmit={(e) => {
                e.preventDefault();
                submit(input);
              }}
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="اسأليني عن خدماتنا..."
                className="flex-1 rounded-full border border-gold/20 bg-white/80 px-4 py-2.5 font-cairo text-sm text-charcoal placeholder:text-warm-gray/70 focus:border-gold/50 focus:outline-none focus:ring-2 focus:ring-gold/20"
                dir="rtl"
              />
              <motion.button
                type="submit"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold text-white shadow-luxury-gold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="إرسال"
              >
                <Send className="h-4 w-4" />
              </motion.button>
            </form>
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block text-center font-cairo text-xs text-gold transition-colors hover:text-charcoal"
            >
              أو احجزي مباشرة عبر واتساب ✨
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function createMessage(
  role: HostessMessage["role"],
  text: string
): HostessMessage {
  return {
    id: `${role}-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    role,
    text,
  };
}
