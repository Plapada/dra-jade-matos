"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Clock } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { LOCATIONS, WHATSAPP_URL } from "@/lib/constants";
import { MagneticButton } from "@/components/shared/magnetic-button";

export function LocationsSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-3%", "3%"]);

  return (
    <section ref={ref} id="localizacao" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background with parallax */}
      <motion.div
        style={{ y: bgY, background: "linear-gradient(135deg, #1a2744 0%, #141e36 50%, #090e1a 100%)" }}
        className="absolute inset-0 grain"
      />

      {/* Animated decorative glows */}
      <motion.div
        animate={{ opacity: [0.05, 0.1, 0.05], scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-0 left-1/3 w-64 h-64 bg-jade-500/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ opacity: [0.05, 0.08, 0.05], scale: [1, 1.15, 1] }}
        transition={{ duration: 10, repeat: Infinity, delay: 3 }}
        className="absolute bottom-0 right-1/4 w-80 h-80 bg-rose-500/5 rounded-full blur-3xl"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Localização"
          title="Onde me encontrar"
          subtitle="Dois endereços em Salvador para sua comodidade"
          light
        />

        <div className="grid md:grid-cols-2 gap-6 mt-8">
          {LOCATIONS.map((loc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{
                delay: i * 0.15,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -6,
                boxShadow: "0 25px 60px rgba(0, 0, 0, 0.3)",
              }}
              className="glass-dark rounded-2xl p-8 h-full transition-colors duration-300 group"
            >
              <h3 className="font-serif text-xl font-semibold text-white mb-6 group-hover:text-jade-300 transition-colors">
                {loc.name}
              </h3>

              <div className="space-y-4 mb-8">
                <motion.div
                  whileHover={{ x: 4 }}
                  className="flex items-start gap-3"
                >
                  <MapPin className="h-5 w-5 text-jade-400 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-white/80 text-sm">{loc.address}</p>
                    <p className="text-white/50 text-sm">{loc.city}</p>
                  </div>
                </motion.div>
                <motion.div
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-3"
                >
                  <Phone className="h-5 w-5 text-jade-400 shrink-0" />
                  <p className="text-white/80 text-sm">{loc.phone}</p>
                </motion.div>
                <motion.div
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-3"
                >
                  <Clock className="h-5 w-5 text-jade-400 shrink-0" />
                  <p className="text-white/80 text-sm">{loc.hours}</p>
                </motion.div>
              </div>

              {/* Map embed */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="rounded-xl overflow-hidden h-48 bg-navy-700/50 border border-white/5"
              >
                <iframe
                  src={loc.mapEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Mapa - ${loc.name}`}
                />
              </motion.div>

              <MagneticButton
                as="a"
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 w-full items-center justify-center gap-2 px-6 py-3 bg-jade-500 text-white text-sm font-semibold rounded-full hover:bg-jade-400 transition-all duration-300 hover:shadow-lg hover:shadow-jade-500/25"
              >
                Agendar neste endereço
              </MagneticButton>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
