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
  const y = useTransform(scrollYProgress, [0, 1], [-30, 30]);
  const textY = useTransform(scrollYProgress, [0, 1], [20, -20]);
  const glowScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 0.8]);

  return (
    <section ref={ref} className="relative py-32 lg:py-40 overflow-hidden bg-[#090e1a]">
      {/* Gradiente no topo */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#090e1a] to-transparent pointer-events-none" />
      {/* Gradiente na base */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#090e1a] to-transparent pointer-events-none" />

      {/* Animated jade radial glow */}
      <motion.div
        style={{ scale: glowScale }}
        className="absolute inset-0 pointer-events-none"
      >
        <div style={{
          background: "radial-gradient(ellipse 60% 70% at 50% 80%, rgba(42,157,110,0.12) 0%, transparent 70%)"
        }} className="absolute inset-0" />
      </motion.div>

      {/* Animated floating particles */}
      {[
        { top: "20%", left: "20%", size: "1.5", delay: 0 },
        { top: "35%", right: "22%", size: "1", delay: 1.5 },
        { top: "60%", left: "15%", size: "1", delay: 3 },
        { top: "25%", right: "18%", size: "1.5", delay: 4.5 },
        { top: "45%", left: "30%", size: "0.5", delay: 2 },
        { top: "70%", right: "30%", size: "0.5", delay: 5 },
      ].map((p, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -20, 0],
            x: [0, i % 2 === 0 ? 10 : -10, 0],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{ duration: 6 + i, repeat: Infinity, delay: p.delay, ease: "easeInOut" }}
          className="absolute rounded-full bg-jade-400/20"
          style={{
            top: p.top,
            left: "left" in p ? p.left : undefined,
            right: "right" in p ? p.right : undefined,
            width: `${parseFloat(p.size) * 4}px`,
            height: `${parseFloat(p.size) * 4}px`,
          }}
        />
      ))}

      {/* Dra. Jade cutout with parallax */}
      <motion.div
        style={{ y }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-full"
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

      {/* Grain */}
      <div className="absolute inset-0 grain" />

      {/* Content with parallax */}
      <motion.div
        style={{ y: textY }}
        className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <FadeIn>
          <motion.span
            whileHover={{ scale: 1.05 }}
            className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-jade-300 mb-4 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
            <span className="relative z-10">Agende sua consulta</span>
          </motion.span>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
            {"Cuide de você.".split(" ").map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block mr-[0.25em]"
              >
                {word}
              </motion.span>
            ))}
            <br />
            <span className="bg-gradient-to-r from-jade-300 to-jade-400 bg-clip-text text-transparent">
              {"Você merece.".split(" ").map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-block mr-[0.25em]"
                >
                  {word}
                </motion.span>
              ))}
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
              className="items-center justify-center gap-2 px-10 py-4 bg-jade-500 text-white font-semibold rounded-full hover:bg-jade-400 transition-all duration-300 hover:shadow-xl hover:shadow-jade-500/30 text-lg group"
            >
              <span className="relative z-10">Agendar pelo WhatsApp</span>
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
      </motion.div>
    </section>
  );
}
