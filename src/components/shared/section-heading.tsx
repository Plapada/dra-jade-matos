"use client";

import { motion } from "framer-motion";
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
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        align === "center" && "text-center",
        className
      )}
    >
      {badge && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className={cn(
            "inline-block text-xs font-semibold uppercase tracking-[0.2em] mb-4 px-4 py-1.5 rounded-full",
            light
              ? "text-jade-200 bg-white/10"
              : "text-jade-600 bg-jade-50"
          )}
        >
          {badge}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className={cn(
          "font-serif text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight",
          light ? "text-white" : "text-navy-900"
        )}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
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
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className={cn(
          "mt-6 h-0.5 w-16 origin-left",
          align === "center" && "mx-auto",
          light
            ? "bg-gradient-to-r from-jade-300 to-transparent"
            : "bg-gradient-to-r from-jade-500 to-rose-400"
        )}
      />
    </div>
  );
}
