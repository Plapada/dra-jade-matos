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
      className="relative min-h-screen flex items-end lg:items-center overflow-hidden"
    >
      {/* Foto full-screen com parallax */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 will-change-transform"
      >
        <Image
          src="/images/IMG_2425.jpg"
          alt="Drª Jade Matos - Ginecologista e Cirurgiã em Salvador, BA"
          fill
          className="object-cover object-[18%_65%] lg:object-[28%_50%]"
          priority
          quality={95}
          sizes="100vw"
        />
      </motion.div>

      {/* Desktop: overlay leve — preserva nitidez da foto */}
      <div className="absolute inset-0 hidden lg:block bg-jade-950/20" />

      {/* Mobile: gradiente de baixo para cima — escurece onde fica o texto */}
      <div className="absolute inset-0 lg:hidden bg-gradient-to-t from-jade-950/80 via-jade-950/15 to-transparent" />

      {/* Floating elements (desktop only) */}
      <div className="absolute top-1/4 right-[33%] w-4 h-4 rounded-full bg-jade-400/15 animate-float hidden lg:block" />
      <div className="absolute top-2/3 right-[8%] w-3 h-3 rounded-full bg-jade-300/20 animate-float-delayed hidden lg:block" />

      {/* Content */}
      <motion.div
        style={{ opacity, y: textY }}
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-[54vh] pb-10 lg:pt-28 lg:pb-16 will-change-transform"
      >
        {/* Mobile: full-width centered | Desktop: right-aligned 2-col */}
        <div className="w-full max-w-2xl mx-auto lg:mx-0 lg:ml-auto text-center lg:text-right">

          {/* Glass card */}
          <div className="relative rounded-3xl
            bg-jade-950/55 lg:bg-white/20
            backdrop-blur-2xl
            border border-white/25 lg:border-white/40
            shadow-[0_8px_60px_rgba(0,0,0,0.40)]
            ring-1 ring-white/10
            px-6 py-8 lg:px-10 lg:py-12">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/30 mb-5 relative overflow-hidden"
            >
              <span className="w-2 h-2 rounded-full bg-jade-400 animate-pulse-soft" />
              <span className="text-xs font-semibold text-white/90 uppercase tracking-wider relative z-10">
                Ginecologista e Cirurgiã em Salvador
              </span>
            </motion.div>

            {/* Nome — aumentado em relação ao subtítulo (hierarquia da identidade) */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white mb-4 italic font-medium"
            >
              Drª Jade Matos
            </motion.p>

            {/* Headline — fonte ligeiramente reduzida para o nome se destacar */}
            <h1 className="font-serif text-xl sm:text-2xl lg:text-[2.4rem] font-semibold text-white/95 tracking-tight leading-[1.2]">
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
              className="mt-4 text-base lg:text-lg text-white/75 leading-relaxed mx-auto lg:ml-auto max-w-sm lg:max-w-lg"
            >
              Atendimento com acolhimento, respeito e confiança. Cada mulher
              é única e merece um cuidado personalizado, sem pressa e sem julgamentos.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 flex flex-col sm:flex-row gap-3 justify-center lg:justify-end"
            >
              <MagneticButton
                as="a"
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="items-center justify-center gap-2 px-7 py-3.5 bg-jade-500 text-white font-semibold rounded-full hover:bg-jade-600 transition-all duration-300 hover:shadow-xl hover:shadow-jade-500/25"
              >
                Agende sua Consulta
              </MagneticButton>
              <MagneticButton
                as="a"
                href="#especialidades"
                className="items-center justify-center gap-2 px-7 py-3.5 bg-white/15 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-full hover:bg-white/25 transition-all duration-300"
              >
                Conheça Meus Serviços
              </MagneticButton>
            </motion.div>
          </div>
        </div>

        {/* Floating badge — desktop only */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2, duration: 0.7 }}
          className="absolute bottom-20 left-6 sm:left-12 glass-strong rounded-2xl px-4 py-3 shadow-lg hidden lg:block animate-float"
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
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 hidden lg:flex"
      >
        <span className="text-[10px] uppercase tracking-widest text-white/40">
          Role para descobrir
        </span>
        <ArrowDown
          className="h-4 w-4 text-white/40"
          style={{ animation: "scroll-hint 2s ease-in-out infinite" }}
        />
      </motion.div>
    </section>
  );
}
