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
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y1 = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-25, 25]);

  return (
    <section id="sobre" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-cream-50 grain" />
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-jade-100/40 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-rose-100/30 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Sobre mim"
          title="Conheça a Dra. Jade Matos"
          subtitle="Ginecologista apaixonada por cuidar de mulheres com acolhimento e respeito"
        />

        <div ref={ref} className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mt-8">
          {/* Photos with parallax */}
          <div className="relative h-[500px] lg:h-[600px]">
            <motion.div
              style={{ y: y1 }}
              className="absolute top-0 left-0 w-64 sm:w-72 h-80 sm:h-96 rounded-3xl overflow-hidden shadow-xl shadow-navy-900/10 z-10 will-change-transform"
            >
              <Image
                src="/images/IMG_2176.jpg"
                alt="Dra. Jade Matos em consulta - atendimento humanizado"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 640px) 256px, 288px"
              />
            </motion.div>

            <motion.div
              style={{ y: y2 }}
              className="absolute bottom-0 right-0 sm:right-8 w-56 sm:w-64 h-72 sm:h-80 rounded-3xl overflow-hidden shadow-xl shadow-navy-900/10 border-4 border-white will-change-transform"
            >
              <Image
                src="/images/IMG_2051.jpg"
                alt="Dra. Jade Matos - lado pessoal e acolhedor"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 640px) 224px, 256px"
              />
            </motion.div>

            <div className="absolute top-12 right-12 w-32 h-32 border-2 border-jade-200/30 rounded-3xl -rotate-6" />
            <div className="absolute bottom-20 left-20 w-20 h-20 bg-rose-100/50 rounded-full blur-xl" />
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
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-white/60 backdrop-blur-sm border border-jade-100/50 hover:bg-jade-50/40 hover:border-jade-200/60 hover:translate-x-1 transition-all duration-300">
                    <cred.icon className="h-5 w-5 text-jade-500 mt-0.5 shrink-0" />
                    <p className="text-sm text-navy-700/70">{cred.text}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
