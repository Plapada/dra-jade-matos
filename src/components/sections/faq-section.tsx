"use client";

import Image from "next/image";
import { SectionHeading } from "@/components/shared/section-heading";
import { FadeIn } from "@/components/shared/fade-in";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqItems } from "@/data/faq";

export function FaqSection() {
  return (
    <section id="faq" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-white grain" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-jade-50/50 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Perguntas Frequentes"
          title="Tire suas dúvidas"
          subtitle="Respostas para as perguntas mais comuns sobre consultas e procedimentos"
        />

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start mt-8">
          {/* Photo */}
          <FadeIn direction="left" className="lg:col-span-2 hidden lg:block">
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-xl shadow-navy-900/10 sticky top-32">
              <Image
                src="/images/IMG_2279.jpg"
                alt="Dra. Jade Matos com instrumento médico"
                fill
                className="object-cover"
                sizes="400px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/30 via-transparent to-transparent" />

              {/* Overlay card */}
              <div className="absolute bottom-6 left-6 right-6 glass-strong rounded-xl p-4">
                <p className="text-sm font-semibold text-navy-900">
                  Tem mais dúvidas?
                </p>
                <p className="text-xs text-navy-700/60 mt-1">
                  Entre em contato pelo WhatsApp e terei prazer em responder
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Accordion */}
          <FadeIn direction="right" className="lg:col-span-3">
            <Accordion className="space-y-3">
              {faqItems.map((item, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="border border-jade-100/30 rounded-xl px-6 bg-white/60 backdrop-blur-sm data-[state=open]:shadow-md data-[state=open]:border-jade-200/50 transition-all duration-300"
                >
                  <AccordionTrigger className="text-left font-semibold text-navy-900 hover:text-jade-600 transition-colors text-sm py-5 [&[data-state=open]]:text-jade-600">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-navy-700/70 leading-relaxed pb-5">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
