"use client";

import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { StoreBadge } from "@/components/ui/StoreBadge";
import { StatCard } from "@/components/ui/StatCard";
import { PhoneMockup } from "@/components/ui/PhoneMockup";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { stats } from "@/data/stats";
import { Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative pt-28 sm:pt-32 pb-16 sm:pb-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-primary-100/40 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-primary-200/20 blur-3xl" />
      </div>

      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text content */}
          <AnimatedSection className="text-center lg:text-left">
            <Badge className="mb-6">
              <Sparkles className="h-3.5 w-3.5" />
              Potenciado con Inteligencia Artificial
            </Badge>

            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight text-text-primary">
              Controla tus gastos{" "}
              <span className="text-gradient">con inteligencia.</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-text-secondary max-w-lg mx-auto lg:mx-0 leading-relaxed">
              La app que escucha tu voz, organiza tus finanzas y te muestra
              hacia dónde va tu dinero. Disponible en español, inglés y
              portugués.
            </p>

            {/* Store badges */}
            <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
              <StoreBadge store="google" />
              <StoreBadge store="apple" />
            </div>
          </AnimatedSection>

          {/* Phone mockup */}
          <AnimatedSection delay={0.2} className="flex justify-center">
            <PhoneMockup
              animate
              label="Pantalla principal de Savii"
              gradientFrom="from-primary-500"
              gradientTo="to-tint"
            />
          </AnimatedSection>
        </div>

        {/* Stats row */}
        <AnimatedSection delay={0.4} className="mt-16 sm:mt-20">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto bg-white rounded-2xl shadow-lg shadow-primary-500/5 p-4">
            {stats.map((stat) => (
              <StatCard
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                iconName={stat.iconName}
              />
            ))}
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
