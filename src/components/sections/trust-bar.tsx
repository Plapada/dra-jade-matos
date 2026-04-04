"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { AnimatedCounter } from "@/components/shared/animated-counter";
import { Award, Users, Calendar, Stethoscope } from "lucide-react";

const stats = [
  {
    icon: Award,
    value: null,
    label: "CRM-BA",
    suffix: "",
    prefix: "",
    display: "CRM-BA",
  },
  {
    icon: Calendar,
    value: 5,
    label: "Anos de Experiência",
    suffix: "+",
    prefix: "",
  },
  {
    icon: Users,
    value: 2000,
    label: "Pacientes Atendidas",
    suffix: "+",
    prefix: "",
  },
  {
    icon: Stethoscope,
    value: 500,
    label: "Cirurgias Realizadas",
    suffix: "+",
    prefix: "",
  },
];

export function TrustBar() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const bgX = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <section ref={ref} className="relative py-8 bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900 overflow-hidden">
      {/* Animated accent lines */}
      <motion.div
        style={{ x: bgX }}
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-jade-500/40 to-transparent"
      />
      <motion.div
        style={{ x: bgX }}
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-jade-500/20 to-transparent"
      />

      {/* Subtle moving glow */}
      <motion.div
        animate={{ x: ["-20%", "120%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 w-32 h-full bg-gradient-to-r from-transparent via-jade-400/5 to-transparent pointer-events-none"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false }}
              transition={{
                delay: i * 0.1,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ scale: 1.08, y: -2 }}
              className="flex items-center gap-3 justify-center group cursor-default"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <stat.icon className="h-5 w-5 text-jade-400 shrink-0 group-hover:text-jade-300 transition-colors" />
              </motion.div>
              <div>
                <div className="text-xl font-bold text-white">
                  {stat.value ? (
                    <AnimatedCounter
                      end={stat.value}
                      suffix={stat.suffix}
                      prefix={stat.prefix}
                    />
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
