"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_LINKS, WHATSAPP_URL } from "@/lib/constants";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Wrapper com padding para o header "flutuante" */}
      <div className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4">
        <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className={cn(
            "max-w-7xl mx-auto rounded-2xl transition-all duration-500",
            scrolled
              ? "glass-strong shadow-xl shadow-black/10 py-3 px-6"
              : "backdrop-blur-md bg-white/40 border border-jade-200/40 shadow-lg shadow-jade-900/5 py-3 px-6"
          )}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex flex-col">
              <span className="font-serif text-xl font-bold tracking-tight text-jade-900">
                dra. jade matos
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-jade-600">
                ginecologista
              </span>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-7">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-jade-800 hover:text-jade-500 transition-colors duration-300 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-jade-400 transition-all duration-300 group-hover:w-full rounded-full" />
                </a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center gap-2 px-5 py-2 bg-jade-500 text-white text-sm font-semibold rounded-full hover:bg-jade-400 transition-all duration-300 hover:shadow-lg hover:shadow-jade-500/30"
            >
              Agendar Consulta
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-1.5 text-jade-800"
              aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </motion.header>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed inset-0 z-40 bg-navy-950/95 backdrop-blur-xl pt-28 px-6"
        >
          <nav className="flex flex-col gap-6">
            {NAV_LINKS.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => setMobileOpen(false)}
                className="text-2xl font-serif font-semibold text-white hover:text-jade-400 transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="mt-4 inline-flex items-center justify-center gap-2 px-8 py-4 bg-jade-500 text-white text-lg font-semibold rounded-full hover:bg-jade-400 transition-all"
            >
              Agendar Consulta
            </a>
          </nav>
        </motion.div>
      )}
    </>
  );
}
