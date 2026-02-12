"use client";

import { motion, AnimatePresence } from "framer-motion";

interface PhoneMockupProps {
  screenContent?: React.ReactNode;
  label?: string;
  className?: string;
  animate?: boolean;
  gradientFrom?: string;
  gradientTo?: string;
  size?: "sm" | "default";
}

export function PhoneMockup({
  screenContent,
  label,
  className = "",
  animate = false,
  gradientFrom = "from-primary-400",
  gradientTo = "to-primary-600",
  size = "default",
}: PhoneMockupProps) {
  const sizeClass =
    size === "sm"
      ? "w-[180px] sm:w-[200px] lg:w-[220px]"
      : "w-[240px] sm:w-[280px] lg:w-[300px]";

  return (
    <div
      className={`${animate ? "animate-float" : ""} ${className}`}
    >
      <div className={`relative mx-auto ${sizeClass}`}>
        {/* Phone frame (Android style) */}
        <div className="rounded-[2rem] border-[6px] border-gray-900 bg-gray-900 shadow-2xl overflow-hidden">
          {/* Punch-hole camera */}
          <div className="absolute top-[14px] left-1/2 -translate-x-1/2 w-[10px] h-[10px] bg-gray-800 rounded-full z-10 ring-1 ring-gray-700" />

          {/* Screen */}
          <div className="aspect-[9/19.5] rounded-[1.5rem] overflow-hidden bg-white">
            <AnimatePresence mode="wait">
              <motion.div
                key={label}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="relative w-full h-full"
              >
                {screenContent || (
                  <div
                    className={`w-full h-full bg-gradient-to-br ${gradientFrom} ${gradientTo} flex items-center justify-center p-6`}
                  >
                    <span className="text-white/80 text-sm font-medium text-center">
                      {label || "Savii App"}
                    </span>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
