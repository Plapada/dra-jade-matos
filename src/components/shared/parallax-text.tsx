"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface ParallaxTextProps {
  children: string;
  className?: string;
  baseVelocity?: number;
}

export function ParallaxText({ children, className, baseVelocity = -2 }: ParallaxTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, baseVelocity * 200]);

  return (
    <div ref={ref} className="overflow-hidden py-4">
      <motion.div style={{ x }} className={cn("flex whitespace-nowrap gap-8", className)}>
        {Array.from({ length: 4 }).map((_, i) => (
          <span key={i} className="inline-block shrink-0">
            {children}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
