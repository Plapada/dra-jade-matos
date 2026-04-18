"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { MagneticButton } from "@/components/shared/magnetic-button";
import { WHATSAPP_URL } from "@/lib/constants";

export function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  const words =
    "Saúde feminina em todas as fases: do cuidado preventivo ao tratamento cirúrgico.".split(" ");

  return (
    <section
      ref={ref}
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Foto full-screen com parallax */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 will-change-transform"
      >
        <Image
          src="/images/expanded-image-1776470052360.png"
          alt="Drª Jade Matos - Ginecologista e Cirurgiã em Salvador, BA"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
      </motion.div>

      {/* Overlay escuro suave para legibilidade */}
      <div className="absolute inset-0 bg-jade-950/30" />

      <div className="absolute inset-0 grain" />

      {/* Floating elements */}
      <div className="absolute top-1/4 right-[33%] w-4 h-4 rounded-full bg-jade-400/15 animate-float" />
      <div className="absolute top-2/3 right-[8%] w-3 h-3 rounded-full bg-jade-300/20 animate-float-delayed" />

      {/* Content — agora alinhado à DIREITA */}
      <motion.div
        style={{ opacity, y: textY }}
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 will-change-transform"
      >
        <div className="max-w-2xl ml-auto text-right">
          {/* Glass card behind text */}
          <div className="relative rounded-3xl bg-white/20 backdrop-blur-2xl border border-white/40 shadow-[0_8px_60px_rgba(0,0,0,0.35)] ring-1 ring-white/10 px-8 py-10 lg:px-10 lg:py-12">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-jade-50/80 backdrop-blur-sm border border-jade-200/60 mb-6 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer" />
            <span className="w-2 h-2 rounded-full bg-jade-500 animate-pulse-soft" />
            <span className="text-xs font-semibold text-jade-700 uppercase tracking-wider relative z-10">
              Ginecologista e Cirurgiã em Salvador
            </span>
          </motion.div>

          {/* Nome — destaque acima do título */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-2xl sm:text-3xl text-white/90 mb-4 italic"
          >
            Drª Jade Matos
          </motion.p>

          {/* Headline — word by word */}
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.15]">
            {words.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.3 + i * 0.07,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="inline-block mr-[0.3em]"
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-lg text-white/80 leading-relaxed max-w-lg ml-auto"
          >
            Atendimento com acolhimento, respeito e confiança. Cada mulher
            é única e merece um cuidado personalizado, sem pressa e sem
            julgamentos.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 flex flex-col sm:flex-row gap-4 sm:justify-end"
          >
            <MagneticButton
              as="a"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="items-center justify-center gap-2 px-8 py-4 bg-jade-500 text-white font-semibold rounded-full hover:bg-jade-600 transition-all duration-300 hover:shadow-xl hover:shadow-jade-500/25"
            >
              Agende sua Consulta
            </MagneticButton>
            <MagneticButton
              as="a"
              href="#especialidades"
              className="items-center justify-center gap-2 px-8 py-4 bg-white/70 backdrop-blur-sm border border-jade-200/50 text-jade-700 font-semibold rounded-full hover:bg-white hover:border-jade-300 transition-all duration-300"
            >
              Conheça Meus Serviços
            </MagneticButton>
          </motion.div>
          </div>{/* fim glass card */}
        </div>

        {/* Floating badge */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2, duration: 0.7 }}
          className="absolute bottom-20 left-6 sm:left-12 glass-strong rounded-2xl px-4 py-3 shadow-lg hidden sm:block animate-float"
        >
          <p className="text-xs font-semibold text-jade-800">
            ✨ Cirurgia Ginecológica
          </p>
          <p className="text-[10px] text-jade-700/60 mt-0.5">
            Histeroscopia e técnicas minimamente invasivas
          </p>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest text-jade-700/40">
          Role para descobrir
        </span>
        <ArrowDown
          className="h-4 w-4 text-jade-700/40"
          style={{ animation: "scroll-hint 2s ease-in-out infinite" }}
        />
      </motion.div>
    </section>
  );
}
