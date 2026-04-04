"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { WHATSAPP_URL } from "@/lib/constants";
import { FadeIn } from "@/components/shared/fade-in";
import { MagneticButton } from "@/components/shared/magnetic-button";

export function CtaSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-20, 20]);

  return (
    <section ref={ref} className="relative py-32 lg:py-40 overflow-hidden bg-[#090e1a]">
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#090e1a] to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#090e1a] to-transparent pointer-events-none" />

      {/* Jade glow */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse 60% 70% at 50% 80%, rgba(42,157,110,0.12) 0%, transparent 70%)"
      }} />

      {/* Floating particles — CSS only */}
      <div className="absolute top-[20%] left-[20%] w-1.5 h-1.5 rounded-full bg-jade-400/20 animate-float" />
      <div className="absolute top-[35%] right-[22%] w-1 h-1 rounded-full bg-jade-300/15 animate-float-delayed" />
      <div className="absolute top-[60%] left-[15%] w-1 h-1 rounded-full bg-jade-400/20 animate-float" />
      <div className="absolute top-[25%] right-[18%] w-1.5 h-1.5 rounded-full bg-jade-300/15 animate-float-delayed" />

      {/* Doctor cutout */}
      <motion.div
        style={{ y }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-full will-change-transform"
      >
        <Image
          src="/images/dra-cutout.png"
          alt="Dra. Jade Matos"
          fill
          className="object-contain object-bottom"
          sizes="600px"
          style={{ filter: "brightness(0.32) contrast(1.1)" }}
        />
        <div className="absolute inset-0" style={{
          background: "linear-gradient(to top, #090e1a 0%, rgba(9,14,26,0.8) 20%, transparent 50%)"
        }} />
        <div className="absolute inset-0" style={{
          background: "linear-gradient(to right, #090e1a 0%, transparent 15%, transparent 85%, #090e1a 100%)"
        }} />
      </motion.div>

      <div className="absolute inset-0 grain" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeIn>
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-jade-300 mb-4 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
            <span className="relative z-10">Agende sua consulta</span>
          </span>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
            Cuide de você.
            <br />
            <span className="bg-gradient-to-r from-jade-300 to-jade-400 bg-clip-text text-transparent">
              Você merece.
            </span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="mt-6 text-lg text-white/60 leading-relaxed max-w-xl mx-auto">
            Agende sua consulta e comece a cuidar da sua saúde com quem entende e
            respeita você. Estou aqui para te acolher.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <MagneticButton
              as="a"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="items-center justify-center gap-2 px-10 py-4 bg-jade-500 text-white font-semibold rounded-full hover:bg-jade-400 transition-all duration-300 hover:shadow-xl hover:shadow-jade-500/30 text-lg"
            >
              Agendar pelo WhatsApp
            </MagneticButton>
            <MagneticButton
              as="a"
              href="tel:+5571999999999"
              className="items-center justify-center gap-2 px-10 py-4 border border-white/20 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
            >
              Ligar Agora
            </MagneticButton>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
