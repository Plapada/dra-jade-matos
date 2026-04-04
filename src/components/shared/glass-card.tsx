"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import { useRef, type ReactNode, type MouseEvent } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function GlassCard({ children, className, hover = true }: GlassCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 400, damping: 30 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), springConfig);
  const glareOpacity = useSpring(0, springConfig);

  const handleMouse = (e: MouseEvent) => {
    if (!hover || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
    glareOpacity.set(0.12);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
    glareOpacity.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      style={{
        rotateX: hover ? rotateX : 0,
        rotateY: hover ? rotateY : 0,
        transformStyle: "preserve-3d",
      }}
      className={cn(
        "glass rounded-2xl p-6 relative overflow-hidden",
        hover && "transition-shadow duration-300 cursor-pointer",
        className
      )}
      whileHover={
        hover
          ? {
              boxShadow: "0 25px 60px rgba(42, 157, 110, 0.15)",
              borderColor: "rgba(42, 157, 110, 0.3)",
            }
          : undefined
      }
      transition={{ duration: 0.3 }}
    >
      {children}
      {hover && (
        <motion.div
          className="absolute inset-0 rounded-[inherit] pointer-events-none"
          style={{
            opacity: glareOpacity,
            background: "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.5), transparent 60%)",
          }}
        />
      )}
    </motion.div>
  );
}
