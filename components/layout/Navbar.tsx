"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { SITE } from "@/lib/data";
import { PRIMARY_NAV, MEGA_MENU } from "@/lib/pages/routes";
import { useBodyScrollLock } from "@/hooks/useBodyScrollLock";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const megaRef = useRef<HTMLLIElement>(null);
  const pathname = usePathname();

  useBodyScrollLock(mobileOpen);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMegaOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (megaRef.current && !megaRef.current.contains(e.target as Node)) {
        setMegaOpen(false);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href.startsWith("/#")) return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed top-0 right-0 left-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-white/20 bg-cream/90 py-2 shadow-glass backdrop-blur-xl"
          : "bg-cream/40 py-3 backdrop-blur-md md:bg-transparent md:py-5 md:backdrop-blur-none"
      )}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 xs:px-5 md:px-8 lg:px-12"
        aria-label="التنقل الرئيسي"
      >
        <Link href="/" className="group shrink-0 transition-transform hover:scale-[1.02]" aria-label="الصفحة الرئيسية — صالون اللمسة الذهبية">
          <BrandLogo variant="nav" priority />
        </Link>

        <ul className="hidden items-center gap-6 lg:flex">
          {PRIMARY_NAV.slice(0, 2).map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "group relative font-cairo text-sm transition-colors",
                  isActive(link.href) ? "font-medium text-gold" : "text-charcoal/80 hover:text-gold"
                )}
              >
                {link.label}
                <span
                  className={cn(
                    "absolute -bottom-1 right-0 h-px bg-gold transition-all duration-500",
                    isActive(link.href) ? "w-full" : "w-0 group-hover:w-full"
                  )}
                />
              </Link>
            </li>
          ))}

          <li className="relative" ref={megaRef}>
            <button
              type="button"
              onClick={() => setMegaOpen(!megaOpen)}
              className={cn(
                "flex items-center gap-1 font-cairo text-sm transition-colors",
                megaOpen || pathname.startsWith("/services") || pathname.startsWith("/gallery")
                  ? "text-gold"
                  : "text-charcoal/80 hover:text-gold"
              )}
              aria-expanded={megaOpen}
              aria-haspopup="true"
            >
              اكتشفي
              <ChevronDown className={cn("h-4 w-4 transition-transform", megaOpen && "rotate-180")} />
            </button>
            <AnimatePresence>
              {megaOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.25 }}
                  className="absolute right-0 top-full z-50 mt-3 w-[min(640px,calc(100vw-2rem))] max-w-[calc(100vw-2rem)] rounded-3xl border border-gold/25 bg-cream/95 p-4 shadow-luxury-gold backdrop-blur-xl sm:p-6"
                >
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
                    {Object.values(MEGA_MENU).map((group) => (
                      <div key={group.label}>
                        <p className="mb-3 font-playfair text-sm font-semibold text-gold">{group.label}</p>
                        <ul className="space-y-2">
                          {group.links.map((link) => (
                            <li key={link.href}>
                              <Link
                                href={link.href}
                                className="block rounded-xl px-2 py-1.5 transition-colors hover:bg-gold/10"
                              >
                                <span className="font-cairo text-sm text-charcoal">{link.label}</span>
                                {link.description && (
                                  <span className="mt-0.5 block font-cairo text-xs text-warm-gray">
                                    {link.description}
                                  </span>
                                )}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </li>

          {PRIMARY_NAV.slice(2).map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "group relative font-cairo text-sm transition-colors",
                  isActive(link.href) ? "font-medium text-gold" : "text-charcoal/80 hover:text-gold"
                )}
              >
                {link.label}
                <span
                  className={cn(
                    "absolute -bottom-1 right-0 h-px bg-gold transition-all duration-500",
                    isActive(link.href) ? "w-full" : "w-0 group-hover:w-full"
                  )}
                />
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <motion.a
            href={SITE.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            احجزي الآن
          </motion.a>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 bg-white/50 backdrop-blur lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "إغلاق القائمة" : "فتح القائمة"}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-y-0 left-0 z-50 w-[min(100vw,20rem)] border-l border-gold/20 bg-cream/98 shadow-2xl backdrop-blur-xl safe-top safe-bottom lg:hidden"
          >
            <div className="flex h-full flex-col overflow-y-auto px-6 py-8">
              <div className="mb-8 flex items-center justify-between gap-4">
                <BrandLogo variant="nav" />
                <button type="button" onClick={() => setMobileOpen(false)} aria-label="إغلاق">
                  <X className="h-5 w-5" />
                </button>
              </div>
              <ul className="space-y-1">
                {PRIMARY_NAV.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={cn(
                        "block rounded-xl px-4 py-3 font-cairo transition-colors",
                        isActive(link.href) ? "bg-gold/10 text-gold" : "text-charcoal hover:bg-gold/5"
                      )}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              {Object.values(MEGA_MENU).map((group) => (
                <div key={group.label} className="mt-6">
                  <p className="mb-2 px-4 font-playfair text-sm font-semibold text-gold">{group.label}</p>
                  <ul className="space-y-1">
                    {group.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="block rounded-xl px-4 py-2.5 font-cairo text-sm text-warm-gray hover:bg-gold/5 hover:text-gold"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <div className="mt-auto pt-8">
                <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-primary block w-full text-center">
                  احجزي الآن
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {mobileOpen && (
        <button
          type="button"
          className="fixed inset-0 z-40 bg-charcoal/20 lg:hidden"
          onClick={() => setMobileOpen(false)}
          aria-label="إغلاق القائمة"
        />
      )}
    </motion.header>
  );
}
