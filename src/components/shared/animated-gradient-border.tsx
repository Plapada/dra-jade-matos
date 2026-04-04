"use client";

import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

interface AnimatedGradientBorderProps {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
}

export function AnimatedGradientBorder({
  children,
  className,
  containerClassName,
}: AnimatedGradientBorderProps) {
  return (
    <div className={cn("relative group rounded-2xl p-[1px] overflow-hidden", containerClassName)}>
      <div className="absolute inset-0 rounded-2xl bg-[conic-gradient(from_var(--border-angle),transparent_20%,var(--color-jade-400)_40%,var(--color-rose-300)_60%,transparent_80%)] animate-border-spin opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ "--border-angle": "0deg" } as any} />
      <div className={cn("relative rounded-2xl bg-white", className)}>
        {children}
      </div>
    </div>
  );
}
