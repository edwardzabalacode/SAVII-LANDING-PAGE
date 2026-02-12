"use client";

import { type LucideIcon } from "lucide-react";

interface TabProps {
  active: boolean;
  icon: LucideIcon;
  label: string;
  onClick: () => void;
}

export function Tab({ active, icon: Icon, label, onClick }: TabProps) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium whitespace-nowrap transition-all duration-200 cursor-pointer ${
        active
          ? "bg-primary-500 text-white shadow-md shadow-primary-500/25"
          : "bg-white text-text-secondary hover:bg-primary-50 hover:text-primary-600 border border-border"
      }`}
    >
      <Icon className="h-4 w-4" />
      {label}
    </button>
  );
}
