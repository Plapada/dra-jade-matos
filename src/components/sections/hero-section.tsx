"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { TextReveal } from "@/components/shared/text-reveal";
import { WHATSAPP_URL } from "@/lib/constants";

export function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      id="inicio"
      className="relative min-h-screen flex items-end overflow-hidden"
    >
      {/* Fundo sólido igualando o tom da foto */}
      <div className="absolute inset-0" style={{ background: "#ccd8d2" }} />

      {/* Foto da doutora — começa em 42% para sobrepor a junção */}
      <motion.div style={{ y }} className="absolute top-0 right-0 w-[58%] h-full">
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

      {/* Floating elements — apenas no lado esquerdo */}
      <div className="absolute top-1/4 left-[35%] w-3 h-3 rounded-full bg-jade-400/20 animate-float" />
      <div className="absolute top-2/3 left-[10%] w-2 h-2 rounded-full bg-jade-300/30 animate-float-delayed" />

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 pt-40"
      >
        <div className="max-w-2xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-jade-50 border border-jade-200/60 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-jade-500 animate-pulse-soft" />
            <span className="text-xs font-semibold text-jade-700 uppercase tracking-wider">
              Ginecologista em Salvador
            </span>
          </motion.div>

          {/* Headline */}
          <TextReveal
            text="Cuidado ginecológico humanizado para todas as fases da sua vida"
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#143f30] tracking-tight leading-[1.1]"
            delay={0.3}
          />

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="mt-6 text-lg text-[#1a6347]/70 leading-relaxed max-w-lg"
          >
            Atendimento com acolhimento, respeito e confiança. Cada mulher
            é única e merece um cuidado personalizado, sem pressa e sem
            julgamentos.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="mt-8 flex flex-col sm:flex-row gap-4"
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-jade-500 text-white font-semibold rounded-full hover:bg-jade-600 transition-all duration-300 hover:shadow-xl hover:shadow-jade-500/25 hover:-translate-y-0.5"
            >
              Agende sua Consulta
            </a>
            <a
              href="#especialidades"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/70 backdrop-blur-sm border border-jade-200/50 text-[#1a6347] font-semibold rounded-full hover:bg-white transition-all duration-300"
            >
              Conheça Meus Serviços
            </a>
          </motion.div>
        </div>

        {/* Floating badge — canto inferior direito */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.8, duration: 0.5 }}
          className="absolute bottom-20 right-6 sm:right-12 glass-strong rounded-2xl px-4 py-3 shadow-lg hidden sm:block"
        >
          <p className="text-xs font-semibold text-jade-800">
            ✨ Atendimento Humanizado
          </p>
          <p className="text-[10px] text-jade-700/50 mt-0.5">
            Acolhimento em cada consulta
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
