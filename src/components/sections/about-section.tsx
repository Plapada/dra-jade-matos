"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { SectionHeading } from "@/components/shared/section-heading";
import { FadeIn } from "@/components/shared/fade-in";
import { GraduationCap, Heart, Scissors } from "lucide-react";

const credentials = [
  {
    icon: GraduationCap,
    title: "Formação",
    text: "Médica formada pela BAHIANA com residência em Ginecologia e Obstetrícia pela UFBA.",
  },
  {
    icon: Scissors,
    title: "Expertise",
    text: "Cirurgiã Ginecológica com foco em Histeroscopia e técnicas minimamente invasivas.",
  },
  {
    icon: Heart,
    title: "Propósito",
    text: "Apaixonada pelo cuidado integral e pela precisão da cirurgia ginecológica em todas as fases da vida.",
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
  const y3 = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section id="sobre" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-cream-50 grain" />
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-jade-100/40 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-rose-100/30 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Sobre mim"
          title="Conheça a Drª Jade Matos"
          subtitle="Ginecologista e Cirurgiã apaixonada por cuidar de mulheres com acolhimento, respeito e precisão técnica"
        />

        <div ref={ref} className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mt-8">
          {/* Photos with parallax — 3 fotos */}
          <div className="relative h-[560px] lg:h-[680px]">
            <motion.div
              style={{ y: y1 }}
              className="absolute top-0 left-0 w-64 sm:w-72 h-80 sm:h-96 rounded-3xl overflow-hidden shadow-xl shadow-navy-900/10 z-10 will-change-transform"
            >
              <Image
                src="/images/IMG_2176.jpg"
                alt="Drª Jade Matos em consulta - atendimento humanizado"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 640px) 256px, 288px"
              />
            </motion.div>

            <motion.div
              style={{ y: y2 }}
              className="absolute bottom-0 right-0 sm:right-8 w-56 sm:w-64 h-72 sm:h-80 rounded-3xl overflow-hidden shadow-xl shadow-navy-900/10 border-4 border-white z-20 will-change-transform"
            >
              <Image
                src="/images/IMG_2115.jpg"
                alt="Drª Jade Matos - bastidores de consultório"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 640px) 224px, 256px"
              />
            </motion.div>

            <motion.div
              style={{ y: y3 }}
              className="absolute top-40 right-12 sm:right-16 w-44 sm:w-52 h-56 sm:h-64 rounded-3xl overflow-hidden shadow-xl shadow-navy-900/10 border-4 border-white z-0 will-change-transform"
            >
              <Image
                src="/images/IMG_2218.jpg"
                alt="Drª Jade Matos - sorriso acolhedor"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 640px) 176px, 208px"
              />
            </motion.div>

            <div className="absolute top-12 right-12 w-32 h-32 border-2 border-jade-200/30 rounded-3xl -rotate-6 pointer-events-none" />
            <div className="absolute bottom-20 left-20 w-20 h-20 bg-rose-100/50 rounded-full blur-xl pointer-events-none" />
          </div>

          {/* Text */}
          <div>
            <FadeIn direction="right">
              <p className="text-lg leading-relaxed text-navy-700/80 mb-6">
                Sou <strong className="text-jade-600">Jade Matos</strong>,
                ginecologista e cirurgiã ginecológica em Salvador. Minha
                trajetória na medicina foi moldada por instituições que são
                referência na nossa terra: formei-me pela Escola Bahiana de
                Medicina e realizei minha residência médica de ginecologia e
                obstetrícia na UFBA.
              </p>
            </FadeIn>

            <FadeIn direction="right" delay={0.1}>
              <p className="text-lg leading-relaxed text-navy-700/80 mb-6">
                Natural do interior da Bahia, trago comigo a paixão pelo
                cuidado e pela escuta atenta. Acredito que toda mulher merece
                um atendimento respeitoso, sem julgamentos e verdadeiramente
                humanizado em todas as fases da vida — da consulta de rotina
                ao procedimento cirúrgico.
              </p>
            </FadeIn>

            <FadeIn direction="right" delay={0.2}>
              <p className="text-lg leading-relaxed text-navy-700/80 mb-8">
                Minhas pacientes costumam destacar meu jeito comunicativo e
                jovial, e é exatamente assim que pratico a medicina: unindo a
                precisão técnica ao acolhimento. Para mim, cuidar da saúde
                feminina é, acima de tudo, garantir que você se sinta ouvida
                e segura em cada passo da sua jornada.
              </p>
            </FadeIn>

            <div className="space-y-4">
              {credentials.map((cred, i) => (
                <FadeIn key={i} direction="right" delay={0.3 + i * 0.1}>
                  <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/70 backdrop-blur-sm border border-jade-100/60 hover:bg-jade-50/50 hover:border-jade-200/70 hover:translate-x-1 transition-all duration-300">
                    <div className="shrink-0 w-11 h-11 rounded-xl bg-jade-500/10 flex items-center justify-center">
                      <cred.icon className="h-5 w-5 text-jade-600" />
                    </div>
                    <div>
                      <h4 className="font-serif text-base font-semibold text-jade-900 mb-1">
                        {cred.title}
                      </h4>
                      <p className="text-sm text-navy-700/75 leading-relaxed">
                        {cred.text}
                      </p>
                    </div>
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
