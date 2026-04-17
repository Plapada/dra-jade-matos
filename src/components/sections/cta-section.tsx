"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { ArrowRight, MapPin } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";
import { FadeIn } from "@/components/shared/fade-in";
import { MagneticButton } from "@/components/shared/magnetic-button";

export function CtaSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section
      ref={ref}
      className="relative py-24 lg:py-32 overflow-hidden bg-cream-50"
    >
      {/* Background layers claros */}
      <div className="absolute inset-0 gradient-mesh" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-jade-100/50 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-rose-100/40 rounded-full blur-3xl" />
      <div className="absolute inset-0 grain" />

      {/* Floating particles sutis */}
      <div className="absolute top-[20%] left-[12%] w-2 h-2 rounded-full bg-jade-400/30 animate-float" />
      <div className="absolute top-[35%] right-[15%] w-1.5 h-1.5 rounded-full bg-rose-400/30 animate-float-delayed" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Texto à esquerda */}
          <div className="text-center lg:text-left">
            <FadeIn>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-jade-500/10 border border-jade-200/60 mb-6">
                <span className="w-2 h-2 rounded-full bg-jade-500 animate-pulse-soft" />
                <span className="text-xs font-semibold text-jade-700 uppercase tracking-wider">
                  Agende sua Consulta
                </span>
              </span>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-jade-900 tracking-tight leading-[1.05]">
                Cuide de você.
                <br />
                <span className="text-gradient-jade italic">Você merece.</span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="mt-6 text-lg text-navy-700/70 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Agende sua consulta e comece a cuidar da sua saúde com quem
                entende e respeita você. Estou aqui para te acolher.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <MagneticButton
                  as="a"
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="items-center justify-center gap-2 px-10 py-4 bg-jade-500 text-white font-semibold rounded-full hover:bg-jade-600 transition-all duration-300 hover:shadow-xl hover:shadow-jade-500/30 text-base group"
                >
                  Agendar pelo WhatsApp
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </MagneticButton>
                <MagneticButton
                  as="a"
                  href="#localizacao"
                  className="items-center justify-center gap-2 px-10 py-4 bg-white/70 backdrop-blur-sm border border-jade-200/60 text-jade-700 font-semibold rounded-full hover:bg-white hover:border-jade-300 transition-all duration-300 text-base"
                >
                  <MapPin className="h-4 w-4" />
                  Ver Localizações
                </MagneticButton>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <p className="mt-6 text-sm text-navy-700/50 text-center lg:text-left">
                Atendimento particular e por convênios nas clínicas
                parceiras.
              </p>
            </FadeIn>
          </div>

          {/* Foto à direita com parallax */}
          <motion.div
            style={{ y }}
            className="relative will-change-transform"
          >
            <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-jade-900/15 border-[6px] border-white">
              <Image
                src="/images/IMG_19922.jpg"
                alt="Drª Jade Matos - agende sua consulta"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Gradient sutil para profundidade */}
              <div className="absolute inset-0 bg-gradient-to-t from-jade-900/15 via-transparent to-transparent" />
            </div>

            {/* Decorative frames */}
            <div className="absolute -top-6 -right-6 w-28 h-28 border-2 border-jade-200/50 rounded-3xl -rotate-6 pointer-events-none" />
            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-rose-100/60 rounded-full blur-md pointer-events-none" />

            {/* Floating tag */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute -bottom-6 right-6 glass-strong rounded-2xl px-5 py-3 shadow-lg"
            >
              <p className="text-xs font-semibold text-jade-900">
                ✨ Atendimento Humanizado
              </p>
              <p className="text-[10px] text-jade-700/60 mt-0.5">
                Acolhimento em cada consulta
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
