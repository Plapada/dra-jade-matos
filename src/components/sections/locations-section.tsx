"use client";

import { MapPin, Phone, Clock } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { FadeIn } from "@/components/shared/fade-in";
import { LOCATIONS, WHATSAPP_URL } from "@/lib/constants";

export function LocationsSection() {
  return (
    <section id="localizacao" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grain" style={{ background: "linear-gradient(135deg, #1a2744 0%, #141e36 50%, #090e1a 100%)" }} />

      {/* Decorative */}
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
          {LOCATIONS.map((loc, i) => (
            <FadeIn
              key={i}
              direction={i === 0 ? "left" : "right"}
              delay={i * 0.15}
            >
              <div className="glass-dark rounded-2xl p-8 h-full">
                <h3 className="font-serif text-xl font-semibold text-white mb-6">
                  {loc.name}
                </h3>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-jade-400 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-white/80 text-sm">{loc.address}</p>
                      <p className="text-white/50 text-sm">{loc.city}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-jade-400 shrink-0" />
                    <p className="text-white/80 text-sm">{loc.phone}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-jade-400 shrink-0" />
                    <p className="text-white/80 text-sm">{loc.hours}</p>
                  </div>
                </div>

                {/* Map embed */}
                <div className="rounded-xl overflow-hidden h-48 bg-navy-700/50 border border-white/5">
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

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-jade-500 text-white text-sm font-semibold rounded-full hover:bg-jade-400 transition-all duration-300 hover:shadow-lg hover:shadow-jade-500/25"
                >
                  Agendar neste endereço
                </a>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
