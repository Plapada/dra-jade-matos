"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Info } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { LOCATIONS, WHATSAPP_URL } from "@/lib/constants";
import { MagneticButton } from "@/components/shared/magnetic-button";

type Location = (typeof LOCATIONS)[number] & { phoneAlt?: string; note?: string };

export function LocationsSection() {
  return (
    <section id="localizacao" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 grain" style={{ background: "linear-gradient(135deg, #1a2744 0%, #141e36 50%, #090e1a 100%)" }} />
      <div className="absolute top-0 left-1/3 w-64 h-64 bg-jade-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-rose-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Localização"
          title="Onde me encontrar"
          subtitle="Dois endereços em Salvador para sua comodidade"
          light
        />

        <div className="grid md:grid-cols-2 gap-6 mt-8">
          {(LOCATIONS as readonly Location[]).map((loc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                delay: i * 0.15,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="glass-dark rounded-2xl p-8 h-full group hover:-translate-y-1 hover:shadow-[0_25px_60px_rgba(0,0,0,0.3)] transition-all duration-300"
            >
              <h3 className="font-serif text-xl font-semibold text-white mb-6 group-hover:text-jade-300 transition-colors">
                {loc.name}
              </h3>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3 hover:translate-x-1 transition-transform duration-300">
                  <MapPin className="h-5 w-5 text-jade-400 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-white/80 text-sm">{loc.address}</p>
                    <p className="text-white/50 text-sm">{loc.city}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 hover:translate-x-1 transition-transform duration-300">
                  <Phone className="h-5 w-5 text-jade-400 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-white/80 text-sm">{loc.phone}</p>
                    {loc.phoneAlt && (
                      <p className="text-white/50 text-xs mt-0.5">
                        ou {loc.phoneAlt}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-3 hover:translate-x-1 transition-transform duration-300">
                  <Clock className="h-5 w-5 text-jade-400 shrink-0" />
                  <p className="text-white/80 text-sm">{loc.hours}</p>
                </div>
                {loc.note && (
                  <div className="flex items-start gap-3 pt-1">
                    <Info className="h-4 w-4 text-jade-400/70 mt-0.5 shrink-0" />
                    <p className="text-white/60 text-xs leading-relaxed">
                      {loc.note}
                    </p>
                  </div>
                )}
              </div>

              <div className="rounded-xl overflow-hidden h-48 bg-navy-700/50 border border-white/5 hover:scale-[1.02] transition-transform duration-300">
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
              </div>

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
