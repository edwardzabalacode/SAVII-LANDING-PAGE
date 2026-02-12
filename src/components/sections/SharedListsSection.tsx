"use client";

import { Users, RefreshCw, Shield, Zap } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const benefits = [
  {
    icon: Users,
    text: "Comparte con pareja, familia o roomies",
  },
  {
    icon: RefreshCw,
    text: "Sincronización en tiempo real",
  },
  {
    icon: Shield,
    text: "Código seguro de 6 dígitos",
  },
  {
    icon: Zap,
    text: "Únete a una lista en segundos",
  },
];

function CodeDigit({ digit }: { digit: string }) {
  return (
    <div className="w-12 h-14 sm:w-14 sm:h-16 rounded-xl bg-white border-2 border-primary-200 flex items-center justify-center shadow-sm">
      <span className="font-display font-bold text-2xl text-primary-600">
        {digit}
      </span>
    </div>
  );
}

export function SharedListsSection() {
  const code = "A7B3K9";

  return (
    <section className="py-20 sm:py-28 bg-surface-alt">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Visual */}
          <AnimatedSection>
            <div className="flex flex-col items-center">
              {/* Illustration placeholder */}
              <div className="w-full max-w-sm aspect-square rounded-3xl bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center mb-8">
                <Users className="h-24 w-24 text-primary-400" />
              </div>

              {/* 6-digit code */}
              <div className="flex gap-2">
                {code.split("").map((digit, i) => (
                  <CodeDigit key={i} digit={digit} />
                ))}
              </div>
              <p className="text-sm text-text-muted mt-3">
                Comparte este código para unirse
              </p>
            </div>
          </AnimatedSection>

          {/* Content */}
          <AnimatedSection delay={0.2}>
            <SectionTitle
              title="Listas compartidas"
              subtitle="Controla los gastos en equipo. Cada cambio se sincroniza automáticamente para que todos estén al día."
              align="left"
            />

            <ul className="space-y-5">
              {benefits.map((benefit) => (
                <li key={benefit.text} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center shrink-0">
                    <benefit.icon className="h-5 w-5 text-primary-600" />
                  </div>
                  <span className="text-text-primary font-medium">
                    {benefit.text}
                  </span>
                </li>
              ))}
            </ul>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
