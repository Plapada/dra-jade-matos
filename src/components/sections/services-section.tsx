"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/section-heading";
import { GlassCard } from "@/components/shared/glass-card";
import { StaggerChildren, staggerItemVariants } from "@/components/shared/stagger-children";
import { services } from "@/data/services";

export function ServicesSection() {
  return (
    <section id="especialidades" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-mesh-alt grain" />

      {/* Decorative */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-jade-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-rose-100/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Especialidades"
          title="Como posso cuidar de você"
          subtitle="Serviços ginecológicos completos com atendimento humanizado e técnicas modernas"
        />

        <StaggerChildren
          staggerDelay={0.08}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {services.map((service, i) => (
            <motion.div key={i} variants={staggerItemVariants}>
              <GlassCard className="h-full group">
                <div className="flex flex-col h-full">
                  <div className="w-12 h-12 rounded-xl bg-jade-500/10 flex items-center justify-center mb-4 group-hover:bg-jade-500/20 transition-colors duration-300">
                    <service.icon className="h-6 w-6 text-jade-600" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-navy-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-navy-700/60 leading-relaxed flex-1">
                    {service.description}
                  </p>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
