"use client";

import { motion } from "framer-motion";

interface ToggleProps {
  options: [string, string];
  value: boolean;
  onChange: (value: boolean) => void;
}

export function Toggle({ options, value, onChange }: ToggleProps) {
  return (
    <div className="inline-flex items-center bg-gray-100 rounded-full p-1 relative">
      <motion.div
        className="absolute h-[calc(100%-8px)] w-[calc(50%-4px)] bg-white rounded-full shadow-sm"
        animate={{ x: value ? "calc(100% + 4px)" : 4 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      />
      <button
        onClick={() => onChange(false)}
        className={`relative z-10 px-4 py-2 text-sm font-medium rounded-full transition-colors cursor-pointer ${
          !value ? "text-primary-600" : "text-text-muted"
        }`}
      >
        {options[0]}
      </button>
      <button
        onClick={() => onChange(true)}
        className={`relative z-10 px-4 py-2 text-sm font-medium rounded-full transition-colors cursor-pointer ${
          value ? "text-primary-600" : "text-text-muted"
        }`}
      >
        {options[1]}
      </button>
    </div>
  );
}
