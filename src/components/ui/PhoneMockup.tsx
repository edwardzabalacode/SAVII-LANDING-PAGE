"use client";

import { motion, AnimatePresence } from "framer-motion";

interface PhoneMockupProps {
  screenContent?: React.ReactNode;
  label?: string;
  className?: string;
  animate?: boolean;
  gradientFrom?: string;
  gradientTo?: string;
}

export function PhoneMockup({
  screenContent,
  label,
  className = "",
  animate = false,
  gradientFrom = "from-primary-400",
  gradientTo = "to-primary-600",
}: PhoneMockupProps) {
  return (
    <div
      className={`${animate ? "animate-float" : ""} ${className}`}
    >
      <div className="relative mx-auto w-[240px] sm:w-[280px] lg:w-[300px]">
        {/* Phone frame */}
        <div className="rounded-[2.5rem] border-[8px] border-gray-900 bg-gray-900 shadow-2xl overflow-hidden">
          {/* Notch */}
          <div className="absolute top-[8px] left-1/2 -translate-x-1/2 w-[80px] h-[24px] bg-gray-900 rounded-b-2xl z-10" />

          {/* Screen */}
          <div className="aspect-[9/19.5] rounded-[2rem] overflow-hidden bg-white">
            <AnimatePresence mode="wait">
              <motion.div
                key={label}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full"
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

        {/* Bottom indicator */}
        <div className="absolute bottom-[12px] left-1/2 -translate-x-1/2 w-[100px] h-[4px] bg-gray-600 rounded-full z-10" />
      </div>
    </div>
  );
}
