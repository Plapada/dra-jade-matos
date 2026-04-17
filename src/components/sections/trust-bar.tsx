"use client";

import { motion } from "framer-motion";
import { AnimatedCounter } from "@/components/shared/animated-counter";
import { Award, Users, Calendar, Stethoscope, Microscope } from "lucide-react";

const stats = [
  { icon: Award, value: null, label: "CRM-BA", suffix: "", prefix: "", display: "CRM-BA" },
  { icon: Calendar, value: 5, label: "Anos de Experiência", suffix: "+", prefix: "" },
  { icon: Users, value: 7000, label: "Atendimentos", suffix: "+", prefix: "" },
  { icon: Stethoscope, value: 600, label: "Cirurgias Realizadas", suffix: "+", prefix: "" },
  { icon: Microscope, value: 300, label: "Histeroscopias", suffix: "+", prefix: "" },
];

export function TrustBar() {
  return (
    <section className="relative py-8 bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-jade-500/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-jade-500/20 to-transparent" />

      {/* Subtle sweep — CSS animation */}
      <div className="absolute top-0 w-32 h-full bg-gradient-to-r from-transparent via-jade-400/5 to-transparent animate-shimmer pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex items-center gap-3 justify-center group cursor-default hover:scale-105 transition-transform duration-300"
            >
              <stat.icon className="h-5 w-5 text-jade-400 shrink-0 group-hover:text-jade-300 transition-colors" />
              <div>
                <div className="text-xl font-bold text-white">
                  {stat.value ? (
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
                  ) : (
                    stat.display
                  )}
                </div>
                <p className="text-[11px] text-white/50 uppercase tracking-wider group-hover:text-white/70 transition-colors">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
