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

const currenciesRow1 = [
  { symbol: "$", code: "USD", flag: "🇺🇸", colors: ["#B22234", "#3C3B6E"] },
  { symbol: "€", code: "EUR", flag: "🇪🇺", colors: ["#003399", "#FFCC00"] },
  { symbol: "£", code: "GBP", flag: "🇬🇧", colors: ["#C8102E", "#012169"] },
  { symbol: "¥", code: "JPY", flag: "🇯🇵", colors: ["#BC002D", "#BC002D"] },
  { symbol: "₹", code: "INR", flag: "🇮🇳", colors: ["#FF9933", "#138808"] },
  { symbol: "R$", code: "BRL", flag: "🇧🇷", colors: ["#009739", "#FEDD00"] },
  { symbol: "₩", code: "KRW", flag: "🇰🇷", colors: ["#C60C30", "#003478"] },
  { symbol: "CHF", code: "CHF", flag: "🇨🇭", colors: ["#D52B1E", "#D52B1E"] },
  { symbol: "A$", code: "AUD", flag: "🇦🇺", colors: ["#002868", "#C8102E"] },
  { symbol: "C$", code: "CAD", flag: "🇨🇦", colors: ["#FF0000", "#FF0000"] },
];

const currenciesRow2 = [
  { symbol: "S/", code: "PEN", flag: "🇵🇪", colors: ["#D91023", "#D91023"] },
  { symbol: "₱", code: "PHP", flag: "🇵🇭", colors: ["#0038A8", "#CE1126"] },
  { symbol: "฿", code: "THB", flag: "🇹🇭", colors: ["#A51931", "#2D2A4A"] },
  { symbol: "₫", code: "VND", flag: "🇻🇳", colors: ["#DA251D", "#FFCD00"] },
  { symbol: "zł", code: "PLN", flag: "🇵🇱", colors: ["#DC143C", "#DC143C"] },
  { symbol: "Kč", code: "CZK", flag: "🇨🇿", colors: ["#11457E", "#D7141A"] },
  { symbol: "$", code: "MXN", flag: "🇲🇽", colors: ["#006341", "#CE1126"] },
  { symbol: "$", code: "COP", flag: "🇨🇴", colors: ["#FCD116", "#003893"] },
  { symbol: "$", code: "ARS", flag: "🇦🇷", colors: ["#74ACDF", "#74ACDF"] },
  { symbol: "$", code: "CLP", flag: "🇨🇱", colors: ["#0039A6", "#D52B1E"] },
];

interface CurrencyItem {
  symbol: string;
  code: string;
  flag: string;
  colors: string[];
}

function CurrencyCard({ symbol, code, flag, colors }: CurrencyItem) {
  return (
    <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-2xl px-5 py-3 border border-white/60 shadow-sm flex-shrink-0">
      <span className="text-2xl leading-none">{flag}</span>
      <div className="flex items-baseline gap-1.5">
        <span
          className="font-display font-bold text-lg bg-clip-text text-transparent"
          style={{
            backgroundImage: `linear-gradient(135deg, ${colors[0]}, ${colors[1]})`,
          }}
        >
          {symbol}
        </span>
        <span className="text-text-muted text-xs">{code}</span>
      </div>
    </div>
  );
}

function Marquee({
  items,
  reverse = false,
  duration = 35,
}: {
  items: CurrencyItem[];
  reverse?: boolean;
  duration?: number;
}) {
  return (
    <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div
        className="flex gap-4"
        style={{
          width: "max-content",
          animation: `${reverse ? "marquee-reverse" : "marquee"} ${duration}s linear infinite`,
        }}
      >
        {[...items, ...items].map((c, i) => (
          <CurrencyCard key={`${c.code}-${i}`} {...c} />
        ))}
      </div>
    </div>
  );
}

export function MultiLangCurrencySection() {
  return (
    <section className="relative py-20 sm:py-28 bg-surface-alt overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 right-1/4 w-[500px] h-[500px] rounded-full bg-primary-200/25 blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-tint/10 blur-[100px]" />
      </div>

      <Container>
        <AnimatedSection>
          <SectionTitle
            badge="Global"
            title="Tu idioma, tu moneda"
            subtitle="Savii se adapta a ti, sin importar dónde estés."
          />
        </AnimatedSection>

        {/* Languages */}
        <AnimatedSection delay={0.1} className="mb-14">
          <div className="flex items-center justify-center gap-2 text-primary-500 mb-6">
            <Globe className="h-5 w-5" />
            <span className="font-display font-semibold">3 Idiomas</span>
          </div>
          <div className="flex gap-5 justify-center">
            {languages.map((lang) => (
              <div
                key={lang.code}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg shadow-primary-500/5 border border-white/50 text-center w-32"
              >
                <div className="text-5xl mb-3">{lang.flag}</div>
                <div className="font-display font-bold text-text-primary">
                  {lang.code}
                </div>
                <div className="text-text-muted text-sm">{lang.name}</div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Currencies marquee */}
        <AnimatedSection delay={0.2}>
          <div className="flex items-center justify-center gap-2 text-primary-500 mb-6">
            <Coins className="h-5 w-5" />
            <span className="font-display font-semibold">+70 Monedas</span>
          </div>

          <div className="space-y-4">
            <Marquee items={currenciesRow1} duration={35} />
            <Marquee items={currenciesRow2} reverse duration={40} />
          </div>

          <p className="text-center text-text-muted text-sm mt-6">
            Y muchas más...
          </p>
        </AnimatedSection>
      </Container>
    </section>
  );
}
