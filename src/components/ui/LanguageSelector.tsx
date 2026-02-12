"use client";

import { useState, useRef, useEffect } from "react";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { ChevronDown } from "lucide-react";

const localeConfig: Record<string, { flag: string; label: string }> = {
  es: { flag: "🇪🇸", label: "ES" },
  en: { flag: "🇺🇸", label: "EN" },
  pt: { flag: "🇧🇷", label: "PT" },
};

interface LanguageSelectorProps {
  variant?: "light" | "dark";
}

export function LanguageSelector({ variant = "dark" }: LanguageSelectorProps) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function switchLocale(newLocale: string) {
    setOpen(false);
    router.replace(pathname, { locale: newLocale });
  }

  const current = localeConfig[locale];

  const buttonStyles =
    variant === "dark"
      ? "bg-white/10 hover:bg-white/20 text-gray-200"
      : "bg-gray-100 hover:bg-gray-200 text-text-primary";

  const dropdownStyles =
    variant === "dark"
      ? "bg-surface-dark border-white/10"
      : "bg-white border-border shadow-lg";

  const itemStyles =
    variant === "dark"
      ? "text-gray-300 hover:bg-white/10 hover:text-white"
      : "text-text-primary hover:bg-primary-50 hover:text-primary-600";

  const activeStyles =
    variant === "dark"
      ? "bg-white/15 text-white"
      : "bg-primary-50 text-primary-600";

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-medium transition-colors cursor-pointer ${buttonStyles}`}
      >
        <span className="text-base leading-none">{current.flag}</span>
        <span>{current.label}</span>
        <ChevronDown
          className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div
          className={`absolute right-0 top-full mt-2 rounded-xl border overflow-hidden z-50 min-w-[120px] ${dropdownStyles}`}
        >
          {routing.locales.map((loc) => {
            const config = localeConfig[loc];
            const isActive = loc === locale;
            return (
              <button
                key={loc}
                onClick={() => switchLocale(loc)}
                className={`w-full flex items-center gap-2.5 px-4 py-2.5 text-sm font-medium transition-colors cursor-pointer ${
                  isActive ? activeStyles : itemStyles
                }`}
              >
                <span className="text-base leading-none">{config.flag}</span>
                <span>{config.label}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
