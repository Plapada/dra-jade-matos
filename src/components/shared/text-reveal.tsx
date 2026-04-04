"use client";

import { motion } from "framer-motion";

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
}

export function TextReveal({
  text,
  className,
  delay = 0,
  as: Tag = "h1",
}: TextRevealProps) {
  const words = text.split(" ");

  return (
    <Tag className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            duration: 0.4,
            delay: delay + i * 0.08,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="inline-block mr-[0.3em]"
        >
          {word}
        </motion.span>
      ))}
    </Tag>
  );
}
