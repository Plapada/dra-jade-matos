"use client";

import { useEffect, useRef } from "react";
import { Star, Quote } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { FadeIn } from "@/components/shared/fade-in";
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
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <section id="depoimentos" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-cream-50 grain" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-jade-200/50 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Depoimentos"
          title="O que minhas pacientes dizem"
          subtitle="A confiança e o carinho das minhas pacientes são minha maior recompensa"
        />

        <FadeIn>
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
                  <div className="h-full p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-jade-100/30 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <Quote className="h-8 w-8 text-jade-200 mb-4" />
                    <p className="text-sm text-navy-700/70 leading-relaxed mb-6 italic">
                      &ldquo;{testimonial.text}&rdquo;
                    </p>
                    <div className="mt-auto">
                      <div className="flex gap-0.5 mb-2">
                        {Array.from({ length: testimonial.rating }).map(
                          (_, j) => (
                            <Star
                              key={j}
                              className="h-3.5 w-3.5 fill-amber-400 text-amber-400"
                            />
                          )
                        )}
                      </div>
                      <p className="font-semibold text-sm text-navy-900">
                        {testimonial.name}
                      </p>
                      <p className="text-xs text-navy-700/40">Paciente</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-2 mt-8">
              <CarouselPrevious className="static translate-y-0 bg-white/80 border-jade-200/30 hover:bg-jade-50 hover:border-jade-300" />
              <CarouselNext className="static translate-y-0 bg-white/80 border-jade-200/30 hover:bg-jade-50 hover:border-jade-300" />
            </div>
          </Carousel>
        </FadeIn>
      </div>
    </section>
  );
}
