"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SectionHeading } from "@/components/shared/section-heading";
import { services } from "@/data/services";
import { WHATSAPP_URL } from "@/lib/constants";

export function ServicesSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <section ref={ref} id="especialidades" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background with parallax */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 gradient-mesh-alt grain" />

      {/* Animated decorative blobs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 20, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-0 w-72 h-72 bg-jade-200/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          y: [0, -20, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="absolute bottom-0 left-0 w-80 h-80 bg-rose-100/20 rounded-full blur-3xl"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Especialidades"
          title="Como posso cuidar de você"
          subtitle="Serviços ginecológicos completos com atendimento humanizado e técnicas modernas"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50, rotateX: 15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{
                delay: i * 0.08,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -8,
                boxShadow: "0 25px 60px rgba(42, 157, 110, 0.12)",
                borderColor: "rgba(42, 157, 110, 0.3)",
              }}
              className="group glass rounded-2xl p-6 relative overflow-hidden cursor-pointer transition-colors duration-300"
            >
              {/* Hover gradient overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-jade-500/5 to-rose-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />

              {/* Animated border glow on hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
                boxShadow: "inset 0 0 0 1px rgba(42, 157, 110, 0.2)"
              }} />

              <div className="flex flex-col h-full relative z-10">
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="w-12 h-12 rounded-xl bg-jade-500/10 flex items-center justify-center mb-4 group-hover:bg-jade-500/20 transition-colors duration-300"
                >
                  <service.icon className="h-6 w-6 text-jade-600 group-hover:text-jade-500 transition-colors" />
                </motion.div>
                <h3 className="font-serif text-lg font-semibold text-navy-900 mb-2 group-hover:text-jade-800 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-navy-700/60 leading-relaxed flex-1">
                  {service.description}
                </p>

                {/* Arrow that appears on hover */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 0 }}
                  className="mt-4 flex items-center gap-1 text-jade-500 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    Saiba mais
                  </a>
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
