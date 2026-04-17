"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Check, ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { services } from "@/data/services";
import { WHATSAPP_URL } from "@/lib/constants";

export function ServicesSection() {
  return (
    <section id="especialidades" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 gradient-mesh-alt grain" />
      <div className="absolute top-20 right-0 w-72 h-72 bg-jade-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-rose-100/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Especialidades"
          title="Como posso cuidar de você"
          subtitle="Atendimento ginecológico completo com técnica moderna e acolhimento humanizado"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mt-4">
          {services.map((service, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                delay: i * 0.1,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative overflow-hidden rounded-3xl bg-white/70 backdrop-blur-sm border border-jade-100/60 shadow-lg shadow-jade-900/5 hover:shadow-2xl hover:shadow-jade-900/10 hover:-translate-y-1 transition-all duration-500"
            >
              {/* Imagem topo */}
              <div className="relative w-full h-72 sm:h-80 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className={`object-cover ${service.imagePosition ?? "object-top"} group-hover:scale-105 transition-transform duration-700`}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-jade-950/40 via-transparent to-transparent" />

                {/* Ícone sobreposto */}
                <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-jade-500 transition-all duration-300">
                  <service.icon className="h-6 w-6 text-jade-600 group-hover:text-white transition-colors" />
                </div>
              </div>

              {/* Conteúdo */}
              <div className="p-7 lg:p-8">
                <h3 className="font-serif text-2xl lg:text-3xl font-semibold text-jade-900 mb-3 group-hover:text-jade-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-base text-navy-700/70 leading-relaxed mb-5">
                  {service.description}
                </p>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 mb-6">
                  {service.bullets.map((bullet, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2 text-sm text-navy-700/80"
                    >
                      <Check className="h-4 w-4 text-jade-500 mt-0.5 shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-jade-600 hover:text-jade-500 transition-colors group/cta"
                >
                  Agendar pelo WhatsApp
                  <ArrowUpRight className="h-4 w-4 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
