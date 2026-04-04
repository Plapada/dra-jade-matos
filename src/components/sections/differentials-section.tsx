"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { SectionHeading } from "@/components/shared/section-heading";
import { differentials } from "@/data/differentials";

export function DifferentialsSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const photoY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section ref={ref} id="diferenciais" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-rose-50/80 via-cream-50 to-jade-50/50 grain" />
      <div className="absolute top-0 right-1/4 w-64 h-64 bg-rose-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-jade-200/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Diferenciais"
          title="Por que me escolher?"
          subtitle="Meus valores guiam cada atendimento para que você se sinta verdadeiramente cuidada"
        />

        <div className="grid lg:grid-cols-5 gap-12 items-center mt-8">
          {/* Photo with parallax */}
          <motion.div
            style={{ y: photoY }}
            className="lg:col-span-2 relative will-change-transform"
          >
            <div className="relative w-full aspect-[3/4] max-w-sm mx-auto rounded-3xl overflow-hidden shadow-xl shadow-navy-900/10 group cursor-pointer">
              <Image
                src="/images/IMG_2218.jpg"
                alt="Dra. Jade Matos - profissional dedicada"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 384px, 320px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/20 to-transparent" />
            </div>
            <div className="absolute -top-3 -right-3 w-16 h-16 border-t-2 border-r-2 border-jade-300/40 rounded-tr-3xl" />
            <div className="absolute -bottom-3 -left-3 w-16 h-16 border-b-2 border-l-2 border-rose-300/40 rounded-bl-3xl" />
          </motion.div>

          {/* Cards */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {differentials.map((diff, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  delay: i * 0.1,
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group p-6 rounded-2xl bg-white/70 backdrop-blur-sm border border-white/60 shadow-sm hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(42,157,110,0.1)] hover:border-jade-200/40 transition-all duration-300 cursor-default"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-jade-500/10 to-rose-500/10 flex items-center justify-center mb-4 group-hover:from-jade-500/20 group-hover:to-rose-500/20 group-hover:scale-110 transition-all duration-300">
                  <diff.icon className="h-6 w-6 text-jade-600 group-hover:text-jade-500 transition-colors" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-navy-900 mb-2 group-hover:text-jade-800 transition-colors">
                  {diff.title}
                </h3>
                <p className="text-sm text-navy-700/60 leading-relaxed">
                  {diff.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
