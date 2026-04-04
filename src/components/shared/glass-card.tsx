"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function GlassCard({ children, className, hover = true }: GlassCardProps) {
  return (
    <motion.div
      className={cn(
        "glass rounded-2xl p-6 relative overflow-hidden",
        hover && "transition-all duration-300",
        className
      )}
      whileHover={
        hover
          ? {
              scale: 1.02,
              boxShadow: "0 20px 60px rgba(42, 157, 110, 0.15)",
            }
          : undefined
      }
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}
