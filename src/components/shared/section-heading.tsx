"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
  light?: boolean;
}

export function SectionHeading({
  badge,
  title,
  subtitle,
  className,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "start 0.4"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [40, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);
  const lineWidth = useTransform(scrollYProgress, [0.3, 0.8], [0, 64]);

  const words = title.split(" ");

  return (
    <div
      ref={ref}
      className={cn(
        "mb-12 md:mb-16",
        align === "center" && "text-center",
        className
      )}
    >
      {badge && (
        <motion.span
          style={{ opacity, y }}
          className={cn(
            "inline-block text-xs font-semibold uppercase tracking-[0.2em] mb-4 px-4 py-1.5 rounded-full",
            light
              ? "text-jade-200 bg-white/10 border border-white/10"
              : "text-jade-600 bg-jade-50 border border-jade-100"
          )}
        >
          {badge}
        </motion.span>
      )}
      <motion.h2
        style={{ scale }}
        className={cn(
          "font-serif text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight",
          light ? "text-white" : "text-navy-900"
        )}
      >
        {words.map((word, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{
              duration: 0.5,
              delay: i * 0.06,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="inline-block mr-[0.25em]"
          >
            {word}
          </motion.span>
        ))}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className={cn(
            "mt-4 text-lg md:text-xl max-w-2xl",
            align === "center" && "mx-auto",
            light ? "text-white/70" : "text-navy-700/60"
          )}
        >
          {subtitle}
        </motion.p>
      )}
      <motion.div
        style={{ width: lineWidth }}
        className={cn(
          "mt-6 h-0.5 origin-left",
          align === "center" && "mx-auto",
          light
            ? "bg-gradient-to-r from-jade-300 to-transparent"
            : "bg-gradient-to-r from-jade-500 to-rose-400"
        )}
      />
    </div>
  );
}
