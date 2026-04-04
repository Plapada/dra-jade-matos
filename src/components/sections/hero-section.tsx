"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
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
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const smoothScale = useSpring(scale, { stiffness: 100, damping: 30 });

  const words = "Cuidado ginecológico humanizado para todas as fases da sua vida".split(" ");

  return (
    <section
      ref={ref}
      id="inicio"
      className="relative min-h-screen flex items-end overflow-hidden"
    >
      {/* Fundo sólido igualando o tom da foto */}
      <div className="absolute inset-0" style={{ background: "#ccd8d2" }} />

      {/* Foto da doutora com parallax e zoom on scroll */}
      <motion.div style={{ y, scale: smoothScale }} className="absolute top-0 right-0 w-[58%] h-full">
        <Image
          src="/images/IMG_2354.jpg"
          alt="Dra. Jade Matos - Ginecologista em Salvador, BA"
          fill
          className="object-cover object-[center_-100px]"
          priority
          sizes="58vw"
        />
      </motion.div>

      {/* Degradê suave sobre a borda esquerda da foto */}
      <div className="absolute top-0 bottom-0 left-[38%] w-[18%] pointer-events-none" style={{
        background: "linear-gradient(to right, #ccd8d2 0%, transparent 100%)"
      }} />

      {/* Grain texture */}
      <div className="absolute inset-0 grain" />

      {/* Animated floating elements */}
      <motion.div
        animate={{
          y: [0, -25, 0],
          x: [0, 10, 0],
          rotate: [0, 5, 0],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-[33%] w-4 h-4 rounded-full bg-jade-400/15 backdrop-blur-sm"
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
          x: [0, -15, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-2/3 left-[8%] w-3 h-3 rounded-full bg-jade-300/20 backdrop-blur-sm"
      />
      <motion.div
        animate={{
          y: [0, -15, 0],
          rotate: [0, 180, 360],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        className="absolute top-[40%] left-[22%] w-2 h-2 rounded-sm bg-jade-500/10"
      />

      {/* Content with scroll parallax */}
      <motion.div
        style={{ opacity, y: textY }}
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 pt-40"
      >
        <div className="max-w-2xl">
          {/* Badge with shimmer */}
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-jade-50/80 backdrop-blur-sm border border-jade-200/60 mb-6 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer" />
            <span className="w-2 h-2 rounded-full bg-jade-500 animate-pulse-soft" />
            <span className="text-xs font-semibold text-jade-700 uppercase tracking-wider relative z-10">
              Ginecologista em Salvador
            </span>
          </motion.div>

          {/* Headline — word by word reveal with blur */}
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#143f30] tracking-tight leading-[1.1]">
            {words.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 30, filter: "blur(10px)", rotateX: 45 }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)", rotateX: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.3 + i * 0.07,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="inline-block mr-[0.3em]"
              >
                {word}
              </motion.span>
            ))}
          </h1>

          {/* Subtitle with slide up */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-lg text-[#1a6347]/70 leading-relaxed max-w-lg"
          >
            Atendimento com acolhimento, respeito e confiança. Cada mulher
            é única e merece um cuidado personalizado, sem pressa e sem
            julgamentos.
          </motion.p>

          {/* CTAs with magnetic hover */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 flex flex-col sm:flex-row gap-4"
          >
            <MagneticButton
              as="a"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="items-center justify-center gap-2 px-8 py-4 bg-jade-500 text-white font-semibold rounded-full hover:bg-jade-600 transition-all duration-300 hover:shadow-xl hover:shadow-jade-500/25 group"
            >
              <span className="relative z-10">Agende sua Consulta</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-jade-600 to-jade-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </MagneticButton>
            <MagneticButton
              as="a"
              href="#especialidades"
              className="items-center justify-center gap-2 px-8 py-4 bg-white/70 backdrop-blur-sm border border-jade-200/50 text-[#1a6347] font-semibold rounded-full hover:bg-white hover:border-jade-300 transition-all duration-300"
            >
              Conheça Meus Serviços
            </MagneticButton>
          </motion.div>
        </div>

        {/* Floating badge with entrance animation */}
        <motion.div
          initial={{ opacity: 0, x: 40, rotateZ: 5 }}
          animate={{ opacity: 1, x: 0, rotateZ: 0 }}
          transition={{ delay: 2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="absolute bottom-20 right-6 sm:right-12 glass-strong rounded-2xl px-4 py-3 shadow-lg hidden sm:block"
        >
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <p className="text-xs font-semibold text-jade-800">
              ✨ Atendimento Humanizado
            </p>
            <p className="text-[10px] text-jade-700/50 mt-0.5">
              Acolhimento em cada consulta
            </p>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator with enhanced animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.span
          animate={{ opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-[10px] uppercase tracking-widest text-jade-700/40"
        >
          Role para descobrir
        </motion.span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="h-4 w-4 text-jade-700/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
