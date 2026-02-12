"use client";

import { Container } from "@/components/ui/Container";
import { StoreBadge } from "@/components/ui/StoreBadge";
import { PhoneMockup } from "@/components/ui/PhoneMockup";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function FinalCTASection() {
  return (
    <section className="relative py-20 sm:py-28 bg-gradient-to-br from-primary-600 via-primary-500 to-tint overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-white/5 blur-3xl" />
      </div>

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <AnimatedSection className="text-center lg:text-left">
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
              Empieza a controlar tus gastos hoy
            </h2>
            <p className="mt-4 text-lg text-white/80 max-w-lg mx-auto lg:mx-0">
              Únete a miles de personas que ya organizan sus finanzas con Savii.
              Es gratis.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
              <StoreBadge store="google" />
              <StoreBadge store="apple" />
            </div>
          </AnimatedSection>

          {/* Mockup */}
          <AnimatedSection delay={0.2} className="flex justify-center">
            <PhoneMockup
              animate
              label="Descarga Savii"
              gradientFrom="from-white/20"
              gradientTo="to-white/5"
            />
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
