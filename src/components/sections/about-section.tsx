"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { SectionHeading } from "@/components/shared/section-heading";
import { FadeIn } from "@/components/shared/fade-in";
import { GraduationCap, Heart, Award } from "lucide-react";

const credentials = [
  {
    icon: GraduationCap,
    text: "Formada em Medicina com especialização em Ginecologia e Obstetrícia",
  },
  {
    icon: Award,
    text: "Cirurgiã Ginecológica com treinamento em técnicas minimamente invasivas",
  },
  {
    icon: Heart,
    text: "Apaixonada pelo cuidado integral da saúde feminina em todas as fases da vida",
  },
];

export function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const { scrollYProgress: sectionProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-30, 30]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [-3, 3]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [3, -3]);
  const bgY = useTransform(sectionProgress, [0, 1], ["-3%", "3%"]);

  return (
    <section ref={sectionRef} id="sobre" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background with parallax */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 bg-cream-50 grain" />

      {/* Animated decorative blobs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          borderRadius: ["60% 40% 30% 70%", "40% 60% 70% 30%", "60% 40% 30% 70%"],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-32 -right-32 w-96 h-96 bg-jade-100/40 blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          borderRadius: ["40% 60% 70% 30%", "60% 40% 30% 70%", "40% 60% 70% 30%"],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        className="absolute -bottom-32 -left-32 w-80 h-80 bg-rose-100/30 blur-3xl"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Sobre mim"
          title="Conheça a Dra. Jade Matos"
          subtitle="Ginecologista apaixonada por cuidar de mulheres com acolhimento e respeito"
        />

        <div ref={ref} className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mt-8">
          {/* Photos with enhanced parallax and rotation */}
          <div className="relative h-[500px] lg:h-[600px]">
            {/* Main photo */}
            <motion.div
              style={{ y: y1, rotate: rotate1 }}
              whileHover={{ scale: 1.03, zIndex: 20 }}
              transition={{ duration: 0.3 }}
              className="absolute top-0 left-0 w-64 sm:w-72 h-80 sm:h-96 rounded-3xl overflow-hidden shadow-xl shadow-navy-900/10 z-10 cursor-pointer"
            >
              <Image
                src="/images/IMG_2176.jpg"
                alt="Dra. Jade Matos em consulta - atendimento humanizado"
                fill
                className="object-cover transition-transform duration-700 hover:scale-110"
                sizes="(max-width: 640px) 256px, 288px"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-jade-900/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
            </motion.div>

            {/* Secondary photo */}
            <motion.div
              style={{ y: y2, rotate: rotate2 }}
              whileHover={{ scale: 1.03, zIndex: 20 }}
              transition={{ duration: 0.3 }}
              className="absolute bottom-0 right-0 sm:right-8 w-56 sm:w-64 h-72 sm:h-80 rounded-3xl overflow-hidden shadow-xl shadow-navy-900/10 border-4 border-white cursor-pointer"
            >
              <Image
                src="/images/IMG_2051.jpg"
                alt="Dra. Jade Matos - lado pessoal e acolhedor"
                fill
                className="object-cover transition-transform duration-700 hover:scale-110"
                sizes="(max-width: 640px) 224px, 256px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-jade-900/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
            </motion.div>

            {/* Animated decorative elements */}
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-12 right-12 w-32 h-32 border-2 border-jade-200/30 rounded-3xl"
            />
            <motion.div
              animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute bottom-20 left-20 w-20 h-20 bg-rose-100/50 rounded-full blur-xl"
            />
          </div>

          {/* Text */}
          <div>
            <FadeIn direction="right">
              <p className="text-lg leading-relaxed text-navy-700/80 mb-6">
                Sou a <strong className="text-jade-600">Jade Matos</strong>,
                ginecologista e cirurgiã ginecológica, apaixonada pelo cuidado com
                as mulheres. Acredito que toda mulher merece um atendimento respeitoso,
                acolhedor e sem julgamentos.
              </p>
            </FadeIn>

            <FadeIn direction="right" delay={0.1}>
              <p className="text-lg leading-relaxed text-navy-700/80 mb-8">
                De Salvador, Bahia, levo minha paixão pelo mar e pelo cuidado para
                cada consulta. Minhas pacientes costumam destacar meu jeito
                atencioso, comunicativo e jovial de conduzir os atendimentos — e
                é exatamente assim que acredito que a medicina deve ser praticada.
              </p>
            </FadeIn>

            <div className="space-y-4">
              {credentials.map((cred, i) => (
                <FadeIn key={i} direction="right" delay={0.2 + i * 0.1}>
                  <motion.div
                    whileHover={{
                      x: 8,
                      backgroundColor: "rgba(42, 157, 110, 0.05)",
                      borderColor: "rgba(42, 157, 110, 0.3)",
                    }}
                    transition={{ duration: 0.3 }}
                    className="flex items-start gap-3 p-4 rounded-xl bg-white/60 backdrop-blur-sm border border-jade-100/50 cursor-default"
                  >
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.5 }}
                    >
                      <cred.icon className="h-5 w-5 text-jade-500 mt-0.5 shrink-0" />
                    </motion.div>
                    <p className="text-sm text-navy-700/70">{cred.text}</p>
                  </motion.div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
