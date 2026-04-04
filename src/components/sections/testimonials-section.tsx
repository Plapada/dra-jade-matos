"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { testimonials } from "@/data/testimonials";

export function TestimonialsSection() {
  const plugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-3%", "3%"]);

  return (
    <section ref={sectionRef} id="depoimentos" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background with parallax */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 bg-cream-50 grain" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-jade-200/50 to-transparent" />

      {/* Floating quotes decoration */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0], opacity: [0.05, 0.1, 0.05] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-20 left-[10%] text-jade-500/10"
      >
        <Quote className="w-32 h-32" />
      </motion.div>
      <motion.div
        animate={{ y: [0, 15, 0], rotate: [0, -8, 0], opacity: [0.05, 0.08, 0.05] }}
        transition={{ duration: 10, repeat: Infinity, delay: 3 }}
        className="absolute bottom-20 right-[10%] text-rose-400/10"
      >
        <Quote className="w-24 h-24" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Depoimentos"
          title="O que minhas pacientes dizem"
          subtitle="A confiança e o carinho das minhas pacientes são minha maior recompensa"
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <Carousel
            plugins={[plugin.current]}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial, i) => (
                <CarouselItem
                  key={i}
                  className="pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <motion.div
                    whileHover={{
                      y: -8,
                      boxShadow: "0 20px 50px rgba(42, 157, 110, 0.1)",
                    }}
                    transition={{ duration: 0.3 }}
                    className="h-full p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-jade-100/30 shadow-sm transition-colors duration-300 group cursor-default"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Quote className="h-8 w-8 text-jade-200 mb-4 group-hover:text-jade-300 transition-colors" />
                    </motion.div>
                    <p className="text-sm text-navy-700/70 leading-relaxed mb-6 italic">
                      &ldquo;{testimonial.text}&rdquo;
                    </p>
                    <div className="mt-auto">
                      <div className="flex gap-0.5 mb-2">
                        {Array.from({ length: testimonial.rating }).map(
                          (_, j) => (
                            <motion.div
                              key={j}
                              initial={{ opacity: 0, scale: 0 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: false }}
                              transition={{ delay: j * 0.05, duration: 0.3 }}
                            >
                              <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                            </motion.div>
                          )
                        )}
                      </div>
                      <p className="font-semibold text-sm text-navy-900">
                        {testimonial.name}
                      </p>
                      <p className="text-xs text-navy-700/40">Paciente</p>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-2 mt-8">
              <CarouselPrevious className="static translate-y-0 bg-white/80 border-jade-200/30 hover:bg-jade-50 hover:border-jade-300 transition-all duration-300 hover:scale-110" />
              <CarouselNext className="static translate-y-0 bg-white/80 border-jade-200/30 hover:bg-jade-50 hover:border-jade-300 transition-all duration-300 hover:scale-110" />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}
