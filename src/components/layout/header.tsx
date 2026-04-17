"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { NAV_LINKS, WHATSAPP_URL } from "@/lib/constants";
import { MagneticButton } from "@/components/shared/magnetic-button";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  // Hide on scroll down, show on scroll up
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    setScrolled(latest > 50);
    if (latest > 300 && latest > previous) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <>
      {/* Wrapper */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{
          y: hidden ? -120 : 0,
          opacity: hidden ? 0 : 1,
        }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4"
      >
        <motion.header
          className={cn(
            "max-w-7xl mx-auto rounded-2xl transition-all duration-500",
            scrolled
              ? "glass-strong shadow-xl shadow-black/10 py-3 px-6"
              : "backdrop-blur-md bg-white/40 border border-jade-200/40 shadow-lg shadow-jade-900/5 py-3 px-6"
          )}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.a
              href="#"
              whileHover={{ scale: 1.02 }}
              className="relative h-20 w-60 md:h-24 md:w-72"
            >
              <Image
                src="/images/logo-jade.png"
                alt="Drª Jade Matos - Ginecologista"
                fill
                className="object-contain object-left"
                sizes="288px"
                priority
              />
            </motion.a>

            {/* Desktop Nav with animated underlines */}
            <nav className="hidden lg:flex items-center gap-7">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                  whileHover={{ y: -2 }}
                  className="text-sm font-medium text-jade-800 hover:text-jade-500 transition-colors duration-300 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-jade-400 transition-all duration-300 group-hover:w-full rounded-full" />
                </motion.a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <MagneticButton
              as="a"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center gap-2 px-5 py-2 bg-jade-500 text-white text-sm font-semibold rounded-full hover:bg-jade-400 transition-all duration-300 hover:shadow-lg hover:shadow-jade-500/30"
              strength={0.2}
            >
              Agendar Consulta
            </MagneticButton>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setMobileOpen(!mobileOpen)}
              whileTap={{ scale: 0.9 }}
              className="lg:hidden p-1.5 text-jade-800"
              aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.button>
          </div>
        </motion.header>
      </motion.div>

      {/* Mobile Menu with AnimatePresence */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-navy-950/95 backdrop-blur-xl pt-28 px-6"
          >
            <nav className="flex flex-col gap-6">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -30, filter: "blur(4px)" }}
                  animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  onClick={() => setMobileOpen(false)}
                  className="text-2xl font-serif font-semibold text-white hover:text-jade-400 transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.3 }}
                onClick={() => setMobileOpen(false)}
                className="mt-4 inline-flex items-center justify-center gap-2 px-8 py-4 bg-jade-500 text-white text-lg font-semibold rounded-full hover:bg-jade-400 transition-all"
              >
                Agendar Consulta
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
