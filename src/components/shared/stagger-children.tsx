"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface StaggerChildrenProps {
  children: ReactNode;
  staggerDelay?: number;
  className?: string;
  once?: boolean;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: (staggerDelay: number) => ({
    opacity: 1,
    transition: {
      staggerChildren: staggerDelay,
      delayChildren: 0.1,
    },
  }),
};

export const staggerItemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  },
};

export function StaggerChildren({
  children,
  staggerDelay = 0.1,
  className,
  once = true,
}: StaggerChildrenProps) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.2 }}
      custom={staggerDelay}
      className={className}
    >
      {children}
    </motion.div>
  );
}
