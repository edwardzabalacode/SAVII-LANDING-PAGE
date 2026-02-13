"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download } from "lucide-react";
import { useTranslations } from "next-intl";
import { navLinks } from "@/data/navigation";
import { Button } from "@/components/ui/Button";
import { LanguageSelector } from "@/components/ui/LanguageSelector";

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileDrawer({ isOpen, onClose }: MobileDrawerProps) {
  const t = useTranslations("Navbar");
  const tNav = useTranslations("Navigation");

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 lg:hidden"
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 w-[280px] bg-white z-50 lg:hidden shadow-2xl"
          >
            <div className="flex flex-col h-full p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <span className="font-display font-bold text-xl text-text-primary tracking-tight">
                  Savii
                </span>
                <button
                  onClick={onClose}
                  className="p-2 text-text-muted hover:text-text-primary cursor-pointer"
                  aria-label={t("closeMenu")}
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Nav Links */}
              <nav className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={onClose}
                    className="px-4 py-3 rounded-xl text-text-primary font-medium hover:bg-primary-50 hover:text-primary-600 transition-colors"
                  >
                    {tNav(link.key)}
                  </a>
                ))}
              </nav>

              {/* Language Selector */}
              <div className="mt-6">
                <LanguageSelector variant="light" />
              </div>

              {/* CTA */}
              <div className="mt-auto pt-6 border-t border-border">
                <Button href="https://play.google.com/store/apps/details?id=com.saviiapp.savii&hl=es_CO" className="w-full">
                  <Download className="h-4 w-4" />
                  {t("downloadApp")}
                </Button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
