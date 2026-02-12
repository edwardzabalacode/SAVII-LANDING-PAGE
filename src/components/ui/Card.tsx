"use client";

import { motion } from "framer-motion";

interface CardProps {
  children: React.ReactNode;
  highlighted?: boolean;
  className?: string;
}

export function Card({
  children,
  highlighted = false,
  className = "",
}: CardProps) {
  return (
    <motion.div
      className={`rounded-2xl p-6 sm:p-8 ${
        highlighted
          ? "border-2 border-primary-500 bg-white shadow-lg shadow-primary-500/10"
          : "border border-border bg-white shadow-sm"
      } ${className}`}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
    >
      {children}
    </motion.div>
  );
}
