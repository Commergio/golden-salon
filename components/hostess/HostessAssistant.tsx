"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";
import {
  HOSTESS,
  getHostessReply,
  type HostessMessage,
} from "@/lib/hostess";
import { luxuryEase } from "@/lib/motion";
import { HostessAvatar } from "./HostessAvatar";
import { HostessChat, createMessage } from "./HostessChat";

const INTRO_DELAY_MS = 3500;
const TYPING_MS = 900;

export function HostessAssistant() {
  const [visible, setVisible] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [showBubble, setShowBubble] = useState(false);
  const [messages, setMessages] = useState<HostessMessage[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const greetedRef = useRef(false);

  const runGreeting = useCallback(() => {
    if (greetedRef.current) return;
    greetedRef.current = true;
    setShowBubble(true);
    setMessages([createMessage("assistant", HOSTESS.greeting)]);
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), INTRO_DELAY_MS);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!visible || greetedRef.current) return;
    const t = setTimeout(runGreeting, 600);
    return () => clearTimeout(t);
  }, [visible, runGreeting]);

  const handleSend = useCallback(
    (text: string) => {
      setMessages((prev) => [...prev, createMessage("user", text)]);
      setIsTyping(true);

      setTimeout(() => {
        const reply = getHostessReply(text);
        setIsTyping(false);
        setMessages((prev) => [...prev, createMessage("assistant", reply)]);
      }, TYPING_MS);
    },
    []
  );

  const openChat = () => {
    setChatOpen(true);
    setShowBubble(false);
    if (messages.length === 0) runGreeting();
  };

  return (
    <>
      <HostessChat
        open={chatOpen}
        onClose={() => setChatOpen(false)}
        messages={messages}
        onSend={handleSend}
        isTyping={isTyping}
      />

      <AnimatePresence>
        {visible && (
          <motion.div
            className="fixed bottom-6 right-4 z-[45] flex flex-col items-end gap-3 sm:bottom-8 sm:right-6"
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.9, ease: luxuryEase }}
          >
            <AnimatePresence>
              {showBubble && !chatOpen && (
                <motion.div
                  initial={{ opacity: 0, x: 20, scale: 0.95 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, ease: luxuryEase }}
                  className="max-w-[260px] cursor-pointer rounded-2xl border border-gold/25 bg-[#FDFBF8]/95 px-4 py-3 shadow-luxury-gold backdrop-blur-md sm:max-w-[300px]"
                  onClick={openChat}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === "Enter" && openChat()}
                >
                  <p className="font-cairo text-sm leading-relaxed text-charcoal">
                    {HOSTESS.greeting.split("\n")[0]}
                  </p>
                  <p className="mt-1 font-cairo text-xs text-gold">
                    اضغطي للمحادثة ✨
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            <motion.div className="flex items-center gap-2">
              {!chatOpen && (
                <motion.button
                  type="button"
                  onClick={openChat}
                  className="hidden items-center gap-2 rounded-full border border-gold/30 bg-white/80 px-4 py-2 font-cairo text-xs text-charcoal shadow-glass backdrop-blur transition-colors hover:border-gold/50 sm:flex"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <MessageCircle className="h-4 w-4 text-gold" />
                  تحدثي مع لمى
                </motion.button>
              )}
              <div className="sm:hidden">
                <HostessAvatar compact onClick={openChat} />
              </div>
              <div className="hidden sm:block">
                <HostessAvatar onClick={openChat} />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
