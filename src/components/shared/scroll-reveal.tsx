"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
  distance?: number;
  rotate?: number;
  scale?: number;
  blur?: boolean;
}

export function ScrollReveal({
  children,
  className,
  direction = "up",
  distance = 80,
  rotate = 0,
  scale = 1,
  blur = true,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.95", "start 0.3"],
  });

  const dirMap = {
    up: { x: [0, 0], y: [distance, 0] },
    down: { x: [0, 0], y: [-distance, 0] },
    left: { x: [distance, 0], y: [0, 0] },
    right: { x: [-distance, 0], y: [0, 0] },
  };

  const x = useTransform(scrollYProgress, [0, 1], dirMap[direction].x);
  const y = useTransform(scrollYProgress, [0, 1], dirMap[direction].y);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [0, 1]);
  const scaleVal = useTransform(scrollYProgress, [0, 1], [scale === 1 ? 0.92 : scale, 1]);
  const rotateVal = useTransform(scrollYProgress, [0, 1], [rotate, 0]);
  const filterBlur = useTransform(scrollYProgress, [0, 0.5], blur ? [8, 0] : [0, 0]);

  return (
    <motion.div
      ref={ref}
      style={{
        x,
        y,
        opacity,
        scale: scaleVal,
        rotate: rotateVal,
        filter: blur ? filterBlur.get() > 0 ? `blur(${filterBlur.get()}px)` : "none" : "none",
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
