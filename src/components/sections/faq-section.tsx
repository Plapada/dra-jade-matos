"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
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
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const photoY = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const bgY = useTransform(scrollYProgress, [0, 1], ["-2%", "2%"]);

  return (
    <section ref={ref} id="faq" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background with parallax */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 bg-white grain" />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute bottom-0 right-0 w-96 h-96 bg-jade-50/50 rounded-full blur-3xl"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Perguntas Frequentes"
          title="Tire suas dúvidas"
          subtitle="Respostas para as perguntas mais comuns sobre consultas e procedimentos"
        />

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start mt-8">
          {/* Photo with parallax */}
          <FadeIn direction="left" className="lg:col-span-2 hidden lg:block">
            <motion.div style={{ y: photoY }} className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-xl shadow-navy-900/10 sticky top-32">
              <Image
                src="/images/IMG_2279.jpg"
                alt="Dra. Jade Matos com instrumento médico"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="400px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/30 via-transparent to-transparent" />

              {/* Overlay card with hover animation */}
              <motion.div
                whileHover={{ y: -4 }}
                className="absolute bottom-6 left-6 right-6 glass-strong rounded-xl p-4"
              >
                <p className="text-sm font-semibold text-navy-900">
                  Tem mais dúvidas?
                </p>
                <p className="text-xs text-navy-700/60 mt-1">
                  Entre em contato pelo WhatsApp e terei prazer em responder
                </p>
              </motion.div>
            </motion.div>
          </FadeIn>

          {/* Accordion with staggered items */}
          <div className="lg:col-span-3">
            <Accordion className="space-y-3">
              {faqItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{
                    delay: i * 0.06,
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <AccordionItem
                    value={`item-${i}`}
                    className="border border-jade-100/30 rounded-xl px-6 bg-white/60 backdrop-blur-sm data-[state=open]:shadow-md data-[state=open]:border-jade-200/50 transition-all duration-300 hover:border-jade-200/40 group"
                  >
                    <AccordionTrigger className="text-left font-semibold text-navy-900 hover:text-jade-600 transition-colors text-sm py-5 [&[data-state=open]]:text-jade-600">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-navy-700/70 leading-relaxed pb-5">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
