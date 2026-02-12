"use client";

import { Globe, Coins } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const languages = [
  { code: "ES", name: "Español", flag: "🇪🇸" },
  { code: "EN", name: "English", flag: "🇺🇸" },
  { code: "PT", name: "Português", flag: "🇧🇷" },
];

const currencies = [
  "$", "€", "£", "¥", "₹", "R$", "₩", "CHF",
  "A$", "C$", "S/", "₱", "฿", "₫", "zł", "Kč",
];

export function MultiLangCurrencySection() {
  return (
    <section className="py-20 sm:py-28 bg-surface-alt">
      <Container>
        <AnimatedSection>
          <SectionTitle
            badge="Global"
            title="Tu idioma, tu moneda"
            subtitle="Savii se adapta a ti, sin importar dónde estés."
          />
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 max-w-5xl mx-auto">
          {/* Languages */}
          <AnimatedSection delay={0.1}>
            <div className="text-center md:text-left">
              <div className="inline-flex items-center gap-2 text-primary-500 mb-4">
                <Globe className="h-5 w-5" />
                <span className="font-display font-semibold">3 Idiomas</span>
              </div>
              <div className="flex gap-4 justify-center md:justify-start">
                {languages.map((lang) => (
                  <div
                    key={lang.code}
                    className="bg-white rounded-2xl p-5 shadow-sm border border-border text-center w-28"
                  >
                    <div className="text-4xl mb-2">{lang.flag}</div>
                    <div className="font-display font-bold text-text-primary text-sm">
                      {lang.code}
                    </div>
                    <div className="text-text-muted text-xs">{lang.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Currencies */}
          <AnimatedSection delay={0.2}>
            <div className="text-center md:text-left">
              <div className="inline-flex items-center gap-2 text-primary-500 mb-4">
                <Coins className="h-5 w-5" />
                <span className="font-display font-semibold">+70 Monedas</span>
              </div>
              <div className="grid grid-cols-4 gap-3">
                {currencies.map((symbol) => (
                  <div
                    key={symbol}
                    className="bg-white rounded-xl p-3 shadow-sm border border-border text-center"
                  >
                    <span className="font-display font-bold text-lg text-primary-600">
                      {symbol}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
